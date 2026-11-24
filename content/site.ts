// One place for the facts that appear all over the site. Fill the placeholders before launch.
export const site = {
  name: "Privé",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prive.vixe.africa",
  supportEmail: "prive@vixe.africa",
  // Nothing links to the store until NEXT_PUBLIC_LAUNCHED=true is set. Setting only the link is not enough, so a stray value cannot open it early.
  downloadUrl: process.env.NEXT_PUBLIC_LAUNCHED === "true" ? process.env.NEXT_PUBLIC_DOWNLOAD_URL ?? "" : "",
  // True until launch: the buttons say "Join the waitlist" and the home page shows the form.
  waitlist: process.env.NEXT_PUBLIC_LAUNCHED !== "true",
  legalUpdated: "22 November 2026",
  tagline: "Find the party. Host the night.",
  description:
    "Privé is where campus events, graduations, parties and themed nights live. RSVP in a tap, get the location, never miss the countdown.",
};

export const nav = [
  { href: "/vibes", label: "Vibes" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/hosts", label: "For hosts" },
];
