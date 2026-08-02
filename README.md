# Hex Tunnel Web

Sitio público oficial de Hex Tunnel, construido con Next.js App Router y TypeScript.

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

## Dominio

Configura la URL pública durante el build:

```bash
NEXT_PUBLIC_SITE_URL=https://nuevo-dominio.example npm run build
```

El endpoint histórico del instalador debe conservarse sin cambios:

```text
https://ghostdeveloper.duckdns.org/install.sh
```

Consulta [`docs/DOMAIN-INTEGRATION.md`](docs/DOMAIN-INTEGRATION.md).
