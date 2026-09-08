import MaskedLine from "./masked-line";
import Reveal from "./reveal";

export default function FinalCta() {
  return (
    <footer className="relative overflow-hidden bg-accent text-ink">
      <div className="flex h-[120px] md:h-[200px]" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-full flex-1 bg-canvas" />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-12 pt-16 md:px-0 md:pb-16 md:pt-28">
        <div
          aria-hidden
          className="disp pointer-events-none absolute inset-x-0 top-16 text-center text-[clamp(6rem,24vw,20rem)] font-extrabold leading-none text-ink/10 md:top-14"
        >
          COLLIVIO
        </div>

        <div className="relative">
          <MaskedLine
            text="Don't wait"
            className="disp block text-[clamp(2.4rem,6.5vw,6rem)] font-extrabold"
          />
          <MaskedLine
            text="To start building."
            delay={120}
            className="disp block text-[clamp(2.4rem,6.5vw,6rem)] font-extrabold"
          />

          <Reveal delay={260}>
            <p className="label mt-8 text-ink/70">Think it. Drop it. Build it.</p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:gap-6">
              <a
                href="/login"
                data-cur
                className="group label rounded-full border border-ink px-7 py-3.5 font-semibold transition-colors duration-300 hover:bg-ink hover:text-accent"
              >
                Join COLLivio
                <span className="ml-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                  →
                </span>
              </a>
              <a
                href="#top"
                data-cur
                className="group label inline-flex items-center gap-3 font-semibold"
              >
                <span className="underline decoration-1 underline-offset-4 transition-colors duration-300 group-hover:decoration-ink">
                  Explore the platform
                </span>
                <span className="text-lg leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-20 flex flex-col gap-4 border-t border-ink/25 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="label text-ink/70">
            © 2026 COLLivio — built by young people.
          </span>
          <span className="label text-ink/70">
            Think it. Drop it. Build it.
          </span>
          <a
            href="#top"
            data-cur
            className="group inline-flex items-center gap-3"
          >
            <span className="label font-semibold">Back to top</span>
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}