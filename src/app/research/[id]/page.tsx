"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Users, Send } from "lucide-react";
import { ResearchCard } from "@/components/cards";
import { Avatar, Badge, Button } from "@/components/primitives";
import { useAuth, useNav, useWall } from "@/components/providers";
import { researchOf, similarResearch, studentOf, research } from "@/data/mock";

export default function ResearchDetailPage() {
  const params = useParams<{ id: string }>();
  const item = researchOf(params.id);
  if (!item) return <NotFound />;
  return <Detail item={item} />;
}

function Detail({ item }: { item: ReturnType<typeof researchOf> & object }) {
  const { isAuthed } = useAuth();
  const { openWall } = useWall();
  const { setPending } = useNav();
  const [stage, setStage] = useState<"idle" | "sent">("idle");
  const [requested, setRequested] = useState(false);
  const sugg = similarResearch(item);
  const creator = studentOf(item.creatorId);
  const open = item.spotsOpen > 0 && item.open;

  const join = () => {
    if (!isAuthed) {
      openWall("join");
      return;
    }
    setStage("sent");
    setRequested(true);
  };

  const goCreator = () => {
    setPending({ href: `/profile/${creator?.id}`, kind: "profile", image: creator?.avatar, title: creator?.name });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="pt-10">
        <Link
          href="/research-hub"
          data-cur
          className="label text-ink-soft hover:text-ink"
        >
          ← RESEARCH HUB
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{item.category}</Badge>
          <span className="label text-ink-soft">{item.collaborators} COLLABORATORS</span>
          <Badge tone={open ? "soft" : "line"}>
            <Users size={11} />
            {open ? `${item.spotsOpen} SPOTS OPEN` : "TEAM COMPLETE"}
          </Badge>
        </div>
        <h1 className="disp mt-4 text-ink" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          {item.title}
        </h1>
        <p className="mt-3 max-w-xl text-lg italic text-ink-soft md:text-xl">
          “{item.question}”
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.35fr)]">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="relative aspect-[16/9] overflow-hidden border border-line">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-between gap-4 border border-line bg-paper p-5">
              <div>
                <div className="label text-accent">CREATED BY</div>
                <Link href={`/profile/${creator?.id}`} onClick={goCreator} data-cur className="mt-3 flex items-center gap-3">
                  <Avatar src={creator?.avatar ?? ""} name={creator?.name ?? ""} size={44} />
                  <div>
                    <div className="disp text-base text-ink">{creator?.name}</div>
                    <div className="label text-ink-soft">{creator?.role}</div>
                  </div>
                </Link>
              </div>
              <div className="label text-ink-soft">ACTIVITY {item.activity} · ACTIVE</div>
            </div>
          </div>

          <Section title="BACKGROUND" body={item.background} />
          <Section title="WHY THIS RESEARCH MATTERS" body={item.whyMatters} />
          <Section title="OBJECTIVES">
            <ul className="mt-4 space-y-3">
              {item.objectives.map((o) => (
                <li key={o} className="flex items-baseline gap-3 text-sm text-ink-soft md:text-base">
                  <span className="shrink-0 text-accent">•</span>
                  {o}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="METHODOLOGY" body={item.methodology} />
          <Section title="EXPECTED OUTCOME" body={item.outcome} />
          <Section title="TIMELINE">
            <ul className="mt-4 space-y-3">
              {item.timeline.map((t) => (
                <li key={t} className="flex items-baseline gap-3 text-sm text-ink-soft md:text-base">
                  <span className="shrink-0 text-accent">→</span>
                  {t}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="WHAT COLLABORATORS WILL DO">
            <div className="mt-4 flex flex-wrap gap-2">
              {item.collaboratorJobs.map((j) => (
                <Badge key={j} tone="tan">
                  {j.toUpperCase()}
                </Badge>
              ))}
            </div>
          </Section>
          <Section title="REQUIRED SKILLS">
            <div className="mt-4 flex flex-wrap gap-2">
              {item.categorySkills.map((s) => (
                <Badge key={s} tone="line">
                  {s.toUpperCase()}
                </Badge>
              ))}
            </div>
          </Section>
        </div>

        <div>
          <div className="sticky top-24 space-y-4">
            <div className="border border-ink bg-paper p-6">
              <div className="flex items-end justify-between">
                <span className="disp text-2xl text-ink">{item.collaborators}</span>
                <span className="label text-ink-soft">OF {item.maxTeam} COLLABORATORS</span>
              </div>
              <div className="mt-1 h-1 w-full bg-line">
                <div
                  className="h-1 bg-accent transition-all duration-700"
                  style={{ width: `${Math.min(100, (item.collaborators / item.maxTeam) * 100)}%` }}
                />
              </div>
              <div className="mt-5 space-y-3">
                {item.team.length ? (
                  item.team.map((m) => (
                    <div key={m.id} className="flex items-center gap-3">
                      <Avatar src={m.student?.avatar ?? ""} name={m.student?.name ?? m.id} size={34} />
                      <div className="flex-1">
                        <div className="label text-ink">{m.student?.name ?? m.id}</div>
                        <div className="label text-ink-soft">{m.role}</div>
                      </div>
                      <span
                        className={`h-2 w-2 rounded-full ${m.status === "online" ? "bg-accent" : m.status === "away" ? "bg-tan" : "bg-line"}`}
                        title={m.status}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-ink-soft">Team building in progress.</p>
                )}
              </div>
              {requested ? (
                <div className="mt-5 border border-accent bg-accent-soft p-4">
                  <div className="label inline-flex items-center gap-2 text-accent">
                    <Check size={13} /> REQUEST SENT
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Your request has been sent to the research administrator.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge tone="accent">STATUS: PENDING</Badge>
                  </div>
                </div>
              ) : (
                <Button onClick={join} variant="accent" className="mt-5 w-full" disabled={!open}>
                  {open ? "REQUEST TO JOIN" : "TEAM COMPLETE"} <Send size={14} />
                </Button>
              )}
              <p className="mt-3 text-center text-xs text-ink-soft">
                {open
                  ? "Accepted members unlock the private workspace."
                  : "This team is at capacity — watch the hub for new doors."}
              </p>
            </div>
            <Link href="/research-hub" data-cur className="flex items-center justify-between border border-line bg-canvas p-4">
              <span className="label text-ink-soft">ACCEPTED? ENTER THE ROOM</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-canvas">
                <Users size={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <div className="label flex items-center gap-2 text-ink-soft">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          MORE RESEARCH LIKE THIS
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {sugg.map((s) => (
            <ResearchCard key={s.id} item={s} variant="tile" />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {stage === "sent" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-deep/40 px-4 backdrop-blur-sm"
            onClick={() => setStage("idle")}
          >
            <motion.div
              initial={{ y: 28, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-md border border-line bg-canvas p-7 text-center md:p-9"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setStage("idle")}
                data-cur
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft hover:border-ink hover:text-ink"
                aria-label="Close"
              >
                <X size={15} />
              </button>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-canvas">
                <Check size={24} />
              </span>
              <h2 className="disp mt-4 text-2xl text-ink md:text-3xl">REQUEST SENT</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Your request has been sent to the research administrator. You
                cannot enter the private workspace until accepted.
              </p>
              <div className="mt-4 flex justify-center">
                <Badge tone="accent">STATUS: PENDING</Badge>
              </div>
              <div className="mt-6 grid gap-3">
                <Button href={`/research/${item.id}/workspace`} variant="deep" className="w-full">
                  TAKE ME TO THE ROOM
                </Button>
                <Button href="/research-hub" variant="ghost" className="w-full">
                  KEEP BROWSING
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ title, body, children }: { title: string; body?: string; children?: React.ReactNode }) {
  return (
    <div>
      <div className="disp text-xl text-ink">{title}</div>
      {body ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">{body}</p> : null}
      {children}
    </div>
  );
}

function NotFound() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
      <div>
        <div className="disp text-6xl text-accent">404</div>
        <h1 className="disp mt-4 text-2xl text-ink">RESEARCH NOT FOUND</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
          That question might have closed. {research.length} open questions are
          still in the hub.
        </p>
        <div className="mt-6">
          <Button href="/research-hub" variant="deep">
            BACK TO RESEARCH
          </Button>
        </div>
      </div>
    </div>
  );
}