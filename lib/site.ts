export const siteConfig = {
  name: "Hex Tunnel",
  shortName: "HX",
  description:
    "Plataforma modular para instalar, administrar y mantener servicios de conexión en servidores VPS compatibles.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hextunnel.duckdns.org",
  githubUrl: "https://github.com/Gh0stDeveloper",
  version: "1.0.0-rc.3",
  releaseDate: "2026-08-02",
};

export const supportContacts = [
  {
    name: "Gh0stDeveloper",
    role: "Arquitectura, infraestructura y desarrollo actual",
    telegramUrl: "https://t.me/Gh0stDeveloper",
    image: "/media/support-gh0stdeveloper.webp",
    initials: "GD",
  },
  {
    name: "Jotchua DevzZ",
    role: "Proyecto original y soporte del ecosistema base",
    telegramUrl: "https://t.me/Jotchua_DevzZ",
    image: "/media/support-jotchua-devzz.webp",
    initials: "JD",
  },
] as const;

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/caracteristicas/", label: "Características" },
  { href: "/documentacion/", label: "Documentación" },
  { href: "/novedades/", label: "Novedades" },
  { href: "/soporte/", label: "Soporte" },
  { href: "/preguntas/", label: "Preguntas" },
] as const;

export const productNavigation = [
  { href: "/compatibilidad/", label: "Compatibilidad" },
  { href: "/galeria/", label: "Galería" },
  { href: "/hoja-de-ruta/", label: "Hoja de ruta" },
  { href: "/desarrolladores/", label: "Desarrolladores" },
] as const;

export const legalNavigation = [
  { href: "/privacidad/", label: "Privacidad" },
  { href: "/terminos/", label: "Términos" },
  { href: "/uso-aceptable/", label: "Uso aceptable" },
  { href: "/seguridad/", label: "Seguridad" },
] as const;

export const publicCapabilities = [
  "SSH, TLS y WebSocket",
  "Xray",
  "Hysteria y Hysteria 2",
  "ZiVPN",
  "Administración de usuarios",
  "Respaldos y recuperación",
  "Diagnóstico de servicios",
  "Actualizaciones verificadas",
] as const;
