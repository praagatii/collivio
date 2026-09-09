"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  MousePointerClick,
  FolderOpen,
  Send,
  Users,
  ArrowUpRight,
  Radio,
} from "lucide-react";
import { students, skillGroups } from "@/data/mock";
import { Avatar, CountUp, Scribble, Skate, SquashButton } from "@/components/primitives";

const HUECLASSES = ["text-sky", "text-mint", "text-coral", "text-grape", "text-lemon"];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-14 pt-12 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:pt-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label flex items-center gap-2 text-ink-soft"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          DISCOVER · EXPLORE · OPEN · BUILD
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="disp mt-5 text-ink"
          style={{ fontSize: "clamp(2.6rem, 8vw, 5.6rem)" }}
        >
          Think it.
          <br />
          <span className="bg-lemon -mx-1 inline-block px-2">Drop it.</span>
          <br />
          <span className="text-accent">Build it.</span>
        </motion.h1>
        <Scribble className="mt-4 w-44 md:w-60" />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
        >
          COLLIVIO is where students find paid projects, join research teams
          and build public proof — before they even graduate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <SquashButton href="/employment-skill-bridge" text="FIND WORK" variant="deep" />
          <Link
            href="/research-hub"
            data-cur
            className="inline-flex items-center gap-2 border border-line px-6 py-4 label text-ink transition-colors hover:border-accent hover:text-accent"
          >
            JOIN RESEARCH
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-6"
        >
          {[
            ["PAID PROJECTS", 24, ""],
            ["RESEARCHERS", 44, ""],
            ["BUILDERS", 1000, "+"],
          ].map(([k, n, s]) => (
            <div key={k as string}>
              <div className="disp text-2xl text-ink">
                <CountUp value={n as number} suffix={s as string} />
              </div>
              <div className="label text-ink-soft">{k as string}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative hidden md:block">
        <Collage />
      </div>
    </section>
  );
}

function Collage() {
  const s = students[0];
  const imgs = [
    "https://picsum.photos/seed/northstar/520/620",
    "https://picsum.photos/seed/opencities/420/320",
    "https://picsum.photos/seed/koi/380/300",
  ];
  return (
    <div className="relative h-full min-h-[540px]">
      <motion.img
        src={imgs[0]}
        alt=""
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 top-2 w-[62%] border border-line object-cover"
        style={{ aspectRatio: "5/6" }}
      />
      <motion.img
        src={imgs[1]}
        alt=""
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-0 top-[38%] w-[44%] border border-line object-cover"
        style={{ aspectRatio: "4/3" }}
      />
      <motion.img
        src={imgs[2]}
        alt=""
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute bottom-6 right-[8%] w-[34%] border border-line object-cover"
        style={{ aspectRatio: "4/3" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.55, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 13, delay: 0.7 }}
        className="absolute left-0 top-4"
      >
        <Skate rest={-4}>
          <div className="flex items-center gap-3 border border-line bg-canvas px-4 py-3">
            <Avatar src={s.avatar} name={s.name} size={34} />
            <div>
              <div className="label text-ink">{s.name}</div>
              <div className="label text-ink-soft">JUST SHIPPED A PROJECT</div>
            </div>
          </div>
        </Skate>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.55, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 13, delay: 0.9 }}
        className="absolute bottom-0 left-[6%]"
      >
        <Skate rest={3}>
          <div className="flex items-center gap-2 border border-line bg-accent px-4 py-3 text-canvas">
            <Radio size={14} />
            <span className="label">12 COLLABORATORS LIVE</span>
          </div>
        </Skate>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: -14 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 11, delay: 1.05 }}
        className="absolute right-0 bottom-[16%]"
      >
        <Skate rest={-6}>
          <div className="border border-deep bg-lemon px-4 py-2.5 label text-ink">
            ₹12,000 PAID · SHIP THIS WEEK
          </div>
        </Skate>
      </motion.div>
    </div>
  );
}

export function ProductBanners() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-4 px-4 md:grid-cols-3 md:px-6">
      <BannerLink
        href="/employment-skill-bridge"
        bg="bg-deep"
        fg="text-canvas"
        kicker="01 · EMPLOYMENT SKILL BRIDGE"
        title="Find something worth building."
        sub="Paid projects from companies who want people that can actually build."
      />
      <BannerLink
        href="/research-hub"
        bg="bg-accent"
        fg="text-canvas"
        kicker="02 · RESEARCH HUB"
        title="Find something worth exploring."
        sub="Research with people curious about the same questions you are."
      />
      <BannerLink
        href="/media-lab"
        bg="bg-lemon"
        fg="text-ink"
        kicker="03 · MEDIA LAB"
        title="See what people are building right now."
        sub="A live feed of projects, research and launches from the community."
      />
    </section>
  );
}

const TICKER_WORDS = [
  "PAID PROJECTS",
  "RESEARCH TEAMS",
  "BRAND IDENTITY",
  "CLIMATE DATA",
  "AI STUDY TOOLS",
  "URBAN RESEARCH",
  "SOCIAL CAMPAIGNS",
  "FOOD SYSTEMS",
  "PRODUCT UX",
  "YOUTH CULTURE",
];

export function Ticker() {
  const words = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="w-full overflow-hidden border-y border-deep/80 bg-ink py-3 text-canvas">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap px-4">
        {words.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className={`disp text-xl ${HUECLASSES[i % HUECLASSES.length]}`}>{w}</span>
            <span className="h-2 w-2 rounded-full bg-canvas/30" />
          </span>
        ))}
      </div>
    </div>
  );
}

function BannerLink({
  href,
  bg,
  fg,
  kicker,
  title,
  sub,
}: {
  href: string;
  bg: string;
  fg: string;
  kicker: string;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <Link
        href={href}
        data-cur
        className={`group flex h-full min-h-[240px] flex-col justify-between p-6 ${bg} ${fg}`}
      >
        <div className="flex items-start justify-between">
          <span className="label opacity-70">{kicker}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-current/30 transition-all duration-300 group-hover:bg-current/20">
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
        <div>
          <h3 className="disp text-2xl">{title}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-70">{sub}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: Compass, t: "DISCOVER", d: "Browse paid projects, research and posts. No login required." },
    { icon: MousePointerClick, t: "EXPLORE", d: "Open anything. Every card leads somewhere real." },
    { icon: FolderOpen, t: "OPEN", d: "Read the full brief. Decide if it is your thing." },
    { icon: Send, t: "APPLY · JOIN", d: "Your COLLIVIO profile is your application." },
    { icon: Users, t: "COLLABORATE", d: "Get accepted, ship visible work, get recommended next." },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-24">
      <div className="label flex items-center gap-2 text-ink-soft">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        HOW IT WORKS
      </div>
      <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 24, rotate: i % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 260, damping: 17, delay: i * 0.07 }}
            className="group bg-canvas p-6"
          >
            <s.icon
              size={22}
              strokeWidth={1.5}
              className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <div className="mt-4 flex items-center gap-2">
              <span className="label text-ink-soft/70">0{i + 1}</span>
              <span className="disp text-base text-ink">{s.t}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SkillScroller() {
  const work = Array.from(
    new Set(Object.values(skillGroups).flat()),
  ).slice(0, 12);
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <div className="flex items-center justify-between">
        <div className="label flex items-center gap-2 text-ink-soft">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          DISCOVER BY SKILL
        </div>
        <Link href="/employment-skill-bridge" data-cur className="label link-line text-ink">
          VIEW ALL →
        </Link>
      </div>
      <div className="scrub-x -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 md:px-0">
        {work.map((s, i) => (
          <Link
            key={s}
            href="/employment-skill-bridge"
            data-cur
            className={`shrink-0 border border-line px-4 py-2.5 label text-ink-soft transition-all duration-300 hover:border-ink hover:bg-ink hover:text-canvas ${
              ["-rotate-1", "rotate-1", "rotate-2", "-rotate-2", "rotate-0"][i % 5]
            }`}
          >
            {s.toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  );
}