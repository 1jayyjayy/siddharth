import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import {
  pianoRepertoire,
  type PianoRepertoireWork,
  type RepertoireArtStyle,
} from "@/data/pianoRepertoire";

export const Route = createFileRoute("/performances/piano-repertoire")({
  head: () => ({
    meta: [
      { title: "Piano Repertoire — Siddharth Biswas" },
      {
        name: "description",
        content:
          "Nine piano works tracing a journey through structure, intensity, resonance, silence and musical colour.",
      },
      {
        property: "og:title",
        content: "Piano Repertoire — Siddharth Biswas",
      },
      {
        property: "og:description",
        content:
          "A journey through Bach, Beethoven, Chopin and Rachmaninoff into the spacious and experimental sound worlds of Glass, Pärt and Gubaidulina.",
      },
    ],
  }),
  component: PianoRepertoirePage,
});

const chapters = [
  { number: 1, title: "Structure and Discipline", dark: false },
  { number: 2, title: "Momentum and Dramatic Architecture", dark: true },
  { number: 3, title: "Lyricism and Emotional Scale", dark: false },
  { number: 4, title: "Repetition, Silence and Colour", dark: true },
  { number: 5, title: "Personal Lyricism", dark: false },
] as const;

function PianoRepertoirePage() {
  const root = useReveal();

  return (
    <div
      ref={root}
      className="min-h-screen overflow-x-clip bg-bone text-espresso"
    >
      <section className="grain relative pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <Link
              to="/performances"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper transition-opacity hover:opacity-70"
            >
              ← All performances
            </Link>
            <div className="mt-10 space-y-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
              <p className="text-copper">Repertoire archive</p>
              <p>Nine works</p>
              <p>Keyboard practice</p>
            </div>
          </div>

          <div
            className="col-span-12 reveal md:col-span-8 md:col-start-5"
            data-reveal-delay="80"
          >
            <h1 className="font-display text-[clamp(3.6rem,9vw,8rem)] leading-[0.86]">
              Piano
              <br />
              <span className="font-light italic">Repertoire</span>
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-ink-soft md:text-2xl">
              Studies in structure, intensity, resonance and musical colour.
            </p>
            <p className="mt-8 max-w-xl border-t border-espresso/15 pt-6 text-sm leading-[1.8] text-ink-soft">
              A journey through Bach, Beethoven, Chopin and Rachmaninoff into
              the spacious and experimental sound worlds of Philip Glass, Arvo
              Pärt and Sofia Gubaidulina.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              At the keyboard
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/40">
              A developing practice
            </p>
          </div>
          <div
            className="col-span-12 reveal md:col-span-7 md:col-start-5"
            data-reveal-delay="80"
          >
            <div className="space-y-8 text-lg leading-[1.9] text-bone/72">
              <p className="font-display text-2xl leading-relaxed text-bone md:text-3xl">
                My relationship with the piano has developed through music that
                demands very different kinds of attention: the structural
                clarity of Bach, the physical and emotional intensity of
                Beethoven and Rachmaninoff, the lyricism of Chopin, and the more
                spacious sound worlds of Philip Glass, Arvo Pärt and Sofia
                Gubaidulina.
              </p>
              <p>
                At Royal Holloway, my study of Classical and Romantic
                repertoire—primarily with Dr Stanley Mathew and Dr Zubin
                Kanga—helped me develop a disciplined understanding of touch,
                voicing, phrasing and musical architecture. Rather than
                approaching virtuosity simply as speed or technical display, I
                learned to consider how physical gesture at the keyboard could
                communicate direction, tension and character.
              </p>
              <p>
                My work on contemporary repertoire with Dr Mary Dullea expanded
                this approach further. Pieces by Glass, Pärt and Gubaidulina
                encouraged me to listen more closely to resonance, repetition,
                silence and subtle variations of colour. Together, these works
                trace my development from interpreting the piano as a
                traditional concert instrument toward understanding it as a
                space for sound, gesture and experimentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {chapters.map((chapter) => (
        <RepertoireChapter
          key={chapter.number}
          number={chapter.number}
          title={chapter.title}
          dark={chapter.dark}
          works={pianoRepertoire.filter(
            (work) => work.chapter === chapter.number,
          )}
        />
      ))}

      <section className="section-dark grain-dark relative py-24 md:py-36">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Coda · Reflection
            </p>
          </div>
          <div
            className="col-span-12 reveal md:col-span-7 md:col-start-5"
            data-reveal-delay="80"
          >
            <h2 className="font-display text-5xl leading-[0.95] text-bone md:text-7xl">
              Changing ways of listening
            </h2>
            <div className="mt-10 space-y-8 text-lg leading-[1.9] text-bone/70">
              <p>
                Viewed together, these pieces represent more than a list of
                works I have learned. They document changing ways of listening
                and performing. Bach and Beethoven developed my sense of
                structure and discipline; Chopin and Rachmaninoff deepened my
                understanding of tone, phrasing and emotional scale; and Glass,
                Pärt and Gubaidulina encouraged me to reconsider repetition,
                silence and musical colour.
              </p>
              <p>
                This breadth of repertoire continues to influence my work as a
                composer and creative music practitioner. The attention to
                gesture, resonance, timing and physical interaction that I
                developed at the piano now informs my wider explorations of
                movement, technology and interactive musical systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function RepertoireChapter({
  number,
  title,
  dark,
  works,
}: {
  number: number;
  title: string;
  dark: boolean;
  works: PianoRepertoireWork[];
}) {
  return (
    <section
      className={
        dark
          ? "section-dark grain-dark relative py-24 md:py-36"
          : "grain relative py-24 md:py-36"
      }
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <header className="grid grid-cols-12 gap-6">
          <div className="col-span-12 reveal md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
              Chapter {String(number).padStart(2, "0")}
            </p>
          </div>
          <div
            className="col-span-12 reveal md:col-span-8 md:col-start-5"
            data-reveal-delay="60"
          >
            <h2
              className={`font-display text-5xl leading-[0.95] md:text-7xl ${
                dark ? "text-bone" : "text-espresso"
              }`}
            >
              {title}
            </h2>
          </div>
        </header>

        <div className="mt-16 md:mt-24">
          {works.map((work) => (
            <RepertoirePiece key={work.number} work={work} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RepertoirePiece({
  work,
  dark,
}: {
  work: PianoRepertoireWork;
  dark: boolean;
}) {
  const isOdd = Number(work.number) % 2 === 1;
  const mediaPlacement = isOdd
    ? "md:col-span-6 md:col-start-1"
    : "md:col-span-5 md:col-start-8";
  const textPlacement = isOdd
    ? "md:col-span-5 md:col-start-8"
    : "md:col-span-6 md:col-start-1 md:row-start-1";

  return (
    <article className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-current/15 py-16 first:border-t-0 first:pt-0 md:items-center md:py-28">
      <div className={`col-span-12 reveal ${mediaPlacement}`}>
        <RepertoireMedia work={work} dark={dark} />
      </div>

      <div
        className={`col-span-12 reveal ${textPlacement}`}
        data-reveal-delay="100"
      >
        <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-copper">
          <span>{work.number}</span>
          <span className="h-px w-10 bg-copper/60" />
          <span>Repertoire study</span>
        </div>
        <p
          className={`mt-7 font-mono text-[10px] uppercase tracking-[0.22em] ${
            dark ? "text-bone/50" : "text-ink-soft"
          }`}
        >
          {work.composer}
        </p>
        <h3
          className={`mt-4 font-display text-4xl leading-[1.02] md:text-5xl ${
            dark ? "text-bone" : "text-espresso"
          }`}
        >
          {work.title}
        </h3>
        {work.movement && (
          <p
            className={`mt-3 font-display text-2xl italic ${
              dark ? "text-bone/65" : "text-ink-soft"
            }`}
          >
            {work.movement}
          </p>
        )}
        <p
          className={`mt-8 text-base leading-[1.85] ${
            dark ? "text-bone/68" : "text-ink-soft"
          }`}
        >
          {work.description}
        </p>
      </div>
    </article>
  );
}

function RepertoireMedia({
  work,
  dark,
}: {
  work: PianoRepertoireWork;
  dark: boolean;
}) {
  if (work.videoUrl) {
    return (
      <div className="aspect-video overflow-hidden bg-espresso-2">
        <iframe
          src={work.videoUrl}
          title={`${work.composer}: ${work.title}`}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <figure>
      <div className="group relative aspect-video overflow-hidden border border-current/15 bg-espresso-2">
        <AbstractRepertoireArt style={work.art} />
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-bone/65 md:inset-x-5 md:bottom-5">
          <span>{work.number} · Study</span>
          <span className="text-right">Performance video coming soon</span>
        </div>
      </div>
      <figcaption
        className={`mt-3 font-mono text-[8px] uppercase tracking-[0.18em] ${
          dark ? "text-bone/35" : "text-ink-soft"
        }`}
      >
        Temporary media panel · 16:9
      </figcaption>
    </figure>
  );
}

function AbstractRepertoireArt({ style }: { style: RepertoireArtStyle }) {
  return (
    <div
      aria-hidden="true"
      data-repertoire-art
      className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_75%_25%,rgba(184,121,75,0.20),transparent_34%),linear-gradient(135deg,#211914_0%,#14100d_68%)]"
    >
      {style === "bach" && (
        <>
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={`bach-v-${index}`}
              className="absolute inset-y-[14%] w-px bg-bone/20 transition-transform duration-700 group-hover:translate-x-1"
              style={{ left: `${10 + index * 10}%` }}
            />
          ))}
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={`bach-h-${index}`}
              className="absolute inset-x-[10%] h-px bg-copper/45"
              style={{ top: `${20 + index * 15}%` }}
            />
          ))}
        </>
      )}

      {style === "tempest" && (
        <>
          {[18, 30, 42, 54, 66].map((size, index) => (
            <span
              key={size}
              className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper/40 transition-transform duration-700 group-hover:scale-105"
              style={{ width: `${size}%`, rotate: `${index * 9}deg` }}
            />
          ))}
          <span className="absolute left-[15%] top-1/2 h-px w-[70%] -rotate-12 bg-bone/35" />
        </>
      )}

      {style === "moonlight" && (
        <>
          <span className="absolute right-[12%] top-[12%] aspect-square w-[28%] rounded-full border border-bone/30 bg-bone/5 shadow-[0_0_60px_rgba(245,241,234,0.08)]" />
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="absolute -bottom-[20%] h-[120%] w-px -rotate-[28deg] bg-copper/45 transition-transform duration-700 group-hover:-translate-y-2"
              style={{ left: `${12 + index * 10}%` }}
            />
          ))}
        </>
      )}

      {style === "chopin" && (
        <>
          <span className="absolute -left-[8%] top-[20%] h-[50%] w-[85%] rotate-6 rounded-[50%] border-t border-copper/55" />
          <span className="absolute left-[5%] top-[35%] h-[42%] w-[90%] -rotate-3 rounded-[50%] border-t border-bone/25" />
          <span className="absolute left-[28%] top-[18%] aspect-square w-[18%] rounded-full bg-copper/15 blur-xl" />
        </>
      )}

      {style === "rachmaninoff" && (
        <>
          {[0, 1, 2, 3, 4].map((index) => (
            <span
              key={index}
              className="absolute bottom-[15%] border border-bone/15 bg-bone/5 transition-transform duration-700 group-hover:-translate-y-1"
              style={{
                left: `${10 + index * 15}%`,
                width: `${28 + index * 3}%`,
                height: `${18 + index * 11}%`,
              }}
            />
          ))}
          <span className="absolute bottom-[15%] left-[10%] h-px w-[80%] bg-copper/60" />
        </>
      )}

      {style === "glass" && (
        <>
          {Array.from({ length: 14 }).map((_, index) => (
            <span
              key={index}
              className="absolute bottom-[15%] w-px bg-bone/25 transition-all duration-700 group-hover:bg-copper/55"
              style={{
                left: `${7 + index * 6.6}%`,
                height: `${34 + (index % 5) * 8}%`,
                opacity: 0.35 + (index % 4) * 0.15,
              }}
            />
          ))}
          <span className="absolute left-[7%] top-[28%] h-px w-[86%] bg-copper/35" />
        </>
      )}

      {style === "part" && (
        <>
          <span className="absolute left-1/2 top-[18%] h-[64%] w-px bg-bone/15" />
          <span className="absolute left-[34%] top-[46%] aspect-square w-[3%] rounded-full bg-copper shadow-[0_0_24px_rgba(184,121,75,0.55)]" />
          <span className="absolute right-[32%] top-[43%] aspect-square w-[1.5%] rounded-full bg-bone/65" />
        </>
      )}

      {style === "gubaidulina" && (
        <>
          <span className="absolute left-[14%] top-[22%] h-[56%] w-px bg-bone/25" />
          {[20, 34, 49, 65, 78].map((left, index) => (
            <span
              key={left}
              className="absolute aspect-square rounded-full border border-copper/55 transition-transform duration-700 group-hover:-translate-y-1"
              style={{
                left: `${left}%`,
                top: `${24 + (index % 3) * 17}%`,
                width: `${5 + index * 1.5}%`,
              }}
            />
          ))}
          <span className="absolute bottom-[18%] left-[12%] h-px w-[76%] -rotate-6 bg-bone/20" />
        </>
      )}

      {style === "felitsa" && (
        <>
          <span className="absolute -left-[12%] top-[16%] aspect-[2/1] w-[78%] rotate-12 rounded-[50%] border-t-2 border-copper/65" />
          <span className="absolute left-[18%] top-[38%] aspect-[2/1] w-[84%] -rotate-6 rounded-[50%] border-t border-bone/40" />
          <span className="absolute right-[18%] top-[18%] aspect-square w-[24%] rounded-full bg-copper/20 blur-2xl" />
          <span className="absolute bottom-[20%] left-[38%] h-px w-[45%] rotate-12 bg-copper/45" />
        </>
      )}
    </div>
  );
}
