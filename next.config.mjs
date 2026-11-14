// Event links are shared as prive.vixe.africa/e/<code>. The backend renders those pages (and the preview image that
// WhatsApp and others fetch), so this site proxies them. The address people see never changes to the API host.
const API_ORIGIN = process.env.API_ORIGIN ?? "https://prive.inoseek.ai";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      { source: "/e/:code", destination: `${API_ORIGIN}/e/:code/` },
      { source: "/e/:code/", destination: `${API_ORIGIN}/e/:code/` },
      { source: "/e/:code/photos", destination: `${API_ORIGIN}/e/:code/photos/` },
      { source: "/e/:code/photos/", destination: `${API_ORIGIN}/e/:code/photos/` },
      { source: "/e/:code/og.jpg", destination: `${API_ORIGIN}/e/:code/og.jpg` },
      // Android App Links check this file on the domain that appears in shared links.
      { source: "/.well-known/assetlinks.json", destination: `${API_ORIGIN}/.well-known/assetlinks.json` },
    ];
  },
};

export default nextConfig;
