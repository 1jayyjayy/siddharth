import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { researchAreas, researchLinks } from "@/data/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Siddharth Biswas" },
      { name: "description", content: "An archive of research areas — gesture, EEG, camera tracking, interactive systems, sound, embodiment." },
      { property: "og:title", content: "Research — Siddharth Biswas" },
      { property: "og:description", content: "Research areas, mapped as an archive." },
    ],
  }),
  component: Research,
});

function Research() {
  const root = useReveal();
  const byId = Object.fromEntries(
    researchAreas.map((r, i) => {
      const a = (i / researchAreas.length) * Math.PI * 2 - Math.PI / 2;
      return [r.id, { ...r, x: 50 + Math.cos(a) * 32, y: 50 + Math.sin(a) * 32 }];
    }),
  );

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      {/* Header */}
      <section className="grain relative pt-36 pb-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-8 md:col-start-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Volume II — Research archive
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.92]">
              Six threads.<br />
              <span className="italic font-light">One practice.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              A working index of the areas that make up my PhD research and
              performance practice. Each entry is short by design — the long
              form lives in the projects.
            </p>
          </div>
        </div>
      </section>

      {/* Diagram */}
      <section className="grain relative pb-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
              Fig. 02
            </p>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              Field diagram. Copper edges mark the working relationships between
              areas. It is a map, not a taxonomy — the lines move.
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 reveal" data-reveal-delay="120">
            <div className="relative aspect-[4/3] w-full border border-espresso/15 bg-bone-2">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                {researchLinks.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={byId[a].x} y1={byId[a].y}
                    x2={byId[b].x} y2={byId[b].y}
                    stroke="rgba(184,121,75,0.7)"
                    strokeWidth="0.2"
                    strokeDasharray="0.6 0.9"
                  />
                ))}
                {Object.values(byId).map((n) => (
                  <g key={n.id}>
                    <circle cx={n.x} cy={n.y} r="1.4" fill="#B8794B" />
                    <circle cx={n.x} cy={n.y} r="4" fill="none" stroke="rgba(20,16,13,0.2)" strokeWidth="0.15" />
                  </g>
                ))}
              </svg>
              {Object.values(byId).map((n) => (
                <div
                  key={n.id}
                  className="absolute -translate-x-1/2 translate-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {n.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Index cards */}
      <section className="grain relative pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          {researchAreas.map((r, i) => (
            <article
              key={r.id}
              className={[
                "card-artifact reveal p-6 md:p-8 aspect-[3/4] flex flex-col justify-between",
                "col-span-12 sm:col-span-6 md:col-span-4",
                i % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-4",
              ].join(" ")}
              data-reveal-delay={String(i * 60)}
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
                  Card {String(i + 1).padStart(2, "0")} / {String(researchAreas.length).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-4xl">{r.label}</h3>
                <div className="mt-4 h-px w-16 bg-copper" />
                <p className="mt-6 text-sm leading-relaxed text-espresso">{r.note}</p>
              </div>
              <div className="mt-6 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                <span>ref. {r.id}</span>
                <span>volume II</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
