"use client";

import { FiAlertTriangle, FiTrash2, FiX } from "react-icons/fi";

export function DeleteConfirmModal({ isOpen, onClose, onConfirm, projectTitle, isDeleting }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto">
          <FiAlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Delete Project?
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Are you sure you want to permanently delete <strong className="text-slate-900 dark:text-white">&quot;{projectTitle}&quot;</strong>? This action cannot be undone and will immediately remove it from your public portfolio.
        </p>

        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium transition-colors shadow-xs"
          >
            <FiTrash2 className="w-4 h-4" />
            <span>{isDeleting ? "Deleting..." : "Yes, Delete Project"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
