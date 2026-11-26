<div align="center">

<img src="./FrontEnd/src/assets/images/NCW_Logo.jpg" alt="Nexcarinner logo" width="360" />

# ⚡ Nexcarinner 🔨

### LEARN • BUILD • GROW

**Nexcarinner is a student-focused technology and learning community where students, developers, innovators, and tech enthusiasts come together to learn emerging technologies, collaborate on real-world projects, and discover opportunities.**

[![Live website](https://img.shields.io/badge/Live-nexcarinner.vercel.app-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://nexcarinner.vercel.app/)
[![Source code](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/codexxxx07/Nexcarinner_Website)

</div>

---

## 📌 Project Overview

Nexcarinner brings together people who are curious about technology, development, and innovation. It is a welcoming space for learners at different stages — from writing a first program to shipping production applications — to find their people, work on meaningful projects, and grow through shared experience.

The community's work spans several connected areas:

- **Skill learning and mentorship** — practical, hands-on tracks across development, cybersecurity, AI, and data, guided by mentors.
- **Opportunity discovery** — job postings, marketing and developer internships, and practical workforce resources shared in one place.
- **Events and hackathons** — partnerships and participation in build-focused programmes such as Buildathon 2026 with Tech4Hack and Elite Hack 1.0.
- **Ecosystem collaborations** — working with fellow youth and developer communities such as Elevana and Builder Base to help students turn ideas into outcomes.
- **Cross-community networking** — a central network for discussing emerging tech trends, exchanging resources, and finding project collaborators or co-founders.

| | |
|---|---|
| **Mission** | *Make learning feel alive* — learn by doing, grow together, solve real problems, and build the future. |
| **Vision** | *The default home for student builders* — a place to learn, build, experiment, and connect talent with real opportunities. |
| **Values shown on the site** | Collaboration, Learning, Innovation, Inclusivity, Excellence, Integrity. |

This repository contains the **Nexcarinner Community Website**: the public home for the community's story, domains, events, gallery, collaborations, and contact channels.

---

## 🧩 About Nexcarinner

### What it is

Nexcarinner is a student-led community platform built around a simple idea: students achieve more when they learn in public, build together, and help each other grow. The website introduces the community, its mission and vision, the people behind it, the technology domains members explore, and the partners it works with.

### Why it exists

Learning technology can feel fragmented — opportunities, mentors, events, and collaborators are often scattered across different places. Nexcarinner exists to bring those pieces together into one approachable community where curiosity turns into practice, and practice turns into projects worth showing.

### What it aims to achieve

- Encourage **learning by doing** through projects, challenges, hackathons, and hands-on sessions.
- Build a supportive environment where members **collaborate, share knowledge, and learn together**.
- Help students apply their skills to **real-world problems** instead of stopping at theory.
- Develop the technical skills, confidence, and creativity needed to **create and innovate**.
- Connect students with communities, mentors, events, internships, and opportunities.

### Opportunities for members

Members can explore specialized tracks, join study groups and project teams, take part in workshops and certification assessments, find internship and job leads, meet mentors, and collaborate with other student communities. Creativity is not limited to code — design, content, marketing, and freelance work are part of the community too.

Throughout the website, the emphasis stays on **collaboration, learning, creativity, and growth**: pick a lane, find your people, and build something real.

---

## 🛠️ Community Domains

The website organizes the community into focused spaces and tracks. These are the domains currently presented in the project content:

| Community space | Focus | Groups / tracks shown on the site |
|---|---|---|
| **Nexcarinner** | Opportunities, jobs, skills, and hackathons in one place | Internship & Job Alerts, Government Job Alerts, Skill Building & Learning, Hackathons & Competitions |
| **Nexcarinner Network & Support** | Networking, resources, promotions, and general discussion | Networking Group, General Group, Learning Resources, Promotion Group |
| **Nexcarinner Freelance** | Freelance opportunities, services, projects, and discussion | Tech Freelance, Nexcarinner Service, Freelance Discussion, Non Tech Freelance |
| **Nexcarinner Tech** | Web development, AI/ML, cybersecurity, data science, and analytics | Tech Full Stack, Tech Cybersecurity & Ethical Hacking, Tech AI/ML, Tech Data Science, Data Analysis, Tech Discussion |
| **Nexcarinner Non Tech** | Creative and digital skills alongside technology | Non Tech Video Editing, Graphic Designing, Discussion, Digital Marketing, Content Writing |

Additional community activities highlighted on the site include study groups, project teams, workshops, mentorship, hackathons, demo days, and skill assessments across **AI / ML**, **Full Stack Development**, **Cybersecurity & Ethical Hacking**, and **Data Science**. The Guides page also presents learning paths for full-stack web development, data science foundations, cybersecurity essentials, AI & machine learning, system design, and data analytics with SQL.

---

## ✨ Website Features

Only features present in the current implementation are listed below.

| Feature | What the website provides |
|---|---|
| **Home Page** (`/`) | An introduction to the community, rotating announcements, community spaces, a skills marquee, community highlights, and a partner logo showcase. |
| **About Page** (`/about`) | The Nexcarinner story, mission, vision, values, community journey timeline, and the team with their roles. |
| **Events** (`/events`) | Upcoming and past events with filters for workshops, hackathons, and webinars, plus information about a past certification / skill-assessment initiative. |
| **Gallery** (`/gallery`) | A visual archive with an overview and category tabs: **Projects**, **Community Collab**, **Certifications**, **Awards**, and **Community Moments**. Certification entries include member images and LinkedIn links where provided. Event entries and an event card renderer exist in the gallery data layer; public event browsing is currently presented on the Events page rather than as a visible gallery tab. |
| **Community Partners** | Official collaborations showcased both in the home page partner marquee and in the Gallery → Community Collab section. |
| **Authentication** | Clerk-powered registration and sign-in (`/sign-in`, `/sign-up`), the Clerk user button, protected access to `/app`, and success notifications after authentication. The auth UI follows the site's light/dark theme and is styled for social provider buttons — Google and GitHub buttons appear when those providers are enabled in the Clerk configuration, which lives outside this repository. |
| **Light & Dark Mode** | A theme toggle in the navigation bar, persistence of the chosen theme in the browser, and initial theme selection based on the system preference. |
| **Responsive Design** | Fluid layouts, a dedicated mobile navigation sheet, and optimized grids for desktop, tablet, and mobile screens. |
| **Contact Section** (`/contact`) | A contact form that opens an email draft, direct email and phone details, social links, a partner-with-us option, and a short FAQ accordion. |
| **Documentation & Guides** | Reference sections explaining how the community works, plus structured learning tracks for members. |
| **FAQ** (`/faq`) | Categorized answers about membership, events, mentorship, and projects. |
| **Blog** (`/blog`) | A blog page currently showing a "Coming Soon" state. |
| **Privacy Policy & Terms of Service** | Dedicated `/privacy-policy` and `/terms-of-service` pages, also linked from the site footer. |

Supporting experience details include smooth scrolling, scroll-reveal animations, animated hero text, a custom cursor effect, canvas-based background and click effects, skeleton loading states, lazy-loaded routes, an error boundary, per-page titles, and SEO basics such as a sitemap, robots file, favicon, and single-page-app rewrites on Vercel.

---

## 🤝 Community Collaborations

The Gallery → Community Collab section currently displays these seven collaboration partners. The same set appears in the community partner marquee on the home page.

| Partner | How it appears on the website |
|---|---|
| **Tech4Hack** | An official community partnership for Buildathon 2026 — workshops, mentorship, and internship opportunities that let Nexcarinner members build real-world projects. |
| **Elevana** | A strategic ecosystem collaboration with a fellow youth platform, sharing execution infrastructure to help turn students' startup and tech ideas into concrete outcomes. |
| **Unison** | Nexcarinner joined the Unison Build-A-Thon line-up — an AI-powered build sprint where students code, elevate, compete, and connect. |
| **Event Dev X** | Featured as a community collaboration partner. The project does not include an additional description for this entry. |
| **Hackqube** | An official partnership — two communities hacking, building, and innovating to empower future innovators. |
| **Coders Circle** | A collaboration built around two communities and one shared love for code. |
| **Builder Base** | A collaboration founded on the shared promise to build, connect, and grow together. |

These are the collaborations present in the project — no additional partnerships are claimed here.

---

## 🧱 Technology Stack

Technologies below are taken from the project dependencies and implementation.

| Category | Technologies |
|---|---|
| **Frontend** | React 19, React DOM, JavaScript (JSX), Vite 8 with `@vitejs/plugin-react` |
| **Styling & UI** | Tailwind CSS 4 with `@tailwindcss/vite`, custom CSS design tokens, Radix UI primitives (Slot, Tabs, Tooltip), class-variance-authority, `clsx`, `tailwind-merge`, `react-icons`, Google Fonts (Inter and Space Grotesk) |
| **Authentication** | `@clerk/clerk-react` — `ClerkProvider`, `SignIn`, `SignUp`, `UserButton`, session-aware navigation, protected routes, and a theme-matched Clerk appearance |
| **Routing** | `react-router-dom` 7 — browser router, lazy-loaded routes, nested/optional gallery route, redirects, and a protected dashboard route |
| **Animations & Interactions** | GSAP and Lenis (smooth scrolling), plus locally implemented reveal effects, typewriter and blur text, marquees, count-up numbers, click sparks, animated shape grid, and a custom target cursor |
| **Development Tools** | ESLint 10 with React Hooks and React Refresh plugins, Vite build tooling, and `sharp`-based local image inspection scripts |
| **Deployment & Hosting** | Vercel hosting with SPA rewrite rules in `vercel.json`, generated production output in `dist/`, and public SEO assets in `public/` |

---

## 📁 Project Structure

```text
Nexcarinner_Website/
├── README.md                         # This overview
├── FrontEnd/
│   ├── index.html                    # App shell, metadata, fonts, early theme application
│   ├── package.json                  # Dependencies and scripts
│   ├── vite.config.js                # Vite, React, Tailwind, vendor chunk splitting
│   ├── vercel.json                   # SPA rewrites for deployment
│   ├── eslint.config.js              # Lint configuration
│   ├── public/                       # Favicon, icons, robots.txt, sitemap.xml
│   ├── src/
│   │   ├── main.jsx                  # App bootstrap, router, Clerk, smooth scrolling
│   │   ├── App.jsx                   # Routes, layout, theme, auth pages, lazy loading
│   │   ├── index.css                 # Global styles and design system
│   │   ├── pages/                    # Home, About, Events, Gallery, Contact, Dashboard,
│   │   │                             # Documentation, Guides, FAQ, Blog, policies, 404
│   │   ├── components/               # Navbar, Footer, Layout, landing sections, UI pieces
│   │   │   ├── auth/                 # Authentication notifications
│   │   │   ├── reactbits/            # BlurText, ShapeGrid, TargetCursor
│   │   │   ├── ui/                   # Button, Tabs, Tooltip, Skeleton
│   │   │   └── Skeleton/             # Page, card, and image loading states
│   │   ├── context/                  # Theme and toast providers
│   │   ├── data/                     # Home and gallery content
│   │   ├── hooks/                    # Page title hook
│   │   ├── lib/                      # Clerk appearance and utility helpers
│   │   └── assets/
│   │       ├── images/               # Logo, team photos, certification imagery
│   │       ├── CommunityPartners/    # Partner logos
│   │       ├── CommunityMoments/     # Gallery moment images
│   │       └── Certifications/       # Member certificate images
│   ├── _imgcheck.mjs                 # Local image inspection utility
│   └── _imgcheck2.mjs                # Local image inspection utility
└── .vscode/                          # Editor configuration
```

`node_modules/` and `dist/` are generated folders and are not part of the source structure described above.

---

## 💬 Community & Contributions

Nexcarinner is open to developers, learners, creators, designers, writers, and anyone who wants to be around people building things that matter. You do not need to have everything figured out — curiosity and a willingness to show up are enough to start.

The website directs people who want to get involved to the **Contact page**. From there, members can ask about joining, request the community Discord invite described in the FAQ, propose events, explore mentorship, or reach out about partnerships. Community WhatsApp groups are also linked directly from the home page:

| Group | Purpose |
|---|---|
| [Nexcarinner](https://chat.whatsapp.com/LFpegPQ2vMkKnQ4W07DDqH?s=cl&p=a&ilr=1) | Opportunities, jobs, skills, and hackathons |
| [Network & Support](https://chat.whatsapp.com/HRMehMJ6vCnK1vP3qR7gyH?s=cl&p=a&ilr=1) | Networking, resources, promotion, and general discussion |
| [Freelance](https://chat.whatsapp.com/FuEkJM7uBqbC26GPpSscUO) | Freelance work, services, and discussion |
| [Tech](https://chat.whatsapp.com/BDg0TFynjZ7JmZkWiFvdWI?s=cl&p=a&ilr=1) | Development, cybersecurity, AI/ML, and data tracks |
| [Non Tech](https://chat.whatsapp.com/CLd3b32akHN89WMMIgC2eR) | Design, content, video, and digital marketing |

Ways to take part include joining a domain track, forming a team at a hackathon, sharing a project or certification for the gallery, suggesting an event, mentoring, or collaborating with the community on something new. No formal public pull-request workflow is documented in this repository — the supported route into the community is through the channels above.

---

## 🔗 Important Links

| Resource | Link |
|---|---|
| Live website | [nexcarinner.vercel.app](https://nexcarinner.vercel.app/) |
| Source repository | [github.com/codexxxx07/Nexcarinner_Website](https://github.com/codexxxx07/Nexcarinner_Website) |
| GitHub community account | [github.com/nexcarinner](https://github.com/nexcarinner) |
| LinkedIn | [linkedin.com/company/nexcarinner](https://www.linkedin.com/company/nexcarinner/) |
| WhatsApp channel | [Community updates channel](https://whatsapp.com/channel/0029VbCgUvZBA1eycwNogK2D) |
| X | [x.com/nexcarinner](https://x.com/nexcarinner) |
| Instagram | [instagram.com/nexcarinner](https://www.instagram.com/nexcarinner?utm_source=qr&igsh=MWo0MzY4NnFjMXN0cA==) |
| General contact | [nexcarinner.support@gmail.com](mailto:nexcarinner.support@gmail.com) |
| Partnerships | [nexcarinner@gmail.com](mailto:nexcarinner@gmail.com) |
| Phone | +91 62056 39470 |
| Community Discord | Invite is shared through the website's Contact page; no public server URL is published in the project source. |

---

## 🙌 Credits & Acknowledgements

Nexcarinner is shaped by its founder, **Gunjan Kumar (Gupta)**, co-founder **Saurya Kapoor**, and the community leads and mentors who keep the platform and its programmes moving — including the full-stack, AI/ML, cybersecurity, data science, analytics, recruitment, and coordination team members introduced on the About page.

Thank you to every member who asks a question, shares a resource, joins a hackathon, mentors a peer, or ships a project. Special appreciation goes to the collaboration partners featured on the site — **Tech4Hack, Elevana, Unison, Event Dev X, Hackqube, Coders Circle, and Builder Base** — for helping the community grow together.

> *Built with passion, for students who build the future.*
