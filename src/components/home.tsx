"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Hammer, FlaskConical, Users } from "lucide-react";
import { projects, research, students } from "@/data/mock";
import { ProjectCard, ProfileCard } from "@/components/cards";
import { Squiggle } from "@/components/primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

function ChunkySquiggle({ className = "" }: { className?: string }) {
  const segs = [
    { d: "M300 30 C365 95 365 175 300 215", c: "var(--teal)" },
    { d: "M300 215 C235 255 235 335 300 375", c: "var(--mustard)" },
    { d: "M300 375 C365 415 365 495 300 535", c: "var(--copper)" },
    { d: "M300 535 C245 570 235 605 265 625", c: "var(--claret)" },
  ];
  return (
    <svg viewBox="0 0 400 660" fill="none" className={className} aria-hidden>
      {segs.map((s, i) => (
        <motion.path
          key={s.c}
          d={s.d}
          stroke={s.c}
          strokeWidth={38}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.35, ease: EASE }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pt-24">
      <div>
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
          className="disp mt-6 text-teal"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.4rem)" }}
        >
          FIND
          <br />
          YOUR WAY
          <br />
          <span className="serif-ita text-copper">in.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
        >
          Paid projects, open research and the people already making things —
          COLLIVIO helps students find their thing and make it public.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="mt-8"
        >
          <Link
            href="/employment-skill-bridge"
            data-cur
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 label text-paper transition-colors duration-300 hover:bg-teal"
          >
            EXPLORE COLLIVIO
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center md:justify-end">
        <ChunkySquiggle className="h-[360px] w-auto md:h-[520px]" />
      </div>
    </section>
  );
}

export function Idea() {
  return (
    <section className="bg-teal text-canvas">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          src="https://picsum.photos/seed/collivio-hands/900/700"
          alt="Students sketching ideas together"
          className="aspect-[4/3] w-full rounded-[2.5rem] object-cover"
        />
        <div>
          <div className="label text-canvas/60">WHAT COLLIVIO DOES</div>
          <h2
            className="disp mt-5 text-canvas"
            style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }}
          >
            LIVE PROJECTS, OPEN RESEARCH &amp; REAL PEOPLE.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-canvas/80 md:text-base">
            One place where students find paid work, join research teams and
            meet the people already making things — then make it all public.
          </p>
        </div>
      </div>
    </section>
  );
}

export function PhotoStatement() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/collivio-room/1800/1000"
        alt=""
        className="h-[68vh] min-h-[480px] w-full object-cover"
      />
      <Squiggle
        className="pointer-events-none absolute -left-16 top-14 h-28 w-64 -rotate-45 text-copper"
        strokeWidth={12}
      />
      <Squiggle
        className="pointer-events-none absolute -right-20 bottom-8 h-28 w-72 rotate-6 text-teal"
        strokeWidth={12}
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-xl rounded-[2.5rem] bg-paper p-9 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] md:p-11"
        >
          <h2
            className="disp text-copper"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)" }}
          >
            MAKE SOMETHING THAT MATTERS.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
            Paid briefs from companies who want people who can build. Open it,
            read it, take it on — your profile is the application.
          </p>
          <Link
            href="/employment-skill-bridge"
            data-cur
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 label text-paper transition-colors duration-300 hover:bg-teal"
          >
            BROWSE PROJECTS
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Paths() {
  const paths = [
    {
      word: "BUILD",
      icon: Hammer,
      blob: "bg-teal",
      copy: "Paid projects and briefs from companies who want people that can actually build.",
      meta: `${projects.length} OPEN PROJECTS`,
      href: "/employment-skill-bridge",
    },
    {
      word: "RESEARCH",
      icon: FlaskConical,
      blob: "bg-mustard",
      copy: "Questions that accept collaborators. Student-led, evidence-first, open.",
      meta: `${research.length} RESEARCH TEAMS`,
      href: "/research-hub",
    },
    {
      word: "CONNECT",
      icon: Users,
      blob: "bg-claret",
      copy: "The network your future work comes from — students, mentors and organizations.",
      meta: "STUDENTS · MENTORS · ORGS",
      href: "/profile",
    },
  ];
  return (
    <section className="bg-claret/15">
      <div className="mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-24">
        <div className="label text-center text-ink/60">THREE PATHS</div>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {paths.map((p, i) => (
            <motion.a
              key={p.word}
              href={p.href}
              data-cur
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-48px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="group block text-center"
            >
              <span
                className={`mx-auto grid aspect-square w-full max-w-[230px] place-items-center ${p.blob} text-canvas transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.03]`}
                style={{ borderRadius: "58% 42% 55% 45% / 52% 60% 40% 48%" }}
              >
                <p.icon size={54} strokeWidth={1.5} />
              </span>
              <h3
                className="disp mt-6 text-ink"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)" }}
              >
                {p.word}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                {p.copy}
              </p>
              <span className="label mt-3 inline-block text-ink-soft transition-colors duration-300 group-hover:text-accent">
                {p.meta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Opportunities() {
  const picks = [projects[1], projects[0], projects[3]].filter(Boolean);
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="label flex items-center gap-2 text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-ink" />
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
      <div className="scrub-x -mx-4 mt-10 flex gap-4 overflow-x-auto px-4 pb-4 md:px-0">
        {picks.map((p, i) => (
          <ProjectCard key={p.id} project={p} variant="tile" index={i + 1} eager={i === 0} />
        ))}
      </div>
    </section>
  );
}

export function People() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 md:px-6">
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
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {students.slice(0, 3).map((s) => (
          <ProfileCard key={s.id} student={s} big />
        ))}
      </div>
    </section>
  );
}

export function ResearchShow() {
  const r = research[0];
  const meta = r
    ? `${r.collaborators} CONTRIBUTORS · ${r.category.toUpperCase()} · ${
        r.open ? `${r.spotsOpen} SPOTS OPEN` : "ONGOING"
      }`
    : "";
  return (
    <section className="bg-burgundy text-canvas">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-6 md:py-32">
        <div className="label text-canvas/60">RESEARCH</div>
        {r ? (
          <>
            <h2
              className="disp mt-6 max-w-4xl text-canvas"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4.6rem)" }}
            >
              {r.question}
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="label text-canvas/80">{meta}</span>
            </div>
            <Link
              href={`/research/${r.id}`}
              data-cur
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-canvas/60 px-8 py-4 label text-canvas transition-colors duration-300 hover:bg-canvas hover:text-burgundy"
            >
              JOIN THE RESEARCH
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Squiggle className="mt-14 h-12 w-full text-mustard" strokeWidth={3} />
          </>
        ) : null}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-copper text-canvas">
      <div className="mx-auto max-w-[1200px] px-4 py-24 text-center md:px-6 md:py-32">
        <h2
          className="disp mx-auto max-w-3xl text-canvas"
          style={{ fontSize: "clamp(2.4rem, 6.5vw, 5rem)" }}
        >
          WHAT ARE
          <br />
          YOU CURIOUS
          <br />
          <span className="serif-ita text-mustard">about?</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/employment-skill-bridge"
            data-cur
            className="group inline-flex items-center gap-2 rounded-full bg-canvas px-9 py-4 label text-ink transition-colors duration-300 hover:bg-mustard"
          >
            EXPLORE COLLIVIO
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
        <Squiggle className="mx-auto mt-16 h-12 w-72 text-mustard" strokeWidth={3} />
      </div>
    </section>
  );
}