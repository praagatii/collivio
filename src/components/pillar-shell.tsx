"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PillarShell({
  eyebrow,
  title,
  blurb,
  accent = "#a22a0f",
  children,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-clip bg-cream text-navy">
      <header className="relative z-20 mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 pt-6 md:px-10">
        <Link href="/" data-cur className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-cream">
            <span className="font-display text-sm font-bold">C</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-navy">Collivio</span>
        </Link>
        <nav className="flex items-center gap-3">
          <span className="hidden rounded-full border border-pine/30 px-5 py-2.5 text-sm text-navy sm:inline-block">{eyebrow}</span>
          <Link href="/" data-cur className="rounded-full bg-pine px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-navy">Back to Collivio</Link>
        </nav>
      </header>
      <main className="relative mx-auto w-full max-w-[1240px] px-6 pb-24 pt-6 md:px-10">
        <div className="label tracking-[0.25em] text-coral">{eyebrow}</div>
        <h1 className="font-display mt-3 max-w-[16ch] font-semibold text-navy" style={{ fontSize: "clamp(2.4rem, min(7.5vw, 12vh), 6rem)", lineHeight: 1.02 }}>
          {title}
        </h1>
        <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-navy/65 md:text-lg">{blurb}</p>
        <div className="mt-6 h-2 w-24 rounded-full bg-coral md:w-28" />
        <div className="mt-12">{children}</div>
      </main>
    </div>
  );
}

export function PillarCard({
  tag,
  name,
  glyph,
  meta,
  desc,
  href,
  tile,
}: {
  tag: string;
  name: string;
  glyph: React.ReactNode;
  meta: string;
  desc: string;
  href: string;
  tile: string;
}) {
  return (
    <Link
      href={href}
      data-cur
      className="group flex flex-col rounded-[1.75rem] border border-navy/5 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-pine/25"
    >
      <div className={"grid place-items-center rounded-[1.25rem] " + tile}>
        {glyph}
      </div>
      <div className="mt-3 px-1">
        <div className="label text-[0.6rem] tracking-[0.25em] text-coral">{tag}</div>
        <h3 className="font-display mt-1.5 text-xl font-semibold text-navy">{name}</h3>
        <p className="mt-0.5 text-xs font-medium tracking-wide text-navy/45">{meta}</p>
        <p className="mt-2 text-sm leading-relaxed text-navy/65">{desc}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 px-1 pb-1 text-sm font-semibold text-pine">
        Explore <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}