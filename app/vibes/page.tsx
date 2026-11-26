import type { Metadata } from "next";
import { VibeFan } from "@/components/HeroArt";
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
      <PageIntro tag="Vibes" title="Every event gets its own look" tone="violet" art={<VibeFan />}>
        Pick the vibe that fits the night. Card, page and countdown follow, so guests know what they are walking into before they read a word.
      </PageIntro>
      <VibesSection withHeading={false} />
      <section className="section">
        <div className="container">
          <p className="eyebrow">What a vibe changes</p>
          <h2 className="h2 mt-1">More than a colour</h2>
          <div className="big3 mt-4">
            {changes.map((c, i) => {
              const look = [["#cc3f25", "#e8b64c"], ["#12284a", "#e8b64c"], ["#1f4d3a", "#ff8a1f"]][i % 3];
              return (
                <div key={c.t} className="big3__p" style={{ background: look[0] }}>
                  <i style={{ background: look[1] }} aria-hidden="true" />
                  <b>0{i + 1}</b>
                  <div><h3>{c.t}</h3><p>{c.d}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <GetSection />
    </>
  );
}
