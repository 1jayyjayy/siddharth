import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import { site, timeline } from "@/data/site";
import siddharthImg from "@/assets/siddharth.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siddharth Biswas" },
      { name: "description", content: "Composer, performer and PhD researcher — biography, practice, and short timeline." },
      { property: "og:title", content: "About — Siddharth Biswas" },
      { property: "og:description", content: "Biography, practice, and short timeline." },
    ],
  }),
  component: About,
});

function About() {
  const root = useReveal();
  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      {/* Intro row */}
      <section className="grain relative pt-36 pb-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-3 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              File — Biography
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              Updated {new Date().toLocaleString("en-GB", { month: "short", year: "numeric" })}
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 reveal" data-reveal-delay="80">
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9]">
              A composer<br />
              <span className="italic font-light">who reads bodies</span><br />
              for a living.
            </h1>
          </div>
        </div>
      </section>

      {/* Portrait + bio (asymmetric split) */}
      <section className="grain relative pb-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-5 md:col-start-1 reveal">
            <figure className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-espresso-2">
              <img
  src={siddharthImg}
  alt="Portrait of Siddharth Biswas"
  className="h-full w-full object-cover grayscale contrast-[1.05]"
/>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                <span>Plate 01 — Studio, {new Date().getFullYear()}</span>
              </figcaption>
       
              <div className="pointer-events-none absolute -right-4 -top-4 -z-0 h-24 w-24 bg-copper/70" />
            </figure>
          </div>

          {/* <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-16">
            <div className="reveal">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
                Practice
              </p>
              <p className="mt-6 text-xl leading-relaxed">
                {site.name} is a composer, performer and PhD researcher based in{" "}
                {site.location}. His work sits at the intersection of gesture,
                embodiment and interactive music technology — using camera
                tracking, EEG, and hand-built systems to compose new
                relationships between performer, room, and sound.
              </p>
            </div>

            <blockquote className="reveal mt-14 border-l-2 border-copper pl-6" data-reveal-delay="120">
              <p className="font-display text-2xl italic text-espresso leading-snug">
                “I am not building instruments to control. I am building
                instruments that will misread me on purpose.”
              </p>
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                — From a research diary, 2024
              </footer>
            </blockquote>

            <div className="reveal mt-14 space-y-5 text-base leading-relaxed text-espresso" data-reveal-delay="200">
              <p>
                His performance work has been shown at Cafe OTO, IKLECTIK, The
                Yard, the Sonic Arts Research Centre, and in chapels and
                studios across the UK. Recent projects have foregrounded the
                audience as a compositional parameter — their proxemics,
                stillness, and shared attention read live by cameras and
                folded back into the piece.
              </p>
              <p>
                Alongside performance, he writes short essays and research
                diaries — collected under <em>Writings</em> — on embodiment,
                interactivity, and the strange politics of defending a
                practice built on doubt.
              </p>
            </div>
          </div> */}
         <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-16 reveal">
  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
    Biography
  </p>

  <p className="mt-6 text-2xl leading-relaxed">
    I am Siddharth Biswas, a composer, performer and PhD researcher in
    Creative Music Practice at the University of Edinburgh.
  </p>
</div>
</div>

<div className="mx-auto mt-20 max-w-5xl px-6 md:px-10">
  <div
    className="reveal space-y-8 text-lg leading-[1.95] text-espresso"
    data-reveal-delay="160"
  >
    <p>
      My work begins with music made through the body: hands moving across
      a piano, the physical phrasing of the sitar, the rhythm of the
      voice, and the energy exchanged between performers and audiences.
      From there, it expands into camera tracking, gesture, EEG,
      browser-based systems and interactive environments.
    </p>

    <p>
      I grew up between several musical languages. My practice brings
      together Western classical composition, Indian classical music,
      piano performance, sitar, beatboxing, looping and creative music
      technology. Rather than treating these as separate disciplines, I
      use them to ask how an instrument might behave differently—and who
      might be allowed to play it.
    </p>

    <p>
      Much of my current work explores systems in which movement becomes
      compositional material. A hand gesture might alter a harmony; a
      dancer’s position might reorganise a room of sound; an audience
      might collectively shape a performance through their phones; or a
      system might deliberately respond in an uncertain or unexpected way.
    </p>

    <p>
      I am particularly interested in the relationships between composer,
      performer, audience and instrument. My PhD asks how musical agency
      can be distributed across bodies, brains, sensors, code and
      space—creating situations in which music is not simply delivered to
      an audience, but negotiated between everyone and everything present.
    </p>

    <p>
      Alongside my research, I continue to perform, compose, teach and
      collaborate with musicians, dancers, artists and creative
      technologists. My projects range from intimate piano and beatbox
      performances to interactive installations, participatory browser
      works and experimental gesture-controlled instruments.
    </p>
  </div>

  <blockquote
    className="reveal mt-20 border-l-2 border-copper pl-8"
    data-reveal-delay="240"
  >
    <p className="font-display text-3xl italic leading-snug text-espresso md:text-4xl">
      “What does an instrument become when it is distributed across
      multiple bodies?”
    </p>

    <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
      — Central research question
    </footer>
  </blockquote>
</div>
</section>

      {/* Timeline (asymmetric) */}
      <section className="section-dark grain-dark relative py-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 md:col-span-4 reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              § — Chronology
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl text-bone">A short timeline.</h2>
            <p className="mt-6 max-w-sm text-bone/70 text-sm">
              An abridged programme note — the parts of the past that still
              inform the current work.
            </p>
          </div>
          <ol className="col-span-12 md:col-span-7 md:col-start-6 space-y-0">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className="reveal grid grid-cols-12 items-baseline gap-4 border-t border-white/12 py-6"
                data-reveal-delay={String(i * 80)}
              >
                <span className="col-span-3 font-mono text-xs uppercase tracking-[0.22em] text-copper">
                  {t.year}
                </span>
                <span className="col-span-9 font-display text-2xl md:text-3xl text-bone">
                  {t.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}
