import type { Metadata } from "next";
import { StepsTrail } from "@/components/HeroArt";
import { PageIntro } from "@/components/PageIntro";
import { JsonLd } from "@/components/JsonLd";
import { faq } from "@/content/legal";
import { FaqSection, GetSection, HowSection } from "@/components/Sections";

export const metadata: Metadata = { alternates: { canonical: "/how-it-works" }, title: "How it works", description: "Find an event, say you are going, tap the map and check in when you arrive." };

export default function How() {
  return (
    <>
      <PageIntro tag="How it works" title="From invite to the door in four steps" tone="navy" art={<StepsTrail />}>
        Find an event, say you are going, tap the map and check in when you arrive.
      </PageIntro>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <HowSection withHeading={false} />
      <FaqSection />
      <GetSection />
    </>
  );
}
