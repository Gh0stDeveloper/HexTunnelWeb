import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { documentationSections } from "@/lib/documentation";

export const metadata: Metadata = {
  title: "Documentación",
  description: "Centro de documentación pública de Hex Tunnel: requisitos, compatibilidad, preparación, actualizaciones, respaldos y diagnóstico.",
  alternates: { canonical: "/documentacion/" },
};

export default function DocumentationPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Documentación pública</p>
          <h1>Prepara, comprende y mantén tu entorno con información oficial.</h1>
          <p>Guías públicas sin credenciales, rutas privadas ni detalles internos de la infraestructura.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Documentación", href: "/documentacion/" }]} />
        <section className="container">
          <div className="resource-grid">
            {documentationSections.map((section) => (
              <article className="resource-card" key={section.slug}>
                <p className="card-kicker">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.summary}</p>
                <Link className="text-link" href={`/documentacion/${section.slug}/`}>
                  Abrir guía →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
