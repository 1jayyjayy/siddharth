import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects, writings } from "@/data/site";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/about",
          "/research",
          "/projects",
          "/performances",
          "/performances/piano-repertoire",
          "/writings",
          "/contact",
        ];
        const dynamic = [
          ...projects.map((p) => `/projects/${p.slug}`),
          ...writings.map((w) => `/writings/${w.slug}`),
        ];
        const urls = [...staticPaths, ...dynamic]
          .map((path) => `  <url><loc>${BASE_URL}${path}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
