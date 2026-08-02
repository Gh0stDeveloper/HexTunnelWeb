import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos generales aplicables al sitio público y a la información de Hex Tunnel.",
  alternates: { canonical: "/terminos/" },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Términos de uso</p>
          <h1>Condiciones para utilizar el sitio público de Hex Tunnel.</h1>
          <p>Estas condiciones describen el uso informativo del sitio y los canales oficiales de contacto.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Términos", href: "/terminos/" }]} />
        <article className="container prose">
          <p className="legal-updated">Última actualización: 2 de agosto de 2026.</p>

          <h2>1. Alcance</h2>
          <p>Este sitio presenta información pública sobre Hex Tunnel. No constituye un panel administrativo, no recibe credenciales de servidores y no sustituye las instrucciones entregadas por los administradores oficiales.</p>

          <h2>2. Información del producto</h2>
          <p>Se procura mantener la información actualizada, pero la compatibilidad puede variar según versión, arquitectura, proveedor de VPS y disponibilidad de componentes externos.</p>

          <h2>3. Acceso y soporte</h2>
          <p>El acceso, la instalación y la asistencia se coordinan únicamente por los contactos publicados en la página de <Link href="/soporte/">soporte</Link>. Ningún tercero está autorizado por el solo hecho de utilizar el nombre o la imagen del proyecto.</p>

          <h2>4. Responsabilidad del administrador del servidor</h2>
          <p>Quien administra una VPS debe conservar respaldos, comprobar la legalidad del uso previsto, proteger sus credenciales y revisar el impacto de cualquier cambio antes de aplicarlo.</p>

          <h2>5. Disponibilidad</h2>
          <p>El sitio y los canales de soporte pueden cambiar, interrumpirse o actualizarse sin garantía de disponibilidad continua.</p>

          <h2>6. Uso prohibido</h2>
          <p>El uso del proyecto debe respetar la política de <Link href="/uso-aceptable/">uso aceptable</Link> y la legislación aplicable.</p>

          <h2>7. Cambios</h2>
          <p>Estos términos pueden actualizarse para reflejar nuevas funciones públicas, cambios operativos o requisitos legales.</p>
        </article>
      </div>
    </>
  );
}
