import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Research Hub — COLLivio",
};

export default function ResearchHubPage() {
  return (
    <PlaceholderPage
      eyebrow="02 — Research Hub"
      leading="Build with"
      trailing="other minds."
      blurb={
        <>
          Student-led research and project collaboration. Create a research
          project, discover it, and join other students working on ideas worth
          building together.
          <br />
          This space is being built right now.
        </>
      }
      ctaLabel="Back to COLLivio"
      ctaHref="/"
    />
  );
}