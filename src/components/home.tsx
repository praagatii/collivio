"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, research, students } from "@/data/mock";
import { ProjectCard, ResearchCard, ProfileCard } from "@/components/cards";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-8 pt-20 md:px-6 md:pt-32">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="label flex items-center gap-2 text-ink-soft"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-ink" />
        COLLIVIO
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
        className="disp mt-6 max-w-3xl text-ink"
        style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.8rem)" }}
      >
        A LOT IS
        <br />
        HAPPENING.
        <br />
        <span className="text-accent">FIND YOUR THING.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg"
      >
        COLLIVIO connects students with paid projects, open research and the
        people already building. Browse first — your profile is the application.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        className="mt-9"
      >
        <Link
          href="/employment-skill-bridge"
          data-cur
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 label text-white transition-colors duration-300 hover:bg-deep"
        >
          EXPLORE COLLIVIO
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
    </section>
  );
}

export function Ecosystem() {
  const cards = [
    {
      n: "01",
      word: "BUILD",
      desc: "Real briefs, real pay, real proof.",
      meta: `${projects.length} open projects`,
      href: "/employment-skill-bridge",
    },
    {
      n: "02",
      word: "RESEARCH",
      desc: "Join a question. Put your name on the findings.",
      meta: `${research.length} research teams`,
      href: "/research-hub",
    },
    {
      n: "03",
      word: "CONNECT",
      desc: "Your next team is already building here.",
      meta: "Students, mentors, orgs",
      href: "/profile",
    },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-6">
      <div className="label flex items-center gap-2 text-ink-soft">
        <span className="inline-block h-2 w-2 rounded-full bg-ink" />
        EXPLORE COLLIVIO
      </div>
      <h2
        className="disp mt-4 text-ink"
        style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
      >
        THREE WAYS TO START.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.word}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          >
            <Link
              href={c.href}
              data-cur
              className="group block rounded-[1.5rem] border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
            >
              <span className="num-outline text-3xl">{c.n}</span>
              <h3
                className="disp mt-5 text-ink"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
              >
                {c.word}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="label text-ink-soft">{c.meta}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-accent">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Opportunities() {
  const picks = [projects[1], projects[0], projects[3]].filter(Boolean);
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="label flex items-center gap-2 text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            PICK SOMETHING
          </div>
          <h2
            className="disp mt-4 text-ink"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
          >
            FIND SOMETHING
            <br />
            TO BUILD.
          </h2>
        </div>
        <Link
          href="/employment-skill-bridge"
          data-cur
          className="label link-line hidden text-ink hover:text-accent md:block"
        >
          VIEW ALL →
        </Link>
      </div>
      <div className="scrub-x -mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-4 md:px-0">
        {picks.map((p, i) => (
          <ProjectCard key={p.id} project={p} variant="tile" index={i + 1} eager={i === 0} />
        ))}
      </div>
    </section>
  );
}

export function People() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="label flex items-center gap-2 text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-ink" />
            THE PEOPLE
          </div>
          <h2
            className="disp mt-4 text-ink"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
          >
            PEOPLE ARE
            <br />
            BUILDING THINGS.
          </h2>
        </div>
        <Link
          href="/profile"
          data-cur
          className="label link-line hidden text-ink hover:text-accent md:block"
        >
          VIEW ALL →
        </Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {students.slice(0, 3).map((s) => (
          <ProfileCard key={s.id} student={s} big />
        ))}
      </div>
    </section>
  );
}

export function ResearchShow() {
  return (
    <section className="bg-blue/[0.04]">
      <div className="mx-auto max-w-[1200px] px-4 py-20 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="label flex items-center gap-2 text-ink-soft">
              <span className="inline-block h-2 w-2 rounded-full bg-blue" />
              RESEARCH
            </div>
            <h2
              className="disp mt-4 text-ink"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
            >
              QUESTIONS WORTH
              <br />
              EXPLORING.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              Student-led investigations you can actually join.
            </p>
          </div>
          <Link
            href="/research-hub"
            data-cur
            className="label link-line hidden text-ink hover:text-accent md:block"
          >
            VIEW ALL →
          </Link>
        </div>
        <div className="scrub-x -mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-4 md:px-0">
          {research.slice(0, 3).map((r, i) => (
            <ResearchCard key={r.id} item={r} variant="tile" index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="disp text-ink"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
        >
          WHAT ARE YOU
          <br />
          CURIOUS ABOUT?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Search projects, research and people — or let the platform surprise
          you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/employment-skill-bridge"
            data-cur
            className="group inline-flex items-center gap-2 rounded-full bg-deep px-8 py-4 label text-paper transition-colors duration-300 hover:bg-accent"
          >
            EXPLORE PROJECTS
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/research-hub"
            data-cur
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 label text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            EXPLORE RESEARCH
          </Link>
        </div>
      </div>
    </section>
  );
}
