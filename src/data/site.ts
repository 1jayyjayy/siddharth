// Central content store — edit here to update the site.

export const site = {
  name: "Siddharth Biswas",
  title: "Composer, Performer & Creative Music Technology Researcher",
  statement:
    "Working with gesture, body movement, EEG, camera tracking, and interactive systems to compose new relationships between performer, technology, and sound.",
  location: "Edinburgh / Scotland",
  email: "siddhu.biswas@gmail.com",
  socials: [
    { label: "Email", value: "siddhu.biswas@gmail.com", href: "mailto:siddhu.biswas@gmail.com", kind: "channel" },
    { label: "Instagram — performance archive", value: "@sid.biswas", href: "https://instagram.com/the_fallen_symphony/", kind: "instrument" },
    { label: "LinkedIn", value: "@sid.biswas", href: "https://uk.linkedin.com/in/siddharth-biswas-639866207", kind: "instrument" },
    { label: "Facebook", value: "@sid.biswas", href: "https://www.facebook.com/siddharth.biswas.37", kind: "instrument" },
    { label: "Whatsapp", value: "@sid.biswas", href: "https://wa.me/447432499307", kind: "instrument" },
    // { label: "YouTube — documentation", value: "Siddharth Biswas", href: "https://youtube.com", kind: "instrument" },  
    { label: "Google Scholar", value: "Publications & citations", href: "https://scholar.google.com", kind: "channel" },
    { label: "ResearchGate", value: "PhD progress & preprints", href: "https://researchgate.net", kind: "channel" },
    { label: "GitHub — /gesture-studies", value: "Open patches & sketches", href: "https://github.com", kind: "instrument" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  kind: string;
  tags: string[];
  summary: string;
  concept: string;
  system: string;
  context: string;
  setup: string[];
  reflection: string;
  image: string;
};

// Placeholder imagery — deterministic picsum seeds so layouts read as finished.
const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/sb-${seed}/${w}/${h}`;

export const projects: Project[] = [
  {
    slug: "gesture-to-midi-studies",
    title: "Gesture-to-MIDI Studies",
    year: "2024–",
    kind: "System / Etude",
    tags: ["MediaPipe", "MIDI", "Max/MSP", "solo"],
    summary:
      "A running set of studies mapping hand posture and micro-movement onto MIDI streams for acoustic and hybrid instruments.",
    concept:
      "How small can a gesture be before it stops feeling like control and starts feeling like intention? Each study isolates a single mapping — pinch to pitch, wrist tilt to filter, breath-width to velocity — and lets it play until it exhausts itself.",
    system:
      "MediaPipe Hands → OSC bridge in Python → Max/MSP scheduler → MIDI to Ableton Live and Kontakt. Latency measured at 24–32 ms end-to-end. A shadow log writes every landmark to disk for later re-scoring.",
    context:
      "First performed at the Sonic Arts Research Centre, Belfast, as part of a doctoral seminar. Later reworked for a solo set at Cafe OTO's weekday programme.",
    setup: [
      "Logitech Brio, 60 fps, fixed on a mic stand at chest height",
      "MacBook Pro (M2) running MediaPipe + Max 8",
      "Ableton Live 12 with a curated Kontakt library (prepared piano, tanpura, air)",
      "Genelec 8030s in near-field, sub optional",
    ],
    reflection:
      "The mappings that survived were the ones I could feel with my eyes closed. Sight-through-camera became a kind of proprioception I hadn't planned for.",
    image: img("gesture", 1600, 1000),
  },
  {
    slug: "room-as-a-score",
    title: "Room as a Score",
    year: "2024",
    kind: "Site-specific / Installation",
    tags: ["camera tracking", "spatial", "generative"],
    summary:
      "A performance where the geometry of the room — walls, doorways, seated bodies — is read as a score in real time.",
    concept:
      "The room writes itself. Audience configuration, my position, and the negative space between us all contribute to a shifting graphic score projected on the back wall.",
    system:
      "Overhead depth camera (Azure Kinect) → point cloud segmentation → SVG score renderer in TouchDesigner → live routed to a chamber ensemble via click-track cues and to a bed of granular textures in SuperCollider.",
    context:
      "Premiered at a small chapel in South London for three consecutive evenings. Each night's audience produced a genuinely different score.",
    setup: [
      "Azure Kinect DK, ceiling-mounted, 30 fps depth",
      "TouchDesigner 2023 for segmentation and rendering",
      "SuperCollider bed on a Mac mini, routed via Dante",
      "Short-throw projector on the rear wall",
    ],
    reflection:
      "I stopped thinking of the audience as observers of the score and started thinking of them as its ink.",
    image: img("room", 1600, 1000),
  },
  {
    slug: "audience-bubble-patterns",
    title: "Audience Bubble Patterns",
    year: "2023",
    kind: "Performance / Study",
    tags: ["proxemics", "camera", "ensemble"],
    summary:
      "Studies in how the personal-space bubbles of an audience deform under sound, mapped to ensemble dynamics.",
    concept:
      "Proxemics as a live parameter. When the audience leans in, the ensemble leans back. When they settle, the bass returns.",
    system:
      "Two ceiling cameras, YOLO-based person detection, per-person radial density → OSC to a conducting patch that biases ensemble volume and register in real time.",
    context: "Part of a residency at IKLECTIK, London, spring 2023.",
    setup: [
      "2× IP cameras, RTSP into a Linux edge node",
      "Ultralytics YOLOv8 with a custom small model",
      "OSC to Max/MSP conducting patch",
      "In-ear monitors for the ensemble, no visible score",
    ],
    reflection:
      "I learned that quiet audiences are not passive audiences — they are a specific kind of dense.",
    image: img("bubble", 1600, 1000),
  },
  {
    slug: "multi-camera-tracking-experiments",
    title: "Multi-Camera Tracking Experiments",
    year: "2024",
    kind: "Research / Rig",
    tags: ["calibration", "fusion", "OpenCV"],
    summary:
      "Building a low-cost multi-camera rig that fuses three viewpoints into a single skeletal track for stage use.",
    concept:
      "Occlusion is the enemy of embodied performance. Three cameras and a modest laptop should be enough to keep a body legible.",
    system:
      "Three IMX-based USB cameras, checkerboard-calibrated. Per-camera MediaPipe pose → confidence-weighted 3D fusion → single skeleton stream over OSC.",
    context:
      "Bench work in the studio; used to prototype the tracking layer of Room as a Score and Dance and MediaPipe Studies.",
    setup: [
      "3× ELP 4K USB cameras, USB 3.0 hub",
      "Custom Python fusion pipeline (open source, /gesture-studies)",
      "Sync via hardware trigger where possible, timestamp align otherwise",
    ],
    reflection:
      "Calibration is a form of listening. You cannot fuse what you have not first agreed on.",
    image: img("multicam", 1600, 1000),
  },
  {
    slug: "eeg-and-gesture-research",
    title: "EEG + Gesture Research",
    year: "2025",
    kind: "PhD study",
    tags: ["EEG", "Muse", "mapping", "embodiment"],
    summary:
      "Investigating whether frontal EEG bands can be combined with hand gesture to produce a two-layered performance interface.",
    concept:
      "Gesture is what a performer decides. EEG is what a performer cannot help. The interesting music sits where those two disagree.",
    system:
      "Muse 2 (or OpenBCI Ganglion) → BrainFlow → band-power extraction → normalised control stream, joined with MediaPipe hand features. Mapped to a granular engine and a tuned feedback network.",
    context: "Formal study inside the PhD; ethics approved 2024.",
    setup: [
      "Muse 2 headband, dry electrodes",
      "BrainFlow Python bindings",
      "Custom Max patch for gesture/EEG fusion",
      "Baseline calibration before each run",
    ],
    reflection:
      "The technology asks for stillness. My practice asks for movement. Composing between those is the actual instrument.",
    image: img("eeg", 1600, 1000),
  },
  {
    slug: "dance-and-mediapipe-studies",
    title: "Dance and MediaPipe Studies",
    year: "2024–",
    kind: "Collaboration",
    tags: ["MediaPipe", "dance", "duo"],
    summary:
      "Duet work with a contemporary dancer, treating MediaPipe pose as a third performer with its own tempo.",
    concept:
      "The camera does not see dance the way a dancer feels it. That mismatch is the score.",
    system:
      "Single front-facing camera → MediaPipe full-body pose → derived features (limb angle rate, centroid drift) → live-tuned SuperCollider ensemble.",
    context:
      "Work-in-progress showings at The Yard, Hackney, and a research seminar at Goldsmiths.",
    setup: [
      "Single 60 fps camera, wide lens",
      "MediaPipe pose (heavy) on a mid-range GPU laptop",
      "SuperCollider on a second machine, OSC linked",
    ],
    reflection:
      "We stopped choreographing to the system and started letting the system misread us on purpose.",
    image: img("dance", 1600, 1000),
  },
];

// export const performances = [
//   { date: "2026-04-11", venue: "NIME 2026, Canberra", city: "AU", title: "Gesture / EEG Duet (solo)", note: "Paper + performance in the main programme.", image: img("perf1", 900, 600) },
//   { date: "2025-11-02", venue: "Cafe OTO", city: "London", title: "Weekday set — Gesture-to-MIDI Studies", note: "Long-form solo, second of three commissioned nights.", image: img("perf2", 900, 600) },
//   { date: "2025-06-14", venue: "SARC Sonorities Festival", city: "Belfast", title: "Room as a Score (revival)", note: "Reworked for the Sonic Lab, with in-house ensemble.", image: img("perf3", 900, 600) },
//   { date: "2025-03-08", venue: "IKLECTIK", city: "London", title: "Audience Bubble Patterns", note: "Residency closing performance.", image: img("perf4", 900, 600) },
//   { date: "2024-10-21", venue: "The Yard", city: "London", title: "Dance and MediaPipe (WIP)", note: "Duet showing with Ana R. — 30 minutes.", image: img("perf5", 900, 600) },
//   { date: "2024-05-17", venue: "Chapel, South London", city: "London", title: "Room as a Score — premiere", note: "Three consecutive evenings, distinct scores.", image: img("perf6", 900, 600) },
// ];

export const performances = [
  {
    slug: "gesture-eeg-duet-solo",
    date: "2026-04-11",
    venue: "NIME 2026, Canberra",
    city: "AU",
    title: "Gesture / EEG Duet (solo)",
    note: "Paper + performance in the main programme.",
    image: img("perf1", 900, 600),

    summary:
      "A solo performance exploring the dialogue between conscious gesture and involuntary neural activity through EEG-driven sound synthesis.",
    programme:
      "Presented as part of the NIME 2026 main programme following the accompanying research paper. The work combined gesture tracking, EEG, and live electronics into a forty-minute performance.",
    context:
      "Developed during the second year of doctoral research as an exploration of embodied interaction and performer-system negotiation.",
    collaborators:
      "Solo performance. Technical support by the NIME production team.",
    instrumentation:
      "Muse 2 EEG headset, MediaPipe hand tracking, Max/MSP, Ableton Live, custom granular synthesis engine, quadraphonic speaker setup.",
    reflection:
      "The performance revealed moments where unintended neural fluctuations became musically meaningful, blurring the distinction between deliberate and unconscious expression.",
  },

  {
    slug: "gesture-to-midi-studies-cafe-oto",
    date: "2025-11-02",
    venue: "Cafe OTO",
    city: "London",
    title: "Weekday set — Gesture-to-MIDI Studies",
    note: "Long-form solo, second of three commissioned nights.",
    image: img("perf2", 900, 600),

    summary:
      "An evening of evolving gesture-controlled studies using custom camera-tracked performance interfaces.",
    programme:
      "The programme consisted of five independent studies, each investigating a different mapping between physical movement and instrumental response.",
    context:
      "Commissioned by Cafe OTO as part of its Weekday Series, encouraging experimental approaches to live electronic performance.",
    collaborators:
      "Solo performance with technical assistance from the venue production staff.",
    instrumentation:
      "MediaPipe, Max/MSP, Ableton Live, Kontakt instruments, Logitech Brio camera, prepared piano samples.",
    reflection:
      "Performing multiple studies back-to-back highlighted how audiences gradually learned the instrument alongside the performer.",
  },

  {
    slug: "room-as-a-score-revival",
    date: "2025-06-14",
    venue: "SARC Sonorities Festival",
    city: "Belfast",
    title: "Room as a Score (revival)",
    note: "Reworked for the Sonic Lab, with in-house ensemble.",
    image: img("perf3", 900, 600),

    summary:
      "A revised version of the installation-performance where audience positioning continuously generated the musical score.",
    programme:
      "The Sonic Lab's spatial audio environment allowed the work to expand into an immersive multichannel experience.",
    context:
      "Reimagined after the London premiere to exploit the acoustics and loudspeaker array of SARC's Sonic Lab.",
    collaborators:
      "Performed with the SARC in-house ensemble and festival technical team.",
    instrumentation:
      "Azure Kinect depth camera, TouchDesigner, SuperCollider, multichannel speaker system, live chamber ensemble.",
    reflection:
      "The architecture itself became an active participant, making each audience arrangement uniquely audible.",
  },

  {
    slug: "audience-bubble-patterns-iklectik",
    date: "2025-03-08",
    venue: "IKLECTIK",
    city: "London",
    title: "Audience Bubble Patterns",
    note: "Residency closing performance.",
    image: img("perf4", 900, 600),

    summary:
      "A live study examining how audience proximity and movement shape ensemble behaviour.",
    programme:
      "The work transformed audience density into dynamic musical parameters controlling balance, texture, and spatialisation.",
    context:
      "Created during a month-long residency investigating camera-based audience analysis.",
    collaborators:
      "Performed with a four-member improvisation ensemble.",
    instrumentation:
      "Dual overhead cameras, YOLO-based audience detection, OSC routing, Max/MSP conducting system.",
    reflection:
      "The audience unknowingly became co-performers, influencing every musical decision without direct interaction.",
  },

  {
    slug: "dance-and-mediapipe-work-in-progress",
    date: "2024-10-21",
    venue: "The Yard",
    city: "London",
    title: "Dance and MediaPipe (WIP)",
    note: "Duet showing with Ana R. — 30 minutes.",
    image: img("perf5", 900, 600),

    summary:
      "An early public showing exploring how dance movement can drive interactive musical structures through skeletal tracking.",
    programme:
      "The work alternated between choreographed passages and improvised interactions with live-generated sound.",
    context:
      "Presented as a work-in-progress to gather audience feedback before further development.",
    collaborators:
      "Duet with dancer Ana R. and technical consultation from movement researchers.",
    instrumentation:
      "MediaPipe Pose, TouchDesigner, Ableton Live, projection mapping, stereo sound system.",
    reflection:
      "The showing exposed how expressive movement often emerged during technical imperfections rather than despite them.",
  },

  {
    slug: "room-as-a-score-premiere",
    date: "2024-05-17",
    venue: "Chapel, South London",
    city: "London",
    title: "Room as a Score — premiere",
    note: "Three consecutive evenings, distinct scores.",
    image: img("perf6", 900, 600),

    summary:
      "The premiere presentation of an audience-responsive performance where architectural space became the musical score.",
    programme:
      "Three performances over consecutive evenings, each producing an entirely different score through audience arrangement and movement.",
    context:
      "The work marked the first public realization of the Room as a Score research project.",
    collaborators:
      "Solo performance with support from the hosting venue and production volunteers.",
    instrumentation:
      "Azure Kinect, custom projection software, SuperCollider, live electronics, architectural projection.",
    reflection:
      "The premiere demonstrated that no two performances could ever be identical, as the audience itself became the composition.",
  },
];

export const writings = [
  {
    slug: "nime-2026-reflections",
    title: "Notes after NIME 2026",
    date: "2026-04-20",
    minutes: 8,
    tag: "Field notes",
    excerpt:
      "What Canberra taught me about the difference between a demo and a performance. On failing gracefully in front of your peers.",
    pull: "The most honest gesture I made all week was reaching for the reset button.",
  },
  {
    slug: "on-embodiment",
    title: "On embodiment, quietly",
    date: "2026-01-11",
    minutes: 6,
    tag: "Essay",
    excerpt:
      "A short essay on why I keep returning to the word 'embodied' even after I have decided, again, to stop using it.",
    pull: "Embodiment is not a claim. It is a way of choosing what to measure.",
  },
  {
    slug: "gesture-vs-control",
    title: "Gesture is not control",
    date: "2025-09-02",
    minutes: 10,
    tag: "Research diary",
    excerpt:
      "A long entry sorting out the difference between designing a control surface and composing a relationship.",
    pull: "A control surface answers you. A relationship changes you.",
  },
  {
    slug: "defending-your-research",
    title: "On defending your research to a room that already agrees",
    date: "2025-05-30",
    minutes: 5,
    tag: "Practice",
    excerpt:
      "Notes from a viva rehearsal. On the small violence of being asked to be certain about a practice built on doubt.",
    pull: "Certainty is a performance too, and not always the honest one.",
  },
];

export const researchAreas = [
  { id: "gesture", label: "Gesture", note: "Hand and body movement as compositional material — mapped, misread, and answered." },
  { id: "eeg", label: "EEG", note: "Frontal band power as a layer the performer cannot fully author." },
  { id: "camera", label: "Camera tracking", note: "Single, multi, and depth — the room as a sensor." },
  { id: "systems", label: "Interactive systems", note: "Max, SuperCollider, TouchDesigner — patched together, on purpose." },
  { id: "sound", label: "Sound", note: "Acoustic, granular, feedback. Sound as the thing being negotiated." },
  { id: "embodiment", label: "Embodiment", note: "The long thread. What technology cannot see, and what it makes newly visible." },
];

export const researchLinks: Array<[string, string]> = [
  ["gesture", "camera"], ["gesture", "systems"], ["camera", "systems"],
  ["eeg", "gesture"], ["eeg", "systems"], ["systems", "sound"],
  ["camera", "embodiment"], ["gesture", "embodiment"], ["sound", "embodiment"],
];

export const timeline = [
  { year: "2023–", label: "PhD, Creative Music Technology" },
  { year: "2022", label: "MA Composition, distinction" },
  { year: "2021", label: "First solo camera-tracking set" },
  { year: "2019", label: "Ensemble commissions begin" },
  { year: "2017", label: "Composition studies, undergraduate" },
];
