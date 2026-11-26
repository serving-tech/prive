"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="header">
      <div className="container header__bar">
        <Link href="/" className="brand" aria-label="Privé home">
          <Image src="/icon.png" alt="" width={44} height={44} priority />
          <span className="brand__word">Privé</span>
        </Link>
        <div className="header__fun" aria-hidden="true">
          <i className="fun fun--dot" style={{ background: "#e8b64c" }} />
          <svg className="fun fun--tri" width="26" height="26" viewBox="0 0 100 100"><polygon points="8,92 50,8 92,92" fill="#cc3f25" /></svg>
          <i className="fun fun--ring" />
          <i className="fun fun--dia" style={{ background: "#2a1840" }} />
          <svg className="fun fun--tri" width="22" height="22" viewBox="0 0 100 100"><polygon points="8,92 50,8 92,92" fill="#12284a" transform="rotate(14 50 50)" /></svg>
          <i className="fun fun--dot" style={{ background: "#1f4d3a", width: 12, height: 12 }} />
          <i className="fun fun--dia" style={{ background: "#ff8a1f" }} />
        </div>
        <button type="button" className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((o) => !o)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="site-nav" className="nav" aria-label="Main" data-open={open}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}>{n.label}</Link>
          ))}
          <Link href={site.waitlist ? "/#join" : "/get"} className="btn btn--ink btn--sm">{site.waitlist ? "Join the waitlist" : "Get the app"}</Link>
        </nav>
      </div>
    </header>
  );
}
