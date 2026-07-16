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

echo "==> Ensuring remote dir $REMOTE_DIR"
ssh "$HOST" "mkdir -p '$REMOTE_DIR'"

echo "==> Syncing dist/"
rsync -az --delete "$ROOT/dist/" "$HOST:$REMOTE_DIR/"

echo "==> Ensuring Caddy site for $DOMAIN (+ www)"
ssh "$HOST" bash -s -- "$DOMAIN" "$REMOTE_DIR" <<'REMOTE'
set -euo pipefail
DOMAIN="$1"
REMOTE_DIR="$2"
CADDY=/etc/caddy/Caddyfile

if grep -qF "$DOMAIN" "$CADDY"; then
  echo "Caddy already mentions $DOMAIN — leaving Caddyfile unchanged."
else
  cat >> "$CADDY" <<EOF

$DOMAIN, www.$DOMAIN {
	encode gzip
	root * $REMOTE_DIR
	try_files {path} /index.html
	file_server
}
EOF
  echo "Appended site block for $DOMAIN"
fi

caddy validate --config "$CADDY"
systemctl reload caddy
echo "Caddy reloaded."
REMOTE

echo "==> Smoke check (fails until DNS A → 5.161.58.191)"
curl -sSI --max-time 15 "https://$DOMAIN/" | head -n 15 || true
echo "Deployed to $HOST:$REMOTE_DIR for https://$DOMAIN"
