import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ajinkya-indulkar.github.io/ajinkya-portfolio/sitemap.xml",
  };
}
