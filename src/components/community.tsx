import MaskedLine from "./masked-line";
import Reveal from "./reveal";

export default function Community() {
  return (
    <section className="px-6 py-28 md:px-[5%] md:py-44">
      <div className="mx-auto w-full max-w-[1200px]">
        <span className="label text-ink-soft">Founded by four young women</span>
        <h2 className="disp mt-8 font-extrabold">
          <MaskedLine
            text="Built by young people."
            className="block text-[clamp(2.4rem,6.8vw,6.25rem)]"
          />
          <MaskedLine
            text="For what comes next."
            delay={180}
            className="block text-[clamp(2.4rem,6.8vw,6.25rem)]"
          />
        </h2>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-2" />
          <Reveal className="md:col-span-5">
            <div className="h-px w-full bg-line" />
            <p className="mt-5 text-base leading-[1.35] tracking-[-0.01em] text-ink-soft md:text-lg">
              COLLivio was founded by four young women who wanted a space where
              students could start building real-world experience earlier. What
              began as an idea among friends is becoming a home for ambitious
              students everywhere.
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-3 md:col-start-9">
            <div className="h-px w-full bg-line" />
            <p className="mt-5 text-sm leading-[1.35] tracking-[-0.01em] text-ink-soft md:text-base">
              Built for the students tired of waiting to start. Built for the
              companies looking for people who actually do.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}