import AreaRow, { type Area } from "./area-row";
import Reveal from "./reveal";

const areas: Area[] = [
  {
    index: "01",
    name: "Employment Skill Bridge",
    title: "Real projects. Real opportunities.",
    description:
      "Discover paid projects from companies and apply using the work you've already built — not another resume.",
    cta: "Explore Skill Bridge",
    href: "/employment-skill-bridge",
  },
  {
    index: "02",
    name: "Research Hub",
    title: "Build with other minds.",
    description:
      "Create research projects, find collaborators and work with other students to turn ideas into something real.",
    cta: "Explore Research Hub",
    href: "/research-hub",
  },
  {
    index: "03",
    name: "Media Lab",
    title: "See what's happening.",
    description:
      "Discover projects, events, opportunities, collaborations and the people building them.",
    cta: "Enter Media Lab",
    href: "/media-lab",
  },
];

export default function Areas() {
  return (
    <section id="inside-the-platform" className="py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-0">
        <Reveal>
          <span className="label text-ink-soft">Inside the platform</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="disp mt-8 flex flex-wrap items-baseline gap-x-4 text-[clamp(1.75rem,4.5vw,3.75rem)] font-extrabold">
            Three ways in.
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 max-w-md text-base leading-[1.3] tracking-[-0.01em] text-ink-soft">
            One place to find paid work, build with other minds and watch
            what&apos;s happening. Choose a door.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24">
        {areas.map((area, i) => (
          <Reveal key={area.index} delay={i * 60}>
            <AreaRow area={area} />
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}