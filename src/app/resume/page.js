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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Full-Stack Web Developer • Available for Full-Time, Remote &
              Hybrid Roles
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://docs.google.com/document/d/1WRY3zXw2sC7Yz-AT9gkw7APiPQ5o9vRXBxy0EzppeZY/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
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
                <FiMapPin className="text-blue-500" /> Nazirpur, Pirojpur,
                Bangladesh
              </span>
              <span>•</span>
              <a
                href="tel:+8801799439775"
                className="hover:text-blue-600 dark:hover:text-sky-400"
              >
                +880 1799-439775
              </a>
              <span>•</span>
              <a
                href="mailto:takebulislam@gmail.com"
                className="hover:text-blue-600 dark:hover:text-sky-400 font-medium"
              >
                takebulislam@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-sky-400"
              >
                Portfolio
              </Link>
              <span>•</span>
              <a
                href="https://github.com/takebul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-sky-400"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/takebulislam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-sky-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <section className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Career Objective
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Full-Stack Web Developer with hands-on experience building and
              shipping complete web applications using React, Next.js, and
              Node.js. Comfortable across both frontend and backend, including
              implementing authentication and access-control logic. Enjoys
              turning ideas into working features and focuses on writing clean,
              scalable logic that makes a product feel modern and polished.
              Seeking an entry-level remote or hybrid role—full-time,
              internship, or freelance—to keep growing toward becoming a
              well-rounded full-stack developer.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Languages:
                </strong>{" "}
                HTML5, CSS3, JavaScript (ES6+)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Frontend:
                </strong>{" "}
                React, Next.js, React Router, Tailwind CSS, HeroUI, DaisyUI,
                Lenis, GSAP, Framer Motion, Recharts
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Backend:
                </strong>{" "}
                Node.js, Express.js, MongoDB Atlas, CRUD, REST APIs
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Authentication &amp; Security:
                </strong>{" "}
                JWT Authentication, Google OAuth, Better Auth, Stripe
                Integration
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Developer Tools &amp; Deployment:
                </strong>{" "}
                Git, GitHub, VS Code, npm, Prettier, ESLint, Vercel, Netlify,
                Render, Chrome DevTools, Figma-to-Code
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  AI-Assisted Workflow:
                </strong>{" "}
                Gemini, GitHub Copilot, Claude, ChatGPT
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
                  StartupForge <span className="font-semibold text-slate-600 dark:text-slate-300 text-sm">— Two-Sided Founder &amp; Collaborator Marketplace</span>
                </h4>
                <div className="flex items-center gap-3 text-xs font-medium text-blue-600 dark:text-sky-400">
                  <a
                    href="https://github.com/takebul/startup-forge-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Client
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/takebul/startup-forge-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Server
                  </a>
                  <span>|</span>
                  <a
                    href="https://startupforgelimited.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Site
                  </a>
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Tech Stack: Next.js, React, Node.js, Express.js, MongoDB, Better
                Auth, Stripe, Framer Motion, Recharts, Tailwind CSS
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Architected a responsive two-sided marketplace</strong> connecting startup founders and collaborators, featuring dedicated role-based dashboards (Founder, Collaborator, Admin) with real-time application tracking and interactive Recharts analytics.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Engineered robust Role-Based Access Control (RBAC)</strong> and token-verification middleware in Express.js, securing API endpoints and enforcing strict profile-completion rules before application submission.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Integrated Stripe subscription payments</strong> with automated webhook handling to grant tiered plan limits, automated verified badges, and transactional notification workflows.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Built a centralized Admin Management Suite</strong> with live platform telemetry, automated startup moderation workflows, and account moderation controls (ban/unban).
                </li>
              </ul>
            </div>

            {/* TutorBook */}
            <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  TutorBook <span className="font-semibold text-slate-600 dark:text-slate-300 text-sm">— Verified On-Demand Tutor Booking Platform</span>
                </h4>
                <div className="flex items-center gap-3 text-xs font-medium text-blue-600 dark:text-sky-400">
                  <a
                    href="https://github.com/takebul/tutor-booking-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Client
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/takebul/tutor-booking-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Server
                  </a>
                  <span>|</span>
                  <a
                    href="https://tutor-booking-client.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Site
                  </a>
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Tech Stack: Next.js, React, Node.js, Express.js, MongoDB, Better
                Auth, JWT/JWKS, Swiper, Tailwind CSS
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Developed a full-stack tutor discovery and booking platform</strong>, enabling students to browse verified educators, inspect credentials/hourly rates, and schedule live sessions with slot conflict validation.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Implemented high-performance search and filtering</strong> using MongoDB $regex indexing and range operators ($gte/$lte) to query tutors across subjects, ratings, and date availability in real-time.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Secured authentication utilizing Better Auth</strong> (Google OAuth &amp; Credentials), generating stateless JWTs verified server-side through a remote JWKS keyset for secure, multi-device sessions.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Crafted an intuitive UI with Tailwind CSS, Swiper, and Framer Motion</strong>, featuring persistent dark/light theme switching, responsive layouts, and authenticated password credential updates.
                </li>
              </ul>
            </div>

            {/* Mango Books */}
            <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Mango Books <span className="font-semibold text-slate-600 dark:text-slate-300 text-sm">— Digital Library &amp; Book Lending Platform</span>
                </h4>
                <div className="flex items-center gap-3 text-xs font-medium text-blue-600 dark:text-sky-400">
                  <a
                    href="https://github.com/takebul/mango"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Client
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/takebul/mango-json-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Server
                  </a>
                  <span>|</span>
                  <a
                    href="https://mango-books-platform.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Site
                  </a>
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Tech Stack: React, Node.js, Express.js, Tailwind CSS, DaisyUI, Framer Motion
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Architected a community digital library platform</strong> featuring 45+ curated volumes, 14-day zero-fee instant lending, and automated return tracking.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Engineered dynamic catalog filtering and search</strong> with real-time stock availability, category browsing, and rating metrics.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Built an interactive personal bookshelf portal</strong> allowing authenticated users to manage active loans, track borrowing history, and bookmark future reads.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Designed a responsive, tactile user interface</strong> utilizing Tailwind CSS and DaisyUI with fluid micro-interactions and dark/light contrast.
                </li>
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
                <span className="font-medium text-slate-500 mt-1 sm:mt-0">
                  2025 – Present
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Alim — Higher Secondary / Intermediate Equivalent
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sarsina Darussunnat Kamil Madrasah, Pirojpur • Bangladesh
                    Madrasah Education Board • GPA: 4.71/5.00
                  </p>
                </div>
                <span className="font-medium text-slate-500 mt-1 sm:mt-0">
                  2024
                </span>
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
                <strong className="text-slate-900 dark:text-white">
                  Full-Stack Web Development
                </strong>{" "}
                — Programming Hero, Certificate of Completion with Excellence
                (Jan – Sep 2026)
              </li>
              <li>
                Completed all Programming Hero assignments with full marks.
              </li>
            </ul>
          </section>

          {/* Additional Information */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              Additional Information
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Languages Spoken:
                </strong>{" "}
                Bangla (Native), English (Professional Working Proficiency)
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">
                  Work Preference:
                </strong>{" "}
                Remote / Hybrid / Onsite — Full-time, Internship, or Freelance
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
