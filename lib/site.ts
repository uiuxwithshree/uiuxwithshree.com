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
  screens: { label: string; caption: string; tone: ChipColor; img: string }[];
  impact: { value: string; label: string; detail: string }[];
  learningTitle: string;
  learningBody: string;
  externalHref?: string;
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
  resumeHref:
    "https://drive.google.com/file/d/1xGPT98DkSS4AAb-zZ5JelQWa-HpFt5eA/view?usp=sharing",
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
  eyebrow: "Selected work — 04",
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
    slug: "uvss",
    index: "03",
    status: "shipped",
    title: "UVSS",
    thumbnail: "/uvss-thumbnail.png",
    oneLiner:
      "Designed the end-to-end software experience for an AI-powered under-vehicle scanning system, built so simply that operators with zero computer skills could run it confidently.",

    tags: [
      { label: "AI-enabled", color: "sky" },
      { label: "SaaS / B2B", color: "coral" },
      { label: "Design System", color: "lilac" },
    ],

    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "Design system, UX flows & user journey" },
      { label: "Platform", value: "Web (Security / Enterprise Software)" },
      { label: "Status", value: "Shipped · Confidential (NDA)" },
    ],

    contextTitle:
      "A powerful AI security system, built for operators who had never used software before.",

    contextBody:
      "UVSS uses an underground camera to scan a vehicle's underbelly, with AI flagging weapons and other anomalies in real time. My work was on the software side: the design system, the full user flow, and the end-to-end user journey. The brief had two goals, make it so easy that someone with no computer skills or technical background could operate it confidently, and shape it into a complete, sellable software-as-a-service product rather than just a tool bolted onto the hardware. This is a former employer's project, so only a limited, shareable set of screens is shown here.",

    before: {
      title: "Where it started",
      points: [
        "A powerful detection system with no dedicated design system or consistent UI language.",
        "No mapped end-to-end user journey for how operators would actually work day to day.",
        "Accessibility hadn't been designed in, despite operators varying widely in technical comfort.",
        "The product experience wasn't yet packaged as a complete, standalone SaaS offering.",
      ],
    },

    after: {
      title: "Where it landed",
      points: [
        "A complete design system used consistently across the whole software.",
        "Clean, WCAG-aligned user flows built and validated through user testing.",
        "An interface simple enough for operators with no computer literacy to use unsupported.",
        "A packaged, complete SaaS/product experience rather than a bare hardware interface.",
      ],
    },

    problems: [
      {
        title: "Designing for zero computer literacy",
        body: "Many operators had little to no prior experience with software. Every flow had to be reduced to its simplest possible form, with clear, unambiguous states and minimal room for error.",
      },
      {
        title: "Turning a hardware system into a software product",
        body: "UVSS started as a detection system built around the hardware. Part of the job was designing the software layer so it felt like a complete, coherent product — not an afterthought UI wrapped around a camera.",
      },
      {
        title: "Accessibility in a security-critical interface",
        body: "Following WCAG guidelines while keeping the interface fast to scan under pressure meant testing repeatedly with real users and simplifying flows until support calls dropped noticeably.",
      },
    ],

    coreIdeaEyebrow: "The core idea",

    coreIdea:
      "Make a highly technical AI security system feel as simple as flipping a switch.",

    coreIdeaHighlight: "AI security system",

    screens: [
      {
        label: "Screen 01",
        caption:
          "One of the shareable screens from the operator-facing software — kept simple enough to use with no prior computer experience.",
        tone: "sky",
        img: "/uvss-thumbnail.png",
      },
    ],

    impact: [
      {
        value: "1",
        label: "Design system",
        detail: "Built and rolled out a complete design system spanning the whole software.",
      },
      {
        value: "WCAG",
        label: "Accessibility standard",
        detail: "Interface designed and tested against WCAG guidelines throughout.",
      },
      {
        value: "Reduced",
        label: "Support calls",
        detail: "Simpler flows and clearer UI meaningfully reduced how often operators needed support.",
      },
      {
        value: "0",
        label: "Computer skill required",
        detail: "Designed so operators with no technical background could use it confidently, unsupervised.",
      },
    ],

    learningTitle: "Simplicity is a feature when the user has never touched software like this before.",

    learningBody:
      "Designing UVSS taught me that 'intuitive' means something different for every audience. Testing with operators who had no software background forced me to strip flows down to their essentials, and it paid off directly — a measurable drop in support calls after launch. It reinforced that accessibility and simplicity aren't just nice-to-haves, they're core product requirements when your users can't be assumed to have any technical baseline.",
  },
  {
    slug: "parking-management-system",
    index: "04",
    status: "shipped",
    title: "PMS",
    thumbnail: "/pms-thumbnail.png",
    oneLiner:
      "Designed a real-time SaaS paarking management system platform for vehicle tracking and occupancy monitoring across multiple parking facilities.",

    tags: [
      { label: "SaaS / B2B", color: "coral" },
      { label: "Product Design", color: "sky" },
      { label: "Design System", color: "lilac" },
    ],

    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "Design system, UX flows & user journey" },
      { label: "Platform", value: "Web (Facility Management Software)" },
      { label: "Status", value: "Shipped · Confidential (NDA)" },
    ],

    contextTitle: "Facility teams needed live visibility into occupancy, not end-of-day reports.",

    contextBody:
      "The Parking Management System delivers real-time vehicle tracking and occupancy monitoring across facilities, packaged as a software product. As on UVSS, I worked on the design system, the complete user flow, and the overall user journey — designing for the same goals of extreme ease of use, WCAG-aligned accessibility, and a polished, complete SaaS experience. This is also a former employer's project, so only a small set of shareable screens is included here.",

    before: {
      title: "Where it started",
      points: [
        "Occupancy and vehicle data existed, but without a clear, real-time interface to act on it.",
        "No consistent design system tying the product's screens and states together.",
        "User journeys for facility staff hadn't been mapped end to end.",
        "Accessibility and ease-of-use hadn't been designed in for non-technical facility staff.",
      ],
    },

    after: {
      title: "Where it landed",
      points: [
        "A real-time view of vehicle tracking and occupancy across facilities.",
        "A consistent design system reused and extended from prior product work.",
        "Clear, tested user flows built with WCAG accessibility guidelines in mind.",
        "A complete, product-grade SaaS experience rather than a raw data dashboard.",
      ],
    },

    problems: [
      {
        title: "Making real-time data actionable",
        body: "Live vehicle and occupancy data is only useful if staff can read and act on it instantly. Flows were designed to surface the right information at a glance, without requiring interpretation.",
      },
      {
        title: "Designing for non-technical facility staff",
        body: "Like UVSS, this product needed to work for operators without deep technical skills, so flows were kept minimal, consistent, and forgiving of mistakes.",
      },
      {
        title: "Scaling across multiple facilities",
        body: "The interface had to hold up whether someone was monitoring a single lot or occupancy across many facilities at once, without becoming overwhelming.",
      },
    ],

    coreIdeaEyebrow: "The core idea",

    coreIdea:
      "Turn live occupancy data into a system facility staff can act on instantly, not just read.",

    coreIdeaHighlight: "act on instantly, not just read",

    screens: [
      {
        label: "Screen 01",
        caption:
          "A shareable screen from the real-time occupancy and vehicle tracking view.",
        tone: "mint",
        img: "/pms-thumbnail.png",
      },
      {
        label: "Screen 02",
        caption:
          "A shareable screen showing facility-level monitoring within the platform.",
        tone: "coral",
        img: "/pms-screen-02.png",
      },
    ],

    impact: [
      {
        value: "Real-time",
        label: "Occupancy tracking",
        detail: "Live vehicle tracking and occupancy monitoring across facilities.",
      },
      {
        value: "1",
        label: "Design system",
        detail: "Consistent design system applied across the full product.",
      },
      {
        value: "WCAG",
        label: "Accessibility standard",
        detail: "Flows designed and tested against WCAG guidelines.",
      },
      {
        value: "Multi",
        label: "Facility support",
        detail: "Designed to scale from a single lot to monitoring across many facilities.",
      },
    ],

    learningTitle: "A reusable design system pays off the second time you build on it.",

    learningBody:
      "Coming into PMS after UVSS, I could reuse and extend an existing design language instead of starting over, which meant more time spent on the specific problem of real-time, multi-facility monitoring. It reinforced how much a solid design system compounds in value across products at the same company.",
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
