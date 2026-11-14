export type LegalSection = { heading: string; body: string };

export const terms: LegalSection[] = [
  { heading: "Using Privé", body: "Privé helps people find and host events. You must sign in with a Google account and be old enough to use it. You are responsible for what you post." },
  { heading: "Events are hosted by people, not by us", body: "Hosts are responsible for their events, venues, safety and any rules they set. Privé does not organise, sell tickets for, or guarantee any event." },
  { heading: "Your content", body: "You keep ownership of what you post. You allow us to store and show it to other users as the app works. Do not post anything unlawful, hateful, misleading or that infringes someone else's rights." },
  { heading: "Respect other people", body: "Do not harass others, spam them with messages, or impersonate anyone. We may remove content or accounts that break these terms." },
  { heading: "The service", body: "We work to keep Privé available but cannot promise it will always be error-free or uninterrupted. To the extent the law allows, we are not liable for losses from using the service or attending an event." },
  { heading: "Changes", body: "We may update these terms. If the changes are significant we will tell you in the app." },
];

export const privacy: LegalSection[] = [
  { heading: "What we collect when you sign in", body: "Your Google name, email address and profile photo, so we can create your account. We never see your Google password." },
  { heading: "What you add", body: "Events you host (title, place, time, photos, schedule, dress code, messages to guests), your RSVPs (including the guests you bring and a song suggestion), the organizer pages you create, and the interests, town or campus and alert settings you choose." },
  { heading: "Locations", body: "If you host an event you can add a map pin for the venue. You can type an address, paste a Google Maps link, or use your phone's current location. Your location is read once, only when you tap that button, and only the venue's pin is saved, never where you are afterwards. You can choose to show the exact address only to people who are going." },
  { heading: "Your calendar", body: "Only if you choose to import. We read your Google Calendar once, when you press import, to show you a list. Events you pick are saved as private events in your account. We do not keep the rest of your calendar." },
  { heading: "Photos", body: "If the host turns on the shared photo board for an event, people who said they are going can take photos in the app while the event is on. The app asks for camera access only when you tap Take a photo, and only uses the camera for that. Saving a photo to your gallery asks for permission to save, and nothing else on your phone is read. Everyone who is going, and the host, can then see and download all of the photos from that event. Photos stay on the board until the person who took them or the host removes them, or the event is deleted. Only turn it on if your guests are happy to be photographed." },
  { heading: "Contact numbers", body: "A host can add a phone number to an event. Only guests who said they are going, and the host, can see it." },
  { heading: "Exclusive events", body: "A host can make an event invite only and add email addresses. We store those addresses and send each one an invitation email. Only people who sign in with an invited address can see the event, and it does not appear in search." },
  { heading: "Notifications", body: "We store a device token so we can send push notifications through Firebase Cloud Messaging, and we send emails through Brevo (welcome, RSVP confirmation, reminders and host messages). You can turn these off in Alerts." },
  { heading: "Where it is stored", body: "Account and event data is stored in a PostgreSQL database hosted by Neon. Photos are stored with Cloudflare R2. Emails are sent by Brevo. Push is delivered by Google Firebase." },
  { heading: "Who can see what", body: "Public events, organizer pages and the names of people going (unless the host hides the guest list) are visible to other signed-in users. Private events are visible only to you. Anyone with an event's link can see its title, date, place and cover photo in the link preview. We do not sell your data." },
  { heading: "Deleting your data", body: "You can delete your account in the app (Profile, Delete account). This removes your profile, your events, your RSVPs and your device tokens." },
];

export const faq = [
  { q: "Is it free?", a: "Yes. RSVPs are free, and you can host without paying." },
  { q: "How do I sign in?", a: "With your Google account. We never see your Google password." },
  { q: "When do I get reminders?", a: "A week before and a day before events you are going to. You can switch reminders off in Alerts." },
  { q: "What if the host has not shared the location?", a: "The event shows as location to be announced. When the host shares it, you get a notification and the map button appears." },
  { q: "Can I delete my account?", a: "Yes. In the app go to Profile, then Delete account. It removes your profile, events, RSVPs and device tokens." },
];
