import type { LegalSection } from "@/content/legal";
import { site } from "@/content/site";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <article className="container" style={{ maxWidth: 1064, paddingBlock: "clamp(40px, 7vw, 64px) clamp(56px, 9vw, 96px)" }}>
      <p className="eyebrow">Legal</p>
      <h1 className="h1 mt-1">{title}</h1>
      <p className="lead mt-2 max-640">{intro}</p>
      <p className="fineprint mt-2" style={{ marginBottom: 32 }}>Last updated: {site.legalUpdated}</p>
      {sections.map((s, i) => (
        <section key={s.heading} className="legal__row">
          <h2>{i + 1}. {s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
      <div style={{ borderTop: "1px solid var(--line)" }} />
      <p className="fineprint mt-3">Questions? Write to <a href={`mailto:${site.supportEmail}`} style={{ textDecoration: "underline" }}>{site.supportEmail}</a>.</p>
    </article>
  );
}
