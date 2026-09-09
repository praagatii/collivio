"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ResearchCard } from "@/components/cards";
import { Chip } from "@/components/primitives";
import { research } from "@/data/mock";

const CATS = ["All", "Design", "Environment", "AI", "Culture", "Medicine", "Social Science"];
const OPEN = ["All", "Open to join", "Full"];
const SIZE = ["Any", "Small (≤8)", "Large (9+)"];
const SORT = ["Recommended", "Recently added", "Most active"];

export default function ResearchHubPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState("All");
  const [size, setSize] = useState("Any");
  const [sort, setSort] = useState("Recommended");

  const filtered = useMemo(() => {
    let list = research.filter((r) => {
      const hay = `${r.title} ${r.question} ${r.category} ${r.categorySkills.join(" ")} ${r.about}`.toLowerCase();
      if (q && !hay.includes(q.toLowerCase())) return false;
      if (cat !== "All" && r.category !== cat) return false;
      if (open === "Open to join" && !r.open) return false;
      if (open === "Full" && r.open) return false;
      if (size === "Small (≤8)" && r.maxTeam > 8) return false;
      if (size === "Large (9+)" && r.maxTeam <= 8) return false;
      return true;
    });
    if (sort === "Recently added") list = [...list].sort((a, b) => b.sortDate - a.sortDate);
    if (sort === "Most active") list = [...list].sort((a, b) => b.activity - a.activity);
    return list;
  }, [q, cat, open, size, sort]);

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="pt-12 md:pt-16">
        <div className="label flex items-center gap-2 text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          RESEARCH HUB
        </div>
        <h1 className="disp mt-4 text-ink" style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.4rem)" }}>
          FIND SOMETHING
          <br />
          WORTH EXPLORING.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
          Research with people who are curious about the same questions you
          are. Student-led, evidence-first, open to collaborators.
        </p>
      </header>

      <div className="sticky top-[57px] z-40 -mx-4 border-b border-line bg-canvas/90 px-4 py-3 backdrop-blur-md md:top-[61px] md:px-0">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search research…"
              className="w-full border border-line bg-paper py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
            />
          </div>
          <div className="hidden items-center gap-1.5 sm:flex">
            {SORT.map((s) => (
              <Chip key={s} active={sort === s} onClick={() => setSort(s)}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
        <div className="scrub-x mt-3 flex gap-1.5 overflow-x-auto">
          {CATS.map((c) => {
            const n = c === "All" ? research.length : research.filter((r) => r.category === c).length;
            return (
              <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
                {c.toUpperCase()} {n}
              </Chip>
            );
          })}
        </div>
        <div className="scrub-x mt-2 flex items-center gap-1.5 overflow-x-auto">
          <SlidersHorizontal size={13} className="mr-1 shrink-0 text-ink-soft" />
          {OPEN.map((o) => (
            <Chip key={o} active={open === o} onClick={() => setOpen(o)}>
              {o}
            </Chip>
          ))}
          {SIZE.map((s) => (
            <Chip key={s} active={size === s} onClick={() => setSize(s)}>
              {s}
            </Chip>
          ))}
        </div>
      </div>

      <div className="pt-8">
        {filtered.length === 0 ? (
          <div className="border border-line bg-paper px-6 py-14 text-center">
            <div className="disp text-2xl text-ink">NO RESEARCH FOUND.</div>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
              Try a different question — or start the research you wish existed.
            </p>
          </div>
        ) : (
          <div>
            <div className="label text-ink-soft">{filtered.length} RESEARCH PROJECTS</div>
            <div className="mt-2">
              {filtered.map((r) => (
                <ResearchCard key={r.id} item={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}