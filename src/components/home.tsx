"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, research, students } from "@/data/mock";
import { ProjectCard, ProfileCard } from "@/components/cards";
import { Squiggle } from "@/components/primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-4 pt-20 md:px-6 md:pt-32">
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
        className="disp mt-6 max-w-4xl text-ink"
        style={{ fontSize: "clamp(2.8rem, 8.5vw, 6.4rem)" }}
      >
        FIND
        <br />
        YOUR WAY
        <br />
        <span className="serif-ita text-teal">in.</span>
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
      <div className="mt-16">
        <Squiggle className="h-14 w-full text-teal" strokeWidth={3.5} />
      </div>
    </section>
  );
}

export function Idea() {
  return (
    <section className="mt-16 bg-teal text-canvas">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-6 md:py-32">
        <div className="label text-canvas/60">THE COLLIVIO IDEA</div>
        <h2
          className="disp mt-5 text-canvas"
          style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.2rem)" }}
        >
          THERE&apos;S A LOT
          <br />
          OUT THERE.
        </h2>
        <Squiggle className="my-10 h-12 w-48 text-mustard" strokeWidth={3} />
        <h3
          className="disp max-w-3xl text-canvas"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
        >
          WE HELP YOU FIND YOUR{" "}
          <span className="serif-ita text-mustard">way in.</span>
        </h3>
      </div>
    </section>
  );
}

export function Paths() {
  const cards = [
    {
      n: "01",
      word: "BUILD",
      band: "bg-mustard",
      desc: "Paid projects and briefs from companies who want people that can actually build.",
      list: ["PROJECTS", "SKILLS", "EXPERIENCE"],
      meta: `${projects.length} OPEN PROJECTS`,
      href: "/employment-skill-bridge",
    },
    {
      n: "02",
      word: "RESEARCH",
      band: "bg-copper",
      desc: "Questions that accept collaborators. Student-led, evidence-first, open.",
      list: ["QUESTIONS", "PEOPLE", "DISCOVERY"],
      meta: `${research.length} RESEARCH TEAMS`,
      href: "/research-hub",
    },
    {
      n: "03",
      word: "CONNECT",
      band: "bg-claret",
      desc: "The network your future work comes from — students, mentors and organizations.",
      list: ["PEOPLE", "ORGS", "IDEAS"],
      meta: "STUDENTS · MENTORS · ORGS",
      href: "/profile",
    },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-6">
      <div className="label flex items-center gap-2 text-ink-soft">
        <span className="inline-block h-2 w-2 rounded-full bg-ink" />
        CHOOSE A PATH
      </div>
      <h2
        className="disp mt-4 text-ink"
        style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
      >
        THREE WAYS IN.
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
              className="group block overflow-hidden rounded-[2.5rem] border border-line bg-paper"
            >
              <div className={`${c.band} px-7 pb-8 pt-6 text-canvas`}>
                <div className="label text-canvas/70">{c.n}</div>
                <div
                  className="disp mt-2 text-canvas"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
                >
                  {c.word}
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm leading-relaxed text-ink-soft">{c.desc}</p>
                <div className="mt-4 flex gap-1.5">
                  {c.list.map((l) => (
                    <span key={l} className="rounded-full border border-line px-3 py-1 label text-ink-soft">
                      {l}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="label text-ink-soft">{c.meta}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-accent">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
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
    <section className="bg-mustard">
      <div className="mx-auto max-w-[1200px] px-4 py-20 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="label text-ink/60">PICK SOMETHING</div>
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
            className="label link-line hidden text-ink hover:text-ink md:block"
          >
            VIEW ALL →
          </Link>
        </div>
        <div className="scrub-x -mx-4 mt-10 flex gap-4 overflow-x-auto px-4 pb-4 md:px-0">
          {picks.map((p, i) => (
            <ProjectCard key={p.id} project={p} variant="tile" index={i + 1} eager={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function People() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-6">
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
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-canvas/60 px-8 py-4 label text-canvas transition-colors duration-300 hover:bg-canvas hover:text-claret"
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