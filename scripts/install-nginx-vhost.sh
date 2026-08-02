#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  exec sudo bash "$0" "$@"
fi

DOMAIN="${HEXTUNNEL_WEB_DOMAIN:-hextunnel.duckdns.org}"
SOURCE_ROOT="${HEXTUNNEL_WEB_SOURCE_ROOT:-/opt/hextunnel-web/source}"
SOURCE_CONF="${HEXTUNNEL_WEB_NGINX_SOURCE:-$SOURCE_ROOT/deploy/nginx/hextunnel.duckdns.org.conf}"
SOURCE_SNIPPET="${HEXTUNNEL_WEB_NGINX_SECURITY_SOURCE:-$SOURCE_ROOT/deploy/nginx/hextunnel-security-headers.conf}"
RELOAD_NGINX="${HEXTUNNEL_WEB_NGINX_RELOAD:-1}"
TMP_DUMP="$(mktemp)"
trap 'rm -f "$TMP_DUMP"' EXIT

[[ -f "$SOURCE_CONF" ]] || {
  printf 'No existe la plantilla Nginx: %s\n' "$SOURCE_CONF" >&2
  exit 1
}

[[ -f "$SOURCE_SNIPPET" ]] || {
  printf 'No existe el snippet de seguridad: %s\n' "$SOURCE_SNIPPET" >&2
  exit 1
}

nginx -T >"$TMP_DUMP" 2>&1 || {
  cat "$TMP_DUMP" >&2
  exit 1
}

install -d -m 755 /etc/nginx/snippets
install -m 644 "$SOURCE_SNIPPET" /etc/nginx/snippets/hextunnel-security-headers.conf

if grep -Eq 'include[[:space:]]+/etc/nginx/sites-enabled/\*;' "$TMP_DUMP"; then
  install -d -m 755 /etc/nginx/sites-available /etc/nginx/sites-enabled
  install -m 644 "$SOURCE_CONF" "/etc/nginx/sites-available/$DOMAIN"
  ln -sfn "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
  TARGET="/etc/nginx/sites-available/$DOMAIN"
elif grep -Eq 'include[[:space:]]+/etc/nginx/conf\.d/\*\.conf;' "$TMP_DUMP"; then
  install -d -m 755 /etc/nginx/conf.d
  install -m 644 "$SOURCE_CONF" "/etc/nginx/conf.d/$DOMAIN.conf"
  TARGET="/etc/nginx/conf.d/$DOMAIN.conf"
else
  printf 'No se encontró una ruta de inclusión Nginx compatible.\n' >&2
  printf 'Directivas include detectadas:\n' >&2
  grep -E '^[[:space:]]*include[[:space:]]+' "$TMP_DUMP" >&2 || true
  exit 1
fi

nginx -t
if [[ "$RELOAD_NGINX" == "1" ]]; then
  systemctl reload nginx
fi

printf 'Virtual host instalado correctamente: %s\n' "$TARGET"
