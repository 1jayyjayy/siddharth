import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { writings } from "@/data/site";

export const Route = createFileRoute("/writings/$slug")({
    loader: ({ params }) => {
        const writing = writings.find(w => w.slug === params.slug);

        if (!writing) throw notFound();

        return { writing };
    },

    head: ({ loaderData }) => {
        if (!loaderData) {
            return {
                meta: [
                    { title: "Writing not found" }
                ]
            }
        }

        const w = loaderData.writing;

        return {
            meta: [
                {
                    title: `${w.title} — Siddharth Biswas`
                },
                {
                    name: "description",
                    content: w.excerpt
                }
            ]
        }
    },

    component: WritingPage,

    notFoundComponent: () => (
        <div className="flex min-h-screen items-center justify-center bg-bone text-espresso">
            <div className="text-center">
                <h1 className="font-display text-5xl">
                    Writing not found.
                </h1>

                <Link
                    to="/writings"
                    className="mt-8 inline-block border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
                >
                    ← Back to writings
                </Link>
            </div>
        </div>
    )
});

function WritingPage() {

    const { writing: w } = Route.useLoaderData();

    const root = useReveal();

    const index = writings.findIndex(x => x.slug === w.slug);

    const next = writings[(index + 1) % writings.length];

    const date = new Date(w.date).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric"
    });

    return (
        <div
            ref={root}
            className="min-h-screen bg-bone text-espresso"
        >

            <section className="pt-28 pb-20 grain">

                <div className="mx-auto max-w-5xl px-6">

                    <Link
                        to="/writings"
                        className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper hover:opacity-70"
                    >
                        ← All writings
                    </Link>

                    <div className="mt-10">

                        <p className="font-mono uppercase tracking-[0.22em] text-copper text-[10px]">
                            {w.tag}
                        </p>

                        <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9]">
                            {w.title}
                        </h1>

                        <div className="mt-8 flex gap-6 font-mono uppercase tracking-[0.22em] text-[10px] text-ink-soft">
                            <span>{date}</span>
                            <span>{w.minutes} min read</span>
                        </div>

                        <div className="mt-12 h-px bg-copper w-20" />

                        <p className="mt-12 max-w-3xl text-xl leading-relaxed text-ink-soft">
                            {w.excerpt}
                        </p>

                    </div>

                </div>

            </section>

            <section className="grain py-24">

                <div className="mx-auto max-w-3xl px-6">

                    <blockquote className="border-l-2 border-copper pl-6">

                        <p className="font-display italic text-3xl leading-snug">

                            "{w.pull}"

                        </p>

                    </blockquote>

                    <div className="mt-16 space-y-8 text-lg leading-loose text-espresso/90">

                        <p>
                            This page is intended to contain the complete article.
                            Right now your data only contains the title, excerpt and
                            pull quote, so there isn't any additional body text to
                            display.
                        </p>

                        <p>
                            Once you add a <strong>content</strong> field to each
                            writing object, you can render it here exactly like a
                            blog post.
                        </p>

                    </div>

                </div>

            </section>

            <section className="section-dark grain-dark">

                <Link
                    to="/writings/$slug"
                    params={{ slug: next.slug }}
                    className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 py-24 md:px-10 group"
                >

                    <div className="col-span-12 md:col-span-3">

                        <p className="font-mono uppercase tracking-[0.24em] text-[10px] text-copper">
                            Next writing →
                        </p>

                    </div>

                    <div className="col-span-12 md:col-span-9">

                        <h2 className="font-display text-5xl text-bone group-hover:text-copper transition-colors">
                            {next.title}
                        </h2>

                        <p className="mt-4 max-w-xl text-bone/70">
                            {next.excerpt}
                        </p>

                    </div>

                </Link>

            </section>

            <Footer />

        </div>
    );

}