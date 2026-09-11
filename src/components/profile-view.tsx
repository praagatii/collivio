"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Mail, ExternalLink } from "lucide-react";
import { ProjectCard, ResearchCard, ProfileCard } from "@/components/cards";
import { Avatar, Badge, Button, VerifiedIcon } from "@/components/primitives";
import { useNav } from "@/components/providers";
import { projects, research, students, type Student } from "@/data/mock";

export default function ProfileView({ student, self = false }: { student: Student; self?: boolean }) {

  const theirProjects = projects.filter((p) => student.projects.includes(p.id));
  const theirResearch = research.filter((r) => student.research.includes(r.id));
  const collabs = students.filter((s) => student.collabs.includes(s.id));

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="grid gap-8 pt-12 md:grid-cols-[auto_1fr] md:pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Avatar src={student.avatar} name={student.name} size={168} className="border-4 border-canvas outline outline-1 outline-line" />
          {student.online && (
            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-canvas bg-accent" />
          )}
        </motion.div>
        <div>
          <div className="flex flex-wrap items-center gap-2 label text-ink-soft">
            <span className="inline-flex items-center gap-1.5 text-ink">
              {student.name} <VerifiedIcon />
            </span>
            {self && <Badge tone="soft">THIS IS YOU</Badge>}
            {!self && (
              <Badge tone="line">
                <span className="h-2 w-2 rounded-full bg-accent" /> ONLINE NOW
              </Badge>
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="disp mt-3 text-ink"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            {student.name}
          </motion.h1>
          <p className="mt-2 text-base text-ink-soft md:text-lg">{student.role}</p>
          <p className="mt-1 label flex items-center gap-1 text-ink-soft">
            <MapPin size={12} /> {student.location}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
            “{student.bio}”
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {student.skills.map((s) => (
              <Badge key={s}>
                {s.toUpperCase()}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/signup" variant="deep">
              <Mail size={14} /> MESSAGE
            </Button>
            <Button href="/media-lab" variant="ghost">
              FOLLOW
            </Button>
            <Button href="/employment-skill-bridge" variant="paper">
              <ExternalLink size={14} /> PORTFOLIO
            </Button>
          </div>
        </div>
      </header>

      <section className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          ["PROJECTS", student.stats.projects],
          ["COLLABORATIONS", student.stats.collaborations],
          ["RESEARCH TEAMS", student.stats.researchTeams],
        ].map(([k, v]) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-canvas px-6 py-7"
          >
            <div className="disp text-4xl text-ink">{v}</div>
            <div className="label mt-1 text-ink-soft">{k}</div>
          </motion.div>
        ))}
      </section>

      {theirProjects.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <h2 className="disp text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
              PROJECTS
            </h2>
            <span className="label text-ink-soft">PUBLIC WORK · CLICK TO OPEN</span>
          </div>
          <div className="mt-6 space-y-5">
            {theirProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      {theirResearch.length > 0 && (
        <section className="mt-16">
          <h2 className="disp text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
            RESEARCH
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {theirResearch.map((r) => (
              <ResearchCard key={r.id} item={r} variant="tile" />
            ))}
          </div>
        </section>
      )}

      <section className="mt-16">
        <h2 className="disp text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
          COLLABORATIONS
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collabs.map((s) => (
            <ProfileCard key={s.id} student={s} />
          ))}
        </div>
      </section>

      <section className="mt-16 border border-line bg-deep p-8 text-canvas md:p-10">
        <div className="label text-canvas/60">COLLIVIO BELIEVES</div>
        <p className="mt-3 max-w-2xl disp text-2xl leading-tight md:text-3xl">
          A portfolio is not a resume. It is proof of how you think.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/media-lab" variant="paper">
            SEE THEIR POSTS <ArrowUpRight size={14} />
          </Button>
          {!self && (
            <Button href={`/profile/${student.id}`} variant="ghost" className="border-canvas/40 text-canvas">
              PUBLIC LINK
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}

export function RelatedLink({
  href,
  kind,
  image,
  title,
  children,
}: {
  href: string;
  kind: "project" | "research" | "profile" | "company";
  image?: string;
  title?: string;
  children: React.ReactNode;
}) {
  const { setPending } = useNav();
  return (
    <a href={href} onClick={() => setPending({ href, kind, image, title })} className="link-line label text-ink">
      {children}
    </a>
  );
}