import type { Metadata } from "next";
import { CheckIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Compatibilidad",
  description: "Sistemas operativos, arquitecturas y capacidades compatibles con Hex Tunnel.",
  alternates: { canonical: "/compatibilidad/" },
};

const matrix = [
  ["SSH, TLS, SSLH y WebSocket", "Compatible", "Compatible"],
  ["Xray", "Compatible", "Compatible"],
  ["Hysteria", "Compatible", "Compatible"],
  ["Hysteria 2", "Compatible", "Compatible"],
  ["ZiVPN", "Compatible", "Compatible"],
  ["Webmin", "Compatible", "Compatible"],
  ["Menú y diagnóstico", "Compatible", "Compatible"],
  ["Módulos heredados específicos", "Disponible", "Disponibilidad limitada"],
] as const;

export default function CompatibilityPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Compatibilidad</p>
          <h1>Preparado para servidores AMD64 y ARM64.</h1>
          <p>La plataforma detecta la arquitectura y habilita únicamente los componentes admitidos para ese entorno.</p>
        </div>
      </section>

      <section className="section-pad container">
        <SectionHeading
          eyebrow="Sistemas operativos"
          title="Distribuciones admitidas"
          description="Se recomienda una VPS limpia, dedicada a Hex Tunnel y con acceso administrativo."
        />
        <div className="os-grid">
          {[
            ["Debian", "12", "Producción"],
            ["Ubuntu", "22.04 LTS", "Producción"],
            ["Ubuntu", "24.04 LTS", "Producción"],
          ].map(([name, version, status]) => (
            <article key={`${name}-${version}`}>
              <span className="os-mark">{name.slice(0, 2).toUpperCase()}</span>
              <div><h2>{name} {version}</h2><p><CheckIcon /> {status}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad panel-section">
        <div className="container">
          <SectionHeading
            eyebrow="Matriz pública"
            title="Capacidades por arquitectura"
            description="Algunos componentes heredados dependen de binarios que no están disponibles para todas las arquitecturas."
          />
          <div className="table-wrap">
            <table>
              <thead><tr><th>Componente</th><th>AMD64 / x86_64</th><th>ARM64 / aarch64</th></tr></thead>
              <tbody>
                {matrix.map(([feature, amd64, arm64]) => (
                  <tr key={feature}><th>{feature}</th><td>{amd64}</td><td>{arm64}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad container">
        <div className="requirements-grid">
          <article><span>01</span><h2>VPS dedicada</h2><p>No se recomienda compartirla con paneles o aplicaciones críticas que modifiquen los mismos servicios y puertos.</p></article>
          <article><span>02</span><h2>Acceso administrativo</h2><p>La instalación requiere permisos de root o un usuario autorizado para utilizar sudo.</p></article>
          <article><span>03</span><h2>Conectividad estable</h2><p>El servidor debe tener acceso a Internet durante la instalación, validación y actualización.</p></article>
        </div>
      </section>
    </>
  );
}
