import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRightIcon,
  CheckIcon,
  HeartPulseIcon,
  LayersIcon,
  RefreshIcon,
  ServerIcon,
  ShieldIcon,
  TerminalIcon,
  UsersIcon,
} from "@/components/icons";
import { publicCapabilities, siteConfig } from "@/lib/site";

const benefits = [
  {
    icon: LayersIcon,
    title: "Plataforma modular",
    copy: "Instala y administra únicamente los componentes que necesita cada servidor.",
  },
  {
    icon: ShieldIcon,
    title: "Operaciones verificadas",
    copy: "Los cambios importantes se validan antes de aplicarse para reducir configuraciones incompletas.",
  },
  {
    icon: RefreshIcon,
    title: "Recuperación integrada",
    copy: "Los respaldos y el rollback ayudan a restaurar el sistema cuando una operación no termina correctamente.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Prepara una VPS compatible",
    copy: "Usa una instalación limpia de Debian o Ubuntu con acceso administrativo.",
  },
  {
    number: "02",
    title: "Obtén acceso autorizado",
    copy: "El acceso y las instrucciones de instalación se entregan por los canales oficiales.",
  },
  {
    number: "03",
    title: "Administra desde un solo lugar",
    copy: "Configura servicios, usuarios, diagnósticos, respaldos y actualizaciones desde el menú central.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="status-pill">
              <span /> Hex Tunnel {siteConfig.version} · AMD64 + ARM64
            </div>
            <p className="eyebrow">Infraestructura para servidores VPS</p>
            <h1>
              Servicios de conexión.
              <span>Administración simplificada.</span>
            </h1>
            <p className="hero-lead">
              Hex Tunnel reúne instalación, operación y mantenimiento de tecnologías de conexión en una
              plataforma modular diseñada para servidores dedicados.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/caracteristicas/">
                Explorar características <ArrowRightIcon />
              </Link>
              <a className="button button-secondary" href={siteConfig.supportUrl} rel="noreferrer" target="_blank">
                Solicitar información
              </a>
            </div>
            <div className="hero-trust">
              <span><CheckIcon /> Debian 12</span>
              <span><CheckIcon /> Ubuntu 22.04 / 24.04</span>
              <span><CheckIcon /> AMD64 y ARM64</span>
            </div>
          </div>

          <div className="product-preview" aria-label="Vista conceptual de Hex Tunnel">
            <div className="preview-topbar">
              <div className="preview-dots"><i /><i /><i /></div>
              <span>Hex Tunnel Control</span>
              <span className="online-chip">Operativo</span>
            </div>
            <div className="preview-body">
              <aside className="preview-sidebar" aria-hidden="true">
                <div className="active"><TerminalIcon /> Panel</div>
                <div><ServerIcon /> Servicios</div>
                <div><UsersIcon /> Usuarios</div>
                <div><HeartPulseIcon /> Diagnóstico</div>
              </aside>
              <div className="preview-content">
                <div className="preview-heading">
                  <div><small>Estado general</small><strong>Servidor preparado</strong></div>
                  <span>Última revisión: ahora</span>
                </div>
                <div className="metric-grid">
                  <div><small>Servicios</small><strong>08</strong><span>activos</span></div>
                  <div><small>Usuarios</small><strong>24</strong><span>administrados</span></div>
                  <div><small>Salud</small><strong>100%</strong><span>sin incidencias</span></div>
                </div>
                <div className="service-list">
                  {[
                    ["SSH + TLS", "Activo"],
                    ["Xray", "Activo"],
                    ["Hysteria 2", "Activo"],
                    ["Respaldos", "Preparado"],
                  ].map(([name, state]) => (
                    <div key={name}>
                      <span><i />{name}</span>
                      <strong>{state}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <div className="container capability-row" aria-label="Tecnologías y capacidades">
          {publicCapabilities.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-pad container">
        <SectionHeading
          eyebrow="Para qué sirve"
          title="Una base operativa para administrar servicios de conexión"
          description="Hex Tunnel reduce tareas repetitivas y reúne funciones esenciales para operar una VPS de forma más clara, consistente y recuperable."
        />
        <div className="feature-grid three-columns">
          {benefits.map(({ icon: Icon, title, copy }) => (
            <article className="feature-card" key={title}>
              <span className="icon-box"><Icon /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad panel-section">
        <div className="container split-section">
          <div>
            <SectionHeading
              eyebrow="Control centralizado"
              title="Menos comandos aislados. Más contexto operativo."
              description="Consulta el estado del sistema, administra cuentas y ejecuta tareas habituales desde una experiencia organizada."
            />
            <ul className="check-list">
              <li><CheckIcon /> Instalación y mantenimiento por módulos.</li>
              <li><CheckIcon /> Estado general y diagnóstico de servicios.</li>
              <li><CheckIcon /> Administración de cuentas y vencimientos.</li>
              <li><CheckIcon /> Respaldos, restauración y rollback.</li>
              <li><CheckIcon /> Actualización del framework y del menú.</li>
            </ul>
            <Link className="text-link" href="/caracteristicas/">
              Ver todas las capacidades <ArrowRightIcon />
            </Link>
          </div>
          <div className="command-card">
            <div className="command-card-title"><TerminalIcon /> Flujo administrativo</div>
            <div className="command-line"><span>01</span><p>Revisión previa del servidor</p><strong>Correcto</strong></div>
            <div className="command-line"><span>02</span><p>Configuración de componentes</p><strong>Aplicada</strong></div>
            <div className="command-line"><span>03</span><p>Validación de servicios</p><strong>Operativo</strong></div>
            <div className="command-line"><span>04</span><p>Punto de recuperación</p><strong>Disponible</strong></div>
          </div>
        </div>
      </section>

      <section className="section-pad container">
        <SectionHeading
          eyebrow="Proceso"
          title="De una VPS limpia a una plataforma administrada"
          description="La instalación se entrega mediante los canales autorizados. La web pública no solicita ni procesa credenciales."
          centered
        />
        <div className="workflow-grid">
          {workflow.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad container">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Información y acceso</p>
            <h2>Conoce la compatibilidad antes de preparar tu servidor.</h2>
            <p>Consulta plataformas admitidas, diferencias por arquitectura y recomendaciones de instalación.</p>
          </div>
          <div className="cta-actions">
            <Link className="button" href="/compatibilidad/">Ver compatibilidad</Link>
            <a className="button button-secondary" href={siteConfig.supportUrl} rel="noreferrer" target="_blank">
              Contactar soporte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
