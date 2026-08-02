import type { Metadata } from "next";
import { GlobeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Desarrolladores",
  description: "Créditos y responsables del desarrollo de Hex Tunnel.",
  alternates: { canonical: "/desarrolladores/" },
};

const developers = [
  {
    initials: "GD",
    name: "Gh0stDeveloper",
    role: "Arquitectura, infraestructura y desarrollo actual",
    description:
      "Responsable de la evolución técnica, arquitectura modular, automatización, compatibilidad, mantenimiento y experiencia pública de Hex Tunnel.",
    areas: ["Arquitectura transaccional", "Automatización", "Compatibilidad", "Infraestructura", "Experiencia de producto"],
    links: [
      { label: "GitHub", href: "https://github.com/Gh0stDeveloper" },
      { label: "Telegram", href: "https://t.me/Gh0stDeveloper" },
    ],
  },
  {
    initials: "JD",
    name: "Jotchua DevzZ",
    role: "Proyecto original y desarrollo base",
    description:
      "Creador del proyecto original y de la base histórica sobre la que se construyó la evolución actual de Hex Tunnel.",
    areas: ["Concepto original", "Desarrollo inicial", "Base del instalador", "Ecosistema original"],
    links: [{ label: "Telegram", href: "https://t.me/Jotchua_DevzZ" }],
  },
] as const;

export default function DevelopersPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Desarrolladores</p>
          <h1>Créditos claros para cada etapa del proyecto.</h1>
          <p>Hex Tunnel reconoce tanto su origen como el trabajo de arquitectura y mantenimiento que sostiene la plataforma actual.</p>
        </div>
      </section>

      <section className="section-pad container developer-grid">
        {developers.map((developer) => (
          <article className="developer-card" key={developer.name}>
            <div className="developer-avatar">{developer.initials}</div>
            <div className="developer-body">
              <p className="developer-role">{developer.role}</p>
              <h2>{developer.name}</h2>
              <p>{developer.description}</p>
              <div className="tag-list">
                {developer.areas.map((area) => <span key={area}>{area}</span>)}
              </div>
              <div className="developer-links">
                {developer.links.map((link) => (
                  <a key={link.href} href={link.href} rel="noreferrer" target="_blank">
                    <GlobeIcon /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-pad panel-section">
        <div className="container history-grid">
          <div><span>Origen</span><h2>Proyecto base</h2><p>La primera etapa estableció la idea, el instalador original y el conjunto inicial de servicios.</p></div>
          <div><span>Evolución</span><h2>Arquitectura modular</h2><p>La plataforma incorporó validaciones, módulos, recuperación, compatibilidad y mantenimiento controlado.</p></div>
          <div><span>Actualidad</span><h2>Producto mantenible</h2><p>Hex Tunnel continúa evolucionando como una plataforma pública mejor presentada y técnicamente organizada.</p></div>
        </div>
      </section>
    </>
  );
}
