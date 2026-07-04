import { createFileRoute } from "@tanstack/react-router";
import { GestureCanvas } from "@/components/GestureCanvas";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Siddharth Biswas" },
      { name: "description", content: "Direct contact and public channels — commissions, residencies, and collaborations." },
      { property: "og:title", content: "Contact — Siddharth Biswas" },
      { property: "og:description", content: "Direct contact and public channels." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const root = useReveal();
  const instruments = site.socials.filter((s) => s.kind === "instrument");
  const channels = site.socials.filter((s) => s.kind === "channel");

  return (
    <div ref={root} className="min-h-screen section-dark grain-dark relative overflow-hidden">
      <GestureCanvas tone="dark" density={0.5} className="absolute inset-0 h-full w-full opacity-70" />
      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pt-40 pb-24 md:px-10">
        <div className="col-span-12 md:col-span-3 reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            Coda
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            Direct & minimal
          </p>
        </div>
        <div className="col-span-12 md:col-span-9 reveal" data-reveal-delay="80">
          <h1 className="font-display text-[clamp(2.8rem,10vw,8rem)] leading-[0.9] text-bone">
            Write, or<br />
            <span className="italic font-light">tune in.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-bone/75">
            For commissions, residencies, PhD conversations, or just to send a
            recording — email is the fastest way. The channels below are for
            the public archive.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-baseline gap-3 border-b border-copper pb-2 font-display text-2xl md:text-3xl text-bone hover:text-copper transition-colors"
          >
            {site.email}
            <span className="font-mono text-xs uppercase tracking-[0.24em]">→</span>
          </a>
        </div>
      </div>

      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pb-32 md:px-10">
        <div className="col-span-12 md:col-span-6 reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            Instruments — public output
          </p>
          <ul className="mt-6">
            {instruments.map((s, i) => (
              <li key={s.href} className="reveal" data-reveal-delay={String(i * 80)}>
                <a
                  href={s.href}
                  className="group flex items-baseline justify-between gap-4 border-t border-white/12 py-6 text-bone hover:text-copper transition-colors"
                >
                  <span className="font-display text-2xl md:text-3xl">{s.label}</span>
                  <span className="hidden md:inline font-mono text-[11px] uppercase tracking-[0.22em] opacity-60 group-hover:opacity-100">
                    {s.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8 reveal" data-reveal-delay="120">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            Channels — research & correspondence
          </p>
          <ul className="mt-6">
            {channels.map((s, i) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="group flex items-baseline justify-between gap-4 border-t border-white/12 py-6 text-bone hover:text-copper transition-colors"
                >
                  <span className="font-display text-xl">{s.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 border border-white/12 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
              Currently
            </p>
            <p className="mt-3 text-bone/85 leading-relaxed">
              Based in {site.location}. Accepting a small number of
              commissions and collaborations for the coming season.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
