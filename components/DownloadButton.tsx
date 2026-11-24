import Link from "next/link";
import { site } from "@/content/site";

type Props = { className?: string; children?: React.ReactNode; page?: boolean };

// Goes straight to the store or APK once NEXT_PUBLIC_DOWNLOAD_URL is set; until then it opens the /get page.
export function DownloadButton({ className = "btn btn--accent", children = "Get the Android app", page = false }: Props) {
  if (site.waitlist) {
    return <Link className={className} href="/waitlist">Join the waitlist</Link>;
  }
  if (site.downloadUrl && !page) {
    return <a className={className} href={site.downloadUrl}>{children}</a>;
  }
  return <Link className={className} href="/get">{children}</Link>;
}
