import Link from "next/link";
import { navigation, siteConfig, supportContacts } from "@/lib/site";

export function SiteHeader() {
  const primarySupport = supportContacts[0];

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            {siteConfig.shortName}
          </span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>VPS connectivity platform</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="button button-small" href={primarySupport.telegramUrl} rel="noreferrer" target="_blank">
          Contactar
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <nav aria-label="Navegación móvil">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={primarySupport.telegramUrl} rel="noreferrer" target="_blank">
              Contactar soporte
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
