import MaskedLine from "./masked-line";
import Reveal from "./reveal";

const profileRows = [
  { label: "Built the COLLivio thesis project", meta: "2025 — 2026" },
  { label: "Shipped a research paper on Gen Z work", meta: "2026" },
  { label: "Designed re-commerce for a campus store", meta: "2025" },
];

export default function Profile() {
  return (
    <section className="px-6 py-28 md:px-[5%] md:py-44">
      <div className="mx-auto grid w-full max-w-[1200px] gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <span className="label text-ink-soft">Your profile, not a resume</span>
          <h2 className="disp mt-8 font-extrabold">
            <MaskedLine
              text="Your work"
              className="block text-[clamp(2.6rem,7vw,6.5rem)]"
            />
            <MaskedLine
              text="Speaks for you."
              delay={160}
              className="block text-[clamp(2.6rem,7vw,6.5rem)]"
            />
          </h2>
          <Reveal delay={300}>
            <p className="mt-10 max-w-md text-base leading-[1.3] tracking-[-0.01em] text-ink-soft md:text-lg">
              Build a profile around the projects you&apos;ve actually worked
              on, the skills you&apos;ve developed and the things you&apos;ve
              created. Then apply straight from it — no traditional resume
              required.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <a
              href="/login"
              data-cur
              className="group label mt-12 inline-flex items-center gap-3 font-semibold"
            >
              <span className="underline decoration-1 underline-offset-4 transition-colors duration-300 group-hover:decoration-ink">
                Build your profile
              </span>
              <span className="text-lg leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="md:col-span-6 lg:col-start-8">
          <Reveal delay={220}>
            <div data-cur className="border border-line bg-canvas">
              <div className="flex items-baseline justify-between border-b border-line px-5 py-4 md:px-6">
                <span className="disp text-base font-extrabold tracking-[-0.02em]">
                  COLLivio
                </span>
                <span className="label text-ink-soft">Profile</span>
              </div>

              <div className="px-5 py-6 md:px-6 md:py-8">
                <p className="disp text-2xl font-extrabold uppercase tracking-[-0.02em] md:text-3xl">
                  Your name
                </p>
                <p className="label mt-2 text-ink-soft">
                  Student — Design · Build · Research
                </p>
              </div>

              <div className="border-t border-line px-5 md:px-6">
                <div className="py-6">
                  <span className="label font-semibold">The work</span>
                  {profileRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-t border-line py-4"
                    >
                      <span className="text-sm leading-[1.3] tracking-[-0.01em] text-ink">
                        {row.label}
                      </span>
                      <span className="label shrink-0 text-ink-soft">
                        {row.meta}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-baseline justify-between border-t border-line px-5 py-4 md:px-6">
                <span className="label font-semibold">
                  Apply with your work →
                </span>
                <span className="label text-ink-soft">No resume</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}