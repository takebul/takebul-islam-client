import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: ["JavaScript (ES6+)", "React 19", "Next.js", "Tailwind CSS v4", "HeroUI", "HTML5 & CSS3"],
  },
  {
    category: "Backend & Auth",
    skills: ["Node.js", "Express.js", "REST APIs", "Better Auth", "JWT / JWKS", "Role-Based Access"],
  },
  {
    category: "Database",
    skills: ["MongoDB Atlas", "Schema Design", "Regex Querying", "Indexing & Aggregations"],
  },
  {
    category: "Payments & Services",
    skills: ["Stripe Checkout", "Stripe Subscriptions", "Webhooks", "Transactional Alerts"],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git & GitHub", "Vercel", "Render", "VS Code", "ESLint & Prettier", "npm"],
  },
  {
    category: "AI-Assisted Workflow",
    skills: ["GitHub Copilot", "Claude", "Gemini", "ChatGPT"],
  },
];

export function SkillsPreview() {
  return (
    <section id="skills" className="py-20 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Core Skills & Tools
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Technologies I use to design, build, test, and deploy resilient full-stack applications.
            </p>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors group"
          >
            <span>Deep Dive Into Skills</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 flex items-center justify-center">
                      <FiCheck className="w-2.5 h-2.5" />
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
