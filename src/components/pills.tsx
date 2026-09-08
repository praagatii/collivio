import Reveal from "./reveal";

const pills = ["For students", "For companies", "For communities"];

export default function Pills() {
  return (
    <section className="relative h-[60svh] md:h-[110vh]">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center gap-8 px-6">
        <span className="label text-ink-soft">Who COLLivio is for</span>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
          {pills.map((pill, i) => (
            <Reveal key={pill} delay={i * 130}>
              <span className="disp block rounded-full bg-ink px-6 py-3 text-lg font-extrabold tracking-[-0.02em] text-canvas md:px-8 md:py-3.5 md:text-2xl">
                {pill}
              </span>
            </Reveal>
          ))}
        </div>
        <span className="label text-ink-soft/60">
          Students build. Companies hire. Everyone shows the work.
        </span>
      </div>
    </section>
  );
}