"use client";
import { PillarShell, PillarCard } from "@/components/pillar-shell";
import { GraduationCap, Compass, Lightbulb, Microscope, Users, Rocket } from "lucide-react";

export default function PeoplePage() {
  const people = [
    { tag: "MENTOR", name: "Ms. Aisha Khan", glyph: <GraduationCap size={64} strokeWidth={1.4} className="text-pine" />, meta: "Math & Design", desc: "Guides first-time coders through weekly project sprints and portfolio building.", href: "/profile/2", tile: "bg-mint" },
    { tag: "FOUNDER", name: "Rohan Mitra", glyph: <Compass size={64} strokeWidth={1.4} className="text-coral" />, meta: "Founder · LearnSprout", desc: "Built a micro-learning app now used by 400 students across two states.", href: "/profile/3", tile: "bg-blush" },
    { tag: "PEER", name: "Sana Iqbal", glyph: <Lightbulb size={64} strokeWidth={1.4} className="text-sun" />, meta: "Design Lab", desc: "Runs the campus design circle - posters, decks and product visuals.", href: "/profile/4", tile: "bg-sun/40" },
    { tag: "RESEARCHER", name: "Dr. Mehul Rao", glyph: <Microscope size={64} strokeWidth={1.4} className="text-pine" />, meta: "Learning science", desc: "Studies how peer tutoring improves STEM retention in the classroom.", href: "/profile/5", tile: "bg-mint" },
    { tag: "COACH", name: "Priya Nair", glyph: <Users size={64} strokeWidth={1.4} className="text-navy" />, meta: "Career coaching", desc: "Pairs students with internships that match the projects they build.", href: "/profile/6", tile: "bg-blush" },
    { tag: "VOLUNTEER", name: "Arjun Dev", glyph: <Rocket size={64} strokeWidth={1.4} className="text-coral" />, meta: "Code Club", desc: "Runs weekend coding clubs for rural middle-schoolers.", href: "/profile/7", tile: "bg-sun/40" },
  ];
  return (
    <PillarShell eyebrow="PEOPLE" title="The builders of Collivio." blurb="Mentors, founders and peers who create real opportunities together - learn with them, build with them.">
      <section className="mt-2 grid gap-ikiwa-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => <PillarCard key={p.tag} {...p} />)}
      </section>
    </PillarShell>
  );
}