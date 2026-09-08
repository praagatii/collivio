import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Media Lab — COLLivio",
};

export default function MediaLabPage() {
  return (
    <PlaceholderPage
      eyebrow="03 — Media Lab"
      leading="See what's"
      trailing="happening."
      blurb={
        <>
          A discovery feed of projects, events, collaborations, opportunities
          and activity happening across COLLivio. See who&apos;s building what —
          and get in on it.
          <br />
          This space is being built right now.
        </>
      }
    />
  );
}