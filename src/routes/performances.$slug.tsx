import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { performances } from "@/data/site";

export const Route = createFileRoute("/performances/$slug")({
  loader: ({ params }) => {
    const performance = performances.find((p) => p.slug === params.slug);
    if (!performance) throw notFound();
    return { performance };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Performance not found — Siddharth Biswas" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const p = loaderData.performance;

    return {
      meta: [
        { title: `${p.title} — Siddharth Biswas` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Siddharth Biswas` },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
      ],
    };
  },

  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-bone text-espresso">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
          Missing entry
        </p>

        <h1 className="mt-4 font-display text-5xl">
          This performance is not in the archive.
        </h1>

        <Link
          to="/performances"
          className="mt-8 inline-block border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
        >
          Back to performances →
        </Link>
      </div>
    </div>
  ),

  component: PerformancePage,
});

function PerformancePage() {
  const { performance: p } = Route.useLoaderData();

  const root = useReveal();

  const idx = performances.findIndex((x) => x.slug === p.slug);
  const next = performances[(idx + 1) % performances.length];

  const date = new Date(p.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      {/* Hero */}
      <section className="relative pt-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-3 reveal">
            <Link
              to="/performances"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper hover:opacity-70"
            >
              ← All performances
            </Link>

            <div className="mt-6 space-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              <p>
                <span className="text-copper">Date</span> — {date}
              </p>

              <p>
                <span className="text-copper">Venue</span> — {p.venue}
              </p>

              <p>
                <span className="text-copper">City</span> — {p.city}
              </p>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-9 reveal"
            data-reveal-delay="80"
          >
            <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9]">
              {p.title}
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-ink-soft leading-relaxed">
              {p.summary}
            </p>
          </div>
        </div>

        <div className="mt-16 grain">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 reveal">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
                <span>Performance documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section n="01" title="Programme">
        <p>{p.programme}</p>
      </Section>

      <Section n="02" title="Context" dark>
        <p>{p.context}</p>
      </Section>

      <Section n="03" title="Collaborators">
        <p>{p.collaborators}</p>
      </Section>

      <Section n="04" title="Instrumentation" dark>
        <p>{p.instrumentation}</p>
      </Section>

      <Section n="05" title="Reflection">
        <blockquote className="border-l-2 border-copper pl-6">
          <p className="font-display text-2xl md:text-3xl italic leading-snug">
            "{p.reflection}"
          </p>
        </blockquote>
      </Section>

      {/* Next */}
      <section className="section-dark grain-dark">
        <Link
          to="/performances/$slug"
          params={{ slug: next.slug }}
          className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32 group"
        >
          <div className="col-span-12 md:col-span-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Next performance →
            </p>
          </div>

          <div
            className="col-span-12 md:col-span-9 reveal"
            data-reveal-delay="80"
          >
            <h3 className="font-display text-5xl md:text-7xl text-bone leading-[0.95] transition-colors group-hover:text-copper">
              {next.title}
            </h3>

            <p className="mt-4 max-w-xl text-bone/70">
              {next.summary}
            </p>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

function Section({
  n,
  title,
  children,
  dark,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "section-dark grain-dark py-24 md:py-32"
          : "grain py-24 md:py-32"
      }
    >
      <div
        className={`mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10 ${
          dark ? "text-bone" : "text-espresso"
        }`}
      >
        <div className="col-span-12 md:col-span-2 reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            § {n}
          </p>
        </div>

        <div
          className="col-span-12 md:col-span-8 reveal"
          data-reveal-delay="60"
        >
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95]">
            {title}
          </h2>

          <div className="mt-8 text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}