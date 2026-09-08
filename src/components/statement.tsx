import MaskedLine from "./masked-line";
import Reveal from "./reveal";

export default function Statement() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-canvas md:py-44">
      <div className="px-6 md:px-[5%]">
        <MaskedLine
          text="Not just learning."
          className="disp block text-[clamp(2.4rem,6.5vw,6.5rem)] font-extrabold"
        />
        <MaskedLine
          text="Building for real."
          delay={180}
          className="disp block text-[clamp(2.4rem,6.5vw,6.5rem)] font-extrabold"
        />
        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="h-px w-full bg-canvas/30" />
            <p className="mt-5 text-base leading-[1.35] tracking-[-0.01em] text-canvas/80 md:text-lg">
              COLLivio connects ambitious students with real projects, people,
              companies and communities — so they can build experience before
              their first traditional job.
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-4 md:col-start-7 md:mt-10">
            <div className="h-px w-full bg-canvas/30" />
            <p className="mt-5 text-base leading-[1.35] tracking-[-0.01em] text-canvas/80 md:text-lg">
              Projects, research, communities and events — built around the work
              you actually do. Not the grades you got.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}