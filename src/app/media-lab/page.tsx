"use client";

import { useMemo, useState } from "react";
import { Flame } from "lucide-react";
import { MediaPost } from "@/components/cards";
import { Chip } from "@/components/primitives";
import { feed } from "@/data/mock";

const FILTERS = ["All", "Projects", "Research", "People", "Events", "Community"] as const;

const KINDS: Record<string, string[]> = {
  All: [],
  Projects: ["project", "company"],
  Research: ["research"],
  People: ["student"],
  Events: ["event"],
  Community: ["post"],
};

export default function MediaLabPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const posts = useMemo(
    () => (filter === "All" ? feed : feed.filter((p) => KINDS[filter].includes(p.kind))),
    [filter],
  );

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="flex flex-wrap items-end justify-between gap-4 pt-12 md:pt-16">
        <div>
          <div className="label flex items-center gap-2 text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-ink" />
            MEDIA LAB
          </div>
          <h1 className="disp mt-4 text-ink" style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.4rem)" }}>
            SEE WHAT PEOPLE
            <br />
            ARE BUILDING
            <br />
            RIGHT NOW.
          </h1>
        </div>
        <div className="flex items-center gap-2 pb-2 label text-ink-soft">
          <Flame size={14} className="text-accent" />
          LIVE FEED · UPDATED HOURLY
        </div>
      </header>

      <div className="scrub-x -mx-4 mt-8 flex gap-1.5 overflow-x-auto px-4 md:px-0">
        {FILTERS.map((f) => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f.toUpperCase()}
          </Chip>
        ))}
      </div>

      <div className="masonry mt-6 columns-1 sm:columns-2 lg:columns-3">
        {posts.map((p) => (
          <MediaPost key={p.id} post={p} eager={p.id === "p1"} />
        ))}
      </div>
    </div>
  );
}