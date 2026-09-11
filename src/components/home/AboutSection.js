import Link from "next/link";
import { FiMapPin, FiCompass, FiGlobe, FiMail, FiDownload, FiArrowRight, FiCheck } from "react-icons/fi";

export function AboutSection() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          Engineering Real Products with Curiosity & Discipline
        </h2>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
          I don&apos;t just design interfaces or write fragmented scripts. I build complete, production-ready web applications backed by resilient APIs and secure databases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative & Quick Stats */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a Full-Stack Web Developer based in <strong className="text-slate-900 dark:text-white">Nazirpur, Pirojpur, Bangladesh</strong>. I enjoy turning raw ideas into working features and writing clean, scalable logic that makes software feel fast, secure, and modern.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            My experience spans frontend state and responsive UI architectures using React 19 and Next.js, as well as decoupled backend architectures powered by Express.js, MongoDB Atlas, and cryptographic JWKS authentication with Better Auth.
          </p>

          {/* Highlights checklist */}
          <div className="space-y-2.5 pt-2">
            {[
              "Complete full-stack development from system design to live cloud deployment",
              "Production-grade token authentication & role-based access control (RBAC)",
              "Optimized MongoDB data schemas with indexing, regex search, and atomic updates",
              "Passionate learner pursuing Bachelor of Arts (Honours) in English with high discipline",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-sky-950 text-blue-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCheck className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/Takebul_Islam_Resume.pdf"
              download="Takebul_Islam_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors group"
            >
              <span>Full Story & Credentials</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: macOS Dark Code Terminal */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1017] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-[#161b22] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-slate-400 text-xs font-semibold">
                developer.js — Takebul Islam
              </span>
              <div className="w-10" />
            </div>

            {/* Terminal Code Body */}
            <div className="p-6 text-slate-300 space-y-1.5 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
              </p>
              <p className="pl-5">
                <span className="text-sky-300">name</span>:{" "}
                <span className="text-emerald-400">&quot;Takebul Islam&quot;</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">role</span>:{" "}
                <span className="text-emerald-400">&quot;Full-Stack Web Developer&quot;</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">location</span>:{" "}
                <span className="text-emerald-400">&quot;Nazirpur, Pirojpur, Bangladesh&quot;</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">coreStack</span>: [
                <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Express.js&quot;</span>,{" "}
                <span className="text-amber-300">&quot;MongoDB&quot;</span>],
              </p>
              <p className="pl-5">
                <span className="text-sky-300">auth</span>: [
                <span className="text-amber-300">&quot;Better Auth&quot;</span>,{" "}
                <span className="text-amber-300">&quot;JWT/JWKS&quot;</span>,{" "}
                <span className="text-amber-300">&quot;RBAC Matrix&quot;</span>],
              </p>
              <p className="pl-5">
                <span className="text-sky-300">tools</span>: [
                <span className="text-amber-300">&quot;Git&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Vercel&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Stripe&quot;</span>,{" "}
                <span className="text-amber-300">&quot;Tailwind v4&quot;</span>],
              </p>
              <p className="pl-5">
                <span className="text-sky-300">focus</span>:{" "}
                <span className="text-emerald-400">&quot;Building complete apps from idea to deployment&quot;</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">available</span>:{" "}
                <span className="text-purple-400">true</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">coffee</span>:{" "}
                <span className="text-emerald-400">&quot;Always ☕&quot;</span>,
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
