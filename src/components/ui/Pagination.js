"use client";

import { useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  pageSize = 6,
  onPageChange,
  scrollToId = null,
}) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Generate page numbers with smart ellipsis
  const pageNumbers = useMemo(() => {
    const delta = 1; // Number of pages to show around current page
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always include page 1
    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis-1");
    }

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis-2");
    }

    // Always include last page
    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  const handlePageClick = (page) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    onPageChange(page);

    if (scrollToId && typeof window !== "undefined") {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-6 border-t border-slate-200 dark:border-slate-800/80">
      {/* Items Count Summary */}
      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center sm:text-left">
        Showing <span className="font-semibold text-slate-900 dark:text-white">{startItem}–{endItem}</span> of{" "}
        <span className="font-semibold text-slate-900 dark:text-white">{totalItems}</span> projects{" "}
        <span className="text-slate-400 dark:text-slate-600">|</span> Page{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-400">{currentPage}</span> of{" "}
        <span className="font-semibold text-slate-900 dark:text-white">{totalPages}</span>
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Projects pagination" className="flex items-center gap-1.5">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
        >
          <FiChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((p, idx) => {
            if (typeof p === "string" && p.startsWith("ellipsis")) {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-8 text-center text-xs text-slate-400 dark:text-slate-600 select-none"
                >
                  •••
                </span>
              );
            }

            const isCurrent = p === currentPage;

            return (
              <button
                key={p}
                type="button"
                onClick={() => handlePageClick(p)}
                aria-current={isCurrent ? "page" : undefined}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105"
                    : "border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
