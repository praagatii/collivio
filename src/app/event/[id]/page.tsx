"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, MapPin, Check, ArrowLeft } from "lucide-react";
import { Badge, Button, VerifiedIcon } from "@/components/primitives";
import { eventOf, events } from "@/data/mock";

export default function EventPage() {
  const params = useParams<{ id: string }>();
  const event = eventOf(params.id);
  const [rsvped, setRsvped] = useState(false);
  if (!event) {
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
        <div>
          <div className="disp text-6xl text-accent">404</div>
          <h1 className="disp mt-4 text-2xl text-ink">EVENT NOT FOUND</h1>
          <div className="mt-6">
            <Button href="/media-lab" variant="deep">
              BACK TO MEDIA LAB
            </Button>
          </div>
        </div>
      </div>
    );
  }
  const pct = Math.round((event.rsvps / parseInt(event.capacity, 10)) * 100);

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
      <div className="py-8">
        <Link href="/media-lab" data-cur className="label inline-flex items-center gap-1.5 text-ink-soft hover:text-ink">
          <ArrowLeft size={14} /> MEDIA LAB
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/10] overflow-hidden border border-line"
        >
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4">
            <Badge tone="paper">{event.kicker}</Badge>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 label text-ink-soft">
              <span className="inline-flex items-center gap-1 text-ink">
                {event.kicker} <VerifiedIcon size={12} />
              </span>
            </div>
            <h1 className="disp mt-3 text-ink" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              {event.title}
            </h1>
            <div className="mt-5 space-y-2.5">
              {[
                [<CalendarDays key="d" size={15} />, event.date],
                [<Clock key="t" size={15} />, event.time],
                [<MapPin key="m" size={15} />, event.location],
              ].map(([icon, label]) => (
                <div key={label as string} className="flex items-center gap-3 text-sm text-ink-soft">
                  {icon}
                  {label}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft md:text-base">
              {event.description}
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-between label text-ink-soft">
                <span>{event.rsvps} / {event.capacity} RSVPS</span>
                <span>{pct}% FULL</span>
              </div>
              <div className="mt-2 h-2 w-full bg-line">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-2 bg-accent"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {!rsvped ? (
                <motion.div key="rsvp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Button onClick={() => setRsvped(true)} variant="deep" className="w-full">
                    RSVP TO THIS EVENT
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 border border-accent bg-accent-soft p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-canvas">
                    <Check size={18} />
                  </span>
                  <div>
                    <div className="label text-accent">YOU&apos;RE ON THE LIST</div>
                    <p className="text-sm text-ink-soft">A reminder lands in the feed before doors open.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <div className="label flex items-center gap-2 text-ink-soft">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          MORE FROM MEDIA LAB
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {events.filter((e) => e.id !== event.id).slice(0, 3).map((e) => (
            <Link key={e.id} href={`/event/${e.id}`} data-cur className="group block border border-line bg-paper">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
              </div>
              <div className="p-5">
                <div className="label text-accent">{e.kicker}</div>
                <h3 className="disp mt-2 text-lg text-ink">{e.title}</h3>
                <p className="mt-1.5 label text-ink-soft">{e.date} · {e.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}