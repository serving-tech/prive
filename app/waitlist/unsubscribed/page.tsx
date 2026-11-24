import type { Metadata } from "next";
import Link from "next/link";
import { StatusPage } from "@/components/StatusPage";

export const metadata: Metadata = { title: "Waitlist", robots: { index: false } };

export default async function Unsubscribed({ searchParams }: { searchParams: Promise<{ problem?: string }> }) {
  const { problem } = await searchParams;
  if (problem) {
    return (
      <StatusPage code="?" tag="Waitlist" title="That link did not work" tone="ink" actions={<Link href="/" className="btn btn--accent">Back to home</Link>}>
        The link may be old or copied wrongly. Write to us and we will take you off the list by hand.
      </StatusPage>
    );
  }
  return (
    <StatusPage code="✓" tag="Waitlist" title="You are off the list" tone="blue" actions={<Link href="/waitlist" className="btn btn--white">Changed your mind? Join again</Link>}>
      We will not email you about the launch any more. If this was a mistake, you can join again whenever you like.
    </StatusPage>
  );
}
