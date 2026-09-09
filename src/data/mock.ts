export const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
export const avatar = (n: number, s = 160) =>
  `https://i.pravatar.cc/${s}?img=${n}`;

export type Student = {
  id: string;
  name: string;
  firstName: string;
  avatar: string;
  role: string;
  location: string;
  skills: string[];
  bio: string;
  projects: string[];
  collabs: string[];
  research: string[];
  stats: { projects: number; collaborations: number; researchTeams: number };
  online?: boolean;
};

export type Company = {
  id: string;
  slug: string;
  name: string;
  initials: string;
  tone: string;
  industry: string;
  location: string;
  description: string;
  activeProjects: number;
  collaborations: number;
  projects: string[];
  research: string[];
  interests: string[];
  accent: string;
};

export type Project = {
  id: string;
  companyId: string;
  company: string;
  title: string;
  tagline: string;
  about: string;
  image: string;
  tone: "image" | "typo";
  skills: string[];
  category: string;
  amount: string;
  pay: number;
  duration: string;
  location: string;
  remote: boolean;
  peopleNeeded: number;
  applicants: number;
  sortDate: number;
  status: "Open" | "Closing soon" | "New";
  workOn: string[];
  lookingFor: string[];
  timeline: string[];
  requirements: string[];
  applicationInfo: string;
};

export type Research = {
  id: string;
  creatorId: string;
  creator: string;
  title: string;
  question: string;
  category: string;
  image: string;
  tone: string;
  about: string;
  background: string;
  whyMatters: string;
  objectives: string[];
  methodology: string;
  outcome: string;
  timeline: string[];
  collaboratorJobs: string[];
  categorySkills: string[];
  collaborators: number;
  maxTeam: number;
  spotsOpen: number;
  open: boolean;
  sortDate: number;
  activity: number;
  team: { id: string; role: string; status: string; student?: Student }[];
  messages: { id: number; name: string; role: string; text: string; time: string; mine: boolean }[];
  files: { id: string; name: string; type: string }[];
  notes: { id: string; name: string; type: string }[];
};

export type FeedPost = {
  id: string;
  kind: "project" | "research" | "student" | "company" | "event" | "post";
  authorId?: string;
  companyId?: string;
  projectId?: string;
  researchId?: string;
  eventId?: string;
  href?: string;
  time: string;
  kicker: string;
  title: string;
  body: string;
  image?: string;
  size: "tall" | "wide" | "square";
  accent?: boolean;
  meta?: string;
};

export type CollEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  kicker: string;
  description: string;
  capacity: string;
  rsvps: number;
};

const CAT = ["Design", "Development", "Research", "Marketing", "Writing", "Photography", "AI", "Business", "Product"] as const;

export const categories = CAT;

export const skillGroups = {
  Design: ["Branding", "UI/UX", "Motion", "Graphic"],
  Development: ["Web", "App", "Backend", "Data"],
  Research: ["Interviews", "Surveys", "Data Analysis"],
  Marketing: ["Content", "Social", "Strategy"],
  Writing: ["Editorial", "Copy", "Research Writing"],
  AI: ["LLM", "Prompting", "ML"],
};

export const students: Student[] = [
  {
    id: "mira-shah",
    firstName: "Mira",
    name: "MIRA SHAH",
    avatar: avatar(47),
    role: "Student Designer & Researcher",
    location: "Bangalore",
    skills: ["Visual Design", "Research", "Branding", "Figma", "Brand Strategy", "Writing"],
    bio: "I like turning complicated ideas into things people can actually understand.",
    projects: ["northstar-brand", "koi-campaign", "signal-ai"],
    collabs: ["aanya-iyer", "rhea-menon", "zoya-khan"],
    research: ["open-cities", "attention-spans"],
    stats: { projects: 12, collaborations: 4, researchTeams: 2 },
    online: true,
  },
  {
    id: "aanya-iyer",
    firstName: "Aanya",
    name: "AANYA IYER",
    avatar: avatar(32),
    role: "Data & Research Student",
    location: "Delhi",
    skills: ["Data Analysis", "Surveys", "SQL", "Research", "Python"],
    bio: "I turn messy datasets into stories worth sharing.",
    projects: ["orbit-climate", "green-room"],
    collabs: ["mira-shah", "rhea-menon"],
    research: ["open-cities", "future-food", "mental-health-apps"],
    stats: { projects: 8, collaborations: 6, researchTeams: 3 },
    online: true,
  },
  {
    id: "rhea-menon",
    firstName: "Rhea",
    name: "RHEA MENON",
    avatar: avatar(45),
    role: "Product & UX Student",
    location: "Mumbai",
    skills: ["UX", "Product", "Prototyping", "Figma", "Design Systems"],
    bio: "Curious about how people actually use the things we design.",
    projects: ["lumen-social", "mosaic-youth", "aster-product"],
    collabs: ["mira-shah", "aarav-gupta"],
    research: ["attention-spans", "civic-participation"],
    stats: { projects: 9, collaborations: 5, researchTeams: 2 },
  },
  {
    id: "zoya-khan",
    firstName: "Zoya",
    name: "ZOYA KHAN",
    avatar: avatar(68),
    role: "Writer & Editorial Student",
    location: "Pune",
    skills: ["Editorial", "Copy", "Content", "Research Writing", "Interviewing"],
    bio: "I write about youth culture, cities and the things nobody explains well.",
    projects: ["mosaic-youth", "timeline-writing"],
    collabs: ["mira-shah", "sanya-roy"],
    research: ["open-cities", "youth-media", "circular-fashion"],
    stats: { projects: 6, collaborations: 7, researchTeams: 3 },
    online: true,
  },
  {
    id: "aarav-gupta",
    firstName: "Aarav",
    name: "AARAV GUPTA",
    avatar: avatar(12),
    role: "Developer & AI Student",
    location: "Hyderabad",
    skills: ["Web Dev", "AI", "Prompting", "TypeScript", "Node"],
    bio: "Building tools that make hard things feel simple.",
    projects: ["signal-ai", "orbit-climate", "foundry-packaging"],
    collabs: ["rhea-menon", "sanya-roy"],
    research: ["public-ai", "attention-spans"],
    stats: { projects: 10, collaborations: 3, researchTeams: 2 },
    online: true,
  },
  {
    id: "sanya-roy",
    firstName: "Sanya",
    name: "SANYA ROY",
    avatar: avatar(5),
    role: "Planner & Community Student",
    location: "Chennai",
    skills: ["Strategy", "Events", "Community", "Project Planning"],
    bio: "I make people show up — to rooms, to projects, to ideas.",
    projects: ["green-room", "halftime-sports"],
    collabs: ["zoya-khan", "aarav-gupta"],
    research: ["civic-participation", "future-food"],
    stats: { projects: 5, collaborations: 8, researchTeams: 2 },
  },
];

export const companies: Company[] = [
  {
    id: "northstar", slug: "northstar", name: "NORTHSTAR STUDIO", initials: "NS", tone: "#7C2D3B",
    industry: "Creative Technology", location: "Bangalore",
    description: "Creative technology studio building identity systems for emerging youth culture brands.",
    activeProjects: 3, collaborations: 18,
    projects: ["northstar-brand", "koi-campaign"], research: [],
    interests: ["Brand Design", "Youth Culture", "Campaigns", "Identity"],
    accent: "#F3E3DD",
  },
  {
    id: "orbit", slug: "orbit", name: "ORBIT LABS", initials: "OL", tone: "#2C3E50",
    industry: "Climate Data", location: "Remote",
    description: "We make climate data useful, understandable and a little bit beautiful.",
    activeProjects: 2, collaborations: 12,
    projects: ["orbit-climate"], research: ["future-food"],
    interests: ["Climate", "Data", "Dashboards", "Open Source"],
    accent: "#E0E7EA",
  },
  {
    id: "mosaic", slug: "mosaic", name: "MOSAIC MAGAZINE", initials: "MM", tone: "#A96A2F",
    industry: "Publishing", location: "Mumbai",
    description: "A youth culture magazine documenting how young India actually lives.",
    activeProjects: 4, collaborations: 31,
    projects: ["mosaic-youth", "timeline-writing"], research: ["youth-media"],
    interests: ["Editorial", "Youth Culture", "Documentary", "Photography"],
    accent: "#F0E2CF",
  },
  {
    id: "lumen", slug: "lumen", name: "LUMEN", initials: "LU", tone: "#3E7CB1",
    industry: "Social Strategy", location: "Hyderabad",
    description: "Social campaigns for education nonprofits that feel like content, not ads.",
    activeProjects: 2, collaborations: 9,
    projects: ["lumen-social"], research: ["mental-health-apps"],
    interests: ["Social Impact", "Content", "Education"],
    accent: "#E2EAF2",
  },
  {
    id: "aster", slug: "aster", name: "ASTER ROBOTICS", initials: "AR", tone: "#4B5563",
    industry: "Consumer Robotics", location: "Bangalore",
    description: "We design household robots that people actually want to talk to.",
    activeProjects: 3, collaborations: 14,
    projects: ["aster-product"], research: [],
    interests: ["Robotics", "Product Design", "UX Research"],
    accent: "#E9E7E2",
  },
  {
    id: "koi", slug: "koi", name: "STUDIO KOI", initials: "SK", tone: "#B23A48",
    industry: "Creative Studio", location: "Delhi",
    description: "A small studio making big visual worlds for music and fashion.",
    activeProjects: 4, collaborations: 22,
    projects: ["koi-campaign"], research: [],
    interests: ["Motion", "Fashion", "Music", "Campaigns"],
    accent: "#F5E0E3",
  },
  {
    id: "signal", slug: "signal", name: "SIGNAL", initials: "SG", tone: "#1E3A5F",
    industry: "EdTech AI", location: "Remote",
    description: "An AI study tool designed to understand students, not replace them.",
    activeProjects: 2, collaborations: 11,
    projects: ["signal-ai"], research: ["public-ai", "attention-spans"],
    interests: ["AI", "Education", "Product", "Research"],
    accent: "#E1E7EF",
  },
  {
    id: "greenroom", slug: "greenroom", name: "THE GREEN ROOM", initials: "GR", tone: "#3D6B4F",
    industry: "Market Research", location: "Mumbai",
    description: "We run fresh market and culture research for brands who want to know youth.",
    activeProjects: 5, collaborations: 27,
    projects: ["green-room"], research: ["circular-fashion"],
    interests: ["Research", "Culture", "Youth", "Sustainability"],
    accent: "#E4ECE4",
  },
  {
    id: "foundry", slug: "foundry", name: "FOUNDRY", initials: "FD", tone: "#6B4E3D",
    industry: "Packaging & D2C", location: "Pune",
    description: "D2C brands built with packaging that does the talking.",
    activeProjects: 3, collaborations: 10,
    projects: ["foundry-packaging"], research: [],
    interests: ["Packaging", "D2C", "Brand", "Sustainability"],
    accent: "#F0E7DC",
  },
  {
    id: "halftime", slug: "halftime", name: "HALFTIME SPORTS", initials: "HT", tone: "#37423D",
    industry: "Sports Media", location: "Gurugram",
    description: "Sports storytelling for the generation that watches replays not matches.",
    activeProjects: 3, collaborations: 16,
    projects: ["halftime-sports"], research: [],
    interests: ["Sports", "Media", "Social", "Documentary"],
    accent: "#E4E9E4",
  },
  {
    id: "atlas", slug: "atlas", name: "ATLAS", initials: "AT", tone: "#46535B",
    industry: "Cartography", location: "Remote",
    description: "Open-source tools that map public space and community life.",
    activeProjects: 2, collaborations: 13,
    projects: ["atlas-map"], research: ["civic-participation", "open-cities"],
    interests: ["Maps", "Open Data", "Cities", "Community"],
    accent: "#E7EAEB",
  },
  {
    id: "ember", slug: "ember", name: "EMBER", initials: "EB", tone: "#8C3B2E",
    industry: "Editorial", location: "Remote",
    description: "An independent editorial house commissioning long-form writing from young voices.",
    activeProjects: 2, collaborations: 19,
    projects: ["ember-writing"], research: ["youth-media"],
    interests: ["Writing", "Long-form", "Documentary", "Fiction"],
    accent: "#F3E2DE",
  },
];

const P = (
  id: string,
  companyId: string,
  title: string,
  tagline: string,
  skills: string[],
  category: string,
  amount: string,
  pay: number,
  duration: string,
  location: string,
  remote: boolean,
  peopleNeeded: number,
  image: string,
  opts: Partial<Project> = {},
): Project => ({
  id,
  companyId,
  company: id.startsWith("northstar") || id.startsWith("koi") ? companies.find((c) => c.id === companyId)!.name : companies.find((c) => c.id === companyId)!.name,
  title,
  tagline,
  about: tagline,
  image,
  tone: "image",
  skills,
  category,
  amount,
  pay,
  duration,
  location,
  remote,
  peopleNeeded,
  applicants: Math.round(pay / 700),
  sortDate: Date.now() - pay,
  status: "Open",
  workOn: [
    "Shape the creative direction alongside our in-house team.",
    "Produce a clear first draft within the first week.",
    "Iterate with structured feedback rounds.",
    "Deliver final, organised files with a handover note.",
  ],
  lookingFor: [
    "Someone with a sharp eye and strong taste.",
    "Self-directed, async-friendly working style.",
    "Portfolio that shows process, not just polish.",
  ],
  timeline: ["Week 1 — Kickoff & discovery", "Week 2 — First pass", "Week 3 — Rounds & refine", "Week 4 — Delivery"],
  requirements: ["Strong portfolio", "Written English", "Relevant tools", "Consistent availability"],
  applicationInfo: "Your COLLIVIO profile is your application. No cover letters, no forms.",
  ...opts,
});

export const projects: Project[] = [
  P("northstar-brand", "northstar", "BRAND IDENTITY REFRESH",
    "Build a new identity for an emerging youth culture brand.",
    ["Branding", "Design", "Strategy"], "Design",
    "₹12,000", 12000, "3 WEEKS", "Remote", true, 2,
    img("northstar", 1400, 900),
    { status: "Open", applicants: 54, sortDate: Date.now() - 1000, tone: "image",
      about: "We help emerging youth brands sound and look like themselves. This project is a full identity refresh: name system, visual language, and a launch kit for a new streetwear-fashion label entering the market." }),

  P("orbit-climate", "orbit", "CLIMATE DATA DASHBOARD",
    "Design a public dashboard for Indian air-quality data.",
    ["Data", "Design", "Development"], "Development",
    "₹18,000", 18000, "6 WEEKS", "Remote", true, 3,
    img("orbit", 1200, 800),
    { status: "Open", applicants: 38, sortDate: Date.now() - 2000, tone: "image",
      about: "Air-quality numbers mean nothing if nobody understands them. We want a dashboard that turns raw sensor data into decisions people can actually make." }),

  P("mosaic-youth", "mosaic", "YOUTH CULTURE RESEARCH",
    "Field research on how young India builds identity online.",
    ["Research", "Writing", "Photography"], "Research",
    "₹7,500", 7500, "4 WEEKS", "Mumbai", false, 2,
    img("mosaic", 1000, 1200),
    { status: "New", applicants: 12, sortDate: Date.now() - 500, tone: "image",
      about: "We're documenting how 16–24 year olds construct identity across social platforms. We need curious researchers who can interview, observe and write well." }),

  P("lumen-social", "lumen", "SOCIAL CAMPAIGN",
    "A campaign that makes education funding feel human.",
    ["Marketing", "Content", "Strategy"], "Marketing",
    "₹10,000", 10000, "5 WEEKS", "Hyderabad", true, 1,
    img("lumen", 1200, 800),
    { status: "Closing soon", applicants: 61, sortDate: Date.now() - 4000, tone: "image",
      about: "Education nonprofits run on trust. Help us design a campaign narrative that gets young donors to care — and to actually give." }),

  P("aster-product", "aster", "PRODUCT UX RESEARCH",
    "Why do people talk to household robots?",
    ["Research", "Product", "UX"], "Research",
    "₹15,000", 15000, "5 WEEKS", "Bangalore", false, 2,
    img("aster", 1100, 800),
    { status: "Open", applicants: 29, sortDate: Date.now() - 3000, tone: "image",
      about: "We build companion robots. Before we ship the next version we need to understand the emotional side of the interaction — how, when and why people talk to machines." }),

  P("koi-campaign", "koi", "CAMPAIGN DESIGN",
    "Visual world for a music release campaign.",
    ["Design", "Motion", "Branding"], "Design",
    "₹8,000", 8000, "3 WEEKS", "Delhi", true, 1,
    img("koi", 900, 1100),
    { status: "New", applicants: 18, sortDate: Date.now() - 300, tone: "image",
      about: "A musician is releasing an EP. We design the visual identity, the cover art and the motion teasers — the whole visual world around the release." }),

  P("signal-ai", "signal", "AI STUDY TOOL",
    "Design and prototype an AI study companion.",
    ["AI", "Design", "Development"], "AI",
    "₹20,000", 20000, "8 WEEKS", "Remote", true, 3,
    img("signal", 1400, 850),
    { status: "Open", applicants: 47, sortDate: Date.now() - 6000, tone: "image",
      about: "An AI tool that understands how students learn — their gaps, their pace, their procrastination. We need designers and engineers to prototype the core study loop." }),

  P("green-room", "greenroom", "CULTURE RESEARCH SPRINT",
    "Fresh insight on youth spending, two weeks, one report.",
    ["Research", "Data Analysis", "Writing"], "Research",
    "₹9,000", 9000, "2 WEEKS", "Mumbai", true, 2,
    img("greenroom", 1200, 800),
    { status: "Closing soon", applicants: 34, sortDate: Date.now() - 5000, tone: "image",
      about: "Brands keep guessing what young people want. We run evidence-based culture sprints that replace guessing with research — and we need sharp research hands." }),

  P("foundry-packaging", "foundry", "PACKAGING & BRAND KIT",
    "Unboxing that sells the product twice.",
    ["Design", "Branding", "Business"], "Design",
    "₹13,000", 13000, "4 WEEKS", "Pune", true, 2,
    img("foundry", 1100, 900),
    { status: "Open", applicants: 22, sortDate: Date.now() - 2500, tone: "image",
      about: "D2C brands win on the shelf and in the delivery box. Design an unboxing experience and brand kit for a new homeware line that ships nationwide." }),

  P("halftime-sports", "halftime", "SPORTS STORYTELLING",
    "Short-form video series for a sports media brand.",
    ["Photography", "Writing", "Marketing"], "Photography",
    "₹11,000", 11000, "4 WEEKS", "Gurugram", true, 1,
    img("halftime", 1200, 900),
    { status: "Open", applicants: 26, sortDate: Date.now() - 3500, tone: "image",
      about: "We tell the stories behind the scores. A limited video and photo series about young athletes nobody is watching yet." }),

  P("atlas-map", "atlas", "WALKABILITY MAP",
    "Map the places worth walking — and the ones that aren't.",
    ["Research", "Development", "Data"], "Development",
    "₹0", 0, "8 WEEKS", "Remote", true, 4,
    img("atlas", 1200, 900),
    { status: "Open", applicants: 41, sortDate: Date.now() - 7000, tone: "typo",
      about: "Open-source project mapping pedestrian life in Indian cities. Not paid — but it ships to real city leads and community groups." }),

  P("ember-writing", "ember", "LONG-FORM FEATURE",
    "Commissioned essay on the future of the university.",
    ["Writing", "Research"], "Writing",
    "₹14,000", 14000, "6 WEEKS", "Remote", true, 1,
    img("ember", 1000, 1100),
    { status: "Open", applicants: 15, sortDate: Date.now() - 4500, tone: "typo",
      about: "We commission long-form journalism and essays from young voices. Write the story that the education debate keeps skipping." }),

  P("timeline-writing", "mosaic", "ONLINE CULTURE TIMELINE",
    "Research how a viral moment changes a community.",
    ["Writing", "Research"], "Writing",
    "₹6,000", 6000, "3 WEEKS", "Remote", true, 1,
    img("mosaic-2", 900, 1100),
    { status: "New", applicants: 9, sortDate: Date.now() - 200, tone: "typo",
      about: "Pick a recent viral moment and document, interview by interview, how it reshaped a small online community. Then publish it in Mosaic." }),
];

export const byCompany = (id: string): Project[] =>
  projects.filter((p) => p.companyId === id);
export const companyOf = (id: string): Company =>
  companies.find((c) => c.id === id) ?? companies[0];
export const projectOf = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
export const similarProjects = (p: Project): Project[] => {
  const sameCat = projects.filter((x) => x.id !== p.id && x.category === p.category);
  const rest = projects.filter((x) => x.id !== p.id && x.category !== p.category);
  return [...sameCat, ...rest].slice(0, 4);
};

export const research: Research[] = [
  {
    id: "open-cities", creatorId: "mira-shah", creator: "Mira Shah",
    title: "OPEN CITIES",
    question: "Can cities become more walkable?",
    category: "Design",
    image: img("opencities", 1400, 900),
    tone: "#7C2D3B",
    about: "A student-led research project exploring how urban design changes the way young people move through cities.",
    background: "Every city we've lived in claims to want more walking, yet footpaths keep losing. We're studying three neighbourhoods to find where walking actually breaks.",
    whyMatters: "Walkable cities are better for climate, health and loneliness. But the data barely includes young pedestrian experience.",
    objectives: ["Map three neighbourhoods by foot", "Interview 40 young pedestrians", "Publish an evidence deck for civic groups"],
    methodology: "Go-along interviews, GPS-tracked walks and spatial mapping of obstacles, shade and access.",
    outcome: "A public walkability report plus an interactive map of what to fix first.",
    timeline: ["Week 1–2 — Neighbourhood scoping", "Week 3–6 — Go-along interviews", "Week 7–8 — Analysis & visualisation", "Week 9 — Public report"],
    collaboratorJobs: ["Fieldwork", "Data cleaning", "Mapping", "Storytelling"],
    categorySkills: ["Urbanism", "Research", "Data"],
    collaborators: 12, maxTeam: 16, spotsOpen: 4, open: true,
    sortDate: Date.now() - 1000, activity: 88,
    team: [
      { id: "mira-shah", role: "Research Lead", status: "online" },
      { id: "aanya-iyer", role: "Data", status: "online" },
      { id: "rhea-menon", role: "Design", status: "away" },
      { id: "zoya-khan", role: "Writing", status: "online" },
    ],
    messages: [
      { id: 1, name: "Mira", role: "Research Lead", text: "I've finished the first round of interviews.", time: "9:40 AM", mine: false },
      { id: 2, name: "Aanya", role: "Data", text: "I'll add the survey results tonight.", time: "10:02 AM", mine: false },
      { id: 3, name: "Rhea", role: "Design", text: "Should we change the methodology section?", time: "10:15 AM", mine: false },
    ],
    files: [
      { id: "f1", name: "Research Outline.pdf", type: "pdf" },
      { id: "f2", name: "Survey Results.csv", type: "csv" },
      { id: "f3", name: "Interview Notes", type: "folder" },
    ],
    notes: [
      { id: "n1", name: "Neighbourhood one — observations", type: "note" },
      { id: "n2", name: "Open questions", type: "note" },
    ],
  },
  {
    id: "future-food", creatorId: "sanya-roy", creator: "Sanya Roy",
    title: "FUTURE FOOD LAB",
    question: "How can cities feed themselves?",
    category: "Environment",
    image: img("foodlab", 1200, 800),
    tone: "#3D6B4F",
    about: "A community lab testing how cities can grow, distribute and waste less food.",
    background: "City food systems are fragile — everything travels too far from too few farms. We're testing small, replicable urban food experiments.",
    whyMatters: "Urban farming can't replace agriculture, but it can shorten supply chains and cut waste where it matters most.",
    objectives: ["Run three urban growing experiments", "Map city food waste points", "Publish a replicable playbook"],
    methodology: "Grow-testing, waste audits and interviews with street vendors and kitchens.",
    outcome: "A city playbook: what grows, what's wasted, what scales.",
    timeline: ["Month 1 — Audits & sites", "Month 2–3 — Experiments", "Month 4 — Playbook"],
    collaboratorJobs: ["Growing", "Waste audits", "Documentation"],
    categorySkills: ["Food Systems", "Sustainability", "Biology"],
    collaborators: 8, maxTeam: 12, spotsOpen: 4, open: true,
    sortDate: Date.now() - 2000, activity: 54,
    team: [
      { id: "sanya-roy", role: "Lead", status: "online" },
      { id: "aanya-iyer", role: "Data", status: "offline" },
    ],
    messages: [{ id: 1, name: "Sanya", role: "Lead", text: "Greenhouse trial one is in.", time: "8:20 AM", mine: false }],
    files: [{ id: "f1", name: "Waste Audit Map", type: "map" }],
    notes: [{ id: "n1", name: "What vendors throw away", type: "note" }],
  },
  {
    id: "attention-spans", creatorId: "rhea-menon", creator: "Rhea Menon",
    title: "ATTENTION, RE-EXAMINED",
    question: "Is the attention span actually shrinking?",
    category: "AI",
    image: img("attention", 900, 1100),
    tone: "#3E7CB1",
    about: "Testing the claim that scroll-driven students can't focus anymore.",
    background: "Everyone says attention is dead. Almost nobody has measured it on the apps students actually use.",
    whyMatters: "Designing for shorter attention than exists means softer products, weaker learning and easier manipulation.",
    objectives: ["Replicate the classic attention study", "Measure real app behaviour", "Write an evidence-first explainer"],
    methodology: "Controlled focus tasks plus 30-day logged device behaviour in a consenting cohort.",
    outcome: "A public dataset plus a myth-busting explainer.",
    timeline: ["Week 1–3 — Build the test", "Week 4–8 — Measure", "Week 9 — Publish"],
    collaboratorJobs: ["Study design", "Psychometrics", "Data analysis"],
    categorySkills: ["Psychology", "Data", "Research"],
    collaborators: 6, maxTeam: 8, spotsOpen: 2, open: true,
    sortDate: Date.now() - 3000, activity: 71,
    team: [{ id: "rhea-menon", role: "Lead", status: "away" }],
    messages: [],
    files: [{ id: "f1", name: "Study Protocol", type: "pdf" }],
    notes: [{ id: "n1", name: "Recruitment log", type: "note" }],
  },
  {
    id: "youth-media", creatorId: "zoya-khan", creator: "Zoya Khan",
    title: "YOUTH & THE FEED",
    question: "What are young people actually watching — and why?",
    category: "Culture",
    image: img("youthfeed", 1100, 800),
    tone: "#A96A2F",
    about: "A media diary study mapping how 16–24s consume video across platforms.",
    background: "Media analyses keep using category labels young people don't recognise. We ask them what they call it instead.",
    whyMatters: "Creators and brands keep missing the actual shapes of youth media culture.",
    objectives: ["Run 30 media diaries", "Map the cross-platform journey", "Publish a plain-language report"],
    methodology: "Weekly media diaries and follow-up interviews over six weeks.",
    outcome: "A shared vocabulary for youth media — and the data behind it.",
    timeline: ["Week 1–6 — Diaries", "Week 7–8 — Synthesis"],
    collaboratorJobs: ["Diary recruitment", "Interviewing", "Editing"],
    categorySkills: ["Media", "Culture", "Research"],
    collaborators: 7, maxTeam: 9, spotsOpen: 2, open: true,
    sortDate: Date.now() - 4000, activity: 43,
    team: [{ id: "zoya-khan", role: "Lead", status: "online" }],
    messages: [],
    files: [{ id: "f1", name: "Diary template", type: "folder" }],
    notes: [{ id: "n1", name: "Emerging themes", type: "note" }],
  },
  {
    id: "mental-health-apps", creatorId: "aanya-iyer", creator: "Aanya Iyer",
    title: "MENTAL-HEALTH APPS",
    question: "Do mental-health apps actually help?",
    category: "Medicine",
    image: img("mhapps", 1200, 900),
    tone: "#46535B",
    about: "A systematic review of what wellness apps promise vs. what evidence shows.",
    background: "Hundreds of apps sell relief with almost no peer-reviewed backing. We're grading them against the available evidence.",
    whyMatters: "Students are being marketed to at their most vulnerable moment.",
    objectives: ["Grade the top 25 apps", "Compare claims to evidence", "Publish a plain-language guide"],
    methodology: "Systematic literature review plus a structured grading rubric.",
    outcome: "A student-written guide to what works and what's marketing.",
    timeline: ["Month 1 — Rubric & review", "Month 2 — Grading", "Month 3 — Guide"],
    collaboratorJobs: ["Literatur review", "Grading", "Fact-checking"],
    categorySkills: ["Medicine", "Research", "Data Analysis"],
    collaborators: 5, maxTeam: 10, spotsOpen: 5, open: true,
    sortDate: Date.now() - 5000, activity: 32,
    team: [{ id: "aanya-iyer", role: "Lead", status: "online" }],
    messages: [],
    files: [{ id: "f1", name: "Rubric v1", type: "sheet" }],
    notes: [{ id: "n1", name: "App shortlist", type: "note" }],
  },
  {
    id: "public-ai", creatorId: "aarav-gupta", creator: "Aarav Gupta",
    title: "PUBLIC AI",
    question: "Who should decide how AI behaves in public life?",
    category: "AI",
    image: img("publicai", 1100, 900),
    tone: "#1E3A5F",
    about: "A wiki and forum collecting student views on AI governance in public life.",
    background: "AI policy is written far from the classrooms where it's taught. We want to collect and codify student opinion.",
    whyMatters: "Students are the heaviest everyday AI users — and silent in governance.",
    objectives: ["Run public deliberative sessions", "Draft a student AI charter", "Publish and deliver it to policymakers"],
    methodology: "Deliberative sessions at campus chapters, synthesised into a living wiki.",
    outcome: "A student-authored AI charter taken to real civic bodies.",
    timeline: ["Month 1–2 — Sessions", "Month 3 — Charter draft", "Month 4 — Delivery"],
    collaboratorJobs: ["Session design", "Synthesis", "Policy writing"],
    categorySkills: ["AI", "Policy", "Research"],
    collaborators: 10, maxTeam: 20, spotsOpen: 10, open: true,
    sortDate: Date.now() - 6000, activity: 95,
    team: [{ id: "aarav-gupta", role: "Lead", status: "online" }],
    messages: [],
    files: [{ id: "f1", name: "Session playbook", type: "pdf" }],
    notes: [{ id: "n1", name: "Charter outline", type: "note" }],
  },
  {
    id: "circular-fashion", creatorId: "zoya-khan", creator: "Zoya Khan",
    title: "CIRCULAR FASHION",
    question: "Can young India wear circular fashion — and want to?",
    category: "Environment",
    image: img("circular", 1000, 1250),
    tone: "#3D6B4F",
    about: "Researching the gap between what clothing brands recycle and what young wearers actually do.",
    background: "Brands keep launching 'circular' lines while real behaviour stays linear. We're studying the gap.",
    whyMatters: "The circular economy wins or loses inside the wardrobe decisions of young buyers.",
    objectives: ["Study reuse and repair behaviour", "Test circular messaging", "Publish a behaviour-first report"],
    methodology: "Behavioural surveys, repair-journal diary method and interviewing second-hand sellers.",
    outcome: "Insight that makes circular fashion actually circular.",
    timeline: ["Month 1–2 — Behaviour study", "Month 3 — Messaging tests", "Month 4 — Report"],
    collaboratorJobs: ["Survey design", "Diary analysis", "Report design"],
    categorySkills: ["Fashion", "Sustainability", "Research"],
    collaborators: 4, maxTeam: 10, spotsOpen: 6, open: true,
    sortDate: Date.now() - 7000, activity: 21,
    team: [{ id: "zoya-khan", role: "Lead", status: "offline" }],
    messages: [],
    files: [{ id: "f1", name: "Survey draft", type: "sheet" }],
    notes: [{ id: "n1", name: "Interview guide", type: "note" }],
  },
  {
    id: "civic-participation", creatorId: "sanya-roy", creator: "Sanya Roy",
    title: "CIVIC PARTICIPATION",
    question: "Why don't young people vote in local elections?",
    category: "Social Science",
    image: img("civic", 1200, 900),
    tone: "#37423D",
    about: "A mixed-methods study of youth turnout, trust and information networks in local elections.",
    background: "National elections get studied relentlessly; local ones barely. Yet local decisions shape daily life most.",
    whyMatters: "Youth absence from local politics quietly moves the power to whoever does show up.",
    objectives: ["Survey 500 young voters and non-voters", "Map local information networks", "Design a turnout experiment"],
    methodology: "A representative survey, focus groups, and a WhatsApp-based info experiment.",
    outcome: "Evidence on the levers that move local youth turnout.",
    timeline: ["Month 1 — Survey", "Month 2 — Focus groups", "Month 3 — Experiment", "Month 4 — Final paper"],
    collaboratorJobs: ["Survey ops", "Focus group facilitation", "Analysis"],
    categorySkills: ["Social Science", "Data", "Research"],
    collaborators: 9, maxTeam: 12, spotsOpen: 3, open: false,
    sortDate: Date.now() - 8000, activity: 66,
    team: [{ id: "sanya-roy", role: "Lead", status: "online" }],
    messages: [],
    files: [{ id: "f1", name: "Survey instrument", type: "sheet" }],
    notes: [{ id: "n1", name: "Focus group guide", type: "note" }],
  },
  {
    id: "urban-sound", creatorId: "mira-shah", creator: "Mira Shah",
    title: "URBAN SOUND",
    question: "What does a city's mood sound like?",
    category: "Culture",
    image: img("urbansound", 1100, 1100),
    tone: "#B23A48",
    about: "A sound-mapping project listening to how neighbourhoods change across the day.",
    background: "Sound is the least-studied sense in urban research, and the most present.",
    whyMatters: "Sound tells you who a neighbourhood serves — and who it pushes out.",
    objectives: ["Record 20 sites across the day", "Build a listening map", "Publish city mood routes"],
    methodology: "Binaural field recording, spectrogram analysis and listener panels.",
    outcome: "An interactive sound map plus essays on each neighbourhood.",
    timeline: ["Week 1–4 — Recording", "Week 5–8 — Mapping & essays"],
    collaboratorJobs: ["Recording", "Audio editing", "Writing"],
    categorySkills: ["Sound", "Urbanism", "Culture"],
    collaborators: 6, maxTeam: 8, spotsOpen: 2, open: true,
    sortDate: Date.now() - 1200, activity: 40,
    team: [{ id: "mira-shah", role: "Lead", status: "away" }],
    messages: [],
    files: [{ id: "f1", name: "Site list", type: "sheet" }],
    notes: [{ id: "n1", name: "Editing log", type: "note" }],
  },
  {
    id: "sleep-matters", creatorId: "rhea-menon", creator: "Rhea Menon",
    title: "SLEEP MATTERS",
    question: "What actually keeps students awake?",
    category: "Medicine",
    image: img("sleep", 1000, 800),
    tone: "#46535B",
    about: "A diary study separating real sleep blockers from the things we blame instead.",
    background: "Phone time gets the blame, but schedules, light, stress and deadlines compete for the real credit.",
    whyMatters: "The usual advice (put your phone away) protects institutions more than it helps students.",
    objectives: ["Run 60 sleep diaries", "Correlate blockers with sleep", "Publish a realistic sleep guide"],
    methodology: "Two-week sleep diaries with morning/evening check-ins and environmental logging.",
    outcome: "A ranked list of confirmed sleep blockers for students.",
    timeline: ["Week 1–2 — Diaries", "Week 3 — Analysis", "Week 4 — Guide"],
    collaboratorJobs: ["Diary ops", "Analysis", "Design"],
    categorySkills: ["Medicine", "Data", "Research"],
    collaborators: 5, maxTeam: 8, spotsOpen: 3, open: true,
    sortDate: Date.now() - 2500, activity: 58,
    team: [{ id: "rhea-menon", role: "Lead", status: "online" }],
    messages: [],
    files: [{ id: "f1", name: "Diary template", type: "sheet" }],
    notes: [{ id: "n1", name: "Recruitment", type: "note" }],
  },
].map((r) => ({ ...r, team: r.team.map((t) => ({ ...t, student: students.find((s) => s.id === t.id) })) }));

export const researchOf = (id: string): Research | undefined =>
  research.find((r) => r.id === id);
export const similarResearch = (r: Research): Research[] => {
  const same = research.filter((x) => x.id !== r.id && x.category === r.category);
  const rest = research.filter((x) => x.id !== r.id && x.category !== r.category);
  return [...same, ...rest].slice(0, 3);
};

export const events: CollEvent[] = [
  {
    id: "portfolio-workshop",
    title: "DESIGNING YOUR FIRST PORTFOLIO",
    kicker: "COLLIVIO EVENT",
    date: "SATURDAY · NOV 14",
    time: "4:00 PM · ONLINE",
    location: "Google Meet",
    image: img("event-portfolio", 1200, 800),
    description: "Two hours with working designers on how to make a portfolio that gets you hired for real projects — not just liked.",
    capacity: "120 SEATS",
    rsvps: 87,
  },
  {
    id: "demo-day",
    title: "DEMO DAY — SPRING CYCLE",
    kicker: "COLLIVIO EVENT",
    date: "FRIDAY · DEC 4",
    time: "6:00 PM · BANGALORE",
    location: "Koramangala, Bangalore",
    image: img("event-demo", 1200, 900),
    description: "The end-of-cycle showcase where students demo what they built. Companies attend for one reason: to find people.",
    capacity: "200 SEATS",
    rsvps: 143,
  },
  {
    id: "research-sprint",
    title: "RESEARCH SPRINT: CITIES",
    kicker: "COLLIVIO EVENT",
    date: "SUNDAY · NOV 22",
    time: "10:00 AM · ONLINE",
    location: "Online",
    image: img("event-sprint", 1100, 800),
    description: "A 48-hour sprint to reframe one city question and design the study. Teams form here and keep running in the Research Hub.",
    capacity: "60 SEATS",
    rsvps: 52,
  },
  {
    id: "design-critique",
    title: "PUBLIC DESIGN CRITIQUE",
    kicker: "COLLIVIO EVENT",
    date: "TUESDAY · NOV 10",
    time: "7:00 PM · ONLINE",
    location: "Online",
    image: img("event-critique", 1000, 1000),
    description: "Bring any work-in-progress. We critique it honestly, kindly and fast. No presenters, just feedback loops.",
    capacity: "80 SEATS",
    rsvps: 61,
  },
];

export const eventOf = (id: string): CollEvent | undefined =>
  events.find((e) => e.id === id);

export const feed: FeedPost[] = [
  {
    id: "p1", kind: "student", authorId: "mira-shah", href: "/profile/mira-shah",
    time: "2 HOURS AGO", kicker: "MIRA SHAH", title: "Just published",
    body: "Designing for neurodivergent students.",
    image: img("post-neuro", 1000, 1250), size: "tall",
  },
  {
    id: "p2", kind: "project", companyId: "northstar", projectId: "northstar-brand",
    href: "/project/northstar-brand",
    time: "5 HOURS AGO", kicker: "NORTHSTAR STUDIO · NEW PROJECT", title: "Brand Identity Refresh",
    body: "Build a new identity for an emerging youth culture brand.", meta: "₹12,000 · APPLY NOW",
    image: img("northstar", 1200, 800), size: "wide",
  },
  {
    id: "p3", kind: "research", researchId: "open-cities", href: "/research/open-cities",
    time: "8 HOURS AGO", kicker: "OPEN CITIES", title: "10 students joined the team.",
    body: "Open Cities now has 12 collaborators researching walkability.", meta: "4 SPOTS OPEN",
    image: img("opencities", 1100, 800), size: "wide",
  },
  {
    id: "p4", kind: "event", eventId: "portfolio-workshop", href: "/event/portfolio-workshop",
    time: "1 DAY AGO", kicker: "COLLIVIO EVENT", title: "Designing Your First Portfolio",
    body: "Saturday · 4 PM · Online. Seat yourself before the room fills.", meta: "87 / 120 RSVPS",
    image: img("event-portfolio", 1100, 1100), size: "square",
  },
  {
    id: "p5", kind: "project", companyId: "lumen", projectId: "lumen-social", href: "/project/lumen-social",
    time: "1 DAY AGO", kicker: "LUMEN · NEW PROJECT", title: "Social Campaign",
    body: "A campaign that makes education funding feel human.", meta: "₹10,000 · APPLY NOW",
    image: img("lumen", 1200, 800), size: "wide",
  },
  {
    id: "p6", kind: "post", href: "/media/p6", time: "2 DAYS AGO",
    kicker: "COMMUNITY UPDATE", title: "COLLIVIO just crossed 1,000 members",
    body: "A thousand people building visible work. The June cluster starts next Monday.",
    size: "square",
  },
  {
    id: "p7", kind: "student", authorId: "zoya-khan", href: "/profile/zoya-khan",
    time: "2 DAYS AGO", kicker: "ZOYA KHAN", title: "New essay out",
    body: "I wrote about how we talk about cities we've never walked.",
    image: img("post-zoya", 900, 1100), size: "tall",
  },
  {
    id: "p8", kind: "research", researchId: "public-ai", href: "/research/public-ai",
    time: "2 DAYS AGO", kicker: "PUBLIC AI", title: "Charter draft is public",
    body: "The student AI charter outline is open for edits from anyone.",
    image: img("publicai", 1100, 800), size: "wide",
  },
  {
    id: "p9", kind: "company", companyId: "aster", href: "/company/aster",
    time: "3 DAYS AGO", kicker: "ASTER ROBOTICS", title: "We're hiring student researchers",
    body: "Product UX research on companion robots. First pay, then publish.",
    image: img("aster", 1000, 1000), size: "square",
  },
  {
    id: "p10", kind: "project", companyId: "signal", projectId: "signal-ai", href: "/project/signal-ai",
    time: "3 DAYS AGO", kicker: "SIGNAL · NEW PROJECT", title: "AI Study Tool",
    body: "Prototype the core study loop of an AI companion.", meta: "₹20,000 · APPLY NOW",
    image: img("signal", 1200, 900), size: "wide",
  },
  {
    id: "p11", kind: "post", href: "/media/p11", time: "3 DAYS AGO",
    kicker: "FILE OF THE WEEK", title: "COLLIVIO X DESIGN TOOLKIT",
    body: "Free starter kit: brief templates, rate cards and portfolio prompts.",
    size: "square",
  },
  {
    id: "p12", kind: "student", authorId: "aarav-gupta", href: "/profile/aarav-gupta",
    time: "4 DAYS AGO", kicker: "AARAV GUPTA", title: "Shipped",
    body: "A flashcard AI that adapts to how you forget. Try the quiz →",
    image: img("post-aarav", 1200, 800), size: "wide",
  },
  {
    id: "p13", kind: "event", eventId: "demo-day", href: "/event/demo-day",
    time: "4 DAYS AGO", kicker: "COLLIVIO EVENT", title: "Demo Day — Spring Cycle",
    body: "Students demo what they built. Companies are scouting.", meta: "143 / 200 RSVPS",
    image: img("event-demo", 900, 1100), size: "tall",
  },
  {
    id: "p14", kind: "company", companyId: "greenroom", href: "/company/greenroom",
    time: "5 DAYS AGO", kicker: "THE GREEN ROOM", title: "Culture sprint results",
    body: "What 300 young buyers actually do before buying. Report is public.",
    size: "square",
  },
  {
    id: "p15", kind: "research", researchId: "circular-fashion", href: "/research/circular-fashion",
    time: "5 DAYS AGO", kicker: "CIRCULAR FASHION", title: "Wardrobe diaries closing soon",
    body: "Six spots left in the circular fashion diary study.",
    image: img("circular", 1000, 1100), size: "tall",
  },
  {
    id: "p16", kind: "post", href: "/media/p16", time: "6 DAYS AGO",
    kicker: "COLLABORATION", title: "Open Cities x Future Food Lab",
    body: "The two teams are swapping maps and methods this month.",
    size: "square",
  },
];

export const postOf = (id: string): FeedPost | undefined => feed.find((p) => p.id === id);
export const studentOf = (id: string): Student | undefined =>
  students.find((s) => s.id === id);

export type BrandRole = "student" | "company";