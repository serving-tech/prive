import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Only pages worth finding. /get redirects to the waitlist until launch, and /waitlist always redirects home, so neither is listed then.
export default function sitemap(): MetadataRoute.Sitemap {
  const legal = new Date(site.legalUpdated);
  const lastModified = Number.isNaN(legal.getTime()) ? undefined : legal;
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly"; legal?: boolean }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
    { path: "/vibes", priority: 0.7, changeFrequency: "monthly" },
    { path: "/hosts", priority: 0.7, changeFrequency: "monthly" },
    ...(site.waitlist ? [] : [{ path: "/get", priority: 0.9, changeFrequency: "monthly" as const }]),
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly", legal: true },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly", legal: true },
    { path: "/delete-account", priority: 0.3, changeFrequency: "yearly", legal: true },
  ];
  return pages.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: p.changeFrequency, priority: p.priority, ...(p.legal && lastModified ? { lastModified } : {}) }));
}
