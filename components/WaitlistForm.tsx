"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

type Errs = { name?: string; email?: string; consent?: string; form?: string };

const NAME_MSG = "Tell us what to call you.";
const EMAIL_MSG = "That email does not look right. Try name@example.com.";
const CONSENT_MSG = "Tick this so we know it is ok to write to you.";

// The waitlist form: name, email, one tick box. A repeat email gets the same "done" screen as a new one on purpose.
export function WaitlistForm({ source = "home" }: { source?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errs, setErrs] = useState<Errs>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    const next: Errs = {};
    if (!name.trim()) next.name = NAME_MSG;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) next.email = EMAIL_MSG;
    if (!consent) next.consent = CONSENT_MSG;
    setErrs(next);
    if (Object.keys(next).length) return;

    setBusy(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), consent, source }),
      });
      if (res.status === 202) { setDone(true); return; }
      if (res.status === 429) { setErrs({ form: "Too many tries. Wait a minute and try again. Your details are still here." }); return; }
      if (res.status === 400) {
        const body = await res.json().catch(() => ({}));
        const first = (k: string) => (Array.isArray(body[k]) ? body[k][0] : undefined);
        setErrs({ name: first("name"), email: first("email"), consent: first("consent") });
        return;
      }
      setErrs({ form: "We could not save that. Your details are still here, try again." });
    } catch {
      setErrs({ form: "We could not save that. Your details are still here, try again." });
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    const first = name.trim().split(/\s+/)[0] || "friend";
    return (
      <div className="wl-card" role="status">
        <span className="wl-check" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        <h2 className="wl-title">You are on the list, {first}.</h2>
        <p className="wl-text">We sent a note to <b>{email.trim()}</b>. Open it and tap Confirm so we know it is really you.</p>
        <p className="wl-note">No email after a few minutes? Look in spam, or try a different address.</p>
        <button type="button" className="btn btn--ink" onClick={() => { setDone(false); setName(""); setEmail(""); setConsent(false); setErrs({}); }}>Use a different email</button>
      </div>
    );
  }

  const id = `wl-${source}`;
  return (
    <form className="wl-card" onSubmit={submit} noValidate>
      <div>
        <h2 className="wl-title">Join the waitlist</h2>
        <p className="wl-text">Tell us your name and email. We will write when launch is near.</p>
      </div>

      <div className="wl-field">
        <label htmlFor={`${id}-name`}>Your name</label>
        <input id={`${id}-name`} type="text" autoComplete="name" placeholder="Amara Okafor" value={name} maxLength={100} aria-invalid={!!errs.name} aria-describedby={errs.name ? `${id}-name-err` : undefined}
          onChange={(e) => { setName(e.target.value); if (errs.name) setErrs({ ...errs, name: undefined }); }} />
        {errs.name && <p id={`${id}-name-err`} className="wl-err" role="alert">{errs.name}</p>}
      </div>

      <div className="wl-field">
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" value={email} maxLength={254} aria-invalid={!!errs.email} aria-describedby={errs.email ? `${id}-email-err` : undefined}
          onChange={(e) => { setEmail(e.target.value); if (errs.email) setErrs({ ...errs, email: undefined }); }} />
        {errs.email && <p id={`${id}-email-err`} className="wl-err" role="alert">{errs.email}</p>}
      </div>

      <div className="wl-field">
        <label className="wl-check-row">
          <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (errs.consent) setErrs({ ...errs, consent: undefined }); }} />
          <span>Email me about the Privé launch. I can unsubscribe at any time. <a href="/privacy">How we use your details</a></span>
        </label>
        {errs.consent && <p className="wl-err" role="alert">{errs.consent}</p>}
      </div>

      {errs.form && <p className="wl-err wl-err--box" role="alert">{errs.form}</p>}
      <button type="submit" className="btn btn--accent" disabled={busy}>{busy ? "Joining…" : "Join the waitlist"}</button>
      <p className="wl-note" style={{ textAlign: "center" }}>Launch news only. No spam, and we never share your email. Questions? <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>
    </form>
  );
}
