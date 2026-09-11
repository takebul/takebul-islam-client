import Link from "next/link";
import {
  FiDownload,
  FiExternalLink,
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
} from "react-icons/fi";

export const metadata = {
  title: "Resume & Credentials",
  description:
    "Review Takebul Islam's official full-stack web developer resume, technical skills, projects, and educational background. Download the official PDF or view via Google Docs.",
};

export default function ResumePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action Header Banner */}
        <div className="p-6 sm:p-8 rounded-3xl border border-blue-200/80 dark:border-sky-900/60 bg-blue-50/60 dark:bg-sky-950/30 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
              Official Resume
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Takebul Islam
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Full-Stack Web Developer • Available for Full-Time, Remote & Hybrid Roles
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Takebul_Islam_Resume.pdf"
              download="Takebul_Islam_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="https://docs.google.com/document/d/1WRY3zXw2sC7Yz-AT9gkw7APiPQ5o9vRXBxy0EzppeZY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Google Docs</span>
            </a>
          </div>
        </div>

        {/* Paper Style Resume Sheet */}
        <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md space-y-10">
          {/* Header Contact Block */}
          <div className="text-center pb-8 border-b border-slate-100 dark:border-slate-800 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              TAKEBUL ISLAM
            </h2>
            <p className="text-base font-semibold text-blue-600 dark:text-sky-400">
              Full-Stack Web Developer
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <FiMapPin className="text-blue-500" /> Nazirpur, Pirojpur, Bangladesh
              </span>
              <span>•</span>
              <a href="tel:+8801799439775" className="hover:text-blue-600 dark:hover:text-sky-400">
                +880 1799-439775
              </a>
              <span>•</span>
              <a href="mailto:takebulislam@gmail.com" className="hover:text-blue-600 dark:hover:text-sky-400 font-medium">
                takebulislam@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-sky-400">Portfolio</Link>
              <span>•</span>
              <a href="https://github.com/takebul" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-sky-400">GitHub</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/takebulislam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-sky-400">LinkedIn</a>
            </div>
          </div>

          {/* Career Objective */}
          <section className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Career Objective
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Full-Stack Web Developer with hands-on experience building and shipping complete web applications using React, Next.js, and Node.js. Comfortable across both frontend and backend, including implementing authentication and access-control logic. Enjoys turning ideas into working features and focuses on writing clean, scalable logic that makes a product feel modern and polished. Seeking an entry-level remote or hybrid role—full-time, internship, or freelance—to keep growing toward becoming a well-rounded full-stack developer.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <p>
                <strong className="text-slate-900 dark:text-white">Languages:</strong> HTML5, CSS3, JavaScript (ES6+)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Frontend:</strong> React, Next.js, Tailwind CSS, HeroUI, DaisyUI, Lenis, GSAP, Framer Motion, Recharts
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Backend:</strong> Node.js, Express.js, JWT, Better Auth, REST API, Stripe
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Database:</strong> MongoDB
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Tools:</strong> Git, GitHub, VS Code, ESLint, Prettier, npm, Vercel, Netlify, Render
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">AI Workflow:</strong> Gemini, GitHub Copilot, Claude, ChatGPT
              </p>
            </div>
          </section>

          {/* Production Projects */}
          <section className="space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Projects
            </h3>

            {/* StartupForge */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  StartupForge
                </h4>
                <div className="flex items-center gap-3 text-xs font-medium text-blue-600 dark:text-sky-400">
                  <a href="https://github.com/takebul/startupforge-client" target="_blank" rel="noopener noreferrer" className="hover:underline">Client</a>
                  <span>|</span>
                  <a href="https://github.com/takebul/startupforge-server" target="_blank" rel="noopener noreferrer" className="hover:underline">Server</a>
                  <span>|</span>
                  <a href="https://startupforge-app.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">Live Site</a>
                </div>
              </div>
              <p className="text-xs italic text-slate-600 dark:text-slate-400">
                A two-sided marketplace web app connecting early-stage startup founders with collaborators — developers, designers, and growth specialists.
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Tech Stack: Next.js, React, Node.js, Express.js, MongoDB, Better Auth, Stripe, Framer Motion, Recharts, Tailwind CSS
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1 leading-relaxed">
                <li>Built separate founder and collaborator dashboards with opportunity postings and an applicant/application tracker.</li>
                <li>Required a 100% complete profile before a collaborator could apply, and enforced plan-based application limits.</li>
                <li>Implemented role-based access control with a dynamic homepage banner for guests, founders, collaborators, and admins.</li>
                <li>Protected API routes with token-authentication middleware that verifies session tokens and user role.</li>
                <li>Built a separate Admin Dashboard with real-time platform stats, a startup moderation workflow, and a user ban/unban system.</li>
                <li>Implemented Stripe-based premium subscriptions with a &quot;Verified&quot; badge, a transactional email system, and bookmark/notification features.</li>
                <li>Debugged and fixed real production issues after deployment, including data-handling and update/delete bugs.</li>
              </ul>
            </div>

            {/* TutorBook */}
            <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  TutorBook
                </h4>
                <div className="flex items-center gap-3 text-xs font-medium text-blue-600 dark:text-sky-400">
                  <a href="https://github.com/takebul/tutorbook-client" target="_blank" rel="noopener noreferrer" className="hover:underline">Client</a>
                  <span>|</span>
                  <a href="https://github.com/takebul/tutorbook-server" target="_blank" rel="noopener noreferrer" className="hover:underline">Server</a>
                  <span>|</span>
                  <a href="https://tutorbook-platform.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">Live Site</a>
                </div>
              </div>
              <p className="text-xs italic text-slate-600 dark:text-slate-400">
                A tutor-booking platform where students can browse verified tutors by subject and schedule, and book sessions directly.
              </p>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Tech Stack: Next.js, React, Node.js, Express.js, MongoDB, Better Auth, JWT/JWKS, Swiper, Tailwind CSS
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1 leading-relaxed">
                <li>Built tutor listing and profile pages with subject, schedule, and hourly-rate details.</li>
                <li>Built a booking flow with slot availability and session-date checks.</li>
                <li>Used Better Auth for email/password and Google login, issuing JWTs verified server-side via a remote JWKS key set.</li>
                <li>Built name-and-subject search with MongoDB $regex and date-range filtering with $gte/$lte.</li>
                <li>Implemented a logged-in password-change feature and a dark/light theme toggle.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Education
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Bachelor of Arts (Honours) in English
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Suhrawardy Government College, Pirojpur • 1st Year (Honours)
                  </p>
                </div>
                <span className="font-medium text-slate-500 mt-1 sm:mt-0">2025 – Present</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Alim — Higher Secondary / Intermediate Equivalent
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sarsina Darussunnat Kamil Madrasah, Pirojpur • Bangladesh Madrasah Education Board • GPA: 4.71/5.00
                  </p>
                </div>
                <span className="font-medium text-slate-500 mt-1 sm:mt-0">2024</span>
              </div>
            </div>
          </section>

          {/* Certifications & Coursework */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Certifications & Coursework
            </h3>
            <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1 leading-relaxed">
              <li>
                <strong className="text-slate-900 dark:text-white">Full-Stack Web Development</strong> — Programming Hero, Certificate of Completion with Excellence (Jan – Sep 2026)
              </li>
              <li>Completed all Programming Hero assignments with full marks.</li>
            </ul>
          </section>

          {/* Additional Information */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Additional Information
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p>
                <strong className="text-slate-900 dark:text-white">Languages Spoken:</strong> Bangla (Native), English (Professional Working Proficiency)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Work Preference:</strong> Remote / Hybrid / Onsite — Full-time, Internship, or Freelance
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
