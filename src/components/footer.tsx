import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-16 md:px-10 md:pt-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl uppercase tracking-wide md:text-4xl">
              COLLivio
            </p>
            <p className="label-mono mt-4 text-ink-soft">
              Think it. Drop it. Build it.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="label-mono text-ink">The platform</p>
            <nav className="mt-5 flex flex-col gap-3">
              {[
                { label: "Employment Skill Bridge", href: "/employment-skill-bridge" },
                { label: "Research Hub", href: "/research-hub" },
                { label: "Media Lab", href: "/media-lab" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-line w-fit text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono text-ink">Account</p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/login"
                className="link-line w-fit text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                Log in
              </Link>
              <Link
                href="/login"
                className="link-line w-fit text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                Join COLLivio
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label-mono text-ink-soft">
            © 2026 COLLivio. Built by young people.
          </p>
          <a
            href="#top"
            className="group label-mono inline-flex items-center gap-3 text-ink"
          >
            <span className="link-line">Back to top</span>
            <span className="transition-transform duration-500 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}