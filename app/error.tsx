"use client";

import Link from "next/link";
import { useEffect } from "react";
import { StatusPage } from "@/components/StatusPage";

// Shown when a page on this site breaks while it is loading. "Try again" re-renders just that page.
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <StatusPage code="Oops" tag="Something broke" title="That did not load" tone="ink"
      actions={<>
        <button type="button" className="btn btn--accent" onClick={reset}>Try again</button>
        <Link href="/" className="btn btn--white">Back to home</Link>
      </>}>
      It is on our side, not yours. Try once more, and if it keeps happening tell us what you were opening.
      {error.digest ? <span className="fineprint" style={{ display: "block", marginTop: 8 }}>Reference: {error.digest}</span> : null}
    </StatusPage>
  );
}
