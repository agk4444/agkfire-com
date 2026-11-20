export const company = {
  name: "AGK Fire Inc",
  legal: "AGK FIRE INC",
  dba: "AGK Fire Inc dba Social News XYZ",
  tagline: "Ideas built for the digital world.",
  description:
    "AGK Fire Inc is an independent software and media company developing useful products, education technology, and publishing platforms.",
  email: "admin@socialnews.xyz",
  phone: "+13158769548",
  phoneDisplay: "(315) 876-9548",
  founded: 2014,
  registeredIn: "New York",
  address: {
    line1: "2285 Framura Ln",
    city: "Melbourne",
    state: "FL",
    zip: "32940",
    country: "United States",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "3", label: "Core disciplines" },
  { value: "8+", label: "Products & platforms" },
  { value: "2014", label: "Founded in New York" },
  { value: "FL", label: "Based in Florida" },
] as const;

export type Status = "Operating" | "In development" | "Open source" | "Legacy";

export type Venture = {
  id: string;
  name: string;
  kicker: string;
  status: Status;
  featured?: boolean;
  blurb: string;
  chips: string[];
  links: { label: string; href: string }[];
};

export const capabilities = [
  {
    icon: "code",
    title: "Product development",
    body: "Building web, mobile, and AI-assisted software designed around clear user needs — from early product direction through development and launch.",
  },
  {
    icon: "broadcast",
    title: "Digital media",
    body: "Operating publishing platforms for news, entertainment, photography, and video across text, photo, and social distribution.",
  },
  {
    icon: "academic",
    title: "Education technology",
    body: "Developing focused digital tools that support learning, guided explanation, and test preparation.",
  },
] as const;

export const ventures: Venture[] = [
  {
    id: "social-news",
    name: "Social News XYZ™",
    kicker: "Media platform",
    status: "Operating",
    featured: true,
    blurb:
      "An independent digital news and entertainment platform covering Telugu cinema, Indian entertainment, national stories, and international news. Its publishing network combines reporting, photo galleries, video, and social distribution for a global audience.",
    chips: ["News and entertainment", "Photo and video", "Multi-platform publishing"],
    links: [
      { label: "Visit platform", href: "https://www.socialnews.xyz/" },
      { label: "Registered trademark", href: "https://agkfire.com/" },
    ],
  },
  {
    id: "agk-os",
    name: "AGK OS",
    kicker: "Software",
    status: "Operating",
    blurb:
      "A desktop environment that runs in the browser — windowed apps, an AI assistant, files, and tools on your own machine or server.",
    chips: ["Windowed desktop", "AI assistant", "Apps and files"],
    links: [{ label: "agkfireos.com", href: "https://agkfireos.com/" }],
  },
  {
    id: "telugu-ai",
    name: "Telugu AI",
    kicker: "AI apps",
    status: "Operating",
    blurb:
      "Four small Telugu apps on one page: ask the Sanatana Dharma textbook, ask Vemana's 572 poems, and let two 278M models finish a poem or a song from its first line. All running on CPU.",
    chips: ["Sanatana Dharma RAG", "Vemana poems RAG", "Poem model (278M)", "Song model (278M)"],
    links: [
      { label: "telugu.socialnews.xyz", href: "https://telugu.socialnews.xyz" },
      { label: "Sanatana", href: "https://sanatana.socialnews.xyz" },
      { label: "Vemana", href: "https://vemana.socialnews.xyz" },
      { label: "Poems", href: "https://poems.socialnews.xyz" },
      { label: "Songs", href: "https://songs.socialnews.xyz" },
    ],
  },
  {
    id: "hanuman",
    name: "Hanuman",
    kicker: "AI assistant",
    status: "In development",
    blurb:
      "A personal AI assistant for web and mobile, designed to turn conversation into practical help. Hanuman brings everyday questions, connected productivity tools, reminders, and user-controlled context into one focused experience.",
    chips: ["Personal assistance", "Connected tools", "Web and mobile"],
    links: [{ label: "jaihanuman.app", href: "https://jaihanuman.app/" }],
  },
  {
    id: "laya-api",
    name: "Laya API",
    kicker: "AI infrastructure",
    status: "Open source",
    blurb:
      "A FastAPI server for running the Laya decision model over HTTP on CPU. Supports general and batched decisions, a Jev-compatible System One wire format, dedicated triage and moderation routes, and optional bearer-token protection.",
    chips: ["POST /decide", "POST /v1/systemone", "POST /decide/batch"],
    links: [
      { label: "GitHub", href: "https://github.com/agk4444/laya-api" },
      { label: "Model on Hugging Face", href: "https://huggingface.co/convaiinnovations/laya" },
    ],
  },
  {
    id: "sat-tutor",
    name: "SAT Tutor",
    kicker: "Education",
    status: "In development",
    blurb:
      "An AI-assisted study product for SAT Math and Reading and Writing preparation, powered by a QLoRA fine-tune of Qwen/Qwen3-8B — built around clear explanations, targeted practice, and measurable performance.",
    chips: ["Guided explanations", "Focused practice", "Model evaluation"],
    links: [
      { label: "Model on Hugging Face", href: "https://huggingface.co/agk4444/sat-tutor-qwen3-8b" },
    ],
  },
  {
    id: "truthsocial",
    name: "truthsocial.co.in",
    kicker: "Social media",
    status: "Operating",
    blurb:
      "A company-owned Mastodon social platform built on the open ActivityPub network — a decentralized, standards-based place to publish, follow accounts, and participate in conversations across the federated social web.",
    chips: ["Mastodon platform", "ActivityPub network", "Federated publishing"],
    links: [{ label: "Visit platform", href: "https://truthsocial.co.in/" }],
  },
  {
    id: "agk-fire-android",
    name: "AGK Fire",
    kicker: "Legacy mobile app",
    status: "Legacy",
    blurb:
      "An Android utility built to simplify common Fire TV tasks from a mobile device, combining app installation, file transfer, and video casting in one practical companion for Fire TV users.",
    chips: ["App installation", "File transfer", "Video casting"],
    links: [
      { label: "View listing", href: "https://apkpure.com/it/agk-fire-ad-free/com.googletv.sideloader" },
    ],
  },
  {
    id: "agk-launcher",
    name: "AGK Launcher",
    kicker: "Legacy mobile app",
    status: "Legacy",
    blurb:
      "An Android TV launcher created to surface sideloaded applications that may not appear in the standard Google TV interface, giving users a direct, television-friendly way to find and open those apps.",
    chips: ["Sideloaded app access", "TV-first interface", "Google TV utility"],
    links: [
      { label: "View listing", href: "https://apkpure.com/agk-launcher/com.agk.fire.launcher/versions" },
    ],
  },
];

export const leader = {
  name: "Gopi Adusumilli",
  role: "President, AGK Fire Inc",
  linkedin: "https://www.linkedin.com/in/socialnewsxyz",
  bio: "An experienced Software Engineer with a demonstrated history of working in the graphic design industry. As President of AGK Fire Inc, Gopi leads the company’s software projects and product development across web, mobile, AI-assisted tools, and education technology. He also oversees the company’s independent media operations, including Social News XYZ.",
  note: "Skills include Agentic Coding, Python, Reverse Engineering APIs, LLMs, SQL, Management, HTML, Windows, and Microsoft SQL Server. Graduate of St Peter’s University.",
  skills: [
    "Agentic Coding",
    "LLMs",
    "Python",
    "Reverse Engineering",
    "SQL",
    "Management",
  ],
} as const;