import Link from "next/link";
import { Hero, Ecosystem, HowItWorks, Skills } from "@/components/home";
import { ProjectCard, ResearchCard } from "@/components/cards";
import { Button, SectionHeader, Arrow, Avatar, Badge } from "@/components/primitives";
import { projects, research, students, events } from "@/data/mock";

export default function Home() {
  return (
    <div>
      <Hero />
      <Ecosystem />

      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
        <SectionHeader
          kicker="FEATURED PROJECTS"
          title={
            <>
              WORTH
              <br />
              BUILDING.
            </>
          }
          right={
            <Button href="/employment-skill-bridge" variant="ghost">
              VIEW ALL <Arrow />
            </Button>
          }
        />
        <div className="mt-6">
          {[projects[5], projects[0], projects[1]].map((p, i) => (
            <ProjectCard key={p.id} project={p} variant="row" index={i + 1} eager={i === 0} />
          ))}
        </div>
      </section>

      <section className="bg-deep text-canvas">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
          <SectionHeader
            kicker="OPEN RESEARCH"
            accent
            title={
              <>
                WORTH
                <br />
                EXPLORING.
              </>
            }
            right={
              <Button href="/research-hub" variant="paper">
                EXPLORE RESEARCH <Arrow />
              </Button>
            }
          />
          <div className="mt-8 space-y-px">
            {research.slice(0, 3).map((r, i) => (
              <ResearchCard key={r.id} item={r} variant="row" index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Skills />

      <section className="mx-auto max-w-[1200px] px-4 py-10 md:px-6">
        <SectionHeader kicker="THE COMMUNITY" title={<>PEOPLE BUILDING TOGETHER.</>} />
        <div className="mt-8 border-t border-line">
          {students.slice(0, 5).map((s, i) => (
            <Link
              key={s.id}
              href={`/profile/${s.id}`}
              data-cur
              className="group grid items-center gap-4 border-b border-line py-6 transition-colors duration-300 hover:bg-paper md:grid-cols-[60px_auto_minmax(0,1fr)_auto] md:gap-6"
            >
              <span className="num-outline text-2xl">0{i + 1}</span>
              <Avatar src={s.avatar} name={s.name} size={48} />
              <span>
                <span className="disp block text-lg text-ink md:text-xl">{s.name}</span>
                <span className="label mt-1 block text-ink-soft">
                  {s.role} · {s.location}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="hidden gap-1.5 md:flex">
                  {s.skills.slice(0, 2).map((k) => (
                    <Badge key={k} tone="tan">
                      {k.toUpperCase()}
                    </Badge>
                  ))}
                </span>
                <Arrow className="text-ink-soft transition-colors group-hover:text-accent" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-8 pt-2 md:px-6">
        <SectionHeader kicker="UPCOMING" title={<>EVENTS &amp; SPRINTS.</>} />
        <div className="mt-8 border-t border-line">
          {events.slice(0, 3).map((e, i) => (
            <Link
              key={e.id}
              href={`/event/${e.id}`}
              data-cur
              className="group grid gap-3 border-b border-line py-7 transition-colors duration-300 hover:bg-paper md:grid-cols-[60px_minmax(0,5fr)_minmax(0,2fr)_40px] md:items-center md:gap-8"
            >
              <span className="num-outline text-2xl">0{i + 1}</span>
              <span>
                <span className="label text-accent">{e.kicker}</span>
                <span className="disp mt-1 block text-xl text-ink md:text-2xl">{e.title}</span>
              </span>
              <span className="label text-ink-soft">
                {e.date} · {e.time} · {e.rsvps} RSVPS
              </span>
              <ArrowUpRightInline />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 border border-ink bg-paper p-8 md:flex-row md:items-center md:p-10">
          <div>
            <div className="label text-accent">COLLIVIO</div>
            <h2 className="disp mt-2 max-w-lg text-ink" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Your profile is your application.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              No cover letters. No forms. Apply to projects with the work you
              have already made public.
            </p>
          </div>
          <Button href="/signup" variant="deep" className="shrink-0">
            CREATE YOUR PROFILE <Arrow />
          </Button>
        </div>
      </section>
    </div>
  );
}

function ArrowUpRightInline() {
  return (
    <span aria-hidden className="hidden text-ink-soft transition-colors duration-300 group-hover:text-accent md:block">
      <Arrow className="rotate-45" size={20} />
    </span>
  );
}