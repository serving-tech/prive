import { Shapes } from "./Shapes";

export function PageIntro({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <div className="has-shapes">
      <Shapes layout="intro" />
      <section className="container" style={{ paddingBlock: "clamp(40px, 7vw, 64px) clamp(24px, 5vw, 48px)" }}>
        <p className="eyebrow">{tag}</p>
        <h1 className="h1 mt-1 max-820">{title}</h1>
        <p className="lead mt-3 max-640">{children}</p>
      </section>
    </div>
  );
}
