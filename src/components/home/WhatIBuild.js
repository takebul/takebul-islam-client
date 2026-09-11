import { FiGlobe, FiServer, FiLayers, FiDatabase } from "react-icons/fi";

const CAPABILITIES = [
  {
    icon: FiGlobe,
    title: "Modern Web Applications",
    description:
      "Responsive, production-ready frontend web applications built with React 19 and Next.js. Focused on layout stability, intuitive UI/UX, fast page loads, accessibility, and smooth user interactions.",
    tags: ["Next.js App Router", "React 19", "Tailwind CSS", "HeroUI", "Framer Motion"],
  },
  {
    icon: FiServer,
    title: "Backend Systems & APIs",
    description:
      "Robust Express.js and Node.js REST APIs with robust token verification, rate limiting, request validation, cryptographic JWKS auth, and resilient error-handling pipelines.",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT / JWKS", "Better Auth"],
  },
  {
    icon: FiLayers,
    title: "SaaS & Marketplace Products",
    description:
      "Full-featured applications featuring dual-sided user dashboards, multi-tiered Stripe subscriptions, role-based access control (RBAC), opportunity management, and admin moderation suites.",
    tags: ["Multi-Role RBAC", "Stripe Checkout", "Admin Portals", "Notification Workflows"],
  },
  {
    icon: FiDatabase,
    title: "Database-Driven Applications",
    description:
      "High-performance MongoDB data persistence layer with complex regex search, range-based date filters, atomic slot reservation, and schema validation tailored to production workloads.",
    tags: ["MongoDB Atlas", "Indexing", "Regex Search", "Data Aggregation"],
  },
];

export function WhatIBuild() {
  return (
    <section className="py-20 bg-slate-50/60 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            What I Build
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            I don't just write templates or superficial frontends. I architect complete software solutions from system design to live server deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-sky-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {cap.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
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
