#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${HETZNER_HOST:-root@5.161.58.191}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/hae-portfolio}"
# Confirmed domain: haorui-wang-rae-portfolio.com
DOMAIN="${PORTFOLIO_DOMAIN:-haorui-wang-rae-portfolio.com}"

echo "==> Building"
cd "$ROOT"
npm run build

# Bust HTML cache: unique comment each deploy so etag/content always changes
BUILD_ID="$(date -u +%Y%m%d%H%M%S)"
if [[ -f "$ROOT/dist/index.html" ]]; then
  printf '\n<!-- deploy %s -->\n' "$BUILD_ID" >> "$ROOT/dist/index.html"
fi

echo "==> Ensuring remote dir $REMOTE_DIR"
ssh "$HOST" "mkdir -p '$REMOTE_DIR'"

echo "==> Syncing dist/"
rsync -az --delete "$ROOT/dist/" "$HOST:$REMOTE_DIR/"

echo "==> Ensuring Caddy site for $DOMAIN (+ www) with no-cache HTML"
ssh "$HOST" bash -s -- "$DOMAIN" "$REMOTE_DIR" <<'REMOTE'
set -euo pipefail
DOMAIN="$1"
REMOTE_DIR="$2"
CADDY=/etc/caddy/Caddyfile
MARKER_START="# BEGIN hae-portfolio"
MARKER_END="# END hae-portfolio"

# Drop any previous managed block
if grep -qF "$MARKER_START" "$CADDY"; then
  tmp=$(mktemp)
  awk -v start="$MARKER_START" -v end="$MARKER_END" '
    $0 == start {skip=1; next}
    $0 == end {skip=0; next}
    !skip {print}
  ' "$CADDY" > "$tmp"
  mv "$tmp" "$CADDY"
fi

# Drop legacy unlabeled site block for this domain (brace-balanced)
if grep -qF "$DOMAIN" "$CADDY"; then
  python3 - "$CADDY" "$DOMAIN" <<'PY'
import sys
path, domain = sys.argv[1], sys.argv[2]
text = open(path).read().splitlines(True)
out, i = [], 0
while i < len(text):
    line = text[i]
    if domain in line and "{" in line:
        depth = line.count("{") - line.count("}")
        i += 1
        while i < len(text) and depth > 0:
            depth += text[i].count("{") - text[i].count("}")
            i += 1
        continue
    out.append(line)
    i += 1
open(path, "w").writelines(out)
PY
  echo "Removed legacy Caddy block for $DOMAIN"
fi

cat >> "$CADDY" <<EOF

$MARKER_START
$DOMAIN, www.$DOMAIN {
	encode gzip
	root * $REMOTE_DIR
	try_files {path} /index.html
	file_server
	@assets path /assets/*
	header @assets Cache-Control "public, max-age=31536000, immutable"
	header /index.html Cache-Control "no-cache, no-store, must-revalidate"
	header / Cache-Control "no-cache, no-store, must-revalidate"
}
$MARKER_END
EOF

caddy validate --config "$CADDY"
chown root:caddy "$CADDY" 2>/dev/null || true
chmod 644 "$CADDY"
systemctl reload caddy
echo "Caddy reloaded with no-cache HTML headers."
REMOTE

echo "==> Smoke check"
curl -sSI --max-time 15 -H 'Cache-Control: no-cache' "https://$DOMAIN/" | head -n 20 || true
LIVE_JS=$(curl -sS --max-time 15 -H 'Cache-Control: no-cache' "https://$DOMAIN/" | grep -oE '/assets/index-[^"]+\.js' | head -1 || true)
if [[ -n "$LIVE_JS" ]]; then
  echo "Live bundle: $LIVE_JS"
  curl -sS --max-time 15 "https://$DOMAIN$LIVE_JS" | grep -o 'Forsyth County High School' | head -1 || true
fi
echo "Deployed to $HOST:$REMOTE_DIR for https://$DOMAIN"
