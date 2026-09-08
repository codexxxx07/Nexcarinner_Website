import { FaCode, FaGlobe, FaLightbulb, FaPalette } from 'react-icons/fa'
import { IoBarChartSharp } from 'react-icons/io5'
import {
  FiUsers,
  FiZap,
  FiCalendar,
  FiMapPin,
  FiBookOpen,
  FiCpu,
  FiBriefcase,
  FiTarget,
  FiActivity,
  FiShield,
  FiDatabase,
} from 'react-icons/fi'

export const stats = [
  { end: 4500, suffix: '+', label: 'Active Members' },
  { end: 1, label: 'Event Hosted' },
  { end: 20, suffix: '+', label: 'Live Projects' },
  { end: 9, suffix: '+', label: 'Industry Partners' },
]

export const communities = [
  {
    title: 'Nexcarinner',
    members: '1800+',
    description: 'Opportunities, jobs, skills, and hackathons all in one place.',
    icon: FaGlobe,
    accent: 'from-flare-pink to-brand-500',
    link: 'https://chat.whatsapp.com/LFpegPQ2vMkKnQ4W07DDqH?s=cl&p=a&ilr=1',
    groups: ['Internship & Job Alerts', 'Government Job Alerts', 'Skill Building & Learning', 'Hackathons & Competitions'],
  },
  {
    title: 'Nexcarinner Network & Support',
    members: '1300+',
    description: 'A central hub for networking, resources, promotions, and general discussions.',
    icon: FiUsers,
    accent: 'from-brand-500 to-brand-600',
    link: 'https://chat.whatsapp.com/HRMehMJ6vCnK1vP3qR7gyH?s=cl&p=a&ilr=1',
    groups: ['Networking Group', 'General Group', 'Learning Resources', 'Promotion Group'],
  },
  {
    title: 'Nexcarinner Tech',
    members: '1200+',
    description: 'Dedicated tech community covering Web Development, AI/ML, cybersecurity & Ethical Hacking, Data Science and Data Analytics',
    icon: FaCode,
    accent: 'from-flare-cyan to-brand-500',
    link: 'https://chat.whatsapp.com/BDg0TFynjZ7JmZkWiFvdWI?s=cl&p=a&ilr=1',
    groups: ['Tech Full Stack', 'Tech Cybersecurity & Ethical Hacking', 'Tech AI/ML', 'Tech Data Science', 'Data Analysis', 'Tech Discussion'],
  },
  {
    title: 'Nexcarinner Freelance',
    members: '500+',
    description: 'A dedicated space for students and creators to explore freelance opportunities, offer services, discuss projects, and grow their freelance journey.',
    icon: FiBriefcase,
    accent: 'from-emerald-400 to-brand-500',
    link: 'https://chat.whatsapp.com/FuEkJM7uBqbC26GPpSscUO',
    groups: ['Tech Freelance', 'Nexcarinner Service', 'Freelance Discussion', 'Non Tech Freelance'],
  },
  {
    title: 'Nexcarinner Non Tech',
    members: '400+',
    description: 'A creative community for students interested in non-technical skills, creative work, digital marketing, content creation, and design.',
    icon: FaPalette,
    accent: 'from-amber-400 to-orange-500',
    link: 'https://chat.whatsapp.com/CLd3b32akHN89WMMIgC2eR',
    groups: ['Non Tech Video Editing', 'Non Tech Graphic Designing', 'Non Tech Discussion', 'Non Tech Digital Marketing', 'Non Tech Content Writing'],
  },
]

export const groups = [
  {
    category: 'Study Groups',
    items: ['React Study Group', 'Python Bootcamp', 'Algorithm Practice'],
  },
  {
    category: 'Project Teams',
    items: ['Open Source Contributors', 'Hackathon Team', 'Startup Builders'],
  },
  {
    category: 'Workshops',
    items: ['Design Systems', 'API Development', 'DevOps Basics'],
  },
  {
    category: 'Mentorship',
    items: ['Peer Mentoring', 'Industry Mentors', 'Career Guidance'],
  },
]

export const announcements = [
  { icon: FiZap, text: 'Annual Hackathon registrations are open — Feb 20, 2026' },
  { icon: FiUsers, text: 'New AI & Machine Learning study group starts this week' },
  { icon: FiCalendar, text: 'Monthly demo day — every last Friday' },
  { icon: FiTarget, text: 'Mentorship 1:1s now open for Spring 2026' },
  { icon: FiMapPin, text: 'Cloud Computing meetup at Tech Hub — Jun 18, 2026' },
]

export const skills = [
  { label: 'Technology', icon: FiCpu },
  { label: 'Networking', icon: FiUsers },
  { label: 'Learning', icon: FiBookOpen },
  { label: 'Hackathons', icon: FiZap },
  { label: 'Internships', icon: FiBriefcase },
  { label: 'Jobs', icon: FiTarget },
  { label: 'AI/ML', icon: FiActivity },
  { label: 'Full Stack', icon: FaCode },
  { label: 'Cybersecurity', icon: FiShield },
  { label: 'Data Science', icon: FiDatabase },
  { label: 'Data Analysis', icon: IoBarChartSharp },
]

export const heroPillars = [
  { label: 'Innovate', icon: FaLightbulb },
  { label: 'Learn', icon: FiBookOpen },
  { label: 'Grow', icon: FaCode },
  { label: 'Succeed', icon: FiBriefcase },
]

export const heroPhrases = ['together', 'with us', 'as one', 'differently']
