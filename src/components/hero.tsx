"use client";

import { useEffect, useState } from "react";
import MaskedLine from "./masked-line";

export default function Hero() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-canvas px-6 pt-10 md:px-[5%]"
    >
      <div className="flex items-start justify-between">
        <span
          data-cur
          className={`label inline-block rounded-full bg-blue px-5 py-2.5 font-semibold text-white transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            on
              ? "translate-x-0 opacity-100"
              : "-translate-x-4 opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          Built by 4 young women
        </span>
        <span
          className={`label mt-2 text-ink-soft transition-opacity duration-700 ${
            on ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1700ms" }}
        >
          Est. 2026
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1400px] flex-1 pt-16 md:pt-20">
        <div className="overflow-hidden">
          <div
            className={`h-px bg-line ${on ? "" : "rule-in"}`}
            style={{
              transform: on ? "scaleX(1)" : undefined,
              transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: "350ms",
              transformOrigin: "left center",
            }}
          />
        </div>

        <h1 className="disp mt-8 font-extrabold md:mt-12">
          <MaskedLine
            text="Think it."
            auto={false}
            trigger={on}
            delay={500}
            className="block text-[clamp(3rem,14.5vw,12.5rem)]"
          />
          <MaskedLine
            text="Drop it."
            auto={false}
            trigger={on}
            delay={700}
            className="block text-[clamp(3rem,14.5vw,12.5rem)]"
          />
          <MaskedLine
            text="Build it."
            auto={false}
            trigger={on}
            delay={900}
            className="block text-[clamp(3rem,14.5vw,12.5rem)]"
          />
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <p
            className={`max-w-md text-base leading-[1.25] tracking-[-0.02em] text-ink-soft transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-xl ${
              on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "1300ms" }}
          >
            A space for young people to build real projects, find real
            opportunities, and create work that speaks for itself.
          </p>

          <a
            href="#how-it-works"
            className={`label group inline-flex items-center gap-4 font-semibold transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "1450ms" }}
          >
            <span className="link-line group-hover:after:scale-x-100 group-hover:after:origin-left">
              Explore COLLivio
            </span>
            <span className="text-lg leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] pb-10">
        <div className="mt-12 md:mt-20">
          <div className="flex items-center justify-between border-t border-line pt-6">
            <span className="label text-ink-soft">
              Student-built platform
            </span>
            <span className="label hidden text-ink-soft md:inline">
              Think it. Drop it. Build it.
            </span>
            <a
              href="#top"
              data-cur
              className="label flex items-center gap-3 font-semibold"
            >
              Scroll
              <span className="inline-block animate-pulse">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}