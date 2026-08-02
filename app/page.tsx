import Link from "next/link";
import { MediaImage } from "@/components/media-image";
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
import { publicCapabilities, siteConfig, supportContacts } from "@/lib/site";

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

const professionalResources = [
  {
    kicker: "Centro oficial",
    title: "Documentación pública",
    copy: "Requisitos, preparación de VPS, arquitecturas, actualizaciones, respaldos y solución de problemas.",
    href: "/documentacion/",
    label: "Abrir documentación",
  },
  {
    kicker: "Transparencia",
    title: "Novedades y versiones",
    copy: "Cambios públicos, compatibilidad y notas de versión sin exponer infraestructura interna.",
    href: "/novedades/",
    label: "Consultar novedades",
  },
  {
    kicker: "Confianza",
    title: "Seguridad y uso responsable",
    copy: "Canal de reporte, términos, privacidad y política de uso aceptable.",
    href: "/seguridad/",
    label: "Revisar seguridad",
  },
] as const;

export default function HomePage() {
  const primarySupport = supportContacts[0];

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
              <Link className="button button-secondary" href="/documentacion/">
                Ver documentación
              </Link>
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

      <section className="section-pad panel-section home-professional-section">
        <div className="container">
          <SectionHeading
            eyebrow="Producto verificable"
            title="Documentación, novedades y políticas en un solo sitio"
            description="La web pública distingue claramente la información del producto, los contactos oficiales y las reglas de uso."
          />
          <div className="home-resource-grid">
            {professionalResources.map((resource) => (
              <article className="resource-card" key={resource.href}>
                <p className="card-kicker">{resource.kicker}</p>
                <h3>{resource.title}</h3>
                <p>{resource.copy}</p>
                <Link className="text-link" href={resource.href}>{resource.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad container">
        <SectionHeading
          eyebrow="Galería"
          title="Capturas reales cuando estén disponibles"
          description="La página ya reconoce los nombres definitivos de los archivos. Mientras no se suban, muestra recursos de sustitución sin romper el diseño."
        />
        <div className="home-media-preview">
          <article className="media-card">
            <div className="media-frame">
              <MediaImage src="/media/screenshot-panel-general.webp" alt="Panel general de Hex Tunnel" />
            </div>
            <div className="media-card-content"><h3>Panel general</h3><p>Vista pública sanitizada del menú principal.</p></div>
          </article>
          <article className="media-card">
            <div className="media-frame">
              <MediaImage src="/media/screenshot-servicios.webp" alt="Servicios de Hex Tunnel" />
            </div>
            <div className="media-card-content"><h3>Servicios</h3><p>Componentes modulares y estado operativo.</p></div>
          </article>
          <article className="media-card">
            <div className="media-frame">
              <MediaImage src="/media/screenshot-diagnostico.webp" alt="Diagnóstico de Hex Tunnel" />
            </div>
            <div className="media-card-content"><h3>Diagnóstico</h3><p>Información sanitizada para revisión del sistema.</p></div>
          </article>
        </div>
        <p><Link className="text-link" href="/galeria/">Abrir galería completa →</Link></p>
      </section>

      <section className="section-pad container">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Información y acceso</p>
            <h2>Dos administradores oficiales para asistencia.</h2>
            <p>Si uno no está disponible, consulta la página de soporte para contactar al segundo administrador.</p>
          </div>
          <div className="cta-actions">
            <Link className="button" href="/soporte/">Ver soporte oficial</Link>
            <a className="button button-secondary" href={primarySupport.telegramUrl} rel="noreferrer" target="_blank">
              Contactar a {primarySupport.name}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
