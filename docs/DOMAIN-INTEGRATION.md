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

## Primera instalación

```bash
sudo apt update
sudo apt install -y git nginx rsync curl ca-certificates
sudo git clone https://github.com/Gh0stDeveloper/HexTunnelWeb.git /opt/hextunnel-web/source
cd /opt/hextunnel-web/source
sudo bash scripts/deploy-vps.sh
sudo cp deploy/nginx/hextunnel.duckdns.org.conf /etc/nginx/sites-available/hextunnel.duckdns.org
sudo ln -sfn /etc/nginx/sites-available/hextunnel.duckdns.org /etc/nginx/sites-enabled/hextunnel.duckdns.org
sudo nginx -t
sudo systemctl reload nginx
```

Node.js 22 y npm deben estar instalados antes de ejecutar el script.

## Certificado TLS

Antes de solicitar el certificado, comprueba que el dominio ya responde desde resolutores públicos:

```bash
dig +short A hextunnel.duckdns.org @1.1.1.1
dig +short A hextunnel.duckdns.org @8.8.8.8
```

Ambos comandos deben devolver la IP pública de la VPS. Los puertos TCP 80 y 443 también deben estar disponibles.

Con Nginx configurado, Certbot puede emitir e instalar el certificado para:

```text
hextunnel.duckdns.org
```

El certificado del dominio público es independiente de los certificados usados por los demás dominios de la VPS.

## Actualizaciones futuras

Después de fusionar una actualización en `main`, se vuelve a desplegar con:

```bash
sudo bash /opt/hextunnel-web/source/scripts/deploy-vps.sh
```

## Regla de contenido

El sitio público no debe incluir:

- credenciales o tokens;
- detalles de API o bases de datos;
- procesos administrativos;
- rutas privadas;
- datos de servicios internos;
- información operativa del servidor.
