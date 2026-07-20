import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { performances } from "@/data/site";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/performances/")({
  head: () => ({
    meta: [
      { title: "Performances — Siddharth Biswas" },
      {
        name: "description",
        content: "A chronological archive of recent and upcoming performances.",
      },
      { property: "og:title", content: "Performances — Siddharth Biswas" },
      {
        property: "og:description",
        content: "Chronological archive of recent and upcoming performances.",
      },
    ],
  }),
  component: Performances,
});

function Performances() {
  const root = useReveal();
  const fmt = (d: string) =>
    new Date(d).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

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
          <div
            className="col-span-12 md:col-span-8 reveal"
            data-reveal-delay="80"
          >
            <h1 className="font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.9]">
              Performances,
              <br />
              <span className="italic font-light">by date.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="grain pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <ol className="space-y-0">
            <li
              className="reveal group grid grid-cols-12 gap-6 py-10 md:py-14"
              data-reveal-delay="40"
            >
              <Link to="/performances/piano-repertoire" className="contents">
                <div className="col-span-12 md:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">
                    Repertoire
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                    Nine studies
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/60">
                    Piano practice
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                    Piano Repertoire
                  </h3>
                  <p className="mt-3 max-w-md font-display text-lg italic leading-relaxed text-espresso">
                    Studies in structure, intensity, resonance and musical
                    colour.
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
                    A journey through Bach, Beethoven, Chopin and Rachmaninoff
                    into the spacious and experimental sound worlds of Philip
                    Glass, Arvo Pärt and Sofia Gubaidulina.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-4 md:col-start-9">
                  <PianoRepertoireArtwork />
                </div>
              </Link>
            </li>

            {performances.map((p, i) => (
              <li
                key={i}
                className={[
                  "reveal grid grid-cols-12 gap-6 border-t border-espresso/15 py-10 md:py-14 group",
                  i === 0 ? "border-t-0" : "",
                ].join(" ")}
                data-reveal-delay={String(i * 60)}
              >
                <Link
                  to="/performances/$slug"
                  params={{ slug: p.slug }}
                  className="contents"
                >
                  <div
                    className={`col-span-12 md:col-span-2 ${i % 2 === 0 ? "" : "md:col-start-1"}`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper">
                      {fmt(p.date)}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      {p.city}
                    </p>
                  </div>

                  <div
                    className={`col-span-12 md:col-span-6 ${i % 2 === 0 ? "" : "md:col-start-7 md:-order-none order-3"}`}
                  >
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

                  <div
                    className={`col-span-12 md:col-span-4 ${i % 2 === 0 ? "md:col-start-9" : "md:col-start-3 md:row-start-1"}`}
                  >
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
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PianoRepertoireArtwork() {
  return (
    <div className="relative aspect-[16/11] overflow-hidden bg-espresso-2">
      <div
        aria-hidden="true"
        data-repertoire-art
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(184,121,75,0.22),transparent_32%),linear-gradient(135deg,#211914_0%,#14100d_72%)]"
      >
        {Array.from({ length: 11 }).map((_, index) => (
          <span
            key={index}
            className="absolute bottom-[18%] w-px bg-bone/25 transition-all duration-700 group-hover:bg-copper/60"
            style={{
              left: `${8 + index * 8.2}%`,
              height: `${24 + (index % 5) * 10}%`,
              opacity: 0.35 + (index % 4) * 0.14,
            }}
          />
        ))}
        <span className="absolute left-[8%] top-[30%] h-px w-[84%] bg-copper/45" />
        <span className="absolute left-[8%] top-[38%] h-px w-[58%] bg-bone/15" />
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/65">
        <span>Archive · 09 works</span>
        <span className="text-right text-copper">Open repertoire →</span>
      </div>
    </div>
  );
}
