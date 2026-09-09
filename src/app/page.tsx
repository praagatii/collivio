import Link from "next/link";
import {
  Hero,
  ProductBanners,
  HowItWorks,
  SkillScroller,
  Ticker,
} from "@/components/home";
import { ProjectCard, ResearchCard, ProfileCard } from "@/components/cards";
import { Button, SectionHeader, Arrow } from "@/components/primitives";
import { projects, research, students, events } from "@/data/mock";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductBanners />
      <Ticker />
      <HowItWorks />
      <SkillScroller />

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
        <div className="scrub-x -mx-4 mt-8 flex gap-5 overflow-x-auto px-4 pb-4 md:px-0">
          {[projects[0], projects[5], projects[1], projects[6]].map((p) => (
            <ProjectCard key={p.id} project={p} variant="tile" eager={p.id === projects[0].id} />
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
            {research.slice(0, 3).map((r) => (
              <ResearchCard key={r.id} item={r} variant="row" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20">
        <SectionHeader
          kicker="THE COMMUNITY"
          title={
            <>
              PEOPLE
              <br />
              BUILDING TOGETHER.
            </>
          }
          right={
            <Button href="/profile" variant="ghost">
              SEE PROFILES <Arrow />
            </Button>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.slice(0, 3).map((s) => (
            <ProfileCard key={s.id} student={s} big />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-4 pb-20 md:px-6">
        <SectionHeader kicker="UPCOMING" title={<>EVENTS &amp; SPRINTS.</>} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <Link
              key={e.id}
              href={`/event/${e.id}`}
              data-cur
              className="group block border border-line bg-paper"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={e.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5">
                <div className="label text-accent">{e.kicker}</div>
                <h3 className="disp mt-2 text-lg text-ink">{e.title}</h3>
                <p className="mt-1.5 label text-ink-soft">
                  {e.date} · {e.time}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="label text-ink-soft">
                    {e.rsvps} / {e.capacity.split(" ")[0]} RSVPS
                  </span>
                  <Arrow className="text-ink" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-24 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 border border-line bg-accent-soft p-8 md:flex-row md:items-center md:p-10">
          <div>
            <div className="label text-accent">COLLIVIO</div>
            <h2 className="disp mt-2 max-w-lg text-ink" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Your profile is your application.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              No cover letters. No forms. Apply to projects with the work
              you have already made public.
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