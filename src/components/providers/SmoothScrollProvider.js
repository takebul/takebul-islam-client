"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: "vertical",
      prevent: (node) => {
        return (
          node?.hasAttribute?.("data-lenis-prevent") ||
          Boolean(node?.closest?.("[data-lenis-prevent]")) ||
          Boolean(node?.closest?.('[role="dialog"]')) ||
          Boolean(node?.closest?.(".modal-scrollable"))
        );
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Initial hash scroll on mount
    if (window.location.hash) {
      setTimeout(() => {
        const initialElem = document.querySelector(window.location.hash);
        if (initialElem) {
          lenis.scrollTo(initialElem, { offset: -70, immediate: false });
        }
      }, 200);
    }

    // Global butter-smooth anchor navigation handler
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;
      const rawHref = target.getAttribute("href");
      if (!rawHref) return;

      // Handles both "#about" and "/#about" when on the home page
      const isDirectHash = rawHref.startsWith("#") && rawHref.length > 1;
      const isRootHash =
        window.location.pathname === "/" &&
        rawHref.startsWith("/#") &&
        rawHref.length > 2;

      if (isDirectHash || isRootHash) {
        const selector = isRootHash ? rawHref.substring(1) : rawHref;
        try {
          const elem = document.querySelector(selector);
          if (elem) {
            e.preventDefault();
            lenis.scrollTo(elem, { offset: -70 });
            if (window.history?.pushState) {
              window.history.pushState(null, "", selector);
            }
          }
        } catch {
          // Ignore invalid selector queries
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
