"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, research, skillGroups } from "@/data/mock";
import { CountUp } from "@/components/primitives";
import { ProjectCard, ResearchCard } from "@/components/cards";

const EASE = [0.22, 1, 0.36, 1] as const;

const TINTS = [
  "bg-lemon",
  "bg-pink",
  "bg-cyan",
  "bg-lime",
  "bg-purple",
  "bg-orange",
  "bg-mint",
] as const;

export function Ticker() {
  const words = [
    "PAID PROJECTS",
    "OPEN RESEARCH",
    "REAL PEOPLE",
    "NO FORMS",
    "SHIP IT",
    "BUILD PUBLIC",
  ];
  const strip = (
    <div className="flex w-max shrink-0 items-center gap-3 pr-3">
      {words.map((w, i) => (
        <span key={w} className={`rounded-full px-4 py-1.5 label shadow-sm ${TINTS[i % TINTS.length]}`}>
          {w}
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-3.5" aria-hidden>
      <div className="flex w-max animate-marquee">
        {strip}
        {strip}
      </div>
    </div>
  );
}

export function Hero() {
  const lines = [
    { t: "FIND", cls: "text-ink" },
    { t: "WHAT'S", cls: "text-ink" },
    { t: "NEXT.", cls: "text-accent" },
  ];
  return (
    <section className="relative overflow-hidden">
      <span className="animate-bob pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-lemon/50 blur-2xl" />
      <span className="animate-bob pointer-events-none absolute right-[4%] top-24 h-40 w-40 rounded-full bg-pink/40 blur-2xl" style={{ animationDelay: "1.2s" }} />
      <span className="animate-bob pointer-events-none absolute bottom-0 left-[42%] h-52 w-52 rounded-full bg-cyan/40 blur-2xl" style={{ animationDelay: "0.7s" }} />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label flex items-center gap-2 text-ink-soft"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            COLLIVIO · THINK IT. DROP IT. BUILD IT.
          </motion.div>
          <h1
            className="disp mt-7 text-ink"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", lineHeight: 1.02 }}
          >
            {lines.map((l, i) => (
              <motion.span
                key={l.t}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: EASE }}
                className={`block ${l.cls}`}
              >
                {i === 2 ? (
                  <span className="relative inline-block">
                    <span className="absolute inset-x-[-10px] bottom-1 top-[58%] -z-10 rounded-full bg-lemon" />
                    NEXT.
                  </span>
                ) : (
                  l.t
                )}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            The place where students meet real paid projects, open research and
            the people already making stuff. Browsing is open — your profile is
            the application.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/employment-skill-bridge"
              data-cur
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 label text-white transition-colors duration-300 hover:bg-deep"
            >
              EXPLORE COLLIVIO
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="#how-it-works"
              data-cur
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 label text-ink transition-colors duration-300 hover:bg-ink hover:text-canvas"
            >
              SEE HOW IT WORKS
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {[
              ["PAID PROJECTS LIVE", 24, "", "text-work"],
              ["RESEARCHERS", 44, "", "text-research"],
              ["BUILDERS", 1000, "+", "text-community"],
            ].map(([k, n, s, c]) => (
              <div key={k as string} className="rounded-2xl border border-line bg-paper px-5 py-3">
                <div className={`disp text-2xl ${c}`}>
                  <CountUp value={n as number} suffix={s as string} />
                </div>
                <div className="label mt-0.5 text-ink-soft">{k as string}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden min-h-[520px] lg:block">
          <motion.div
            initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="absolute right-24 top-6 grid h-44 w-44 place-items-center rounded-full bg-work text-canvas"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="disp text-xl tracking-wide"
            >
              BUILD · SHIP ·
              <br />
              BUILD · SHIP ·
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="animate-bob absolute left-0 top-16 -rotate-6 rounded-2xl border-2 border-ink bg-lemon px-5 py-3 label shadow-[4px_4px_0_0_#16161d]"
          >
            PAID PROJECTS →
          </motion.div>
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="animate-bob absolute bottom-24 left-16 rotate-3 rounded-2xl border-2 border-ink bg-cyan px-5 py-3 label shadow-[4px_4px_0_0_#16161d]"
            style={{ animationDelay: "1s" }}
          >
            NO COVER LETTERS
          </motion.div>
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="animate-bob absolute bottom-8 right-10 -rotate-2 rounded-2xl border-2 border-ink bg-pink px-5 py-3 label text-white shadow-[4px_4px_0_0_#16161d]"
            style={{ animationDelay: "1.8s" }}
          >
            MAKE SOMETHING MATTER
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Ecosystem() {
  const cards = [
    {
      n: "01",
      word: "BUILD",
      color: "bg-work",
      kicker: "PAID PROJECTS & BRIEFS",
      meta: `${projects.length} OPEN PROJECTS`,
      href: "/employment-skill-bridge",
      blurb: "Grab a real brief, ship real work, get paid for it.",
    },
    {
      n: "02",
      word: "RESEARCH",
      color: "bg-research",
      kicker: "LIVE INVESTIGATIONS",
      meta: `${research.length} RESEARCH TEAMS`,
      href: "/research-hub",
      blurb: "Join an open question and put your name on the findings.",
    },
    {
      n: "03",
      word: "CONNECT",
      color: "bg-community",
      kicker: "PEOPLE & ORGANIZATIONS",
      meta: "STUDENTS · MENTORS · COS",
      href: "/profile",
      blurb: "Your next team is already building here.",
    },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-4 pt-16 md:px-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 label text-ink">
        <span className="h-2.5 w-2.5 rounded-full bg-ink" />
        THE COLLIVIO ECOSYSTEM
      </span>
      <h2
        className="disp mt-6 text-ink"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.03 }}
      >
        A LOT IS HAPPENING.
        <br />
        <span className="text-accent">IT&apos;S ORGANIZED.</span>
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-12">
        {cards.map((c, i) => (
          <motion.a
            key={c.word}
            href={c.href}
            data-cur
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 text-white ${
              i === 0 ? "md:col-span-6 md:row-span-2 md:min-h-[460px]" : "md:col-span-6 min-h-[220px]"
            } ${c.color}`}
          >
            <span className="animate-bob pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15" />
            <span className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/10" />
            <div className="relative flex items-start justify-between gap-4">
              <span className="num-outline text-4xl" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.55)" }}>
                {c.n}
              </span>
              <span className="rounded-full bg-white/20 px-3.5 py-1.5 label backdrop-blur-sm">{c.meta}</span>
            </div>
            <div className="relative">
              <div className="label text-white/80">{c.kicker}</div>
              <div className="disp mt-2 text-4xl md:text-6xl">{c.word}</div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">{c.blurb}</p>
              <span className="mt-6 inline-grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function Opportunities() {
  const picks = [projects[1], projects[0], projects[3], projects[6]].filter(Boolean);
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-8 pt-16 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-work px-4 py-1.5 label text-white">
            OPEN PROJECTS
          </span>
          <h2
            className="disp mt-4 text-ink"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)" }}
          >
            GRAB WHAT&apos;S NEXT.
          </h2>
        </div>
        <Link href="/employment-skill-bridge" data-cur className="label link-line text-ink hover:text-accent">
          VIEW ALL PROJECTS →
        </Link>
      </div>
      <div className="scrub-x -mx-4 mt-8 flex gap-5 overflow-x-auto px-4 pb-4 md:px-0">
        {picks.map((p, i) => (
          <ProjectCard key={p.id} project={p} variant="tile" index={i + 1} eager={i === 0} />
        ))}
      </div>
    </section>
  );
}

export function ResearchShow() {
  return (
    <section className="relative my-16 overflow-hidden bg-research py-20 text-white">
      <span className="animate-bob pointer-events-none absolute -right-16 top-6 h-56 w-56 rounded-full bg-white/10" />
      <span className="pointer-events-none absolute -left-10 bottom-[-70px] h-64 w-64 rounded-full bg-cyan/30" />
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 label text-white">
              OPEN RESEARCH
            </span>
            <h2
              className="disp mt-4"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)" }}
            >
              DIG INTO AN OPEN QUESTION.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
              Real investigations that accept new collaborators. Not papers on a
              shelf — teams you can actually join.
            </p>
          </div>
          <Link
            href="/research-hub"
            data-cur
            className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 label text-research transition-colors duration-300 hover:bg-lemon hover:text-ink"
          >
            EXPLORE RESEARCH <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="scrub-x -mx-4 mt-10 flex gap-5 overflow-x-auto px-4 pb-4 md:px-0">
          {research.slice(0, 4).map((r, i) => (
            <ResearchCard key={r.id} item={r} variant="tile" index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { t: "DISCOVER", d: "Browse paid projects, research and people. No login required." },
    { t: "EXPLORE", d: "Open anything. Every card leads somewhere real." },
    { t: "OPEN", d: "Read the full brief. Decide if it is your thing." },
    { t: "APPLY · JOIN", d: "Your COLLIVIO profile is your application — no forms." },
    { t: "COLLABORATE", d: "Get accepted, ship visible work, get recommended next." },
  ];
  return (
    <section id="how-it-works" className="mx-auto max-w-[1200px] scroll-mt-24 px-4 py-20 md:px-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 label text-ink">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        HOW IT WORKS
      </span>
      <h2
        className="mt-6 text-ink"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.03 }}
      >
        DISCOVER → APPLY →{" "}
        <span className="rounded-2xl bg-lemon px-3">BUILD</span>
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            whileHover={{ y: -4 }}
            className={`rounded-[1.6rem] p-6 ${TINTS[i % TINTS.length]}`}
          >
            <div className="disp text-3xl">0{i + 1}</div>
            <div className="mt-6 border-t border-ink/15 pt-4">
              <div className="disp text-base text-ink">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const work = Array.from(new Set(Object.values(skillGroups).flat())).slice(0, 12);
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 md:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-discovery px-4 py-1.5 label text-ink">
            DISCOVER BY SKILL
          </span>
          <h2 className="disp mt-4 text-ink" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)" }}>
            WHAT DO YOU WANT TO DO?
          </h2>
        </div>
        <Link href="/employment-skill-bridge" data-cur className="label link-line hidden text-ink hover:text-accent md:block">
          VIEW ALL →
        </Link>
      </div>
      <div className="scrub-x -mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-4 md:px-0">
        {work.map((s, i) => (
          <motion.a
            key={s}
            href="/employment-skill-bridge"
            data-cur
            whileHover={{ y: -3, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
            className={`group flex shrink-0 items-center gap-2.5 rounded-full px-5 py-3 label text-ink ${TINTS[i % TINTS.length]}`}
          >
            <span className="text-ink/50">#{String(i + 1).padStart(2, "0")}</span>
            {s.toUpperCase()}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20">
      <span className="animate-bob pointer-events-none absolute left-[8%] top-10 h-40 w-40 rounded-full bg-lemon/40 blur-2xl" />
      <span className="animate-bob pointer-events-none absolute right-[10%] bottom-10 h-40 w-40 rounded-full bg-purple/30 blur-2xl" style={{ animationDelay: "1s" }} />
      <div className="relative mx-auto max-w-[1200px] px-4 text-center md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-1.5 label text-ink">
          YOUR MOVE.
        </span>
        <h2
          className="disp mt-7 text-ink"
          style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.6rem)", lineHeight: 1.02 }}
        >
          MAKE
          <br />
          SOMETHING
          <br />
          <span className="relative inline-block">
            <span className="absolute inset-x-[-8px] bottom-2 top-[58%] -z-10 rounded-full bg-cyan" />
            MATTER.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
          Your profile is your application. No cover letters, no forms — bring
          the work you have already made public.
        </p>
        <Link
          href="/signup"
          data-cur
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-discovery px-10 py-5 label text-ink shadow-[5px_5px_0_0_#16161d] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          CREATE YOUR PROFILE <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}