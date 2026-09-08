import Reveal from "./reveal";

export default function Intro() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <p className="label-mono text-ink-soft">What is COLLivio</p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,7.5vw,7rem)] uppercase leading-[0.92] tracking-[-0.01em]">
            Not just learning.
            <br />
            Building for real.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12">
          <Reveal delay={220} className="md:col-span-4">
            <div className="h-px w-full bg-line" />
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              COLLivio connects ambitious students with real projects, people,
              companies and communities — so they can build experience before
              their first traditional job.
            </p>
          </Reveal>
          <Reveal delay={320} className="md:col-span-4 md:col-start-7 md:mt-10">
            <div className="h-px w-full bg-line" />
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              Projects, research, communities and events — all in one place,
              built around the work you actually do, not the grades you got.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}