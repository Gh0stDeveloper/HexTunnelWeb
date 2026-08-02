import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { supportContacts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seguridad",
  description: "Canal público para reportar vulnerabilidades y comprobar contactos oficiales de Hex Tunnel.",
  alternates: { canonical: "/seguridad/" },
};

export default function SecurityPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Seguridad</p>
          <h1>Reporta problemas de forma responsable y privada.</h1>
          <p>No publiques pruebas, credenciales, tokens ni detalles que permitan reproducir un abuso antes de que el problema sea revisado.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Seguridad", href: "/seguridad/" }]} />
        <article className="container prose">
          <p className="legal-updated">Última actualización: 2 de agosto de 2026.</p>

          <h2>Qué reportar</h2>
          <ul>
            <li>Exposición de información sensible en contenido público.</li>
            <li>Enlaces oficiales alterados o suplantación del proyecto.</li>
            <li>Fallos que permitan acceso no autorizado o ejecución no prevista.</li>
            <li>Problemas de actualización, recuperación o aislamiento con impacto de seguridad.</li>
          </ul>

          <h2>Qué incluir</h2>
          <ul>
            <li>Descripción clara del comportamiento observado.</li>
            <li>Versión afectada y plataforma.</li>
            <li>Pasos mínimos, seguros y sanitizados para reproducirlo.</li>
            <li>Impacto potencial y evidencia sin secretos reales.</li>
          </ul>

          <h2>Canales oficiales</h2>
          <p>Puedes contactar de forma privada a cualquiera de los administradores:</p>
          <ul>
            {supportContacts.map((contact) => (
              <li key={contact.telegramUrl}>
                <a href={contact.telegramUrl} target="_blank" rel="noreferrer">{contact.name} en Telegram</a>
              </li>
            ))}
          </ul>

          <h2>Divulgación coordinada</h2>
          <p>Se solicita tiempo razonable para analizar, corregir y distribuir una solución antes de publicar detalles técnicos.</p>

          <div className="callout">Los administradores oficiales nunca deben pedirte contraseñas, claves privadas o tokens completos para recibir un reporte inicial.</div>
        </article>
      </div>
    </>
  );
}
