"use client";
import { PillarShell, PillarCard } from "@/components/pillar-shell";
import { Sprout, Bot, Microscope, Palette, Rocket, Globe } from "lucide-react";

export default function IdeasPage() {
  const ideas = [
    { tag: "CLIMATE", name: "Campus Water Sensor Net", glyph: <Sprout size={64} strokeWidth={1.4} className="text-pine" />, meta: "12 collaborators", desc: "Low-cost sensors that show real-time water use across dorm blocks to cut waste.", href: "/research/8", tile: "bg-mint" },
    { tag: "ED-TECH", name: "Private Peer-Tutor Atlas", glyph: <Globe size={64} strokeWidth={1.4} className="text-coral" />, meta: "8 collaborators", desc: "Matches students who need help with peers already acing the topic - anonymised.", href: "/research/9", tile: "bg-blush" },
    { tag: "AI", name: "Coach, Not Answer-Bot", glyph: <Bot size={64} strokeWidth={1.4} className="text-sun" />, meta: "5 collaborators", desc: "AI that never gives the answer - it asks guiding questions until you get it.", href: "/research/10", tile: "bg-sun/40" },
    { tag: "SCIENCE", name: "Open Teacher Microscope", glyph: <Microscope size={64} strokeWidth={1.4} className="text-pine" />, meta: "14 collaborators", desc: "A DIY microscope any school lab can afford to build and share slides on.", href: "/research/11", tile: "bg-mint" },
    { tag: "DESIGN", name: "Textbook as a Zine", glyph: <Palette size={64} strokeWidth={1.4} className="text-coral" />, meta: "6 collaborators", desc: "Turning dense chapters into illustrated zines that explain ideas better.", href: "/research/12", tile: "bg-sun/40" },
    { tag: "SPACE", name: "Night Sky Club Channel", glyph: <Rocket size={64} strokeWidth={1.4} className="text-pine" />, meta: "20 collaborators", desc: "Live observatory plots and monthly stargazing meetups for rookie astronomers.", href: "/research/13", tile: "bg-blush" },
  ];
  return (
    <PillarShell eyebrow="IDEAS" title="Ideas worth building." blurb="Discover, develop and share the ideas that turn classrooms into workshops.">
      <section className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((p) => <PillarCard key={p.tag} {...p} />)}
      </section>
    </PillarShell>
  );
}