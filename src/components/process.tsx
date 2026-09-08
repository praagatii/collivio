import Reveal from "./reveal";

const steps = [
  {
    number: "01",
    title: "Drop an idea",
    copy: "Put the thought down. That's the whole first step.",
  },
  {
    number: "02",
    title: "Find people",
    copy: "Match with students who want to build it too.",
  },
  {
    number: "03",
    title: "Build together",
    copy: "Real work, real projects — not just coursework.",
  },
  {
    number: "04",
    title: "Show the work",
    copy: "Your profile becomes proof of what you've done.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <p className="label-mono text-ink-soft">How COLLivio works</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-[clamp(2.2rem,6.5vw,6rem)] uppercase leading-[0.92] tracking-[-0.01em]">
            Idea <span className="text-ink-soft">→</span> Project{" "}
            <span className="text-ink-soft">→</span> People{" "}
            <span className="text-ink-soft">→</span> Proof
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-0 border-t border-line md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="flex h-full flex-col border-b border-line py-8 pr-8 md:border-b-0 md:border-r md:px-8 md:first:border-l md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <p className="label-mono text-accent">{step.number}</p>
                <h3 className="mt-6 font-display text-2xl uppercase leading-[1.05] tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-ink-soft">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}