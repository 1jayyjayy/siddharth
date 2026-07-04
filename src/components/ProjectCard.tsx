import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";

// Score-fragment / index-card treatment. Slight rotation, tag chips, image thumb.
export function ProjectCard({
  project,
  variant = "card",
  index = 0,
}: {
  project: Project;
  variant?: "card" | "wide" | "tall";
  index?: number;
}) {
  const rot = [
    "md:-rotate-[0.6deg]",
    "md:rotate-[0.4deg]",
    "md:-rotate-[0.25deg]",
    "md:rotate-[0.7deg]",
  ][index % 4];

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={[
        "card-artifact group relative block overflow-hidden rounded-sm",
        rot,
        variant === "wide" ? "aspect-[16/10]" : variant === "tall" ? "aspect-[4/5]" : "aspect-[5/6]",
      ].join(" ")}
    >
      {/* archival meta strip */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/70">
        <span>№ {String(index + 1).padStart(3, "0")}</span>
        <span>{project.year}</span>
      </div>

      <div className="relative h-[62%] w-full overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover grayscale-[35%] transition-[transform,filter] duration-[900ms] group-hover:scale-[1.04] group-hover:grayscale-0"
          loading="lazy"
        />
        {/* corner sprocket marks */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-bone/60" />
          <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-bone/60" />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-bone/60" />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-bone/60" />
        </div>
      </div>

      <div className="flex h-[38%] flex-col justify-between p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            {project.kind}
          </p>
          <h3 className="mt-2 text-2xl leading-[1.05]">{project.title}</h3>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <li
                key={t}
                className="rounded-full border border-espresso/25 px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.15em] text-espresso/70"
              >
                {t}
              </li>
            ))}
          </ul>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/60 transition-colors group-hover:text-copper">
            Open →
          </span>
        </div>
      </div>
    </Link>
  );
}
