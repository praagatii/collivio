"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ArrowRight, Sparkles, X, Loader2 } from "lucide-react";

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

const WallCtx = createContext<{ openWall: (target?: string) => void } | null>(null);

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
  const [mode, setMode] = useState<"login" | "signup">("login");

  // Intercept every landing CTA that used to navigate to /login or /signup.
  // One listener, capture phase => no second nav, no separate page, no leak of
  // other pages from the landing. Opens the in-place overlay instead.
  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      const a = (ev.target as Element | null)?.closest?.('a[href^="/login"], a[href^="/signup"]');
      if (!a) return;
      ev.preventDefault();
      ev.stopPropagation();
      const href = a.getAttribute("href") ?? "";
      setMode(href.startsWith("/signup") ? "signup" : "login");
      setOpen(true);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  const openWall = useCallback((target?: string) => {
    setMode(target === "signup" ? "signup" : "login");
    setOpen(true);
  }, []);

  return (
    <WallCtx.Provider value={{ openWall }}>
      {children}
      <SignInWall
        open={open}
        mode={mode}
        onSwitch={() => setMode((m) => (m === "login" ? "signup" : "login"))}
        onClose={() => setOpen(false)}
      />
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
  mode,
  onSwitch,
  onClose,
}: {
  open: boolean;
  mode: "login" | "signup";
  onSwitch: () => void;
  onClose: () => void;
}) {
  const { signIn } = useAuth();
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // ESC closes
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [open, onClose]);

  // reset transient state each open
  useEffect(() => {
    if (open) {
      setErr("");
      setPw("");
    }
  }, [open, mode]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const em = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(em)) return setErr("Enter a valid email address.");
    if (pw.length < 6) return setErr("Password must be at least 6 characters.");
    setBusy(true);
    setErr("");
    try {
      // establish the server session cookie => middleware lets the pillars through
      await fetch("/api/auth", { method: "POST" });
      const first = name.trim() || em.split("@")[0];
      signIn({
        name: first,
        firstName: (first.split(" ")[0] || first).replace(/^\w/, (c) => c.toUpperCase()),
        role: "student",
        email: em,
        avatar: "",
        profileHref: "/profile",
      });
      onClose();
      router.push("/people");
    } catch {
      setErr("Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] grid place-items-center bg-navy/40 px-5 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 28, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[1.75rem] border border-pine/10 bg-cream p-8 shadow-[0_24px_80px_-20px_rgba(22,19,14,0.4)] md:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              data-cur
              aria-label="Close"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-pine/15 text-navy/60 transition-colors hover:border-pine hover:text-navy"
            >
              <X size={16} />
            </button>

            {/* logo */}
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-[0.8rem] bg-navy text-cream">
                <span className="font-display text-lg font-bold">C</span>
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-navy">Collivio</span>
            </div>

            <h2 className="font-display mt-7 text-3xl font-semibold leading-tight text-navy md:text-4xl">
              Welcome to<BrWithPeriod />
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Connect with people, ideas and spaces.
            </p>

            <form onSubmit={submit} className="mt-7 grid gap-3">
              {mode === "signup" && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-pine/15 bg-white/70 px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-pine"
                />
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="w-full rounded-2xl border border-pine/15 bg-white/70 px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-pine"
              />
              <input
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                className="w-full rounded-2xl border border-pine/15 bg-white/70 px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-pine"
              />

              {err && <p className="text-xs font-medium text-coral">{err}</p>}

              <button
                type="submit"
                disabled={busy}
                data-cur
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy disabled:opacity-60"
              >
                {busy ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
                {mode === "login" ? "Log in" : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-navy/60">
              {mode === "login" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button type="button" onClick={onSwitch} data-cur className="font-semibold text-coral hover:text-navy">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button type="button" onClick={onSwitch} data-cur className="font-semibold text-coral hover:text-navy">
                    Log in
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BrWithPeriod() {
  return (
    <>
      <br />
      Collivio<span className="text-coral">.</span>
    </>
  );
}