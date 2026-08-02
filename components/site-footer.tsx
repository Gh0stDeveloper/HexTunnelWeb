import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              {siteConfig.shortName}
            </span>
            <span>
              <strong>{siteConfig.name}</strong>
              <small>Administración moderna para VPS</small>
            </span>
          </div>
          <p className="footer-copy">
            Sitio público informativo. El acceso al producto se entrega únicamente por canales autorizados.
          </p>
        </div>

        <div>
          <h2>Explorar</h2>
          <ul>
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contacto</h2>
          <ul>
            <li>
              <a href={siteConfig.supportUrl} rel="noreferrer" target="_blank">
                Telegram
              </a>
            </li>
            <li>
              <a href={siteConfig.githubUrl} rel="noreferrer" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <Link href="/privacidad/">Privacidad</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hex Tunnel.</span>
        <span>Versión pública {siteConfig.version}</span>
      </div>
    </footer>
  );
}
