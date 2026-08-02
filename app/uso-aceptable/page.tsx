import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Uso aceptable",
  description: "Política pública de uso aceptable de Hex Tunnel.",
  alternates: { canonical: "/uso-aceptable/" },
};

const prohibitedUses = [
  "Acceso no autorizado a sistemas, cuentas o redes.",
  "Distribución de malware, phishing, fraude o suplantación.",
  "Ataques de denegación de servicio, explotación o escaneo abusivo.",
  "Envío de spam o automatización que infrinja normas de terceros.",
  "Intercepción de comunicaciones sin autorización legal.",
  "Ocultamiento de actividades ilícitas o evasión de medidas de seguridad.",
  "Reventa o distribución no autorizada de accesos y componentes.",
  "Uso que afecte la estabilidad, reputación o disponibilidad de infraestructura ajena.",
] as const;

export default function AcceptableUsePage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Uso aceptable</p>
          <h1>Hex Tunnel debe utilizarse de forma legal, autorizada y responsable.</h1>
          <p>La administración técnica de una VPS no autoriza actividades que vulneren derechos, normas o servicios de terceros.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Uso aceptable", href: "/uso-aceptable/" }]} />
        <article className="container prose">
          <p className="legal-updated">Última actualización: 2 de agosto de 2026.</p>

          <h2>Uso permitido</h2>
          <p>Hex Tunnel puede utilizarse para administrar servicios propios o expresamente autorizados, respetando las condiciones del proveedor de VPS, las redes involucradas y la legislación aplicable.</p>

          <h2>Usos prohibidos</h2>
          <ul>
            {prohibitedUses.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Protección de terceros</h2>
          <p>El administrador de la VPS debe proteger cuentas, limitar abusos, responder a reportes válidos y evitar que sus servicios se conviertan en un mecanismo de ataque o fraude.</p>

          <h2>Medidas ante abuso</h2>
          <p>El soporte puede negarse, suspenderse o limitarse cuando exista evidencia razonable de uso abusivo, riesgo para terceros o incumplimiento de estas reglas.</p>

          <h2>Reportes</h2>
          <p>Los reportes de abuso o seguridad deben enviarse por los canales oficiales, incluyendo evidencia mínima y evitando publicar datos sensibles.</p>
        </article>
      </div>
    </>
  );
}
