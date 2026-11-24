import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

type Props = {
  code: string;               // the big number on the card, like 404
  tag: string;                // the small pill above the title
  title: string;
  children: ReactNode;        // one or two sentences of help
  tone?: "accent" | "ink" | "blue";
  actions?: ReactNode;        // replaces the default buttons
};

// One look for every "something is not here" page: not found, an error, an unreachable page. Same notched card as the rest of the site.
export function StatusPage({ code, tag, title, children, tone = "accent", actions }: Props) {
  return (
    <section className="container status">
      <div className={`notch status__card status__card--${tone}`}>
        <svg className="status__art" viewBox="0 0 400 300" aria-hidden="true" preserveAspectRatio="xMaxYMax slice">
          <circle className="sh sp" cx="330" cy="70" r="70" fill="#ffffff" opacity=".1" />
          <circle className="sh fl2" cx="70" cy="250" r="46" fill="#ffffff" opacity=".12" />
          <circle className="sh rp" cx="330" cy="70" r="70" fill="none" stroke="#ffffff" strokeWidth="2" opacity=".5" />
        </svg>
        <div className="status__body">
          <span className="vibe__tag">{tag}</span>
          <p className="status__code" aria-hidden="true">{code}</p>
        </div>
      </div>
      <div className="status__text">
        <h1 className="h2">{title}</h1>
        <p className="lead mt-2 max-640">{children}</p>
        <div className="btn-row mt-3">
          {actions ?? (
            <>
              <Link href="/" className="btn btn--accent">Back to home</Link>
              <Link href={site.waitlist ? "/waitlist" : "/get"} className="btn btn--white">{site.waitlist ? "Join the waitlist" : "Get the app"}</Link>
            </>
          )}
        </div>
        <p className="fineprint mt-3">Still stuck? Write to <a href={`mailto:${site.supportEmail}`} style={{ textDecoration: "underline", fontWeight: 700 }}>{site.supportEmail}</a>.</p>
      </div>
    </section>
  );
}
