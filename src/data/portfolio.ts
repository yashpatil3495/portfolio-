/**
 * Central portfolio data — generated from Yash Patil's resume (Yash_Patil_Resume_v7_1.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Yash Patil',
  displayName: 'Yash Patil',
  firstName: 'YASH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PATIL ORIGINAL',
  role: 'Full-Stack & AI Developer',
  tagline: ['Full-Stack Developer', 'AI / LLMs', 'Hackathon Builder'],
  intro:
    'A Computer Engineering student at JSPM RSCOE and a Data Science and Management student at IIT Madras, building AI-powered products with React, Next.js, Node.js and Claude AI — and shipping prototypes in 24-hour hackathons.',
  location: 'Pune, Maharashtra',
  email: 'yashpatil3495@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/yash-patil',
    github: 'https://github.com/yashpatil3495',
  },
  resumePdf: '/assets/Yash_Patil_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Yash Patil',
  },
  interests: ['AI & LLM Apps', 'EdTech', 'Creative Frontends'],
};

export type Education = {
  school: string;
  /** Compact institution name for chips and cards. */
  short: string;
  place: string;
  degree: string;
  /** Compact course name for chips and cards. */
  course: string;
  period: string;
};

export const education: Education[] = [
  {
    school: 'Indian Institute of Technology Madras (IIT Madras)',
    short: 'IIT Madras',
    place: 'Online',
    degree: 'Bachelor of Science (BS) — Data Science and Management',
    course: 'BS · Data Science & Management',
    period: 'May 2026 – Present',
  },
  {
    school: 'JSPM Rajarshi Shahu College of Engineering (RSCOE)',
    short: 'JSPM RSCOE',
    place: 'Pune, India',
    degree: 'Bachelor of Technology — Computer Engineering',
    course: 'B.Tech · Computer Engineering',
    period: 'Aug 2025 – May 2029',
  },
  {
    school: 'Higher Secondary (12th Grade)',
    short: '12th Grade',
    place: 'Maharashtra, India',
    degree: 'Science (PCM) — Maharashtra State Board',
    course: 'Science (PCM)',
    period: '2023 – 2025',
  },
];

export const experience = [
  {
    company: 'Mathematics Club, JSPM RSCOE',
    role: 'Tech Lead',
    place: 'Pune, India',
    period: 'Aug 2026 – Present',
    points: ['Lead technical initiatives for the college Mathematics Club.'],
  },
  {
    company: 'College TechFest Competitions',
    role: 'Hackathon Participant & Builder',
    place: 'Pune, India',
    period: '2025 – 2026',
    points: [
      'Built working projects in 24-hour college-level coding competitions under tight deadlines.',
      'Collaborated with teammates to ideate, design, and deploy functional prototypes from scratch.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Motif = 'scholar' | 'emotion' | 'cipher' | 'focus';

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  /** Quick facts shown in the "At a glance" strip. */
  metrics: Metric[];
  /** Omit when there is no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: Motif;
};

export const projects: Project[] = [
  {
    id: 'scholarhub',
    title: 'ScholarHub',
    year: '2026',
    genre: 'AI • EdTech • Multilingual',
    logline: 'An AI-powered scholarship discovery platform that matches students to scholarships.',
    stack: ['AI Assistant', 'Multilingual (EN/HI/MR)', 'Node.js', 'Dashboard'],
    build: [
      'Built an AI-powered scholarship discovery platform with a recommendation engine that matches students to scholarships.',
      'Developed an application-tracking dashboard with a document template system and multilingual support.',
    ],
    features: [
      'Recommendation engine for scholarship matching',
      'AI assistant',
      'Application-tracking dashboard',
      'Document template system',
      'Multilingual support (English, Hindi, Marathi)',
    ],
    metrics: [
      { value: '3', label: 'languages — English, Hindi, Marathi' },
      { value: 'AI', label: 'scholarship recommendation engine' },
      { value: '1', label: 'application-tracking dashboard' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'scholar',
  },
  {
    id: 'emolearn',
    title: 'EmoLearn',
    year: '2026',
    genre: 'AI • EdTech • Emotion AI',
    logline: 'An emotion-adaptive EdTech platform that tunes its AI tutoring style to how the learner feels.',
    stack: ['Claude AI', 'Node.js', 'Supabase', 'Emotion AI', 'SSE'],
    build: [
      'Created an emotion-adaptive EdTech platform that uses facial emotion detection to dynamically adjust AI tutoring style.',
      'Implemented real-time Claude AI streaming via Server-Sent Events (SSE) with Supabase-backed session management.',
      'Added a gamification system with daily challenges, XP tracking, and personalized learning paths.',
    ],
    features: [
      'Facial emotion detection',
      'Tutoring style adapts to emotion',
      'Real-time Claude AI streaming (SSE)',
      'Supabase-backed session management',
      'Daily challenges, XP tracking, personalized learning paths',
    ],
    metrics: [
      { value: 'SSE', label: 'real-time Claude AI streaming' },
      { value: 'Emotion', label: 'facial detection drives tutoring style' },
      { value: 'XP', label: 'daily challenges and gamification' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'emotion',
  },
  {
    id: 'cipherpixel',
    title: 'CipherPixel',
    year: '2025',
    genre: 'Security • Cryptography • Frontend',
    logline: 'A steganography engine that hides encrypted files inside images.',
    stack: ['Bitwise Algorithms', 'Cryptography', 'Binary Protocol', 'CSS3'],
    build: [
      'Developed a steganography engine that hides encrypted files inside images using bitwise LSB manipulation.',
      'Engineered custom binary protocols for secure data embedding, with a complete end-to-end encryption workflow.',
      'Designed a modern, responsive UI for seamless encryption and decryption across devices.',
    ],
    features: [
      'Encrypted files hidden inside images',
      'Bitwise LSB manipulation',
      'Custom binary protocol for data embedding',
      'End-to-end encryption workflow',
      'Responsive encrypt / decrypt UI',
    ],
    metrics: [
      { value: 'LSB', label: 'bitwise image steganography' },
      { value: 'E2E', label: 'complete encryption workflow' },
      { value: 'Custom', label: 'binary protocol for embedding' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'cipher',
  },
  {
    id: 'focus-flow',
    title: 'Focus Flow',
    year: '2025',
    genre: 'Productivity • Gamified • Data Viz',
    logline: 'A gamified productivity dashboard that combines a Pomodoro timer with drag-and-drop tasks.',
    stack: ['Spotify API', 'Task Management', 'Data Visualization'],
    build: [
      'Built a gamified productivity dashboard that combines a Pomodoro timer with drag-and-drop task management.',
      'Integrated the Spotify API for focus music sessions, with real-time analytics and local-storage persistence.',
    ],
    features: [
      'Pomodoro timer',
      'Drag-and-drop task management',
      'Spotify-powered focus music sessions',
      'Real-time analytics',
      'Local-storage persistence',
    ],
    metrics: [
      { value: 'Pomodoro', label: 'timer built in' },
      { value: 'Spotify', label: 'API for focus music' },
      { value: 'Live', label: 'real-time analytics' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'focus',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'genesis',
    title: '2nd Place',
    org: 'Genesis Hackathon of Impact',
    detail: 'State-level hackathon at JSPM RSCOE, 2026.',
    laurel: 'State Level',
  },
  {
    id: 'recursion',
    title: '2nd Place',
    org: 'Recursion Hackathon',
    detail: 'JSPM RSCOE, 2025.',
    laurel: 'Runner-Up',
  },
  {
    id: 'aayam',
    title: '4th Rank',
    org: 'Aayam, NIT Agartala',
    detail: 'Finished fourth at Aayam, NIT Agartala.',
    laurel: 'Top 4',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [{ issuer: 'Apna College', name: 'Web Development' }];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Where the code starts',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    subtitle: 'Interfaces & servers',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js 15', mono: 'Nx' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express', mono: 'Ex' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Shipping & backends',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Vite', mono: 'Vt' },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    subtitle: 'LLM-powered products',
    skills: [
      { name: 'Claude AI', mono: 'Cl' },
      { name: 'GPT APIs', mono: 'Gp' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'LLMs', mono: 'Ll' },
      { name: 'SSE Streaming', mono: 'Ss' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Craft & motion',
    skills: [
      { name: 'UI/UX', mono: 'Ux' },
      { name: 'Figma', mono: 'Fg' },
      { name: 'Responsive Design', mono: 'Rd' },
      { name: 'CSS Animations', mono: 'An' },
      { name: 'Canvas API', mono: 'Cv' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['Full-stack Originals', 'Web Development (Apna College)'],
  Python: ['IIT Madras BS', 'AI & scripting'],
  C: ['B.Tech · Computer Engineering'],
  'C++': ['B.Tech · Computer Engineering'],
  HTML5: ['Web Development (Apna College)', 'CipherPixel'],
  CSS3: ['CipherPixel', 'Web Development (Apna College)'],
  React: ['Core frontend stack', 'Web Development (Apna College)'],
  'Next.js 15': ['Full-stack React architecture'],
  'Node.js': ['ScholarHub', 'EmoLearn'],
  Express: ['Node.js backend stack'],
  'Tailwind CSS': ['Responsive UI & styling'],
  Git: ['All Originals', '24-hour hackathons'],
  GitHub: ['All Originals', 'Team collaboration'],
  'VS Code': ['Primary development environment'],
  Supabase: ['EmoLearn'],
  Firebase: ['Backend & auth tooling'],
  Vite: ['Frontend build tooling'],
  'Claude AI': ['EmoLearn'],
  'GPT APIs': ['AI & LLM Apps'],
  'Prompt Engineering': ['ScholarHub', 'EmoLearn'],
  LLMs: ['ScholarHub', 'EmoLearn'],
  'SSE Streaming': ['EmoLearn'],
  'UI/UX': ['ScholarHub', 'CipherPixel', 'Focus Flow'],
  Figma: ['UI prototyping', 'Hackathons'],
  'Responsive Design': ['CipherPixel', 'All Originals'],
  'CSS Animations': ['CipherPixel', 'Creative Frontends'],
  'Canvas API': ['CipherPixel', 'Data Visualization'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
  projectId?: string;
  sectionId?: SectionId;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2025',
    synopsis: 'Higher Secondary (12th Grade) in Science — Physics, Chemistry and Mathematics — under the Maharashtra State Board.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Higher Secondary (12th Grade), Science (PCM), Maharashtra State Board.',
        tags: ['PCM', 'Maharashtra State Board'],
        runtime: '2023 – 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Engineering',
    period: '2025',
    synopsis: 'Computer Engineering at JSPM Rajarshi Shahu College of Engineering, Pune — and the first hackathons.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Engineering at JSPM RSCOE, Pune.',
        tags: ['B.Tech', 'Computer Engineering'],
        runtime: 'Aug 2025 – May 2029',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The 24-Hour Builder',
        description: 'Built working projects in 24-hour college-level coding competitions under tight deadlines.',
        tags: ['Hackathons', 'Prototyping'],
        runtime: '2025 – 2026',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Runner-Up',
        description: '2nd Place at the Recursion Hackathon, JSPM RSCOE — and 4th Rank at Aayam, NIT Agartala.',
        tags: ['Recursion Hackathon', 'Aayam', 'NIT Agartala'],
        runtime: 'Competitions',
        palette: jade,
        sectionId: 'moments',
      },
    ],
  },
  {
    number: 3,
    title: 'First Originals',
    period: '2025',
    synopsis: 'Two self-driven builds: a steganography engine and a gamified focus dashboard.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Cipher',
        description: 'CipherPixel — a steganography engine that hides encrypted files in images using bitwise LSB manipulation.',
        tags: ['Cryptography', 'Bitwise', 'CSS3'],
        runtime: '2025',
        palette: jade,
        projectId: 'cipherpixel',
      },
      {
        code: 'S03 E02',
        title: 'The Focus',
        description: 'Focus Flow — a Pomodoro timer with drag-and-drop tasks, Spotify focus music and real-time analytics.',
        tags: ['Spotify API', 'Data Visualization'],
        runtime: '2025',
        palette: amber,
        projectId: 'focus-flow',
      },
    ],
  },
  {
    number: 4,
    title: 'Going Bigger',
    period: '2026',
    synopsis: 'AI-powered products, a state-level podium, a second degree and a Tech Lead role.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Scholar',
        description: 'ScholarHub — AI scholarship discovery with a recommendation engine, tracking dashboard and EN / HI / MR support.',
        tags: ['AI Assistant', 'Node.js', 'Multilingual'],
        runtime: '2026',
        palette: ocean,
        projectId: 'scholarhub',
      },
      {
        code: 'S04 E02',
        title: 'The Empath',
        description: 'EmoLearn — facial emotion detection adjusts the AI tutoring style, streamed live from Claude over SSE.',
        tags: ['Claude AI', 'Supabase', 'SSE'],
        runtime: '2026',
        palette: crimson,
        projectId: 'emolearn',
      },
      {
        code: 'S04 E03',
        title: 'The Podium',
        description: '2nd Place at the state-level Genesis Hackathon of Impact, JSPM RSCOE.',
        tags: ['Genesis Hackathon of Impact', 'State-Level'],
        runtime: '2026',
        palette: amber,
        sectionId: 'moments',
      },
      {
        code: 'S04 E04',
        title: 'The Double Degree',
        description: 'Joined the online BS in Data Science and Management at IIT Madras, alongside the B.Tech.',
        tags: ['IIT Madras', 'Data Science'],
        runtime: 'May 2026 – Present',
        palette: violet,
        sectionId: 'about',
      },
      {
        code: 'S04 E05',
        title: 'The Lead',
        description: 'Tech Lead of the Mathematics Club at JSPM RSCOE, leading the club’s technical initiatives.',
        tags: ['Tech Lead', 'Mathematics Club'],
        runtime: 'Aug 2026 – Present',
        palette: ocean,
        sectionId: 'about',
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette; projectId?: string; sectionId?: SectionId };

export const topPicks: TopPick[] = [
  { label: 'The AI Original', title: 'EmoLearn', detail: 'Claude AI • Emotion AI • SSE', palette: crimson, projectId: 'emolearn' },
  { label: 'State-level podium', title: 'Genesis Hackathon', detail: '2nd Place • JSPM RSCOE', palette: amber, sectionId: 'moments' },
  { label: 'The scholarship finder', title: 'ScholarHub', detail: 'AI matching • EN / HI / MR', palette: ocean, projectId: 'scholarhub' },
  { label: 'Runner-up', title: 'Recursion Hackathon', detail: '2nd Place • JSPM RSCOE', palette: violet, sectionId: 'moments' },
  { label: 'Security Original', title: 'CipherPixel', detail: 'LSB steganography engine', palette: jade, projectId: 'cipherpixel' },
  { label: 'Leadership', title: 'Tech Lead', detail: 'Mathematics Club, JSPM RSCOE', palette: amber, sectionId: 'about' },
  { label: 'The double degree', title: 'IIT Madras', detail: 'BS • Data Science & Management', palette: ocean, sectionId: 'about' },
  { label: 'Productivity Original', title: 'Focus Flow', detail: 'Pomodoro • Spotify API', palette: crimson, projectId: 'focus-flow' },
  { label: 'On the leaderboard', title: 'Aayam', detail: '4th Rank • NIT Agartala', palette: violet, sectionId: 'moments' },
  { label: 'Core stack', title: 'React + Node', detail: 'with Next.js 15, Claude AI & Supabase', palette: jade, sectionId: 'skills' },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Engineering',
    lines: ['JSPM Rajarshi Shahu College of Engineering, Pune', 'Aug 2025 – May 2029'],
    chips: ['JSPM RSCOE'],
  },
  {
    kicker: 'Skills',
    title: 'AI meets full-stack.',
    lines: ['JavaScript, Python, C, C++ · React, Next.js 15, Node.js', 'Supabase, Firebase · Claude AI, GPT APIs, SSE streaming'],
    chips: ['React', 'Next.js', 'Node.js', 'Claude AI', 'Supabase', 'Tailwind'],
  },
  {
    kicker: 'Leadership',
    title: 'Tech Lead',
    lines: ['Mathematics Club · JSPM RSCOE', 'Aug 2026 – Present', 'Leading the club’s technical initiatives'],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['ScholarHub — AI scholarship discovery', 'EmoLearn — emotion-adaptive AI tutor', 'CipherPixel — image steganography', 'Focus Flow — gamified Pomodoro dashboard'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['2nd Place — Genesis Hackathon of Impact (2026)', '2nd Place — Recursion Hackathon (2025)', '4th Rank — Aayam, NIT Agartala'],
  },
  {
    kicker: 'Hackathons',
    title: 'Built in 24 hours',
    lines: ['Working projects under tight deadlines', 'Prototypes designed and deployed from scratch with teammates'],
  },
  {
    kicker: 'Also studying',
    title: 'IIT Madras',
    lines: ['BS in Data Science and Management (Online)', 'May 2026 – Present'],
  },
];

export type ProfileId = 'yash' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'yash',
    name: 'Yash',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

const years = projects.map((p) => Number(p.year));
export const projectYears = Math.min(...years) === Math.max(...years) ? String(years[0]) : `${Math.min(...years)} – ${Math.max(...years)}`;

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & leadership', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • ${projectYears}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `Top ${topPicks.length} from the resume`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${plural(achievements.length, 'Moment', 'Moments')} • ${plural(certifications.length, 'Certification', 'Certifications')}`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
