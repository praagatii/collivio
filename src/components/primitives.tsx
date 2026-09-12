"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MotionLink = motion.create(Link);

export function Avatar({
  src,
  name,
  size = 44,
  className = "",
}: {
  src: string;
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      width={size}
      height={size}
      className={`aspect-square rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function Badge({
  children,
  tone = "line",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "line" | "accent" | "soft" | "paper" | "deep";
  className?: string;
}) {
  const tones: Record<string, string> = {
    line: "border-line text-ink-soft",
    accent: "border-accent text-accent",
    soft: "border-accent-soft bg-accent-soft text-accent",
    paper: "border-paper bg-paper text-ink",
    deep: "border-deep bg-deep text-canvas",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 label ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cur
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 label transition-all duration-300 ${
        active
          ? "border-ink bg-ink text-canvas"
          : "border-line text-ink-soft hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

export function Button({
  href,
  onClick,
  variant = "deep",
  children,
  className = "",
  disabled,
  type = "button",
}: {
  href?: string;
  onClick?: () => void;
  variant?: "deep" | "accent" | "ghost" | "soft" | "paper";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  const variants: Record<string, string> = {
    deep: "bg-deep text-canvas hover:bg-ink",
    accent: "bg-accent text-white hover:bg-deep",
    ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-canvas",
    soft: "bg-accent-soft text-accent hover:bg-deep hover:text-canvas",
    paper: "bg-paper text-ink border-2 border-line hover:border-ink",
  };
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 label transition-colors duration-300 disabled:opacity-40 ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} data-cur className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} data-cur className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function Arrow({
  className = "",
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <ArrowUpRight
      size={size}
      strokeWidth={1.75}
      className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
    />
  );
}

export function SectionHeader({
  kicker,
  title,
  accent = false,
  right,
  className = "",
}: {
  kicker: string;
  title: React.ReactNode;
  accent?: boolean;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      <div>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="label flex items-center gap-2 text-ink-soft"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          {kicker}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`mt-3 ${accent ? "text-accent" : "text-ink"} disp`}
          style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
        >
          {title}
        </motion.h2>
      </div>
      {right ? (
        <div className="pb-1">{right}</div>
      ) : null}
    </div>
  );
}

export function CountUp({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1100;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setV(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref} className={className}>
      {v >= 1000 ? v.toLocaleString("en-US") : v}
      {suffix}
    </span>
  );
}

export function SquashButton({
  href,
  onClick,
  text,
  variant = "deep",
  className = "",
  arrow = true,
  type = "button",
}: {
  href?: string;
  onClick?: () => void;
  text: string;
  variant?: "deep" | "accent";
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
}) {
  const variants: Record<string, string> = {
    deep: "bg-deep text-canvas hover:bg-ink",
    accent: "bg-accent text-white hover:bg-deep",
  };
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 label ${variants[variant]} ${className}`;
  const inner = (
    <>
      {text}
      {arrow && (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
  if (href) {
    return (
      <MotionLink href={href} data-cur onClick={onClick} className={cls}>
        {inner}
      </MotionLink>
    );
  }
  return (
    <button type={type} data-cur onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export function Squiggle({
  className = "w-full h-16 text-accent",
  strokeWidth = 3,
  d,
}: {
  className?: string;
  strokeWidth?: number;
  d?: string;
}) {
  const path =
    d ??
    "M0 100 C 80 20, 160 180, 240 100 S 400 20, 480 100 S 640 180, 720 100 S 880 20, 960 100 S 1120 180, 1200 100";
  return (
    <motion.svg
      viewBox="0 0 1200 200"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  );
}

export function PopIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function VerifiedIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="fill-accent" aria-hidden>
      <path d="M12 1.5l3.1 2.3 3.8-.3 1 3.7 3.1 2.3-1.5 3.5 1.5 3.5-3.1 2.3-1 3.7-3.8-.3L12 22.5l-3.1-2.3-3.8.3-1-3.7L1 14.5l1.5-3.5L1 7.5l3.1-2.3 1-3.7 3.8.3z" opacity="0.16" />
      <path d="M12 1.5l3.1 2.3 3.8-.3 1 3.7 3.1 2.3-1.5 3.5 1.5 3.5-3.1 2.3-1 3.7-3.8-.3L12 22.5l-3.1-2.3-3.8.3-1-3.7L1 14.5l1.5-3.5L1 7.5l3.1-2.3 1-3.7 3.8.3z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.5 12l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}