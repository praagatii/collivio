import MaskedLine from "./masked-line";
import Reveal from "./reveal";

const items = [
  {
    meta: "Event — 12 Mar 2026",
    title: "Student startup night",
    note: "Drop an idea. Find a team.",
  },
  {
    meta: "Project — Open",
    title: "Design week × COLLivio",
    note: "Build the campus takeover.",
  },
  {
    meta: "Research — 2 seats",
    title: "Thesis on Gen Z work",
    note: "Join the paper. Split the work.",
  },
  {
    meta: "Opportunity — Paid",
    title: "Campus re-commerce build",
    note: "Ship it. Get paid. Show it.",
  },
];

export default function Activity() {
  return (
    <section id="media-preview" className="px-6 py-28 md:px-[5%] md:py-40">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label text-ink-soft">Media Lab preview</span>
            <h2 className="disp mt-8 text-[clamp(2rem,5.5vw,4.75rem)] font-extrabold">
              <MaskedLine text="What's happening." />
            </h2>
          </div>
          <a
            href="/media-lab"
            data-cur
            className="group label inline-flex items-center gap-3 font-semibold"
          >
            <span className="link-line group-hover:after:scale-x-100 group-hover:after:origin-left">
              Enter Media Lab
            </span>
            <span className="text-lg leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <a
                href="/media-lab"
                data-cur
                className="group flex h-full min-h-[200px] flex-col justify-between bg-canvas p-6 transition-colors duration-300 hover:bg-accent md:p-8"
              >
                <span className="label text-ink-soft">{item.meta}</span>
                <div>
                  <h3 className="disp text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm tracking-[-0.01em] text-ink-soft">
                    {item.note}
                  </p>
                </div>
                <span className="label mt-6 inline-flex items-center gap-3 font-semibold">
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}