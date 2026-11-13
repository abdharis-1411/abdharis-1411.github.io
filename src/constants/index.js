export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
];

// Testimonials disembunyikan dulu — belum ada kutipan asli dari klien
// (jangan fabrikasi nama/quote). Isi array ini kalau sudah ada yang real,
// lalu aktifkan lagi <Clients /> di App.jsx.
export const clientReviews = [];

// Reusable tech-tag icons (hanya pakai aset yang tersedia di /public/assets
// biar gak ada gambar broken).
const reactTag = { id: 1, name: 'React.js', path: '/assets/react.svg' };
const tsTag = { id: 2, name: 'TypeScript', path: '/assets/typescript.png' };
const twTag = { id: 3, name: 'TailwindCSS', path: 'assets/tailwindcss.png' };

export const myProjects = [
  {
    title: 'Multi-Tenant Sales Force Automation',
    desc: 'A multi-tenant SFA platform that digitizes field sales end to end: geofenced visit check-ins, in-store sales capture, POSM/display audits, survey forms, leaderboards and real-time team tracking — all driven from a per-tenant cockpit CMS.',
    subdesc:
      'Built with a Go (Fiber) API, a React + Ant Design CMS and a native mobile app for field reps, backed by PostgreSQL with FCM push, offline-first capture and strict per-tenant isolation.',
    href: '#',
    texture: '/textures/project/work1.mp4',
    logo: '/assets/ic-sfa.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [reactTag, tsTag, twTag],
  },
  {
    title: 'Partner & CRM Platform',
    desc: 'A CRM / partner-management platform that tracks business partners, contacts and leads across their full lifecycle, with monthly data imports, follow-up stamping and status-driven category rules.',
    subdesc:
      'Full stack: a Go API, a React CMS and an Expo (React Native) companion app on PostgreSQL.',
    href: '#',
    texture: '/textures/project/work2.mp4',
    logo: '/assets/ic-crm.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [reactTag, tsTag, twTag],
  },
  {
    title: 'Field Distribution Dashboard',
    desc: 'A multi-region field-operations dashboard for a distribution network: executive summaries per region and per-rep detail built from real ETL data, covering visit coverage, stock and sales across multiple territories.',
    subdesc:
      'Rebuilt on React 19 + Vite + Tailwind CSS with an Express API, plus a live stock-ledger module.',
    href: '#',
    texture: '/textures/project/work3.mp4',
    logo: '/assets/ic-dashboard.svg',
    logoStyle: {
      backgroundColor: '#0B2E24',
      border: '0.2px solid #134E3A',
      boxShadow: '0px 0px 60px 0px rgba(52, 211, 153, 0.35)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [reactTag, tsTag, twTag],
  },
  {
    title: 'Jobs Portal & Applicant CMS',
    desc: 'A public careers portal where candidates browse and apply for jobs, paired with an admin CMS to manage postings and applicants — including automated employment-contract generation.',
    subdesc:
      'Node/Express backend with a Vite + React admin and JWT auth behind nginx.',
    href: '#',
    texture: '/textures/project/work4.mp4',
    logo: '/assets/ic-jobs.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [reactTag, tsTag, twTag],
  },
  {
    title: 'Asset Lifecycle Management',
    desc: 'An asset-management platform covering the full lifecycle — registration, assignment, handover documents and tracking — delivered as an installable PWA for desktop and mobile.',
    subdesc:
      'React front end on a PostgreSQL-backed API.',
    href: '#',
    texture: '/textures/project/work5.mp4',
    logo: '/assets/ic-asset.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [reactTag, tsTag, twTag],
  },
  {
    title: 'Executive FMCG Cockpits',
    desc: 'A set of single-view executive dashboards for FMCG brands: KPI cockpits with branded visuals, animated connectors and drill-down cards for sales, promotion programs and distribution.',
    subdesc:
      'Self-contained HTML/CSS/JS dashboards with custom data-viz, several exported to MP4 for executive presentations.',
    href: '#',
    texture: '/textures/project/work6.mp4',
    logo: '/assets/ic-cockpit.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [reactTag, twTag],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'React',
    pos: 'Frontend & CMS',
    duration: 'Primary stack',
    title:
      'I build multi-tenant admin cockpits, field-ops dashboards and client CMS with React, Ant Design and Tailwind CSS — turning complex operations data into clean, responsive interfaces.',
    icon: '/assets/react.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Design → Code',
    duration: 'Design workflow',
    title:
      'I translate designs and brand guidelines into pixel-accurate, responsive UI, iterating quickly from mockup to working product.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'GitHub',
    pos: 'Ship & Deploy',
    duration: 'Daily driver',
    title:
      'I version everything on Git and run my own deploy flow to a VPS — Go/Node APIs, PostgreSQL and React front ends behind nginx, from local build to live.',
    icon: '/assets/github.svg',
    animation: 'salute',
  },
];
