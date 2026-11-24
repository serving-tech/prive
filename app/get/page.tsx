import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { GetSection } from "@/components/Sections";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Get the app", description: "Privé is free on Android. Sign in with Google or an email address and you are in." };

export default function Get() {
  if (site.waitlist) redirect("/waitlist");   // no download page before launch
  return (
    <>
      <PageIntro tag="Get the app" title="Your next night is in the app">Privé is free on Android. Sign in with Google or an email address and you are in.</PageIntro>
      <section className="container">
        <div className="grid">
          <div className="card"><h3>1. Download</h3><p>{site.downloadUrl ? <a href={site.downloadUrl} style={{ textDecoration: "underline", fontWeight: 700 }}>Get it here</a> : "Privé is rolling out on Google Play. It is in testing now, so it is not in the public store yet. To get early access, write to " + site.supportEmail + " from the email address you use on your phone."}</p></div>
          <div className="card"><h3>2. Sign in</h3><p>Use Google in one tap, or sign up with your email and confirm it with a 6-digit code. Then pick your interests.</p></div>
          <div className="card"><h3>3. Say yes to a night</h3><p>Browse events or open a link a friend sent you.</p></div>
        </div>
      </section>
      <GetSection />
    </>
  );
}
