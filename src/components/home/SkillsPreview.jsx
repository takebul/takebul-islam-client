"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const SKILL_GROUPS = [
  {
    category: "Languages & Core",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "React Router",
      "Tailwind CSS",
      "HeroUI",
      "DaisyUI",
      "Lenis & GSAP",
      "Framer Motion",
      "Recharts",
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "CRUD Architecture",
      "REST APIs",
    ],
  },
  {
    category: "Authentication & Security",
    skills: [
      "JWT Authentication",
      "Google OAuth",
      "Better Auth",
      "Stripe Integration",
    ],
  },
  {
    category: "Developer Tools & Cloud",
    skills: [
      "Git & GitHub",
      "VS Code",
      "npm",
      "Prettier & ESLint",
      "Vercel",
      "Netlify",
      "Render",
      "Chrome DevTools",
      "Figma-to-Code",
    ],
  },
  {
    category: "AI-Assisted Workflow",
    skills: ["Gemini", "GitHub Copilot", "Claude", "ChatGPT"],
  },
];

export function SkillsPreview() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
              {"// Technical Stack"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1.5">
              Core Skills &amp; Tools
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Technologies I use to design, build, test, and deploy resilient
              full-stack applications.
            </p>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group"
          >
            <span>Deep Dive Into Skills</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Skills Cards Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm shadow-xs hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/90 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  {group.skills.length} Techs
                </span>
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FiCheck className="w-2.5 h-2.5" />
                    </span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
