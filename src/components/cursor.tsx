"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHover(Boolean(target?.closest("a, button, [data-cur]")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[500] rounded-full border transition-[width,height,background-color,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hover
          ? "h-14 w-14 border-ink bg-accent opacity-100"
          : "h-10 w-10 border-ink/50 opacity-0"
      }`}
    />
  );
}