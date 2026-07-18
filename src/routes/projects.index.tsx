import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useReveal } from "@/components/useReveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Siddharth Biswas" },
      { name: "description", content: "A running index of projects: gesture, EEG, camera tracking, dance and interactive systems." },
      { property: "og:title", content: "Projects — Siddharth Biswas" },
      { property: "og:description", content: "A running index of gesture, EEG, camera tracking, and interactive system studies." },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const root = useReveal();
  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      <section className="grain relative pt-36 pb-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-2 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Volume III
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              {projects.length} entries
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 reveal" data-reveal-delay="80">
            <h1 className="font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.9]">
              Projects,<br />
              <span className="italic font-light">as an archive.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              Each project is documented as a small folder: concept, system,
              performance context, technical setup, and a short reflection.
            </p>
          </div>
        </div>
      </section>

      {/* asymmetric grid */}
      <section className="grain relative pb-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          {projects.map((p, i) => {
            // vary widths for asymmetry
            const patterns = [
              "md:col-span-7 md:col-start-1",
              "md:col-span-4 md:col-start-9 md:mt-24",
              "md:col-span-5 md:col-start-2 md:-mt-8",
              "md:col-span-6 md:col-start-7",
              "md:col-span-4 md:col-start-1 md:mt-16",
              "md:col-span-7 md:col-start-6",
            ];
            return (
              <div
                key={p.slug}
                className={["col-span-12 reveal", patterns[i % patterns.length]].join(" ")}
                data-reveal-delay={String((i % 3) * 100)}
              >
                <ProjectCard project={p} variant={i % 2 === 0 ? "wide" : "tall"} index={i} />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
