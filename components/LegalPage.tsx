import type { LegalSection } from "@/content/legal";
import { site } from "@/content/site";
import { LockArt } from "./HeroArt";
import { PageIntro } from "./PageIntro";

const COLORS = ["#cc3f25", "#2a1840", "#12284a", "#1f4d3a", "#8f2a16", "#4a2a70"];
const slug = (s: string, i: number) => `s${i + 1}-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40)}`;

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <PageIntro tag="Legal" title={title} tone="ink" art={<LockArt />}>{intro} <span style={{ opacity: 0.7 }}>Last updated: {site.legalUpdated}</span></PageIntro>
      <div className="container legal" style={{ paddingBlock: "clamp(24px, 4vw, 40px) clamp(56px, 9vw, 96px)" }}>
        <nav className="legal__toc" aria-label="Contents">
          {sections.map((s, i) => (
            <a key={s.heading} href={`#${slug(s.heading, i)}`}><span style={{ background: COLORS[i % COLORS.length] }}>{i + 1}</span>{s.heading}</a>
          ))}
        </nav>
        <article>
          {sections.map((s, i) => (
            <section key={s.heading} id={slug(s.heading, i)} className="legal__sec">
              <h2><span style={{ background: COLORS[i % COLORS.length] }}>{i + 1}</span>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <p className="fineprint mt-3">Questions? Write to <a href={`mailto:${site.supportEmail}`} style={{ textDecoration: "underline" }}>{site.supportEmail}</a>.</p>
        </article>
      </div>
    </>
  );
}
