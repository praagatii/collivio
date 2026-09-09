"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Send, AlertCircle } from "lucide-react";
import { ProjectCard } from "@/components/cards";
import { Badge, Button, VerifiedIcon } from "@/components/primitives";
import { useAuth, useNav, useWall } from "@/components/providers";
import { projectOf, similarProjects, companyOf, projects } from "@/data/mock";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const project = projectOf(params.id);
  if (!project) return <NotFound />;
  return <Detail project={project} />;
}

function Detail({ project: p }: { project: ReturnType<typeof projectOf> & object }) {
  const { isAuthed } = useAuth();
  const { openWall } = useWall();
  const { setPending } = useNav();
  const [stage, setStage] = useState<"idle" | "confirm" | "sent">("idle");
  const [applied, setApplied] = useState(false);
  const company = companyOf(p.companyId);
  const sugg = similarProjects(p);

  const apply = () => {
    if (!isAuthed) {
      openWall("apply");
      return;
    }
    setStage("confirm");
  };
  const confirm = () => {
    setStage("sent");
    setApplied(true);
  };

  const goCompany = () => {
    setPending({ href: `/company/${company.id}`, kind: "company", title: company.name });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <div className="py-8">
        <Link
          href={`/company/${company.id}`}
          onClick={goCompany}
          data-cur
          className="label inline-flex items-center gap-2 text-ink-soft hover:text-ink"
        >
          <span
            className="grid h-8 w-8 place-items-center text-xs font-bold text-canvas"
            style={{ background: company.tone }}
          >
            {company.initials}
          </span>
          {company.name}
          <VerifiedIcon />
        </Link>
      </div>

      <header>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{company.industry}</Badge>
          <Badge tone="soft">{p.status}</Badge>
          <span className="label text-ink-soft">{p.applicants} APPLICANTS SO FAR</span>
        </div>
        <h1 className="disp mt-4 text-ink" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          {p.title}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {p.about}
        </p>
      </header>

      <div className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [p.amount, "COMPENSATION"],
          [p.duration, "DURATION"],
          [p.remote ? "REMOTE" : p.location.toUpperCase(), "LOCATION"],
          [`${p.peopleNeeded} ${p.peopleNeeded === 1 ? "PERSON" : "PEOPLE"}`, "NEEDED"],
        ].map(([v, k]) => (
          <div key={k} className="border border-line bg-paper px-5 py-4">
            <div className="disp text-xl text-ink md:text-2xl">{v}</div>
            <div className="label mt-1 text-ink-soft">{k}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.skills.map((s) => (
          <Badge key={s} tone="tan">
            {s.toUpperCase()}
          </Badge>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.35fr)]">
        <div className="space-y-10">
          <Section title="ABOUT THE PROJECT" full={p.about} />
          <ListSection title="WHAT YOU'LL WORK ON" items={p.workOn} />
          <ListSection title="WHAT WE'RE LOOKING FOR" items={p.lookingFor} />
          <ListSection title="TIMELINE" items={p.timeline} marker="→" />
          <div>
            <div className="disp text-xl text-ink">REQUIREMENTS</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.requirements.map((r) => (
                <Badge key={r} tone="line">
                  {r.toUpperCase()}
                </Badge>
              ))}
            </div>
          </div>
          <div className="border border-line bg-paper p-6">
            <div className="label text-accent">APPLICATION INFO</div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.applicationInfo}</p>
            <p className="mt-2 text-sm text-ink">
              No cover letters, no forms — your COLLIVIO profile is the
              application.
            </p>
          </div>
        </div>

        <div>
          <div className="sticky top-24 space-y-4">
            <div className="border border-ink bg-paper p-6">
              <div className="flex items-end justify-between">
                <span className="disp text-3xl text-accent">{p.amount}</span>
                <span className="label text-ink-soft">{p.peopleNeeded} SPOT{p.peopleNeeded > 1 ? "S" : ""} OPEN</span>
              </div>
              <div className="mt-2 flex items-center gap-4 label text-ink-soft">
                <span>{p.duration}</span>
                <span>{p.remote ? "REMOTE" : p.location.toUpperCase()}</span>
              </div>
              <div className="mt-5">
                {applied ? (
                  <div className="border border-accent bg-accent-soft p-4">
                    <div className="label inline-flex items-center gap-2 text-accent">
                      <Check size={13} /> APPLICATION SENT
                    </div>
                    <p className="mt-2 text-sm text-ink-soft">
                      {company.name} can now review your profile.
                    </p>
                  </div>
                ) : (
                  <Button onClick={apply} variant="accent" className="w-full">
                    APPLY TO PROJECT <Send size={14} />
                  </Button>
                )}
                <Button
                  href={`/company/${company.id}`}
                  onClick={goCompany}
                  variant="ghost"
                  className="mt-2 w-full"
                >
                  VIEW COMPANY PROFILE
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-3 border border-line bg-canvas p-4">
              <span
                className="grid h-11 w-11 shrink-0 place-items-center text-sm font-bold text-canvas"
                style={{ background: company.tone }}
              >
                {company.initials}
              </span>
              <div>
                <div className="label text-ink">{company.name}</div>
                <div className="label text-ink-soft">
                  {company.activeProjects} ACTIVE · {company.collaborations} COLLABS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="label text-ink-soft">DISCOVER MORE</div>
            <h2 className="disp mt-2 text-ink" style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}>
              YOU MIGHT ALSO LIKE
            </h2>
          </div>
          <span className="label text-ink-soft">MORE IN {p.category.toUpperCase()} + DESIGN</span>
        </div>
        <div className="scrub-x -mx-4 mt-6 flex gap-5 overflow-x-auto px-4 pb-2 md:px-0">
          {sugg.map((s) => (
            <ProjectCard key={s.id} project={s} variant="tile" />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {stage === "confirm" && (
          <Modal onClose={() => setStage("idle")}>
            <div className="label flex items-center gap-2 text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              ONE TAP
            </div>
            <h2 className="disp mt-3 text-2xl text-ink md:text-3xl">
              APPLY WITH YOUR
              <br />
              COLLIVIO PROFILE?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Your profile and public work will be shared with {company.name}.
              That is the whole application.
            </p>
            <div className="mt-6 grid gap-3">
              <Button onClick={confirm} variant="accent" className="w-full">
                APPLY <Send size={14} />
              </Button>
              <Button onClick={() => setStage("idle")} variant="ghost" className="w-full">
                CANCEL
              </Button>
            </div>
          </Modal>
        )}
        {stage === "sent" && (
          <Modal onClose={() => setStage("idle")}>
            <div className="grid place-items-center text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-canvas">
                <Check size={24} />
              </span>
              <h2 className="disp mt-4 text-2xl text-ink md:text-3xl">APPLICATION SENT</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                {company.name} can now review your profile. If you catch a good
                match — message them first.
              </p>
              <div className="mt-6 grid w-full gap-3">
                <Button href={`/company/${company.id}`} onClick={goCompany} variant="deep" className="w-full">
                  MESSAGE COMPANY
                </Button>
                <Button href="/employment-skill-bridge" onClick={() => setStage("idle")} variant="ghost" className="w-full">
                  KEEP BROWSING
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ title, full }: { title: string; full: string }) {
  return (
    <div>
      <div className="disp text-xl text-ink">{title}</div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
        {full}
      </p>
    </div>
  );
}

function ListSection({ title, items, marker = "•" }: { title: string; items: string[]; marker?: string }) {
  return (
    <div>
      <div className="disp text-xl text-ink">{title}</div>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-baseline gap-3 text-sm leading-relaxed text-ink-soft md:text-base">
            <span className="shrink-0 text-accent">{marker}</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-deep/40 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 28, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 18, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative w-full max-w-md border border-line bg-canvas p-7 md:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          data-cur
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft hover:border-ink hover:text-ink"
          aria-label="Close"
        >
          <X size={15} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

function NotFound() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
      <div>
        <div className="disp text-6xl text-accent">404</div>
        <h1 className="disp mt-4 text-2xl text-ink">PROJECT NOT FOUND</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
          This project may have closed or moved. The marketplace is always
          changing — {projects.length} others are live.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/employment-skill-bridge" variant="deep">
            BROWSE PROJECTS <AlertCircle size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}