import type { ReactNode } from "react";

type Vibe = { id: string; tag: string; title: string; when: string; bg: string; whenColor: string; motif: ReactNode };

export const vibes: Vibe[] = [
  {
    id: "party", tag: "Party", title: "Midnight Bash", when: "Sat 5 Dec · 9 pm", bg: "#cc3f25", whenColor: "#fff",
    motif: (<>
      <circle cx="30" cy="250" r="95" fill="#e0573c" /><circle cx="215" cy="190" r="60" fill="#8f2a16" /><circle cx="215" cy="190" r="34" fill="#cc3f25" />
      <g fill="#fff" opacity=".9">{[40, 64, 88].flatMap((x) => [60, 84, 108].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" />))}</g>
      <circle cx="150" cy="120" r="14" fill="none" stroke="#fff" strokeWidth="3" />
    </>),
  },
  {
    id: "themed", tag: "Themed", title: "Costume Night", when: "Fri 30 Oct · 8 pm", bg: "#2a1840", whenColor: "#ff8a1f",
    motif: (<>
      <circle cx="150" cy="110" r="46" fill="#ff8a1f" /><circle cx="168" cy="98" r="40" fill="#2a1840" />
      <path d="M0 340V270l30 -40 30 40 30 -56 30 56 30 -40 30 40 40 -48 V340Z" fill="#ff8a1f" />
      <path d="M0 340V300l36 -30 36 30 36 -40 36 40 36 -30 40 30V340Z" fill="#4a2a70" />
      <g fill="#ffb15c"><circle cx="40" cy="70" r="3" /><circle cx="90" cy="40" r="2" /><circle cx="70" cy="130" r="2.5" /></g>
    </>),
  },
  {
    id: "graduation", tag: "Graduation", title: "Class of 2026", when: "Mon 16 Nov · 7 pm", bg: "#12284a", whenColor: "#e8b64c",
    motif: (<>
      <g fill="none" stroke="#e8b64c" strokeWidth="2" opacity=".55"><circle cx="40" cy="300" r="60" /><circle cx="40" cy="300" r="95" /><circle cx="40" cy="300" r="130" /></g>
      <path d="M150 70l36 36 -36 36 -36 -36Z" fill="#e8b64c" /><path d="M60 150l18 18 -18 18 -18 -18Z" fill="#fff" opacity=".85" /><path d="M190 200l12 12 -12 12 -12 -12Z" fill="#e8b64c" opacity=".7" />
    </>),
  },
  {
    id: "cultural", tag: "Cultural night", title: "Potterheads Inaugurations", when: "Sat 5 Dec · 6 pm", bg: "#1f4d3a", whenColor: "#e0a33a",
    motif: (<>
      <path d="M0 340L90 190 180 340Z" fill="#e0a33a" /><path d="M70 340L150 210 230 340Z" fill="#17392a" /><path d="M130 200L175 120 220 200Z" fill="#e0a33a" opacity=".9" />
      <path d="M0 120L45 40 90 120Z" fill="#2c6b50" /><path d="M110 70L135 30 160 70Z" fill="#17392a" />
    </>),
  },
  {
    id: "campus", tag: "Campus", title: "Freshers Week", when: "Mon 2 Feb · 10 am", bg: "#2347e0", whenColor: "#fff",
    motif: (<>
      <circle cx="220" cy="250" r="120" fill="#4468f0" /><circle cx="220" cy="250" r="70" fill="#1b36b8" /><rect x="24" y="64" width="64" height="64" rx="32" fill="#fff" opacity=".9" />
      <g fill="#fff">{[112, 136, 160].flatMap((x) => [190, 214].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" />))}</g>
      <path d="M0 340V290a60 60 0 0 1 60 -50 60 60 0 0 1 60 50V340Z" fill="#1b36b8" />
    </>),
  },
];

export function VibeCards() {
  return (
    <div className="vibes">
      {vibes.map((v) => (
        <div key={v.id} style={{ position: "relative" }}>
          <div className="notch vibe" style={{ background: v.bg }}>
            <svg className="art" viewBox="0 0 220 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">{v.motif}</svg>
            <div className="vibe__body">
              <span className="vibe__tag">{v.tag}</span>
              <div>
                <p className="vibe__title">{v.title}</p>
                <p className="vibe__when" style={{ color: v.whenColor }}>{v.when}</p>
              </div>
            </div>
          </div>
          <div className="notch__btn notch__btn--sm" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
          </div>
        </div>
      ))}
    </div>
  );
}
