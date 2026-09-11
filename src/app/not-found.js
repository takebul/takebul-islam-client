import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <span className="text-sm font-semibold tracking-wider text-blue-600 dark:text-sky-400 uppercase mb-2">
        404 Error
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm sm:text-base mb-8">
        The page you are looking for doesn't exist or has been moved. Check the URL or return back to the portfolio homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-xs"
        >
          <FiHome className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  );
}
