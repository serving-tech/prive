import { steps } from "@/components/HowStack";
import { vibes } from "@/components/VibeCards";
import { hostFeatures } from "@/components/Sections";
import { faq, privacy, terms } from "@/content/legal";
import { site } from "@/content/site";

// Plain-text descriptions of the site for AI systems (llms.txt and llms-full.txt), built from the same content the pages use so they cannot drift.

const status = () => site.waitlist
  ? `${site.name} is launching soon on Android. There is a waitlist at ${site.url}/ : people who join get the launch date and the download link first.`
  : `${site.name} is available for Android and free to use.${site.downloadUrl ? ` Download: ${site.downloadUrl}` : ""}`;

const facts = () => [
  `What it is: an event app for campus events, graduations, parties and themed nights.`,
  `Made by: Vixe Africa. ${site.name} is a product of Vixe Africa.`,
  `Price: free. RSVPs are free and hosting is free.`,
  `Platform: Android first. iPhone is not available yet.`,
  `Sign in: with Google, or with an email address confirmed by a 6-digit code.`,
  `Status: ${status()}`,
  `Contact: ${site.supportEmail}`,
  `Website: ${site.url}`,
];

const pages = () => [
  ["Home", `${site.url}/`, "What Privé is, and the waitlist (or the download once launched)."],
  ["How it works", `${site.url}/how-it-works`, "The four steps from an invite to the door, with common questions answered."],
  ["Vibes", `${site.url}/vibes`, "How each event gets its own look: party, themed, graduation, cultural night, campus."],
  ["For hosts", `${site.url}/hosts`, "What hosts get: locations, guest limits, check-in, messages to guests, invite-only events."],
  ["Privacy Policy", `${site.url}/privacy`, "What is collected, why, where it is stored and how to delete it."],
  ["Terms of Use", `${site.url}/terms`, "The rules for using the app and hosting events."],
  ["Delete your account", `${site.url}/delete-account`, "How to delete an account and what is removed."],
];

/** /llms.txt : the short map (format: https://llmstxt.org). */
export function llmsTxt(): string {
  return [
    `# ${site.name}`,
    "",
    `> ${site.description} ${status()}`,
    "",
    `${site.name}: ${site.tagline}`,
    "",
    "## Key facts",
    ...facts().map((f) => `- ${f}`),
    "",
    "## Pages",
    ...pages().map(([t, u, d]) => `- [${t}](${u}): ${d}`),
    "",
    "## Optional",
    `- [Full text of this site for AI systems](${site.url}/llms-full.txt): every page's content in one file.`,
    "",
  ].join("\n");
}

/** /llms-full.txt : the whole public content as markdown. */
export function llmsFullTxt(): string {
  const sections = (list: { heading: string; body: string }[]) => list.map((s) => `### ${s.heading}\n${s.body}`).join("\n\n");
  return [
    `# ${site.name}: ${site.tagline}`,
    "",
    `> ${site.description}`,
    "",
    "## About",
    ...facts().map((f) => `- ${f}`),
    "",
    "## How it works",
    ...steps.map((s) => `${s.n}. **${s.title}** (${s.sub}). ${s.text}`),
    "",
    "## Vibes",
    "Pick a vibe when you create an event and the card, the page and the countdown all follow. The vibes are:",
    ...vibes.map((v) => `- ${v.tag}`),
    "A vibe changes the card in feeds, the guest page with its countdown and RSVP, and the modules (countdown, line-up, dress code, shared playlist), which only show when switched on.",
    "",
    "## For hosts",
    "Anyone can host an event as themselves, or as a club, venue or events business with a page people can follow.",
    ...hostFeatures.map((f) => `- **${f.t}.** ${f.d}`),
    "- **Invite only.** An exclusive event stays out of search and only the email addresses the host adds can see it.",
    "",
    "## Frequently asked questions",
    ...faq.map((f) => `**${f.q}**\n${f.a}\n`),
    "## Privacy Policy",
    `Last updated ${site.legalUpdated}. Full page: ${site.url}/privacy`,
    "",
    sections(privacy),
    "",
    "## Terms of Use",
    `Full page: ${site.url}/terms`,
    "",
    sections(terms),
    "",
    "## Contact",
    `Write to ${site.supportEmail}.`,
    "",
  ].join("\n");
}
