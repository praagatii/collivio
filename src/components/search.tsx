"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useNav } from "@/components/providers";
import { projects, research, students, companies, skillGroups } from "@/data/mock";

type Result = {
  group: string;
  title: string;
  meta: string;
  href: string;
  kind: "project" | "research" | "student" | "company" | "skill";
};

const KIND_TO_NAV = {
  project: "project",
  research: "research",
  student: "profile",
  company: "company",
  skill: "default",
} as const;

export default function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const { setPending } = useNav();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const results = useMemo(() => {
    const lq = q.trim().toLowerCase();
    const has = (s: string) => s.toLowerCase().includes(lq);
    const out: Result[] = [];
    if (!lq) {
      out.push(
        { group: "EMPLOYMENT", title: "Browse open projects", meta: `${projects.length} LIVE`, href: "/employment-skill-bridge", kind: "project" },
        { group: "RESEARCH", title: "Explore the research hub", meta: `${research.length} INVESTIGATIONS`, href: "/research-hub", kind: "research" },
        { group: "COMMUNITY", title: "See profiles", meta: `${students.length} BUILDERS`, href: "/profile", kind: "student" },
      );
      return out;
    }
    for (const p of projects) {
      if (has(`${p.title} ${p.company} ${p.skills.join(" ")} ${p.category}`))
        out.push({ group: "PROJECTS", title: p.title, meta: `${p.company} · ${p.amount}`, href: `/project/${p.id}`, kind: "project" });
    }
    for (const r of research) {
      if (has(`${r.title} ${r.category} ${r.about} ${r.categorySkills.join(" ")}`))
        out.push({ group: "RESEARCH", title: r.title, meta: `${r.category} · ${r.collaborators} COLLABORATORS`, href: `/research/${r.id}`, kind: "research" });
    }
    for (const s of students) {
      if (has(`${s.name} ${s.role} ${s.skills.join(" ")}`))
        out.push({ group: "PEOPLE", title: s.name, meta: `${s.role} · ${s.location}`, href: `/profile/${s.id}`, kind: "student" });
    }
    for (const c of companies) {
      if (has(`${c.name} ${c.industry}`))
        out.push({ group: "ORGANIZATIONS", title: c.name, meta: c.industry, href: `/company/${c.id}`, kind: "company" });
    }
    const skills = Array.from(new Set(Object.values(skillGroups).flat()));
    for (const sk of skills) {
      if (has(sk))
        out.push({ group: "SKILLS", title: sk, meta: "VIEW SKILLED PEOPLE", href: "/employment-skill-bridge", kind: "skill" });
    }
    return out.slice(0, 10);
  }, [q]);

  const go = (r: Result) => {
    setPending({ href: r.href, kind: KIND_TO_NAV[r.kind], title: r.title });
    setOpen(false);
    router.push(r.href);
  };

  const groups = Array.from(new Set(results.map((r) => r.group)));

  return (
    <>
      <button
        type="button"
        data-cur
        onClick={() => {
          setQ("");
          setOpen(true);
        }}
        className="flex items-center gap-2 border border-line px-3 py-2 label text-ink-soft transition-colors duration-300 hover:border-ink hover:text-ink"
        aria-label="Search"
      >
        <Search size={14} />
        <span className="hidden lg:inline">SEARCH</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] bg-deep/45 px-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-20 w-full max-w-[720px] border border-ink bg-paper"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-line px-5 py-4">
                <Search size={18} className="shrink-0 text-ink-soft" />
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent text-lg text-ink placeholder:text-ink-soft outline-none"
                  aria-label="Search"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  data-cur
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink-soft hover:border-ink hover:text-ink"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="max-h-[52vh] overflow-y-auto">
                {results.length === 0 ? (
                  <div className="px-5 py-12 text-center">
                    <div className="disp text-xl text-ink">NOTHING HERE — YET.</div>
                    <p className="mx-auto mt-2 max-w-xs text-sm text-ink-soft">
                      No matches for “{q}”. Try a skill, a company, or a research topic.
                    </p>
                  </div>
                ) : (
                  groups.map((g) => (
                    <div key={g} className="border-b border-line px-3 py-2 last:border-b-0">
                      <div className="label px-2 py-2 text-ink-soft">{g}</div>
                      {results
                        .filter((r) => r.group === g)
                        .map((r) => (
                          <button
                            key={`${r.group}-${r.title}`}
                            type="button"
                            onClick={() => go(r)}
                            data-cur
                            className="flex w-full items-center justify-between gap-4 px-2 py-3 text-left transition-colors duration-200 hover:bg-canvas"
                          >
                            <span className="disp text-base text-ink">{r.title}</span>
                            <span className="label shrink-0 text-ink-soft">{r.meta}</span>
                          </button>
                        ))}
                    </div>
                  ))
                )}
              </div>
              <div className="flex items-center justify-between border-t border-line px-5 py-2.5 label text-ink-soft/80">
                <span>TIP: SEARCH ANYTHING — PROJECTS, RESEARCH, PEOPLE, SKILLS</span>
                <span>⌘K TO CLOSE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}