"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useNav } from "@/components/providers";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AnimatedRoutes({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: EASE }}
    >
      {children}
    </motion.main>
  );
}

export function TransitionBar() {
  const pathname = usePathname();
  const { pending } = useNav();
  const carry = pending && pending.href === pathname;
  const key = carry ? `${pathname}-${pending.kind}` : pathname;
  return (
    <Wipe
      key={key}
      kind={carry ? pending.kind : "default"}
      image={carry ? pending.image : undefined}
      title={carry ? pending.title : undefined}
    />
  );
}

function Wipe({
  kind,
  image,
  title,
}: {
  kind: "project" | "research" | "profile" | "company" | "default";
  image?: string;
  title?: string;
}) {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  const label =
    kind === "research"
      ? "OPEN RESEARCH"
      : kind === "company"
        ? "COMPANY"
        : kind === "profile"
          ? "PROFILE"
          : kind === "project"
            ? "PROJECT"
            : "COLLIVIO";
  const bg =
    kind === "research"
      ? "bg-accent"
      : kind === "project"
        ? "bg-deep"
        : "bg-canvas";
  const light = kind === "research" || kind === "project";

  if (phase === "gone") return null;

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-[70] flex items-center justify-center ${bg}`}
      variants={{
        hidden: { clipPath: "inset(100% 0 0 0)" },
        shown: { clipPath: "inset(0 0 0 0)" },
        away: { clipPath: "inset(0 0 100% 0)" },
      }}
      initial="hidden"
      animate={phase === "in" ? "shown" : "away"}
      transition={{ duration: phase === "in" ? 0.34 : 0.42, ease: EASE }}
      onAnimationComplete={() => setPhase((p) => (p === "in" ? "out" : "gone"))}
    >
      <motion.div
        initial={{ y: 26, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.28, delay: 0.04, ease: EASE }}
        className="flex flex-col items-center gap-4 px-6 text-center"
      >
        {kind === "project" && image && (
          <motion.img
            src={image}
            alt=""
            className="aspect-square w-24 rounded-full object-cover"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.26, delay: 0.08, ease: EASE }}
          />
        )}
        <span className={`label ${light ? "text-canvas/80" : "text-ink-soft"}`}>
          {label}
        </span>
        {title ? (
          <span className={`disp text-2xl ${light ? "text-canvas" : "text-ink"}`}>
            {title}
          </span>
        ) : (
          <span className={`disp text-4xl ${light ? "text-canvas" : "text-ink"}`}>
            COLLIVIO
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}