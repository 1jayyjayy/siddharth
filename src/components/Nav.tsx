import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/performances", label: "Performances" },
  { to: "/writings", label: "Writings" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 24);
  //   onScroll();
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
  className="
    fixed inset-x-0 top-0 z-40
    bg-bone/80
    backdrop-blur-lg
    border-b border-black/5
    text-espresso
    transition-all duration-500
  "
>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-4 px-6 py-4 md:px-10">
        <Link to="/" className="col-span-6 md:col-span-3 flex items-baseline gap-3 min-w-0">
          <span className="font-display text-lg leading-none tracking-tight">
            Siddharth Biswas
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] opacity-60 md:inline">
            Op. site — 001
          </span>
        </Link>

        <nav className="col-span-9 hidden md:flex md:justify-end">
          <ul className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em]">
            {items.map((it) => {
              const active =
                it.to === "/"
                  ? pathname === "/"
                  : pathname === it.to || pathname.startsWith(it.to + "/");
              return (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    className="group relative inline-flex items-center gap-2 py-1"
                  >
                    <span
                      className={[
                        "h-[6px] w-[6px] rounded-full transition-colors",
                        active ? "bg-copper" : "bg-current opacity-25 group-hover:opacity-70",
                      ].join(" ")}
                    />
                    <span className={active ? "opacity-100" : "opacity-70 group-hover:opacity-100"}>
                      {it.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="col-span-6 flex justify-end md:hidden"
          aria-label="Toggle menu"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color-mix(in_oklab,var(--espresso)_10%,transparent)] bg-bone">
          <ul className="mx-auto grid max-w-[1440px] grid-cols-1 gap-1 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-espresso">
            {items.map((it) => (
              <li key={it.to}>
                <Link to={it.to} className="block py-2">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
