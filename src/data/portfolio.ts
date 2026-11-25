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
    'I study Computer Engineering at JSPM RSCOE alongside a BS in Data Science and Management at IIT Madras. I build web products with React, Next.js, Node.js, and LLMs, mostly tested under 24-hour hackathon deadlines.',
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
    logline: 'An AI scholarship discovery platform that matches students with relevant opportunities and tracks their applications.',
    stack: ['AI Assistant', 'Multilingual (EN/HI/MR)', 'Node.js', 'Dashboard'],
    build: [
      'Built the recommendation workflow that matches student profiles to eligible scholarships.',
      'Created an application-tracking dashboard with reusable document templates and support for English, Hindi, and Marathi.',
    ],
    features: [
      'Recommendation engine for scholarship matching',
      'AI assistant',
      'Application-tracking dashboard',
      'Document template system',
      'Multilingual support (English, Hindi, Marathi)',
    ],
    metrics: [
      { value: '3', label: 'English, Hindi, and Marathi' },
      { value: 'AI', label: 'Scholarship matching engine' },
      { value: '1', label: 'Application-tracking dashboard' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'scholar',
  },
  {
    id: 'emolearn',
    title: 'EmoLearn',
    year: '2026',
    genre: 'AI • EdTech • Emotion AI',
    logline: "An adaptive tutoring platform that adjusts how AI explains concepts based on the learner's detected facial emotion.",
    stack: ['Claude AI', 'Node.js', 'Supabase', 'Emotion AI', 'SSE'],
    build: [
      'Connected facial emotion detection to the tutoring prompt so explanations adapt to student confusion or engagement.',
      'Implemented real-time Claude AI response streaming over Server-Sent Events (SSE) with session persistence in Supabase.',
      'Added daily challenges, XP tracking, and structured learning paths.',
    ],
    features: [
      'Facial emotion detection',
      'Tutoring style adapts to emotion',
      'Real-time Claude AI streaming (SSE)',
      'Supabase-backed session management',
      'Daily challenges, XP tracking, personalized learning paths',
    ],
    metrics: [
      { value: 'SSE', label: 'Real-time Claude AI streaming' },
      { value: 'Emotion', label: 'Adaptive tutoring style' },
      { value: 'XP', label: 'Daily challenges and tracking' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'emotion',
  },
  {
    id: 'cipherpixel',
    title: 'CipherPixel',
    year: '2025',
    genre: 'Security • Cryptography • Frontend',
    logline: 'An image steganography tool that encrypts files and hides them inside image pixels using bitwise LSB manipulation.',
    stack: ['Bitwise Algorithms', 'Cryptography', 'Binary Protocol', 'CSS3'],
    build: [
      'Implemented bitwise least-significant-bit (LSB) encoding and decoding to embed encrypted payloads inside standard images.',
      'Defined a custom binary framing protocol so embedded files can be extracted reliably after encryption.',
      'Designed a clean interface for both encrypting and decrypting files across screen sizes.',
    ],
    features: [
      'Encrypted files hidden inside images',
      'Bitwise LSB manipulation',
      'Custom binary protocol for data embedding',
      'End-to-end encryption workflow',
      'Responsive encrypt / decrypt UI',
    ],
    metrics: [
      { value: 'LSB', label: 'Bitwise image steganography' },
      { value: 'E2E', label: 'Encrypt and decrypt workflow' },
      { value: 'Binary', label: 'Custom embedding protocol' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'cipher',
  },
  {
    id: 'focus-flow',
    title: 'Focus Flow',
    year: '2025',
    genre: 'Productivity • Gamified • Data Viz',
    logline: 'A productivity dashboard combining a Pomodoro timer, drag-and-drop task board, Spotify focus sessions, and local analytics.',
    stack: ['Spotify API', 'Task Management', 'Data Visualization'],
    build: [
      'Built a Pomodoro timer paired with a drag-and-drop task workflow.',
      'Integrated the Spotify API for focus playlists alongside session analytics stored in local storage.',
    ],
    features: [
      'Pomodoro timer',
      'Drag-and-drop task management',
      'Spotify-powered focus music sessions',
      'Real-time analytics',
      'Local-storage persistence',
    ],
    metrics: [
      { value: 'Pomodoro', label: 'Built-in focus timer' },
      { value: 'Spotify', label: 'Focus playlist integration' },
      { value: 'Local', label: 'Real-time session analytics' },
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
    subtitle: 'Core programming & markup',
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
    subtitle: 'Frontend & backend',
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
    subtitle: 'Version control, databases & tooling',
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
    subtitle: 'LLM integration & streaming',
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
    subtitle: 'Interfaces, motion & canvas',
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
    synopsis: 'Completed 12th Grade in Science (PCM) under the Maharashtra State Board.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Higher Secondary',
        description: 'Physics, Chemistry, and Mathematics under the Maharashtra State Board.',
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
    synopsis: 'Started Computer Engineering at JSPM RSCOE in Pune and entered my first 24-hour hackathons.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Started B.Tech in Computer Engineering at JSPM RSCOE, Pune.',
        tags: ['B.Tech', 'Computer Engineering'],
        runtime: 'Aug 2025 – May 2029',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The 24-Hour Builder',
        description: 'Built and deployed working prototypes from scratch with teammates in 24-hour college hackathons.',
        tags: ['Hackathons', 'Prototyping'],
        runtime: '2025 – 2026',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'First Podiums',
        description: 'Placed 2nd at Recursion Hackathon (JSPM RSCOE) and 4th at Aayam (NIT Agartala).',
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
    synopsis: 'Two independent builds: an image steganography tool and a focus dashboard.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'CipherPixel',
        description: 'Built a browser-based steganography tool that hides encrypted files inside images using bitwise LSB encoding.',
        tags: ['Cryptography', 'Bitwise', 'CSS3'],
        runtime: '2025',
        palette: jade,
        projectId: 'cipherpixel',
      },
      {
        code: 'S03 E02',
        title: 'Focus Flow',
        description: 'Built a Pomodoro and task dashboard with Spotify playback and session analytics.',
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
    synopsis: 'Moved into AI products, won a state-level podium, started a second degree at IIT Madras, and took on a club leadership role.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'ScholarHub',
        description: 'Built an AI scholarship matching platform with application tracking and English, Hindi, and Marathi support.',
        tags: ['AI Assistant', 'Node.js', 'Multilingual'],
        runtime: '2026',
        palette: ocean,
        projectId: 'scholarhub',
      },
      {
        code: 'S04 E02',
        title: 'EmoLearn',
        description: 'Built an AI tutor that reads facial expressions and streams adaptive explanations from Claude AI over SSE.',
        tags: ['Claude AI', 'Supabase', 'SSE'],
        runtime: '2026',
        palette: crimson,
        projectId: 'emolearn',
      },
      {
        code: 'S04 E03',
        title: 'State-Level Podium',
        description: 'Placed 2nd at the Genesis Hackathon of Impact at JSPM RSCOE.',
        tags: ['Genesis Hackathon of Impact', 'State-Level'],
        runtime: '2026',
        palette: amber,
        sectionId: 'moments',
      },
      {
        code: 'S04 E04',
        title: 'IIT Madras',
        description: 'Started the online BS in Data Science and Management alongside my B.Tech.',
        tags: ['IIT Madras', 'Data Science'],
        runtime: 'May 2026 – Present',
        palette: violet,
        sectionId: 'about',
      },
      {
        code: 'S04 E05',
        title: 'Tech Lead',
        description: 'Leading technical initiatives for the Mathematics Club at JSPM RSCOE.',
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
  { label: 'AI Build', title: 'EmoLearn', detail: 'Claude AI, Emotion AI, SSE', palette: crimson, projectId: 'emolearn' },
  { label: 'State Podium', title: 'Genesis Hackathon', detail: '2nd Place, JSPM RSCOE', palette: amber, sectionId: 'moments' },
  { label: 'Multilingual AI', title: 'ScholarHub', detail: 'Matching engine, EN / HI / MR', palette: ocean, projectId: 'scholarhub' },
  { label: 'Hackathon', title: 'Recursion Hackathon', detail: '2nd Place, JSPM RSCOE', palette: violet, sectionId: 'moments' },
  { label: 'Security Build', title: 'CipherPixel', detail: 'LSB image steganography', palette: jade, projectId: 'cipherpixel' },
  { label: 'Leadership', title: 'Tech Lead', detail: 'Mathematics Club, JSPM RSCOE', palette: amber, sectionId: 'about' },
  { label: 'Second Degree', title: 'IIT Madras', detail: 'BS in Data Science & Management', palette: ocean, sectionId: 'about' },
  { label: 'Productivity', title: 'Focus Flow', detail: 'Pomodoro, Spotify API', palette: crimson, projectId: 'focus-flow' },
  { label: 'National Event', title: 'Aayam', detail: '4th Rank, NIT Agartala', palette: violet, sectionId: 'moments' },
  { label: 'Core Stack', title: 'React & Node.js', detail: 'Next.js 15, Claude AI, Supabase', palette: jade, sectionId: 'skills' },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech in Computer Engineering',
    lines: ['JSPM Rajarshi Shahu College of Engineering, Pune', 'Aug 2025 – May 2029'],
    chips: ['JSPM RSCOE'],
  },
  {
    kicker: 'Stack',
    title: 'Full-stack and AI',
    lines: ['JavaScript, Python, C, C++, React, Next.js 15, Node.js', 'Supabase, Firebase, Claude AI, GPT APIs, SSE streaming'],
    chips: ['React', 'Next.js', 'Node.js', 'Claude AI', 'Supabase', 'Tailwind'],
  },
  {
    kicker: 'Leadership',
    title: 'Tech Lead',
    lines: ['Mathematics Club, JSPM RSCOE', 'Aug 2026 – Present'],
  },
  {
    kicker: 'Projects',
    title: 'Four Builds',
    lines: ['ScholarHub: AI scholarship matching', 'EmoLearn: emotion-adaptive AI tutor', 'CipherPixel: image steganography', 'Focus Flow: Pomodoro & Spotify dashboard'],
  },
  {
    kicker: 'Competitions',
    title: 'Top Moments',
    lines: ['2nd Place, Genesis Hackathon of Impact (2026)', '2nd Place, Recursion Hackathon (2025)', '4th Rank, Aayam, NIT Agartala'],
  },
  {
    kicker: 'Hackathons',
    title: '24-Hour Builds',
    lines: ['Shipping working prototypes under tight deadlines with small teams.'],
  },
  {
    kicker: 'Second Degree',
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
    blurb: 'Full portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, awards, and skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack, and build notes first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Timeline and highlights first',
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
