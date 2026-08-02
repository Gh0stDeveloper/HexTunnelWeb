import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Hoja de ruta",
  description: "Prioridades públicas de evolución de Hex Tunnel sin fechas comprometidas ni detalles internos.",
  alternates: { canonical: "/hoja-de-ruta/" },
};

const roadmap = [
  {
    phase: "Ahora",
    title: "Estabilización de la versión candidata",
    copy: "Validación de compatibilidad, recuperación, diagnóstico y experiencia de administración en los sistemas admitidos.",
  },
  {
    phase: "Siguiente",
    title: "Documentación y evidencia visual",
    copy: "Capturas sanitizadas, guías públicas ampliadas y mejor explicación de los flujos principales.",
  },
  {
    phase: "Después",
    title: "Experiencia internacional",
    copy: "Versión en inglés, contenido de ayuda adicional y mejora continua de accesibilidad y rendimiento.",
  },
] as const;

export default function RoadmapPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Hoja de ruta</p>
          <h1>Prioridades públicas, no promesas rígidas.</h1>
          <p>El orden puede cambiar según compatibilidad, seguridad, mantenimiento y resultados de las pruebas.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Hoja de ruta", href: "/hoja-de-ruta/" }]} />
        <section className="container timeline">
          {roadmap.map((item) => (
            <article key={item.phase}>
              <span>{item.phase}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
