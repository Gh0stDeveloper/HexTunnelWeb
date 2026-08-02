import type { MetadataRoute } from "next";
import { documentationSections } from "@/lib/documentation";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/caracteristicas",
  "/compatibilidad",
  "/documentacion",
  ...documentationSections.map((section) => `/documentacion/${section.slug}`),
  "/galeria",
  "/novedades",
  "/novedades/1-0-0-rc-3",
  "/hoja-de-ruta",
  "/soporte",
  "/desarrolladores",
  "/preguntas",
  "/privacidad",
  "/terminos",
  "/uso-aceptable",
  "/seguridad",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/novedades" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/documentacion") ? 0.8 : 0.7,
  }));
}
