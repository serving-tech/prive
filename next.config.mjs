// Event links are shared as prive.vixe.africa/e/<code>. The backend renders those pages (and the preview image that
// WhatsApp and others fetch), so this site proxies them. The address people see never changes to the API host.
const API_ORIGIN = process.env.API_ORIGIN ?? "https://prive.inoseek.ai";

// The Google Play link. It is decided here, while the site is built, and only the result goes into the site: an empty string until BOTH
// NEXT_PUBLIC_LAUNCHED=true and NEXT_PUBLIC_DOWNLOAD_URL are set. The app code must never read those two itself: Next copies any
// NEXT_PUBLIC_ value it reads into the scripts visitors download, even from a branch that never runs.
const STORE_LINK = process.env.NEXT_PUBLIC_LAUNCHED === "true" ? (process.env.NEXT_PUBLIC_DOWNLOAD_URL ?? "").trim() : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { STORE_LINK },
  reactStrictMode: true,
  poweredByHeader: false,
  skipTrailingSlashRedirect: true,   // /e/<code>/ is proxied as written instead of being redirected
  async rewrites() {
    return [
      { source: "/e/:code", destination: `${API_ORIGIN}/e/:code/` },
      { source: "/e/:code/", destination: `${API_ORIGIN}/e/:code/` },
      { source: "/e/:code/photos", destination: `${API_ORIGIN}/e/:code/photos/` },
      { source: "/e/:code/photos/", destination: `${API_ORIGIN}/e/:code/photos/` },
      { source: "/e/:code/og.jpg", destination: `${API_ORIGIN}/e/:code/og.jpg` },
      // Waitlist: the form posts here, and the links in the confirmation email land here. Same address as the site, so no CORS.
      { source: "/api/waitlist/token", destination: `${API_ORIGIN}/api/v1/waitlist/token/` },
      { source: "/api/waitlist", destination: `${API_ORIGIN}/api/v1/waitlist/` },
      { source: "/waitlist/confirm/:token", destination: `${API_ORIGIN}/api/v1/waitlist/confirm/:token/` },
      { source: "/waitlist/unsubscribe/:token", destination: `${API_ORIGIN}/api/v1/waitlist/unsubscribe/:token/` },
      // The "Open Privé" buttons in our emails. Phones with the app open it; everyone else sees the backend's "get the app" page.
      { source: "/p/:code", destination: `${API_ORIGIN}/p/:code/` },
      { source: "/p/:code/", destination: `${API_ORIGIN}/p/:code/` },
      { source: "/@:slug", destination: `${API_ORIGIN}/@:slug/` },
      { source: "/@:slug/", destination: `${API_ORIGIN}/@:slug/` },
      { source: "/h/:slug", destination: `${API_ORIGIN}/h/:slug/` },
      { source: "/h/:slug/", destination: `${API_ORIGIN}/h/:slug/` },
      { source: "/o/:slug", destination: `${API_ORIGIN}/o/:slug/` },
      { source: "/o/:slug/", destination: `${API_ORIGIN}/o/:slug/` },
      { source: "/open/:path*", destination: `${API_ORIGIN}/open/:path*` },
      // Android App Links check this file on the domain that appears in shared links.
      { source: "/.well-known/assetlinks.json", destination: `${API_ORIGIN}/.well-known/assetlinks.json` },
    ];
  },
};

export default nextConfig;
