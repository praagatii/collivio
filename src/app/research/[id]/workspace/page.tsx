"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Lock,
  MessageSquare,
  FileText,
  StickyNote,
  Paperclip,
  Folder,
  Send,
  Smile,
  ShieldCheck,
} from "lucide-react";
import { Avatar, Badge, Button, VerifiedIcon } from "@/components/primitives";
import { researchOf, studentOf } from "@/data/mock";

const TABS = ["Overview", "Chat", "Team", "Files", "Notes"] as const;

export default function WorkspacePage() {
  const params = useParams<{ id: string }>();
  const item = researchOf(params.id);
  if (!item) return <Gone />;
  return <Room item={item} />;
}

function Room({ item }: { item: ReturnType<typeof researchOf> & object }) {
  const key = `collivio_accepted_${item.id}`;
  const [accepted, setAccepted] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(key) === "1";
  });

  const unlock = () => {
    setAccepted(true);
    try {
      localStorage.setItem(key, "1");
    } catch {
      /* ignore */
    }
  };

  if (!accepted) {
    return <Locked item={item} onUnlock={unlock} />;
  }
  return <Chamber item={item} />;
}

function Locked({
  item,
  onUnlock,
}: {
  item: ReturnType<typeof researchOf> & object;
  onUnlock: () => void;
}) {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-[1200px] place-items-center px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md border border-line bg-paper p-8 text-center md:p-10"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-line bg-canvas text-accent">
          <Lock size={24} />
        </span>
        <div className="label mt-5 text-accent">PRIVATE RESEARCH ROOM</div>
        <h1 className="disp mt-3 text-2xl text-ink">{item.title}</h1>
        <p className="mt-2 text-sm italic text-ink-soft">“{item.question}”</p>
        <div className="mt-4 flex justify-center">
          <Badge tone="accent">STATUS: PENDING</Badge>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          This workspace opens once the research administrator accepts your
          request to join. Until then, the room stays locked.
        </p>
        <div className="mt-6 space-y-3">
          <Button href={`/research/${item.id}`} variant="ghost" className="w-full">
            BACK TO RESEARCH BRIEF
          </Button>
          <button
            type="button"
            onClick={onUnlock}
            data-cur
            className="label link-line w-full text-ink"
          >
            (DEMO) SIMULATE ACCEPTANCE →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function Chamber({ item }: { item: ReturnType<typeof researchOf> & object }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Chat");
  const [draft, setDraft] = useState("");
  const [local, setLocal] = useState<{ id: number; name: string; role: string; text: string; time: string; mine: boolean }[]>([]);
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const me = studentOf("mira-shah");

  const messages = useMemo(
    () => [...item.messages, ...local].sort((a, b) => a.id - b.id),
    [item.messages, local],
  );

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    const id = messages.length + 1;
    setLocal((l) => [
      ...l,
      {
        id,
        name: "Mira",
        role: "You",
        text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        mine: true,
      },
    ]);
    setDraft("");
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <header className="flex flex-wrap items-center justify-between gap-4 py-8">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/research-hub" data-cur className="label text-ink-soft hover:text-ink">
              RESEARCH HUB /
            </Link>
            <Badge tone="line">PRIVATE ROOM</Badge>
          </div>
          <h1 className="disp mt-2 text-2xl text-ink md:text-3xl">{item.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Badge tone="soft">
            <span className="h-2 w-2 rounded-full bg-accent" /> {item.collaborators} MEMBERS · ACTIVE
          </Badge>
          <VerifiedIcon />
        </div>
      </header>

      <div className="border border-line bg-deep text-canvas">
        <div className="scrub-x flex items-center gap-1 overflow-x-auto px-3 py-2">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              data-cur
              className={`relative whitespace-nowrap px-4 py-2.5 label transition-colors duration-300 ${
                tab === t ? "text-deep" : "text-canvas/70 hover:text-canvas"
              }`}
            >
              {tab === t && (
                <motion.span layoutId="room-tab" className="absolute inset-0 bg-canvas" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className="relative">{t.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {tab === "Chat" && (
              <div className="m-3 flex min-h-[380px] flex-col justify-between rounded-sm bg-paper p-4 text-ink md:p-6">
                <div className="space-y-4">
                  {messages.map((m) => {
                    const who = m.mine ? me : studentOf(item.team.find((t) => t.student?.name === m.name)?.id ?? "");
                    return (
                      <div key={m.id} className={`flex items-start gap-3 ${m.mine ? "flex-row-reverse" : ""}`}>
                        {who ? (
                          <Avatar src={who.avatar} name={m.name} size={34} />
                        ) : (
                          <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-tan text-xs font-bold">
                            {m.name.slice(0, 1)}
                          </span>
                        )}
                        <div className={`max-w-[72%] ${m.mine ? "text-right" : ""}`}>
                          <div className="mb-1 flex items-center gap-2 label text-ink-soft">
                            <span className="text-ink">{m.name}</span>
                            <span>{m.role}</span>
                            <span>{m.time}</span>
                          </div>
                          <div className={`inline-block border px-4 py-2.5 text-sm leading-relaxed ${m.mine ? "border-accent bg-accent-soft text-ink" : "border-line bg-canvas text-ink"}`}>
                            {m.text}
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <button
                              type="button"
                              data-cur
                              onClick={() => setLikes((l) => ({ ...l, [m.id]: !l[m.id] }))}
                              className={`label transition-colors ${likes[m.id] ? "text-accent" : "text-ink-soft hover:text-ink"}`}
                            >
                              <Smile size={12} className="mr-1 inline" />
                              {likes[m.id] ? "1 · " : "0 · "}
                              {likes[m.id] ? "REACTED" : "REACT"}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") send();
                    }}
                    placeholder="Message the room…"
                    className="flex-1 border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-soft outline-none focus:border-ink"
                  />
                  <button
                    type="button"
                    onClick={send}
                    data-cur
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-canvas transition-colors hover:bg-deep"
                    aria-label="Send"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            )}

            {tab === "Overview" && (
              <div className="m-3 grid gap-4 rounded-sm bg-paper p-6 text-ink md:grid-cols-3">
                <div className="md:col-span-2">
                  <div className="label text-accent">THE ROOM</div>
                  <h2 className="disp mt-2 text-2xl md:text-3xl">“{item.question}”</h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{item.background}</p>
                  <div className="mt-6">
                    <div className="label text-ink-soft">PROGRESS</div>
                    <div className="mt-2 h-2 w-full bg-line">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.activity}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-2 bg-accent"
                      />
                    </div>
                    <div className="mt-2 label text-ink-soft">{item.activity}% TOWARD {item.outcome}</div>
                  </div>
                </div>
                <div className="border border-line p-5">
                  <div className="label text-accent">NEXT UP</div>
                  <ul className="mt-3 space-y-2.5">
                    {item.timeline.slice(0, 4).map((t) => (
                      <li key={t} className="flex items-baseline gap-2 text-sm text-ink-soft">
                        <span className="text-accent">→</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "Team" && (
              <div className="m-3 grid gap-3 rounded-sm bg-paper p-6 text-ink sm:grid-cols-2 lg:grid-cols-4">
                {item.team.map((m, i) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="border border-line p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar src={m.student?.avatar ?? ""} name={m.student?.name ?? m.id} size={40} />
                      <span
                        className={`h-2 w-2 rounded-full ${m.status === "online" ? "bg-accent" : m.status === "away" ? "bg-tan" : "bg-line"}`}
                        title={m.status}
                      />
                    </div>
                    <div className="mt-3 disp text-base">{m.student?.name ?? m.id}</div>
                    <div className="label text-ink-soft">{m.role}</div>
                    {m.id === item.creatorId && (
                      <Badge tone="accent" className="mt-2">
                        <ShieldCheck size={11} /> ADMIN
                      </Badge>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {tab === "Files" && (
              <div className="m-3 rounded-sm bg-paper p-6 text-ink">
                <div className="label text-accent">FILES / RESOURCES</div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {item.files.map((f, i) => (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex items-center gap-3 border border-line p-4"
                    >
                      {f.type === "folder" ? (
                        <Folder size={18} className="text-accent" />
                      ) : (
                        <FileText size={18} className="text-accent" />
                      )}
                      <div>
                        <div className="label text-ink group-hover:text-accent">{f.name}</div>
                        <div className="label text-ink-soft">{f.type.toUpperCase()} · SHARED</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="label flex items-center gap-2 text-accent">
                    <Paperclip size={12} /> ADD A FILE
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Members can attach outlines, datasets and drafts here. Mock
                    uploads are disabled in this demo.
                  </p>
                </div>
              </div>
            )}

            {tab === "Notes" && (
              <div className="m-3 grid gap-3 rounded-sm bg-paper p-6 text-ink sm:grid-cols-2">
                {item.notes.map((n, i) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, rotate: -1 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="border border-tan bg-tan/40 p-5"
                  >
                    <div className="flex items-center gap-2 label text-accent">
                      <StickyNote size={12} /> NOTE
                    </div>
                    <p className="mt-2 text-lg font-semibold text-ink">{n.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Live note — shared with the room, editable by the team.
                    </p>
                  </motion.div>
                ))}
                <div className="grid place-items-center border border-dashed border-line p-5 text-center">
                  <Button href={`/research/${item.id}`} variant="ghost">
                    + NEW NOTE
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 label text-ink-soft">
          <MessageSquare size={13} />
          ROOM IS PRIVATE · ONLY ACCEPTED MEMBERS
        </div>
        <Badge tone="soft">YOU&apos;RE IN — WELCOME TO {item.title.toUpperCase()}</Badge>
      </div>
    </div>
  );
}

function Gone() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
      <div>
        <div className="disp text-6xl text-accent">404</div>
        <h1 className="disp mt-4 text-2xl text-ink">ROOM NOT FOUND</h1>
        <div className="mt-6">
          <Button href="/research-hub" variant="deep">
            BACK TO RESEARCH HUB
          </Button>
        </div>
      </div>
    </div>
  );
}