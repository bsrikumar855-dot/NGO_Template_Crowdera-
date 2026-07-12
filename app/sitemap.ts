import { MetadataRoute } from "next";
import { programsList } from "@/content/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ngo-template.crowdera.com";

  // Static routes
  const routes = ["", "/programs", "/donate", "/not-found"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic program detail routes
  const programRoutes = programsList.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...programRoutes];
}
