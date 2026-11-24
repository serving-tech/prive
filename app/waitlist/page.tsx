import { redirect } from "next/navigation";

// The waitlist form is the first thing on the home page. This address is only kept so links in emails and old links keep working.
export default function Waitlist() {
  redirect("/#join");
}
