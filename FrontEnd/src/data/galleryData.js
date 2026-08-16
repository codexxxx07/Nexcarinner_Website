import {
  FiCode,
  FiZap,
  FiLayers,
  FiCpu,
  FiUsers,
  FiShield,
  FiDatabase,
  FiAward,
  FiRadio,
  FiLayout,
  FiCloud,
  FiHeart,
  FiGlobe,
  FiFilm,
} from 'react-icons/fi'
import GunjanImg from '../assets/images/Gunjan.jpg'
import demoCollab1 from '../assets/demo/collab-1.svg'
import demoCollab2 from '../assets/demo/collab-2.svg'
import demoCollab3 from '../assets/demo/collab-3.svg'
import demoCert1 from '../assets/demo/cert-1.svg'
import demoCert2 from '../assets/demo/cert-2.svg'
import demoCert3 from '../assets/demo/cert-3.svg'
import NexcarinnerCertTeck4Hack from '../assets/images/Nexcarinner_Cert_Teck4Hack.jpg'
import demoEvent1 from '../assets/demo/event-1.svg'
import demoEvent2 from '../assets/demo/event-2.svg'
import demoEvent3 from '../assets/demo/event-3.svg'
import demoProject1 from '../assets/demo/project-1.svg'
import demoProject2 from '../assets/demo/project-2.svg'
import demoProject3 from '../assets/demo/project-3.svg'
import demoMoment1 from '../assets/demo/moment-1.svg'
import demoMoment2 from '../assets/demo/moment-2.svg'

/*
 * Gallery category system.
 * `slug` is the URL segment (e.g. /gallery/projects). "all" is the
 * overview page at /gallery — it shows the curated featured items.
 */
export const galleryCategories = [
  { slug: 'all', label: 'Overview' },
  { slug: 'projects', label: 'Projects' },
  { slug: 'community-collab', label: 'Community Collab' },
  { slug: 'certifications', label: 'Certifications' },
  { slug: 'awards', label: 'Awards' },
  { slug: 'events', label: 'Events' },
  { slug: 'community-moments', label: 'Community Moments' },
]

export const categoryMeta = {
  all: {
    label: 'Gallery',
    chip: 'The showcase',
    heading: 'Inside Nexcarinner',
    description:
      "Nexcarinner's visual archive — the projects we build, the communities we partner with, the certificates and awards members earn, and the moments that make it all worth it.",
  },
  projects: {
    label: 'Projects',
    icon: FiCode,
    accent: 'from-brand-500 to-brand-700',
    chip: 'Projects',
    heading: 'Built by the community',
    description:
      'From weekend hackathon builds to full-stack products, these are the projects Nexcarinner members design, code, and ship together.',
    badge: {
      light: 'text-violet-700 bg-violet-100/90 border-white/60',
      dark: 'text-violet-200 bg-violet-900/50 border-white/15',
    },
  },
  'community-collab': {
    label: 'Community Collab',
    icon: FiUsers,
    accent: 'from-flare-cyan to-brand-500',
    chip: 'Community Collab',
    heading: 'Nexcarinner × other communities',
    description:
      'Partnerships with other communities and organizations — because student builders get further when communities work together.',
    badge: {
      light: 'text-cyan-700 bg-cyan-100/90 border-white/60',
      dark: 'text-cyan-200 bg-cyan-900/50 border-white/15',
    },
  },
  certifications: {
    label: 'Certifications',
    icon: FiShield,
    accent: 'from-flare-pink to-brand-500',
    chip: 'Certifications',
    heading: 'Verified, earned',
    description:
      'Verified certificates earned by Nexcarinner community members — real credentials that prove the skills our tracks build.',
    badge: {
      light: 'text-pink-600 bg-pink-100/90 border-white/60',
      dark: 'text-pink-200 bg-pink-900/50 border-white/15',
    },
  },
  awards: {
    label: 'Awards',
    icon: FiAward,
    accent: 'from-flare-cyan to-flare-pink',
    chip: 'Awards',
    heading: 'Achievements & recognition',
    description:
      'Awards and recognition earned by the Nexcarinner community itself — proof that showing up again and again pays off.',
    badge: {
      light: 'text-amber-600 bg-amber-100/90 border-white/60',
      dark: 'text-amber-200 bg-amber-900/40 border-white/15',
    },
  },
  events: {
    label: 'Events',
    icon: FiZap,
    accent: 'from-brand-500 to-flare-pink',
    chip: 'Events',
    heading: 'Where the energy lives',
    description:
      'Workshops, hackathons, meetups, and tech sessions — the moments where Nexcarinner comes alive.',
    badge: {
      light: 'text-sky-700 bg-sky-100/90 border-white/60',
      dark: 'text-sky-200 bg-sky-900/50 border-white/15',
    },
  },
  'community-moments': {
    label: 'Community Moments',
    icon: FiHeart,
    accent: 'from-brand-600 to-flare-cyan',
    chip: 'Community Moments',
    heading: 'The people behind it',
    description:
      'Group activities, team moments, and behind-the-scenes life — the faces that make Nexcarinner feel like home.',
    badge: {
      light: 'text-fuchsia-600 bg-fuchsia-100/90 border-white/60',
      dark: 'text-fuchsia-200 bg-fuchsia-900/50 border-white/15',
    },
  },
}

/*
 * ----------------------------------------------------------------
 * Projects — built by Nexcarinner members / the community.
 * To add a project later, append an object here. Fields:
 *   id          – unique key
 *   title       – project name
 *   description – short card copy
 *   tech        – technology / category badge
 *   creator     – creator or team (optional)
 *   year        – shown on the cover
 *   icon        – shown on the branded fallback cover
 *   accent      – gradient for the fallback cover
 *   image       – optional image (import from ../assets or a URL)
 *   link        – optional destination; external requires external: true
 *   linkLabel   – text for the card's link
 *   featured    – 'hero' | 'wide' | true → shapes the overview bento layout
 * ----------------------------------------------------------------
 */
export const projects = [
  {
    id: 'platform',
    title: 'The Nexcarinner Platform',
    description:
      'The site you are on right now — designed, built, and shipped by our community tech team as living proof of what members can do.',
    tech: 'Web Development',
    creator: 'Community Tech Team',
    year: '2026',
    icon: FiCode,
    accent: 'from-brand-500 to-brand-700',
    featured: 'wide',
    link: '/about',
    linkLabel: 'Meet the team',
  },
  {
    id: 'hackathon-builds',
    title: '20+ Builds From One Weekend',
    description:
      'The first Nexcarinner hackathon sent 20 projects from pitch to shipped in 48 hours — the community building in public for the first time.',
    tech: 'Hackathon Builds',
    creator: 'Community Teams',
    year: '2025',
    icon: FiZap,
    accent: 'from-brand-600 to-flare-pink',
    featured: true,
  },
  {
    id: 'fullstack-zero',
    title: 'Full-Stack From Zero to Ship',
    description:
      'In six months, a member went from no web experience to shipping a complete SaaS app — a roadmap we keep sharing.',
    tech: 'Full-Stack',
    creator: 'Member Project',
    year: '2025',
    icon: FiLayers,
    accent: 'from-brand-600 to-brand-700',
  },
  {
    id: 'design-system',
    title: 'The Nexcarinner Design System',
    description:
      'A shared component library and tokens that keep every Nexcarinner surface consistent, fast, and skeuomorphic.',
    tech: 'Design Systems',
    creator: 'Design Crew',
    year: '2026',
    icon: FiLayout,
    accent: 'from-brand-500 to-flare-cyan',
    image: demoProject1,
  },
  {
    id: 'ai-assistant',
    title: 'Community AI Assistant',
    description:
      'An internal AI assistant that answers community questions and helps newcomers find their lane.',
    tech: 'AI / ML',
    creator: 'AI Squad',
    year: '2026',
    icon: FiCpu,
    accent: 'from-flare-cyan to-brand-500',
    image: demoProject2,
  },
  {
    id: 'data-dashboard',
    title: 'Members Analytics Dashboard',
    description:
      'A dashboard that turns community activity into insight — attendance, growth, and engagement at a glance.',
    tech: 'Data Science',
    creator: 'Data Circle',
    year: '2026',
    icon: FiDatabase,
    accent: 'from-flare-pink to-brand-600',
    image: demoProject3,
  },
]

/*
 * ----------------------------------------------------------------
 * Community Collab — collaborations between Nexcarinner and OTHER
 * communities / organizations. Each entry showcases the partner
 * (logo/image + name), not an internal Nexcarinner initiative.
 * Fields: id, name, image, description, year, featured.
 * ----------------------------------------------------------------
 */
export const communityCollabs = [
  {
    id: 'demo-collab-1',
    name: 'Demo Community',
    image: demoCollab1,
    description:
      'A partner community we co-run workshops and tech meetups with — shared events, shared energy.',
    year: '2026',
    featured: true,
  },
  {
    id: 'demo-collab-2',
    name: 'Demo Organization',
    image: demoCollab2,
    description:
      'A collaboration around mentorship and open-source — their mentors, our members, one cohort.',
    year: '2026',
    featured: 'wide',
  },
  {
    id: 'demo-collab-3',
    name: 'Demo University',
    image: demoCollab3,
    description:
      'A campus partnership that brings hackathons and student programs to a wider audience.',
    year: '2025',
  },
]

/*
 * ----------------------------------------------------------------
 * Certifications — verified certificates earned by Nexcarinner
 * community members. Fields: id, memberName, certificateTitle,
 * issuer, image, year, verificationUrl (optional).
 * ----------------------------------------------------------------
 */
export const certifications = [
  {
    id: 'cert-aiml',
    memberName: 'Aarav Sharma',
    certificateTitle: 'AI/ML Engineering Fundamentals',
    issuer: 'Coursera',
    image: demoCert1,
    year: '2026',
    verificationUrl: 'https://coursera.org/verify/nexcarinner-aiml',
  },
  {
    id: 'cert-security',
    memberName: 'Meera Patel',
    certificateTitle: 'Ethical Hacking & Network Security',
    issuer: 'TryHackMe',
    image: demoCert2,
    year: '2026',
    verificationUrl: '',
  },
  {
    id: 'cert-data',
    memberName: 'Rohan Verma',
    certificateTitle: 'Data Science with Python',
    issuer: 'Kaggle Learn',
    image: demoCert3,
    year: '2026',
    verificationUrl: 'https://kaggle.com/learn/verify/nexcarinner-data',
  },
]

/*
 * ----------------------------------------------------------------
 * Awards — recognition received BY the Nexcarinner community itself.
 * Fields: id, title, organization, image, description, year,
 * link (optional), linkLabel, featured ('hero' | 'wide' | true).
 * ----------------------------------------------------------------
 */
export const awards = [
  {
    id: 'certificate-of-participation',
    title: 'Certificate of Participation',
    organization: 'Tech4Hack',
    image: NexcarinnerCertTeck4Hack,
    description: 'Participating in buldathon',
    year: '1st Aug, 2026',
    link: 'https://app.truscholar.io/profile?credId=6a72399eaacd0df33c7fcd3d',
    linkLabel: 'View certificate',
    external: true,
    featured: 'hero',
  },
]

/*
 * ----------------------------------------------------------------
 * Events — organized / participated in by Nexcarinner.
 * Fields: id, title, type, date, location, description, year,
 * icon, accent, image, link, linkLabel, featured.
 * ----------------------------------------------------------------
 */
export const events = [
  {
    id: 'annual-hackathon',
    title: 'Annual Nexcarinner Hackathon',
    type: 'Hackathons',
    date: 'Feb 20, 2026',
    location: 'Campus Hall',
    description:
      '48 hours. Real problems. Prizes for the bold. Bring your team — or find one at the door.',
    year: 'Feb 2026',
    icon: FiZap,
    accent: 'from-brand-500 to-flare-pink',
    link: '/events',
    linkLabel: 'See the event',
    featured: 'hero',
  },
  {
    id: 'react-workshop',
    title: 'React Workshop',
    type: 'Workshops',
    date: 'Jan 15, 2026',
    location: 'Online',
    description:
      'Modern React patterns and best practices in a hands-on session — write real code, not just watch slides.',
    year: 'Jan 2026',
    icon: FiCode,
    accent: 'from-flare-cyan to-brand-500',
    image: demoEvent1,
    featured: true,
  },
  {
    id: 'tech-meetup',
    title: 'Tech Meetup',
    type: 'Meetups',
    date: 'Mar 10, 2026',
    location: 'Community Center',
    description: 'Networking with fellow tech enthusiasts — the room where connections happen.',
    year: 'Mar 2026',
    icon: FiUsers,
    accent: 'from-brand-500 to-brand-600',
    image: demoEvent2,
  },
  {
    id: 'ai-webinar',
    title: 'AI Webinar',
    type: 'Webinars',
    date: 'Apr 5, 2026',
    location: 'Online',
    description: 'The latest trends in AI, explained for students — no fluff, just useful signal.',
    year: 'Apr 2026',
    icon: FiRadio,
    accent: 'from-flare-pink to-brand-500',
    image: demoEvent3,
  },
  {
    id: 'design-workshop',
    title: 'Design Systems Workshop',
    type: 'Workshops',
    date: 'May 12, 2026',
    location: 'Design Lab',
    description: 'Building scalable, consistent design systems for real products.',
    year: 'May 2026',
    icon: FiLayout,
    accent: 'from-brand-600 to-flare-cyan',
  },
  {
    id: 'cloud-meetup',
    title: 'Cloud Computing Meetup',
    type: 'Meetups',
    date: 'Jun 18, 2026',
    location: 'Tech Hub',
    description:
      'Cloud architecture and deployment strategies, discussed with peers who actually run things.',
    year: 'Jun 2026',
    icon: FiCloud,
    accent: 'from-flare-cyan to-brand-600',
  },
]

/*
 * ----------------------------------------------------------------
 * Community Moments — casual and memorable moments from the
 * community. Fields: id, title, description, year, icon, accent,
 * image, featured.
 * ----------------------------------------------------------------
 */
export const communityMoments = [
  {
    id: 'founding',
    title: 'The Founding Crew',
    description:
      'Nexcarinner started in 2024 with a simple idea: connect student developers who care.',
    year: '2024',
    icon: FiUsers,
    accent: 'from-brand-500 to-flare-pink',
    image: GunjanImg,
    featured: true,
  },
  {
    id: 'members-4500',
    title: '4500+ Members and Counting',
    description:
      'From one WhatsApp group to a growing family of communities across tech and beyond.',
    year: '2026',
    icon: FiHeart,
    accent: 'from-brand-600 to-flare-cyan',
    featured: 'wide',
  },
  {
    id: 'late-night-debugging',
    title: 'Late-Night Debugging',
    description:
      'Hackathon nights where the bug eventually falls — and the high-five is loudest.',
    year: '2025',
    icon: FiZap,
    accent: 'from-flare-pink to-brand-500',
    image: demoMoment1,
  },
  {
    id: 'one-family',
    title: 'One Family, Many Lanes',
    description:
      'From the core community to specialized tech tracks — each lane has its own culture, all on one shared mission.',
    year: '2026',
    icon: FiGlobe,
    accent: 'from-brand-500 to-flare-cyan',
    image: demoMoment2,
  },
]

/*
 * ----------------------------------------------------------------
 * Overview — a curated mix of highlights from every other category.
 * Only a handful of items live here; each points back to its
 * category page via `link`. `featured` shapes the bento layout.
 * ----------------------------------------------------------------
 */
export const overviewItems = [
  {
    id: 'ov-hackathon',
    category: 'events',
    title: 'Annual Nexcarinner Hackathon',
    description:
      '48 hours, real problems, and prizes for the bold — our biggest event of the year.',
    year: 'Feb 2026',
    icon: FiZap,
    accent: 'from-brand-500 to-flare-pink',
    link: '/gallery/events',
    linkLabel: 'Explore events',
    featured: 'hero',
  },
  {
    id: 'ov-platform',
    category: 'projects',
    title: 'The Nexcarinner Platform',
    description:
      'This site, built by our community tech team — living proof of what members can do.',
    year: '2026',
    icon: FiCode,
    accent: 'from-brand-500 to-brand-700',
    link: '/gallery/projects',
    linkLabel: 'Browse projects',
    featured: 'wide',
  },
  {
    id: 'ov-award',
    category: 'awards',
    title: 'Certificate of Participation',
    description: 'Participating in buldathon',
    year: '1st Aug, 2026',
    icon: FiAward,
    accent: 'from-flare-cyan to-flare-pink',
    image: NexcarinnerCertTeck4Hack,
    link: '/gallery/awards',
    linkLabel: 'See the awards',
    featured: 'wide',
  },
  {
    id: 'ov-collab',
    category: 'community-collab',
    title: 'Demo Community',
    description:
      'One of the communities we partner with — shared workshops, shared energy.',
    year: '2026',
    image: demoCollab1,
    accent: 'from-flare-cyan to-brand-500',
    link: '/gallery/community-collab',
    linkLabel: 'See collaborations',
    featured: true,
  },
  {
    id: 'ov-cert',
    category: 'certifications',
    title: 'Ethical Hacking & Network Security',
    description:
      'A verified certificate earned by community member Meera Patel.',
    year: '2026',
    image: demoCert2,
    accent: 'from-flare-pink to-brand-500',
    link: '/gallery/certifications',
    linkLabel: 'See certifications',
    featured: true,
  },
  {
    id: 'ov-moment',
    category: 'community-moments',
    title: 'First Hackathon Energy',
    description:
      '100+ students, late-night debugging, first demos — the moment we knew this worked.',
    year: '2025',
    icon: FiZap,
    accent: 'from-flare-pink to-brand-500',
    link: '/gallery/community-moments',
    linkLabel: 'See the moments',
    featured: true,
  },
]

/*
 * Single lookup map — category slug → its content array.
 * Used by the Gallery page to render each section.
 */
export const gallerySections = {
  projects,
  'community-collab': communityCollabs,
  certifications,
  awards,
  events,
  'community-moments': communityMoments,
}

/* Used as a branded accent on gallery section headings / dividers. */
export const galleryIcon = FiFilm
