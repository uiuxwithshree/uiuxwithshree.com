// ---------------------------------------------------------------------------
// ALL COPY LIVES HERE. Fields tagged [PLACEHOLDER] are stand-ins for detail
// that needs to come from her directly (case-study narratives, metrics,
// testimonials) — components never need to change when you swap them.
// Everything NOT tagged [PLACEHOLDER] is pulled from her live site,
// uiuxwithshree.com, as of writing this.
// ---------------------------------------------------------------------------

export type Tag = string;
export type ChipColor = "coral" | "sky" | "mint" | "lilac";

export interface CaseStudy {
  slug: string;
  index: string; // "01", "02" — legit sequence, this is the order they appear
  status: "shipped" | "in-progress";
  title: string;
  thumbnail: string; // optional, only used for shipped case studies
  oneLiner: string;
  tags: { label: Tag; color: ChipColor }[];
  meta: { label: string; value: string }[];
  contextTitle: string;
  contextBody: string;
  before: { title: string; points: string[] };
  after: { title: string; points: string[] };
  problems: { title: string; body: string }[];
  coreIdeaEyebrow: string;
  coreIdea: string; // the one-sentence reframe, first few words get the marker highlight
  coreIdeaHighlight: string; // the exact substring of coreIdea to highlight
  screens: { label: string; caption: string; tone: ChipColor; img?: string }[];
  impact: { value: string; label: string; detail: string }[];
  learningTitle: string;
  learningBody: string;
  externalHref?: string;
  liveHref?: string;
  figmaHref?: string;
}

export const profile = {
  name: "Shree Chaurasia",
  initials: "SC",
  role: "Product Designer",
  tagline: "I design things that feel simple, even when they're not.",
  location: "Greater Noida, India",
  status: "Available for remote & full-time",
  email: "uiuxwithshree@gmail.com",
  resumeHref: "/shree_chaurasia_product_designer_resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/shree-chaurasia" },
    { label: "YouTube", href: "https://www.youtube.com/@uiuxwithshree" },
    { label: "Behance", href: "https://www.behance.net/shreechaurasia" },
  ],
  yearsExperience: "3+",
  productsShipped: "12+",
};

export const roleMarquee = [
  "Product Designer",
  "UX Researcher",
  "Interaction Designer",
  "Visual Designer",
  "Systems Thinker",
  "Problem Solver",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: profile.status,
  headline: profile.tagline,
  headlineHighlight: "simple, even when they're not.",
  sub:
    "I'm Shree, a product designer creating intuitive digital experiences through research, strategy, and systems thinking. Transforming complex ideas into simple, meaningful products.",
};

export const workIntro = {
  eyebrow: "Selected work — 03",
  title: "Personal explorations and shipped product work.",
  body:
    "Not a shot dump. A mix of independent 0→1 projects and shipped, real-world product work from my time in industry — some shown as finished case studies, one still taking shape as an active exploration.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ember",
    index: "01",
    status: "shipped",
    title: "Ember",
    thumbnail: "/ember.jpeg",
    oneLiner:
      "Designed a GitHub-integrated AI workspace that helps developer teams collaborate, switch between LLMs, and get project-aware answers without leaving their workflow.",

    tags: [
      { label: "AI-enabled", color: "sky" },
      { label: "Product Design", color: "coral" },
      { label: "Web App", color: "lilac" },
    ],

    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "0 → 1 Product" },
      { label: "Platform", value: "Web" },
      { label: "Status", value: "Design in Progress" },
    ],

    contextTitle: "Developers were constantly switching between GitHub, AI tools, and team chat.",

    contextBody:
      "While working with development teams, I noticed the same workflow repeated every day—developers jumped between GitHub, AI chat tools, and Slack just to answer a single question. Every new conversation meant explaining the project again, and valuable discussions were scattered across multiple platforms. Ember brings repository context, AI assistance, and team collaboration into one GitHub-connected workspace that understands the project from the start.",

    before: {
      title: "Where it started",
      points: [
        "Developers constantly switched between GitHub, AI tools, and Slack throughout the day.",
        "Repository context had to be re-explained every time a new AI conversation began.",
        "Project discussions and AI-generated solutions lived in separate tools.",
        "New teammates took longer to onboard because there was no shared project-aware workspace.",
      ],
    },

    after: {
      title: "Where it landed",
      points: [
        "A single workspace combining GitHub, AI assistance, and team collaboration.",
        "Project-aware AI that understands the connected repository instead of relying on repeated prompts.",
        "Dedicated workspaces for every project with seamless switching between repositories.",
        "Support for multiple LLMs without interrupting the developer's workflow.",
      ],
    },

    problems: [
      {
        title: "Platform hopping slowed developers down",
        body: "Developers moved between GitHub, standalone AI tools, and Slack to complete even simple tasks. The experience was fragmented, forcing them to repeatedly rebuild context instead of staying focused on solving problems.",
      },
      {
        title: "Repository context had to stay invisible but accessible",
        body: "The AI needed access to the connected GitHub repository without overwhelming the interface. The workspace keeps repository context in the background while allowing developers to ask natural questions and receive project-specific answers.",
      },
      {
        title: "Collaboration belonged beside AI, not in another app",
        body: "Developers often discussed AI responses in Slack while the actual conversation happened elsewhere. Ember places team chat alongside the AI workspace so discussions, decisions, and project context remain together.",
      },
    ],

    coreIdeaEyebrow: "The core idea",

    coreIdea:
      "Create a workspace that understands the project and not just the conversation.",

    coreIdeaHighlight:
      "not just the conversation",

    screens: [
      {
        label: "Screen 01",
        caption:
          "The primary developer workspace combining AI conversations, repository navigation, and team collaboration.",
        tone: "sky",
        img: "/ember-workspace.png",
      },
      {
        label: "Screen 02",
        caption:
          "Quick model switching between GPT, Claude, Gemini, and other LLMs without leaving the conversation.",
        tone: "coral",
        img: "/ember-switch-model.png",
      },
      {
        label: "Screen 03",
        caption:
          "Team management workspace for viewing members, assigning access, and managing project collaborators.",
        tone: "mint",
        img: "/ember-members.png",
      },
      {
        label: "Screen 04",
        caption:
          "File upload and code response experience with syntax-highlighted output inside the conversation.",
        tone: "lilac",
        img: "/ember-code.png",
      },
    ],

    impact: [
      {
        value: "3",
        label: "User Roles",
        detail: "Designed separate workflows for Admin, Project Manager, and Developer.",
      },
      {
        value: "4",
        label: "Core Flows",
        detail: "Completed primary user journeys covering onboarding, AI chat, members, and model switching.",
      },
      {
        value: "Multi",
        label: "LLM Support",
        detail: "Supports switching between multiple AI models within the same workspace.",
      },
      {
        value: "1",
        label: "Unified Workspace",
        detail: "Combined GitHub context, AI assistance, and collaboration into a single product experience.",
      },
    ],

    learningTitle: "Design the workflow first—the interface becomes much easier.",

    learningBody:
      "Working through the complete product flow before opening Figma turned out to be the biggest win on Ember. Mapping onboarding, permissions, repository management, and collaboration exposed edge cases early and prevented expensive redesigns later. It reinforced that great product design starts with understanding the system, not polishing individual screens.",

    externalHref: "https://app.notion.com/p/uiuxwithshree/EMBER-Case-Study-3521f6b475fb81bcb4c7c5dd8b190662",
    figmaHref: "https://www.figma.com/design/SrXu5AGCsqLuktdtrfJsRU/Ember---AI-based-Developer-Companion"
  },
  {
    slug: "stride",
    index: "02",
    status: "in-progress",
    title: "Stride",
    thumbnail: "/stride.jpeg",
    oneLiner:
      "An AI-enabled fitness platform helping users and trainers track workouts, understand progress, and improve outcomes through one shared, evolving system.",
    tags: [
      { label: "0 → 1", color: "mint" },
      { label: "AI-enabled", color: "sky" },
      { label: "Mobile App", color: "coral" },
    ],
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "0 → 1, discovery" },
      { label: "Platform", value: "Mobile" },
      { label: "Status", value: "In progress" },
    ],
    contextTitle: "Users and trainers were tracking progress in two disconnected worlds.",
    contextBody:
      "The problem was simple to state but hard to solve: users were logging workouts in one place, while trainers were coaching in another. Progress was visible only in numbers, not in what to do next, and there was no shared language between what's logged and what's coached.",
    before: {
      title: "The problem space",
      points: [
        "Users track workouts, but trainers can't see progress in context",
        "No shared language between what's logged and what's coached",
        "Progress is visible in numbers, not in what to do next",
        "Currently defining the right problem before designing a solution",
      ],
    },
    after: {
      title: "Where it's headed",
      points: [
        "A shared system that both users and trainers can use to track progress",
        "Progress framed as a next action, not just a chart",
        "AI support that adapts as the plan evolves",
        "Still in discovery — this list will firm up as the problem does",
      ],
    },
    problems: [
      {
        title: "Two users, one system, different needs",
        body: "The challenge is designing a single system that serves both users and trainers, who have different goals and ways of interacting with the platform.",
      },
      {
        title: "Tracking isn't the same as improving",
        body: "The gap between logging a workout and knowing what it means lies in the lack of context and actionable insights.",
      },
      {
        title: "Defining the problem is the current milestone",
        body: "Stride is still in the discovery phase — the core problem space is being scoped before screens get designed.",
      },
    ],
    coreIdeaEyebrow: "The working hypothesis",
    coreIdea: "Design for the shared system, not two separate apps.",
    coreIdeaHighlight: "the shared system, not two separate apps",
    screens: [
      { label: "Sketch 01", caption: "Early exploration, [PLACEHOLDER caption]", tone: "mint", img: "/ember-screen-01.png" },
      { label: "Sketch 02", caption: "Early exploration, [PLACEHOLDER caption]", tone: "sky", img: "/ember-screen-02.png" },
    ],
    impact: [
      { value: "In discovery", label: "current phase", detail: "problem space still being scoped" },
      { value: "TBD", label: "[PLACEHOLDER]", detail: "goal metric, once defined" },
    ],
    learningTitle: "Sometimes the honest update is: still figuring it out.",
    learningBody:
      "Stride is shown here mid-process on purpose — a portfolio that only shows finished, tidy wins isn't showing how design actually happens.",
  },
  {
    slug: "ledgr",
    index: "03",
    status: "shipped",
    title: "Ledgr",
    thumbnail: "/ledgr-thumbnail.svg",
    oneLiner:
      "Leading the end-to-end product design of a personal finance app that helps people plan around their real payday, log every rupee, and turn a pile of transactions into one clear next decision.",

    tags: [
      { label: "0 → 1", color: "mint" },
      { label: "Product Design", color: "coral" },
      { label: "Design System", color: "lilac" },
      { label: "AI-enabled", color: "sky" },
    ],

    meta: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Scope", value: "Flows → features → wireframes → UI → design system" },
      { label: "Platform", value: "Web (mobile-first)" },
      { label: "Status", value: "Design in progress" },
    ],

    contextTitle: "Most money apps record the past. Ledgr is designed to help people understand it.",

    contextBody:
      "Bank apps tell you what cleared, and most budgeting apps stop at a neat monthly chart. But real money doesn't move in calendar months — salary lands on the 27th, spending is split across UPI, cards and cash, and small daily payments quietly add up. On Ledgr I own the product design end to end: mapping user flows, deciding which features earn a place, shaping the UX, moving from lo-fi wireframes to hi-fi screens, and building the design system from scratch. The goal is a calm, behaviour-first workspace — track money by behaviour, not guilt — where every entry teaches you a little more about where the money actually goes.",

    before: {
      title: "The problem space",
      points: [
        "Budgets reset on the 1st, while people actually live payday to payday.",
        "Tiny payments and mixed payment modes (UPI, cards, cash, transfers) get lost in bank statements.",
        "Existing apps show more charts, but rarely answer \"so what should I do next?\"",
        "Logging feels like a chore, so people stop before the picture becomes useful.",
      ],
    },

    after: {
      title: "What I'm designing",
      points: [
        "Salary-cycle budgeting that treats each payday as the start of a new cycle, with carry-over of leftover budget.",
        "A 50 / 30 / 20 framework (needs, wants, savings) that turns salary into simple monthly guardrails.",
        "A 0–10 money score that makes the month readable at a glance, with the detail one tap away.",
        "An \"amount first, everything else optional\" logging flow and an AI assistant grounded only in the user's own data.",
      ],
    },

    problems: [
      {
        title: "Logging has to be faster than forgetting",
        body: "If adding an entry takes more than a few seconds, people stop. The add flow is designed around one rule — amount first, everything else optional — with keyboard shortcuts on desktop and shake-to-open on phones to get straight into the Ledger.",
      },
      {
        title: "One signal, without hiding the detail",
        body: "People want a quick answer to \"am I okay this month?\" but also need to trust it. The 0–10 score gives that single signal, and the dashboard, category breakdown, calendar and daily trend let them open it up and see exactly what moved it.",
      },
      {
        title: "Designing AI people can actually trust with money",
        body: "The \"Ask about your money\" assistant only reads safe, read-only summaries of the user's own data. The UX had to make that boundary clear, suggest good starter questions, and remind people to verify important figures — useful, but never pretending to be financial advice.",
      },
    ],

    coreIdeaEyebrow: "The core idea",

    coreIdea:
      "Plan. Log. See. Decide. — turn every transaction into one clear next decision.",

    coreIdeaHighlight: "one clear next decision",

    screens: [
      {
        label: "User flows",
        caption:
          "End-to-end flows covering onboarding & setup, logging an entry, budget cycles, analysis and the AI assistant — mapped before any UI.",
        tone: "mint",
      },
      {
        label: "Lo-fi wireframes",
        caption:
          "Early wireframes exploring the dashboard, the money score and the \"amount first\" add-entry flow.",
        tone: "sky",
      },
      {
        label: "Hi-fi screens",
        caption:
          "Polished dashboard, Ledger and Analysis screens — more coming as the design progresses.",
        tone: "coral",
      },
      {
        label: "Design system",
        caption:
          "A design system built from scratch — type, colour, spacing, components and states — so every screen speaks the same language.",
        tone: "lilac",
      },
    ],

    impact: [
      {
        value: "100%",
        label: "Design ownership",
        detail: "Owning every stage — user flows, feature decisions, UX, wireframes, UI and the design system.",
      },
      {
        value: "1",
        label: "Design system",
        detail: "Built from scratch to keep the Dashboard, Ledger, Analysis, Calendar and Settings consistent.",
      },
      {
        value: "0–10",
        label: "Money score",
        detail: "Designed a single, readable signal that summarises the month against the user's plan.",
      },
      {
        value: "50/30/20",
        label: "Budget framework",
        detail: "Turned a known budgeting rule into guided setup and live guardrails for needs, wants and savings.",
      },
    ],

    learningTitle: "Clarity beats another spending chart.",

    learningBody:
      "Designing Ledgr end to end has pushed me to make product decisions, not just screens — deciding what not to build is as important as what goes in. Starting from user flows and feature priorities before touching UI kept the product focused on one question: what should I do next with my money? This case study is being updated as the design moves from wireframes to final screens.",

    liveHref: "https://theledgrapp.vercel.app/",
  },
];

export const about = {
  eyebrow: "About",
  title: "A little more about myself...",
  bodyParagraphs: [
    "I'm Shree, a product designer who loves shaping ideas into meaningful experiences through storytelling, blending aesthetics with function in everything I create. I work across 0 → 1, b2b and consumer products, designing for web platforms, mobile apps, and design systems.",
    "Lately, I've been exploring how ai can accelerate the way i think, design, and build, helping me move faster and own more of the execution. at the core, I care about creating products that feel simple, intentional, and genuinely useful.",
  ],
  facts: [
    { value: profile.yearsExperience, label: "Years in product design" },
    { value: profile.productsShipped, label: "Products shipped" },
    { value: "6+", label: "Companies/Clients worked with" },
  ],
  tools: ["Figma", "Notion", "Framer", "Maze", "Claude", "Miro"],
};

export const approach = {
  eyebrow: "Working together",
  title: "What it's like to work with me.",
  points: [
    {
      title: "I start with the problem, not the screen.",
      body: "Probably the most important part of my process: understanding the problem space before designing a solution.",
    },
    {
      title: "You'll know where things stand.",
      body: "I believe in transparent communication and keeping everyone informed throughout the design process.",
    },
    {
      title: "I hold opinions loosely.",
      body: "I'm open to feedback and willing to iterate on my designs based on input from stakeholders.",
    },
    {
      title: "I stay past handoff.",
      body: "I remain involved after design handoff to ensure smooth implementation and address any questions that arise.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Excellent designer with great communication.",
    name: "Vishal Pandey",
    role: "India",
  },
  {
    quote:
      "Shree is a really good designer who always make clean and thoughtful designs. She's easy to work with, I definitely recommend her.",
    name: "Siddharth Singh",
    role: "Software Engineer, India",
  },
  {
    quote:
      "Shree is a talented designer with a keen eye for detail. She consistently delivers high-quality work and is a pleasure to collaborate with.",
    name: "Madan Sinha",
    role: "Product Manager, India",
  },
  {
    quote:
    "Good work, I really like the way she designs and her approach to problem solving.",
    name: "Marco Pereira",
    role: "Product Designer, Portugal",
  }
];

export const contact = {
  eyebrow: "Contact",
  title: "Let's talk about what you're building.",
  body:
    "Open to full-time product design roles and select freelance work. If there's a real problem worth designing for, I'd like to hear about it.",
};
