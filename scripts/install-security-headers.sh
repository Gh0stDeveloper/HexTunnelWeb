#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  exec sudo bash "$0" "$@"
fi

DOMAIN="${HEXTUNNEL_WEB_DOMAIN:-hextunnel.duckdns.org}"
SOURCE_ROOT="${HEXTUNNEL_WEB_SOURCE_ROOT:-/opt/hextunnel-web/source}"
SOURCE_SNIPPET="$SOURCE_ROOT/deploy/nginx/hextunnel-security-headers.conf"
TARGET_SNIPPET="/etc/nginx/snippets/hextunnel-security-headers.conf"
INCLUDE_LINE="    include $TARGET_SNIPPET;"

[[ -f "$SOURCE_SNIPPET" ]] || {
  printf 'No existe el snippet de seguridad: %s\n' "$SOURCE_SNIPPET" >&2
  exit 1
}

if [[ -f "/etc/nginx/conf.d/$DOMAIN.conf" ]]; then
  TARGET_VHOST="/etc/nginx/conf.d/$DOMAIN.conf"
elif [[ -f "/etc/nginx/sites-available/$DOMAIN" ]]; then
  TARGET_VHOST="/etc/nginx/sites-available/$DOMAIN"
else
  printf 'No se encontró el virtual host de %s.\n' "$DOMAIN" >&2
  exit 1
fi

install -d -m 755 /etc/nginx/snippets
install -m 644 "$SOURCE_SNIPPET" "$TARGET_SNIPPET"

backup="$TARGET_VHOST.backup-$(date +%Y%m%d-%H%M%S)"
cp -a "$TARGET_VHOST" "$backup"

if ! grep -Fq "include $TARGET_SNIPPET;" "$TARGET_VHOST"; then
  tmp="$(mktemp)"
  trap 'rm -f "$tmp"' EXIT
  awk -v domain="$DOMAIN" -v include_line="$INCLUDE_LINE" '
    { print }
    $0 ~ "^[[:space:]]*server_name[[:space:]]+" domain "([[:space:]]|;).*" { print include_line }
  ' "$TARGET_VHOST" > "$tmp"
  install -m 644 "$tmp" "$TARGET_VHOST"
fi

nginx -t
systemctl reload nginx

printf 'Encabezados instalados únicamente para %s.\n' "$DOMAIN"
printf 'Virtual host: %s\n' "$TARGET_VHOST"
printf 'Respaldo: %s\n' "$backup"
