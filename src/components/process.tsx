import MaskedLine from "./masked-line";
import Reveal from "./reveal";

const steps = [
  { number: "01", title: "Drop an idea", copy: "Put the thought down. That's the whole first step." },
  { number: "02", title: "Find people", copy: "Match with students who want to build it too." },
  { number: "03", title: "Build together", copy: "Real work, real projects — not just coursework." },
  { number: "04", title: "Show the work", copy: "Your profile becomes proof of what you've done." },
];

export default function Process() {
  return (
    <section id="how-it-works" className="bg-ink py-28 text-canvas md:py-44">
      <div className="px-6 md:px-[5%]">
        <div className="mx-auto w-full max-w-[1200px]">
          <span className="label text-canvas/60">How COLLivio works</span>
          <h2 className="disp mt-8 text-[clamp(1.75rem,4.5vw,4rem)] font-extrabold">
            <MaskedLine text="Idea  →  project  →  people  →  proof" />
          </h2>
        </div>

        <div className="mx-auto mt-20 grid w-full max-w-[1200px] gap-px border-t border-canvas/20 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 110}>
              <div className="flex h-full flex-col border-r border-canvas/20 py-8 pr-8 last:border-r-0">
                <span className="label text-accent">{step.number}</span>
                <h3 className="disp mt-6 text-2xl font-extrabold uppercase tracking-[-0.02em] md:text-[1.6rem]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[15rem] text-sm leading-[1.35] tracking-[-0.01em] text-canvas/70">
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