import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GestureCanvas } from "@/components/GestureCanvas";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { projects, site, researchAreas } from "@/data/site";

const homepageTitle =
  "Siddharth Biswas — Composer, Performer & Music Technology Researcher";

const homepageDescription =
  "Official portfolio of Siddharth Biswas, a composer, performer and PhD researcher working with gesture, EEG, camera tracking and interactive music systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: homepageTitle,
      },
      {
        name: "description",
        content: homepageDescription,
      },
      {
        property: "og:title",
        content: homepageTitle,
      },
      {
        property: "og:description",
        content: homepageDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.siddharthbiswas.com/",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: homepageTitle,
      },
      {
        name: "twitter:description",
        content: homepageDescription,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.siddharthbiswas.com/",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const revealRoot = useReveal();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featured = projects.slice(0, 4);

  return (
    <div ref={revealRoot} className="min-h-screen bg-bone text-espresso">
      {/* HERO ---------------------------------------------------------- */}
      <section className="section-dark grain-dark relative min-h-[100svh] overflow-hidden">
        <GestureCanvas
          tone="dark"
          className="absolute inset-0 h-full w-full opacity-90"
        />
        {/* horizontal hairlines */}
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute left-0 right-0 top-[22%] h-px bg-white/6" />
          <div className="absolute left-0 right-0 top-[78%] h-px bg-white/6" />
        </div>

        <div className="relative z-[2] mx-auto grid min-h-[100svh] max-w-[1440px] grid-cols-12 gap-6 px-6 pb-16 pt-32 md:px-10 md:pt-40">
          {/* left index rail */}
          <aside className="col-span-12 md:col-span-2 flex flex-col justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-bone/50">
            <div className="space-y-1">
              <p>Op. 001</p>
              <p>Index — Live</p>
            </div>
            <div className="hidden md:block space-y-1">
              <p>52.507 N</p>
              <p>−0.127 W</p>
              <p>{new Date().getFullYear()}</p>
            </div>
          </aside>

          {/* name + title */}
          <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.32em] text-copper"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              Composer / Performer / Researcher
            </p>
            <h1
              className="mt-6 font-display text-bone leading-[0.86] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(3.4rem, 12vw, 11rem)",
                transform: `translateY(${scrollY * -0.08}px)`,
              }}
            >
              Siddharth
              <br />
              <span className="italic font-light">Biswas</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-bone/75 text-base md:text-lg leading-relaxed"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            >
              {site.statement}
            </p>
          </div>

          {/* right meta column */}
          <aside className="col-span-12 md:col-span-2 flex flex-col justify-end gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            <div>
              <p className="text-copper mb-1">Now</p>
              <p className="normal-case tracking-normal font-sans text-sm text-bone/85 leading-snug">
                Preparing NIME 2026<br />gesture + EEG duet
              </p>
            </div>
            <div>
              <p className="text-copper mb-1">Next</p>
              <p className="normal-case tracking-normal font-sans text-sm text-bone/85 leading-snug">
                Cafe OTO,<br />weekday programme
              </p>
            </div>
          </aside>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
          <span>Scroll — enter the score</span>
          <span className="block h-8 w-px bg-copper/70 animate-pulse" />
        </div>
      </section>

      {/* FEATURED PROJECTS -------------------------------------------- */}
      <section className="grain relative">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 pb-16 pt-24 md:px-10 md:pt-32">
          <div className="col-span-12 md:col-span-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              § 01 — Selected works
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Score fragments
              <br />
              <span className="italic font-light">from the studio.</span>
            </h2>
            <p className="mt-6 text-sm text-ink-soft max-w-xs">
              Long-running studies and finished pieces. Each is documented as a
              small archive — concept, system, performance context, technical
              setup, and a reflection.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-3 border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
            >
              All projects <span>→</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 md:mt-8 reveal">
              <ProjectCard project={featured[0]} variant="wide" index={0} />
            </div>
            <div className="col-span-12 md:col-span-5 md:-mt-6 reveal" data-reveal-delay="120">
              <ProjectCard project={featured[1]} variant="tall" index={1} />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-2 reveal" data-reveal-delay="60">
              <ProjectCard project={featured[2]} variant="card" index={2} />
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-10 reveal" data-reveal-delay="180">
              <ProjectCard project={featured[3]} variant="wide" index={3} />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH STATEMENT (split) ----------------------------------- */}
      <section className="section-dark grain-dark relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-28 md:px-10 md:py-40">
          <div className="col-span-12 md:col-span-5 md:col-start-1 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              § 02 — Research statement
            </p>
            <h2 className="mt-6 text-4xl md:text-6xl text-bone leading-[0.95]">
              The performer is<br />
              <span className="italic font-light">an instrument</span><br />
              that reads the room.
            </h2>
            <p className="mt-8 max-w-md text-bone/75 leading-relaxed">
              My PhD looks at gesture, EEG, and camera-tracked movement as
              compositional material — not as control, but as negotiation. The
              body writes the score. The system answers, sometimes badly, and
              that answer becomes the piece.
            </p>
            <Link
              to="/research"
              className="mt-10 inline-flex items-center gap-3 border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
            >
              Read the research index <span>→</span>
            </Link>
          </div>

          {/* diagram */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 reveal" data-reveal-delay="140">
            <ResearchDiagram />
          </div>
        </div>
      </section>

      {/* SELECTED WORKS — horizontal strip ---------------------------- */}
      <section className="grain relative">
        <div className="mx-auto max-w-[1440px] px-6 pt-24 md:px-10">
          <div className="grid grid-cols-12 gap-6 reveal">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
                § 03 — Archive
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl">More from the studio.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-6">
              <p className="text-sm text-ink-soft">
                Drag or scroll horizontally. Each card is a project entry point;
                open one to read its documentation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto pb-16">
          <div className="mx-auto flex max-w-none gap-6 px-6 md:px-10" style={{ width: "max-content" }}>
            {projects.map((p, i) => (
              <div key={p.slug} className="w-[320px] md:w-[380px] shrink-0 reveal" data-reveal-delay={String(i * 60)}>
                <ProjectCard project={p} variant="card" index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA — full-bleed dark -------------------------------- */}
      <section className="section-dark grain-dark relative overflow-hidden">
        <GestureCanvas tone="dark" density={0.4} className="absolute inset-0 h-full w-full opacity-40" />
        <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-28 md:px-10 md:py-40">
          <div className="col-span-12 md:col-span-8 md:col-start-2 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              § 04 — Get in touch
            </p>
            <h2 className="mt-6 text-5xl md:text-7xl text-bone leading-[0.92]">
              Commission a piece,<br />
              <span className="italic font-light">or invite a performance.</span>
            </h2>
            <p className="mt-8 max-w-lg text-bone/75">
              I take on a small number of commissions, residencies, and
              collaborations each year — solo, ensemble, dance, or installation.
            </p>

            <div className="mt-12 grid grid-cols-12 gap-6">
              <Link
                to="/contact"
                className="col-span-12 md:col-span-6 group flex items-baseline justify-between border-t border-white/15 py-6 text-bone hover:text-copper transition-colors"
              >
                <span className="font-display text-2xl">Open the contact channel</span>
                <span className="font-mono text-xs uppercase tracking-[0.24em] opacity-70 group-hover:opacity-100">
                  → 
                </span>
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="col-span-12 md:col-span-6 group flex items-baseline justify-between border-t border-white/15 py-6 text-bone hover:text-copper transition-colors"
              >
                <span className="font-display text-2xl italic font-light">Write directly</span>
                <span className="font-mono text-xs uppercase tracking-[0.24em] opacity-70 group-hover:opacity-100">
                  {site.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// A little SVG diagram — research areas as connected nodes.
function ResearchDiagram() {
  // simple radial layout
  const nodes = researchAreas.map((r, i) => {
    const a = (i / researchAreas.length) * Math.PI * 2 - Math.PI / 2;
    return { ...r, x: 50 + Math.cos(a) * 34, y: 50 + Math.sin(a) * 34 };
  });
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const edges: Array<[string, string]> = [
    ["gesture", "camera"], ["gesture", "systems"], ["camera", "systems"],
    ["eeg", "gesture"], ["eeg", "systems"], ["systems", "sound"],
    ["camera", "embodiment"], ["gesture", "embodiment"], ["sound", "embodiment"],
  ];

  return (
    <div className="relative aspect-square w-full border border-white/12 bg-espresso-2/30">
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
        <span>Fig. 01 — research field</span>
        <span>PhD, 2023–</span>
      </div>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={byId[a].x} y1={byId[a].y}
            x2={byId[b].x} y2={byId[b].y}
            stroke="rgba(184,121,75,0.55)"
            strokeWidth="0.25"
            strokeDasharray="0.6 0.9"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="1.4" fill="#B8794B" />
            <circle cx={n.x} cy={n.y} r="3.6" fill="none" stroke="rgba(245,241,234,0.35)" strokeWidth="0.15" />
          </g>
        ))}
      </svg>
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className="translate-y-5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-bone/85">
            {n.label}
          </div>
        </div>
      ))}
    </div>
  );
}
