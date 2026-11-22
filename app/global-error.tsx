"use client";

import "./globals.css";

// The last safety net: if even the shared layout fails, this replaces the whole page. It cannot use the header or footer (they are what failed),
// so it stands alone with the same colours.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="container status" style={{ minHeight: "100vh", justifyContent: "center" }}>
          <div className="status__text">
            <p className="wordmark" style={{ fontSize: 40 }}>Privé</p>
            <h1 className="h2 mt-3">Something went wrong</h1>
            <p className="lead mt-2 max-640">The site could not load. It is on our side. Try again in a moment.</p>
            <div className="btn-row mt-3">
              <button type="button" className="btn btn--accent" onClick={reset}>Try again</button>
              <a href="/" className="btn btn--white">Back to home</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
