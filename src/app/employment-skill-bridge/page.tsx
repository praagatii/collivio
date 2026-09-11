"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProjectCard } from "@/components/cards";
import { Chip } from "@/components/primitives";
import { projects, categories } from "@/data/mock";

const COMPENSATION = ["All", "Paid", "Unpaid"] as const;
const LOCATION = ["All", "Remote", "On-site"] as const;
const DURATION = ["Any", "Short (≤3 wks)", "Long (4+ wks)"] as const;
const SORT = ["Recommended", "Newest", "Highest paying"] as const;

function weeksOf(d: string) {
  const n = parseInt(d, 10);
  return Number.isFinite(n) ? n : 4;
}

export default function EmploymentSkillBridgePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [comp, setComp] = useState<string>("All");
  const [loc, setLoc] = useState<string>("All");
  const [dur, setDur] = useState<string>("Any");
  const [sort, setSort] = useState<string>("Recommended");

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const hay =
        `${p.company} ${p.title} ${p.tagline} ${p.skills.join(" ")} ${p.category}`.toLowerCase();
      if (q && !hay.includes(q.toLowerCase())) return false;
      if (cat !== "All" && p.category !== cat) return false;
      if (comp === "Paid" && p.pay <= 0) return false;
      if (comp === "Unpaid" && p.pay > 0) return false;
      if (loc === "Remote" && !p.remote) return false;
      if (loc === "On-site" && p.remote) return false;
      if (dur === "Short (≤3 wks)" && weeksOf(p.duration) > 3) return false;
      if (dur === "Long (4+ wks)" && weeksOf(p.duration) < 4) return false;
      return true;
    });
    if (sort === "Newest") list = [...list].sort((a, b) => b.sortDate - a.sortDate);
    if (sort === "Highest paying") list = [...list].sort((a, b) => b.pay - a.pay);
    return list;
  }, [q, cat, comp, loc, dur, sort]);

  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, projects.filter((p) => p.category === c).length])),
    [],
  );

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="pt-12 md:pt-16">
        <div className="label flex items-center gap-2 text-work">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-work" />
          EMPLOYMENT SKILL BRIDGE
        </div>
        <h1 className="disp mt-4 text-ink" style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.4rem)" }}>
          FIND SOMETHING
          <br />
          WORTH BUILDING.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
          Paid projects from companies looking for people who can actually
          build. Browse first — apply only when it feels right.
        </p>
      </header>

      <div className="sticky top-[57px] z-40 -mx-4 border-b border-line bg-canvas/90 px-4 py-3 backdrop-blur-md md:top-[61px] md:px-0">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full border border-line bg-paper py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
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
          <Chip active={cat === "All"} onClick={() => setCat("All")}>
            All
          </Chip>
          {categories.map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
              {c.toUpperCase()} {counts[c] ?? 0}
            </Chip>
          ))}
        </div>
        <div className="scrub-x mt-2 flex items-center gap-1.5 overflow-x-auto">
          <SlidersHorizontal size={13} className="mr-1 shrink-0 text-ink-soft" />
          {COMPENSATION.map((c) => (
            <Chip key={c} active={comp === c} onClick={() => setComp(c)}>
              {c}
            </Chip>
          ))}
          {LOCATION.map((l) => (
            <Chip key={l} active={loc === l} onClick={() => setLoc(l)}>
              {l}
            </Chip>
          ))}
          {DURATION.map((d) => (
            <Chip key={d} active={dur === d} onClick={() => setDur(d)}>
              {d}
            </Chip>
          ))}
        </div>
      </div>

      <div className="pt-6">
        {filtered.length === 0 ? (
          <div className="border border-line bg-paper px-6 py-14 text-center">
            <div className="disp text-2xl text-ink">NOTHING MATCHES… YET.</div>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
              Try widening your filters — or create the project you wish
              someone would post.
            </p>
            <button
              type="button"
              onClick={() => {
                setQ("");
                setCat("All");
                setComp("All");
                setLoc("All");
                setDur("Any");
              }}
              className="label link-line mt-5 text-ink"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div>
            <div className="label flex items-center justify-between text-ink-soft">
              <span>{filtered.length} PROJECTS</span>
              <span className="sm:hidden">SORT: {sort.toUpperCase()}</span>
            </div>
            <div className="mt-2">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} variant="row" index={i + 1} eager={i < 2} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}