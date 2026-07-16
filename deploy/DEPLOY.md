# Deploy — haorui-wang-rae-portfolio

Static Vite site for Haorui (Rae) Wang’s DS portfolio.

## Domain

**Confirmed:** `haorui-wang-rae-portfolio.com` (registered via Cloudflare Registrar).

### DNS (Cloudflare — grey cloud / DNS only)

Add A records if missing:

| Type | Name | Content |
|------|------|---------|
| A | `@` | `5.161.58.191` |
| A | `www` | `5.161.58.191` |

Then from this repo:

```bash
./deploy/ship.sh
```

Default `PORTFOLIO_DOMAIN` is `haorui-wang-rae-portfolio.com`.

Caddy on the VPS serves `/var/www/hae-portfolio` for that host; HTTPS (Let’s Encrypt) succeeds only after DNS A records point here.

## Local

```bash
cd ~/Projects/haorui-wang-rae-portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## VPS

| Item | Value |
|------|--------|
| Host | `root@5.161.58.191` (Hetzner) |
| Static files | `/var/www/hae-portfolio` |
| Also on box | `alfredaitech.com`, `rae-trading.com` |

### Manual Caddy snippet

```caddy
haorui-wang-rae-portfolio.com, www.haorui-wang-rae-portfolio.com {
	encode gzip
	root * /var/www/hae-portfolio
	try_files {path} /index.html
	file_server
}
```
