"use client";
import { Ruler, FlaskConical, Target, Radio, TreePine, Building2 } from "lucide-react";
import { PillarShell, PillarCard } from "@/components/pillar-shell";

export default function SpacesPage() {
  const spaces = [
    { tag: "LAB", name: "Design & Print Studio", icon: <Ruler size={19} />, meta: "Campus · Room 14", desc: "Laser cutter, 3D printers and a plotter - open every afternoon for student projects.", href: "/event/14" },
    { tag: "LAB", name: "Bio Build Bench", icon: <FlaskConical size={19} />, meta: "Science Block", desc: "A shared bench for microscope hacks and open-source biology experiments.", href: "/event/15" },
    { tag: "HUB", name: "Startup Garage", icon: <Target size={19} />, meta: "Incubator · Floor 2", desc: "Co-working for student ventures with weekly mentor office hours.", href: "/event/16" },
    { tag: "STUDIO", name: "Campus Radio Shed", icon: <Radio size={19} />, meta: "Courtyard corner", desc: "Live studio where clubs broadcast shows and interviews every Friday.", href: "/event/17" },
    { tag: "OUTDOOR", name: "Open-Air Class Circle", icon: <TreePine size={19} />, meta: "The Grove", desc: "A shaded circle for seminars, book clubs and sunset jam sessions.", href: "/event/18" },
    { tag: "SERVICES", name: "Community Kitchen Lab", icon: <Building2 size={19} />, meta: "Student Union", desc: "Cooking workshops that double as nutrition and business learning.", href: "/event/19" },
  ];
  return (
    <PillarShell eyebrow="SPACES" title="Spaces where ideas come alive." blurb="Labs, studios and hubs on campus - reserve a bench, a booth or a broadcast slot and make something." accent="#115f78">
      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((p) => (
          <PillarCard key={p.tag} {...p} />
        ))}
      </section>
    </PillarShell>
  );
}