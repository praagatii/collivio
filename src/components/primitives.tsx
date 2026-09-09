"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

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
  tone?: "line" | "accent" | "soft" | "paper" | "tan" | "deep" | "lemon" | "sky" | "mint" | "coral" | "grape";
  className?: string;
}) {
  const tones: Record<string, string> = {
    line: "border-line text-ink-soft",
    accent: "border-accent text-accent",
    soft: "border-accent-soft bg-accent-soft/60 text-accent",
    paper: "border-paper bg-paper text-ink",
    tan: "border-tan bg-tan/70 text-ink",
    deep: "border-deep bg-deep text-canvas",
    lemon: "border-lemon bg-lemon text-ink",
    sky: "border-sky bg-sky text-ink",
    mint: "border-mint bg-mint text-ink",
    coral: "border-coral bg-coral text-ink",
    grape: "border-grape bg-grape text-ink",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-1 label ${tones[tone]} ${className}`}
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
      className={`shrink-0 whitespace-nowrap border px-3.5 py-2 label transition-all duration-300 ${
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
    accent: "bg-accent text-canvas hover:bg-deep",
    ghost: "border border-ink text-ink hover:bg-ink hover:text-canvas",
    soft: "bg-tan text-ink hover:bg-deep hover:text-canvas",
    paper: "bg-paper text-ink border border-line hover:border-ink",
  };
  const cls = `group inline-flex items-center justify-center gap-2 px-6 py-3.5 label transition-colors duration-300 disabled:opacity-40 ${variants[variant]} ${className}`;
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
  variant?: "deep" | "accent" | "lemon";
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
}) {
  const [hover, setHover] = useState(false);
  const variants: Record<string, string> = {
    deep: "bg-deep text-canvas hover:bg-ink",
    accent: "bg-accent text-canvas hover:bg-deep",
    lemon: "bg-lemon text-ink hover:bg-accent hover:text-canvas",
  };
  const chars = text.split("");
  const cls = `inline-flex items-center justify-center overflow-hidden px-7 py-4 label ${variants[variant]} ${className}`;
  const inner = (
    <span className="inline-flex items-center">
      {chars.map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={hover ? { y: [0, 8, 0], scaleY: [1, 0.16, 1] } : { y: 0, scaleY: 1 }}
          transition={
            hover
              ? { duration: 0.55, ease: "easeInOut", times: [0, 0.3, 1], delay: i * 0.022 }
              : { duration: 0.25, ease: "easeOut" }
          }
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
      {arrow && (
        <motion.span
          animate={hover ? { x: 3, y: -3 } : { x: 0, y: 0 }}
          transition={{ duration: 0.25 }}
          className="ml-2 inline-block"
        >
          <ArrowUpRight size={15} strokeWidth={2.1} />
        </motion.span>
      )}
    </span>
  );
  const tap = { scale: 0.96 };
  if (href) {
    return (
      <MotionLink
        href={href}
        data-cur
        onClick={onClick}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileTap={tap}
        className={cls}
      >
        {inner}
      </MotionLink>
    );
  }
  return (
    <motion.button
      type={type}
      data-cur
      onClick={onClick}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileTap={tap}
      className={cls}
    >
      {inner}
    </motion.button>
  );
}

export function PopIn({
  children,
  className = "",
  rotate = 10,
  y = -18,
  scaleFrom = 0.5,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  y?: number;
  scaleFrom?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleFrom, y, rotate: -rotate }}
      whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ type: "spring", stiffness: 300, damping: 15, mass: 0.85, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 210 26" className={className} fill="none" aria-hidden>
      <motion.path
        d="M3 17 C 24 2 48 24 70 13 C 92 4 112 24 133 13 C 152 4 172 22 207 12"
        stroke="var(--lemon)"
        strokeWidth={4}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 5.5, times: [0, 0.45, 0.6, 1], ease: "easeInOut", repeat: Infinity }}
      />
    </svg>
  );
}

export function Skate({
  children,
  className = "",
  rest = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rest?: number;
}) {
  const controls = useAnimation();
  const vel = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });
  useEffect(() => {
    last.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const onMove = (e: PointerEvent) => {
      vel.current = { x: e.clientX - last.current.x, y: e.clientY - last.current.y };
      last.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  const onEnter = () => {
    const { x, y } = vel.current;
    const rot = clamp((x - y) * 2.2, -16, 16) + rest;
    controls.start({
      x: clamp(x * 14, -90, 90),
      y: clamp(y * 14, -90, 90),
      rotate: rot,
      transition: { type: "spring", stiffness: 400, damping: 26 },
    });
    controls.start({
      x: 0,
      y: 0,
      rotate: rest,
      transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.28 },
    });
  };
  return (
    <motion.div
      animate={controls}
      onMouseEnter={onEnter}
      style={{ rotate: rest }}
      className={`inline-block ${className}`}
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