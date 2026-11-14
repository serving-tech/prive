import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to delete your Privé account and what is removed.",
};

const steps = [
  "Open the Privé app and go to Profile.",
  "Scroll to the bottom and tap Delete account.",
  "Confirm. Your account is deleted straight away.",
];

export default function DeleteAccount() {
  return (
    <>
      <PageIntro tag="Your data" title="Delete your account">
        You can delete your Privé account and everything that goes with it, from the app or by email.
      </PageIntro>
      <section className="container" style={{ maxWidth: 1064, paddingBottom: "clamp(56px, 9vw, 96px)" }}>
        <div className="legal__row">
          <h2>In the app</h2>
          <ol style={{ flex: "2 1 360px", margin: 0, paddingLeft: 20, color: "#3a3430", lineHeight: 1.8 }}>
            {steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </div>
        <div className="legal__row">
          <h2>By email</h2>
          <p>
            Cannot open the app? Write to{" "}
            <a href={`mailto:${site.supportEmail}?subject=Delete my Privé account`} style={{ textDecoration: "underline" }}>{site.supportEmail}</a>{" "}
            from the email address you signed in with, with the subject &ldquo;Delete my Privé account&rdquo;. We delete the account and reply to confirm.
          </p>
        </div>
        <div className="legal__row">
          <h2>What is deleted</h2>
          <p>
            Your profile (name, email and photo), the events you host, your RSVPs, the photos you took or that were added to your events, your
            organizer pages, your notification settings and your device tokens. The stored picture files for these are deleted from our storage too.
          </p>
        </div>
        <div className="legal__row">
          <h2>What stays</h2>
          <p>
            Nothing tied to you stays in the app. Reports other people made about content may be kept for a short time so we can finish
            reviewing them. Google keeps its own record of which apps you allowed. You can remove Privé there at myaccount.google.com/permissions.
          </p>
        </div>
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </section>
    </>
  );
}
