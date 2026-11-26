import { vibes } from "./VibeCards";

// Small pictures for the top of each page. All sample content, nothing real.

// Five vibe cards in a fan. They spread out a little when you point at them.
export function VibeFan() {
  const rot = [-14, -7, 0, 7, 14];
  return (
    <div className="fan">
      {vibes.slice(0, 5).map((v, i) => (
        <div key={v.id} className="fan__card" style={{ background: v.bg, color: "#fff", ["--r" as string]: `${rot[i]}deg`, ["--i" as string]: i - 2 }}>
          <span className="fan__tag">{v.tag}</span>
          <b>{v.title}</b>
          <span style={{ color: v.whenColor, fontWeight: 700, fontSize: 12 }}>{v.when}</span>
        </div>
      ))}
    </div>
  );
}

// What a host sees: how many said yes, the spots left, and people checking in.
export function HostBoard() {
  const rows: [string, string][] = [["Amina O.", "Checked in"], ["Kevin M.", "Going +1"], ["Joy W.", "Going"]];
  return (
    <div className="hb">
      <div className="hb__top"><span>Guest list</span><b>86 / 120</b></div>
      <div className="hb__bar"><i style={{ width: "72%" }} /></div>
      <div className="hb__sub">34 spots left</div>
      {rows.map(([n, s], i) => (
        <div key={n} className="hb__row">
          <span className="hb__av" style={{ background: ["#e8b64c", "#12284a", "#1f4d3a"][i], color: i ? "#fff" : "#1b1816" }}>{n[0]}</span>
          <span>{n}</span>
          <em className={i === 0 ? "ok" : ""}>{s}</em>
        </div>
      ))}
    </div>
  );
}

// The four steps as a trail of numbered stops.
export function StepsTrail() {
  const steps = ["Discover", "RSVP", "Find it", "Check in"];
  return (
    <div className="trail">
      {steps.map((s, i) => (
        <div key={s} className="trail__stop" style={{ ["--d" as string]: `${i * 0.12}s` }}>
          <span>{i + 1}</span>
          <b>{s}</b>
        </div>
      ))}
    </div>
  );
}

// For the pages about data: a padlock made of the brand shapes.
export function LockArt() {
  return (
    <svg viewBox="0 0 200 200" width="190" height="190" className="lockart">
      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" />
      <path d="M70 92V74a30 30 0 0 1 60 0v18" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
      <rect x="52" y="90" width="96" height="74" rx="22" fill="var(--accent-2)" />
      <circle cx="100" cy="124" r="11" fill="#1b1816" />
      <rect x="96" y="128" width="8" height="18" rx="4" fill="#1b1816" />
    </svg>
  );
}
