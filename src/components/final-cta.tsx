import Reveal from "./reveal";

export default function FinalCta() {
  return (
    <section className="border-t border-line px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,10vw,9.5rem)] uppercase leading-[0.9] tracking-[-0.01em]">
            Don&apos;t wait
            <br />
            to start building.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="label-mono mt-10 text-ink-soft">
            Think it. Drop it. Build it.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-16 flex flex-col gap-6 md:mt-20 md:flex-row md:gap-14">
            <a
              href="/login"
              className="group label-mono inline-flex items-center gap-3 text-ink"
            >
              <span className="link-line">Join COLLivio</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a
              href="#areas"
              className="group label-mono inline-flex items-center gap-3 text-ink"
            >
              <span className="link-line">Explore the platform</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}