import Link from "next/link";
import { legalNavigation, navigation, productNavigation, siteConfig, supportContacts } from "@/lib/site";

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
            Sitio público oficial. El acceso y la asistencia se entregan únicamente mediante los administradores identificados.
          </p>
        </div>

        <div>
          <h2>Producto</h2>
          <ul>
            {productNavigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Recursos</h2>
          <ul>
            {navigation.slice(2).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Legal y contacto</h2>
          <ul>
            {legalNavigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            {supportContacts.map((contact) => (
              <li key={contact.telegramUrl}>
                <a href={contact.telegramUrl} rel="noreferrer" target="_blank">Telegram · {contact.name}</a>
              </li>
            ))}
            <li><a href={siteConfig.githubUrl} rel="noreferrer" target="_blank">GitHub</a></li>
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
