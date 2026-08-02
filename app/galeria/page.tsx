import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MediaImage } from "@/components/media-image";

export const metadata: Metadata = {
  title: "Galería",
  description: "Capturas públicas y sanitizadas de las principales áreas de Hex Tunnel.",
  alternates: { canonical: "/galeria/" },
};

const screenshots = [
  {
    src: "/media/screenshot-panel-general.webp",
    title: "Panel general",
    description: "Vista principal del estado operativo y accesos de administración.",
  },
  {
    src: "/media/screenshot-servicios.webp",
    title: "Servicios",
    description: "Administración modular de componentes compatibles con el servidor.",
  },
  {
    src: "/media/screenshot-usuarios.webp",
    title: "Usuarios",
    description: "Flujo de cuentas, límites y vencimientos con datos de ejemplo.",
  },
  {
    src: "/media/screenshot-diagnostico.webp",
    title: "Diagnóstico",
    description: "Comprobaciones sanitizadas del sistema y de los servicios administrados.",
  },
  {
    src: "/media/screenshot-respaldos.webp",
    title: "Respaldos",
    description: "Puntos de recuperación, restauración y operaciones de rollback.",
  },
  {
    src: "/media/screenshot-arquitectura.webp",
    title: "Compatibilidad",
    description: "Detección de AMD64 o ARM64 y disponibilidad de módulos.",
  },
] as const;

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Galería pública</p>
          <h1>Una vista clara del producto sin exponer infraestructura sensible.</h1>
          <p>Las capturas deben utilizar datos ficticios y ocultar IP, dominios privados, credenciales, tokens y rutas internas.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Galería", href: "/galeria/" }]} />
        <section className="container media-grid">
          {screenshots.map((screenshot) => (
            <article className="media-card" key={screenshot.src}>
              <div className="media-frame">
                <MediaImage src={screenshot.src} alt={`Captura pública: ${screenshot.title}`} />
              </div>
              <div className="media-card-content">
                <h2>{screenshot.title}</h2>
                <p>{screenshot.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="container media-requirements">
          <strong>Formato recomendado</strong>
          <p>WebP, relación 16:10 o 16:9, ancho mínimo de 1600 px y peso ideal inferior a 350 KB por captura.</p>
        </section>
      </div>
    </>
  );
}
