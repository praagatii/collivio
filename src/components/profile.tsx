import Reveal from "./reveal";

const profileRows = [
  { label: "Built the COLLivio thesis project", meta: "2025 — 2026" },
  { label: "Shipped a research paper on Gen Z work", meta: "2026" },
  { label: "Designed re-commerce for a campus store", meta: "2025" },
];

export default function Profile() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto grid w-full max-w-[1440px] gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <Reveal>
            <p className="label-mono text-ink-soft">Your profile, not a resume</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 font-display text-[clamp(2.6rem,7vw,6.5rem)] uppercase leading-[0.92] tracking-[-0.01em]">
              Your work
              <br />
              speaks for you.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              Build a profile around the projects you&apos;ve actually worked on,
              the skills you&apos;ve developed and the things you&apos;ve created. Then
              apply straight from it — no traditional resume required.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-12">
              <a
                href="/login"
                className="group label-mono inline-flex items-center gap-3 text-ink"
              >
                <span className="link-line">Build your profile</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 lg:col-start-8">
          <Reveal delay={200}>
            <div className="border border-line bg-canvas p-6 md:p-8">
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <span className="font-display text-sm uppercase tracking-wide">
                  COLLivio
                </span>
                <span className="label-mono text-ink-soft">Profile</span>
              </div>

              <div className="pt-6">
                <p className="font-display text-3xl uppercase tracking-tight md:text-4xl">
                  Your name
                </p>
                <p className="label-mono mt-3 text-ink-soft">
                  Student — Design · Build · Research
                </p>
              </div>

              <div className="mt-8">
                <p className="label-mono text-ink">The work</p>
                <div className="mt-4">
                  {profileRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-t border-line py-4"
                    >
                      <span className="text-sm text-ink md:text-base">
                        {row.label}
                      </span>
                      <span className="label-mono shrink-0 text-ink-soft">
                        {row.meta}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-4 border-y border-line py-4">
                    <span className="label-mono text-ink">
                      Apply with your work →
                    </span>
                    <span className="label-mono shrink-0 text-ink-soft">
                      No resume
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}