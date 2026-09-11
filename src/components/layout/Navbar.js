"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { FiGithub, FiLinkedin, FiFileText, FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy active section detection
      if (pathname === "/") {
        const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (pathname !== "/" && href.startsWith("#")) {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-sm shadow-slate-900/5 dark:shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo
            onClick={() => handleNavClick("#hero")}
            href="/#hero"
            size="md"
          />

          {/* Desktop Navigation Links (ScrollSpy) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = pathname === "/" && activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-sky-400 shadow-xs scale-105"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Secondary Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://github.com/takebul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FiGithub className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/takebulislam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>

            <ThemeToggle />

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-xs hover:shadow-sm transition-all focus:ring-2 focus:ring-sky-500/50 focus:outline-none"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = pathname === "/" && activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 dark:bg-slate-800/80 text-blue-600 dark:text-sky-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-4 px-2">
              <a
                href="https://github.com/takebul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/takebulislam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-medium text-xs text-center shadow-xs"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>View & Download Resume</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
