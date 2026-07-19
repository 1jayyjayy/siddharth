import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Music,
  Target,
  Users2,
  Video,
  type LucideIcon,
} from "lucide-react";

import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Lessons — Siddharth Biswas" },
      {
        name: "description",
        content:
          "Piano lessons, composition mentorship, ensemble coaching, and online music tuition with Siddharth Biswas.",
      },
      { property: "og:title", content: "Lessons — Siddharth Biswas" },
      {
        property: "og:description",
        content:
          "Individual, group, and online music lessons shaped around each student's musical goals.",
      },
    ],
  }),
  component: Lessons,
});

type LessonCategory = "individual" | "group" | "online";

type Lesson = {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  icon: LucideIcon;
  features: string[];
};

type Testimonial = {
  id: number;
  name: string;
  initials: string;
  type: string;
  content: string;
};

const categories: Array<{
  id: LessonCategory;
  label: string;
  note: string;
}> = [
  {
    id: "individual",
    label: "Individual",
    note: "One-to-one development",
  },
  {
    id: "group",
    label: "Group",
    note: "Listening and collaboration",
  },
  {
    id: "online",
    label: "Online",
    note: "Flexible, location-independent study",
  },
];

const lessonsData: Record<LessonCategory, Lesson[]> = {
  individual: [
    {
      id: 1,
      title: "Piano Artistry Programme",
      description:
        "One-to-one piano lessons designed to refine technique, broaden repertoire, and develop a more confident and individual musical voice.",
      price: 90,
      duration: "60 minutes",
      icon: Music,
      features: [
        "A curriculum shaped around your goals",
        "Technique, movement, and healthy playing habits",
        "Repertoire, interpretation, and musical expression",
        "Performance confidence and stage preparation",
        "Integrated theory, listening, and musical context",
      ],
    },
    {
      id: 2,
      title: "Composition & Production Mentorship",
      description:
        "Focused guidance for developing musical ideas—from sketches and harmonic material to notation, arrangement, electronics, and finished work.",
      price: 100,
      duration: "75 minutes",
      icon: Target,
      features: [
        "Composition techniques and idea development",
        "Orchestration, arrangement, and musical structure",
        "DAWs, notation software, and creative technology",
        "Detailed feedback on work in progress",
        "Portfolio and project-development guidance",
      ],
    },
  ],
  group: [
    {
      id: 3,
      title: "Chamber Ensemble Intensive",
      description:
        "Collaborative coaching for duos, trios, quartets, and other small ensembles, with close attention to balance, communication, and interpretation.",
      price: 150,
      duration: "90 minutes per group",
      icon: Users2,
      features: [
        "Ensemble balance, blend, and rhythmic clarity",
        "Shared interpretation and musical direction",
        "Constructive rehearsal methods",
        "Performance preparation and feedback",
        "Repertoire exploration and programming",
      ],
    },
  ],
  online: [
    {
      id: 4,
      title: "Virtual Piano Studio",
      description:
        "Detailed online piano tuition for students who need geographical flexibility without losing structure, continuity, or thoughtful feedback.",
      price: 75,
      duration: "45 minutes",
      icon: Video,
      features: [
        "Flexible scheduling across time zones",
        "Shared digital scores and lesson resources",
        "Optional lesson recordings for review",
        "Clear practice plans between sessions",
        "Ongoing written feedback where useful",
      ],
    },
  ],
};

/*
 * Replace these with real, permission-cleared testimonials before publishing.
 */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Rossi",
    initials: "IR",
    type: "Advanced piano student",
    content:
      "The depth of musical insight and technical guidance in these lessons is unparalleled. My playing has reached expressive heights I had only imagined.",
  },
  {
    id: 2,
    name: "Kenji Tanaka",
    initials: "KT",
    type: "Composition mentee",
    content:
      "The mentorship transformed my compositional process. I gained confidence, a clearer artistic direction, and a much stronger way of evaluating my own work.",
  },
  {
    id: 3,
    name: "Chloe Dubois",
    initials: "CD",
    type: "Ensemble musician",
    content:
      "The focused attention on listening and interplay changed how our ensemble rehearses. The sessions were precise, generous, and immediately useful.",
  },
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Lessons() {
  const [activeTab, setActiveTab] =
    useState<LessonCategory>("individual");

  const currentCategory =
    categories.find((category) => category.id === activeTab) ?? categories[0];

  return (
    <div className="min-h-screen bg-bone text-espresso">
      <Hero />

      <main>
        <section className="grain relative pb-24 md:pb-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <LessonTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div
              id={`${activeTab}-lessons`}
              className="mt-12 md:mt-16"
              role="tabpanel"
              aria-label={`${currentCategory.label} lessons`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className={[
                    "grid grid-cols-12 gap-6",
                    lessonsData[activeTab].length === 1
                      ? "md:max-w-4xl"
                      : "",
                  ].join(" ")}
                >
                  {lessonsData[activeTab].map((lesson, index) => (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      index={index}
                      single={lessonsData[activeTab].length === 1}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <Testimonials />

        <StudioInformation />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-24 h-72 w-72 rounded-full border border-copper/25 md:h-[28rem] md:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3rem] top-44 h-44 w-44 rounded-full border border-espresso/10 md:h-72 md:w-72"
      />

      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="col-span-12 md:col-span-8 md:col-start-2"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            Volume II — Lessons &amp; mentorship
          </p>

          <h1 className="mt-7 max-w-5xl font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.84]">
            Learn the craft.
            <br />
            <span className="font-light italic">Find your sound.</span>
          </h1>

          <div className="mt-10 grid max-w-4xl grid-cols-1 gap-6 border-t border-espresso/15 pt-6 md:grid-cols-8">
            <p className="md:col-span-5 text-base leading-relaxed text-ink-soft md:text-lg">
              Individual teaching in piano, composition, production, and
              collaborative music-making—built around the way each student
              listens, moves, thinks, and creates.
            </p>

            <div className="md:col-span-3 md:border-l md:border-espresso/15 md:pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
                Formats
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Individual
                <br />
                Ensemble
                <br />
                Online
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LessonTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: LessonCategory;
  setActiveTab: (tab: LessonCategory) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="border-y border-espresso/15"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        role="tablist"
        aria-label="Lesson formats"
      >
        {categories.map((category, index) => {
          const active = category.id === activeTab;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`${category.id}-lessons`}
              onClick={() => setActiveTab(category.id)}
              className={[
                "group relative min-h-28 px-5 py-6 text-left transition-colors duration-300",
                index !== categories.length - 1
                  ? "border-b border-espresso/15 md:border-r md:border-b-0"
                  : "",
                active
                  ? "bg-espresso text-bone"
                  : "bg-transparent text-espresso hover:bg-bone-2",
              ].join(" ")}
            >
              <span
                className={[
                  "font-mono text-[9px] uppercase tracking-[0.22em]",
                  active ? "text-copper-soft" : "text-copper",
                ].join(" ")}
              >
                0{index + 1}
              </span>

              <span className="mt-3 flex items-end justify-between gap-4">
                <span>
                  <span className="block font-display text-3xl">
                    {category.label}
                  </span>
                  <span
                    className={[
                      "mt-1 block text-xs",
                      active ? "text-bone/65" : "text-ink-soft",
                    ].join(" ")}
                  >
                    {category.note}
                  </span>
                </span>

                <ArrowUpRight
                  className={[
                    "h-4 w-4 shrink-0 transition-transform duration-300",
                    active
                      ? "text-copper-soft"
                      : "text-copper group-hover:-translate-y-1 group-hover:translate-x-1",
                  ].join(" ")}
                />
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function LessonCard({
  lesson,
  index,
  single,
}: {
  lesson: Lesson;
  index: number;
  single: boolean;
}) {
  const Icon = lesson.icon;

  return (
    <motion.article
      id={`${lesson.id}-lesson`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: easeOut,
      }}
      className={[
        "card-artifact col-span-12 flex min-h-[36rem] flex-col p-6 sm:p-8 lg:p-10",
        single
          ? "md:col-span-9 lg:col-span-8"
          : "md:col-span-6",
        index % 2 === 1 ? "md:translate-y-8" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-copper/35 bg-copper/10">
          <Icon className="h-6 w-6 text-copper" strokeWidth={1.6} />
        </div>

        <div className="text-right font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
          Lesson {String(index + 1).padStart(2, "0")}
          <br />
          Private study
        </div>
      </div>

      <div className="mt-10">
        <h2 className="max-w-xl font-display text-4xl leading-[0.95] md:text-5xl">
          {lesson.title}
        </h2>
        <div className="mt-6 h-px w-20 bg-copper" />

        <p className="mt-6 max-w-xl text-sm leading-7 text-ink-soft md:text-base">
          {lesson.description}
        </p>
      </div>

      <div className="mt-9 border-y border-espresso/15 py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-display text-3xl">
            ${lesson.price}
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
            {lesson.duration}
          </p>
        </div>
      </div>

      <ul className="mt-7 space-y-3">
        {lesson.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-relaxed text-espresso"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-copper"
              strokeWidth={1.8}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="group mt-auto flex items-center justify-between border-t border-espresso/15 pt-6"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper transition-colors group-hover:text-espresso">
          Enquire about this lesson
        </span>
        <ArrowUpRight className="h-5 w-5 text-copper transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}

function Testimonials() {
  return (
    <section className="section-dark grain-dark relative py-24 md:py-32">
      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="col-span-12 md:col-span-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper-soft">
            Listening notes
          </p>
          <h2 className="mt-6 font-display text-5xl leading-[0.92] md:text-6xl">
            Voices of
            <br />
            <span className="font-light italic">progress.</span>
          </h2>
          <p className="mt-7 max-w-sm text-sm leading-7 text-bone/65">
            Learning is not a straight line. These reflections trace changes
            in confidence, technique, listening, and artistic direction.
          </p>
        </motion.div>

        <div className="col-span-12 mt-10 grid grid-cols-1 gap-px bg-bone/15 md:col-span-8 md:mt-0 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: easeOut,
      }}
      className="flex min-h-[25rem] flex-col bg-espresso p-6 md:p-8"
    >
      <p className="font-display text-6xl leading-none text-copper-soft/75">
        “
      </p>

      <blockquote className="mt-3 flex-grow font-display text-2xl leading-snug text-bone">
        {testimonial.content}
      </blockquote>

      <footer className="mt-10 border-t border-bone/15 pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-copper-soft/40 font-mono text-[10px] tracking-[0.16em] text-copper-soft">
            {testimonial.initials}
          </div>
          <div>
            <p className="text-sm text-bone">{testimonial.name}</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-bone/45">
              {testimonial.type}
            </p>
          </div>
        </div>
      </footer>
    </motion.article>
  );
}

function StudioInformation() {
  return (
    <section className="grain relative py-24 md:py-32">
      <div className="relative z-[2] mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="col-span-12 border border-espresso/15 bg-bone-2"
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 border-b border-espresso/15 p-7 md:col-span-4 md:border-r md:border-b-0 md:p-10">
              <CalendarDays
                className="h-8 w-8 text-copper"
                strokeWidth={1.5}
              />
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
                Studio information
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[0.95] md:text-5xl">
                A clear frame
                <br />
                <span className="font-light italic">for the work.</span>
              </h2>
            </div>

            <div className="col-span-12 grid grid-cols-1 md:col-span-8 md:grid-cols-3">
              <InfoColumn
                number="01"
                title="Scheduling"
                items={[
                  "48-hour notice for cancellations",
                  "Flexible rescheduling where possible",
                  "Monthly or term-based arrangements",
                  "An initial conversation before beginning",
                ]}
              />
              <InfoColumn
                number="02"
                title="Learning"
                items={[
                  "Regular, realistic practice",
                  "Curiosity and active participation",
                  "Materials prepared before sessions",
                  "Space to question and experiment",
                ]}
              />
              <InfoColumn
                number="03"
                title="Formats"
                items={[
                  "One-to-one tuition",
                  "Small-ensemble coaching",
                  "Online sessions",
                  "Project and portfolio mentoring",
                ]}
                last
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 border-t border-espresso/15 px-7 py-7 md:flex-row md:items-center md:justify-between md:px-10">
            <p className="max-w-2xl text-sm leading-6 text-ink-soft">
              Tell me what you are working toward, what you have already tried,
              and what kind of musician you would like to become.
            </p>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-4 bg-espresso px-6 py-4 text-bone transition-colors hover:bg-copper"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Inquire about lessons
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoColumn({
  number,
  title,
  items,
  last = false,
}: {
  number: string;
  title: string;
  items: string[];
  last?: boolean;
}) {
  return (
    <div
      className={[
        "p-7 md:p-8",
        last ? "" : "border-b border-espresso/15 md:border-r md:border-b-0",
      ].join(" ")}
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-copper">
        {number}
      </p>
      <h3 className="mt-4 font-display text-2xl">{title}</h3>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs leading-5 text-ink-soft"
          >
            <span className="mt-[0.45rem] h-px w-3 shrink-0 bg-copper" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
