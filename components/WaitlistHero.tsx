import { WaitlistForm } from "./WaitlistForm";

const ticks = ["The launch date first", "An early link to the app", "No spam"];

// The home page hero while the app is not downloadable yet (NEXT_PUBLIC_DOWNLOAD_URL empty): the waitlist form on a notched card.
export function WaitlistHero() {
  return (
    <section className="container hero" id="join">
      <div className="hero__copy">
        <span className="pill">Coming soon · Android first</span>
        <h1 className="h1 mt-2">Find the party.<br />Host the night.</h1>
        <p className="lead mt-3" style={{ maxWidth: 520 }}>Privé is where events live. We are getting ready to launch. Join the waitlist and we will tell you the moment it opens.</p>
        <ul className="wl-ticks mt-4">
          {ticks.map((t) => (
            <li key={t}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cc3f25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="hero__art wl-art">
        <div style={{ position: "relative" }}>
          <div className="notch wl-panel">
            <svg className="art" viewBox="0 0 540 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <circle cx="40" cy="600" r="200" fill="#e0573c" />
              <circle cx="510" cy="520" r="130" fill="#8f2a16" />
              <circle cx="510" cy="520" r="76" fill="#cc3f25" />
              <circle cx="470" cy="150" r="22" fill="none" stroke="#fff" strokeWidth="4" />
              <path d="M60 130l22 22 -22 22 -22 -22Z" fill="#f5f2ef" />
              <g fill="#fff" opacity=".85">
                {[200, 228, 256].flatMap((x) => [58, 86].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />))}
              </g>
            </svg>
            <span className="vibe__tag wl-panel__tag">Early access list</span>
            <div className="wl-panel__form"><WaitlistForm source="home" /></div>
          </div>
          <div className="notch__btn" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
