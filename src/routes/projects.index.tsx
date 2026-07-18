import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { projects, type Project } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Siddharth Biswas" },
      {
        name: "description",
        content:
          "Selected collaborative, participatory and educational projects across music, performance and creative technology.",
      },
      { property: "og:title", content: "Projects — Siddharth Biswas" },
      {
        property: "og:description",
        content:
          "Music made through collaboration: selected interdisciplinary projects, education and research context.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const root = useReveal();
  const featured = projects.filter((project) => project.group === "featured");
  const education = projects.filter((project) => project.group === "education");

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      <section className="grain relative pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
              Projects
            </p>
          </div>

          <div
            className="col-span-12 reveal md:col-span-9 md:col-start-4"
            data-reveal-delay="80"
          >
            <h1 className="max-w-5xl font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.92]">
              Music made through
              <br />
              <span className="font-light italic">collaboration.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-espresso/15 pt-8 md:grid-cols-9 md:gap-10">
              <p className="text-xl leading-relaxed md:col-span-4">
                Selected collaborative, participatory and educational projects
                developed with artists, performers, communities and
                institutions.
              </p>
              <p className="text-base leading-[1.8] text-ink-soft md:col-span-5">
                Moving between installation, dance, education, performance and
                creative technology, these works grow through conversation,
                experimentation and shared discovery. They explore what can
                happen when music is shaped not by one person alone, but through
                relationships between bodies, spaces, technologies and the
                people gathered around them.
              </p>
            </div>

            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              Selected projects · 2024–present
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 reveal md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
                Selected work
              </p>
            </div>
            <div
              className="col-span-12 reveal md:col-span-8"
              data-reveal-delay="60"
            >
              <h2 className="font-display text-4xl leading-none text-bone md:text-6xl">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            {featured.map((project, index) => (
              <FeaturedProject
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 reveal md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
                Practice beyond the stage
              </p>
            </div>
            <div
              className="col-span-12 reveal md:col-span-8"
              data-reveal-delay="60"
            >
              <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-espresso">
                Education &amp; Community
              </h2>
              <p className="mt-5 max-w-2xl font-display text-3xl leading-tight text-espresso md:text-4xl">
                Projects developed through teaching, creative exchange and
                engagement with young musicians and educational communities.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2">
            {education.map((project, index) => (
              <EducationProject
                key={project.slug}
                project={project}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-copper">
              Research Context
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/45">
              PhD · 2025–present
            </p>
          </div>

          <div
            className="col-span-12 reveal md:col-span-8 md:col-start-5"
            data-reveal-delay="80"
          >
            <div className="border-t border-white/15 pt-8">
              <h2 className="max-w-3xl font-display text-4xl leading-[1.02] text-bone md:text-6xl">
                Creative Music Practice at the University of Edinburgh
              </h2>

              <div className="mt-10 grid gap-6 text-base leading-[1.8] text-bone/75 md:grid-cols-2 md:gap-10">
                <p>
                  I am currently undertaking a PhD in Creative Music Practice at
                  Edinburgh College of Art, University of Edinburgh.
                </p>
                <div className="space-y-6">
                  <p>
                    My research brings together composition, performance,
                    physical movement and creative technology. It explores how
                    musical experiences can emerge through relationships between
                    performers, audiences, bodies and interactive systems.
                  </p>
                  <p>
                    Rather than presenting the PhD as a single finished work,
                    this section provides the wider context for a growing
                    collection of performances, collaborations and experiments.
                    Public outcomes will be documented individually as they
                    develop.
                  </p>
                </div>
              </div>

              <p className="mt-10 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/55">
                PhD Creative Music Practice · Edinburgh College of Art ·
                2025–present
              </p>

              <Link
                to="/research"
                className="mt-10 inline-flex items-center gap-3 border-b border-copper pb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-copper transition-colors hover:text-bone"
              >
                Read about my research <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imagePlacement =
    index % 2 === 0
      ? "md:col-span-6 md:col-start-1"
      : "md:col-span-5 md:col-start-8";
  const textPlacement =
    index % 2 === 0
      ? "md:col-span-5 md:col-start-8"
      : "md:col-span-6 md:col-start-1 md:row-start-1";

  return (
    <article
      className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-white/15 py-16 first:pt-0 md:items-center md:py-28"
      id={project.slug}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className={`group col-span-12 reveal ${imagePlacement}`}
        aria-label={`View ${project.title}`}
      >
        <ProjectImage project={project} dark />
      </Link>

      <div
        className={`col-span-12 reveal ${textPlacement}`}
        data-reveal-delay="100"
      >
        <ProjectMetadata project={project} dark />

        <h3 className="mt-8 font-display text-4xl leading-[0.98] text-bone md:text-6xl">
          {project.title}
        </h3>

        <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-bone/72">
          {project.description.map((paragraph, paragraphIndex) => (
            <p
              key={paragraph}
              className={
                paragraphIndex === 0 ? "text-lg leading-relaxed text-bone" : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-8 border-t border-white/15 pt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-bone/55">
          {project.tags.join(" · ")}
        </p>

        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-8 inline-flex items-center gap-3 border-b border-copper pb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-copper transition-colors hover:text-bone"
        >
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function EducationProject({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) {
  return (
    <article
      className="card-artifact reveal flex h-full flex-col"
      data-reveal-delay={String(delay)}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group block overflow-hidden"
        aria-label={`View ${project.title}`}
      >
        <ProjectImage project={project} />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <ProjectMetadata project={project} />

        <h3 className="mt-7 font-display text-3xl leading-[1.04] md:text-4xl">
          {project.title}
        </h3>

        <div className="mt-6 space-y-4 text-sm leading-[1.75] text-ink-soft">
          {project.description.map((paragraph, paragraphIndex) => (
            <p
              key={paragraph}
              className={paragraphIndex === 0 ? "text-base text-espresso" : ""}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <p className="border-t border-espresso/15 pt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-ink-soft">
            {project.tags.join(" · ")}
          </p>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="mt-7 inline-flex items-center gap-3 border-b border-copper pb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-copper transition-colors hover:text-espresso"
          >
            View project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectMetadata({
  project,
  dark = false,
}: {
  project: Project;
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-[3rem_1fr] gap-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em]">
      <span className="text-copper">{project.number}</span>
      <div
        className={dark ? "space-y-1 text-bone/55" : "space-y-1 text-ink-soft"}
      >
        <p>{project.kind}</p>
        <p>{project.partner}</p>
        <p className={dark ? "text-bone" : "text-espresso"}>{project.year}</p>
      </div>
    </div>
  );
}

function ProjectImage({
  project,
  dark = false,
}: {
  project: Project;
  dark?: boolean;
}) {
  return (
    <figure
      className={`relative aspect-[4/3] overflow-hidden ${
        dark ? "bg-espresso-2" : "bg-bone-2"
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-full w-full object-cover grayscale-[45%] transition-[transform,filter] duration-[900ms] group-hover:scale-[1.035] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
      <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-bone">
        <span>Project {project.number}</span>
        <span>Visual reference</span>
      </figcaption>
    </figure>
  );
}
