"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { X } from "lucide-react";

export type NavKind = "project" | "research" | "profile" | "company" | "default";

type NavTarget = {
  href: string;
  kind: NavKind;
  image?: string;
  title?: string;
};

type AppUser = {
  name: string;
  firstName: string;
  role: "student" | "company";
  email: string;
  avatar: string;
  profileHref: string;
  companyId?: string;
};

const AuthCtx = createContext<{
  user: AppUser | null;
  isAuthed: boolean;
  signIn: (u: AppUser) => void;
  signOut: () => void;
} | null>(null);

const NavCtx = createContext<{
  pending: NavTarget | null;
  setPending: (t: NavTarget) => void;
} | null>(null);

const WallCtx = createContext<{
  openWall: (target?: string) => void;
} | null>(null);

const KEY = "collivio_user";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <NavProvider>
        <AuthProvider>
          <WallProvider>{children}</WallProvider>
        </AuthProvider>
      </NavProvider>
    </MotionConfig>
  );
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) setUser(JSON.parse(raw) as AppUser);
      } catch {
        /* ignore */
      }
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  const signIn = useCallback((u: AppUser) => {
    setUser(u);
    try {
      localStorage.setItem(KEY, JSON.stringify(u));
    } catch {
      /* ignore */
    }
  }, []);
  const signOut = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  }, []);
  return (
    <AuthCtx.Provider value={{ user, isAuthed: !!user, signIn, signOut }}>
      {children}
    </AuthCtx.Provider>
  );
}

function NavProvider({ children }: { children: React.ReactNode }) {
  const [pending, setPending] = useState<NavTarget | null>(null);
  return (
    <NavCtx.Provider value={{ pending, setPending }}>{children}</NavCtx.Provider>
  );
}

function WallProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState<string | undefined>();
  const openWall = useCallback((t?: string) => {
    setTarget(t);
    setOpen(true);
  }, []);
  return (
    <WallCtx.Provider value={{ openWall }}>
      {children}
      <SignInWall open={open} target={target} onClose={() => setOpen(false)} />
    </WallCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth outside provider");
  return ctx;
}

export function useNav() {
  const ctx = useContext(NavCtx);
  if (!ctx) throw new Error("useNav outside provider");
  return ctx;
}

export function useWall() {
  const ctx = useContext(WallCtx);
  if (!ctx) throw new Error("useWall outside provider");
  return ctx;
}

function SignInWall({
  open,
  target,
  onClose,
}: {
  open: boolean;
  target?: string;
  onClose: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const action = target ?? "build";
  const next = pathname ? `?next=${encodeURIComponent(pathname)}` : "";
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-deep/40 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 32, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-md border border-line bg-canvas p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              data-cur
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft hover:border-ink hover:text-ink"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="label flex items-center gap-2 text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              TO {action.toUpperCase()}
            </div>
            <h2 className="disp mt-4 text-3xl text-ink">
              You&apos;re
              <br /> almost in.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Create a COLLIVIO account to start building. Your profile becomes
              your application — no forms, no fuss.
            </p>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                data-cur
                onClick={() => router.push(`/signup?role=student${next}`)}
                className="inline-flex items-center justify-center bg-deep px-6 py-3.5 label text-canvas transition-colors hover:bg-ink"
              >
                I&apos;M A STUDENT
              </button>
              <button
                type="button"
                data-cur
                onClick={() => router.push(`/signup?role=company${next}`)}
                className="inline-flex items-center justify-center border border-accent px-6 py-3.5 label text-accent transition-colors hover:bg-accent hover:text-canvas"
              >
                I&apos;M A COMPANY
              </button>
            </div>
            <p className="mt-5 text-center">
              <Link href={`/login${next}`} data-cur className="label link-line text-ink">
                ALREADY HAVE AN ACCOUNT? LOG IN →
              </Link>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}