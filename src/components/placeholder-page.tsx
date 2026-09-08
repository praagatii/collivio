import MaskedLine from "./masked-line";
import Reveal from "./reveal";
import type { ReactNode } from "react";

type PlaceholderPageProps = {
  eyebrow: string;
  leading: string;
  trailing: string;
  blurb: ReactNode;
};

export default function PlaceholderPage({
  eyebrow,
  leading,
  trailing,
  blurb,
}: PlaceholderPageProps) {
  return (
    <main className="flex min-h-svh flex-col justify-center px-6 py-32 md:px-[9%]">
      <div className="mx-auto w-full max-w-[1100px]">
        <span className="label text-ink-soft">{eyebrow}</span>
        <h1 className="disp mt-8 font-extrabold">
          <MaskedLine
            text={leading}
            className="block text-[clamp(2.8rem,8vw,7.5rem)]"
          />
          <MaskedLine
            text={trailing}
            delay={140}
            className="block text-[clamp(2.8rem,8vw,7.5rem)]"
          />
        </h1>
        <Reveal delay={300}>
          <div className="mt-12 max-w-md">
            <div className="h-px w-full bg-line" />
            <p className="mt-5 text-base leading-[1.35] tracking-[-0.01em] text-ink-soft md:text-lg">
              {blurb}
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}