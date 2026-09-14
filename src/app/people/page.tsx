"use client";
import { GraduationCap, UserRound, Lightbulb, Users, Brain, HandHeart } from "lucide-react";
import { PillarShell, PillarCard } from "@/components/pillar-shell";

export default function PeoplePage() {
  const people = [
    { tag: "MENTOR", name: "Ms. Aisha Khan", icon: <GraduationCap size={19} />, meta: "Teacher · Math & Design", desc: "Guides first-time coders through weekly project sprints and portfolio building.", href: "/profile/2" },
    { tag: "FOUNDER", name: "Rohan Mitra", icon: <Lightbulb size={19} />, meta: "Founder · LearnSprout", desc: "Built a micro-learning app used by 400 students across two states.", href: "/profile/3" },
    { tag: "PEER", name: "Sana Iqbal", icon: <Users size={19} />, meta: "Student · Design Lab", desc: "Runs the campus design circle - posters, decks and product visuals.", href: "/profile/4" },
    { tag: "RESEARCHER", name: "Dr. Mehul Rao", icon: <Brain size={19} />, meta: "Researcher · Learning science", desc: "Studies how peer tutoring improves retention in STEM classrooms.", href: "/profile/5" },
    { tag: "COACH", name: "Priya Nair", icon: <UserRound size={19} />, meta: "Career Coach", desc: "Pairs students with internships that match their project work.", href: "/profile/6" },
    { tag: "VOLUNTEER", name: "Arjun Dev", icon: <HandHeart size={19} />, meta: "Volunteer · Code Club", desc: "Runs weekend coding clubs for rural middle-schoolers.", href: "/profile/7" },
  ];
  return (
    <PillarShell eyebrow="PEOPLE" title="The builders behind Collivio." blurb="Mentors, founders and peers who create real opportunities together - learn with them, build with them." accent="#0e6b4e">
      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <PillarCard key={p.tag} {...p} />
        ))}
      </section>
    </PillarShell>
  );
}