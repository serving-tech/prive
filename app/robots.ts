import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Everything public is open to everyone: search engines and AI systems alike, named so the intent is explicit.
// Only the one-time links from emails and the app hand-off pages are kept out.
const PRIVATE = ["/api/", "/open/", "/waitlist/confirm/", "/waitlist/unsubscribe/", "/waitlist/confirmed", "/waitlist/unsubscribed"];

const AI_AND_SEARCH = [
  "Googlebot", "Bingbot", "DuckDuckBot", "Applebot", "Applebot-Extended", "Google-Extended",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "Claude-Web",
  "PerplexityBot", "Perplexity-User", "CCBot", "cohere-ai", "Meta-ExternalAgent", "Meta-ExternalFetcher", "Amazonbot", "DuckAssistBot", "YouBot", "MistralAI-User", "Diffbot", "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_AND_SEARCH, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
