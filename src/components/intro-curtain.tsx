"use client";

import { useEffect, useState } from "react";

export default function IntroCurtain() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[999] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        gone ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        height: "140vh",
        background: "linear-gradient(to bottom, #f7f1ed 50%, #242424 50%)",
      }}
    />
  );
}