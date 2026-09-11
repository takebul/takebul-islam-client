import Image from "next/image";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";

export function ProjectCard({ project, featured = false }) {
  const {
    title,
    subtitle,
    shortDescription,
    category,
    thumbnail,
    technologies = [],
    liveUrl,
    frontendRepository,
    backendRepository,
    keyFeatures = [],
    status,
  } = project;

  // Fallback image if thumbnail is invalid
  const displayImage = thumbnail || "/images/projects/startupforge.png";

  // Clean hostname display for browser mockup bar
  let displayHost = "";
  try {
    if (liveUrl) {
      displayHost = new URL(liveUrl).hostname;
    }
  } catch {
    displayHost = liveUrl || "";
  }

  // Display top 3-4 key engineering features
  const displayBullets = Array.isArray(keyFeatures) ? keyFeatures.slice(0, 3) : [];

  return (
    <div
      className={`group relative flex flex-col rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
        featured
          ? "border-cyan-500/30 dark:border-cyan-500/30 bg-white/95 dark:bg-slate-900/90 shadow-lg shadow-cyan-500/5 dark:shadow-cyan-500/10 hover:border-cyan-500/60 dark:hover:border-cyan-400/60"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700"
      } hover:-translate-y-1 hover:shadow-2xl`}
    >
      {/* Browser Window Mockup Frame */}
      <div className="relative w-full overflow-hidden bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        {/* macOS Chrome Header Bar */}
        <div className="h-8 px-3.5 flex items-center justify-between bg-slate-100/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
          </div>

          {displayHost && (
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="truncate max-w-[200px]">{displayHost}</span>
            </div>
          )}

          <div className="w-12 text-right">
            {category && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                {category}
              </span>
            )}
          </div>
        </div>

        {/* Live Website Screenshot */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
          <Image
            src={displayImage}
            alt={`${title} — ${subtitle || "Full-Stack Web Application"}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/30">
                Featured Project
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content Container */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 space-y-4">
        {/* Title & Subtitle */}
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {title}
            </h3>
            {status && status !== "published" && (
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 capitalize">
                {status}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {shortDescription}
        </p>

        {/* Key Engineering Highlights (Recruiter Focus) */}
        {displayBullets.length > 0 && (
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
              Key Engineering Features
            </span>
            <ul className="space-y-1.5">
              {displayBullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  <FiCheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Badges */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Action Hub (Live Demo + Client + Server) */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
          {/* Primary Live Demo Button */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
              title="Open Live Application"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}

          {/* Frontend Repository */}
          {frontendRepository && (
            <a
              href={frontendRepository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 transition-colors"
              title="Frontend Client GitHub Repository"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>Client Code</span>
            </a>
          )}

          {/* Backend Repository */}
          {backendRepository && (
            <a
              href={backendRepository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700 transition-colors"
              title="Backend Server GitHub Repository"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>Server Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
