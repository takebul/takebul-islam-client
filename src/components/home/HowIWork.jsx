import { FiCompass, FiFileText, FiLayout, FiCode, FiShield, FiCheckCircle, FiSend, FiTrendingUp } from "react-icons/fi";

const WORK_STEPS = [
  {
    step: "01",
    icon: FiCompass,
    title: "Understand",
    description: "Analyze core problem space, target user needs, business workflows, and technical constraints.",
  },
  {
    step: "02",
    icon: FiFileText,
    title: "Plan",
    description: "Map data schemas, API routes, component tree, state management, and edge cases.",
  },
  {
    step: "03",
    icon: FiLayout,
    title: "Design",
    description: "Establish typography scale, spacing tokens, responsive layouts, and accessible UI patterns.",
  },
  {
    step: "04",
    icon: FiCode,
    title: "Build",
    description: "Write clean, modular JavaScript across frontend components and Express backend endpoints.",
  },
  {
    step: "05",
    icon: FiShield,
    title: "Secure",
    description: "Implement token authentication, RBAC authorization guards, input validation, and sanitization.",
  },
  {
    step: "06",
    icon: FiCheckCircle,
    title: "Test",
    description: "Verify responsive breakpoints, network payloads, error boundaries, and form handling.",
  },
  {
    step: "07",
    icon: FiSend,
    title: "Deploy",
    description: "Ship to production hosting (Vercel, Render) with environment variables and monitoring.",
  },
  {
    step: "08",
    icon: FiTrendingUp,
    title: "Improve",
    description: "Iterate based on real telemetry, user feedback, performance metrics, and evolving needs.",
  },
];

export function HowIWork() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
          Engineering Process
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          How I Work
        </h2>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
          A disciplined, production-proven development cycle ensuring high reliability from initial concept to live maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORK_STEPS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all hover:shadow-md group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-sky-950/60 border border-blue-100 dark:border-sky-900/60">
                  {item.step}
                </span>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
