import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The picture shown when a link to the site is shared (WhatsApp, X, LinkedIn, Slack, and so on).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5f2ef", padding: 64, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 32 }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#1b1816", letterSpacing: -3 }}>Privé</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 84, fontWeight: 700, color: "#1b1816", lineHeight: 1.02, letterSpacing: -3 }}>Find the party.</div>
            <div style={{ fontSize: 84, fontWeight: 700, color: "#1b1816", lineHeight: 1.02, letterSpacing: -3 }}>Host the night.</div>
            <div style={{ marginTop: 24, fontSize: 28, color: "#6b635e" }}>Campus events, graduations and nights out</div>
          </div>
          <div style={{ fontSize: 24, color: "#6b635e" }}>prive.vixe.africa · A product of Vixe Africa</div>
        </div>
        <div style={{ width: 400, height: 502, display: "flex", position: "relative", background: "#cc3f25", borderRadius: 40, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: -90, bottom: -120, width: 340, height: 340, borderRadius: 170, background: "#e0573c" }} />
          <div style={{ position: "absolute", right: -40, bottom: 70, width: 200, height: 200, borderRadius: 100, background: "#8f2a16" }} />
          <div style={{ position: "absolute", right: 20, bottom: 130, width: 80, height: 80, borderRadius: 40, background: "#cc3f25" }} />
          <div style={{ position: "absolute", right: 50, top: 140, width: 56, height: 56, borderRadius: 28, border: "6px solid #ffffff" }} />
          <div style={{ position: "absolute", left: 40, top: 60, display: "flex", background: "#ffffff", borderRadius: 30, padding: "8px 22px", fontSize: 26, fontWeight: 700, color: "#1b1816" }}>You are invited</div>
          <div style={{ position: "absolute", left: 40, top: 240, fontSize: 48, fontWeight: 700, color: "#ffffff", letterSpacing: -2 }}>Midnight Bash</div>
          <div style={{ position: "absolute", left: 40, top: 306, fontSize: 26, fontWeight: 700, color: "#ffffff" }}>Sat 5 Dec · 9:00 pm</div>
        </div>
      </div>
    ),
    size,
  );
}
