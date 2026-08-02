import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Hex Tunnel 1.0.0-rc.3",
  description: "Notas públicas de la versión 1.0.0-rc.3 de Hex Tunnel.",
  alternates: { canonical: "/novedades/1-0-0-rc-3/" },
};

export default function ReleasePage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">Release candidate</p>
          <h1>Hex Tunnel 1.0.0-rc.3</h1>
          <p>Notas públicas del 2 de agosto de 2026.</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs
          items={[
            { label: "Novedades", href: "/novedades/" },
            { label: "1.0.0-rc.3", href: "/novedades/1-0-0-rc-3/" },
          ]}
        />
        <article className="container prose">
          <p className="legal-updated">Publicado el 2 de agosto de 2026 · Canal público</p>

          <h2>Presentación pública</h2>
          <ul>
            <li>Sitio oficial independiente del endpoint histórico del instalador.</li>
            <li>Documentación pública y navegación ampliada.</li>
            <li>Galería preparada para capturas sanitizadas.</li>
            <li>Soporte oficial con dos administradores.</li>
          </ul>

          <h2>Compatibilidad</h2>
          <ul>
            <li>Información pública para AMD64/x86_64 y ARM64/aarch64.</li>
            <li>Debian 12, Ubuntu 22.04 LTS y Ubuntu 24.04 LTS.</li>
            <li>Matriz pública para componentes principales y módulos heredados.</li>
          </ul>

          <h2>Mantenimiento y seguridad</h2>
          <ul>
            <li>Despliegues estáticos versionados con cambio atómico.</li>
            <li>Validación de TypeScript, build, rutas públicas y configuración Nginx.</li>
            <li>Políticas públicas de privacidad, seguridad y uso aceptable.</li>
            <li>Ausencia de credenciales, tokens y detalles de infraestructura interna.</li>
          </ul>

          <div className="callout">
            Al ser una versión candidata, algunas capacidades públicas pueden ajustarse antes de la versión estable.
          </div>
        </article>
      </div>
    </>
  );
}
