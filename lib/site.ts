export const siteConfig = {
  name: "Hex Tunnel",
  shortName: "HX",
  description:
    "Plataforma modular para instalar, administrar y mantener servicios de conexión en servidores VPS compatibles.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hextunnel.example",
  supportUrl: "https://t.me/Gh0stDeveloper",
  githubUrl: "https://github.com/Gh0stDeveloper",
  version: "1.0.0-rc.3",
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/caracteristicas/", label: "Características" },
  { href: "/compatibilidad/", label: "Compatibilidad" },
  { href: "/desarrolladores/", label: "Desarrolladores" },
  { href: "/preguntas/", label: "Preguntas" },
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
