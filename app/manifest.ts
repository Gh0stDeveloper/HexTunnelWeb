import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hex Tunnel",
    short_name: "Hex Tunnel",
    description: "Plataforma modular para administrar servicios de conexión en servidores VPS compatibles.",
    start_url: "/",
    display: "standalone",
    background_color: "#071019",
    theme_color: "#071019",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
