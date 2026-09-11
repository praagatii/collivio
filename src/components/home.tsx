"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, research, skillGroups } from "@/data/mock";
import { CountUp } from "@/components/primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-12 px-4 pb-16 pt-12 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:pt-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="label flex items-center gap-2 text-ink-soft"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          COLLIVIO · THINK IT. DROP IT. BUILD IT.
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          className="disp mt-6 text-ink"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.2rem)" }}
        >
          WHERE
          <br />
          STUDENTS
          <br />
          MEET WHAT&apos;S
          <br />
          <span className="text-accent">NEXT.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
        >
          COLLIVIO is where young people find paid projects, join research
          teams and build public proof — before they graduate. Browsing is
          open. Your profile is the application.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/employment-skill-bridge"
            data-cur
            className="group inline-flex items-center gap-2 bg-deep px-7 py-4 label text-canvas transition-colors duration-300 hover:bg-accent"
          >
            EXPLORE COLLIVIO
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="#how-it-works"
            data-cur
            className="inline-flex items-center gap-2 border border-ink px-7 py-4 label text-ink transition-colors duration-300 hover:bg-ink hover:text-canvas"
          >
            SEE HOW IT WORKS
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex items-center gap-7"
        >
          {[
            ["PAID PROJECTS LIVE", 24, ""],
            ["RESEARCHERS", 44, ""],
            ["BUILDERS", 1000, "+"],
          ].map(([k, n, s]) => (
            <div key={k as string}>
              <div className="disp text-2xl text-ink">
                <CountUp value={n as number} suffix={s as string} />
              </div>
              <div className="label mt-1 text-ink-soft">{k as string}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="self-start border border-ink bg-deep md:mt-4"
      >
        <div className="flex items-center justify-between border-b border-canvas/15 px-5 py-4">
          <span className="label text-canvas/70">THE ECOSYSTEM</span>
          <span className="label text-accent">LIVE</span>
        </div>
        <EcoRow
          n="01"
          label="EMPLOYMENT"
          meta={`${projects.length} OPEN PROJECTS`}
          href="/employment-skill-bridge"
        />
        <EcoRow
          n="02"
          label="RESEARCH"
          meta={`${research.length} INVESTIGATIONS`}
          href="/research-hub"
        />
        <EcoRow
          n="03"
          label="COMMUNITY"
          meta="PEOPLE, TEAMS & IDEAS"
          href="/profile"
          last
        />
      </motion.div>
    </section>
  );
}

function EcoRow({
  n,
  label,
  meta,
  href,
  last,
}: {
  n: string;
  label: string;
  meta: string;
  href: string;
  last?: boolean;
}) {
  return (
    <Link
      href={href}
      data-cur
      className={`group flex items-center gap-5 px-5 py-5 transition-colors duration-300 ${
        last ? "" : "border-b border-canvas/15"
      } hover:bg-accent`}
    >
      <span className="num-outline text-2xl" style={{ WebkitTextStroke: "1.25px rgba(255,255,255,0.35)" }}>
        {n}
      </span>
      <span className="flex-1">
        <span className="disp block text-xl text-canvas md:text-2xl">{label}</span>
        <span className="label mt-1 block text-canvas/60">{meta}</span>
      </span>
      <ArrowUpRight
        size={18}
        className="text-canvas/70 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:text-canvas"
      />
    </Link>
  );
}

export function Ecosystem() {
  const rows = [
    {
      n: "01",
      title: "EMPLOYMENT",
      kicker: "FIND SOMETHING WORTH BUILDING",
      blurb:
        "Paid projects, briefs and challenges from companies who want people that can actually build.",
      href: "/employment-skill-bridge",
    },
    {
      n: "02",
      title: "RESEARCH",
      kicker: "FIND SOMETHING WORTH EXPLORING",
      blurb:
        "Ongoing investigations you can join, read and contribute to — not just citations on a page.",
      href: "/research-hub",
    },
    {
      n: "03",
      title: "COMMUNITY",
      kicker: "PEOPLE BUILDING TOGETHER",
      blurb:
        "Students, researchers, mentors and organizations — the network your future work comes from.",
      href: "/profile",
    },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 md:px-6">
      <div className="label flex items-center gap-2 text-ink-soft">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        ONE PLACE
      </div>
      <h2
        className="disp mt-4 text-ink"
        style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.6rem)" }}
      >
        A LOT IS HAPPENING.
        <br />
        <span className="text-accent">IT&apos;S ORGANIZED.</span>
      </h2>
      <div className="mt-10 border-t border-line">
        {rows.map((r) => (
          <Link
            key={r.n}
            href={r.href}
            data-cur
            className="group grid gap-3 border-b border-line py-7 transition-colors duration-300 hover:bg-paper md:grid-cols-[80px_minmax(0,5fr)_minmax(0,3fr)_40px] md:items-center md:gap-8 md:py-9"
          >
            <span className="num-outline text-3xl md:text-4xl">{r.n}</span>
            <span>
              <span className="label text-ink-soft">{r.kicker}</span>
              <span className="disp mt-1 block text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.7rem)" }}>
                {r.title}
              </span>
            </span>
            <span className="text-sm leading-relaxed text-ink-soft">{r.blurb}</span>
            <ArrowUpRight
              size={20}
              className="text-ink-soft transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
            />
          </Link>
        ))}
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
    <section id="how-it-works" className="mx-auto max-w-[1200px] scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="label flex items-center gap-2 text-ink-soft">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        HOW IT WORKS
      </div>
      <h2
        className="mt-4 text-ink"
        style={{ display: "flex", flexWrap: "wrap", gap: "0 0.5em" }}
      >
        <span className="disp" style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.6rem)" }}>
          DISCOVER → APPLY →{" "}
        </span>
        <span className="disp text-accent" style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.6rem)" }}>
          BUILD
        </span>
      </h2>
      <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            className="bg-canvas p-6"
          >
            <div className="num-outline text-3xl md:text-4xl">0{i + 1}</div>
            <div className="mt-6 border-t border-line pt-4">
              <div className="disp text-base text-ink">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
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
          <div className="label flex items-center gap-2 text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            DISCOVER BY SKILL
          </div>
          <h2 className="disp mt-3 text-2xl text-ink md:text-3xl">WHAT DO YOU WANT TO DO?</h2>
        </div>
        <Link href="/employment-skill-bridge" data-cur className="label link-line hidden text-ink md:block">
          VIEW ALL →
        </Link>
      </div>
      <div className="scrub-x -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 md:px-0">
        {work.map((s, i) => (
          <Link
            key={s}
            href="/employment-skill-bridge"
            data-cur
            className="group shrink-0 border border-line px-4 py-2.5 label text-ink-soft transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-canvas"
          >
            <span className="text-accent/60">0{i + 1}</span> {s.toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  );
}