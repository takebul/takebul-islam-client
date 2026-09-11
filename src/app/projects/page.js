import { getProjects } from "@/lib/api/projects";
import { ProjectsCatalog } from "@/components/projects/ProjectsCatalog";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects & Applications",
  description:
    "Explore full-stack web applications built by Takebul Islam. Production SaaS platforms, marketplaces, and booking engines built with Next.js, Node.js, and MongoDB.",
};

export default async function ProjectsPage() {
  const projects = await getProjects({
    status: "published",
  });

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Complete, Polished Web Applications
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every project listed here is a real-world, functional software product backed by secure REST APIs, role-based authentication, and structured databases.
          </p>
        </div>

        <ProjectsCatalog initialProjects={projects} />
      </div>
    </div>
  );
}
