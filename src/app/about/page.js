import Link from "next/link";
import Image from "next/image";
import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiCompass,
  FiCpu,
  FiGlobe,
  FiMapPin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Takebul Islam, full-stack web developer based in Nazirpur, Pirojpur, Bangladesh. Discover his development journey, philosophy, education, and credentials.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Eyebrow */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            About & Journey
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Engineering real solutions with curiosity and discipline.
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Full-Stack Web Developer with hands-on experience building and
            shipping complete web applications with modern React, Next.js,
            Node.js, and MongoDB.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Portrait & Quick Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-[4/5] shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Takebul Islam"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-panel">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Takebul Islam
                </p>
                <p className="text-xs text-blue-600 dark:text-sky-400 font-medium">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>

            {/* Quick At-a-Glance Info */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-3.5 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-blue-500" /> Location
                </span>
                <span className="font-medium text-slate-900 dark:text-white text-right">
                  Nazirpur, Pirojpur, Bangladesh
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiCompass className="w-4 h-4 text-blue-500" /> Work
                  Preference
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  Remote / Hybrid / Onsite
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiGlobe className="w-4 h-4 text-blue-500" /> Languages
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  Bangla (Native), English
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FiMail className="w-4 h-4 text-blue-500" /> Contact
                </span>
                <a
                  href="mailto:takebulislam@gmail.com"
                  className="font-medium text-blue-600 dark:text-sky-400 hover:underline"
                >
                  takebulislam@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="/Takebul_Islam_Resume.pdf"
                download="Takebul_Islam_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs"
              >
                <FiDownload className="w-4 h-4" />
                <span>Get Resume</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
              >
                <span>Hire Me</span>
              </Link>
            </div>
          </div>

          {/* Narrative / Career Objective / Philosophy */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-5">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Career Objective & Technical Drive
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a Full-Stack Web Developer passionate about turning complex
                product requirements into resilient, elegant, and user-friendly
                web applications.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlike developers who only scratch the surface of frontend
                templates or specialize strictly in isolated code snippets, I
                take pride in understanding the complete architectural pipeline:
                from crafting responsive component trees with Tailwind CSS and
                Next.js, to structuring REST API endpoints with Express,
                protecting routes with cryptographic JWKS tokens, and modeling
                high-throughput MongoDB collections.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am actively seeking an entry-level remote, hybrid, or on-site
                role (full-time, internship, or contract) where I can contribute
                to high-impact production engineering teams while continually
                expanding my skills.
              </p>
            </div>

            {/* Development Approach */}
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                My Development Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <FiCode className="text-blue-500" />
                    <span>Clean, Predictable Architecture</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    I believe readability is a key engineering metric. Code
                    should be straightforward, modular, and easy for any
                    teammate to maintain and audit.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <FiCpu className="text-sky-500" />
                    <span>Server-Enforced Security</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Client-side role gating is cosmetic; true security resides
                    on the server. I protect backend routes with verified
                    cryptographic tokens and role policies.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <FiGlobe className="text-emerald-500" />
                    <span>User Experience & Performance</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    No layout shifts, accessible contrast, responsive designs
                    across mobile and desktop, and meaningful
                    empty/loading/error feedback.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <FiCompass className="text-indigo-500" />
                    <span>Continuous Improvement</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Shipping production code reveals real edge cases. I embrace
                    debugging and refining features based on live usage.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education & Certifications
              </h2>

              <div className="space-y-6">
                {/* Programming Hero */}
                <div className="relative pl-6 border-l-2 border-blue-500 space-y-1">
                  <span className="text-xs font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wide">
                    Jan 2026 – Sep 2026
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Full-Stack Web Development — Certificate of Completion with
                    Excellence
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Programming Hero
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Intensive engineering program covering modern JavaScript,
                    React, Next.js, Node.js, Express, MongoDB, Better Auth,
                    Stripe, and full-stack deployment. Successfully completed
                    every assignment with full marks.
                  </p>
                </div>

                {/* English Honours */}
                <div className="relative pl-6 border-l-2 border-purple-500 space-y-1">
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                    2025 – Present
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Bachelor of Arts (Honours) in English
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Suhrawardy Government College, Pirojpur • 1st Year (Honours)
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Developing professional English communication proficiency,
                    critical literature analysis, and documentation skills that
                    elevate engineering collaboration.
                  </p>
                </div>

                {/* Alim */}
                <div className="relative pl-6 border-l-2 border-emerald-500 space-y-1">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    2024
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Alim — Higher Secondary / Intermediate Equivalent
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Sarsina Darussunnat Kamil Madrasah, Pirojpur • Bangladesh
                    Madrasah Education Board
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Achieved GPA 4.71 / 5.00 with academic discipline and high
                    distinction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
