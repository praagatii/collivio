"use client";
import { PillarShell, PillarCard } from "@/components/pillar-shell";
import { GraduationCap, Users, Lightbulb, Wrench, HeartHandshake, Compass } from "lucide-react";

export default function PeoplePage() {
  const people = [
    { tag: "MENTOR", name: "Ms. Aisha Khan", icon: <GraduationCap size={19} />, meta: "Teacher · Math & Design", desc: "Guides first-time coders through weekly project sprints and portfolio building.", href: "/people/1" },
    { tag: "FOUNDER", name: "Rohan Mitra", icon: <Lightbulb size={19} />, meta: "Founder · LearnSprout", desc: "Built a micro-learning app used by 400 students across two states.", href: "/people/2" },
    { tag: "COLLAB", name: "Sana Iqbal", icon: <Users size={19} />, meta: "Student · Design Lab", desc: "Runs the campus design circle — posters, decks and product visuals.", href: "/people/3" },
    { tag: "RESEARCHER", name: "Dr. Mehul Rao", icon: <Compass size={19} />, meta: "Researcher · Learning science", desc: "Studies how peer tutoring improves retention in STEM classrooms.", href: "/people/4" },
    { tag: "COACH", name: "Priya Nair", icon: <HeartHandshake size={19} />, meta: "Career Coach", desc: "Pairs students with internships that match their project work.", href: "/people/5" },
    { tag: "VOLUNTEER", name: "Arjun Dev", icon: <Wrench size={19} />, meta: "Volunteer · Code Club", desc: "Runs weekend coding clubs for rural middle-schoolers.", href: "/people/6" },
  ];
  return (
    <PillarShell eyebrow="PEOPLE" title="The builders behind Collivio." blurb="Mentors, founders and peers who create real opportunities together — learn with them, build with them." accent="#f2694e">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <PillarCard key={p.tag} {...p} />
        ))}
      </section>
    </PillarShell>
  );
}