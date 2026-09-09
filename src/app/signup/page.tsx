"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/primitives";
import { useAuth } from "@/components/providers";
import { students } from "@/data/mock";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <Suspense>
      <SignupInner />
    </Suspense>
  );
}

function SignupInner() {
  const { signIn } = useAuth();
  const router = useRouter();
  const sp = useSearchParams();
  const role = sp.get("role") === "company" ? "company" : "student";
  const next = sp.get("next") || (role === "company" ? "/employment-skill-bridge" : "/profile");
  const [stage, setStage] = useState(role);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");

  const whichStage = stage === "company" ? "company" : "student";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whichStage === "student") {
      const demo = students[1];
      signIn({
        name: demo.name,
        firstName: demo.firstName,
        role: "student",
        email: `${(name || "student").toLowerCase().replace(/\s+/g, ".")}@collivio.in`,
        avatar: demo.avatar,
        profileHref: "/profile",
      });
    } else {
      signIn({
        name: (name || "NORTHSTAR STUDIO").toUpperCase(),
        firstName: (name || "Northstar Studio").split(" ")[0],
        role: "company",
        email: `${(name || "northstar").toLowerCase().replace(/\s+/g, ".")}@company.in`,
        avatar: students[0].avatar,
        profileHref: "/company/northstar",
        companyId: "northstar",
      });
    }
    router.push(next);
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
          ONE ACCOUNT, TWO SIDES
        </div>
        <h1 className="disp mt-4 text-3xl text-ink md:text-4xl">
          YOU&apos;RE
          <br />
          ALMOST IN.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Pick how you want to build on COLLIVIO.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            data-cur
            onClick={() => setStage("student")}
            className={`border px-4 py-4 text-left label transition-colors duration-300 ${
              whichStage === "student" ? "border-ink bg-ink text-canvas" : "border-line text-ink-soft hover:border-ink"
            }`}
          >
            I&apos;M A STUDENT
            <span className={`mt-1 block text-[11px] ${whichStage === "student" ? "text-canvas/70" : "text-ink-soft/70"}`}>
              Find projects &amp; research
            </span>
          </button>
          <button
            type="button"
            data-cur
            onClick={() => setStage("company")}
            className={`border px-4 py-4 text-left label transition-colors duration-300 ${
              whichStage === "company" ? "border-ink bg-ink text-canvas" : "border-line text-ink-soft hover:border-ink"
            }`}
          >
            I&apos;M A COMPANY
            <span className={`mt-1 block text-[11px] ${whichStage === "company" ? "text-canvas/70" : "text-ink-soft/70"}`}>
              Post projects &amp; scout
            </span>
          </button>
        </div>

        <form onSubmit={submit} className="mt-6 space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={whichStage === "student" ? "Your name" : "Company name"}
            required
            className="w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
          />
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder={whichStage === "student" ? "Top skill (e.g. Figma, Research)" : "Industry"}
            className="w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-ink"
          />
          <Button type="submit" variant="accent" className="w-full">
            CREATE ACCOUNT <ArrowUpRight size={14} />
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-ink-soft">
          Demo mode — data never leaves your browser.
        </p>
        <p className="mt-6 text-center">
          <Link href="/login" data-cur className="label link-line text-ink">
            ALREADY HAVE AN ACCOUNT? LOG IN →
          </Link>
        </p>
      </motion.div>
    </div>
  );
}