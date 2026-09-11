import Link from "next/link";
import { FiArrowRight, FiAward, FiBookOpen, FiCode, FiUser } from "react-icons/fi";

export function AboutPreview() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            About Takebul
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Building software with passion, engineering discipline, and practical purpose.
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a Full-Stack Web Developer based in Nazirpur, Pirojpur, Bangladesh. My journey combines rigorous hands-on software development with formal academic discipline.
          </p>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I specialize in the modern JavaScript ecosystem—building fast, interactive user interfaces with React and Next.js, and wiring them into reliable backend APIs powered by Node.js, Express, Better Auth, and MongoDB. I focus on creating complete, deployable products where security, database efficiency, and user experience work in harmony.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors group"
            >
              <span>Read My Full Story & Background</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Key Credentials Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-sky-950/60 text-blue-600 dark:text-sky-400 flex-shrink-0">
                <FiAward className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Full-Stack Web Development
                </h4>
                <p className="text-xs text-blue-600 dark:text-sky-400 font-medium mt-0.5">
                  Programming Hero • Certificate of Excellence
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Graduated with top marks across every coursework assignment, covering modern full-stack architectures.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex-shrink-0">
                <FiBookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Bachelor of Arts (Honours) in English
                </h4>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                  Suhrawardy Government College, Pirojpur (2025 – Present)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Cultivating clear written analysis, critical communication, and structured thinking.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                <FiCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Production Development Focus
                </h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                  2+ Real-World Applications Shipped
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Demonstrated ability to deploy complete marketplace and booking systems with live user flows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
