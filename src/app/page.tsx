import Link from "next/link";
import {
  Ticker,
  Hero,
  Ecosystem,
  Opportunities,
  ResearchShow,
  HowItWorks,
  Skills,
  FinalCta,
} from "@/components/home";
import { ProfileCard } from "@/components/cards";
import { Arrow, Button } from "@/components/primitives";
import { students } from "@/data/mock";

export default function Home() {
  return (
    <div>
      <Ticker />
      <Hero />
      <Ecosystem />
      <Opportunities />
      <HowItWorks />
      <ResearchShow />
      <Skills />

      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              href="/profile"
              data-cur
              className="inline-flex items-center gap-2 rounded-full bg-community px-4 py-1.5 label text-white"
            >
              THE COMMUNITY
            </Link>
            <h2
              className="disp mt-4 text-ink"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)" }}
            >
              THE BUILDERS.
            </h2>
          </div>
          <Button href="/profile" variant="community">
            MEET EVERYONE <Arrow />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {students.slice(0, 6).map((s) => (
            <ProfileCard key={s.id} student={s} big />
          ))}
        </div>
      </section>

      <FinalCta />
    </div>
  );
}