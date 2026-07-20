export type RepertoireArtStyle =
  | "bach"
  | "tempest"
  | "moonlight"
  | "chopin"
  | "rachmaninoff"
  | "glass"
  | "part"
  | "gubaidulina"
  | "felitsa";

export type PianoRepertoireWork = {
  number: string;
  chapter: 1 | 2 | 3 | 4 | 5;
  composer: string;
  title: string;
  movement?: string;
  description: string;
  art: RepertoireArtStyle;
  /** Add an embeddable performance-video URL here when it is ready. */
  videoUrl?: string;
};

export const pianoRepertoire: PianoRepertoireWork[] = [
  {
    number: "01",
    chapter: 1,
    composer: "Johann Sebastian Bach",
    title: "Prelude in C Minor, BWV 847",
    description:
      "This prelude became a study in precision, independence and musical direction. Although its patterns appear highly ordered, the music must never feel static. The challenge was to give each progression a clear destination while maintaining clarity between the hands and consistency of articulation. It strengthened the technical foundation of my playing and showed me how expressive tension can emerge from structure itself.",
    art: "bach",
  },
  {
    number: "02",
    chapter: 2,
    composer: "Ludwig van Beethoven",
    title: "Piano Sonata No. 17 in D Minor, Op. 31 No. 2, “The Tempest”",
    movement: "III. Allegretto",
    description:
      "The final movement of the Tempest Sonata taught me how momentum can be sustained through articulation, rhythm and harmonic direction. Beneath its continuous motion lies a sense of tension and instability. I approached it as a dramatic argument in which each recurring figure contributes to a larger feeling of urgency.",
    art: "tempest",
  },
  {
    number: "03",
    chapter: 2,
    composer: "Ludwig van Beethoven",
    title: "Piano Sonata No. 14 in C-sharp Minor, Op. 27 No. 2, “Moonlight”",
    movement: "III. Presto agitato",
    description:
      "The third movement of the Moonlight Sonata was an important stage in developing my technical endurance and control. Its rapid figurations, forceful gestures and sudden contrasts require considerable physical energy, but also clarity and organisation. The virtuosity must support the dramatic architecture of the movement rather than becoming an end in itself.",
    art: "moonlight",
  },
  {
    number: "04",
    chapter: 3,
    composer: "Frédéric Chopin",
    title: "Nocturne in C-sharp Minor, Op. posth.",
    description:
      "This nocturne developed my understanding of lyrical phrasing, rubato, pedalling and voicing. The challenge was to make the melodic line feel vocal and spontaneous while preserving a quiet underlying structure. It taught me that emotional expression can become more powerful through restraint.",
    art: "chopin",
  },
  {
    number: "05",
    chapter: 3,
    composer: "Sergei Rachmaninoff",
    title: "Prelude in C-sharp Minor, Op. 3 No. 2",
    description:
      "This prelude introduced me to the physical weight and orchestral potential of the piano. I worked on producing depth without harshness and shaping its large climactic gestures without revealing all of the intensity too early. It became a study in pacing, sonority and controlled power.",
    art: "rachmaninoff",
  },
  {
    number: "06",
    chapter: 4,
    composer: "Philip Glass",
    title: "“Opening” from Glassworks",
    description:
      "Learning Opening changed the way I listened to repetition. Its recurring patterns expose small differences in touch, timing and tone. The piece taught me to remain attentive to subtle changes while sustaining a continuous atmosphere.",
    art: "glass",
  },
  {
    number: "07",
    chapter: 4,
    composer: "Arvo Pärt",
    title: "Für Alina",
    description:
      "Für Alina places great importance on the weight, duration and resonance of every sound. It encouraged me to become comfortable with silence and to resist over-shaping the music. Interpretation became a process of allowing each sound to exist and decay fully.",
    art: "part",
  },
  {
    number: "08",
    chapter: 4,
    composer: "Sofia Gubaidulina",
    title: "The Trumpeter in the Forest",
    description:
      "This miniature opened a more theatrical and imaginative relationship with the piano. It encouraged me to think about character, distance, echo and colour, treating the keyboard as a landscape in which a musical figure can appear, call out and disappear.",
    art: "gubaidulina",
  },
  {
    number: "09",
    chapter: 5,
    composer: "Yanni",
    title: "Felitsa",
    description:
      "Felitsa occupies a more personal and directly lyrical space within my repertoire. Its flowing melodic writing allowed me to explore warmth, simplicity and emotional communication. It reminded me that a clearly shaped melody and sensitive accompaniment can create an immediate connection with the listener.",
    art: "felitsa",
  },
];
