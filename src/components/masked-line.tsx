"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type MaskedLineProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  auto?: boolean;
  trigger?: boolean;
};

export default function MaskedLine({
  text,
  className = "",
  delay = 0,
  stagger = 55,
  auto = true,
  trigger = false,
}: MaskedLineProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [autoUp, setAutoUp] = useState(false);

  useEffect(() => {
    if (!auto) return;
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const t = setTimeout(() => setAutoUp(true), delay + 100);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAutoUp(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [auto, delay]);

  const up = auto ? autoUp : trigger;
  const units = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text} role="text">
      {units.map((unit, i) => (
        <Fragment key={`${unit}-${i}`}>
          <span className="mask-box">
            <span
              className={`mask-inner ${up ? "is-up" : ""}`}
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
            >
              {unit}
            </span>
          </span>
          {i < units.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  );
}