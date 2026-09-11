import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/api/projects";
import {
  FiExternalLink,
  FiGithub,
  FiArrowLeft,
  FiCheckCircle,
  FiAlertTriangle,
  FiCpu,
  FiLayers,
  FiCalendar,
  FiUser,
  FiCompass,
} from "react-icons/fi";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription || project.description,
    openGraph: {
      title: `${project.title} | Takebul Islam`,
      description: project.shortDescription,
      images: project.thumbnail ? [{ url: project.thumbnail }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const {
    title,
    category,
    projectType,
    clientType,
    role,
    duration,
    startDate,
    endDate,
    shortDescription,
    description,
    thumbnail,
    images = [],
    technologies = [],
    liveUrl,
    frontendRepository,
    backendRepository,
    keyFeatures = [],
    technicalChallenges = [],
    solutions = [],
    architecture,
    lessonsLearned = [],
  } = project;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            {category && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-sky-950/80 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-sky-800">
                {category}
              </span>
            )}
            {projectType && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {projectType}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {shortDescription}
          </p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Open Live Application</span>
              </a>
            )}

            {frontendRepository && (
              <a
                href={frontendRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span>Frontend Repository</span>
              </a>
            )}

            {backendRepository && (
              <a
                href={backendRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span>Backend Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Preview Image */}
        {thumbnail && (
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-xl mb-12">
            <Image
              src={thumbnail}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover object-top"
            />
          </div>
        )}

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 mb-14 text-sm">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
              <FiUser className="w-3.5 h-3.5" /> Role
            </span>
            <p className="font-semibold text-slate-900 dark:text-white">
              {role || "Full-Stack Web Developer"}
            </p>
          </div>

          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
              <FiCalendar className="w-3.5 h-3.5" /> Duration
            </span>
            <p className="font-semibold text-slate-900 dark:text-white">
              {duration || "Production Lifecycle"}
            </p>
          </div>

          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
              <FiCompass className="w-3.5 h-3.5" /> Client / Scope
            </span>
            <p className="font-semibold text-slate-900 dark:text-white">
              {clientType || "Production Application"}
            </p>
          </div>

          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
              <FiLayers className="w-3.5 h-3.5" /> Category
            </span>
            <p className="font-semibold text-slate-900 dark:text-white">
              {category || "Full-Stack"}
            </p>
          </div>
        </div>

        {/* Main Case Study Body */}
        <div className="space-y-12">
          {/* Overview & Detailed Description */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
              Overview & Objectives
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </section>

          {/* Technology Stack */}
          {technologies.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Key Features */}
          {keyFeatures.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Key Product Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-start gap-3.5"
                  >
                    <FiCheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Architecture */}
          {architecture && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                System Architecture
              </h2>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {architecture}
                </p>
              </div>
            </section>
          )}

          {/* Technical Challenges & Solutions */}
          {(technicalChallenges.length > 0 || solutions.length > 0) && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Technical Challenges & Solutions
              </h2>

              <div className="space-y-6 pt-2">
                {technicalChallenges.map((challenge, idx) => {
                  const matchingSolution = solutions[idx] || null;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4"
                    >
                      <div className="flex items-start gap-3">
                        <FiAlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                            Challenge #{idx + 1}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {challenge}
                          </p>
                        </div>
                      </div>

                      {matchingSolution && (
                        <div className="pl-8 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-3">
                          <FiCpu className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="text-xs font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wide mb-1">
                              Engineering Solution
                            </h5>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {matchingSolution}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Gallery / Screenshots */}
          {images && images.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Project Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm"
                  >
                    <Image
                      src={img}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lessons Learned */}
          {lessonsLearned.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                Key Engineering Takeaways
              </h2>
              <ul className="space-y-3 pt-2">
                {lessonsLearned.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-sky-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Bottom Action Footer */}
          <div className="p-8 rounded-3xl border border-blue-200/80 dark:border-sky-900/60 bg-blue-50/50 dark:bg-sky-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Interested in this implementation?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Explore the codebase repositories or connect to discuss full-stack engineering opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
                >
                  Visit Live Demo
                </a>
              )}
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
              >
                Discuss With Takebul
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
