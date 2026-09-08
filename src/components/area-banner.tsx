import Reveal from "./reveal";

type Area = {
  index: string;
  name: string;
  title: string[];
  description: string;
  cta: string;
  href: string;
  align?: "right";
};

export type { Area };

export default function AreaBanner({ area }: { area: Area }) {
  const right = area.align === "right";

  return (
    <Reveal>
      <div className="border-t border-line">
        <a href={area.href} className="group block">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-24">
            <div
              className={`flex flex-col justify-between gap-10 md:col-span-4 ${
                right ? "md:order-2 md:pt-2" : ""
              }`}
            >
              <p className="label-mono leading-6 text-ink-soft">
                {area.index} / {area.name}
              </p>

              <div>
                <p className="max-w-xs text-sm leading-relaxed text-ink-soft md:text-base">
                  {area.description}
                </p>
                <p className="label-mono mt-8 inline-flex items-center gap-3 text-ink">
                  <span className="link-line group-hover:after:scale-x-100 group-hover:after:origin-left">
                    {area.cta}
                  </span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </p>
              </div>
            </div>

            <div
              className={`md:col-span-8 ${
                right
                  ? "md:order-1 md:text-left"
                  : "md:pl-8 md:text-left"
              }`}
            >
              <h3 className="font-display text-[clamp(2.8rem,7.5vw,6.75rem)] uppercase leading-[0.92] tracking-[-0.01em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                {area.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        </a>
      </div>
    </Reveal>
  );
}