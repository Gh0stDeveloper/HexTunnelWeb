import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad del sitio público de Hex Tunnel.",
  alternates: { canonical: "/privacidad/" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Privacidad</p>
          <h1>Información pública con recopilación mínima.</h1>
          <p>El sitio no incorpora cuentas, formularios de acceso ni procesamiento de credenciales de servidores.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Privacidad", href: "/privacidad/" }]} />
        <article className="container prose">
          <p className="legal-updated">Última actualización: 2 de agosto de 2026.</p>

          <h2>Datos solicitados</h2>
          <p>El sitio no solicita claves de servidor, contraseñas, tokens, información de instalación ni datos de acceso.</p>

          <h2>Registros técnicos</h2>
          <p>El servidor web puede generar registros técnicos limitados, como fecha, ruta solicitada, agente de usuario y dirección de red, necesarios para seguridad, diagnóstico y funcionamiento.</p>

          <h2>Analítica opcional</h2>
          <p>La infraestructura está preparada para utilizar analítica Umami respetuosa con la privacidad. La analítica permanece desactivada mientras no se configuren explícitamente sus variables de entorno. Si se activa, esta política deberá reflejar la instancia y el alcance reales.</p>

          <h2>Enlaces externos</h2>
          <p>Los enlaces de Telegram y GitHub dirigen a servicios de terceros sujetos a sus propias políticas.</p>

          <h2>Contenido técnico</h2>
          <p>La página describe únicamente capacidades públicas. Los procesos operativos, credenciales y datos internos permanecen separados del sitio.</p>

          <h2>Conservación</h2>
          <p>Los registros técnicos deben conservarse únicamente durante el tiempo necesario para operación, seguridad y resolución de incidentes.</p>

          <h2>Cambios</h2>
          <p>La política será actualizada cuando el sitio incorpore formularios, cookies, analítica activa u otras funciones que procesen información adicional.</p>
        </article>
      </div>
    </>
  );
}
