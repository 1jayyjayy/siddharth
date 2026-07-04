import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { performances } from "@/data/site";

export const Route = createFileRoute("/performances")({
  head: () => ({
    meta: [
      { title: "Performances — Siddharth Biswas" },
      { name: "description", content: "A chronological archive of recent and upcoming performances." },
      { property: "og:title", content: "Performances — Siddharth Biswas" },
      { property: "og:description", content: "Chronological archive of recent and upcoming performances." },
    ],
  }),
  component: Performances,
});

function Performances() {
  const root = useReveal();
  const fmt = (d: string) => new Date(d).toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      <section className="grain pt-36 pb-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Programme notes
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              {performances.length} dates
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 reveal" data-reveal-delay="80">
            <h1 className="font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.9]">
              Performances,<br />
              <span className="italic font-light">by date.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="grain pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <ol className="space-y-0">
            {performances.map((p, i) => (
              <li
                key={i}
                className={[
                  "reveal grid grid-cols-12 gap-6 border-t border-espresso/15 py-10 md:py-14 group",
                  i === 0 ? "border-t-0" : "",
                ].join(" ")}
                data-reveal-delay={String(i * 60)}
              >
                <div className={`col-span-12 md:col-span-2 ${i % 2 === 0 ? "" : "md:col-start-1"}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">
                    {fmt(p.date)}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                    {p.city}
                  </p>
                </div>

                <div className={`col-span-12 md:col-span-6 ${i % 2 === 0 ? "" : "md:col-start-7 md:-order-none order-3"}`}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/60">
                    {p.venue}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-ink-soft leading-relaxed">
                    {p.note}
                  </p>
                </div>

                <div className={`col-span-12 md:col-span-4 ${i % 2 === 0 ? "md:col-start-9" : "md:col-start-3 md:row-start-1"}`}>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={p.image}
                      alt=""
                      className="h-full w-full object-cover grayscale-[35%] transition-[transform,filter] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
                      documentation
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}
