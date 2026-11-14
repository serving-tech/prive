import type { CSSProperties, ReactNode } from "react";

type Step = { n: string; bg: string; fg: string; sub: string; title: string; text: string; scene: ReactNode };

const steps: Step[] = [
  {
    n: "1", bg: "#ffffff", fg: "#1b1816", sub: "Discover", title: "Open a link or browse",
    text: "A friend shares an event and the link shows its cover photo, name and date right in the chat. Or browse what is on, filtered by what you like.",
    scene: (<>
      <circle className="sh fl" cx="150" cy="150" r="100" fill="#cc3f25" /><circle className="sh fl2" cx="285" cy="95" r="52" fill="#1b1816" />
      <path className="sh sp" d="M300 260l34 -58 34 58Z" fill="#e0a33a" /><circle className="sh fl3" cx="70" cy="258" r="24" fill="#2347e0" />
      <g fill="#1b1816"><circle className="sh fl3" cx="230" cy="215" r="5" /><circle className="sh fl" cx="250" cy="215" r="5" /><circle className="sh fl2" cx="270" cy="215" r="5" /></g>
      <circle className="sh sp2" cx="150" cy="150" r="132" fill="none" stroke="#1b1816" strokeWidth="3" strokeDasharray="4 14" strokeLinecap="round" />
    </>),
  },
  {
    n: "2", bg: "#cc3f25", fg: "#ffffff", sub: "RSVP", title: "Say you are going",
    text: "Yes, maybe or no. Bring a plus one, suggest a song and add it to Google Calendar. You get a reminder a week before and the day before.",
    scene: (<>
      {["rp", "rp2", "rp3"].map((c) => <circle key={c} className={`sh ${c}`} cx="200" cy="160" r="130" fill="none" stroke="#fff" strokeWidth="4" />)}
      <circle cx="200" cy="160" r="82" fill="#fff" />
      <path className="dr" d="M162 162l28 28 52 -62" fill="none" stroke="#cc3f25" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <path className="sh sp" d="M330 60l22 22 -22 22 -22 -22Z" fill="#f5f2ef" /><circle className="sh fl" cx="62" cy="262" r="16" fill="#8f2a16" />
    </>),
  },
  {
    n: "3", bg: "#2347e0", fg: "#ffffff", sub: "Find it", title: "Tap the map",
    text: "One tap opens Google Maps with the venue already filled in. If the host has not shared the spot yet, you are told as soon as they do.",
    scene: (<>
      <path className="rd" d="M0 250C120 250 140 120 260 120S380 60 400 60" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity=".55" />
      <ellipse className="sh rp" cx="200" cy="250" rx="70" ry="22" fill="none" stroke="#fff" strokeWidth="4" /><ellipse className="sh rp2" cx="200" cy="250" rx="70" ry="22" fill="none" stroke="#fff" strokeWidth="4" />
      <g className="bo"><path d="M200 235s-62-52-62-106a62 62 0 0 1 124 0c0 54-62 106-62 106z" fill="#fff" /><circle cx="200" cy="130" r="24" fill="#cc3f25" /></g>
      <circle className="sh fl2" cx="320" cy="200" r="20" fill="#e8b64c" /><path className="sh sp" d="M60 90l24 -42 24 42Z" fill="#4468f0" />
    </>),
  },
  {
    n: "4", bg: "#1b1816", fg: "#ffffff", sub: "On the day", title: "Check in at the door",
    text: "When the event starts, the app shows the line-up and directions. Tell the host you have arrived with one tap.",
    scene: (<>
      <circle cx="200" cy="160" r="120" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="2" /><circle cx="200" cy="160" r="70" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <g className="sp" style={{ transformOrigin: "200px 160px" }}><circle cx="320" cy="160" r="14" fill="#e8b64c" /></g>
      <g className="sp2" style={{ transformOrigin: "200px 160px" }}><circle cx="130" cy="160" r="10" fill="#cc3f25" /></g>
      <path className="sh sp" d="M200 105l55 55 -55 55 -55 -55Z" fill="#e8b64c" /><path className="sh sp2" d="M200 135l25 25 -25 25 -25 -25Z" fill="#1b1816" />
      <circle className="sh fl" cx="60" cy="60" r="8" fill="#fff" /><circle className="sh fl2" cx="345" cy="270" r="8" fill="#fff" />
    </>),
  },
];

// Four cards that pin near the top and layer over each other as you scroll (plain stacking on phones).
export function HowStack() {
  return (
    <ol className="stack" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((s, i) => (
        <li key={s.n} className="stack__card" style={{ background: s.bg, color: s.fg, "--i": i } as CSSProperties}>
          <div className="stack__text">
            <div className="stack__num" aria-hidden="true">{s.n}</div>
            <div>
              <p className="eyebrow" style={{ color: "inherit", opacity: 0.8 }}>{s.sub}</p>
              <h3 style={{ margin: "6px 0 0", fontWeight: 800, fontSize: "clamp(24px, 3vw, 30px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.5, maxWidth: 440 }}>{s.text}</p>
            </div>
          </div>
          <div className="stack__art"><svg viewBox="0 0 400 320" aria-hidden="true">{s.scene}</svg></div>
        </li>
      ))}
    </ol>
  );
}
