import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { FaqSection, GetSection, HowSection } from "@/components/Sections";

export const metadata: Metadata = { title: "How it works", description: "Find an event, say you are going, tap the map and check in when you arrive." };

export default function How() {
  return (
    <>
      <PageIntro tag="How it works" title="From invite to the door in four steps">
        Find an event, say you are going, tap the map and check in when you arrive.
      </PageIntro>
      <HowSection withHeading={false} />
      <FaqSection />
      <GetSection />
    </>
  );
}
