import Navigation from "./navigation";
import Footer from "./footer";
import Reveal from "./reveal";
import type { ReactNode } from "react";

type PlaceholderPageProps = {
  eyebrow: string;
  leading: string;
  trailing: string;
  blurb: ReactNode;
  ctaLabel: string;
  ctaHref: string;
};

export default function PlaceholderPage({
  eyebrow,
  leading,
  trailing,
  blurb,
  ctaLabel,
  ctaHref,
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <Navigation />
      <main className="flex flex-1 flex-col justify-center px-6 pt-32 md:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal>
            <p className="label-mono text-ink-soft">{eyebrow}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-[clamp(2.8rem,8vw,7.5rem)] uppercase leading-[0.92] tracking-[-0.01em]">
              {leading}
              <br />
              {trailing}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 max-w-md">
              <div className="h-px w-full bg-line" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                {blurb}
              </p>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-14">
              <a
                href={ctaHref}
                className="group label-mono inline-flex items-center gap-3 text-ink"
              >
                <span className="link-line">{ctaLabel}</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}