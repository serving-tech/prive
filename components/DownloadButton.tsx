import Link from "next/link";
import { site } from "@/content/site";

type Props = { className?: string; children?: React.ReactNode; page?: boolean };

// "Join the waitlist" until the store link is public (see content/site.ts); after that it goes straight to the store.
export function DownloadButton({ className = "btn btn--accent", children = "Get the Android app", page = false }: Props) {
  if (site.waitlist) {
    return <Link className={className} href="/#join">Join the waitlist</Link>;
  }
  if (site.downloadUrl && !page) {
    return <a className={className} href={site.downloadUrl}>{children}</a>;
  }
  return <Link className={className} href="/get">{children}</Link>;
}
