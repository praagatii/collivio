import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Log in — COLLivio",
};

export default function LoginPage() {
  return (
    <PlaceholderPage
      eyebrow="Account"
      leading="Join"
      trailing="COLLivio."
      blurb={
        <>
          Create a profile around the work you&apos;ve actually done, or bring your
          company and find the people building it.
          <br />
          Accounts are opening soon — this page is coming next.
        </>
      }
      ctaLabel="Back to COLLivio"
      ctaHref="/"
    />
  );
}