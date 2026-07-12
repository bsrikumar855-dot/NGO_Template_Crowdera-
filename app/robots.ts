import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/templates/demo/"],
    },
    sitemap: "https://ngo-template.crowdera.com/sitemap.xml",
  };
}
