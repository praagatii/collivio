"use client";
import { PillarShell, PillarCard } from "@/components/pillar-shell";
import { Sprout, Globe, Bot, Microscope, Palette, Rocket } from "lucide-react";

export default function IdeasPage() {
  const ideas = [
    { tag: "CLIMATE", name: "Campus Water Sensor Net", icon: <Sprout size={19} />, meta: "12 collaborators", desc: "Low-cost sensors that show real-time water use across dorm blocks to cut waste.", href: "/ideas/8" },
    { tag: "ED-TECH", name: "Private Peer-Tutor Atlas", icon: <Globe size={19} />, meta: "8 collaborators", desc: "Matches students needing help with peers already acing the topic — anonymised.", href: "/ideas/9" },
    { tag: "AI", name: "Homework Helper That Coaches", icon: <Bot size={19} />, meta: "5 collaborators", desc: "AI that never gives the answer — it asks guiding questions until you get it.", href: "/ideas/10" },
    { tag: "SCIENCE", name: "Open Teacher Microscope", icon: <Microscope size={19} />, meta: "14 collaborators", desc: "A low-cost microscope any school lab can build and share slides on.", href: "/ideas/11" },
    { tag: "DESIGN", name: "Textbook as a Zine", icon: <Palette size={19} />, meta: "6 collaborators", desc: "Turning dense chapters into illustrated, teen-made zines that explain better.", href: "/ideas/12" },
    { tag: "SPACE", name: "Night Sky Club Channel", icon: <Rocket size={19} />, meta: "20 collaborators", desc: "Live observatory plots and monthly stargazing meetups for rookie astronomers.", href: "/ideas/13" },
  ];
  return (
    <PillarShell eyebrow="IDEAS" title="Ideas worth building together." blurb="Projects that turn classrooms into workshops — pick one, join it, ship it with people who care." accent="#a22a0f">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((p) => (
          <PillarCard key={p.tag} {...p} />
        ))}
      </section>
    </PillarShell>
  );
}