"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { label: "Home", href: "/#top" },
  { label: "Skill Bridge", href: "/employment-skill-bridge" },
  { label: "Research Hub", href: "/research-hub" },
  { label: "Media Lab", href: "/media-lab" },
];

export default function MenuPill() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onMouseOver={(e) => e.stopPropagation()}
        className="group fixed bottom-6 left-1/2 z-[120] flex -translate-x-1/2 items-center gap-4 rounded-full border border-ink/50 bg-canvas/70 px-6 py-3 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink hover:bg-accent md:bottom-10"
        aria-label="Open menu"
      >
        <span className="label text-sm font-semibold leading-none">Menu</span>
        <span className="flex flex-col gap-[5px]">
          <span className="h-[2px] w-[18px] rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          <span className="h-[2px] w-[18px] rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1" />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[110] flex flex-col bg-ink text-canvas transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-6 md:px-[5%]">
          <span className="disp text-lg font-extrabold tracking-[-0.03em]">
            COLLivio
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="group flex items-baseline gap-3"
            aria-label="Close menu"
          >
            <span className="label font-semibold text-canvas">Close</span>
            <span className="text-lg leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90">
              ×
            </span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center px-6 md:px-[9%]">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 border-t border-canvas/15 py-4 md:py-5"
            >
              <span className="label text-canvas/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="disp text-[clamp(2.4rem,8vw,6.5rem)] font-extrabold tracking-[-0.03em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                {item.label}
              </span>
              <span className="ml-auto hidden text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
                →
              </span>
            </Link>
          ))}
          <div className="flex flex-col gap-4 border-t border-canvas/15 py-8 md:flex-row md:items-baseline md:gap-12">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-3"
            >
              <span className="disp text-2xl font-extrabold uppercase tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:text-4xl">
                Log in
              </span>
              <span className="text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-3"
            >
              <span className="disp text-2xl font-extrabold uppercase tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:text-4xl">
                Join COLLivio
              </span>
              <span className="text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                →
              </span>
            </Link>
          </div>
        </nav>

        <p className="label px-6 pb-8 text-canvas/50 md:px-[9%]">
          Think it. Drop it. Build it.
        </p>
      </div>
    </>
  );
}