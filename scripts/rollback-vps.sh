#!/usr/bin/env bash
set -Eeuo pipefail

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  exec sudo bash "$0" "$@"
fi

DEPLOY_ROOT="${HEXTUNNEL_WEB_DEPLOY_ROOT:-/var/www/hextunnel-web}"
RELEASES_DIR="$DEPLOY_ROOT/releases"
CURRENT_LINK="$DEPLOY_ROOT/current"
REQUESTED_RELEASE="${1:-}"

[[ -d "$RELEASES_DIR" ]] || {
  printf 'No existe el directorio de releases: %s\n' "$RELEASES_DIR" >&2
  exit 1
}

current_target="$(readlink -f "$CURRENT_LINK" 2>/dev/null || true)"

if [[ -n "$REQUESTED_RELEASE" ]]; then
  target="$RELEASES_DIR/$REQUESTED_RELEASE"
  [[ -d "$target" ]] || {
    printf 'No existe la release solicitada: %s\n' "$REQUESTED_RELEASE" >&2
    exit 1
  }
else
  target="$(find "$RELEASES_DIR" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
    | sort -nr \
    | awk -v current="$current_target" '$0 !~ current {sub(/^[^ ]+ /, ""); print; exit}')"
fi

[[ -n "$target" && -d "$target" ]] || {
  printf 'No hay una release anterior disponible.\n' >&2
  exit 1
}

next_link="$DEPLOY_ROOT/.rollback-$(date -u +%Y%m%dT%H%M%SZ)"
ln -s "$target" "$next_link"
mv -Tf "$next_link" "$CURRENT_LINK"

nginx -t
systemctl reload nginx

printf 'Rollback aplicado correctamente.\n'
printf 'Ruta activa: %s -> %s\n' "$CURRENT_LINK" "$target"
