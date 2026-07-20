import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/components/useReveal";
import type { Project } from "@/data/site";

const visual = (seed: string, width = 1600, height = 1000) =>
  `https://picsum.photos/seed/sb-dividual-${seed}/${width}/${height}`;

// Add the repository URL here when it is ready to publish.
const DIVIDUAL_GITHUB_URL = "";

const audienceJourney = [
  {
    number: "01",
    title: "Sign in",
    text: "Visitors entered through a QR-based sign-in system and were introduced to DIVIDUAL’s fictional corporate world. Scanning the code opened an interactive visual-novel-style experience developed for mobile devices, allowing each visitor to move through a branching narrative through their own screen.",
  },
  {
    number: "02",
    title: "Be observed",
    text: "Networked cameras and tracking systems responded to activity throughout the room. A bag might shift the soundscape, while the system could recognise—or appear to recognise—an object and address its owner directly. The result was humorous, personalised and slightly intrusive.",
  },
  {
    number: "03",
    title: "Test the products",
    text: "Visitors encountered the Dreamcatcher, dioramas, responsive screens, moving elements, motion-controlled objects and fictional corporate wellness technologies. Individually they appeared helpful or entertaining; together they exposed the more controlling logic of the company.",
  },
  {
    number: "04",
    title: "Enter the illusion",
    text: "Magic became part of the installation’s language. A card prediction framed through dreams and apparent mind-reading extended the idea that DIVIDUAL could know something about visitors before they revealed it themselves.",
  },
];

const process = [
  {
    title: "Explore",
    text: "TouchDesigner, sensors, cameras and interactive systems",
  },
  {
    title: "Prototype",
    text: "Individual experiments, games, sounds and objects",
  },
  {
    title: "Connect",
    text: "A shared corporate fiction and visual language",
  },
  {
    title: "Test",
    text: "Technical integration and audience journeys",
  },
  { title: "Present", text: "Hidden Door 2026" },
];

export function DividualCaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const root = useReveal();

  return (
    <div ref={root} className="min-h-screen bg-bone text-espresso">
      <section className="grain relative pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <Link
              to="/projects"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper transition-opacity hover:opacity-70"
            >
              ← All projects
            </Link>

            <div className="mt-10 space-y-1 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-ink-soft">
              <p className="text-copper">Project {project.number}</p>
              <p>Collaborative interactive installation</p>
              <p>Tinderbox Collective × Ray Interactive</p>
              <p>Hidden Door, Edinburgh</p>
              <p className="text-espresso">2026</p>
            </div>
          </div>

          <div
            className="col-span-12 reveal md:col-span-8 md:col-start-5"
            data-reveal-delay="80"
          >
            <h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.82]">
              DIVIDUAL
            </h1>
            <p className="mt-10 max-w-3xl font-display text-2xl leading-snug md:text-4xl">
              An interactive installation disguised as the public showroom of a
              fictional technology corporation.
            </p>
          </div>
        </div>
      </section>

      <section className="grain relative pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <figure className="reveal group relative aspect-[4/3] overflow-hidden bg-espresso-2 md:aspect-[21/10]">
            <img
              src={visual("showroom", 1900, 1100)}
              alt="Temporary visual placeholder for the DIVIDUAL public showroom"
              className="h-full w-full object-cover grayscale-[15%] transition-transform duration-[1200ms] group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-espresso/10" />
            <figcaption className="absolute inset-x-5 bottom-5 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-bone sm:flex-row sm:items-end sm:justify-between md:inset-x-7 md:bottom-7">
              <span>
                Plate 01 · Public showroom · Temporary visual reference
              </span>
              <span className="border border-bone/35 bg-espresso/70 px-3 py-2 text-right text-copper">
                Showroom status: active
                <br />
                <span className="text-bone/65">
                  Visitor analysis in progress
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="mt-12 grid grid-cols-12 gap-6 md:mt-16">
            <div className="col-span-12 reveal md:col-span-6 md:col-start-4">
              <p className="text-lg leading-[1.85] text-ink-soft">
                Developed over two months through Tinderbox Collective’s Room to
                Play programme, DIVIDUAL invited visitors into a playful but
                increasingly unsettling world of surveillance, persuasion and
                automated attention. Cameras, sensors, games, responsive
                objects, sound and live performers transformed the room into a
                system that appeared to observe, understand and recruit everyone
                who entered.
              </p>
            </div>
            <aside className="col-span-12 reveal border-t border-espresso/15 pt-5 md:col-span-3 md:col-start-10 md:mt-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-copper">
                My role
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Interactive systems · Camera tracking · Sound design · Digital
                storytelling · Performance · Magic
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="grain relative py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-6">
            <ProjectFigure
              src={visual("dreamcatcher", 1400, 1050)}
              alt="Temporary visual placeholder for the DIVIDUAL Dreamcatcher installation"
              plate="Plate 02 · The Dreamcatcher"
              caption="The Dreamcatcher invited visitors to place themselves inside a closed loop of images, sound and imagined machine interpretation."
            />
          </div>

          <div
            className="col-span-12 reveal md:col-span-5 md:col-start-8 md:self-center"
            data-reveal-delay="100"
          >
            <SectionLabel number="01" text="The premise" />
            <h2 className="mt-7 font-display text-4xl leading-[1.02] md:text-6xl">
              A friendly system with something darker underneath
            </h2>
            <div className="mt-8 space-y-6 text-base leading-[1.85] text-ink-soft">
              <p>
                DIVIDUAL presented itself as an innovative technology company
                offering personalised experiences, emotional support and new
                forms of connection.
              </p>
              <p>
                Visitors could scan, play, move, dream, listen and interact with
                a collection of strange products and services. Beneath the
                friendly branding, however, the installation suggested something
                more troubling: a corporation constantly watching, interpreting
                and responding to its users.
              </p>
              <p>
                The work used humour, surprise and apparent technological
                intelligence to explore how easily convenience and
                personalisation can become forms of surveillance and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 reveal md:col-span-3">
              <SectionLabel number="02" text="The audience journey" dark />
            </div>
            <div
              className="col-span-12 reveal md:col-span-7 md:col-start-5"
              data-reveal-delay="60"
            >
              <h2 className="font-display text-5xl leading-[0.95] text-bone md:text-7xl">
                Inside the showroom
              </h2>
            </div>
          </div>

          <ol className="mt-16 md:mt-24">
            {audienceJourney.map((step, index) => (
              <li
                key={step.number}
                className="reveal grid grid-cols-12 gap-6 border-t border-white/15 py-9 md:py-12"
                data-reveal-delay={String(index * 60)}
              >
                <p className="col-span-3 font-mono text-xs tracking-[0.22em] text-copper md:col-span-2">
                  {step.number}
                </p>
                <h3 className="col-span-9 font-display text-3xl text-bone md:col-span-3 md:text-4xl">
                  {step.title}
                </h3>
                <p className="col-span-12 text-sm leading-[1.8] text-bone/65 md:col-span-6 md:col-start-7">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grain relative py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 reveal md:col-span-3">
              <SectionLabel number="03" text="Contribution" />
            </div>
            <div
              className="col-span-12 reveal md:col-span-8 md:col-start-5"
              data-reveal-delay="60"
            >
              <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
                My role within DIVIDUAL
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-ink-soft">
                I joined Room to Play as one of the participating artists and
                worked across interaction design, sound, performance and
                collective development.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-6 md:mt-24">
            <div className="col-span-12 space-y-12 md:col-span-7 md:col-start-1">
              <Contribution
                number="01"
                title="Interactive digital narrative"
                text="I developed a QR-based visual-novel-style system that visitors could access through their phones. The experience introduced them to DIVIDUAL’s fictional world through choices, dialogue and interactive storytelling."
              />
              <Contribution
                number="02"
                title="Networked camera systems"
                text="I worked extensively with networked cameras and TouchDesigner, creating responsive interactions based on visitors and the objects they brought into the space. Visual information could influence the installation’s sound and behaviour, producing apparently personalised responses."
              />
              <Contribution
                number="03"
                title="Sound and atmosphere"
                text="I created and contributed to several soundscapes using Logic Pro X and other live systems. Rather than functioning as background music, sound responded to the showroom’s shifting states and moved the atmosphere between playful, seductive and unsettling."
              />
              <Contribution
                number="04"
                title="Magic and audience interaction"
                text="I developed and performed an interactive card prediction in which the idea of a visitor’s dream became part of the magical reveal. This connected live magic to the wider fiction of a system capable of analysing, predicting and understanding its users."
              />
              <Contribution
                number="05"
                title="Collective development"
                text="Many parts of DIVIDUAL were built collectively. I contributed to testing, refining, installing and connecting the different experiences into a shared environment shaped by repeated workshops, technical experiments and public testing."
              />
            </div>

            <aside className="col-span-12 reveal mt-6 md:col-span-4 md:col-start-9 md:mt-0">
              <div className="border border-espresso/15 bg-bone-2 p-6 md:sticky md:top-28 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
                  Project record
                </p>
                <dl>
                  <Fact label="Programme" value="Room to Play" />
                  <Fact label="Duration" value="Two months" />
                  <Fact
                    label="Presented at"
                    value="Hidden Door 2026, Edinburgh"
                  />
                  <Fact
                    label="My roles"
                    value="Selected artist · Interaction designer · Sound designer · Performer · Magician · Collaborator"
                  />
                  <Fact
                    label="Tools used"
                    value="TouchDesigner · Logic Pro X · Networked cameras · Camera tracking · Sensors · Arduino-based elements · Web technologies"
                  />
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-5 md:col-start-2 md:self-center">
            <SectionLabel number="04" text="The QR narrative" dark />
            <h2 className="mt-7 font-display text-4xl leading-[1.02] text-bone md:text-6xl">
              A story entered through the visitor’s phone
            </h2>
            <div className="mt-8 space-y-6 text-base leading-[1.85] text-bone/65">
              <p>
                The DIVIDUAL mobile experience used the familiar action of
                scanning a QR code as the entrance to a fictional corporate
                system.
              </p>
              <p>
                Instead of functioning only as information or registration, the
                phone became part of the artwork. Visitors entered a
                visual-novel-style narrative in which choices, interfaces and
                corporate language shaped their relationship with DIVIDUAL.
              </p>
              <p>
                Each participant encountered part of the company privately
                through their own device while remaining inside a collective
                public environment.
              </p>
            </div>

            {DIVIDUAL_GITHUB_URL ? (
              <a
                href={DIVIDUAL_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex border-b border-copper pb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-copper transition-colors hover:text-bone"
              >
                View source on GitHub →
              </a>
            ) : (
              <p className="mt-9 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/40">
                Source link to be added
              </p>
            )}
          </div>

          <div
            className="col-span-12 reveal md:col-span-4 md:col-start-8"
            data-reveal-delay="100"
          >
            <PhoneNarrative />
          </div>
        </div>
      </section>

      <section className="grain relative py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-5 md:col-start-1 md:self-center">
            <SectionLabel number="05" text="The responsive camera system" />
            <h2 className="mt-7 font-display text-4xl leading-[1.02] md:text-6xl">
              When the room notices you
            </h2>
            <div className="mt-8 space-y-6 text-base leading-[1.85] text-ink-soft">
              <p>
                Networked cameras fed visual information into
                TouchDesigner-based systems operating throughout the
                installation.
              </p>
              <p>
                Carrying a bag might change the soundscape; presenting another
                object could trigger a spoken or displayed reaction. The
                installation appeared to recognise the visitor while leaving the
                boundaries between automation, performance and illusion
                uncertain.
              </p>
              <p>
                Visitors were never entirely sure how much the system genuinely
                understood, how much had been designed in advance and how much
                depended on human intervention.
              </p>
            </div>
          </div>

          <div
            className="col-span-12 reveal md:col-span-6 md:col-start-7"
            data-reveal-delay="100"
          >
            <ProjectFigure
              src={visual("uploading", 1400, 1050)}
              alt="Temporary visual placeholder for a visitor entering the DIVIDUAL Dreamcatcher loop"
              plate="Plate 03 · Visitor analysis"
              caption="A visitor enters the Dreamcatcher loop as visual and sonic data appear to be uploaded into the DIVIDUAL system."
            />
          </div>
        </div>
      </section>

      <section className="grain relative pb-28 pt-12 md:pb-36 md:pt-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-6">
            <ProjectFigure
              src={visual("magic", 1400, 1050)}
              alt="Temporary visual placeholder for Siddharth performing magic inside DIVIDUAL"
              plate="Plate 04 · Magic inside the system"
              caption="An intimate prediction encounter inside the larger corporate showroom."
            />
          </div>

          <div
            className="col-span-12 reveal md:col-span-5 md:col-start-8 md:self-center"
            data-reveal-delay="100"
          >
            <SectionLabel number="06" text="Magic inside the system" />
            <h2 className="mt-7 font-display text-4xl leading-[1.02] md:text-6xl">
              Prediction, dreams and manufactured certainty
            </h2>
            <div className="mt-8 space-y-6 text-base leading-[1.85] text-ink-soft">
              <p>
                Within the installation, I performed as DIVIDUAL’s magician.
              </p>
              <p>
                The interaction centred on a card prediction connected to the
                visitor’s dreams. Magic offered another form of apparent
                technological intelligence: information seemed to be known
                before it had been disclosed, while coincidence was framed as
                evidence of the system’s power.
              </p>
              <p>
                The small-table encounter contrasted with the larger screens and
                automated technologies around it, replacing the distant
                authority of the corporation with a direct exchange between
                performer and participant.
              </p>
            </div>
            <blockquote className="mt-10 border-l-2 border-copper pl-6">
              <p className="font-display text-3xl italic leading-snug md:text-4xl">
                How much does the system already know about you?
              </p>
            </blockquote>
            <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
              Performance documentation forthcoming
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-5 md:col-start-2">
            <SectionLabel number="07" text="Related performance" dark />
            <h2 className="mt-7 font-display text-5xl leading-[0.95] text-bone md:text-7xl">
              From installation to stage
            </h2>
            <div className="mt-8 space-y-6 text-base leading-[1.85] text-bone/65">
              <p>
                Alongside the installation, I performed with Masala 3, joined by
                Abhiroop on guitar and Aishwaria.
              </p>
              <p>
                The performance combined piano, beatboxing, guitar, voice,
                audiovisual processing and gesture-controlled electronics. Using
                MediaPipe and Ableton Live, I controlled aspects of the guitar’s
                delay and reverb through physical movement while also performing
                piano and beatbox.
              </p>
              <p>
                The result extended DIVIDUAL’s concerns into live music: bodies,
                instruments and digital systems continuously affected one
                another, with control distributed across performers and
                technology.
              </p>
            </div>
          </div>

          <div
            className="col-span-12 reveal md:col-span-5 md:col-start-8"
            data-reveal-delay="100"
          >
            <figure className="border border-white/12 bg-espresso-2 p-4 md:p-5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={visual("masala-performance", 1400, 1050)}
                  alt="Temporary visual placeholder for Masala 3 performing at Hidden Door"
                  className="h-full w-full object-cover grayscale-[20%]"
                />
              </div>
              <figcaption className="p-2 pb-1 pt-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-copper">
                  Related performance
                </p>
                <h3 className="mt-3 font-display text-3xl text-bone">
                  Masala 3 at Hidden Door
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone/60">
                  Audiovisual performance for piano, beatbox, guitar, voice and
                  gesture-controlled electronics.
                </p>
                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/40">
                  Performance page forthcoming
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="grain relative py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 reveal md:col-span-3">
              <SectionLabel number="08" text="Collective process" />
            </div>
            <div
              className="col-span-12 reveal md:col-span-7 md:col-start-5"
              data-reveal-delay="60"
            >
              <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
                Built through exchange
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-[1.85] text-ink-soft">
                DIVIDUAL was developed over two months through weekend
                workshops, additional weekday sessions, technical
                experimentation and collective installation work. Its identity
                emerged through negotiations between different artistic and
                technical contributions rather than from one central author.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-6 md:mt-24">
            <div className="col-span-12 reveal md:col-span-7">
              <ProjectFigure
                src={visual("collective", 1600, 1050)}
                alt="Temporary visual placeholder for visitors exploring DIVIDUAL products"
                plate="Plate 05 · Collective installation"
                caption="Visitors encounter a showroom assembled from many connected products, systems and artistic contributions."
              />
            </div>
            <ol className="col-span-12 reveal md:col-span-4 md:col-start-9">
              {process.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-espresso/15 py-5"
                >
                  <span className="font-mono text-[9px] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="grain relative pb-28 pt-12 md:pb-40 md:pt-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <SectionLabel number="09" text="Reflection" />
          </div>
          <div
            className="col-span-12 reveal md:col-span-7 md:col-start-5"
            data-reveal-delay="60"
          >
            <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Learning to share control
            </h2>
            <div className="mt-10 space-y-7 text-lg leading-[1.9] text-ink-soft">
              <p>
                DIVIDUAL changed how I thought about collaboration and
                participatory technology. Much of my previous work had begun
                with music; here, I entered a process in which the world of the
                project was constructed collectively across visual art,
                installation, physical computing, performance and fiction.
              </p>
              <p>
                Learning TouchDesigner and working with networked cameras
                expanded my technical practice, but the most important change
                was conceptual. Technology became less of an instrument to
                demonstrate and more of a social situation that people could
                question, interrupt and play with.
              </p>
              <p>
                The project showed me how live performance, magic and
                installation could belong within the same artistic world. Each
                offered a different way of shaping attention and belief.
              </p>
              <p>
                What remained with me most was the value of making technology
                accessible without making it predictable. Visitors did not need
                to understand the code or equipment. They only needed to enter,
                become curious and begin to test the limits of the system.
              </p>
            </div>
            <blockquote className="mt-12 border-l-2 border-copper pl-7">
              <p className="font-display text-3xl italic leading-snug md:text-5xl">
                Technology became less of an instrument to demonstrate and more
                of a social situation.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative py-24 md:py-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
          <div className="col-span-12 reveal md:col-span-3">
            <SectionLabel number="10" text="Credits" dark />
            <p className="mt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-bone/35">
              Participating artist credits pending final verification
            </p>
          </div>
          <div
            className="col-span-12 reveal md:col-span-8 md:col-start-5"
            data-reveal-delay="60"
          >
            <h2 className="font-display text-4xl text-bone md:text-5xl">
              Project information
            </h2>
            <dl className="mt-10 grid gap-x-10 md:grid-cols-2">
              <Credit label="Project" value="DIVIDUAL" />
              <Credit
                label="Context"
                value="Interactive installation developed through Room to Play"
              />
              <Credit
                label="Presented by"
                value="Tinderbox Collective and Ray Interactive"
              />
              <Credit
                label="Presented at"
                value="Hidden Door 2026, Edinburgh"
              />
              <Credit label="Development period" value="Two months, 2026" />
              <Credit label="Created by" value="The Room to Play artists" />
              <Credit
                label="Siddharth Biswas"
                value="Interactive systems · Networked camera development · TouchDesigner · Digital narrative development · Soundscape creation · Live performance · Magic and audience interaction · Collective installation development"
              />
              <Credit label="Photography" value="Chris Scott" />
            </dl>
          </div>
        </div>
      </section>

      <section className="section-dark grain-dark relative border-t border-white/10">
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

function SectionLabel({
  number,
  text,
  dark = false,
}: {
  number: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-[10px] uppercase tracking-[0.24em] ${
        dark ? "text-copper" : "text-copper"
      }`}
    >
      {number} · {text}
    </p>
  );
}

function ProjectFigure({
  src,
  alt,
  plate,
  caption,
}: {
  src: string;
  alt: string;
  plate: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="group aspect-[4/3] overflow-hidden bg-bone-2">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover grayscale-[18%] transition-transform duration-[1000ms] group-hover:scale-[1.025]"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-4 grid gap-2 border-t border-espresso/15 pt-3 sm:grid-cols-[10rem_1fr]">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-copper">
          {plate}
        </span>
        <span className="text-xs leading-relaxed text-ink-soft">
          {caption} Temporary visual reference.
        </span>
      </figcaption>
    </figure>
  );
}

function Contribution({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="reveal grid grid-cols-[3rem_1fr] gap-4 border-t border-espresso/15 pt-6">
      <span className="font-mono text-[9px] tracking-[0.18em] text-copper">
        {number}
      </span>
      <div>
        <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-2xl text-base leading-[1.8] text-ink-soft">
          {text}
        </p>
      </div>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-6 border-t border-espresso/15 pt-4">
      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-copper">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{value}</dd>
    </div>
  );
}

function Credit({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/15 py-5">
      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-copper">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-bone/65">{value}</dd>
    </div>
  );
}

function PhoneNarrative() {
  return (
    <figure>
      <div className="mx-auto max-w-[20rem] rounded-[2.25rem] border border-white/25 bg-bone p-3 shadow-2xl shadow-black/30">
        <div className="overflow-hidden rounded-[1.65rem] border border-espresso/15 bg-bone-2">
          <div className="flex items-center justify-between border-b border-espresso/15 px-5 py-4 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-soft">
            <span>DIVIDUAL OS</span>
            <span className="text-copper">Connected</span>
          </div>
          <div className="px-6 py-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-copper">
              Visitor profile · 001
            </p>
            <h3 className="mt-8 font-display text-4xl leading-none">
              Welcome.
              <br />
              We already know you.
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Your choices help us build a more personal experience.
            </p>
            <div className="mt-10 space-y-3">
              <div className="border border-espresso/20 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                Continue willingly
              </div>
              <div className="border border-espresso/20 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                Ask what is collected
              </div>
              <div className="border border-copper bg-copper px-4 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-bone">
                Begin analysis →
              </div>
            </div>
          </div>
          <div className="border-t border-espresso/15 px-5 py-4 font-mono text-[8px] uppercase tracking-[0.16em] text-ink-soft">
            Scan → enter → choose → return
          </div>
        </div>
      </div>
      <figcaption className="mx-auto mt-5 max-w-[20rem] font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-bone/40">
        Interface study · representative placeholder
      </figcaption>
    </figure>
  );
}
