import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { GetSection, HostsSection } from "@/components/Sections";

export const metadata: Metadata = { title: "For hosts", description: "Host events as yourself or as a club: vibes, locations, guest limits and check-in." };

const features = [
  { t: "Pick a vibe", d: "Choose how the card and page look. Add a countdown, a line-up, a dress code or a playlist." },
  { t: "Share the location when you can", d: "Drop a pin or paste a Maps link, or leave it to be announced and share it later. Guests are told when it changes." },
  { t: "Keep the exact spot private", d: "Everyone sees the place name. The address, pin and map button unlock for guests who are going." },
  { t: "Set a guest limit", d: "Guests see how many spots are left. When it is full the RSVP closes." },
  { t: "Check people in", d: "See who said yes, who brought a plus one and who has arrived." },
  { t: "Import from Google Calendar", d: "Bring in events you have already planned instead of typing them again." },
];

export default function Hosts() {
  return (
    <>
      <PageIntro tag="For hosts" title="Host as yourself, or as a club">Anyone can put on an event. Here is what you get when you do.</PageIntro>
      <HostsSection />
      <section className="section">
        <div className="container">
          <p className="eyebrow">Everything a host needs</p>
          <h2 className="h2 mt-1">Set it up in a few minutes</h2>
          <div className="grid mt-4">{features.map((f) => <div key={f.t} className="card"><h3>{f.t}</h3><p>{f.d}</p></div>)}</div>
        </div>
      </section>
      <section className="container" style={{ paddingBottom: "clamp(56px, 8vw, 80px)" }}>
        <div className="card split" style={{ borderRadius: 32, padding: "clamp(24px, 5vw, 40px)", alignItems: "center" }}>
          <div>
            <p className="eyebrow">Organizer pages</p>
            <h2 className="h2 mt-1" style={{ fontSize: "clamp(26px, 4vw, 36px)" }}>Run a club, venue or events business?</h2>
            <p className="lead mt-2" style={{ fontSize: 17 }}>Set up a page with your logo and a short bio. People follow it, and every event you post reaches them as a notification. Host as yourself any time, or as your page.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[["Your club or venue", "Club or venue", "#cc3f25"], ["Your campus group", "Campus group", "#2347e0"]].map(([n, t, c]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--ground)", borderRadius: 20, padding: 14 }}>
                <span style={{ width: 48, height: 48, borderRadius: 14, background: c }} aria-hidden="true" />
                <span><b style={{ display: "block" }}>{n}</b><span style={{ fontSize: 14, color: "var(--muted)" }}>{t}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GetSection />
    </>
  );
}
