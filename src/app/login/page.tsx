"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/primitives";
import { useAuth } from "@/components/providers";
import { students } from "@/data/mock";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const { signIn } = useAuth();
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/profile";
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const demo = students[0];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn({
      name: demo.name,
      firstName: demo.firstName,
      role: "student",
      email: email || "mira@collivio.in",
      avatar: demo.avatar,
      profileHref: "/profile",
    });
    setDone(true);
    setTimeout(() => router.push(next), 450);
  };

  return (
    <div className="mx-auto grid min-h-[70vh] max-w-[1200px] place-items-center px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="label flex items-center gap-2 text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          WELCOME BACK
        </div>
        <h1 className="disp mt-4 text-3xl text-ink md:text-4xl">
          LOG IN
          <br />
          TO COLLIVIO.
        </h1>

        {done && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center gap-2 border border-accent bg-accent-soft px-4 py-3"
          >
            <CheckCircle2 size={16} className="text-accent" />
            <span className="label text-accent">IN — REDIRECTING YOU…</span>
          </motion.div>
        )}

        <form onSubmit={submit} className="mt-6 space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
          />
          <input
            type="password"
            placeholder="Password"
            defaultValue="anything-works-here"
            required
            className="w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
          />
          <Button type="submit" variant="deep" className="w-full">
            LOG IN <ArrowUpRight size={14} />
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-ink-soft">
          Demo mode — any email and password work. You&apos;ll sign in as{" "}
          {demo.name}.
        </p>
        <p className="mt-6 text-center">
          <Link href="/signup" data-cur className="label link-line text-ink">
            NEW HERE? CREATE AN ACCOUNT →
          </Link>
        </p>
      </motion.div>
    </div>
  );
}