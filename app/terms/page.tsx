import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = { alternates: { canonical: "/terms" }, title: "Terms of Use", description: "The rules for using Privé and hosting events: your content, respect for others, reporting and removal." };

export default function Terms() {
  return <LegalPage title="Terms of Use" intro="The short version: Privé connects people to events. The people hosting them are responsible for them." sections={terms} />;
}
