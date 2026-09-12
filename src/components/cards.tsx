"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import type { Project, Research, Student, FeedPost } from "@/data/mock";
import { useNav } from "@/components/providers";
import { Avatar, Badge, VerifiedIcon } from "@/components/primitives";

const CARD = "rounded-[2rem] border border-line bg-paper overflow-hidden";
const HOVER = { y: -4 };
const TRANS = { type: "spring" as const, stiffness: 300, damping: 24 };

function ArrowBubble({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper transition-colors duration-300 group-hover:bg-accent ${className}`}
    >
      <ArrowUpRight size={16} />
    </span>
  );
}

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
      <motion.article whileHover={HOVER} transition={TRANS} className="group w-[min(84vw,320px)] shrink-0">
        <Link href={href} onClick={go} data-cur className={`block ${CARD}`}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading={eager ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="label text-ink-soft">{project.company}</div>
                <h3 className="disp mt-1 text-lg text-ink">{project.title}</h3>
              </div>
              <ArrowBubble />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.slice(0, 3).map((s) => (
                <Badge key={s}>{s.toUpperCase()}</Badge>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-soft">
              <span>{project.amount}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{project.duration}</span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article whileHover={HOVER} transition={TRANS} className="group mb-4">
      <Link href={href} onClick={go} data-cur className={`block ${CARD}`}>
        <div className="grid gap-5 p-5 md:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] md:gap-7 md:p-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              loading={eager ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              {index ? (
                <span className="num-outline text-xl">{String(index).padStart(2, "0")}</span>
              ) : null}
              <span className="label text-ink-soft">{project.company}</span>
              <VerifiedIcon />
              <Badge tone={project.status === "New" ? "accent" : "line"}>
                {project.status}
              </Badge>
            </div>
            <h3
              className="disp mt-3 text-ink"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
              {project.about}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.skills.slice(0, 4).map((s) => (
                <Badge key={s}>{s.toUpperCase()}</Badge>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm text-ink-soft">
              <span className="disp text-base text-ink">{project.amount}</span>
              <span>{project.duration}</span>
              <span>
                {project.remote ? "REMOTE" : project.location.toUpperCase()}
              </span>
              <ArrowBubble className="ml-auto" />
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
      <motion.article whileHover={HOVER} transition={TRANS} className="group w-[min(84vw,320px)] shrink-0">
        <Link href={href} onClick={go} data-cur className={`block ${CARD}`}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute left-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-ink text-paper disp text-sm">
              {item.collaborators}
            </span>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="label text-ink-soft">{item.category}</div>
                <h3 className="disp mt-1 text-lg text-ink">{item.title}</h3>
              </div>
              <ArrowBubble />
            </div>
            <p className="text-sm italic text-ink-soft">&quot;{item.question}&quot;</p>
            <Badge tone={item.open ? "accent" : "line"}>
              <Users size={11} />
              {item.open ? `${item.spotsOpen} SPOTS OPEN` : "FULL"}
            </Badge>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article whileHover={HOVER} transition={TRANS} className="group mb-4">
      <Link href={href} onClick={go} data-cur className={`block ${CARD}`}>
        <div className="grid overflow-hidden md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 p-5 md:p-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {index ? (
                  <span className="num-outline text-xl">{String(index).padStart(2, "0")}</span>
                ) : null}
                <Badge>{item.category}</Badge>
                <span className="label text-ink-soft">
                  {item.collaborators} COLLABORATORS
                </span>
              </div>
              <h3
                className="disp mt-3 text-ink"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm italic text-ink-soft">
                &quot;{item.question}&quot;
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {item.categorySkills.map((s) => (
                  <Badge key={s}>{s.toUpperCase()}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={item.open ? "accent" : "line"}>
                  <Users size={11} />
                  {item.open ? `${item.spotsOpen} SPOTS` : "FULL"}
                </Badge>
                <ArrowBubble />
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
    <motion.article whileHover={HOVER} transition={TRANS} className={`group ${CARD} ${big ? "" : "p-4"}`}>
      <Link href={href} onClick={go} data-cur className="flex flex-col gap-3">
        {big ? (
          <div className="relative">
            <img
              src={student.avatar}
              alt={student.name}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <ArrowBubble className="absolute right-3 top-3 border border-line" />
          </div>
        ) : (
          <div className="flex items-start justify-between">
            <Avatar src={student.avatar} name={student.name} size={44} />
            <ArrowBubble />
          </div>
        )}
        <div className={big ? "px-5 pb-5" : ""}>
          <h3 className="disp text-base text-ink">{student.name}</h3>
          <p className="mt-0.5 text-sm text-ink-soft">{student.role}</p>
          <p className="text-xs text-ink-soft/70">{student.location}</p>
        </div>
        <div className={`flex flex-wrap gap-1.5 ${big ? "px-5 pb-5" : ""}`}>
          {student.skills.slice(0, 2).map((s) => (
            <Badge key={s}>{s.toUpperCase()}</Badge>
          ))}
        </div>
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
      whileHover={HOVER}
      transition={TRANS}
      className={`group ${CARD} ${tall ? "aspect-[3/4]" : ""}`}
    >
      <Link href={href} onClick={go} data-cur className="flex h-full flex-col">
        {post.image ? (
          <div className={`relative overflow-hidden ${tall ? "flex-1" : "aspect-[16/10]"}`}>
            <img
              src={post.image}
              alt=""
              loading={eager ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center ${tall ? "flex-1" : "aspect-[16/7]"} bg-accent-soft`}
          >
            <span className="disp px-6 text-center text-accent">{post.kicker}</span>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="label text-ink-soft">{post.kicker}</span>
            <span className="label text-ink-soft/50">{post.time}</span>
          </div>
          <h3 className="disp text-base text-ink">{post.title}</h3>
          {body(post.body)}
          <span className="label mt-1 inline-flex items-center gap-1 text-ink transition-colors duration-300 group-hover:text-accent">
            OPEN <ArrowUpRight size={12} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function body(text: string) {
  return <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">{text}</p>;
}