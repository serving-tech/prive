import type { CSSProperties } from "react";

// The brand shapes (triangle, circle, diamond, ring) in the vibe colours. Purely decoration: hidden from screen readers and from clicks.
type Kind = "dot" | "tri" | "dia" | "ring";
type Shape = { k: Kind; c: string; s: number; pos: CSSProperties; rot?: number; hide?: "sm" | "md"; o?: number };

const GOLD = "#e8b64c", RED = "#cc3f25", NAVY = "#12284a", VIOLET = "#2a1840", ORANGE = "#ff8a1f", GREEN = "#1f4d3a", CREAM = "#f5f2ef";

const LAYOUTS: Record<string, Shape[]> = {
  // behind the home hero
  hero: [
    { k: "dot", c: GOLD, s: 170, pos: { left: -70, top: -60 } },
    { k: "tri", c: NAVY, s: 70, pos: { left: "38%", top: 22 }, rot: 12, hide: "sm" },
    { k: "dia", c: VIOLET, s: 24, pos: { left: "28%", top: 92 }, hide: "md" },
    { k: "ring", c: ORANGE, s: 84, pos: { left: "2%", bottom: 8 }, hide: "sm" },
    { k: "tri", c: GREEN, s: 64, pos: { left: "46%", bottom: 22 }, rot: -14, hide: "md" },
    { k: "dot", c: RED, s: 20, pos: { right: "2%", bottom: 40 }, hide: "sm" },
  ],
  // the top of every inside page
  intro: [
    { k: "dot", c: GOLD, s: 120, pos: { right: "9%", top: 18 }, hide: "sm" },
    { k: "tri", c: RED, s: 74, pos: { right: "20%", bottom: 6 }, rot: 8, hide: "sm" },
    { k: "ring", c: ORANGE, s: 64, pos: { right: "3%", bottom: 12 }, hide: "sm" },
    { k: "dia", c: VIOLET, s: 20, pos: { right: "27%", top: 36 }, hide: "md" },
    { k: "dot", c: GREEN, s: 16, pos: { right: "15%", top: 10 }, hide: "md" },
    { k: "tri", c: NAVY, s: 44, pos: { right: "34%", bottom: 30 }, rot: -16, hide: "md" },
  ],
  // light sections: shapes peek in from the right and the left edge
  edgeR: [
    { k: "ring", c: ORANGE, s: 130, pos: { right: -46, top: 40 }, hide: "sm" },
    { k: "tri", c: GOLD, s: 70, pos: { right: "4%", bottom: 40 }, rot: 10, hide: "sm" },
    { k: "dia", c: RED, s: 20, pos: { right: "12%", top: 70 }, hide: "md" },
  ],
  edgeL: [
    { k: "dot", c: GOLD, s: 110, pos: { left: -56, top: -44 }, hide: "sm" },
    { k: "tri", c: NAVY, s: 62, pos: { left: "3%", bottom: 22 }, rot: -10, hide: "sm" },
    { k: "dia", c: VIOLET, s: 18, pos: { right: "9%", top: 44 }, hide: "md" },
    { k: "ring", c: ORANGE, s: 70, pos: { right: -20, bottom: 30 }, hide: "md" },
  ],
  // for the ink (dark) section
  ink: [
    { k: "dot", c: GOLD, s: 140, pos: { right: -56, top: -40 }, o: 0.95 },
    { k: "ring", c: ORANGE, s: 90, pos: { left: "-2%", bottom: 20 }, hide: "sm" },
    { k: "tri", c: RED, s: 62, pos: { right: "6%", bottom: 24 }, rot: 14, hide: "sm" },
    { k: "dia", c: CREAM, s: 16, pos: { left: "46%", top: 30 }, o: 0.6, hide: "md" },
  ],
  // the small page types (legal, delete account, the get page)
  quiet: [
    { k: "dot", c: GOLD, s: 90, pos: { right: "7%", top: 20 }, hide: "sm" },
    { k: "tri", c: RED, s: 56, pos: { right: "17%", bottom: 8 }, rot: 8, hide: "sm" },
    { k: "ring", c: ORANGE, s: 48, pos: { right: "2%", bottom: 16 }, hide: "sm" },
  ],
};

function Glyph({ s }: { s: Shape }) {
  if (s.k === "dot") return <i style={{ display: "block", width: s.s, height: s.s, borderRadius: "50%", background: s.c }} />;
  if (s.k === "ring") return <i style={{ display: "block", width: s.s, height: s.s, borderRadius: "50%", border: `${Math.max(4, Math.round(s.s * 0.16))}px solid ${s.c}`, boxSizing: "border-box" }} />;
  if (s.k === "dia") return <i style={{ display: "block", width: s.s, height: s.s, borderRadius: Math.max(3, s.s * 0.2), background: s.c, transform: "rotate(45deg)" }} />;
  return <svg width={s.s} height={s.s} viewBox="0 0 100 100" style={{ display: "block", transform: `rotate(${s.rot ?? 0}deg)` }}><polygon points="8,92 50,8 92,92" fill={s.c} /></svg>;
}

// Put it first inside a wrapper with className="has-shapes". The wrapper clips the shapes at its edges.
export function Shapes({ layout }: { layout: keyof typeof LAYOUTS }) {
  return (
    <div className="shapes" aria-hidden="true">
      {LAYOUTS[layout].map((s, i) => (
        <span key={i} className={`bob${s.hide ? ` hide-${s.hide}` : ""}`} style={{ ...s.pos, opacity: s.o ?? 1, animationDelay: `${-i * 0.9}s` }}><Glyph s={s} /></span>
      ))}
    </div>
  );
}

const CYCLE: { k: Kind; bg: string; fg: string }[] = [
  { k: "tri", bg: "#cc3f25", fg: "#f5f2ef" },
  { k: "dot", bg: "#e8b64c", fg: "#1b1816" },
  { k: "dia", bg: "#2a1840", fg: "#ff8a1f" },
  { k: "ring", bg: "#12284a", fg: "#e8b64c" },
  { k: "tri", bg: "#1f4d3a", fg: "#e8b64c" },
  { k: "dot", bg: "#ff8a1f", fg: "#2a1840" },
];

// A small coloured tile with one shape on it, to head a card. i picks the colour and the shape, so neighbouring cards differ.
export function ShapeBadge({ i = 0, size = 44 }: { i?: number; size?: number }) {
  const c = CYCLE[i % CYCLE.length];
  const g = Math.round(size * 0.46);
  return (
    <span className="badge" style={{ width: size, height: size, background: c.bg }} aria-hidden="true">
      {c.k === "tri" ? <svg width={g} height={g} viewBox="0 0 100 100"><polygon points="8,92 50,8 92,92" fill={c.fg} /></svg>
        : c.k === "dot" ? <i style={{ width: g, height: g, borderRadius: "50%", background: c.fg }} />
        : c.k === "ring" ? <i style={{ width: g, height: g, borderRadius: "50%", border: `${Math.max(3, g * 0.2)}px solid ${c.fg}`, boxSizing: "border-box" }} />
        : <i style={{ width: g * 0.8, height: g * 0.8, borderRadius: 3, background: c.fg, transform: "rotate(45deg)" }} />}
    </span>
  );
}

const WORDS = ["Campus nights", "Graduations", "Parties", "Themed nights", "Cultural nights", "Online hangs"];

// A band of the kinds of night, with shapes between them, scrolling slowly. It stands still for people who ask for less motion.
export function Marquee() {
  const run = (key: string) => (
    <div className="marquee__run" aria-hidden={key === "b" ? "true" : undefined} key={key}>
      {WORDS.map((w, i) => (
        <span key={w} className="marquee__item">
          {w}
          <span className="marquee__sh"><ShapeBadge i={i + 1} size={26} /></span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">{run("a")}{run("b")}</div>
    </div>
  );
}
