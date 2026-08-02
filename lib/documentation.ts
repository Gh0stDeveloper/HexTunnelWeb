export type DocumentationBlock = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  note?: string;
};

export type DocumentationSection = {
  slug: string;
  title: string;
  summary: string;
  eyebrow: string;
  blocks: readonly DocumentationBlock[];
};

export const documentationSections: readonly DocumentationSection[] = [
  {
    slug: "requisitos",
    title: "Requisitos del servidor",
    eyebrow: "Preparación",
    summary: "Recursos, acceso y condiciones recomendadas antes de instalar Hex Tunnel.",
    blocks: [
      {
        title: "Plataforma compatible",
        items: [
          "Debian 12.",
          "Ubuntu 22.04 LTS.",
          "Ubuntu 24.04 LTS.",
          "Arquitectura AMD64/x86_64 o ARM64/aarch64.",
        ],
      },
      {
        title: "Condiciones recomendadas",
        items: [
          "VPS limpia o dedicada a Hex Tunnel.",
          "Acceso root o usuario con sudo.",
          "Conectividad estable durante instalación y actualización.",
          "Respaldo previo cuando el servidor ya contiene servicios importantes.",
        ],
        note: "No se recomienda instalar Hex Tunnel junto con paneles que administren los mismos puertos, firewall o servicios.",
      },
    ],
  },
  {
    slug: "compatibilidad",
    title: "Compatibilidad pública",
    eyebrow: "Plataformas",
    summary: "Cómo se distribuyen las capacidades entre sistemas operativos y arquitecturas.",
    blocks: [
      {
        title: "Componentes principales",
        items: [
          "SSH, TLS, SSLH y WebSocket.",
          "Xray.",
          "Hysteria y Hysteria 2.",
          "ZiVPN y Webmin.",
          "Menú, diagnóstico, usuarios y respaldos.",
        ],
      },
      {
        title: "Diferencias por arquitectura",
        paragraphs: [
          "La plataforma detecta la arquitectura del servidor y presenta únicamente los componentes compatibles.",
          "Algunos módulos heredados dependen de binarios de terceros y pueden tener disponibilidad limitada en ARM64.",
        ],
      },
    ],
  },
  {
    slug: "preparar-vps",
    title: "Preparar una VPS",
    eyebrow: "Antes de instalar",
    summary: "Lista de comprobación pública para reducir conflictos durante la instalación.",
    blocks: [
      {
        title: "Comprobaciones iniciales",
        items: [
          "Confirma que el sistema operativo esté soportado.",
          "Verifica la arquitectura con uname -m.",
          "Actualiza los paquetes del sistema.",
          "Comprueba que el dominio y el DNS apunten al servidor cuando sean necesarios.",
          "Identifica servicios que ya estén ocupando puertos relevantes.",
        ],
      },
      {
        title: "Protección previa",
        items: [
          "Crea una instantánea de la VPS si el proveedor la ofrece.",
          "Guarda una copia de la configuración de Nginx, firewall y certificados existentes.",
          "No elimines configuraciones activas para otros dominios.",
        ],
      },
    ],
  },
  {
    slug: "arquitecturas",
    title: "AMD64 y ARM64",
    eyebrow: "Arquitecturas",
    summary: "Diferencias prácticas entre los dos entornos admitidos por Hex Tunnel.",
    blocks: [
      {
        title: "AMD64 / x86_64",
        paragraphs: [
          "Es la arquitectura con mayor disponibilidad histórica de binarios y componentes heredados.",
        ],
      },
      {
        title: "ARM64 / aarch64",
        paragraphs: [
          "Ofrece buena eficiencia en proveedores compatibles. Hex Tunnel adapta el catálogo de módulos a los binarios disponibles para esta arquitectura.",
        ],
        note: "La compatibilidad de un módulo puede cambiar cuando su proveedor publica o retira binarios para una arquitectura.",
      },
    ],
  },
  {
    slug: "actualizaciones",
    title: "Actualizaciones",
    eyebrow: "Mantenimiento",
    summary: "Principios para mantener Hex Tunnel y el sitio público sin reemplazar configuraciones ajenas.",
    blocks: [
      {
        title: "Antes de actualizar",
        items: [
          "Revisa las novedades de la versión.",
          "Confirma que el servidor siga siendo compatible.",
          "Crea un punto de recuperación.",
          "Evita ejecutar dos procesos administrativos simultáneamente.",
        ],
      },
      {
        title: "Después de actualizar",
        items: [
          "Valida los servicios principales.",
          "Comprueba usuarios y vencimientos.",
          "Revisa los registros sanitizados de la operación.",
          "Utiliza rollback si el resultado no es correcto.",
        ],
      },
    ],
  },
  {
    slug: "respaldos",
    title: "Respaldos y recuperación",
    eyebrow: "Continuidad",
    summary: "Qué protege un respaldo y cómo reducir el impacto de cambios incompletos.",
    blocks: [
      {
        title: "Qué debe protegerse",
        items: [
          "Configuraciones administradas por Hex Tunnel.",
          "Datos públicos de usuarios y vencimientos cuando corresponda.",
          "Archivos necesarios para restaurar servicios mantenidos.",
        ],
      },
      {
        title: "Qué no sustituye un respaldo",
        paragraphs: [
          "Un respaldo local no sustituye una instantánea externa del proveedor ni una copia fuera de la VPS.",
          "Los certificados, dominios y configuraciones administradas por otros proyectos deben conservar sus propios respaldos.",
        ],
      },
    ],
  },
  {
    slug: "solucion-de-problemas",
    title: "Solución de problemas",
    eyebrow: "Diagnóstico",
    summary: "Comprobaciones públicas y seguras antes de solicitar asistencia.",
    blocks: [
      {
        title: "Información útil para soporte",
        items: [
          "Sistema operativo y versión.",
          "Arquitectura del servidor.",
          "Versión pública de Hex Tunnel.",
          "Mensaje de error sanitizado.",
          "Momento aproximado en que comenzó el problema.",
        ],
      },
      {
        title: "Nunca compartas",
        items: [
          "Contraseñas o claves privadas.",
          "Tokens de bots o APIs.",
          "Credenciales SSH.",
          "Bases de datos completas.",
          "Archivos de licencia o secretos internos.",
        ],
        note: "Los administradores oficiales no necesitan tu contraseña para iniciar una revisión pública del problema.",
      },
    ],
  },
];

export function getDocumentationSection(slug: string) {
  return documentationSections.find((section) => section.slug === slug);
}
