import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { OptionalAnalytics } from "@/components/optional-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig, supportContacts } from "@/lib/site";
import "./globals.css";
import "./professional.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Hex Tunnel — Administración moderna para VPS",
    template: "%s | Hex Tunnel",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "technology",
  keywords: ["Hex Tunnel", "VPS", "SSH", "Xray", "Hysteria", "WebSocket", "servidores"],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Gh0stDeveloper", url: siteConfig.githubUrl }],
  creator: "Hex Tunnel",
  publisher: "Hex Tunnel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: siteConfig.name,
    title: "Hex Tunnel — Administración moderna para VPS",
    description: siteConfig.description,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: "Hex Tunnel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex Tunnel — Administración moderna para VPS",
    description: siteConfig.description,
    images: ["/og-cover.svg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#071019",
};

const publicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "es-MX",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.svg`,
      sameAs: [siteConfig.githubUrl, ...supportContacts.map((contact) => contact.telegramUrl)],
      contactPoint: supportContacts.map((contact) => ({
        "@type": "ContactPoint",
        contactType: "customer support",
        url: contact.telegramUrl,
        availableLanguage: ["Spanish"],
      })),
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#software`,
      name: siteConfig.name,
      applicationCategory: "ServerApplication",
      operatingSystem: "Debian 12, Ubuntu 22.04 LTS, Ubuntu 24.04 LTS",
      softwareVersion: siteConfig.version,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Ir al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <StructuredData data={publicSchema} />
        <OptionalAnalytics />
      </body>
    </html>
  );
}
