"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Senior Brand Identity System: Takebul Islam
 * 
 * Design Philosophy:
 * - Pure Geometric Monogram: Precision-crafted interlocking "T" and "I" glyphs.
 * - Negative-Space Code Slash: The 45° parallel cut between the T crossbar and the I pillar
 *   reveals the universal developer forward-slash "/" syntax.
 * - Architectural Aerodynamics: Chamfered 45° terminals, calibrated line weights,
 *   and a floating diamond beacon node symbolizing root directory / execution.
 * - Dual-Chassis Harmony: Obsidian Glass in Dark Mode, Ceramic Precision in Light Mode.
 */
export function Logo({
  size = "md",
  showText = true,
  className = "",
  onClick,
  href = "/#hero",
}) {
  const sizeMap = {
    sm: {
      box: "w-8 h-8",
      svg: 32,
      text: "text-sm",
      subtext: "text-[9px] tracking-[0.16em]",
      gap: "gap-2",
    },
    md: {
      box: "w-9 h-9 sm:w-10 sm:h-10",
      svg: 40,
      text: "text-[15px] sm:text-[17px]",
      subtext: "text-[9.5px] tracking-[0.18em]",
      gap: "gap-2.5 sm:gap-3",
    },
    lg: {
      box: "w-12 h-12",
      svg: 48,
      text: "text-xl sm:text-2xl",
      subtext: "text-[11px] tracking-[0.2em]",
      gap: "gap-3.5",
    },
  };

  const current = sizeMap[size] || sizeMap.md;

  const content = (
    <div
      onClick={onClick}
      className={`group inline-flex items-center ${current.gap} select-none cursor-pointer ${className}`}
    >
      {/* ================= ICON MARK ================= */}
      <div className={`relative ${current.box} flex items-center justify-center shrink-0`}>
        {/* Ambient Neon Backlight Flare (Expands on Hover) */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-sky-500/25 to-blue-600/25 blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 pointer-events-none" />

        {/* Master SVG Identity Mark */}
        <svg
          viewBox="0 0 40 40"
          className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* High-Chroma Cyan to Sky Linear Gradient */}
            <linearGradient id="ti-v2-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="45%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Sky to Electric Indigo Linear Gradient */}
            <linearGradient id="ti-v2-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="55%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            {/* Chassis Outer Rim Gradient */}
            <linearGradient id="ti-v2-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.25" />
            </linearGradient>

            {/* Core Radial Atmosphere */}
            <radialGradient id="ti-v2-core" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#0369a1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Precision Squircle Chassis */}
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="10"
            className="fill-slate-900/95 dark:fill-slate-950/95"
            stroke="url(#ti-v2-border)"
            strokeWidth="1.5"
          />

          {/* Internal Radial Atmosphere Glow */}
          <rect x="2" y="2" width="36" height="36" rx="9" fill="url(#ti-v2-core)" />

          {/* Micro Cyber Corner Accents */}
          <path
            d="M 4 8 L 4 4 L 8 4"
            stroke="#00f2fe"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-75"
          />
          <path
            d="M 36 32 L 36 36 L 32 36"
            stroke="#6366f1"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-75"
          />

          {/* ================= THE 'T' GLYPH ================= */}
          {/*
            The letter T is precision-machined with:
            - A horizontal crossbar from x=8 to x=22
            - A 45° angled right terminal creating the parallel slash negative space
            - A central vertical stem descending to y=29 with rounded bottom terminal
          */}
          <path
            d="M 9.5 10.5 
               H 21.5 
               L 17.5 14.5 
               H 16.5 
               V 27.5 
               C 16.5 28.3 15.8 29 15 29 
               H 13.5 
               C 12.7 29 12 28.3 12 27.5 
               V 14.5 
               H 9.5 
               C 8.7 14.5 8 13.8 8 13 
               V 12 
               C 8 11.2 8.7 10.5 9.5 10.5 Z"
            fill="url(#ti-v2-cyan)"
          />

          {/* ================= THE 'I' GLYPH & SLASH ================= */}
          {/*
            The letter I stands parallel to the T stem:
            - Left edge at x=20.5 (creates uniform 4px vertical channel)
            - 45° angled top cut from (25, 10.5) to (21, 14.5) perfectly parallel to the T terminal
            - Vertical pillar descending to y=27.5 with rounded terminal
          */}
          <path
            d="M 25 10.5 
               L 20.8 14.7 
               C 20.3 15.2 20.3 15.8 20.3 16.5 
               V 27.5 
               C 20.3 28.3 21 29 21.8 29 
               H 23.3 
               C 24.1 29 24.8 28.3 24.8 27.5 
               V 14.5 
               L 25.8 13.5 
               C 26.4 12.9 26.4 11.9 25.8 11.3 
               L 25.5 11 
               C 25.3 10.8 25.1 10.6 25 10.5 Z"
            fill="url(#ti-v2-indigo)"
          />

          {/* ================= FLOATING BEACON NODE ================= */}
          {/*
            Diamond node hovering above the I pillar representing the dot on the 'i',
            execution node, and server heartbeat.
          */}
          <rect
            x="27"
            y="6.8"
            width="3.6"
            height="3.6"
            rx="0.9"
            transform="rotate(45 27 6.8)"
            fill="#00f2fe"
            className="group-hover:scale-125 transition-transform origin-center"
          />

          {/* Micro Terminal Core Light */}
          <circle cx="14.25" cy="19.5" r="1.1" fill="#ffffff" className="opacity-95" />
        </svg>
      </div>

      {/* ================= BRAND TYPOGRAPHY ================= */}
      {showText && (
        <div className="flex flex-col text-left">
          <div
            className={`font-bold tracking-tight text-slate-900 dark:text-white flex items-center ${current.text} leading-none`}
          >
            <span>Takebul</span>
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent ml-1">
              Islam
            </span>
            {/* Live Developer Pulse Dot */}
            <span className="relative flex h-1.5 w-1.5 ml-1.5 self-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500 dark:bg-cyan-400" />
            </span>
          </div>

          <span
            className={`font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase mt-1 ${current.subtext} leading-none flex items-center gap-1`}
          >
            <span className="text-cyan-500 dark:text-cyan-400 font-bold">&gt;</span>
            <span>Full-Stack Dev</span>
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
