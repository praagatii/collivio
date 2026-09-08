import AreaBanner, { type Area } from "./area-banner";

const areas: Area[] = [
  {
    index: "01",
    name: "Employment Skill Bridge",
    title: ["Real projects.", "Real opportunities."],
    description:
      "Discover paid projects from companies and apply using the work you've already built — not another resume.",
    cta: "Explore Skill Bridge",
    href: "/employment-skill-bridge",
  },
  {
    index: "02",
    name: "Research Hub",
    title: ["Build with", "other minds."],
    description:
      "Create research projects, find collaborators and work with other students to turn ideas into something real.",
    cta: "Explore Research Hub",
    href: "/research-hub",
    align: "right",
  },
  {
    index: "03",
    name: "Media Lab",
    title: ["See what's", "happening."],
    description:
      "Discover projects, events, opportunities, collaborations and the people building them.",
    cta: "Enter Media Lab",
    href: "/media-lab",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="pb-28 md:pb-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="flex items-baseline justify-between border-b border-line pb-6">
          <p className="label-mono text-ink-soft">Inside the platform</p>
          <p className="label-mono hidden text-ink-soft md:inline">
            01 — 03
          </p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        {areas.map((area) => (
          <AreaBanner key={area.index} area={area} />
        ))}
      </div>
    </section>
  );
}