"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/#top" },
  { label: "Skill Bridge", href: "/employment-skill-bridge" },
  { label: "Research Hub", href: "/research-hub" },
  { label: "Media Lab", href: "/media-lab" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-500 ${
          scrolled
            ? "border-b border-line bg-canvas/90 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/#top"
            className="font-display text-xl uppercase tracking-wide"
          >
            COLLivio
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-mono link-line text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/login"
              className="label-mono link-line text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              Log in
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="label-mono text-ink md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-canvas transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-xl uppercase tracking-wide">
            COLLivio
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="label-mono text-ink"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-t border-line py-4"
            >
              <span className="label-mono text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-4xl uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="group flex items-baseline gap-4 border-t border-line py-4"
          >
            <span className="label-mono text-ink-soft">05</span>
            <span className="font-display text-4xl uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
              Log in
            </span>
          </Link>
        </nav>
        <p className="label-mono px-6 pb-8 text-ink-soft">
          Think it. Drop it. Build it.
        </p>
      </div>
    </>
  );
}