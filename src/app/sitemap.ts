import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/editorial-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/age-notice", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/guides/${article.slug}`,
    lastModified: new Date(article.lastUpdatedISO),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
