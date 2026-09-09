import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
      <div>
        <div className="disp text-6xl text-accent">404</div>
        <h1 className="disp mt-4 text-3xl text-ink">MISSED THE ROOM.</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          This page does not exist on COLLIVIO — but the platform does. Start
          from somewhere real.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" data-cur className="inline-flex items-center gap-2 bg-deep px-6 py-3.5 label text-canvas transition-colors hover:bg-ink">
            BACK TO HOME
          </Link>
          <Link href="/media-lab" data-cur className="inline-flex items-center gap-2 border border-line px-6 py-3.5 label text-ink transition-colors hover:border-ink">
            EXPLORE MEDIA LAB
          </Link>
        </div>
      </div>
    </div>
  );
}