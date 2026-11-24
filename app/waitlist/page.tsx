import type { Metadata } from "next";
import { WaitlistPage } from "@/components/WaitlistSections";

export const metadata: Metadata = { title: "Join the waitlist", description: "Privé is getting ready to launch. Join the waitlist and we will tell you the day it opens." };

export default function Waitlist() {
  return <WaitlistPage />;
}
