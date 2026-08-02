import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Versiones, cambios públicos y avisos de compatibilidad de Hex Tunnel.",
  alternates: { canonical: "/novedades/" },
};

export default function NewsPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Novedades</p>
          <h1>Versiones, mejoras y cambios públicos del proyecto.</h1>
          <p>Este registro comunica cambios relevantes sin publicar secretos, rutas privadas ni detalles operativos explotables.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Novedades", href: "/novedades/" }]} />
        <section className="container release-grid">
          <article className="release-card featured">
            <p className="card-kicker">Versión actual</p>
            <div className="release-meta">
              <span>{siteConfig.version}</span>
              <span>Release candidate</span>
              <span>2 de agosto de 2026</span>
            </div>
            <h2>Base pública profesional y compatibilidad ampliada</h2>
            <p>Presentación oficial, documentación, soporte con dos administradores, compatibilidad AMD64/ARM64 y operación pública separada del instalador.</p>
            <Link className="text-link" href="/novedades/1-0-0-rc-3/">Leer cambios →</Link>
          </article>

          <article className="release-card">
            <p className="card-kicker">Seguimiento</p>
            <h2>Hoja de ruta pública</h2>
            <p>Prioridades generales del producto sin fechas comprometidas ni detalles internos.</p>
            <Link className="text-link" href="/hoja-de-ruta/">Consultar hoja de ruta →</Link>
          </article>
        </section>
      </div>
    </>
  );
}
