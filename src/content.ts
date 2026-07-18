/**
 * Every piece of editable content on the site lives in this file.
 * See CONTENT-EDITING.md at the repo root for how to add, remove,
 * or edit anything without touching component code.
 */

export type ProjectLink = {
  label: string;
  href: string;
  /** The primary link renders as the prominent button on the card. */
  primary?: boolean;
};

export type Project = {
  name: string;
  tagline: string;
  /** Tier 1 only: the problem the project exists to solve. */
  problem?: string;
  /** Tier 1 and 2: what was actually built. */
  built?: string;
  /** Short verified facts rendered as a highlighted row. */
  numbers?: string[];
  stack: string[];
  links: ProjectLink[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const site = {
  name: "Nihal M",
  role: "Forward Deployed Engineer Intern at Plivo",
  oneLiner:
    "I build production AI agents and the backend systems that keep them honest.",
  subline:
    "Backend, full-stack, and AI agent engineering. Currently a Forward Deployed Engineer Intern at Plivo.",
  url: "https://nihal-m.vercel.app",
  metaTitle: "Nihal M | Software Engineer",
  metaDescription:
    "Backend, full-stack, and AI agent engineer. Production LLM agents, event-driven systems, and voice AI over real telephony.",
  email: "nihal6mn@gmail.com",
  github: "https://github.com/nihal-25",
  linkedin: "https://linkedin.com/in/nihal-m25",
  resume: "/resume.pdf",
};

export const about: string[] = [
  "I'm a CS grad from BMS College of Engineering (2026), currently a Forward Deployed Engineer Intern at Plivo, a voice and messaging API company. I build AI voice agents for enterprise clients using Plivo's Voice APIs, ElevenLabs, and LiveKit, debug production SIP and telephony issues with OpenSearch, Redshift, LogRocket, and QuickSight, and own enterprise accounts end to end as their technical point of contact.",
  "Outside work I build and run real systems: an LLM email agent that has processed 1,300+ drafts in production, a payments backend with a double-entry ledger, and a multi-tenant support platform. I like problems where correctness actually matters.",
];

export const tier1: Project[] = [
  {
    name: "Email Agent for Customer Support",
    tagline:
      "Production LLM agent that drafts support replies behind a human approval gate",
    problem:
      "LLM support automation fails in three ways: it fabricates answers, it acts without bounds, and it silently loses work.",
    built:
      "An agent in daily production use that reads incoming customer threads, retrieves grounding through RAG over a pgvector docs corpus, drafts a reply, and posts it to Slack for human approval. Grounded-or-hold means a draft that cannot be grounded becomes a holding question instead of a guess, and there is no auto-send path in the code at all. Debugging cases run account-scoped queries through a read-only warehouse client, and idempotency anchors plus reconciliation make sure restarts and dropped events never lose or duplicate work.",
    numbers: [
      "In daily production use",
      "1,300+ drafts processed",
      "228 tests, guards verified by injecting misbehaving model output",
    ],
    stack: [
      "Python",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Gmail Pub/Sub",
      "Slack Socket Mode",
    ],
    links: [
      {
        label: "Watch the Loom demo",
        href: "https://www.loom.com/share/4ec91acdeec546ddba6874a5a6ebb88d",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/nihal-25/fde-email-agent" },
    ],
  },
  {
    name: "FinFlow",
    tagline:
      "Payments backend with a double-entry ledger and async fraud detection",
    problem:
      "Three classic fintech failures: balance corruption under concurrent writes, duplicate charges on network retries, and fraud checks that block the payment path.",
    built:
      "Five Node.js microservices. Balances are computed from an append-only double-entry ledger, never stored, and immutability is enforced by a Postgres RULE, so even a manual DELETE over psql is a no-op. Transfers take a Redis lock plus SELECT FOR UPDATE, and client idempotency keys are backed by a database unique constraint. Kafka carries transaction events to a fraud engine and to webhook delivery with HMAC signatures and exponential backoff, all off the payment path, so the HTTP response never waits on a fraud check.",
    numbers: [
      "5 microservices",
      "4 fraud rules, none in the payment path",
      "The entire ledger sums to zero",
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "React"],
    links: [
      {
        label: "Live demo",
        href: "https://frontend-tau-dusky-91.vercel.app",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/nihal-25/FinFlow" },
    ],
  },
  {
    name: "FlowDesk",
    tagline:
      "Multi-tenant support platform with real-time chat across six services",
    problem:
      "Multi-tenant SaaS lives or dies on isolation: one tenant's data must never leak to another, and the dashboard has to feel live without refreshes.",
    built:
      "Six services behind an API gateway. Tenant isolation is row-level with explicit SQL, no ORM, so the tenant filter is visible in every query. Chat runs on Socket.IO with Redis pub/sub underneath so it works across multiple instances, presence lives in Redis sorted sets, and a Kafka pipeline feeds notifications and analytics independently of the request path. Refresh tokens rotate on every use with theft detection that revokes the whole token family, and the analytics cache invalidates from the write side so dashboards never sit on stale numbers.",
    numbers: [
      "6 services behind one gateway",
      "8 Kafka topics",
      "Signed webhooks with automatic retry",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Socket.IO",
      "React",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://flowdesk-orpin.vercel.app",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/nihal-25/flowdesk" },
    ],
  },
];

export const tier2: Project[] = [
  {
    name: "BMS Canteen App",
    tagline: "Food ordering app for the BMS college canteen, live on the Play Store",
    built:
      "Cross-platform ordering built with React Native (Expo) on Firebase. Menu categories, availability, and prices sync in real time from Firestore, cart quantities stay live across the app, and orders are tracked from received to ready for pickup. Firebase Auth handles accounts. Used by 1,000+ students.",
    stack: ["React Native", "Expo", "Firebase Firestore", "Firebase Auth"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.bms.vk&hl=en_US",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/nihal-25/BMS-VK-Canteen" },
    ],
  },
  {
    name: "WorkSpark",
    tagline: "Tinder-style job matching platform, full MERN stack",
    built:
      "Job seekers swipe through job cards to apply and recruiters swipe through applicants to shortlist. Two role-specific dashboards, JWT sessions with protected routes on both the client and the API, PDF resume uploads, saved jobs, interview scheduling, and a password reset flow over Resend.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    links: [
      {
        label: "Live app",
        href: "https://workspark.vercel.app/home",
        primary: true,
      },
      { label: "GitHub", href: "https://github.com/nihal-25/WorkSpark" },
    ],
  },
];

export const tier3: Project[] = [
  {
    name: "Restaurant Voice Agent",
    tagline:
      "A LiveKit Agents voice bot that answers inbound calls as a restaurant host and makes outbound reservation calls, picking its persona from the call direction. A small single-service build.",
    stack: ["Python", "LiveKit", "OpenAI"],
    links: [
      { label: "GitHub", href: "https://github.com/nihal-25/restaurant-agent" },
    ],
  },
  {
    name: "Voice AI Pipeline",
    tagline:
      "An end-to-end voice loop in one script: record, transcribe with Deepgram, respond with an LLM, speak with OpenAI TTS, and print a per-stage latency breakdown. A focused latency experiment.",
    stack: ["Python", "Deepgram", "OpenAI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nihal-25/full-voiceai-pipeline",
      },
    ],
  },
  {
    name: "WhatsApp Calling Server",
    tagline:
      "An Express server that answers and places WhatsApp voice calls through the Plivo Calling API, with call-status webhook logging. A small build.",
    stack: ["Node.js", "Express", "Plivo"],
    links: [
      { label: "GitHub", href: "https://github.com/nihal-25/whatsapp-plivo" },
    ],
  },
  {
    name: "Smart Grid RL",
    tagline:
      "A PPO agent that dispatches a battery on a simulated grid built from real German OPSD data, cutting simulated energy losses by about 22 percent against an uncontrolled baseline.",
    stack: ["Python", "Gymnasium", "Stable Baselines3"],
    links: [
      { label: "GitHub", href: "https://github.com/nihal-25/rl-Energy-grid" },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["C++", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: "Backend & Infra",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
    ],
  },
  {
    group: "AI & Voice",
    items: [
      "LLM agents",
      "RAG",
      "pgvector",
      "LiveKit",
      "ElevenLabs",
      "Deepgram",
      "Plivo Voice APIs",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "React Native"],
  },
];

export const contact = {
  heading: "Get in touch",
  line: "I'm open to remote backend, full-stack, and AI engineering roles. The fastest way to reach me is email.",
};
