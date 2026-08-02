# Recursos visuales de Hex Tunnel

La web funciona aunque estos archivos todavía no existan. Las capturas y perfiles utilizan SVG de sustitución y cambian automáticamente al recurso real cuando se sube con el nombre exacto.

## Capturas obligatorias

Sube todos los archivos a `public/media/`:

| Archivo | Contenido | Recomendación |
|---|---|---|
| `screenshot-panel-general.webp` | Menú o panel principal | 1600×1000 px |
| `screenshot-servicios.webp` | Gestión de servicios | 1600×1000 px |
| `screenshot-usuarios.webp` | Gestión de usuarios | 1600×1000 px |
| `screenshot-diagnostico.webp` | Diagnóstico sanitizado | 1600×1000 px |
| `screenshot-respaldos.webp` | Respaldos y rollback | 1600×1000 px |
| `screenshot-arquitectura.webp` | Detección AMD64/ARM64 | 1600×1000 px |

Formato recomendado: WebP, relación 16:10 o 16:9, calidad 78–86 y menos de 350 KB por imagen.

## Perfiles de soporte

Son opcionales. Pueden ser una fotografía, avatar o logotipo autorizado:

- `public/media/support-gh0stdeveloper.webp`
- `public/media/support-jotchua-devzz.webp`

Recomendación: 800×800 px, formato WebP y encuadre cuadrado.

## Identidad visual

Estos archivos ya existen y pueden reemplazarse conservando exactamente el mismo nombre:

- `public/logo.svg`: logotipo cuadrado o símbolo principal.
- `public/og-cover.svg`: portada para compartir enlaces, tamaño conceptual 1200×630.

Para una fase posterior también pueden añadirse:

- `public/favicon.ico`
- `public/apple-touch-icon.png` — 180×180 px.
- `public/icon-192.png` — 192×192 px.
- `public/icon-512.png` — 512×512 px.

Estos cuatro últimos requieren actualizar la metadata antes de convertirse en los iconos principales. Mientras tanto la web utiliza `logo.svg`.

## Video opcional

La galería actual no muestra un reproductor vacío. Cuando exista un video real se puede integrar con:

- `public/media/demo-hextunnel.mp4`
- `public/media/demo-hextunnel-poster.webp`

Recomendación: MP4 H.264, 1080p, sin IP, contraseñas, tokens, dominios privados, rutas internas ni usuarios reales.

## Sanitización obligatoria

Antes de publicar cualquier captura o video, oculta:

- IP pública y privada;
- dominios internos;
- nombres de usuario reales;
- contraseñas y claves;
- tokens, UUID y secretos;
- rutas privadas;
- datos de licencias;
- información de bots, APIs o bases de datos;
- puertos que no deban ser públicos.
