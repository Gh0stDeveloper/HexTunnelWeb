import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, HeartPulseIcon, LayersIcon, RefreshIcon, ServerIcon, ShieldIcon, UsersIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Características",
  description: "Conoce las capacidades públicas de Hex Tunnel para instalación, administración, diagnóstico y recuperación de servicios en VPS.",
  alternates: { canonical: "/caracteristicas/" },
};

const groups = [
  {
    icon: LayersIcon,
    title: "Instalación modular",
    description: "Selecciona componentes compatibles con la plataforma y la arquitectura del servidor.",
    items: ["Instalación por módulos", "Validación previa", "Configuración consistente", "Desinstalación controlada"],
  },
  {
    icon: ServerIcon,
    title: "Servicios de conexión",
    description: "Centraliza diferentes tecnologías en una estructura operativa común.",
    items: ["SSH y TLS", "WebSocket", "Xray", "Hysteria", "Hysteria 2", "ZiVPN"],
  },
  {
    icon: UsersIcon,
    title: "Administración de usuarios",
    description: "Gestiona cuentas, límites y vencimientos desde herramientas integradas.",
    items: ["Altas y bajas", "Expiraciones", "Revisión de cuentas", "Operaciones repetibles"],
  },
  {
    icon: HeartPulseIcon,
    title: "Diagnóstico",
    description: "Comprueba el estado general y detecta servicios que requieren atención.",
    items: ["Estado de servicios", "Revisión del sistema", "Información sanitizada", "Auditorías periódicas"],
  },
  {
    icon: RefreshIcon,
    title: "Respaldo y recuperación",
    description: "Reduce el impacto de una configuración fallida con puntos de recuperación.",
    items: ["Respaldos verificables", "Restauración", "Rollback", "Protección ante operaciones parciales"],
  },
  {
    icon: ShieldIcon,
    title: "Mantenimiento controlado",
    description: "Actualiza componentes y valida su estado antes de completar el cambio.",
    items: ["Actualizaciones verificadas", "Bloqueo de operaciones simultáneas", "Comprobación posterior", "Recuperación automática"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Características</p>
          <h1>Herramientas para operar una VPS con mayor consistencia.</h1>
          <p>Hex Tunnel organiza servicios, usuarios, diagnósticos y recuperación dentro de una plataforma modular.</p>
        </div>
      </section>

      <section className="section-pad container">
        <div className="feature-grid two-columns">
          {groups.map(({ icon: Icon, title, description, items }) => (
            <article className="detail-card" key={title}>
              <div className="detail-card-head">
                <span className="icon-box"><Icon /></span>
                <div><h2>{title}</h2><p>{description}</p></div>
              </div>
              <ul className="compact-list">
                {items.map((item) => <li key={item}><CheckIcon />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad panel-section">
        <div className="container split-section align-center">
          <div>
            <SectionHeading
              eyebrow="Diseño operativo"
              title="Cada operación importante tiene validación y recuperación."
              description="La plataforma prioriza cambios completos y comprobables frente a configuraciones parciales difíciles de mantener."
            />
          </div>
          <div className="principle-stack">
            <div><span>1</span><p><strong>Preparar</strong>Comprueba plataforma, recursos y requisitos.</p></div>
            <div><span>2</span><p><strong>Aplicar</strong>Ejecuta la operación de forma controlada.</p></div>
            <div><span>3</span><p><strong>Validar</strong>Confirma servicios y configuración.</p></div>
            <div><span>4</span><p><strong>Recuperar</strong>Revierte cuando el resultado no es correcto.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad container centered-block">
        <SectionHeading
          eyebrow="Siguiente paso"
          title="Revisa qué funciones están disponibles en cada arquitectura."
          centered
        />
        <Link className="button" href="/compatibilidad/">Consultar compatibilidad <ArrowRightIcon /></Link>
      </section>
    </>
  );
}
