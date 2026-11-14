import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacy } from "@/content/legal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return <LegalPage title="Privacy Policy" intro="What we collect, why, and how you can remove it. Plain words, no tricks." sections={privacy} />;
}
