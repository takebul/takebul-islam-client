"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiDownload,
  FiChevronDown,
  FiCheckCircle,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiTerminal,
  FiStar,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { RollingNumber } from "@/components/ui/RollingNumber";

const TITLES = [
  "Full-Stack Web Developer",
  "React & Next.js Builder",
  "Node.js & Express Engineer",
  "MongoDB Database Specialist",
];

const RESUME_URL =
  "https://docs.google.com/document/d/1WRY3zXw2sC7Yz-AT9gkw7APiPQ5o9vRXBxy0EzppeZY/export?format=pdf";

// High-end studio edited portraits in 3 perspectives:
// Left Angle: takebul-left.jpg, Front View: takebul-front.jpg, Right Angle: takebul-left-to-right.jpg
const PHOTO_OPTIONS = [
  {
    id: "left-angle",
    label: "Left Angle",
    src: "/images/takebul-left.jpg",
    badge: "Left Angle",
    tag: "STUDIO_3D",
    objectPos: "object-center",
  },
  {
    id: "front-view",
    label: "Front View",
    src: "/images/takebul-front.jpg",
    badge: "Direct Frontal",
    tag: "PROD_READY",
    objectPos: "object-center",
  },
  {
    id: "right-angle",
    label: "Right Angle",
    src: "/images/takebul-left-to-right.jpg",
    badge: "Right Angle",
    tag: "FULL_STACK",
    objectPos: "object-center",
  },
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(PHOTO_OPTIONS[0]);

  // Dynamic typewriter cycler
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const speed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO INFORMATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left pt-2 lg:pt-0"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 dark:border-cyan-500/40 backdrop-blur-md mb-4 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-semibold text-cyan-800 dark:text-cyan-300 tracking-wide uppercase">
                Available for Projects &amp; Full-Time
              </span>
            </div>

            {/* Developer Code Intro */}
            <p className="text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm mb-2 font-medium tracking-wide flex items-center justify-center lg:justify-start gap-1.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">const</span> developer ={" "}
              <span className="text-amber-600 dark:text-amber-300 font-semibold">&quot;Takebul Islam&quot;</span>;
            </p>

            {/* Name Heading with Vivid Gradient for Both Light & Dark Modes */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-slate-900 via-sky-800 to-cyan-600 dark:from-white dark:via-cyan-100 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-xs">
                Takebul Islam
              </span>
            </h1>

            {/* Dynamic Typewriter Role Box */}
            <div className="h-10 mb-4 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800 shadow-xs text-base sm:text-xl font-semibold">
                <FiTerminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="font-mono text-cyan-700 dark:text-cyan-300">
                  {displayText}
                  <span className="animate-pulse text-cyan-500 font-bold ml-0.5">_</span>
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 dark:text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5">
              Full-Stack Developer focused on engineering real-world, production-ready web applications. Experienced in developing complete workflows including authentication, role-based access control, REST APIs, CRUD operations, protected routes, and responsive user interfaces.
            </p>

            {/* Core Stack Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1 font-semibold">
                <FiCode className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> Stack:
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-xs font-mono font-medium text-slate-800 dark:text-cyan-300 shadow-2xs">
                <SiNextdotjs className="w-3 h-3" /> Next.js 16
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/20 text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 shadow-2xs">
                <SiReact className="w-3 h-3 text-cyan-500" /> React 19
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 shadow-2xs">
                <SiNodedotjs className="w-3 h-3 text-emerald-500" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/20 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 shadow-2xs">
                <SiMongodb className="w-3 h-3 text-emerald-500" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-sky-500/20 text-xs font-mono font-medium text-sky-700 dark:text-sky-300 shadow-2xs">
                <SiTailwindcss className="w-3 h-3 text-sky-500" /> Tailwind
              </span>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-500 dark:via-sky-500 dark:to-blue-600 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-98 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Takebul-Islam-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-800 dark:text-cyan-300 border border-slate-300 dark:border-cyan-500/40 bg-white/90 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-cyan-500/10 hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/20 hover:scale-[1.03] active:scale-98 transition-all duration-300 shadow-2xs"
              >
                <FiDownload className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Quick Contact Links */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/takebul"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-2xs"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/takebulislam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-2xs"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:takebulislam@gmail.com"
                  aria-label="Email Takebul"
                  className="p-2.5 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110 shadow-2xs"
                >
                  <FiMail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: SLEEK ARCHITECTURAL CARD ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center select-none relative"
          >
            {/* Ambient Radial Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-sky-400/20 dark:from-cyan-500/25 dark:via-blue-600/20 dark:to-sky-400/25 blur-3xl rounded-[2.5rem] -z-10 animate-pulse [animation-duration:6s]" />

            <div className="relative w-full max-w-[320px] sm:max-w-[345px]">
              
              {/* Photo Switcher Selector Bar (Studio Angle vs Studio Front only) */}
              <div className="flex items-center justify-between p-1 mb-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-md gap-1">
                {PHOTO_OPTIONS.map((opt) => {
                  const isActive = selectedPhoto.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedPhoto(opt)}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer text-center ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white shadow-xs shadow-cyan-500/30"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Main Visual Card Container */}
              <div className="relative rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-950/95 border border-cyan-500/40 dark:border-cyan-500/30 shadow-[0_15px_40px_rgba(6,182,212,0.15)] dark:shadow-[0_15px_40px_rgba(6,182,212,0.2)] backdrop-blur-2xl group">
                
                {/* Micro Cyber Corner Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-500 dark:border-cyan-400/80 rounded-tl pointer-events-none" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-500 dark:border-cyan-400/80 rounded-tr pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-500 dark:border-cyan-400/80 rounded-bl pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-500 dark:border-cyan-400/80 rounded-br pointer-events-none" />

                {/* Inner Image Container with 3:3.7 Aspect Ratio */}
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[3/3.7] bg-slate-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPhoto.src}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={selectedPhoto.src}
                        alt="Takebul Islam — Full-Stack Web Developer"
                        fill
                        priority
                        sizes="(max-width: 768px) 320px, 345px"
                        className={`object-cover ${selectedPhoto.objectPos} filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700`}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Dark Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Live Badge */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-semibold text-cyan-300 shadow-md">
                      <FiStar className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
                      <span>{selectedPhoto.badge}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-400">
                      {selectedPhoto.tag}
                    </span>
                  </div>

                  {/* Bottom Identity Plaque inside Photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/90 text-left shadow-xl">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                          <span>Takebul Islam</span>
                          <FiCheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        </h3>
                        <p className="text-[11px] text-slate-300">Full-Stack Web Developer</p>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        VERIFIED
                      </span>
                    </div>

                    {/* Micro Tech Row */}
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-800/70 text-[10px] text-slate-300">
                      <span className="flex items-center gap-1 text-cyan-300 font-medium">
                        <SiNextdotjs className="w-2.5 h-2.5" /> Next.js 16
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-cyan-300 font-medium">
                        <SiReact className="w-2.5 h-2.5" /> React 19
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-emerald-300 font-medium">
                        <SiNodedotjs className="w-2.5 h-2.5" /> Express
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Chip 1 (Mid-Left) */}
              <motion.div
                animate={{ y: [-3, 5, -3] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -left-3 sm:-left-6 top-1/4 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-cyan-500/40 text-[11px] font-semibold text-slate-800 dark:text-slate-200 shadow-md items-center gap-1.5 z-20"
              >
                <SiReact className="w-3.5 h-3.5 text-cyan-500 animate-spin-slow" />
                <span>Next.js 16 + React 19</span>
              </motion.div>

              {/* Floating Orbit Chip 2 (Mid-Right) */}
              <motion.div
                animate={{ y: [5, -3, 5] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -right-3 sm:-right-6 bottom-1/4 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-emerald-500/40 text-[11px] font-semibold text-slate-800 dark:text-slate-200 shadow-md items-center gap-1.5 z-20"
              >
                <SiNodedotjs className="w-3.5 h-3.5 text-emerald-500" />
                <span>Node &amp; Express APIs</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* ================= BOTTOM STATS BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80"
        >
          <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm text-center hover:border-cyan-500/40 transition-colors shadow-2xs group">
            <div className="text-2xl sm:text-3xl font-extrabold mb-0.5 font-mono">
              <RollingNumber
                value={15}
                suffix="+"
                gradient="from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500"
                delay={0.15}
              />
            </div>
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Projects Shipped</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm text-center hover:border-cyan-500/40 transition-colors shadow-2xs group">
            <div className="text-2xl sm:text-3xl font-extrabold mb-0.5 font-mono">
              <RollingNumber
                value={12}
                suffix="+"
                gradient="from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500"
                delay={0.3}
              />
            </div>
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Modern Technologies</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm text-center hover:border-cyan-500/40 transition-colors shadow-2xs group">
            <div className="text-2xl sm:text-3xl font-extrabold mb-0.5 font-mono">
              <RollingNumber
                value={100}
                suffix="%"
                gradient="from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-500"
                delay={0.45}
              />
            </div>
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Commitment to Quality</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm text-center hover:border-cyan-500/40 transition-colors shadow-2xs group">
            <div className="text-2xl sm:text-3xl font-extrabold mb-0.5 font-mono">
              <RollingNumber
                prefix="< "
                value={24}
                suffix="h"
                gradient="from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-500"
                delay={0.6}
              />
            </div>
            <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Fast Turnaround</div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="text-slate-400 hover:text-cyan-500 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors p-1"
        >
          <FiChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
