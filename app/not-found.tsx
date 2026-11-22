import type { Metadata } from "next";
import { StatusPage } from "@/components/StatusPage";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <StatusPage code="404" tag="Lost the plot" title="This page is not here">
      The link may be old or mistyped. If a friend sent you an event, open it in the Privé app, where every event has its own page.
    </StatusPage>
  );
}
