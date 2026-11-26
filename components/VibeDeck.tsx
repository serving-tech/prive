"use client";

import { useEffect, useState } from "react";
import { vibes } from "./VibeCards";

// The vibe cards as a stack, like the fan on the Vibes page. The front card goes to the back when you tap the stack or the button;
// it also turns by itself every few seconds (not while you point at it, and not at all if your device asks for less motion).
const ROT = [0, -6, 6, -12, 12];
const TX = [0, -26, 26, -52, 52];
const SC = [1, 0.96, 0.96, 0.92, 0.92];

export function VibeDeck() {
  const [order, setOrder] = useState(() => vibes.map((_, i) => i));      // order[0] is the card at the front
  const [hover, setHover] = useState(false);
  const next = () => setOrder((o) => [...o.slice(1), o[0]]);

  useEffect(() => {
    if (hover || (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    const t = window.setInterval(next, 4200);
    return () => window.clearInterval(t);
  }, [hover]);

  return (
    <div className="deck" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={"deck__stack" + (hover ? " is-spread" : "")} onClick={next} role="group" aria-label="Examples of event vibes">
        {vibes.map((v, i) => {
          const pos = order.indexOf(i);
          return (
            <div
              key={v.id}
              className="deck__card"
              aria-hidden={pos !== 0}
              style={{ zIndex: 10 - pos, ["--r" as string]: `${ROT[pos]}deg`, ["--x" as string]: `${TX[pos]}px`, ["--s" as string]: SC[pos], ["--p" as string]: pos }}
            >
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
          );
        })}
      </div>
      <div className="deck__ctl">
        <button type="button" className="btn btn--ink btn--sm" onClick={next}>Next vibe</button>
        <span className="deck__dots" aria-hidden="true">
          {vibes.map((v, i) => <i key={v.id} style={{ background: order[0] === i ? v.bg : "#d9d2cb", width: order[0] === i ? 22 : 8 }} />)}
        </span>
      </div>
    </div>
  );
}
