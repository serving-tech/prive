import type { ReactNode } from "react";

export type Tone = "red" | "violet" | "navy" | "green" | "ink";

const TONES: Record<Tone, { bg: string; accent: string }> = {
  red: { bg: "#cc3f25", accent: "#e8b64c" },
  violet: { bg: "#2a1840", accent: "#ff8a1f" },
  navy: { bg: "#12284a", accent: "#e8b64c" },
  green: { bg: "#1f4d3a", accent: "#e8b64c" },
  ink: { bg: "#1b1816", accent: "#e8b64c" },
};

// The top of every inside page: a coloured, notched panel with the title on the left and a small picture of the thing on the right.
export function PageIntro({ tag, title, children, tone = "red", art }: { tag: string; title: string; children: ReactNode; tone?: Tone; art?: ReactNode }) {
  const t = TONES[tone];
  return (
    <section className="container phero-wrap">
      <div className="phero-box">
      <div className="notch phero" style={{ background: t.bg, ["--accent-2" as string]: t.accent }}>
        <span className="phero__dot" aria-hidden="true" />
        <div className="phero__copy">
          <span className="vibe__tag">{tag}</span>
          <h1 className="h1 mt-2">{title}</h1>
          <p className="phero__lead mt-2">{children}</p>
        </div>
        {art ? <div className="phero__art" aria-hidden="true">{art}</div> : null}
      </div>
      <div className="notch__btn" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
      </div>
      </div>
    </section>
  );
}
