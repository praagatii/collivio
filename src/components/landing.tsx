"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Star,
} from "lucide-react";
import { students } from "@/data/mock";

const EASE = [0.22, 1, 0.36, 1] as const;

function PeopleGlyph({
  a = "#f2694e",
  b = "#0e6b4e",
  c = "#f8ce4b",
  className = "",
}: {
  a?: string;
  b?: string;
  c?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className} aria-hidden>
      <path d="M4 42C4 31 24 31 24 42Z" fill={b} />
      <circle cx="14" cy="17" r="6.5" fill={b} />
      <path d="M40 42C40 31 60 31 60 42Z" fill={c} />
      <circle cx="50" cy="17" r="6.5" fill={c} />
      <path d="M19 44C19 27 45 27 45 44Z" fill={a} />
      <circle cx="32" cy="13" r="8.5" fill={a} />
    </svg>
  );
}

function BulbGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" fill="none" className={className} aria-hidden>
      <circle cx="32" cy="22" r="12" stroke="#1b1d33" strokeWidth="3" />
      <path d="M27 38h10M28.5 43h7" stroke="#1b1d33" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 2v5" stroke="#f8ce4b" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 9l4 4" stroke="#f2694e" strokeWidth="3" strokeLinecap="round" />
      <path d="M53 9l-4 4" stroke="#cbb9ea" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 25h5" stroke="#cdeed9" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 25h-5" stroke="#f8ce4b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PinGlyph({
  body = "#0e6b4e",
  dot = "#1b1d33",
  className = "",
}: {
  body?: string;
  dot?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 56" fill="none" className={className} aria-hidden>
      <path
        d="M32 4C20 4 12 13 12 24c0 14 20 28 20 28s20-14 20-28C52 13 44 4 32 4Z"
        fill={body}
      />
      <circle cx="32" cy="22" r="7" fill={dot} />
    </svg>
  );
}

function Rays({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path d="M14 40L4 52" stroke="#f8ce4b" strokeWidth="6" strokeLinecap="round" />
      <path d="M30 34l-2 16" stroke="#f8ce4b" strokeWidth="6" strokeLinecap="round" />
      <path d="M44 40l8 12" stroke="#f8ce4b" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function GlobeArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 440" fill="none" className={className} aria-hidden>
      <ellipse
        cx="280"
        cy="235"
        rx="195"
        ry="72"
        transform="rotate(-16 280 235)"
        stroke="#f8ce4b"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="280" cy="210" r="105" fill="#f6f1e9" stroke="#1b1d33" strokeWidth="10" />
      <ellipse cx="280" cy="210" rx="45" ry="105" stroke="#1b1d33" strokeWidth="8" />
      <path
        d="M225 210Q280 168 335 210Q280 252 225 210Z"
        fill="#ffffff"
        stroke="#1b1d33"
        strokeWidth="8"
      />
      <circle cx="280" cy="210" r="17" fill="#1b1d33" />
      <path
        d="M95 265C160 345 400 350 465 265"
        stroke="#f2694e"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path d="M392 118C448 158 448 262 380 300" stroke="#cbb9ea" strokeWidth="14" strokeLinecap="round" />
      <path d="M150 80l-15-25" stroke="#f8ce4b" strokeWidth="8" strokeLinecap="round" />
      <path d="M185 60l-7-28" stroke="#f8ce4b" strokeWidth="8" strokeLinecap="round" />
      <path d="M120 120l-25-15" stroke="#f8ce4b" strokeWidth="8" strokeLinecap="round" />
      <path d="M470 180l22-8" stroke="#f2694e" strokeWidth="8" strokeLinecap="round" />
      <path d="M472 212l24-2" stroke="#f2694e" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#why", label: "About" },
    { href: "#how", label: "How it works" },
    { href: "#explore", label: "Explore" },
  ];
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(27,29,51,0.08)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1240px] items-center justify-between px-5 transition-all duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" data-cur className="font-brand text-2xl text-coral">
          Collivio.
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cur
              className="text-sm text-navy/65 transition-colors duration-200 hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            data-cur
            className="rounded-full border border-navy/20 px-5 py-2.5 text-sm text-navy transition-colors duration-200 hover:border-navy"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            data-cur
            className="rounded-full bg-coral px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-navy"
          >
            Get Started
          </Link>
        </div>
        <button
          type="button"
          data-cur
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-navy md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-navy/10 bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cur
                onClick={() => setOpen(false)}
                className="text-sm text-navy/75"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3">
              <Link
                href="/login"
                data-cur
                className="rounded-full border border-navy/20 px-5 py-2.5 text-sm text-navy"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                data-cur
                className="rounded-full bg-coral px-5 py-2.5 text-sm text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const pills = [
    { t: "People", cls: "bg-sun text-navy rotate-2" },
    { t: "Ideas", cls: "bg-coral text-white -rotate-2" },
    { t: "Spaces", cls: "bg-lav text-navy rotate-1" },
    { t: "Opportunities", cls: "bg-pine text-cream -rotate-1" },
  ];
  return (
    <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pt-16">
      <div>
        <div className="label tracking-[0.25em] text-coral">PEOPLE · IDEAS · SPACES</div>
        <h1
          className="font-display mt-5 font-semibold text-navy"
          style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)", lineHeight: 1.02 }}
        >
          Tomorrow,
          <br />
          Together<span className="text-coral">.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-navy/65 md:text-lg">
          A platform that brings people, ideas and spaces together to create
          opportunities, communities and a more connected tomorrow.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/signup"
            data-cur
            className="group inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm text-white transition-colors duration-200 hover:bg-navy"
          >
            Get Started
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#explore"
            data-cur
            className="group inline-flex items-center gap-2 rounded-full border border-navy/25 px-7 py-3.5 text-sm text-navy transition-colors duration-200 hover:border-navy"
          >
            Explore
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {students.slice(0, 5).map((s) => (
              <img
                key={s.id}
                src={s.avatar}
                alt={s.name}
                className="h-9 w-9 rounded-full border-2 border-cream object-cover"
              />
            ))}
          </div>
          <p className="max-w-[15rem] text-xs leading-relaxed text-navy/60">
            Join a growing community of creators, learners and doers.
          </p>
        </div>
      </div>
      <div className="relative h-[300px] sm:h-[360px] md:h-[460px]">
        <GlobeArt className="absolute inset-0 h-full w-full" />
        <div className="absolute right-0 top-2 flex flex-col items-start gap-2 sm:top-4 sm:gap-3 md:-right-2">
          {pills.map((p, i) => (
            <motion.div
              key={p.t}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              className={`rounded-lg px-4 py-2 font-display text-xs font-semibold sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm ${p.cls}`}
            >
              {p.t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlueBand() {
  return (
    <section className="relative overflow-hidden bg-sky py-10">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path
          d="M-40 80C40 80 60 12 120 12C180 12 180 148 240 148C300 148 320 60 380 44"
          stroke="#f8ce4b"
          strokeWidth="42"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1080 -30C1110 50 1180 90 1378 90a62 62 0 1 0 124 0a62 62 0 1 0 -124 0"
          stroke="#f8ce4b"
          strokeWidth="42"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative mx-auto max-w-[1240px] px-5 text-center md:px-8">
        <p className="text-sm font-medium text-white md:text-base">
          Different people. Brighter ideas. More vibrant spaces.
        </p>
        <a
          href="#pillars"
          data-cur
          aria-label="Scroll to pillars"
          className="mx-auto mt-5 grid h-10 w-10 place-items-center rounded-full bg-white text-sky transition-transform duration-200 hover:translate-y-0.5"
        >
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}

function Pillars() {
  const cards = [
    {
      title: "People",
      desc: "Find the people who move ideas forward.",
      bg: "bg-blush",
      glyph: <PeopleGlyph className="h-24 w-auto" />,
      href: "/profile",
    },
    {
      title: "Ideas",
      desc: "Discover, develop and share ideas worth building.",
      bg: "bg-sun/40",
      glyph: <BulbGlyph className="h-24 w-auto" />,
      href: "/research-hub",
    },
    {
      title: "Spaces",
      desc: "Find the places where people and ideas come together.",
      bg: "bg-mint",
      glyph: <PinGlyph className="h-24 w-auto" />,
      href: "/media-lab",
    },
  ];
  return (
    <section id="pillars" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 md:px-8">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <div className="label tracking-[0.2em] text-navy/50">OUR PILLARS</div>
          <h2
            className="font-display mt-4 font-semibold text-navy"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            Everything starts
            <br />
            with connection.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-navy/60 md:pb-2">
          Collivio is built around three simple but powerful pillars that work
          together to bring people, ideas and spaces to life.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            whileHover={{ y: -6 }}
          >
            <Link
              href={c.href}
              data-cur
              className={`group flex min-h-[380px] flex-col rounded-[2rem] p-8 ${c.bg}`}
            >
              <div className="flex h-28 items-center justify-center">{c.glyph}</div>
              <h3 className="font-display mt-6 text-[1.75rem] font-semibold text-navy">
                {c.title}
              </h3>
              <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-navy/65">{c.desc}</p>
              <span className="mt-auto grid h-11 w-11 place-items-center rounded-full border-2 border-navy text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-cream">
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Ecosystem() {
  const nodes = [
    {
      t: "People",
      d: "Meet, collaborate and grow.",
      x: 12,
      y: 26,
      icon: <PeopleGlyph a="#1b1d33" b="#cbb9ea" c="#cbb9ea" className="h-10 w-auto" />,
    },
    {
      t: "Ideas",
      d: "Turn ideas into real projects.",
      x: 37,
      y: 66,
      icon: <BulbGlyph className="h-10 w-auto" />,
    },
    {
      t: "Spaces",
      d: "Discover and host spaces.",
      x: 63,
      y: 30,
      icon: <PinGlyph body="#f2694e" className="h-10 w-auto" />,
    },
    {
      t: "Opportunities",
      d: "Create real impact together.",
      x: 88,
      y: 50,
      icon: <Star size={34} className="fill-sun text-sun" />,
    },
  ];
  const segs = [
    { d: "M12 26C20 2 32 6 37 66", c: "#f8ce4b" },
    { d: "M37 66C42 95 54 90 63 30", c: "#f2694e" },
    { d: "M63 30C70 6 80 12 88 50", c: "#cbb9ea" },
  ];
  return (
    <section id="how" className="grid scroll-mt-24 md:grid-cols-[0.85fr_1.15fr]">
      <div className="relative overflow-hidden bg-pine px-8 py-16 text-cream md:px-14 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(#f6f1e9 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative">
          <div className="label tracking-[0.2em] text-cream/60">HOW COLLIVIO CONNECTS THEM</div>
          <h2
            className="font-display mt-6 font-semibold"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.12 }}
          >
            People.
            <br />
            Ideas.
            <br />
            Spaces.
            <br />
            Opportunities.
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
            A simple ecosystem for a more connected tomorrow.
          </p>
          <a
            href="#why"
            data-cur
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm text-navy transition-colors duration-200 hover:bg-sun"
          >
            Learn How
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
      <div className="relative bg-cream px-6 py-16 md:px-10 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#1b1d33 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative h-[340px] md:h-[420px]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {segs.map((s, i) => (
              <motion.path
                key={s.c}
                d={s.d}
                stroke={s.c}
                strokeWidth="7"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.35, ease: EASE }}
              />
            ))}
          </svg>
          {nodes.map((n) => (
            <div
              key={n.t}
              className="absolute w-20 -translate-x-1/2 -translate-y-1/2 text-center sm:w-28"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="flex justify-center">{n.icon}</div>
              <div className="font-display mt-2 text-xs font-semibold text-navy sm:text-sm">{n.t}</div>
              <div className="mt-1 text-[10px] leading-snug text-navy/55 sm:text-[11px]">{n.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="mx-auto grid max-w-[1240px] scroll-mt-24 items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
      <div>
        <div className="label tracking-[0.2em] text-navy/50">WHY COLLIVIO</div>
        <h2
          className="font-display mt-4 font-semibold text-navy"
          style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)", lineHeight: 1.08 }}
        >
          Good things
          <br />
          happen together.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/65 md:text-base">
          Collivio exists to make collaboration effortless — by connecting
          people, ideas and spaces in ways that create real opportunities and
          stronger communities.
        </p>
        <a
          href="#how"
          data-cur
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm text-white transition-colors duration-200 hover:bg-navy"
        >
          Our Story
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="relative">
        <div className="group overflow-hidden rounded-[2rem]">
          <img
            src="https://picsum.photos/seed/collivio-together/900/700"
            alt="Young people collaborating around a laptop"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <Rays className="absolute -top-8 right-8 h-14 w-14" />
        <div className="font-display absolute -right-3 top-10 rotate-3 rounded-2xl bg-pine px-6 py-4 text-lg font-semibold leading-snug text-cream md:-right-6">
          Ideas
          <br />
          Grow
          <br />
          Together.
        </div>
      </div>
    </section>
  );
}

function Action() {
  const tiles = [
    {
      t: "Events",
      d: "Workshops, talks and meetups.",
      img: "https://picsum.photos/seed/collivio-event/600/450",
      href: "/media-lab",
    },
    {
      t: "Communities",
      d: "Find your people.",
      img: "https://picsum.photos/seed/collivio-community/600/450",
      href: "/profile",
    },
    {
      t: "Spaces",
      d: "Explore and book spaces.",
      img: "https://picsum.photos/seed/collivio-space/600/450",
      href: "/media-lab",
    },
    {
      t: "Ideas",
      d: "Turn ideas into action.",
      img: "https://picsum.photos/seed/collivio-ideas/600/450",
      href: "/research-hub",
    },
  ];
  return (
    <section id="explore" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 pb-24 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="label tracking-[0.2em] text-navy/50">COLLIVIO IN ACTION</div>
          <h2
            className="font-display mt-4 font-semibold text-navy"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Real people. Real ideas. Real spaces.
          </h2>
        </div>
        <Link
          href="/media-lab"
          data-cur
          className="group inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm text-navy transition-colors duration-200 hover:border-navy"
        >
          See More
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {tiles.map((t, i) => (
          <motion.div
            key={t.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
          >
            <Link href={t.href} data-cur className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={t.img}
                  alt={t.t}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold text-navy">{t.t}</h3>
              <p className="mt-1 text-sm text-navy/60">{t.d}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-coral py-20">
      <Rays className="absolute right-10 top-8 h-16 w-16 rotate-12" />
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-10 px-5 md:px-8">
        <div>
          <h2
            className="font-display font-semibold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.08 }}
          >
            There&apos;s always
            <br />
            something happening.
          </h2>
          <p className="mt-4 text-sm text-white/85 md:text-base">
            Meet people. Find ideas. Discover spaces. Create what&apos;s next.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/signup"
            data-cur
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm text-navy transition-colors duration-200 hover:bg-sun"
          >
            Join Collivio
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/login"
            data-cur
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm text-white transition-colors duration-200 hover:bg-white/10"
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}

function LandingFooter() {
  const cols = [
    {
      h: "EXPLORE",
      links: [
        { t: "People", href: "/profile" },
        { t: "Ideas", href: "/research-hub" },
        { t: "Spaces", href: "/media-lab" },
        { t: "Opportunities", href: "/employment-skill-bridge" },
      ],
    },
    {
      h: "COMPANY",
      links: [
        { t: "About", href: "#why" },
        { t: "Contact", href: "mailto:hello@collivio.app" },
        { t: "Privacy", href: "#" },
        { t: "Terms", href: "#" },
      ],
    },
  ];
  const socials = [
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-[15px] w-[15px]" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="7" r="1.3" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden>
          <circle cx="4" cy="4" r="2" />
          <rect x="2" y="8" width="4" height="14" />
          <path d="M10 8h4v2c.6-1.2 2-2.2 4-2.2 3.3 0 5 2 5 5.7V22h-4v-7.5c0-1.9-.7-3-2.4-3-1.8 0-2.6 1.2-2.6 3V22h-4z" />
        </svg>
      ),
    },
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[13px] w-[13px]" aria-hidden>
          <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L2.2 3h6.4l4.4 5.9zm-1.1 16.1h1.7L7.7 4.8H5.9z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden>
          <path d="M22 12s0-3.3-.4-4.9c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.3c-.9.2-1.6.9-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.3c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.9.4-4.9z" />
          <path d="M10 9.2v5.6l4.8-2.8z" fill="#f6f1e9" />
        </svg>
      ),
    },
  ];
  return (
    <footer className="bg-cream pb-8 pt-16">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="font-brand text-3xl text-coral">Collivio.</div>
            <p className="mt-3 text-sm text-navy/70">Tomorrow, Together.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="label tracking-[0.2em] text-navy/50">{c.h}</div>
              <div className="mt-4 flex flex-col items-start gap-2.5">
                {c.links.map((l) => (
                  <Link
                    key={l.t}
                    href={l.href}
                    data-cur
                    className="text-sm text-navy/75 transition-colors duration-200 hover:text-coral"
                  >
                    {l.t}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div className="label tracking-[0.2em] text-navy/50">FOLLOW US</div>
            <div className="mt-4 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  data-cur
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 text-navy transition-colors duration-200 hover:bg-navy hover:text-cream"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-6 text-xs text-navy/50">
          <span>© 2026 Collivio. All rights reserved.</span>
          <span>People. Ideas. Spaces. Opportunities.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="overflow-x-clip bg-cream text-navy">
      <LandingHeader />
      <main>
        <Hero />
        <BlueBand />
        <Pillars />
        <Ecosystem />
        <Why />
        <Action />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}