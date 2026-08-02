import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MediaImage } from "@/components/media-image";
import { supportContacts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soporte",
  description: "Canales oficiales de soporte de Hex Tunnel y recomendaciones para solicitar asistencia de forma segura.",
  alternates: { canonical: "/soporte/" },
};

export default function SupportPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Soporte oficial</p>
          <h1>Dos administradores disponibles para evitar un único punto de contacto.</h1>
          <p>Contacta a cualquiera de los administradores identificados. No compartas contraseñas, tokens ni claves privadas.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Soporte", href: "/soporte/" }]} />
        <section className="container support-grid">
          {supportContacts.map((contact) => (
            <article className="support-card" key={contact.telegramUrl}>
              <div className="support-avatar" aria-label={`Imagen de ${contact.name}`}>
                <MediaImage
                  src={contact.image}
                  fallbackSrc="/media/profile-placeholder.svg"
                  alt={`Perfil público de ${contact.name}`}
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <p className="support-role">Administrador oficial</p>
                <h2>{contact.name}</h2>
                <p>{contact.role}</p>
                <div className="support-actions">
                  <a className="button" href={contact.telegramUrl} target="_blank" rel="noreferrer">
                    Contactar por Telegram
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="container support-guidelines policy-grid">
          <article className="policy-card">
            <p className="card-kicker">Incluye</p>
            <h2>Información útil</h2>
            <ul>
              <li>Sistema operativo y versión.</li>
              <li>Arquitectura AMD64 o ARM64.</li>
              <li>Versión de Hex Tunnel.</li>
              <li>Error sanitizado y momento aproximado.</li>
            </ul>
          </article>
          <article className="policy-card">
            <p className="card-kicker">No envíes</p>
            <h2>Información sensible</h2>
            <ul>
              <li>Contraseñas o claves SSH.</li>
              <li>Tokens de bots o APIs.</li>
              <li>Archivos privados del servidor.</li>
              <li>Datos completos de usuarios.</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
