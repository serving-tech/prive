import { WaitlistHero } from "./WaitlistHero";

const icon = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const perks = [
  { title: "The launch date", text: "One email when we know the day, so you can plan your first night out with it.", path: "M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7M10 20a2 2 0 0 0 4 0" },
  { title: "An early link", text: "The download link lands in your inbox as soon as the app is ready, before the wider announcement.", path: "M3 7h18v3.5a1.75 1.75 0 0 0 0 3.5V17.5H3V14a1.75 1.75 0 0 0 0-3.5z" },
  { title: "Only launch news", text: "A few short emails, nothing else. Every one has a one-tap unsubscribe.", path: "M3 6h18v12H3zM3 7l9 6 9-6" },
];

export function WaitlistPerks() {
  return (
    <section className="section section--white">
      <div className="container">
        <p className="eyebrow">What waiting gets you</p>
        <h2 className="h2 mt-1 max-640">First to know. First in.</h2>
        <div className="grid mt-4">
          {perks.map((p) => (
            <div key={p.title} className="card" style={{ background: "var(--ground)" }}>
              <span className="wl-perk" aria-hidden="true"><svg {...icon}><path d={p.path} /></svg></span>
              <h3 className="mt-2">{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WaitlistHosts() {
  return (
    <section className="section--ink wl-band" id="hosts">
      <div className="container wl-band__row">
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <h2 className="h2" style={{ fontSize: "clamp(26px, 3.6vw, 34px)", lineHeight: 1.1 }}>Hosting a night? Join now too.</h2>
          <p className="lead mt-2 max-640">Hosts get the same early link. Put your name down and we will be in touch before launch.</p>
        </div>
        <a href="#join" className="btn btn--white">Back to the form</a>
      </div>
    </section>
  );
}

// Everything on the waitlist home page and on /waitlist, in the order of the design.
export function WaitlistPage() {
  return (
    <>
      <WaitlistHero />
      <WaitlistPerks />
      <WaitlistHosts />
    </>
  );
}
