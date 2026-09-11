import { FiLayout, FiServer, FiDatabase, FiLock, FiCreditCard, FiUploadCloud } from "react-icons/fi";

const SNAPSHOT_ITEMS = [
  {
    icon: FiLayout,
    title: "Frontend Engineering",
    description: "Component architecture, SSR/SSG, state management, responsive UI, micro-animations",
    technologies: ["React 19", "Next.js", "Tailwind CSS v4", "HeroUI"],
  },
  {
    icon: FiServer,
    title: "Backend & API Architecture",
    description: "Modular Express.js services, RESTful design, request validation, middleware security",
    technologies: ["Node.js", "Express.js", "REST APIs", "CORS/Security"],
  },
  {
    icon: FiDatabase,
    title: "Database Modeling",
    description: "Document schemas, atomic operations, compound indexing, search aggregation",
    technologies: ["MongoDB Atlas", "Schema Design", "Regex & Filtering", "CRUD Pipelines"],
  },
  {
    icon: FiLock,
    title: "Auth & Access Control",
    description: "Role-based authorization (RBAC), Better Auth integration, cryptographic JWT/JWKS",
    technologies: ["Better Auth", "JWT / JWKS", "RBAC Matrix", "Session Cookies"],
  },
  {
    icon: FiCreditCard,
    title: "Payments & Monetization",
    description: "Subscription tiers, checkout flows, webhook handling, plan-based application limits",
    technologies: ["Stripe Checkout", "Customer Portals", "Webhook Lifecycle"],
  },
  {
    icon: FiUploadCloud,
    title: "Deployment & Operations",
    description: "CI/CD deployments, environment configuration, decoupled client-server architecture",
    technologies: ["Vercel", "Render", "Git & GitHub", "Atlas Cloud"],
  },
];

export function Snapshot() {
  return (
    <section className="py-16 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400 mb-2">
            Technical Competencies
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Quick Developer Snapshot
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A practical overview of my core engineering disciplines, backed by shipped production applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SNAPSHOT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
