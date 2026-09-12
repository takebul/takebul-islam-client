"use client";

import { FiAward, FiBookOpen, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
  {
    period: "Jan 2026 – Sep 2026",
    title: "Full-Stack Web Development",
    institution: "Programming Hero — Certificate of Completion with Excellence",
    description:
      "Comprehensive, production-focused engineering curriculum spanning modern full-stack development. Successfully mastered React 19, Next.js App Router, Node.js, Express.js REST APIs, MongoDB schema architecture, Better Auth, and Stripe payment integration. Completed every assignment with full marks.",
    badges: ["Full Marks Record", "Next.js & React 19", "Express & MongoDB", "Better Auth & Stripe"],
    icon: FiAward,
    highlight: true,
  },
  {
    period: "2025 – Present",
    title: "Bachelor of Arts (Honours) in English",
    institution: "Suhrawardy Government College, Pirojpur • 1st Year (Honours)",
    description:
      "Developing advanced professional English language proficiency, analytical reasoning, and structured technical documentation capabilities that empower clear collaboration with global remote engineering teams.",
    badges: ["Honours 1st Year", "Analytical Writing", "Global Communication"],
    icon: FiBookOpen,
    highlight: false,
  },
  {
    period: "2024",
    title: "Alim — Higher Secondary / Intermediate Equivalent",
    institution: "Sarsina Darussunnat Kamil Madrasah, Pirojpur • Bangladesh Madrasah Education Board",
    description:
      "Achieved outstanding academic distinction with GPA 4.71 / 5.00. Cultivated rigorous discipline, persistent focus, and foundational logical problem-solving capabilities.",
    badges: ["GPA: 4.71 / 5.00", "Academic Distinction"],
    icon: FiCheckCircle,
    highlight: false,
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
          Education & Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          Academic Journey & Certifications
        </h2>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
          A track record of continuous learning, academic excellence, and hands-on software development mastery.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Vertical Gradient Connector Line with Scroll Reveal */}
        <motion.div
          initial={{ scaleY: 0, originY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-sky-400 to-indigo-500 opacity-40 dark:opacity-50"
        />

        <div className="space-y-12">
          {TIMELINE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.15 + 0.1 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-lg z-10"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>

                {/* Timeline Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                      item.highlight
                        ? "border-blue-500/40 dark:border-sky-500/40 bg-white dark:bg-slate-900 shadow-lg shadow-blue-500/5 dark:shadow-sky-500/5"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2">
                      <FiCalendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {item.institution}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                      {item.badges.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty opposite placeholder to keep symmetry */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
