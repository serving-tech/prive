import type { Metadata } from "next";
import Link from "next/link";
import { StatusPage } from "@/components/StatusPage";

export const metadata: Metadata = { title: "Waitlist", robots: { index: false } };

// The confirmation email's button ends here (the backend redirects). ?problem=1 means the link was not recognised.
export default async function Confirmed({ searchParams }: { searchParams: Promise<{ problem?: string }> }) {
  const { problem } = await searchParams;
  const actions = <Link href="/" className="btn btn--accent">Back to home</Link>;
  if (problem) {
    return (
      <StatusPage code="?" tag="Waitlist" title="That link did not work" tone="ink" actions={<Link href="/waitlist" className="btn btn--accent">Join again</Link>}>
        The link may be old or copied wrongly. Join the waitlist again and we will send a fresh one.
      </StatusPage>
    );
  }
  return (
    <StatusPage code="✓" tag="Waitlist" title="You are confirmed" tone="accent" actions={actions}>
      Thank you. You are on the Privé waitlist, and we will email you the launch date and the link to the app. Nothing else.
    </StatusPage>
  );
}
