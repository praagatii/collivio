"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useNav } from "@/components/providers";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AnimatedRoutes({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.32, ease: EASE }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export function TransitionBar() {
  const pathname = usePathname();
  const { pending } = useNav();
  const key =
    pending && pending.href === pathname
      ? `${pathname}-${pending.kind}`
      : pathname;
  return (
    <AnimatePresence mode="popLayout">
      <Wipe key={key} kind={pending && pending.href === pathname ? pending.kind : "default"} image={pending && pending.href === pathname ? pending.image : undefined} title={pending && pending.href === pathname ? pending.title : undefined} />
    </AnimatePresence>
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
  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-[70] flex items-center justify-center ${bg}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(100% 0 0 0)" }}
      transition={{ duration: 0.34, ease: EASE }}
    >
      <motion.div
        initial={{ y: 26, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3, delay: 0.06, ease: EASE }}
        className="flex flex-col items-center gap-4 px-6 text-center"
      >
        {image && "project" === kind && (
          <motion.img
            src={image}
            alt=""
            className="aspect-square w-24 rounded-full object-cover"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
          />
        )}
        <span className={`label ${kind === "research" || kind === "project" ? "text-canvas/80" : "text-ink-soft"}`}>
          {label}
        </span>
        {title && (
          <span className={`disp text-2xl ${kind === "research" || kind === "project" ? "text-canvas" : "text-ink"}`}>
            {title}
          </span>
        )}
        {!title && (
          <span className={`disp text-4xl ${kind === "research" || kind === "project" ? "text-canvas" : "text-ink"}`}>
            COLLIVIO
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}