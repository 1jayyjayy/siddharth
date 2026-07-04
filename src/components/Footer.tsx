import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-dark grain-dark mt-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-16 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            Colophon
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl">
            An interactive score, refreshed on every visit.
          </h3>
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-60">Studio</p>
          <p className="mt-3 text-sm leading-relaxed opacity-80">
            {site.location}
            <br />
            Available for commissions, residencies & collaborations.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-11">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-60">Channels</p>
          <ul className="mt-3 space-y-1 text-sm">
            {site.socials.slice(0, 3).map((s) => (
              <li key={s.label}>
                <a href={s.href} className="opacity-80 hover:text-copper hover:opacity-100">
                  {s.label.split("—")[0].trim()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
          <span>© {new Date().getFullYear()} Siddharth Biswas</span>
          <span className="hidden md:inline">
            Fraunces · Inter · JetBrains Mono
          </span>
          <Link to="/" className="hover:text-copper">Return to index →</Link>
        </div>
      </div>
    </footer>
  );
}
