import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return <LegalPage title="Terms of Use" intro="The short version: Privé connects people to events. The people hosting them are responsible for them." sections={terms} />;
}
