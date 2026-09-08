import Reveal from "./reveal";

export default function Community() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <p className="label-mono text-ink-soft">
            Founded by four young women
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,7.5vw,7rem)] uppercase leading-[0.92] tracking-[-0.01em]">
            Built by young people.
            <br />
            For what comes next.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12">
            <div className="md:col-span-2" />
            <div className="md:col-span-5">
              <div className="h-px w-full bg-line" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                COLLivio was founded by four young women who wanted a space
                where students could start building real-world experience
                earlier. What began as an idea among friends is becoming a home
                for ambitious students everywhere.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-9">
              <div className="h-px w-full bg-line" />
              <p className="mt-6 text-sm leading-relaxed text-ink-soft md:text-base">
                Built for the students who are tired of waiting to start. Built
                for the companies looking for people who actually do.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}