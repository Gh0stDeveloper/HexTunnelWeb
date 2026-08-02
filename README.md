# Hex Tunnel Web

Sitio público oficial de Hex Tunnel, construido con Next.js App Router y TypeScript.

## Sitio oficial

```text
https://hextunnel.duckdns.org
```

## Alcance

Este repositorio contiene únicamente contenido público:

- presentación del producto;
- características;
- compatibilidad;
- desarrolladores;
- preguntas frecuentes;
- privacidad.

No contiene código del instalador, credenciales, administración del servidor, datos de servicios internos ni implementación de control de acceso.

## Desarrollo

```bash
npm install
npm run dev
```

## Validación

```bash
npm run typecheck
npm run build
```

La compilación utiliza `output: "export"` y genera el sitio estático en `out/`.

## Build de producción

```bash
NEXT_PUBLIC_SITE_URL=https://hextunnel.duckdns.org npm run build
```

## Despliegue en VPS

El repositorio incluye:

- `scripts/deploy-vps.sh`: build y despliegue versionado;
- `deploy/nginx/hextunnel.duckdns.org.conf`: server block inicial para Nginx;
- `docs/DOMAIN-INTEGRATION.md`: separación entre el sitio público y el instalador.

Primera instalación y actualizaciones:

```bash
sudo bash scripts/deploy-vps.sh
```

Antes de emitir el certificado TLS, comprueba que `hextunnel.duckdns.org` resuelva públicamente hacia la IP de la VPS.

El endpoint histórico del instalador permanece sin cambios:

```text
https://ghostdeveloper.duckdns.org/install.sh
```
