const ArrowButton = () => (
  <div className="notch__btn" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
  </div>
);

// The sample event card in the hero. Content is placeholder, not a real event.
export function HeroCard() {
  const faces: [string, string, string][] = [["A", "#e8b64c", "#1b1816"], ["K", "#2347e0", "#fff"], ["M", "#1f4d3a", "#fff"], ["J", "#f5f2ef", "#1b1816"]];
  return (
    <div className="hero__art">
      <div style={{ position: "relative" }}>
        <div className="notch event-card">
          <svg className="art" viewBox="0 0 540 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <circle cx="60" cy="400" r="190" fill="#e0573c" />
            <circle cx="500" cy="300" r="130" fill="#8f2a16" />
            <circle cx="500" cy="300" r="76" fill="#cc3f25" />
            <circle cx="330" cy="190" r="26" fill="none" stroke="#fff" strokeWidth="4" />
            <path d="M400 120l22 22 -22 22 -22 -22Z" fill="#f5f2ef" />
            <g fill="#fff" opacity=".85">
              {[300, 328, 356].flatMap((x) => [70, 98].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />))}
            </g>
          </svg>
          <div className="event-card__body">
            <div>
              <span className="pill" style={{ minHeight: 28, fontSize: 12, color: "var(--ink)" }}>You are invited</span>
              <p className="event-card__title">Midnight Bash</p>
              <p style={{ marginTop: 8, fontWeight: 700 }}>Sat 5 Dec · 9:00 pm · Student Hall</p>
              <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <div className="avatars" aria-hidden="true">
                  {faces.map(([l, bg, fg]) => <span key={l} style={{ background: bg, color: fg }}>{l}</span>)}
                </div>
                <span style={{ fontSize: 14, fontWeight: 700 }}>48 going · 12 spots left</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div className="count"><b>13</b><span style={{ fontWeight: 700 }}>days to go</span></div>
              <span className="btn btn--white" aria-hidden="true">RSVP</span>
            </div>
          </div>
        </div>
        <ArrowButton />
      </div>
      <div className="float-card float-card--maps">
        <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM14.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" /></svg>
        </span>
        <span><b style={{ display: "block", fontSize: 14 }}>Open in Google Maps</b><span style={{ display: "block", fontSize: 12, color: "var(--muted)" }}>Directions, already filled in</span></span>
      </div>
      <div className="float-card float-card--going">
        <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        <b style={{ fontSize: 13 }}>You are going</b>
      </div>
    </div>
  );
}
