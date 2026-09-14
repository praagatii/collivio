"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false as boolean);
  const [hidden, setHidden] = useState(false as boolean);

  useEffect(() => {
    let minTimer: ReturnType<typeof setTimeout>;
    const finish = () => {
      setDone(true);
      setTimeout(() => setHidden(true), 500);
    };
    const min = new Promise<number>((r) => {
      minTimer = setTimeout(() => r(0), 1800);
    });
    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((r) =>
            window.addEventListener("load", () => r(), { once: true }),
          );
    Promise.all([min, loaded]).then(finish);
    const safe = setTimeout(finish, 8000);
    return () => {
      clearTimeout(minTimer);
      clearTimeout(safe);
    };
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[999] grid place-items-center bg-paper transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/loadingvid.mp4"
        className="h-screen w-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
