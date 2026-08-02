#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  exec sudo bash "$0" "$@"
fi

DOMAIN="${HEXTUNNEL_WEB_DOMAIN:-hextunnel.duckdns.org}"
SOURCE_CONF="${HEXTUNNEL_WEB_NGINX_SOURCE:-/opt/hextunnel-web/source/deploy/nginx/hextunnel.duckdns.org.conf}"
TMP_DUMP="$(mktemp)"
trap 'rm -f "$TMP_DUMP"' EXIT

[[ -f "$SOURCE_CONF" ]] || {
  printf 'No existe la plantilla Nginx: %s\n' "$SOURCE_CONF" >&2
  exit 1
}

nginx -T >"$TMP_DUMP" 2>&1 || {
  cat "$TMP_DUMP" >&2
  exit 1
}

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
systemctl reload nginx

printf 'Virtual host instalado correctamente: %s\n' "$TARGET"
