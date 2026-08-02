#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  exec sudo --preserve-env=HEXTUNNEL_WEB_BRANCH,NEXT_PUBLIC_SITE_URL bash "$0" "$@"
fi

REPO_URL="${HEXTUNNEL_WEB_REPO_URL:-https://github.com/Gh0stDeveloper/HexTunnelWeb.git}"
BRANCH="${HEXTUNNEL_WEB_BRANCH:-main}"
SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://hextunnel.duckdns.org}"
SOURCE_ROOT="${HEXTUNNEL_WEB_SOURCE_ROOT:-/opt/hextunnel-web/source}"
DEPLOY_ROOT="${HEXTUNNEL_WEB_DEPLOY_ROOT:-/var/www/hextunnel-web}"
RELEASES_DIR="$DEPLOY_ROOT/releases"
CURRENT_LINK="$DEPLOY_ROOT/current"
KEEP_RELEASES="${HEXTUNNEL_WEB_KEEP_RELEASES:-5}"

for command in git node npm rsync; do
  command -v "$command" >/dev/null 2>&1 || {
    printf 'Falta el comando requerido: %s\n' "$command" >&2
    exit 1
  }
done

install -d -m 755 "$SOURCE_ROOT" "$RELEASES_DIR"

if [[ -d "$SOURCE_ROOT/.git" ]]; then
  git -C "$SOURCE_ROOT" fetch --prune origin
  git -C "$SOURCE_ROOT" checkout -B "$BRANCH" "origin/$BRANCH"
  git -C "$SOURCE_ROOT" reset --hard "origin/$BRANCH"
  git -C "$SOURCE_ROOT" clean -fdx
else
  rm -rf "$SOURCE_ROOT"
  git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$SOURCE_ROOT"
fi

cd "$SOURCE_ROOT"
npm install --no-audit --no-fund
NEXT_PUBLIC_SITE_URL="$SITE_URL" npm run typecheck
NEXT_PUBLIC_SITE_URL="$SITE_URL" npm run build

test -f out/index.html
test -f out/robots.txt
test -f out/sitemap.xml

commit_sha="$(git rev-parse --short=12 HEAD)"
release_id="$(date -u +%Y%m%dT%H%M%SZ)-$commit_sha"
release_dir="$RELEASES_DIR/$release_id"
next_link="$DEPLOY_ROOT/.current-$release_id"

install -d -m 755 "$release_dir"
rsync -a --delete out/ "$release_dir/"
chown -R www-data:www-data "$release_dir"
find "$release_dir" -type d -exec chmod 755 {} +
find "$release_dir" -type f -exec chmod 644 {} +

ln -s "$release_dir" "$next_link"
mv -Tf "$next_link" "$CURRENT_LINK"

if command -v nginx >/dev/null 2>&1; then
  nginx -t
  systemctl reload nginx
fi

mapfile -t old_releases < <(
  find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
    | sort -nr \
    | awk -v keep="$KEEP_RELEASES" 'NR > keep {sub(/^[^ ]+ /, ""); print}'
)

for old_release in "${old_releases[@]:-}"; do
  [[ -n "$old_release" ]] && rm -rf -- "$old_release"
done

printf 'Hex Tunnel Web desplegado correctamente.\n'
printf 'Release: %s\n' "$release_id"
printf 'Dominio: %s\n' "$SITE_URL"
printf 'Ruta activa: %s -> %s\n' "$CURRENT_LINK" "$release_dir"
