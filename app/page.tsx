import type { Metadata } from "next";
import Link from "next/link";
import { DownloadButton } from "@/components/DownloadButton";
import { Marquee, Shapes } from "@/components/Shapes";
import { HeroCard } from "@/components/HeroCard";
import { WaitlistHero } from "@/components/WaitlistHero";
import { site } from "@/content/site";
import { GetSection, HostsSection, HowSection, VibesSection } from "@/components/Sections";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      {/* Until the app can be downloaded, the first screen is the waitlist form. The rest of the page stays as it was. */}
      <div className="has-shapes">
      <Shapes layout="hero" />
      {site.waitlist ? <WaitlistHero /> : <section className="container hero">
        <div className="hero__copy">
          <span className="pill">Events for campus, graduations and nights out</span>
          <h1 className="h1 mt-2">Find the party.<br />Host the night.</h1>
          <p className="lead mt-3" style={{ maxWidth: 520 }}>Privé is where events live. Every one gets its own look, a countdown, an RSVP in one tap and a map that opens straight to the door.</p>
          <div className="btn-row mt-4">
            <DownloadButton />
            <Link href="/how-it-works" className="btn btn--white">See how it works</Link>
          </div>
          <p className="fineprint mt-2">Free to use. Sign in with Google or email. Android first.</p>
        </div>
        <HeroCard />
      </section>}
      </div>
      <Marquee />
      <VibesSection />
      <HowSection />
      <HostsSection />
      <GetSection />
    </>
  );
}
