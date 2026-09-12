"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Dual 0-9 cycle creates a realistic, smooth spin before settling on the target digit
const DIGIT_REEL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function SingleDigitReel({ digit, index, shouldAnimate, delay = 0, duration = 1.6, gradient }) {
  const targetNumber = parseInt(digit, 10);
  const isDigit = !isNaN(targetNumber) && targetNumber >= 0 && targetNumber <= 9;

  if (!isDigit) {
    return (
      <span className={`inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {digit}
      </span>
    );
  }

  // Calculate target offset percentage in the 20-item reel (landing on the 2nd cycle)
  const targetOffset = -((10 + targetNumber) / DIGIT_REEL.length) * 100;

  return (
    <span className="relative inline-flex h-[1.25em] w-[0.62em] overflow-hidden leading-none select-none align-baseline justify-center">
      <motion.span
        initial={{ y: "0%" }}
        animate={shouldAnimate ? { y: `${targetOffset}%` } : { y: "0%" }}
        transition={{
          duration: duration + index * 0.08,
          delay: delay + index * 0.1,
          ease: [0.16, 1, 0.3, 1], // Smooth exponential luxury deceleration
        }}
        className="flex flex-col items-center absolute top-0"
      >
        {DIGIT_REEL.map((num, i) => (
          <span
            key={i}
            className={`h-[1.25em] w-[0.62em] flex items-center justify-center leading-none bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-mono`}
            aria-hidden={i !== 10 + targetNumber}
          >
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function RollingNumber({
  value,
  prefix = "",
  suffix = "",
  gradient = "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500",
  delay = 0.15,
  duration = 1.6,
  className = "",
  triggerOnHover = true,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [hasMounted, setHasMounted] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    // Delay slightly on mount so initial entrance is visible and smooth
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const shouldAnimate = hasMounted && (isInView || true);

  const valueString = String(value);
  const characters = valueString.split("");

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      setCycleKey((prev) => prev + 1);
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-flex items-center justify-center font-mono tracking-tight cursor-default ${className}`}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {/* Optional Prefix */}
      {prefix && (
        <span
          className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent mr-1 inline-block`}
        >
          {prefix}
        </span>
      )}

      {/* Rolling Digits Container */}
      <span
        key={cycleKey}
        className="inline-flex items-center"
      >
        {characters.map((char, index) => (
          <SingleDigitReel
            key={`${cycleKey}-${index}`}
            digit={char}
            index={index}
            shouldAnimate={shouldAnimate}
            delay={delay}
            duration={duration}
            gradient={gradient}
          />
        ))}
      </span>

      {/* Suffix (e.g. +, %, h) */}
      {suffix && (
        <span className="text-slate-700 dark:text-slate-300 ml-1 font-sans font-bold inline-block">
          {suffix}
        </span>
      )}
    </span>
  );
}
