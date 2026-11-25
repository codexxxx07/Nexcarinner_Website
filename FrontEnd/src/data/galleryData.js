import {
  FiCode,
  FiZap,
  FiUsers,
  FiShield,
  FiAward,
  FiHeart,
} from 'react-icons/fi'
import GunjanImg from '../assets/images/Gunjan.jpg'
import builderBaseLogo from '../assets/CommunityPartners/BuilderBase.jpg'
import codersCircleLogo from '../assets/CommunityPartners/CodersCircle.jpg'
import elevanaLogo from '../assets/CommunityPartners/Elevana.jpg'
import eventDevXLogo from '../assets/CommunityPartners/EventDevX.jpg'
// Square, tightly cropped variant for the fixed-square collab logo frames.
// The Home community marquee keeps using the original rectangular asset.
import hackQubeLogo from '../assets/CommunityPartners/HackQube.jpg'
import tech4HackLogo from '../assets/CommunityPartners/Tech4Hack.jpg'
import unisonLogo from '../assets/CommunityPartners/Unison.jpg'
import abhijitPatraCert from '../assets/Certifications/AbhijitPatra.jpg'
import shauryaGuptaCert from '../assets/Certifications/ShauryaGupta.jpg'
import yuktaRavindraCert from '../assets/Certifications/YuktaRavindra.jpg'
import nadhiyaRCert from '../assets/Certifications/NADHIYAR.jpg'
import aishwaryaCert from '../assets/Certifications/Aishwarya.jpg'
import vibhuKumarCert from '../assets/Certifications/VibhuKumar.jpg'
import devadharshiniSivaKumarCert from '../assets/Certifications/DevadharshiniSivaKumar.jpg'
import paridhiLikhitkarCert from '../assets/Certifications/ParidhiLikhitkar.jpg'
import samiyaMirzaCert from '../assets/Certifications/SamiyaMirza.jpg'
import NexcarinnerCertTeck4Hack from '../assets/images/Nexcarinner_Cert_Teck4Hack.jpg'
import communityMoment1 from '../assets/CommunityMoments/1.jpg'
import communityMoment2 from '../assets/CommunityMoments/2.jpg'
import communityMoment3 from '../assets/CommunityMoments/3.jpg'
import communityMoment4 from '../assets/CommunityMoments/4.jpg'
import communityMoment5 from '../assets/CommunityMoments/5.jpg'
import communityMoment6 from '../assets/CommunityMoments/6.jpg'
import communityMoment7 from '../assets/CommunityMoments/7.jpg'
import communityMoment8 from '../assets/CommunityMoments/8.jpg'
import communityMoment9 from '../assets/CommunityMoments/9.jpg'
import communityMoment10 from '../assets/CommunityMoments/10.jpg'

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
      'Projects and initiatives from across the Nexcarinner community — the platforms we build and the programs we run together.',
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
 * Community Collab — collaborations between Nexcarinner and OTHER
 * communities / organizations. Each entry showcases the partner
 * (logo + name), not an internal Nexcarinner initiative.
 * Fields: id, name, logo, description, year (optional), featured.
 *
 * Only partnerships documented in the project are listed here:
 *   · Unison    — Nexcarinner in the Unison Build-A-Thon line-up.
 *   · Tech4Hack — official community partner for Buildathon 2026.
 *   · Elevana   — strategic ecosystem collaboration.
 *   · Hackqube  — official community partnership.
 * ----------------------------------------------------------------
 */
export const communityCollabs = [
  {
    id: 'unison',
    name: 'Unison',
    logo: unisonLogo,
    description:
      'Nexcarinner joined the Unison Build-A-Thon line-up — an AI-powered build sprint where students code, elevate, compete, and connect.',
    featured: true,
  },
  {
    id: 'tech4hack',
    name: 'Tech4Hack',
    logo: tech4HackLogo,
    description:
      'An official community partnership with Tech4Hack for the Buildathon 2026 — workshops, mentorship, and internship opportunities that let Nexcarinner members build real-world projects.',
  },
  {
    id: 'elevana',
    name: 'Elevana',
    logo: elevanaLogo,
    description:
      "A strategic ecosystem collaboration with Elevana, a fellow youth platform — shared execution infrastructure that helps turn students' startup and tech ideas into concrete outcomes.",
  },
  {
    id: 'event-dev-x',
    name: 'Event Dev X',
    logo: eventDevXLogo,
    description: '',
  },
  {
    id: 'hackqube',
    name: 'Hackqube',
    logo: hackQubeLogo,
    description:
      'An official partnership with Hackqube — two communities hacking, building, and innovating to empower future innovators.',
  },
  {
    id: 'coders-circle',
    name: 'Coders Circle',
    logo: codersCircleLogo,
    description:
      'A collaboration with Coders Circle — two communities, one mission, coming together around a shared love for code.',
  },
  {
    id: 'builder-base',
    name: 'Builder Base',
    logo: builderBaseLogo,
    description:
      'A proud collaboration with Builder Base — two communities, one vision, built on the shared promise to build, connect, and grow together.',
  },
]

/*
 * ----------------------------------------------------------------
 * Certifications — verified certificates earned by Nexcarinner
 * community members. Fields: id, memberName, certificateTitle,
 * rank, date, image, linkedinUrl.
 * ----------------------------------------------------------------
 */
export const certifications = [
  {
    id: 'cert-abhijit-patra',
    memberName: 'Abhijit Patra',
    certificateTitle: 'Frontend Development Certification Test',
    rank: '1st',
    date: '20 August 2026',
    year: '2026',
    image: abhijitPatraCert,
    linkedinUrl: 'https://www.linkedin.com/in/abhijit-axyon?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 'cert-shaurya-gupta',
    memberName: 'Shaurya Gupta',
    certificateTitle: 'Frontend Development Certification Test',
    rank: '2nd',
    date: '20 August 2026',
    year: '2026',
    image: shauryaGuptaCert,
    //linkedinUrl: '',
  },
  {
    id: 'cert-yukta-ravindra-thakur',
    memberName: 'Yukta Ravindra Thakur',
    certificateTitle: 'Frontend Development Certification Test',
    rank: '3rd',
    date: '20 August 2026',
    year: '2026',
    image: yuktaRavindraCert,
    linkedinUrl: 'https://www.linkedin.com/in/yukta-thakur-38251a328?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 'cert-nadhiya-r',
    memberName: 'Nadhiya R',
    certificateTitle: 'Python for Data Science Certification Test',
    rank: '1st',
    date: '20 August 2026',
    year: '2026',
    image: nadhiyaRCert,
    linkedinUrl: '',
    showLinkedinIcon: true,
  },
  {
    id: 'cert-aishwarya',
    memberName: 'Aishwarya',
    certificateTitle: 'Python for Data Science Certification Test',
    rank: '2nd',
    date: '20 August 2026',
    year: '2026',
    image: aishwaryaCert,
    linkedinUrl: '',
    showLinkedinIcon: true,
  },
  {
    id: 'cert-vibhu-kumar',
    memberName: 'Vibhu Kumar',
    certificateTitle: 'Python for Data Science Certification Test',
    rank: '3rd',
    date: '20 August 2026',
    year: '2026',
    image: vibhuKumarCert,
    linkedinUrl: '',
    showLinkedinIcon: true,
  },
  {
    id: 'cert-devadharshini-siva-kumar',
    memberName: 'Devadharshini Siva Kumar',
    certificateTitle: 'AI Project Development Certification Test',
    rank: '1st',
    date: '20 August 2026',
    year: '2026',
    image: devadharshiniSivaKumarCert,
    linkedinUrl: '',
    showLinkedinIcon: true,
  },
  {
    id: 'cert-paridhi-likhitkar',
    memberName: 'Paridhi Likhitkar',
    certificateTitle: 'AI Project Development Certification Test',
    rank: '2nd',
    date: '20 August 2026',
    year: '2026',
    image: paridhiLikhitkarCert,
    linkedinUrl: '',
    showLinkedinIcon: true,
  },
  {
    id: 'cert-samiya-mirza',
    memberName: 'Samiya Mirza',
    certificateTitle: 'AI Project Development Certification Test',
    rank: '3rd',
    date: '20 August 2026',
    year: '2026',
    image: samiyaMirzaCert,
    linkedinUrl: '',
    showLinkedinIcon: true,
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
]

/*
 * ----------------------------------------------------------------
 * Community Moments — partnership posters, announcement graphics
 * and photographs shared by the community.
 *
 * Every image fills its card's square cover frame edge to edge with
 * object-fit: cover: the frame is never letterboxed and no image is
 * ever stretched. `objectPosition` optionally shifts the crop
 * (defaults to 'center') so a subject stays in view; any overflow is
 * cropped, never padded.
 *
 * Every card uses the same square frame (MOMENT_IMAGE_ASPECT in
 * Gallery.jsx) so the grid stays uniform at every breakpoint. Images
 * live in ../assets/CommunityMoments/.
 * ----------------------------------------------------------------
 */
export const communityMoments = [
  {
    id: 'founding',
    title: 'The Founding Crew',
    description:
      'Nexcarinner started in 2025 with a simple idea: connect student developers who care.',
    year: '2025',
    icon: FiUsers,
    accent: 'from-brand-500 to-flare-pink',
    image: GunjanImg,
    featured: true,
    // Portrait photograph of a founding member — the square crop is biased
    // upward so the face stays fully in view.
    objectPosition: '50% 30%',
  },
  {
    id: 'community-moment-1',
    title: 'Community Time',
    description:
      "The Hack 1.0 event poster — Nexcarinner rallying the community to register on Unstop and bring their ideas to the hackathon floor.",
    year: '',
    icon: FiHeart,
    accent: 'from-brand-600 to-flare-cyan',
    image: communityMoment1,
  },
  {
    id: 'community-moment-2',
    title: 'Team Collaboration',
    description:
      'A proud collaboration with Builder Base — two communities, one vision, built on the shared promise to build, connect, and grow together.',
    year: '',
    icon: FiHeart,
    accent: 'from-brand-500 to-flare-cyan',
    image: communityMoment2,
  },
  {
    id: 'community-moment-3',
    title: 'Learning Together',
    description:
      'The Buildathon poster where Nexcarinner stood among a lineup of student communities — one theme for everyone: code, build, and innovate.',
    year: '',
    icon: FiHeart,
    accent: 'from-flare-pink to-brand-500',
    image: communityMoment3,
    // Centered 5% zoom trims a little from the top and bottom so this
    // portrait poster sits in the square frame like its siblings.
    objectPosition: '50% 50%',
    imageScale: 1.05,
  },
  {
    id: 'community-moment-4',
    title: 'Community Workshop',
    description:
      'A collaboration announcement with Elevate Nexus — two communities, same goal: students first. Sharing resources, connections, and support at every step.',
    year: '',
    icon: FiHeart,
    accent: 'from-brand-500 to-flare-pink',
    image: communityMoment4,
    // Same centered, slight vertical crop as Learning Together.
    objectPosition: '50% 50%',
    imageScale: 1.05,
  },
  {
    id: 'community-moment-5',
    title: 'Building Together',
    description:
      'The Tech4Hack Buildathon 2026 poster with Nexcarinner on board as a community partner — learn, build, and grow with workshops, mentorship, and internship opportunities for the winners.',
    year: '',
    icon: FiHeart,
    accent: 'from-flare-cyan to-brand-500',
    image: communityMoment5,
  },
  {
    id: 'community-moment-6',
    title: 'Community Activities',
    description:
      'An official partnership with HackQube — two communities hacking, building, and innovating to empower future innovators.',
    year: '',
    icon: FiHeart,
    accent: 'from-brand-600 to-flare-pink',
    image: communityMoment6,
  },
  {
    id: 'community-moment-7',
    title: 'Sharing a Moment',
    description:
      'An official partnership with Dev X — build, learn, and grow together, with one bold question for the community: are you ready for this?',
    year: '',
    icon: FiHeart,
    accent: 'from-flare-pink to-flare-cyan',
    image: communityMoment7,
  },
  {
    id: 'community-moment-8',
    title: 'Collaboration in Action',
    description:
      'Nexcarinner in the Unison Build-A-Thon line-up — an AI-powered build sprint where students code, elevate, compete, and connect.',
    year: '',
    icon: FiHeart,
    accent: 'from-brand-500 to-brand-700',
    image: communityMoment8,
  },
  {
    id: 'community-moment-9',
    title: 'Working Together',
    description:
      'A partnership teaser with Elevana — same energy, same question for the community: are you ready for this?',
    year: '',
    icon: FiHeart,
    accent: 'from-flare-cyan to-brand-600',
    image: communityMoment9,
  },
  {
    id: 'community-moment-10',
    title: 'Community Meetup',
    description:
      'A collaboration with Coder Circle — two communities, one mission, coming together around a shared love for code.',
    year: '',
    icon: FiHeart,
    accent: 'from-brand-500 to-flare-cyan',
    image: communityMoment10,
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
    id: 'ov-platform',
    category: 'projects',
    title: 'The Nexcarinner Platform',
    description:
      'This website — Nexcarinner’s home for opportunities, events, and community projects.',
    year: '2026',
    icon: FiCode,
    accent: 'from-brand-500 to-brand-700',
    link: '/gallery/projects',
    linkLabel: 'Browse projects',
    featured: 'wide',
  },
  {
    id: 'ov-frontend-cert',
    category: 'certifications',
    title: 'Frontend Development Certification Test',
    description: 'Verified certificate earned by Abhijit Patra, 1st place.',
    year: '20 August 2026',
    image: abhijitPatraCert,
    accent: 'from-flare-pink to-brand-500',
    link: '/gallery/certifications',
    linkLabel: 'See certifications',
  },
  {
    id: 'ov-tech4hack',
    category: 'community-collab',
    title: 'Nexcarinner × Tech4Hack',
    description:
      'Official community partner for Buildathon 2026 — workshops, mentorship, and internship opportunities.',
    image: tech4HackLogo,
    accent: 'from-flare-cyan to-brand-500',
    link: '/gallery/community-collab',
    linkLabel: 'See collaborations',
  },
  {
    id: 'ov-award',
    category: 'awards',
    title: 'Certificate of Participation',
    description: 'Recognition from Tech4Hack for taking part in Buildathon 2026.',
    year: '1st Aug, 2026',
    image: NexcarinnerCertTeck4Hack,
    accent: 'from-flare-cyan to-flare-pink',
    link: '/gallery/awards',
    linkLabel: 'See the awards',
    featured: 'wide',
  },
  {
    id: 'ov-unison',
    category: 'community-collab',
    title: 'Nexcarinner × Unison',
    description:
      'Nexcarinner joined the Unison Build-A-Thon line-up — an AI-powered build sprint where students code, elevate, compete, and connect.',
    image: unisonLogo,
    accent: 'from-flare-cyan to-brand-500',
    link: '/gallery/community-collab',
    linkLabel: 'See collaborations',
  },
  {
    id: 'ov-python-cert',
    category: 'certifications',
    title: 'Python for Data Science Certification Test',
    description: 'Verified certificate earned by Nadhiya R, 1st place.',
    year: '20 August 2026',
    image: nadhiyaRCert,
    accent: 'from-flare-pink to-brand-500',
    link: '/gallery/certifications',
    linkLabel: 'See certifications',
  },
  {
    id: 'ov-moment',
    category: 'community-moments',
    title: 'Team Collaboration',
    description:
      'A proud collaboration with Builder Base — two communities, one vision, built on the promise to build, connect, and grow together.',
    image: communityMoment2,
    accent: 'from-brand-500 to-flare-cyan',
    link: '/gallery/community-moments',
    linkLabel: 'See the moments',
  },
]

/*
 * Single lookup map — category slug → its content array.
 * Used by the Gallery page to render each section.
 */
export const gallerySections = {
  'community-collab': communityCollabs,
  certifications,
  awards,
  events,
  'community-moments': communityMoments,
}
