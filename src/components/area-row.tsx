import MaskedLine from "./masked-line";

type Area = {
  index: string;
  name: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type { Area };

export default function AreaRow({ area }: { area: Area }) {
  return (
    <div className="border-t border-line">
      <a href={area.href} data-cur className="group block px-6 py-14 md:px-[5%] md:py-20">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="flex items-baseline justify-between">
            <span className="label text-ink-soft">0{area.index}</span>
            <span className="label text-right text-ink-soft transition-colors duration-300 group-hover:text-ink">
              {area.name}
            </span>
          </div>

          <div className="mt-8 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-4 md:mt-10">
            <MaskedLine
              text={area.title}
              className="disp block text-[clamp(2.4rem,6.2vw,5.75rem)] font-extrabold"
            />
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-base leading-[1.3] tracking-[-0.01em] text-ink-soft">
              {area.description}
            </p>
            <span className="label inline-flex items-center gap-3 font-semibold">
              <span className="link-line group-hover:after:scale-x-100 group-hover:after:origin-left">
                {area.cta}
              </span>
              <span className="text-lg leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                →
              </span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}