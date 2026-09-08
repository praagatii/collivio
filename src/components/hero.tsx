"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "think it.", delay: 200 },
  { text: "drop it.", delay: 420 },
  { text: "build it.", delay: 640 },
];

export default function Hero() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between px-6 pb-10 pt-32 md:px-10 md:pb-12"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center">
        <p
          className={`label-mono text-ink-soft transition-opacity duration-1000 ${
            on ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "80ms" }}
        >
          A space built by young people, for students.
        </p>

        <h1 className="mt-8 font-display uppercase leading-[0.9] tracking-[-0.01em] md:mt-12">
          {lines.map((line, i) => (
            <span key={line.text} className="hero-mask">
              <span
                className={`hero-line ${
                  on ? "hero-line-on" : ""
                }`}
                style={{
                  transitionDelay: `${line.delay}ms`,
                  fontSize: "clamp(3.4rem, 13.5vw, 11rem)",
                }}
              >
                {line.text}
                <span
                  className={
                    i === lines.length - 1
                      ? "text-accent"
                      : "text-ink"
                  }
                >
                  .
                </span>
              </span>
            </span>
          ))}
        </h1>

        <div
          className={`mt-14 flex flex-col gap-10 transition-all duration-1000 md:mt-20 md:flex-row md:items-end md:justify-between ${
            on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            A space for young people to build real projects, find real
            opportunities, and create work that speaks for itself.
          </p>

          <a
            href="#areas"
            className="group label-mono inline-flex items-center gap-3 text-ink"
          >
            <span className="link-line">Explore COLLivio</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>

      <div
        className={`mx-auto mt-20 w-full max-w-[1440px] ${on ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
        style={{ transitionDelay: "1150ms" }}
      >
        <div className="flex items-center justify-between border-t border-line pt-5">
          <span className="label-mono text-ink-soft">
            Student-built platform
          </span>
          <span className="label-mono hidden text-ink-soft md:inline">
            Think it. Drop it. Build it.
          </span>
          <span className="label-mono flex items-center gap-3 text-ink">
            Scroll
            <span className="inline-block animate-pulse">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}