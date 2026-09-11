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
} from "react-icons/fi";

export const metadata = {
  title: "Technical Skills & Ecosystem",
  description:
    "Comprehensive overview of Takebul Islam's technical skills across frontend development, backend architecture, databases, authentication, and deployment tooling.",
};

const DETAILED_SKILLS = [
  {
    category: "Frontend Development",
    icon: FiLayout,
    description: "Building accessible, fast, and responsive user interfaces with modern React and Next.js.",
    skills: [
      { name: "JavaScript (ES6+)", context: "Modern async/await, closures, functional array methods, DOM APIs" },
      { name: "React 19", context: "Server and client components, hooks, suspense, and custom state logic" },
      { name: "Next.js (App Router)", context: "Dynamic routing, SSR/SSG caching, metadata, API route handlers" },
      { name: "Tailwind CSS v4", context: "Modern utility-first styling, design tokens, and dark mode theming" },
      { name: "HeroUI v3", context: "Accessible, accessible-first React Aria components and clean modals" },
      { name: "Framer Motion", context: "Micro-interactions, layout transitions, and fluid UI animations" },
      { name: "HTML5 & Semantic Web", context: "High-standard accessibility, SEO structure, semantic elements" },
      { name: "CSS3 & Responsive Design", context: "Flexbox, CSS Grid, media queries, and fluid typography" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: FiServer,
    description: "Developing scalable REST APIs, secure token verification, and server logic.",
    skills: [
      { name: "Node.js", context: "Non-blocking event loop, asynchronous I/O, and server execution" },
      { name: "Express.js", context: "Modular REST routing, middleware chaining, and error handling" },
      { name: "Better Auth", context: "Secure session management, email/password, and JWT issuance" },
      { name: "JWT & JWKS", context: "Cryptographic token verification via remote public key sets with jose-cjs" },
      { name: "Role-Based Access Control (RBAC)", context: "Granular capability guards for Guest, User, Founder, and Admin" },
      { name: "RESTful API Architecture", context: "Predictable JSON schemas, idempotent endpoints, standard HTTP status codes" },
    ],
  },
  {
    category: "Database & Storage",
    icon: FiDatabase,
    description: "Designing schemas and optimizing high-concurrency document operations.",
    skills: [
      { name: "MongoDB Atlas", context: "Cloud cluster configuration, multi-tenant databases, connection pooling" },
      { name: "Data Modeling", context: "Relational references, embedded sub-documents, and indexing strategies" },
      { name: "Complex Querying", context: "Regex text search ($regex), date ranges ($gte/$lte), and compound filters" },
      { name: "Atomic Operations", context: "Guaranteed concurrency handling using atomic increment and update operators" },
    ],
  },
  {
    category: "Payments & External Services",
    icon: FiCreditCard,
    description: "Monetization flows, customer subscription lifecycles, and third-party APIs.",
    skills: [
      { name: "Stripe Checkout & Billing", context: "Multi-tier subscription checkout and recurring membership management" },
      { name: "Stripe Webhooks", context: "Idempotent event processing for invoice payments, upgrades, and cancellations" },
      { name: "Transactional Email & Alerts", context: "Automated event alerts and application tracking notifications" },
    ],
  },
  {
    category: "Tools & DevOps Deployment",
    icon: FiTool,
    description: "Professional developer workflow, version control, and cloud hosting platforms.",
    skills: [
      { name: "Git & GitHub", context: "Branching strategies, semantic commits, PR code reviews, and remote remotes" },
      { name: "Vercel", context: "Zero-config Next.js serverless production deployments with custom domains" },
      { name: "Render & Netlify", context: "Node/Express backend web service hosting and static CDN distributions" },
      { name: "VS Code & Tooling", context: "ESLint configuration, Prettier formatting, npm package management" },
    ],
  },
  {
    category: "AI Workflow & Productivity",
    icon: FiCpu,
    description: "Leveraging state-of-the-art AI tooling to accelerate debugging, prototyping, and test coverage.",
    skills: [
      { name: "GitHub Copilot", context: "Context-aware code completion and repetitive syntax acceleration" },
      { name: "Claude & Gemini", context: "Complex architectural planning, edge-case analysis, and refactoring" },
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
