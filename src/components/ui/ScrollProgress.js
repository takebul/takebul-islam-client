"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribeY = scrollY.on("change", (latest) => {
      setShowTopButton(latest > 350);
    });

    const unsubscribeProgress = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeY();
      unsubscribeProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Fixed Neon Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent">
        <motion.div
          style={{ scaleX }}
          className="h-full w-full origin-left bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        />
      </div>

      {/* Floating Circular Back-to-Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={
          showTopButton
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: 20 }
        }
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="relative group p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-cyan-500/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          {/* Circular Progress Ring */}
          <svg className="w-9 h-9 -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="2.5"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray={94.2}
              strokeDashoffset={94.2 - (94.2 * scrollPercent) / 100}
              strokeLinecap="round"
              className="text-cyan-500 dark:text-cyan-400 transition-all duration-150"
            />
          </svg>

          {/* Center Arrow Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:-translate-y-0.5 transition-all">
            <FiArrowUp className="w-4 h-4" />
          </div>
        </button>
      </motion.div>
    </>
  );
}
