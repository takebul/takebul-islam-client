import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

export function ProjectCard({ project, featured = false }) {
  const {
    title,
    slug,
    shortDescription,
    category,
    thumbnail,
    technologies = [],
    liveUrl,
    frontendRepository,
    backendRepository,
    status,
  } = project;

  // Fallback image if thumbnail is invalid
  const displayImage = thumbnail || "/images/projects/startupforge.png";

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${
        featured
          ? "border-blue-500/30 dark:border-sky-500/30 bg-white/90 dark:bg-slate-900/90 shadow-md shadow-blue-500/5 dark:shadow-sky-500/5 hover:border-blue-500/60 dark:hover:border-sky-500/60"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700"
      } hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={displayImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {category && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
              {category}
            </span>
          )}
          {featured && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-600/90 backdrop-blur-md text-white shadow-xs">
              Featured
            </span>
          )}
        </div>

        {/* Top Right Status (if draft or archived, mostly useful for admin) */}
        {status && status !== "published" && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-amber-500/90 text-white capitalize">
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
          <Link href={`/projects/${slug}`}>
            {title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          {shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
              +{technologies.length - 5}
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-sky-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                title="View Live Application"
              >
                <FiExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {frontendRepository && (
              <a
                href={frontendRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Frontend GitHub Repository"
                aria-label="Frontend GitHub Repository"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}

            {backendRepository && !frontendRepository && (
              <a
                href={backendRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Backend GitHub Repository"
                aria-label="Backend GitHub Repository"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors group/link"
          >
            <span>Case Study</span>
            <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
