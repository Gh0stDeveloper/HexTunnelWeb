import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Información de privacidad del sitio público de Hex Tunnel.",
  alternates: { canonical: "/privacidad/" },
};

export default function PrivacyPage() {
  return (
    <section className="page-hero section-pad legal-page">
      <div className="container narrow">
        <p className="eyebrow">Privacidad</p>
        <h1>Sitio público informativo.</h1>
        <p>Esta versión de la página no incorpora cuentas, formularios de acceso ni procesamiento de credenciales.</p>
        <div className="legal-content">
          <h2>Datos solicitados</h2>
          <p>El sitio no solicita claves de servidor, contraseñas, tokens ni información de instalación.</p>
          <h2>Enlaces externos</h2>
          <p>Los enlaces de contacto pueden dirigir a servicios de terceros, sujetos a sus propias políticas de privacidad.</p>
          <h2>Contenido técnico</h2>
          <p>La página describe únicamente capacidades públicas del producto. Los procesos operativos se mantienen separados.</p>
          <h2>Cambios</h2>
          <p>Esta política se actualizará cuando el sitio incorpore formularios, analítica u otras funciones que procesen información.</p>
        </div>
      </div>
    </section>
  );
}
