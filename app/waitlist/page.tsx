import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = { title: "Join the waitlist", description: "Privé is getting ready to launch. Join the waitlist and we will tell you the day it opens." };

export default function Waitlist() {
  return (
    <>
      <PageIntro tag="Coming soon" title="Be first in line">Privé is getting ready to launch. Put your name down and we will email you the launch date, and the link to the app the day it is ready.</PageIntro>
      <section className="container" style={{ paddingBottom: "clamp(56px, 9vw, 96px)" }}>
        <div style={{ maxWidth: 480 }}><WaitlistForm source="waitlist-page" /></div>
      </section>
    </>
  );
}
