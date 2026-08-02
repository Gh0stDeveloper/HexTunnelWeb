# Hex Tunnel Web

Sitio público oficial de Hex Tunnel, construido con Next.js App Router, React y TypeScript.

## Alcance público

El repositorio contiene:

- presentación del producto;
- características y compatibilidad;
- documentación pública;
- galería con recursos reemplazables;
- novedades y hoja de ruta;
- soporte con dos administradores;
- preguntas frecuentes;
- privacidad, términos, seguridad y uso aceptable;
- SEO técnico, JSON-LD, sitemap y robots;
- despliegue estático versionado para Nginx;
- auditorías de TypeScript, build y Lighthouse.

No contiene código del instalador, credenciales, administración del servidor, bases de datos, detalles de licencias ni implementación interna de bots o APIs.

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

## Variables públicas

Copia `.env.example` y configura únicamente lo necesario:

```bash
NEXT_PUBLIC_SITE_URL=https://hextunnel.duckdns.org
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_UMAMI_SCRIPT_URL=
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
```

Search Console y Umami permanecen desactivados mientras sus variables estén vacías.

## Despliegue en la VPS

Primera publicación o actualización manual:

```bash
sudo bash /opt/hextunnel-web/source/scripts/deploy-vps.sh
```

Después de un despliegue correcto se instala este comando global:

```bash
sudo hextunnel-web-update
```

El despliegue:

- carga `/etc/hextunnel-web.env` si existe;
- intenta utilizar Node.js 22 mediante NVM;
- rechaza Node.js menor que 20.9;
- actualiza `main`;
- ejecuta TypeScript y build;
- crea una release versionada;
- cambia el enlace activo de forma atómica;
- conserva las cinco releases más recientes;
- valida y recarga Nginx sin reemplazar el virtual host de Certbot.

Rollback a la release anterior:

```bash
sudo bash /opt/hextunnel-web/source/scripts/rollback-vps.sh
```

## Encabezados de seguridad

Para conservar la configuración HTTPS creada por Certbot y añadir los encabezados solo al dominio de Hex Tunnel:

```bash
cd /opt/hextunnel-web/source
git pull --ff-only origin main
sudo bash scripts/install-security-headers.sh
```

El script crea un respaldo del virtual host, instala un snippet independiente, ejecuta `nginx -t` y recarga Nginx únicamente si la configuración es válida.

## Recursos visuales

La web utiliza placeholders hasta que se suben las capturas reales con sus nombres definitivos. Consulta [`docs/MEDIA-ASSETS.md`](docs/MEDIA-ASSETS.md).

Archivos principales:

```text
public/media/screenshot-panel-general.webp
public/media/screenshot-servicios.webp
public/media/screenshot-usuarios.webp
public/media/screenshot-diagnostico.webp
public/media/screenshot-respaldos.webp
public/media/screenshot-arquitectura.webp
public/media/support-gh0stdeveloper.webp
public/media/support-jotchua-devzz.webp
```

## Dominios

Sitio público:

```text
https://hextunnel.duckdns.org
```

El endpoint histórico del instalador debe conservarse sin cambios:

```text
https://ghostdeveloper.duckdns.org/install.sh
```

Consulta [`docs/DOMAIN-INTEGRATION.md`](docs/DOMAIN-INTEGRATION.md).
