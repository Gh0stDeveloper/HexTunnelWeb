import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Hex Tunnel — Administración moderna para VPS",
    template: "%s | Hex Tunnel",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["Hex Tunnel", "VPS", "SSH", "Xray", "Hysteria", "WebSocket", "servidores"],
  alternates: {
    canonical: "/",
  },
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
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#071019",
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
      </body>
    </html>
  );
}
