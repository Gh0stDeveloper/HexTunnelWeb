#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  exec sudo --preserve-env=HEXTUNNEL_WEB_BRANCH,NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,NEXT_PUBLIC_UMAMI_SCRIPT_URL,NEXT_PUBLIC_UMAMI_WEBSITE_ID,HEXTUNNEL_WEB_ENV_FILE bash "$0" "$@"
fi

REPO_URL="${HEXTUNNEL_WEB_REPO_URL:-https://github.com/Gh0stDeveloper/HexTunnelWeb.git}"
BRANCH="${HEXTUNNEL_WEB_BRANCH:-main}"
SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://hextunnel.duckdns.org}"
SOURCE_ROOT="${HEXTUNNEL_WEB_SOURCE_ROOT:-/opt/hextunnel-web/source}"
DEPLOY_ROOT="${HEXTUNNEL_WEB_DEPLOY_ROOT:-/var/www/hextunnel-web}"
RELEASES_DIR="$DEPLOY_ROOT/releases"
CURRENT_LINK="$DEPLOY_ROOT/current"
KEEP_RELEASES="${HEXTUNNEL_WEB_KEEP_RELEASES:-5}"
ENV_FILE="${HEXTUNNEL_WEB_ENV_FILE:-/etc/hextunnel-web.env}"

if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
  SITE_URL="${NEXT_PUBLIC_SITE_URL:-$SITE_URL}"
fi

node_major() {
  node -p 'Number(process.versions.node.split(".")[0])' 2>/dev/null || printf '0'
}

if ! command -v node >/dev/null 2>&1 || (( $(node_major) < 20 )); then
  for candidate in "${NVM_DIR:-}" /root/.nvm; do
    [[ -n "$candidate" && -s "$candidate/nvm.sh" ]] || continue
    export NVM_DIR="$candidate"
    # shellcheck disable=SC1090
    source "$NVM_DIR/nvm.sh"
    nvm use 22 >/dev/null 2>&1 || true
    break
  done
fi

for command in git node npm rsync; do
  command -v "$command" >/dev/null 2>&1 || {
    printf 'Falta el comando requerido: %s\n' "$command" >&2
    exit 1
  }
done

if (( $(node_major) < 20 )); then
  printf 'Hex Tunnel Web requiere Node.js 20.9 o superior. Versión actual: %s\n' "$(node --version)" >&2
  printf 'Instala Node.js 22 con NVM y vuelve a ejecutar este comando.\n' >&2
  exit 1
fi

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
test -f out/documentacion/index.html
test -f out/soporte/index.html
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

cat > /usr/local/sbin/hextunnel-web-update <<EOF
#!/usr/bin/env bash
set -Eeuo pipefail
export HEXTUNNEL_WEB_ENV_FILE="$ENV_FILE"
exec bash "$SOURCE_ROOT/scripts/deploy-vps.sh"
EOF
chmod 755 /usr/local/sbin/hextunnel-web-update

printf 'Hex Tunnel Web desplegado correctamente.\n'
printf 'Release: %s\n' "$release_id"
printf 'Dominio: %s\n' "$SITE_URL"
printf 'Ruta activa: %s -> %s\n' "$CURRENT_LINK" "$release_dir"
printf 'Próximas actualizaciones: sudo hextunnel-web-update\n'
