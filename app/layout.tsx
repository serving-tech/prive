import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-sans", display: "swap" });
const display = Outfit({ subsets: ["latin"], weight: ["600"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Vixe Africa" }],
  creator: "Vixe Africa",
  publisher: "Vixe Africa",
  category: "events",
  keywords: ["events app", "campus events", "graduation party", "RSVP", "host an event", "event countdown", "Android app"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { types: { "text/plain": [{ url: "/llms.txt", title: "Site summary for AI systems" }] } },
  openGraph: { title: `${site.name}: ${site.tagline}`, description: site.description, siteName: site.name, type: "website", url: site.url, locale: "en" },
  twitter: { card: "summary_large_image", title: `${site.name}: ${site.tagline}`, description: site.description },
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, logo: `${site.url}/icon.png`, description: site.description,
      email: site.supportEmail, parentOrganization: { "@type": "Organization", name: "Vixe Africa" },
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, description: site.description, inLanguage: "en", publisher: { "@id": `${site.url}/#organization` } },
    // The app itself is only described once there is somewhere to download it.
    ...(!site.waitlist && site.downloadUrl
      ? [{ "@type": "MobileApplication", name: site.name, operatingSystem: "ANDROID", applicationCategory: "LifestyleApplication", description: site.description, downloadUrl: site.downloadUrl, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, publisher: { "@id": `${site.url}/#organization` } }]
      : []),
  ],
};

export const viewport: Viewport = { themeColor: "#f5f2ef", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <JsonLd data={organization} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
