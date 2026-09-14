"use client";
import { PillarShell, PillarCard } from "@/components/pillar-shell";
import { Ruler, FlaskConical, Target, Radio, TreePine, Building2 } from "lucide-react";

export default function SpacesPage() {
  const spaces = [
    { tag: "LAB", name: "Design & Print Studio", glyph: <Ruler size={64} strokeWidth={1.4} className="text-pine" />, meta: "Campus · Room 14", desc: "Laser cutter, 3D printers and a plotter - open every afternoon for student projects.", href: "/event/14", tile: "bg-mint" },
    { tag: "LAB", name: "Bio Build Bench", glyph: <FlaskConical size={64} strokeWidth={1.4} className="text-coral" />, meta: "Science Block", desc: "A shared bench for microscope hacks and open-source biology experiments.", href: "/event/15", tile: "bg-blush" },
    { tag: "HUB", name: "Startup Garage", glyph: <Target size={64} strokeWidth={1.4} className="text-sun" />, meta: "Incubator", desc: "Co-working for student ventures with weekly mentor office hours.", href: "/event/16", tile: "bg-sun/40" },
    { tag: "STUDIO", name: "Campus Radio Shed", glyph: <Radio size={64} strokeWidth={1.4} className="text-pine" />, meta: "Courtyard corner", desc: "A live studio where clubs broadcast shows and interviews every Friday.", href: "/event/17", tile: "bg-mint" },
    { tag: "OUTDOOR", name: "Open-Air Class Circle", glyph: <TreePine size={64} strokeWidth={1.4} className="text-coral" />, meta: "The Grove", desc: "A shaded circle for seminars, book clubs and sunset jam sessions.", href: "/event/18", tile: "bg-blush" },
    { tag: "SERVICES", name: "Community Kitchen Lab", glyph: <Building2 size={64} strokeWidth={1.4} className="text-sun" />, meta: "Student Union", desc: "Cooking workshops that double as nutrition and business learning.", href: "/event/19", tile: "bg-sun/40" },
  ];
  return (
    <PillarShell eyebrow="SPACES" title="Spaces where ideas come alive." blurb="Labs, studios and hubs on campus - find a bench, a booth or a broadcast slot and make something.">
      <section className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((p) => <PillarCard key={p.tag} {...p} />)}
      </section>
    </PillarShell>
  );
}