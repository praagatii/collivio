"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useAuth } from "@/components/providers";

const LINKS = [
  { href: "/", label: "Home", exact: true },
  { href: "/employment-skill-bridge", label: "Employment" },
  { href: "/research-hub", label: "Research" },
  { href: "/media-lab", label: "Media" },
  { href: "/profile", label: "Profile" },
];

export default function Nav() {
  const pathname = usePathname();
  const { user, isAuthed } = useAuth();
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-4 py-3 md:px-6">
        <Link href="/" data-cur className="disp text-base tracking-tight text-ink">
          COLLIVIO<span className="text-accent">.</span>
        </Link>
        <nav className="scrollbar-hide flex flex-1 items-center gap-1.5 overflow-x-auto scrub-x">
          {LINKS.map((l) => {
            const active = l.exact ? pathname === l.href : pathname.startsWith(l.href);
            return (
              <motion.div key={l.href} whileTap={{ scale: 0.97 }}>
                <Link
                  href={l.href}
                  data-cur
                  className={`relative whitespace-nowrap rounded-full px-3.5 py-2 label transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-lemon"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-3">
          {isAuthed ? (
            <Link
              href={user?.profileHref ?? "/profile"}
              data-cur
              className="group flex items-center gap-2"
            >
              <img
                src={user?.avatar}
                alt={user?.name ?? "you"}
                width={30}
                height={30}
                className="aspect-square rounded-full object-cover"
              />
              <span className="hidden label hover-line text-ink md:inline">
                {user?.firstName}
              </span>
            </Link>
          ) : (
            <Link href="/login" data-cur className="label link-line text-ink">
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-deep text-canvas">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-[2fr_1fr_1fr] md:px-6">
        <div>
          <div className="disp text-2xl">
            COLLIVIO<span className="text-accent">.</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-canvas/60">
            A discovery platform for young people to find real projects, real
            research and real people to build with.
          </p>
        </div>
        <div>
          <div className="label text-canvas/50">EXPLORE</div>
          <div className="mt-3 flex flex-col items-start gap-2">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} data-cur className="label text-canvas/85 hover:text-canvas">
                {l.label.toUpperCase()} →
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="label text-canvas/50">COLLIVIO</div>
          <p className="mt-3 text-sm leading-relaxed text-canvas/60">
            Think it. Drop it. Build it. — Made by students, for students.
          </p>
          <Link
            href="/signup"
            data-cur
            className="mt-5 inline-flex items-center gap-2 border border-canvas/40 px-5 py-3 label text-canvas transition-colors hover:bg-canvas hover:text-deep"
          >
            GET STARTED <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="border-t border-canvas/15 py-4">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 px-4 text-xs text-canvas/45 md:px-6">
          <span>© 2026 COLLIVIO</span>
          <span>BUILT IN THE OPEN · ALL MOCK DATA</span>
        </div>
      </div>
    </footer>
  );
}