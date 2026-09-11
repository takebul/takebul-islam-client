import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowUpRight, FiHeart } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-mono text-sm">
                TI
              </span>
              <span>Takebul Islam</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
              Full-Stack Web Developer building complete, production-ready web applications from idea to deployment. Specializing in Next.js, React, Node.js, Express.js, and MongoDB.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <FiMapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Nazirpur, Pirojpur, Bangladesh</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  About & Journey
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  Resume & Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & External */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://github.com/takebul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                  <FiArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/takebulislam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  <FiLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <FiArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:takebulislam@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  <FiMail className="w-4 h-4" />
                  <span>takebulislam@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1WRY3zXw2sC7Yz-AT9gkw7APiPQ5o9vRXBxy0EzppeZY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>Google Docs Resume</span>
                  <FiArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Takebul Islam. Built with Next.js, React, Node.js & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Designed for performance, clarity, and real-world impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
