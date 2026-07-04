import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { writings } from "@/data/site";

export const Route = createFileRoute("/writings")({
  head: () => ({
    meta: [
      { title: "Writings — Siddharth Biswas" },
      { name: "description", content: "Essays, research diaries, and field notes on gesture, embodiment, and interactive music." },
      { property: "og:title", content: "Writings — Siddharth Biswas" },
      { property: "og:description", content: "Essays and research diaries." },
    ],
  }),
  component: Writings,
});

function Writings() {
  const root = useReveal();
  const fmt = (d: string) => new Date(d).toLocaleString("en-GB", { month: "long", year: "numeric" });

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      <section className="grain pt-36 pb-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-8 md:col-start-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Notebooks
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.9]">
              Writings from<br />
              <span className="italic font-light">the margin of the score.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              Short essays, research diaries, and field notes. Kept honest
              rather than polished.
            </p>
          </div>
        </div>
      </section>

      <section className="grain pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-6 md:px-10">
          {writings.map((w, i) => (
            <article
              key={w.slug}
              className={[
                "reveal card-artifact p-8 md:p-10",
                "col-span-12 md:col-span-6",
                i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-16",
              ].join(" ")}
              data-reveal-delay={String(i * 80)}
            >
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                <span className="text-copper">{w.tag}</span>
                <span>{fmt(w.date)} · {w.minutes} min read</span>
              </div>
              <h3 className="mt-6 font-display text-3xl md:text-4xl leading-tight">{w.title}</h3>
              <div className="mt-6 h-px w-16 bg-copper" />
              <p className="mt-6 text-base leading-relaxed">{w.excerpt}</p>
              <blockquote className="mt-8 border-l-2 border-copper pl-5">
                <p className="font-display text-xl italic leading-snug text-espresso/85">
                  “{w.pull}”
                </p>
              </blockquote>
              <div className="mt-8 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-ink-soft">Folio {String(i + 1).padStart(2, "0")}</span>
                <span className="text-copper">Read (coming soon) →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
