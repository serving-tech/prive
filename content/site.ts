// One place for the facts that appear all over the site. Fill the placeholders before launch.

// The store link shows only when BOTH are set: NEXT_PUBLIC_LAUNCHED=true and NEXT_PUBLIC_DOWNLOAD_URL (the Google Play address).
// With either one missing, the whole site stays on the waitlist, and the link is not in anything a visitor downloads.
const link = process.env.NEXT_PUBLIC_LAUNCHED === "true" ? (process.env.NEXT_PUBLIC_DOWNLOAD_URL ?? "").trim() : "";

export const site = {
  name: "Privé",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prive.vixe.africa",
  supportEmail: "prive@vixe.africa",
  downloadUrl: link,
  // True until there is a link to give: the buttons say "Join the waitlist", the home page shows the form, and /get goes to it.
  waitlist: !link,
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
