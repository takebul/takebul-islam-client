import Link from "next/link";
import { FiMail, FiFileText, FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export function ContactCta() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Resume CTA */}
          <div className="p-8 sm:p-10 rounded-3xl border border-blue-200/80 dark:border-sky-900/60 bg-gradient-to-br from-blue-50/50 via-white to-sky-50/30 dark:from-sky-950/20 dark:via-slate-900 dark:to-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-sky-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center mb-6">
                <FiFileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Need a comprehensive resume?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Download my verified PDF resume or inspect my live Google Docs resume featuring detailed project breakdowns, technical coursework, and academic credentials.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/Takebul_Islam_Resume.pdf"
                download="Takebul_Islam_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-xs transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
              >
                <span>View Credentials</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Work Together CTA */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center mb-6">
                <FiMail className="w-6 h-6 text-blue-600 dark:text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Let's build something useful.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Looking for a full-stack engineer who takes end-to-end ownership? I am available for full-time roles, remote contracts, and engineering collaborations.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-medium text-sm shadow-xs transition-colors"
                >
                  <FiMail className="w-4 h-4" />
                  <span>Send a Message</span>
                </Link>

                <a
                  href="mailto:takebulislam@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
                >
                  <span>takebulislam@gmail.com</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span>Connect directly:</span>
                <a
                  href="https://github.com/takebul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/takebulislam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
