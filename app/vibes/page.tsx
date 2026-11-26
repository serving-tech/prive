import type { Metadata } from "next";
import { ShapeBadge, Shapes } from "@/components/Shapes";
import { PageIntro } from "@/components/PageIntro";
import { GetSection, VibesSection } from "@/components/Sections";

export const metadata: Metadata = { alternates: { canonical: "/vibes" }, title: "Vibes", description: "Every Privé event gets its own look: party, themed, graduation, cultural night or campus." };

const changes = [
  { t: "The card", d: "Events show up in feeds with the ground, accent and shapes of their vibe, so people can tell a graduation from a costume night at a glance." },
  { t: "The page", d: "The guest page, the countdown and the RSVP all take on the vibe. One tap changes the whole look while you are creating." },
  { t: "The modules", d: "Switch on a countdown, a line-up, a dress code or a shared playlist. Only what you turn on shows up." },
];

export default function Vibes() {
  return (
    <>
      <PageIntro tag="Vibes" title="Every event gets its own look">
        Pick the vibe that fits the night. Card, page and countdown follow, so guests know what they are walking into before they read a word.
      </PageIntro>
      <VibesSection withHeading={false} />
      <section className="section has-shapes">
        <Shapes layout="edgeR" />
        <div className="container">
          <p className="eyebrow">What a vibe changes</p>
          <h2 className="h2 mt-1">More than a colour</h2>
          <div className="grid mt-4">
            {changes.map((c, i) => <div key={c.t} className="card"><ShapeBadge i={i + 3} /><h3>{c.t}</h3><p>{c.d}</p></div>)}
          </div>
        </div>
      </section>
      <GetSection />
    </>
  );
}
