import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Crowdera NGO Template Engine",
    short_name: "Crowdera NGO",
    description: "Highly configurable, dynamic theme and layout multi-tenant website template system.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#220 80% 30%",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
