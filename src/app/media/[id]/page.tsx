"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge, Button } from "@/components/primitives";
import { useNav } from "@/components/providers";
import { postOf, projectOf, researchOf, studentOf, companyOf, eventOf, feed } from "@/data/mock";

export default function MediaPostPage() {
  const params = useParams<{ id: string }>();
  const post = postOf(params.id);
  const { setPending } = useNav();
  if (!post) {
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
        <div>
          <div className="disp text-6xl text-accent">404</div>
          <h1 className="disp mt-4 text-2xl text-ink">POST NOT FOUND</h1>
          <div className="mt-6">
            <Button href="/media-lab" variant="deep">
              BACK TO MEDIA LAB
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const relation: { label: string; href: string; kind: "project" | "research" | "profile" | "company" | "default"; title?: string; image?: string }[] = [];
  if (post.projectId) {
    const p = projectOf(post.projectId);
    if (p) relation.push({ label: "OPEN PROJECT BRIEF", href: `/project/${p.id}`, kind: "project", title: p.title, image: p.image });
  }
  if (post.researchId) {
    const r = researchOf(post.researchId);
    if (r) relation.push({ label: "OPEN RESEARCH", href: `/research/${r.id}`, kind: "research", title: r.title, image: r.image });
  }
  if (post.authorId) {
    const s = studentOf(post.authorId);
    if (s) relation.push({ label: "VIEW PROFILE", href: `/profile/${s.id}`, kind: "profile", title: s.name, image: s.avatar });
  }
  if (post.companyId) {
    const c = companyOf(post.companyId);
    relation.push({ label: "VIEW COMPANY", href: `/company/${c.id}`, kind: "company", title: c.name });
  }
  if (post.eventId) {
    const e = eventOf(post.eventId);
    if (e) relation.push({ label: "VIEW EVENT", href: `/event/${e.id}`, kind: "default", title: e.title, image: e.image });
  }

  return (
    <div className="mx-auto max-w-[820px] px-4 pb-24 md:px-6">
      <div className="py-8">
        <Link href="/media-lab" data-cur className="label inline-flex items-center gap-1.5 text-ink-soft hover:text-ink">
          <ArrowLeft size={14} /> MEDIA LAB
        </Link>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{post.kicker}</Badge>
          <span className="label text-ink-soft">{post.time}</span>
        </div>
        <h1 className="disp mt-5 text-ink" style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}>
          {post.kicker} — {post.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {post.body}
        </p>
      </motion.article>

      {post.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-8 aspect-[16/10] overflow-hidden border border-line"
        >
          <img src={post.image} alt="" className="h-full w-full object-cover" />
        </motion.div>
      )}

      <div className="mt-10 grid gap-3">
        {relation.length ? (
          relation.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setPending({ href: r.href, kind: r.kind, image: r.image, title: r.title })}
              data-cur
              className="group flex items-center justify-between border border-line bg-paper px-5 py-4 transition-colors hover:border-ink"
            >
              <span className="label text-ink">{r.label}</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors group-hover:bg-ink group-hover:text-canvas">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))
        ) : (
          <div className="border border-line bg-paper px-5 py-4">
            <span className="label text-ink-soft">
              This update is part of the {post.kicker} series in Media Lab.
            </span>
          </div>
        )}
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <div className="label text-ink-soft">KEEP SCROLLING</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {feed.slice(0, 4).filter((f) => f.id !== post.id).slice(0, 2).map((f) => (
            <Link key={f.id} href={f.href ?? `/media/${f.id}`} data-cur className="group border border-line bg-paper p-5">
              <div className="label text-accent">{f.kicker}</div>
              <h3 className="disp mt-2 text-base text-ink group-hover:text-accent">{f.title}</h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">{f.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}