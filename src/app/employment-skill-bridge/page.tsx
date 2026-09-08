import type { Metadata } from "next";
import PlaceholderPage from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Employment Skill Bridge — COLLivio",
};

export default function EmploymentSkillBridgePage() {
  return (
    <PlaceholderPage
      eyebrow="01 — Employment Skill Bridge"
      leading="Real work."
      trailing="Real companies."
      blurb={
        <>
          Companies post paid projects. Students browse and apply using their
          COLLivio profile instead of a traditional resume. When a company
          matches your work, you build — and get paid for it.
          <br />
          This space is being built right now.
        </>
      }
    />
  );
}