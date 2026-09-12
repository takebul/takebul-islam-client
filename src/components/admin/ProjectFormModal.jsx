"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { uploadToImgBB } from "@/lib/utils/uploadImage";
import {
  FiX,
  FiSave,
  FiPlus,
  FiGlobe,
  FiGithub,
  FiCode,
  FiImage,
  FiFileText,
  FiUploadCloud,
  FiLoader,
  FiCheck,
} from "react-icons/fi";

const DEFAULT_CATEGORIES = [
  "Full-Stack",
  "Frontend",
  "Backend",
  "SaaS",
  "Marketplace",
  "Booking",
  "Dashboard",
  "API",
  "AI",
  "Other",
];

const POPULAR_TECH = [
  "Next.js",
  "React",
  "React Router",
  "Node.js",
  "Express.js",
  "MongoDB Atlas",
  "Better Auth",
  "Google OAuth",
  "JWT Authentication",
  "Stripe Integration",
  "Tailwind CSS",
  "HeroUI",
  "DaisyUI",
  "Lenis",
  "GSAP",
  "Framer Motion",
  "Recharts",
];

export function ProjectFormModal({ isOpen, onClose, onSave, project = null, isSaving = false }) {
  const isEditing = Boolean(project && project._id);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    slug: "",
    shortDescription: "",
    category: "Full-Stack",
    status: "published",
    featured: false,
    order: 0,
    liveUrl: "",
    frontendRepository: "",
    backendRepository: "",
    thumbnail: "",
    technologies: [],
    keyFeatures: "",
  });

  const [techInput, setTechInput] = useState("");
  const [isUploadingThumbnail, setIsUploadingThumbnail] = useState(false);

  // Sync state when project changes or modal opens
  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        subtitle: project.subtitle || "",
        slug: project.slug || "",
        shortDescription: project.shortDescription || project.description || "",
        category: project.category || "Full-Stack",
        status: project.status || "published",
        featured: Boolean(project.featured),
        order: Number(project.order) || 0,
        liveUrl: project.liveUrl || "",
        frontendRepository: project.frontendRepository || "",
        backendRepository: project.backendRepository || "",
        thumbnail: project.thumbnail || "",
        technologies: Array.isArray(project.technologies) ? project.technologies : [],
        keyFeatures: Array.isArray(project.keyFeatures) ? project.keyFeatures.join("\n") : (project.keyFeatures || ""),
      });
    } else {
      // Defaults for new project
      setFormData({
        title: "",
        subtitle: "",
        slug: "",
        shortDescription: "",
        category: "Full-Stack",
        status: "published",
        featured: false,
        order: 0,
        liveUrl: "",
        frontendRepository: "",
        backendRepository: "",
        thumbnail: "/images/projects/startupforge.png",
        technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        keyFeatures: "",
      });
    }
  }, [project, isOpen]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e) => {
    const titleVal = e.target.value;
    setFormData((prev) => {
      const shouldAutoSlug = !isEditing && (!prev.slug || prev.slug === slugify(prev.title));
      return {
        ...prev,
        title: titleVal,
        slug: shouldAutoSlug ? slugify(titleVal) : prev.slug,
      };
    });
  };

  const addTechnology = (tech) => {
    const clean = tech.trim();
    if (clean && !formData.technologies.includes(clean)) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, clean],
      }));
    }
    setTechInput("");
  };

  const removeTechnology = (techToRemove) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== techToRemove),
    }));
  };

  // Upload thumbnail directly to ImgBB
  const handleThumbnailUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploadingThumbnail(true);
      const url = await uploadToImgBB(file);
      setFormData((prev) => ({ ...prev, thumbnail: url }));
      toast.success("Project screenshot uploaded to ImgBB!");
    } catch (err) {
      toast.error(err.message || "Failed to upload image.");
    } finally {
      setIsUploadingThumbnail(false);
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.shortDescription.trim()) {
      toast.error("Title and Short Description are required.");
      return;
    }

    const parseLines = (text) => {
      return text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
    };

    const payload = {
      ...formData,
      slug: formData.slug ? slugify(formData.slug) : slugify(formData.title),
      order: Number(formData.order) || 0,
      keyFeatures: parseLines(formData.keyFeatures),
      images: [formData.thumbnail],
    };

    onSave(payload);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-hidden"
      data-lenis-prevent="true"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] h-[92vh] sm:h-[88vh] flex flex-col"
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Pinned) */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/50">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isEditing ? `Edit Project: ${project.title}` : "Add New Project"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Recruiter-First Showcase — Fast, direct, and zero details page hassle.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 min-h-0 flex flex-col overflow-hidden"
          data-lenis-prevent="true"
        >
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 space-y-6">
            {/* Section 1: Title & Tagline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                <FiFileText className="w-4 h-4" />
                <span>Basic Identity</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. StartupForge"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subtitle / Tagline
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    placeholder="e.g. Two-Sided Founder & Collaborator Marketplace"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  >
                    {DEFAULT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Priority / Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-cyan-600 focus:ring-cyan-500 border-slate-300 dark:border-slate-700"
                />
                <label htmlFor="featured" className="text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
                  Featured Project (Highlights card with gradient border on homepage)
                </label>
              </div>
            </div>

            {/* Section 2: Summary & Engineering Highlights */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                <FiCode className="w-4 h-4" />
                <span>Overview &amp; Technical Highlights</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Summary Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  rows={2}
                  placeholder="A concise 2-3 sentence overview of what the application solves..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Key Engineering Features (Bullets shown on card, 1 per line)
                </label>
                <textarea
                  name="keyFeatures"
                  value={formData.keyFeatures}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Architected responsive two-sided marketplace with role-based dashboards...&#10;Engineered robust RBAC and token-verification middleware in Express.js...&#10;Integrated Stripe subscription payments with automated webhook processing..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Add 3 to 4 strong bullet points. These appear with checkmarks on the card.
                </p>
              </div>
            </div>

            {/* Section 3: Technologies */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                <FiCode className="w-4 h-4" />
                <span>Technologies &amp; Tools</span>
              </div>

              <div className="flex flex-wrap gap-1.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800">
                {POPULAR_TECH.map((tech) => {
                  const isSelected = formData.technologies.includes(tech);
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => (isSelected ? removeTechnology(tech) : addTechnology(tech))}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-cyan-600 text-white shadow-xs"
                          : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/60"
                      }`}
                    >
                      {isSelected ? "✓ " : "+ "}
                      {tech}
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTechnology(techInput);
                    }
                  }}
                  placeholder="Add custom tech and press Enter..."
                  className="flex-1 px-3.5 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
                <button
                  type="button"
                  onClick={() => addTechnology(techInput)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
                >
                  <FiPlus className="w-3.5 h-3.5 inline mr-1" /> Add
                </button>
              </div>

              {formData.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {formData.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60"
                    >
                      <span>{t}</span>
                      <button
                        type="button"
                        onClick={() => removeTechnology(t)}
                        className="hover:text-rose-500 transition-colors"
                      >
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Section 4: URLs & Repositories */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                <FiGlobe className="w-4 h-4" />
                <span>Live Site &amp; GitHub Repositories</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Live Application URL
                </label>
                <div className="relative">
                  <FiGlobe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    name="liveUrl"
                    value={formData.liveUrl}
                    onChange={handleChange}
                    placeholder="https://startupforgelimited.vercel.app"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Frontend (Client) GitHub Repo
                  </label>
                  <div className="relative">
                    <FiGithub className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      name="frontendRepository"
                      value={formData.frontendRepository}
                      onChange={handleChange}
                      placeholder="https://github.com/takebul/startup-forge-client"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Backend (Server) GitHub Repo
                  </label>
                  <div className="relative">
                    <FiGithub className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="url"
                      name="backendRepository"
                      value={formData.backendRepository}
                      onChange={handleChange}
                      placeholder="https://github.com/takebul/startup-forge-server"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Screenshot / Thumbnail */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                <FiImage className="w-4 h-4" />
                <span>Live Website Screenshot / Thumbnail</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-1 w-full space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all">
                      {isUploadingThumbnail ? (
                        <>
                          <FiLoader className="w-4 h-4 animate-spin" />
                          <span>Uploading to ImgBB...</span>
                        </>
                      ) : (
                        <>
                          <FiUploadCloud className="w-4 h-4" />
                          <span>Upload Image from Device</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailUpload}
                        disabled={isUploadingThumbnail}
                        className="hidden"
                      />
                    </label>
                    <span className="text-xs text-slate-400">or enter image path / URL</span>
                  </div>

                  <input
                    type="text"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="/images/projects/startupforge.png or https://i.ibb.co/..."
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>

                {formData.thumbnail && (
                  <div className="w-32 h-20 relative rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                    <img
                      src={formData.thumbnail}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer (Pinned) */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50 dark:bg-slate-950/50">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving || isUploadingThumbnail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <FiLoader className="w-4 h-4 animate-spin" />
                  <span>Saving Project...</span>
                </>
              ) : (
                <>
                  <FiSave className="w-4 h-4" />
                  <span>{isEditing ? "Save Changes" : "Create Project"}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
