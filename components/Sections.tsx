import Link from "next/link";
import { faq } from "@/content/legal";
import { site } from "@/content/site";
import { ShapeBadge, Shapes } from "./Shapes";
import { DownloadButton } from "./DownloadButton";
import { HowStack } from "./HowStack";
import { VibeCards } from "./VibeCards";

export function VibesSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section section--white has-shapes">
      {withHeading ? <Shapes layout="edgeR" /> : null}
      <div className="container">
        {withHeading ? (
          <>
            <p className="eyebrow">Vibes</p>
            <h2 className="h2 mt-1 max-820">Every event gets its own look</h2>
            <p className="lead mt-2 max-640">Pick a vibe when you create an event and the card, the page and the countdown all follow. Guests know what kind of night it is before they read a word.</p>
          </>
        ) : null}
        <div className={withHeading ? "mt-4" : undefined}><VibeCards /></div>
        {withHeading ? <p className="mt-3"><Link href="/vibes" className="fineprint" style={{ fontWeight: 700, textDecoration: "underline" }}>More about vibes</Link></p> : null}
      </div>
    </section>
  );
}

export function HowSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="section has-shapes">
      {withHeading ? <Shapes layout="edgeL" /> : null}
      <div className="container">
        {withHeading ? (
          <>
            <p className="eyebrow">How it works</p>
            <h2 className="h2 mt-1">Three taps from invite to door</h2>
          </>
        ) : null}
        <div className={withHeading ? "mt-4" : undefined}><HowStack /></div>
      </div>
    </section>
  );
}

export const hostFeatures = [
  { t: "Location, your way", d: "Drop a pin, paste a Maps link, or say it is still to be announced and tell guests later. Keep the exact spot for people who are going." },
  { t: "Cap the guest list", d: "Set a limit and guests see how many spots are left. When it is full, the RSVP closes itself." },
  { t: "Know who is coming", d: "See who said yes, who brought a plus one and who has arrived. Check people in at the door." },
  { t: "Message your guests", d: "Send an update to everyone going. They get a push and an email." },
];

export function HostsSection() {
  return (
    <section className="section section--ink has-shapes">
      <Shapes layout="ink" />
      <div className="container split">
        <div>
          <p className="eyebrow">For hosts</p>
          <h2 className="h2 mt-1">Host as yourself, or as a club</h2>
          <p className="lead mt-2">Anyone can put on an event. Run a club, venue or events business? Set up a page people can follow, and every event you post reaches them.</p>
          <div className="mt-4 btn-row"><DownloadButton>Start hosting</DownloadButton></div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}>
          {hostFeatures.map((f, i) => (
            <div key={f.t} className="card card--dark"><ShapeBadge i={i + 2} size={38} /><h3>{f.t}</h3><p>{f.d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GetSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div className="shapes" aria-hidden="true">
            <i className="bob" style={{ left: -50, top: -40, width: 150, height: 150, borderRadius: "50%", background: "#e8b64c" }} />
            <svg className="bob" style={{ right: 26, top: 22 }} width="84" height="84" viewBox="0 0 100 100"><polygon points="8,92 50,8 92,92" fill="#12284a" /></svg>
            <i className="bob" style={{ right: 130, bottom: 28, width: 30, height: 30, borderRadius: 6, background: "#2a1840", transform: "rotate(45deg)" }} />
            <i className="bob" style={{ right: -40, bottom: -50, width: 140, height: 140, borderRadius: "50%", border: "14px solid #ff8a1f" }} />
            <svg className="bob" style={{ left: 40, bottom: -22 }} width="96" height="96" viewBox="0 0 100 100"><polygon points="8,92 50,8 92,92" fill="#1f4d3a" transform="rotate(-12 50 50)" /></svg>
            <i className="bob" style={{ left: 150, top: 34, width: 22, height: 22, borderRadius: "50%", background: "#f5f2ef" }} />
          </div>
          <span className="wordmark" style={{ fontSize: 44, color: "#fff" }}>Privé</span>
          <h2 className="h2 mt-2" style={{ fontSize: "clamp(28px, 4.4vw, 40px)" }}>{site.waitlist ? "Be first in line" : "Your next night is in the app"}</h2>
          <p className="mt-2" style={{ fontSize: 17 }}>{site.waitlist ? "Join the waitlist and we will tell you the day Privé opens." : "Free on Android. Sign in with Google or email and you are in."}</p>
          <div className="mt-4 btn-row" style={{ justifyContent: "center" }}>
            <DownloadButton className="btn btn--white">Download for Android</DownloadButton>
          </div>
          <p className="mt-3" style={{ fontSize: 13 }}>iPhone is not available yet. Questions? <a href={`mailto:${site.supportEmail}`} style={{ textDecoration: "underline" }}>{site.supportEmail}</a></p>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section has-shapes">
      <Shapes layout="edgeR" />
      <div className="container max-820" style={{ maxWidth: 1000 }}>
        <p className="eyebrow">Questions</p>
        <h2 className="h2 mt-1">Good to know</h2>
        <div className="faq">
          {faq.map((f) => (
            <div key={f.q} className="faq__row"><h3>{f.q}</h3><p>{f.a}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
