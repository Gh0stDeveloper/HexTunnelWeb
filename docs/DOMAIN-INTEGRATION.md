# Integración de dominios

## Arquitectura pública

La presentación oficial de Hex Tunnel utiliza un dominio independiente:

```text
https://hextunnel.duckdns.org/ -> sitio público HexTunnelWeb
```

El endpoint histórico del instalador permanece en el dominio anterior y no debe redirigirse ni reemplazarse:

```text
https://ghostdeveloper.duckdns.org/install.sh -> instalador existente
```

Esta separación permite actualizar el sitio público sin afectar la instalación enviada a los usuarios.

## Despliegue en Nginx

El build estático se publica en:

```text
/var/www/hextunnel-web/current
```

La plantilla de Nginx se encuentra en:

```text
deploy/nginx/hextunnel.duckdns.org.conf
```

El script `scripts/deploy-vps.sh` crea releases versionadas, cambia el enlace `current` de forma atómica y conserva las cinco releases más recientes.

## Certificado TLS

Antes de solicitar el certificado, el dominio debe resolver hacia la IP pública de la VPS y los puertos TCP 80 y 443 deben estar disponibles.

Con Nginx configurado, Certbot puede emitir e instalar el certificado para:

```text
hextunnel.duckdns.org
```

El certificado del dominio público es independiente de los certificados usados por los demás dominios de la VPS.

## Actualizaciones futuras

Después de fusionar una actualización en `main`, se vuelve a desplegar con:

```bash
sudo /opt/hextunnel-web/source/scripts/deploy-vps.sh
```

También puede ejecutarse desde un clon temporal usando la URL raw del script, pero conservar un clon local facilita auditoría y rollback.

## Regla de contenido

El sitio público no debe incluir:

- credenciales o tokens;
- detalles de API o bases de datos;
- procesos administrativos;
- rutas privadas;
- datos de servicios internos;
- información operativa del servidor.
