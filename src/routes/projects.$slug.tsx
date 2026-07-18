import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Siddharth Biswas" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Siddharth Biswas` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Siddharth Biswas` },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-bone text-espresso">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">Missing entry</p>
        <h1 className="mt-4 font-display text-5xl">This project is not in the archive.</h1>
        <Link to="/projects" className="mt-8 inline-block border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper">
          Back to projects →
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const root = useReveal();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      {/* Header w/ hero image */}
      <section className="relative pt-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-3 reveal">
            <Link
              to="/projects"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper hover:opacity-70"
            >
              ← All projects
            </Link>
            <div className="mt-6 space-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              <p><span className="text-copper">Year</span> — {p.year}</p>
              <p><span className="text-copper">Kind</span> — {p.kind}</p>
              <p><span className="text-copper">Entry</span> — № {String(idx + 1).padStart(3, "0")}</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 reveal" data-reveal-delay="80">
            <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9]">{p.title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-ink-soft leading-relaxed">{p.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t: string) => (
                <li key={t} className="rounded-full border border-espresso/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grain relative">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 reveal">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <img src={p.image} alt="" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
                <span>Plate 01 — Documentation still</span>
                <span>Placeholder image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <Section n="01" title="Concept" visual={
        <div className="relative aspect-square w-full overflow-hidden border border-espresso/15 bg-bone-2">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <circle key={i} cx="50" cy="50" r={8 + i * 6} fill="none" stroke="rgba(184,121,75,0.5)" strokeWidth="0.2" />
            ))}
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(20,16,13,0.3)" strokeWidth="0.15" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(20,16,13,0.3)" strokeWidth="0.15" />
          </svg>
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/60">Fig. A — field</span>
        </div>
      }>
        <p>{p.concept}</p>
      </Section>

      {/* System */}
      <Section n="02" title="System" dark visual={
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-espresso-2">
          <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full">
            {["sensor", "map", "engine", "sound"].map((label, i) => {
              const x = 10 + i * 26;
              return (
                <g key={label}>
                  <rect x={x} y="30" width="18" height="14" fill="none" stroke="#F5F1EA" strokeWidth="0.3" />
                  <text x={x + 9} y="39" textAnchor="middle" fill="#F5F1EA" fontSize="3" fontFamily="JetBrains Mono">
                    {label}
                  </text>
                  {i < 3 && (
                    <line x1={x + 18} y1="37" x2={x + 26} y2="37" stroke="#B8794B" strokeWidth="0.4" markerEnd="url(#a)" />
                  )}
                </g>
              );
            })}
            <defs>
              <marker id="a" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
                <path d="M0,0 L4,2 L0,4 Z" fill="#B8794B" />
              </marker>
            </defs>
          </svg>
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">Fig. B — signal chain</span>
        </div>
      }>
        <p>{p.system}</p>
      </Section>

      {/* Performance context */}
      <Section n="03" title="Performance context" visual={
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img src={`https://picsum.photos/seed/sb-${p.slug}-ctx/900/1125`} alt="" className="h-full w-full object-cover grayscale-[40%]" />
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone">Plate 02</span>
        </div>
      }>
        <p>{p.context}</p>
      </Section>

      {/* Technical setup */}
      <Section n="04" title="Technical setup" dark visual={
        <div className="relative aspect-video w-full border border-white/10 bg-espresso-2 flex items-center justify-center">
          <svg viewBox="0 0 100 56" className="h-full w-full">
            <g stroke="#F5F1EA" strokeWidth="0.2" fill="none">
              <circle cx="50" cy="28" r="4" />
              <circle cx="50" cy="28" r="10" opacity="0.6" />
              <circle cx="50" cy="28" r="18" opacity="0.3" />
            </g>
            <path d="M10,45 L90,45" stroke="#B8794B" strokeWidth="0.3" strokeDasharray="1 1" />
            <text x="10" y="10" fill="#F5F1EA" fontSize="3" fontFamily="JetBrains Mono">REC / LIVE / MONITOR</text>
          </svg>
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">Fig. C — rig</span>
        </div>
      }>
        <ul className="space-y-3">
          {p.setup.map((s: string, i: number) => (
            <li key={i} className="grid grid-cols-12 gap-4 border-t border-current/15 pt-3 first:border-t-0 first:pt-0">
              <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Reflection */}
      <Section n="05" title="Reflection">
        <blockquote className="border-l-2 border-copper pl-6">
          <p className="font-display text-2xl md:text-3xl italic leading-snug">
            “{p.reflection}”
          </p>
        </blockquote>
      </Section>

      {/* Next */}
      <section className="section-dark grain-dark relative">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32 group"
        >
          <div className="col-span-12 md:col-span-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Next entry →
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 reveal" data-reveal-delay="80">
            <h3 className="font-display text-5xl md:text-7xl text-bone leading-[0.95] transition-colors group-hover:text-copper">
              {next.title}
            </h3>
            <p className="mt-4 max-w-xl text-bone/70">{next.summary}</p>
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
  visual,
  dark,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
  visual?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "section-dark grain-dark py-24 md:py-32" : "grain py-24 md:py-32"}>
      <div className={`mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10 ${dark ? "text-bone" : "text-espresso"}`}>
        <div className="col-span-12 md:col-span-2 reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">§ {n}</p>
        </div>
        <div className="col-span-12 md:col-span-5 reveal" data-reveal-delay="60">
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95]">{title}</h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed">
            {children}
          </div>
        </div>
        {visual && (
          <div className="col-span-12 md:col-span-4 md:col-start-9 reveal" data-reveal-delay="140">
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}
