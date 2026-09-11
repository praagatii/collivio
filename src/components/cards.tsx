"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, Sparkles, ChevronRight } from "lucide-react";
import type { Project, Research, Student, FeedPost } from "@/data/mock";
import { useNav } from "@/components/providers";
import { Avatar, Badge, VerifiedIcon } from "@/components/primitives";

const CAT_BG: Record<string, string> = {
  Design: "bg-pink/20",
  Environment: "bg-cyan/20",
  AI: "bg-accent/20",
  Culture: "bg-orange/20",
  Medicine: "bg-lime/20",
  "Social Science": "bg-purple/20",
};
const catBg = (c: string) => CAT_BG[c] ?? "bg-lemon/20";

export function ProjectCard({
  project,
  variant = "row",
  eager = false,
  index,
}: {
  project: Project;
  variant?: "row" | "tile";
  eager?: boolean;
  index?: number;
}) {
  const { setPending } = useNav();
  const href = `/project/${project.id}`;
  const go = () =>
    setPending({
      href,
      kind: "project",
      image: project.image,
      title: project.title,
    });

  if (variant === "tile") {
    return (
      <motion.article
        whileHover={{ y: -6, rotate: 1.2 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className={`group w-[min(84vw,340px)] shrink-0 rounded-[1.75rem] overflow-hidden border border-line bg-paper ${catBg(project.category)}`}
      >
        <Link href={href} onClick={go} data-cur className="block">
          <div className="relative block overflow-hidden aspect-[4/3]">
            <img
              src={project.image}
              alt={project.title}
              loading={eager ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <span className="absolute left-4 top-4 num-outline text-5xl pointer-events-none drop-shadow-sm">
              {index ? String(index).padStart(2, "0") : "01"}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-ink text-canvas px-3 py-1 label shadow-sm">
              {project.amount}
            </span>
            <span className="absolute left-3 bottom-3 rounded-full bg-ink text-canvas/80 px-3 py-1 label shadow-sm">
              {project.category}
            </span>
          </div>
          <div className="p-4">
            <div className="label text-ink-soft">{project.company}</div>
            <h3 className="disp mt-1 text-lg text-ink">{project.title}</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="label text-ink-soft">
                {project.duration} · {project.remote ? "REMOTE" : project.location}
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-canvas transition-colors duration-300 group-hover:bg-accent group-hover:text-white shadow-sm">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group mb-5 rounded-[1.75rem] border border-line bg-paper overflow-hidden"
    >
      <Link href={href} onClick={go} data-cur className="block">
        <div className="grid gap-5 p-5 md:grid-cols-[minmax(0,2.1fr)_minmax(0,5fr)] md:gap-8 md:p-7">
          <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${catBg(project.category)}`}>
            <img
              src={project.image}
              alt={project.title}
              loading={eager ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-ink text-canvas text-sm shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="label tracking-normal text-accent">
                {index ? `PROJECT 0${index} · ` : ""}
              </span>
              <span className="label tracking-normal text-ink">{project.company}</span>
              <VerifiedIcon />
              <Badge tone={project.status === "New" ? "lemon" : "line"}>
                {project.status}
              </Badge>
            </div>
            <h3 className="disp mt-3 text-ink" style={{ fontSize: "clamp(1.5rem, 3vw, 2.3rem)" }}>
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
              {project.about}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skills.slice(0, 4).map((s) => (
                <Badge key={s} tone="tan">
                  {s.toUpperCase()}
                </Badge>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-5">
              <span className="disp text-xl text-accent">{project.amount}</span>
              <span className="label text-ink-soft">{project.duration}</span>
              <span className="label text-ink-soft">
                {project.remote ? "REMOTE" : project.location.toUpperCase()} ·{" "}
                {project.peopleNeeded} {project.peopleNeeded === 1 ? "PERSON" : "PEOPLE"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ResearchCard({
  item,
  variant = "row",
  index,
}: {
  item: Research;
  variant?: "row" | "tile";
  index?: number;
}) {
  const { setPending } = useNav();
  const href = `/research/${item.id}`;
  const go = () =>
    setPending({
      href,
      kind: "research",
      image: item.image,
      title: item.title,
    });

if (variant === "tile") {
    return (
      <motion.article
        whileHover={{ y: -6, rotate: -1.2 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className="group w-[min(84vw,340px)] shrink-0 rounded-[1.75rem] overflow-hidden border border-line bg-research/10"
      >
        <Link href={href} onClick={go} data-cur className="block">
          <div className="relative aspect-[4/3] overflow-hidden bg-research/20">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <span className="absolute left-3 top-3 grid h-14 w-14 place-items-center rounded-full bg-research text-white disp text-xl shadow-sm">
              {item.collaborators}
            </span>
          </div>
          <div className="p-5">
            <div className="label text-research">{item.category}</div>
            <h3 className="disp mt-2 text-lg text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm italic text-ink-soft">&quot;{item.question}&quot;</p>
            <div className="mt-3 flex items-center justify-between">
              <Badge tone={item.open ? "cyan" : "line"}>
                <Users size={11} />
                {item.open ? `${item.spotsOpen} SPOTS OPEN` : "FULL"}
              </Badge>
              <ArrowUpRight size={17} className="text-research transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

const glyph = item.tone.slice(1);
  void glyph;
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group mb-5 rounded-[1.75rem] border border-line bg-paper overflow-hidden"
    >
      <Link href={href} onClick={go} data-cur className="block">
        <div
          className="grid"
          style={{ background: `${item.tone}18` }}
        >
          <div className="relative col-span-12 aspect-[16/9] overflow-hidden md:col-span-5 md:aspect-auto">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
          </div>
          <div className="col-span-12 flex flex-col justify-between gap-4 p-5 md:col-span-7 md:p-7">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="cyan">{item.category}</Badge>
                <span className="label">
                  {index ? `RESEARCH 0${index} · ` : ""}
                  {item.collaborators} COLLABORATORS
                </span>
              </div>
              <h3 className="disp mt-3 text-ink" style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-base italic text-ink-soft">&quot;{item.question}&quot;</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{item.about}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {item.categorySkills.map((s) => (
                  <Badge key={s} tone="tan">
                    {s.toUpperCase()}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={item.open ? "research" : "line"}>
                <Users size={11} />
                {item.open ? `${item.spotsOpen} SPOTS OPEN` : "TEAM COMPLETE"}
              </Badge>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-research text-white transition-colors duration-300 group-hover:bg-ink">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProfileCard({
  student,
  big = false,
}: {
  student: Student;
  big?: boolean;
}) {
  const { setPending } = useNav();
  const href = `/profile/${student.id}`;
  const go = () =>
    setPending({ href, kind: "profile", image: student.avatar, title: student.name });
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group flex flex-col gap-4 rounded-[1.75rem] border border-line bg-paper ${big ? "p-6" : "p-5"}`}
    >
      <Link href={href} onClick={go} data-cur className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <Avatar src={student.avatar} name={student.name} size={big ? 64 : 52} />
          <span
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-canvas"
            aria-hidden
          >
            <ArrowUpRight size={15} />
          </span>
        </div>
        <div>
          <h3 className="disp text-lg text-ink">{student.name}</h3>
          <p className="mt-1 text-sm text-ink-soft">{student.role}</p>
          <p className="mt-0.5 label text-ink-soft/80">{student.location}</p>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">“{student.bio}”</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {student.skills.slice(0, big ? 4 : 3).map((s) => (
            <Badge key={s} tone="tan">
              {s.toUpperCase()}
            </Badge>
          ))}
        </div>
        {big && (
          <div className="mt-1 grid grid-cols-3 gap-2 border-t border-line pt-4">
            {[
              ["PROJECTS", student.stats.projects],
              ["COLLABS", student.stats.collaborations],
              ["TEAMS", student.stats.researchTeams],
            ].map(([k, v]) => (
              <div key={k as string}>
                <div className="disp text-2xl">{v}</div>
                <div className="label text-ink-soft">{k}</div>
              </div>
            ))}
          </div>
        )}
      </Link>
    </motion.article>
  );
}

export function MediaPost({
  post,
  eager = false,
}: {
  post: FeedPost;
  eager?: boolean;
}) {
  const { setPending } = useNav();
  const href = post.href ?? `/media/${post.id}`;
  const go = () => {
    const label =
      post.kind === "project" && post.title
        ? post.title
        : post.kind === "research"
          ? post.title
          : post.kind === "student"
            ? post.title
            : undefined;
    setPending({
      href,
      kind: post.kind === "project" ? "project" : post.kind === "research" ? "research" : "default",
      image: post.image,
      title: label,
    });
  };
  const tall = post.size === "tall";
  return (
    <motion.article
      whileHover={{ y: -4, rotate: post.accent ? -0.4 : 0.3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-line bg-paper ${tall ? "aspect-[3/4]" : ""}`}
    >
      <Link href={href} onClick={go} data-cur className="flex h-full flex-col">
        {post.image ? (
          <div className={`relative overflow-hidden ${tall ? "flex-1" : "aspect-[16/10]"}`}>
            <img
              src={post.image}
              alt=""
              loading={eager ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center ${tall ? "flex-1" : "aspect-[16/7]"} ${
              post.kind === "event" ? "bg-accent-soft" : "bg-ink"
            }`}
          >
            <span className={`disp px-6 text-center ${post.kind === "event" ? "text-accent" : "text-canvas/80"}`}>
              {post.kicker}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className={`label ${post.accent ? "text-accent" : "text-ink-soft"}`}>
              {post.kicker}
            </span>
            <span className="label text-ink-soft/60">{post.time}</span>
          </div>
          <h3 className="disp text-base text-ink">{post.title}</h3>
          {body(post.body)}
          {post.meta && (
            <span className="label mt-1 inline-flex items-center gap-1 text-accent">
              {post.meta} <ChevronRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          )}
          {!post.meta && (
            <span className="label mt-1 inline-flex items-center gap-1 text-ink transition-colors duration-300 group-hover:text-accent">
              OPEN <ArrowUpRight size={12} />
            </span>
          )}
        </div>
        {post.kind === "project" && (
          <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-accent text-canvas opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Sparkles size={15} />
          </span>
        )}
      </Link>
    </motion.article>
  );
}

function body(text: string) {
  return <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">{text}</p>;
}