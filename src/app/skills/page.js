import Link from "next/link";
import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiCreditCard,
  FiTool,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiCode,
} from "react-icons/fi";

export const metadata = {
  title: "Technical Skills & Ecosystem",
  description:
    "Comprehensive overview of Takebul Islam's technical skills across frontend development, backend architecture, databases, authentication, and deployment tooling.",
};

const DETAILED_SKILLS = [
  {
    category: "Languages & Core Web",
    icon: FiCode,
    description: "Foundational programming and markup languages for modern, responsive software.",
    skills: [
      { name: "JavaScript (ES6+)", context: "Modern async/await, closures, functional array methods, DOM APIs, and ES modules" },
      { name: "HTML5", context: "Semantic page structure, accessibility standards (a11y), clean document hierarchy, and SEO" },
      { name: "CSS3", context: "Flexbox, CSS Grid, media queries, and responsive modern layout architectures" },
    ],
  },
  {
    category: "Frontend Development",
    icon: FiLayout,
    description: "Building accessible, fast, and responsive user interfaces with modern React and Next.js.",
    skills: [
      { name: "React 19", context: "Server and client components, hooks, suspense, and custom reactive state logic" },
      { name: "Next.js (App Router)", context: "Dynamic routing, SSR/SSG caching, metadata, and API route handlers" },
      { name: "React Router", context: "Client-side single-page routing, nested route layouts, and programmatic navigation" },
      { name: "Tailwind CSS v4", context: "Modern utility-first styling, design tokens, and dark mode theming" },
      { name: "HeroUI v3", context: "Accessible, accessible-first React Aria components and clean modals" },
      { name: "DaisyUI", context: "Semantic component classes, responsive UI elements, and rapid utility styling" },
      { name: "Lenis & GSAP", context: "Hardware-accelerated smooth momentum scrolling and timeline scroll animations" },
      { name: "Framer Motion", context: "Micro-interactions, layout transitions, spring physics, and fluid UI animations" },
      { name: "Recharts", context: "Interactive dashboard charts, SVG metrics visualization, and data analytics" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: FiServer,
    description: "Developing scalable REST APIs, database schemas, and robust server operations.",
    skills: [
      { name: "Node.js", context: "Non-blocking event loop, asynchronous I/O, and server execution" },
      { name: "Express.js", context: "Modular REST routing, middleware chaining, and error handling" },
      { name: "MongoDB Atlas", context: "Cloud cluster configuration, multi-tenant databases, indexing, and connection pooling" },
      { name: "CRUD Architecture", context: "Structured create, read, update, delete workflows with transactional data integrity" },
      { name: "RESTful API Architecture", context: "Predictable JSON schemas, idempotent endpoints, standard HTTP status codes" },
    ],
  },
  {
    category: "Authentication & Security",
    icon: FiShield,
    description: "Authentication flows, federated logins, customer subscription lifecycles, and security protocols.",
    skills: [
      { name: "JWT Authentication", context: "Cryptographic token issuance, verification, and stateless secure session management" },
      { name: "Google OAuth", context: "Social authentication and federated identity sign-in workflows" },
      { name: "Better Auth", context: "Secure session management, email/password, and JWT issuance with cookie caching" },
      { name: "Stripe Integration", context: "Multi-tier subscription checkout, recurring billing, and webhook verification" },
    ],
  },
  {
    category: "Developer Tools & Deployment",
    icon: FiTool,
    description: "Professional developer workflow, version control, and cloud hosting platforms.",
    skills: [
      { name: "Git & GitHub", context: "Branching strategies, semantic commits, PR code reviews, and remote repositories" },
      { name: "VS Code", context: "Productive development environment with extensions, debugging, and terminal workflows" },
      { name: "npm", context: "Package management, dependency resolution, script automation, and build lifecycle" },
      { name: "Prettier & ESLint", context: "Code quality standards, automated linting, and consistent code formatting" },
      { name: "Vercel", context: "Zero-config Next.js serverless production deployments with custom domains" },
      { name: "Netlify", context: "Static CDN distributions, continuous integration, and edge distributions" },
      { name: "Render", context: "Node/Express backend web service hosting and live production deployment" },
      { name: "Chrome DevTools", context: "Performance profiling, network request inspection, and responsive device testing" },
      { name: "Figma-to-Code", context: "Pixel-accurate translation of UI/UX designs into responsive, clean component code" },
    ],
  },
  {
    category: "AI-Assisted Workflow",
    icon: FiCpu,
    description: "Leveraging state-of-the-art AI tooling to accelerate debugging, prototyping, and test coverage.",
    skills: [
      { name: "Gemini", context: "Complex architectural planning, technical reasoning, and refactoring strategies" },
      { name: "GitHub Copilot", context: "Context-aware code completion and repetitive syntax acceleration" },
      { name: "Claude", context: "Deep technical problem solving, system design, and algorithmic reasoning" },
      { name: "ChatGPT", context: "Rapid API schema drafting, regex synthesis, and documentation validation" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            Technical Competence
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Skills, Tools & Technologies
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A comprehensive breakdown of the languages, frameworks, databases, and development workflows I use to engineer robust full-stack software.
          </p>
        </div>

        <div className="space-y-12">
          {DETAILED_SKILLS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-sky-950/70 text-blue-600 dark:text-sky-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <FiCheckCircle className="w-4 h-4 text-blue-500 dark:text-sky-400 flex-shrink-0" />
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Want to see these skills in action?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Check out the live applications and detailed architectural case studies.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <span>View Projects</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
