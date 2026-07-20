import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { DividualCaseStudy } from "@/components/projects/DividualCaseStudy";
import { useReveal } from "@/components/useReveal";
import { projects, type Project } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Siddharth Biswas" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const project = loaderData.project;
    return {
      meta: [
        { title: `${project.title} — Siddharth Biswas` },
        { name: "description", content: project.summary },
        {
          property: "og:title",
          content: `${project.title} — Siddharth Biswas`,
        },
        { property: "og:description", content: project.summary },
        { property: "og:image", content: project.image },
        { name: "twitter:image", content: project.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-bone px-6 text-espresso">
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
          Missing entry
        </p>
        <h1 className="mt-4 font-display text-5xl">
          This project is not in the archive.
        </h1>
        <Link
          to="/projects"
          className="mt-8 inline-block border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
        >
          Back to projects →
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  if (project.slug === "dividual") {
    return <DividualCaseStudy project={project} next={next} />;
  }

  return <GenericProjectPage project={project} next={next} />;
}

function GenericProjectPage({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const root = useReveal();

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      <section className="grain relative pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <Link
              to="/projects"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper transition-opacity hover:opacity-70"
            >
              ← All projects
            </Link>

            <div className="mt-10 grid grid-cols-[2.5rem_1fr] gap-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-ink-soft">
              <span className="text-copper">{project.number}</span>
              <div className="space-y-1">
                <p>{project.kind}</p>
                <p>{project.partner}</p>
                <p className="text-espresso">{project.year}</p>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 reveal md:col-span-8 md:col-start-5"
            data-reveal-delay="80"
          >
            <h1 className="max-w-5xl font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.9]">
              {project.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft md:text-2xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="grain relative pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <figure className="reveal relative aspect-[4/3] overflow-hidden bg-bone-2 md:aspect-[21/9]">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="h-full w-full object-cover grayscale-[35%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-bone md:inset-x-7 md:bottom-7">
              <span>Project {project.number}</span>
              <span>Temporary visual reference</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="grain relative pb-28 md:pb-36">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Project context
            </p>
          </div>

          <div
            className="col-span-12 reveal md:col-span-5 md:col-start-5"
            data-reveal-delay="60"
          >
            <div className="space-y-7 text-lg leading-[1.85]">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside
            className="col-span-12 reveal mt-6 border-t border-espresso/15 pt-5 md:col-span-3 md:col-start-10 md:mt-0"
            data-reveal-delay="120"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-copper">
              Working areas
            </p>
            <ul className="mt-5 space-y-3">
              {project.tags.map((tag, tagIndex) => (
                <li
                  key={tag}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-t border-espresso/10 pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[9px] text-copper">
                    {String(tagIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink-soft">{tag}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-dark grain-dark relative">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="col-span-12 reveal md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Next project →
            </p>
          </div>
          <div
            className="col-span-12 reveal md:col-span-8"
            data-reveal-delay="80"
          >
            <h2 className="font-display text-5xl leading-[0.95] text-bone transition-colors group-hover:text-copper md:text-7xl">
              {next.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/65">
              {next.summary}
            </p>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
