"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { ProjectCard, ResearchCard } from "@/components/cards";
import { Badge, Button, VerifiedIcon } from "@/components/primitives";
import { useNav } from "@/components/providers";
import { companies, projects, research, companyOf } from "@/data/mock";

export default function CompanyDetailPage() {
  const params = useParams<{ id: string }>();
  const company = companyOf(params.id);
  const { setPending } = useNav();
  const active = projects.filter((p) => p.companyId === company.id);
  const all = projects.filter((p) => p.companyId === company.id);
  const sponsored = research.filter((r) => company.research.includes(r.id));

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="pt-12 md:pt-16">
        <div className="flex flex-wrap items-center gap-3">
          <motion.span
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="grid h-16 w-16 place-items-center border border-line text-lg font-extrabold text-canvas"
            style={{ background: company.tone }}
          >
            {company.initials}
          </motion.span>
          <div className="flex items-center gap-2">
            <h1 className="disp text-3xl text-ink md:text-4xl">{company.name}</h1>
          </div>
          <Badge tone="soft">
            <VerifiedIcon size={12} /> VERIFIED COMPANY
          </Badge>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 label text-ink-soft">
          <span>{company.industry.toUpperCase()}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} />
            {company.location.toUpperCase()}
          </span>
          <span>ACTIVE PROJECTS {company.activeProjects}</span>
          <span>COLLABORATIONS {company.collaborations}</span>
        </div>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {company.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="label text-ink-soft">AREA OF INTEREST:</span>
          {company.interests.map((i) => (
            <Badge key={i}>
              {i.toUpperCase()}
            </Badge>
          ))}
        </div>
      </header>

      <section className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          ["ACTIVE PROJECTS", company.activeProjects],
          ["COLLABORATIONS", company.collaborations],
          ["POSTED THIS YEAR", all.filter((p) => company.projects.includes(p.id)).length + 3],
        ].map(([k, v]) => (
          <div key={k} className="bg-canvas px-6 py-7">
            <div className="disp text-4xl text-ink">{v}</div>
            <div className="label mt-1 text-ink-soft">{k}</div>
          </div>
        ))}
      </section>

      {active.length > 0 && (
        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="disp text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
              ACTIVE PROJECTS
            </h2>
            <div className="flex items-center gap-3">
              <Button variant="accent" onClick={() => undefined}>
                POST A PROJECT <ArrowUpRight size={14} />
              </Button>
            </div>
          </div>
          <div className="mt-6 space-y-5">
            {active.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      {sponsored.length > 0 && (
        <section className="mt-16">
          <h2 className="disp text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
            SUPPORTING RESEARCH
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {sponsored.map((r) => (
              <ResearchCard key={r.id} item={r} variant="tile" />
            ))}
          </div>
        </section>
      )}

      <section className="mt-16">
        <h2 className="disp text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
          PREVIOUS COLLABORATORS
        </h2>
        <div className="scrub-x -mx-4 mt-6 flex gap-4 overflow-x-auto px-4 pb-2 md:px-0">
          {companies.slice(0, 4).map((c) => (
            <button
              key={c.id}
              type="button"
              data-cur
              onClick={() => setPending({ href: `/company/${c.id}`, kind: "company", title: c.name })}
              className="group flex w-[220px] shrink-0 items-center gap-3 border border-line bg-paper p-4 text-left"
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center text-xs font-bold text-canvas"
                style={{ background: c.tone }}
              >
                {c.initials}
              </span>
              <div>
                <div className="label text-ink">{c.name}</div>
                <div className="label text-ink-soft">{c.industry}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-16 border border-ink bg-accent-soft p-8 md:p-10">
        <div className="label text-accent">FOR COMPANIES</div>
        <h2 className="disp mt-2 max-w-xl text-ink" style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.6rem)" }}>
          Post a project. Meet the people who will build it.
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/signup?role=company" variant="deep">
            CREATE A COMPANY ACCOUNT
          </Button>
          <Button href="/research-hub" variant="ghost">
            EXPLORE RESEARCH FIRST
          </Button>
        </div>
      </section>
    </div>
  );
}