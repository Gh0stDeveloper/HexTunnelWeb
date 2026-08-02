# Integración de dominios

## Objetivo

Separar la presentación pública de Hex Tunnel del endpoint histórico utilizado para entregar el instalador.

## Contrato que no debe romperse

El endpoint siguiente debe continuar disponible sin redirecciones ni cambios de contenido:

```text
https://ghostdeveloper.duckdns.org/install.sh
```

Las integraciones y las instrucciones existentes dependen de esa URL. El nuevo sitio no debe reemplazarla.

## Nuevo dominio público

El dominio nuevo debe apuntar exclusivamente a `HexTunnelWeb`.

Ejemplo conceptual:

```text
https://hextunnel.example/        -> sitio Next.js estático
https://ghostdeveloper.duckdns.org/install.sh -> instalador existente
```

## Alternativa A: Vercel

1. Importar `Gh0stDeveloper/HexTunnelWeb` en Vercel.
2. Configurar `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.
3. Añadir el dominio nuevo al proyecto.
4. Mantener el dominio anterior y su configuración Nginx sin cambios.

## Alternativa B: Nginx en una VPS

Ejecutar `npm run build` y publicar el directorio `out/` en un server block independiente.

```nginx
server {
    listen 80;
    server_name NUEVO_DOMINIO;

    root /var/www/hextunnel-web/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    error_page 404 /404.html;
}
```

El server block de `ghostdeveloper.duckdns.org` debe conservar su ruta específica para `/install.sh`.

## Regla de contenido

El sitio público no debe incluir:

- credenciales;
- tokens;
- detalles de API;
- estructura de bases de datos;
- procesos administrativos;
- rutas privadas;
- datos de servicios internos;
- información interna del servidor.
