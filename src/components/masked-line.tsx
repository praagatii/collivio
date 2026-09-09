"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type MaskedLineProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  auto?: boolean;
  trigger?: boolean;
  highlightUnit?: number;
  accentUnit?: number;
};

export default function MaskedLine({
  text,
  className = "",
  delay = 0,
  stagger = 55,
  auto = true,
  trigger = false,
  highlightUnit,
  accentUnit,
}: MaskedLineProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [autoUp, setAutoUp] = useState(false);

  useEffect(() => {
    if (!auto) return;
    const el = ref.current;
    if (!el) return;

    const release = () => setAutoUp(true);
    let nearViewportSafety: ReturnType<typeof setTimeout> | undefined;

    if (!("IntersectionObserver" in window)) {
      const t = setTimeout(release, delay + 120);
      return () => {
        clearTimeout(t);
        clearTimeout(nearViewportSafety);
      };
    }

    const near = el.getBoundingClientRect().top < window.innerHeight * 1.15;
    if (near) {
      nearViewportSafety = setTimeout(release, 2800);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            release();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(nearViewportSafety);
    };
  }, [auto, delay]);

  const up = auto ? autoUp : trigger;
  const units = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text} role="text">
      {units.map((unit, i) => {
        const highlighted = i === highlightUnit;
        const accented = i === accentUnit;
        return (
          <Fragment key={`${unit}-${i}`}>
            <span className="mask-box">
              <span
                className={`mask-inner ${up ? "is-up" : ""} ${
                  accented ? "text-blue" : ""
                }`}
                style={{ transitionDelay: `${delay + i * stagger}ms` }}
              >
                {highlighted ? (
                  <span
                    className="inline-block bg-accent px-2 pb-0.5 pt-0 text-ink md:px-3"
                    style={{ boxDecorationBreak: "clone" }}
                  >
                    {unit}
                  </span>
                ) : (
                  unit
                )}
              </span>
            </span>
            {i < units.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </span>
  );
}