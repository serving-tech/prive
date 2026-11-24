// One place for the facts that appear all over the site. Fill the placeholders before launch.
export const site = {
  name: "Privé",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prive.vixe.africa",
  supportEmail: "prive@vixe.africa",
  // Play Store or APK link. Empty = the buttons point at the /get page instead.
  downloadUrl: process.env.NEXT_PUBLIC_DOWNLOAD_URL ?? "",
  // True until the app can be downloaded: the buttons say "Join the waitlist" and the home page shows the form.
  waitlist: !process.env.NEXT_PUBLIC_DOWNLOAD_URL,
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
