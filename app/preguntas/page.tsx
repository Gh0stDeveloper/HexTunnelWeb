import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas públicas sobre requisitos, compatibilidad, instalación y soporte de Hex Tunnel.",
  alternates: { canonical: "/preguntas/" },
};

const faqs = [
  ["¿Qué es Hex Tunnel?", "Es una plataforma modular para instalar, administrar, diagnosticar y mantener servicios de conexión en una VPS compatible."],
  ["¿Necesito una VPS?", "Sí. Hex Tunnel está diseñado para servidores VPS dedicados con Debian 12, Ubuntu 22.04 LTS o Ubuntu 24.04 LTS."],
  ["¿Funciona en ARM64?", "Sí. La plataforma admite AMD64 y ARM64. Algunos módulos heredados pueden tener disponibilidad diferente según la arquitectura."],
  ["¿Puedo instalarlo junto con otros paneles?", "No es recomendable. Otros paneles pueden modificar puertos, firewall y servicios utilizados por Hex Tunnel."],
  ["¿La página web solicita credenciales?", "No. Este sitio es únicamente informativo y no solicita contraseñas, claves de servidor ni datos de acceso."],
  ["¿Dónde obtengo las instrucciones de instalación?", "Las instrucciones y el acceso se entregan únicamente mediante los canales autorizados de soporte."],
  ["¿Se puede actualizar sin reinstalar todo?", "La plataforma incluye un flujo de actualización para componentes mantenidos, sujeto a la versión instalada y la compatibilidad del servidor."],
  ["¿Cuenta con recuperación ante errores?", "Sí. Las operaciones principales incluyen respaldos, validaciones y mecanismos de rollback cuando corresponda."],
  ["¿Cómo recibo soporte?", "El soporte público se coordina mediante el canal oficial de Telegram indicado en esta página."],
] as const;

export default function FaqPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h1>Información pública antes de preparar tu servidor.</h1>
          <p>Estas respuestas describen el producto sin exponer información de la infraestructura operativa.</p>
        </div>
      </section>

      <section className="section-pad container faq-list">
        {faqs.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>

      <section className="section-pad container">
        <div className="cta-card compact-cta">
          <div><h2>¿Necesitas información adicional?</h2><p>Utiliza únicamente el canal oficial para consultar disponibilidad y acceso.</p></div>
          <a className="button" href={siteConfig.supportUrl} rel="noreferrer" target="_blank">Contactar soporte</a>
        </div>
      </section>
    </>
  );
}
