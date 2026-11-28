import { NextResponse, type NextRequest } from "next/server";

// The waitlist requests are passed on to the API by next.config.mjs, so the API sees this site's servers, not the visitor. To give each
// visitor their own rate limit, we send the visitor's address, with a secret that proves the request came through this site.
// WAITLIST_PROXY_SECRET is the same long random value as WEBSITE_PROXY_SECRET on the API. It stays on the server: no NEXT_PUBLIC_ prefix.
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.delete("x-prive-visitor");          // never pass on a visitor's own version of these
  headers.delete("x-prive-proxy");

  const secret = process.env.WAITLIST_PROXY_SECRET;
  // Vercel sets both of these itself, overwriting anything the visitor sent.
  const visitor = request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  if (secret && visitor) {
    headers.set("x-prive-visitor", visitor);
    headers.set("x-prive-proxy", secret);
  }
  return NextResponse.next({ request: { headers } });
}

// Every address next.config.mjs sends to the API's waitlist.
export const config = {
  matcher: ["/api/waitlist", "/api/waitlist/token", "/waitlist/confirm/:token", "/waitlist/unsubscribe/:token"],
};
