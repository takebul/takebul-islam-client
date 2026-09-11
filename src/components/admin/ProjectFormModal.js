"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { uploadToImgBB } from "@/lib/utils/uploadImage";
import {
  FiX,
  FiSave,
  FiPlus,
  FiTrash2,
  FiGlobe,
  FiGithub,
  FiInfo,
  FiCode,
  FiImage,
  FiFileText,
  FiUploadCloud,
  FiLoader,
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
  "Node.js",
  "Express.js",
  "MongoDB",
  "Better Auth",
  "JWT/JWKS",
  "Stripe",
  "Tailwind CSS",
  "HeroUI",
  "Framer Motion",
  "Recharts",
];

export function ProjectFormModal({ isOpen, onClose, onSave, project = null, isSaving = false }) {
  const isEditing = Boolean(project && project._id);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    description: "",
    category: "Full-Stack",
    projectType: "Production Application",
    clientType: "Full-Stack Web App",
    role: "Full-Stack Web Developer",
    duration: "2 Months",
    startDate: "",
    endDate: "",
    status: "published",
    featured: false,
    order: 0,
    liveUrl: "",
    frontendRepository: "",
    backendRepository: "",
    thumbnail: "",
    images: "",
    technologies: [],
    keyFeatures: "",
    technicalChallenges: "",
    solutions: "",
    architecture: "",
    lessonsLearned: "",
  });

  const [techInput, setTechInput] = useState("");

  // Sync state when project changes or modal opens
  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        slug: project.slug || "",
        shortDescription: project.shortDescription || "",
        description: project.description || "",
        category: project.category || "Full-Stack",
        projectType: project.projectType || "Production Application",
        clientType: project.clientType || "Full-Stack Web App",
        role: project.role || "Full-Stack Web Developer",
        duration: project.duration || "2 Months",
        startDate: project.startDate || "",
        endDate: project.endDate || "",
        status: project.status || "published",
        featured: Boolean(project.featured),
        order: Number(project.order) || 0,
        liveUrl: project.liveUrl || "",
        frontendRepository: project.frontendRepository || "",
        backendRepository: project.backendRepository || "",
        thumbnail: project.thumbnail || "",
        images: Array.isArray(project.images) ? project.images.join("\n") : (project.images || ""),
        technologies: Array.isArray(project.technologies) ? project.technologies : [],
        keyFeatures: Array.isArray(project.keyFeatures) ? project.keyFeatures.join("\n") : (project.keyFeatures || ""),
        technicalChallenges: Array.isArray(project.technicalChallenges) ? project.technicalChallenges.join("\n") : (project.technicalChallenges || ""),
        solutions: Array.isArray(project.solutions) ? project.solutions.join("\n") : (project.solutions || ""),
        architecture: project.architecture || "",
        lessonsLearned: Array.isArray(project.lessonsLearned) ? project.lessonsLearned.join("\n") : (project.lessonsLearned || ""),
      });
    } else {
      // Defaults for new project
      setFormData({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        category: "Full-Stack",
        projectType: "Full-Stack Web Application",
        clientType: "Production Full-Stack Application",
        role: "Full-Stack Web Developer",
        duration: "2 Months",
        startDate: "",
        endDate: "",
        status: "published",
        featured: false,
        order: 0,
        liveUrl: "",
        frontendRepository: "",
        backendRepository: "",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
        images: "",
        technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        keyFeatures: "",
        technicalChallenges: "",
        solutions: "",
        architecture: "",
        lessonsLearned: "",
      });
    }
  }, [project, isOpen]);

  const [isUploadingThumbnail, setIsUploadingThumbnail] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);

  const handleThumbnailUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingThumbnail(true);
    try {
      toast.info("Uploading image to ImgBB...");
      const url = await uploadToImgBB(file);
      setFormData((prev) => ({ ...prev, thumbnail: url }));
      toast.success("Thumbnail uploaded to ImgBB!");
    } catch (err) {
      toast.error(err.message || "Failed to upload to ImgBB.");
    } finally {
      setIsUploadingThumbnail(false);
      e.target.value = "";
    }
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploadingGallery(true);
    try {
      toast.info(`Uploading ${files.length} images to ImgBB...`);
      const urls = await Promise.all(files.map((f) => uploadToImgBB(f)));
      setFormData((prev) => {
        const existing = prev.images ? prev.images.split("\n").filter(Boolean) : [];
        return {
          ...prev,
          images: [...existing, ...urls].join("\n"),
        };
      });
      toast.success("Gallery images uploaded to ImgBB!");
    } catch (err) {
      toast.error(err.message || "Failed to upload gallery images.");
    } finally {
      setIsUploadingGallery(false);
      e.target.value = "";
    }
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Auto-slugify title if slug has not been manually customized
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

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-")
      .replace(/^-+|-+$/g, "");
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
      images: parseLines(formData.images).length > 0 ? parseLines(formData.images) : [formData.thumbnail],
      keyFeatures: parseLines(formData.keyFeatures),
      technicalChallenges: parseLines(formData.technicalChallenges),
      solutions: parseLines(formData.solutions),
      lessonsLearned: parseLines(formData.lessonsLearned),
    };

    onSave(payload);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/50">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isEditing ? `Edit Project: ${project.title}` : "Add New Portfolio Project"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Fill in the technical details below. Changes persist directly into MongoDB.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-8 flex-grow">
          {/* Section 1: Basic Information */}
          <fieldset className="space-y-4">
            <legend className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 flex items-center gap-2 mb-3">
              <FiInfo className="w-4 h-4" /> 1. Basic Information
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="e.g. StartupForge Marketplace"
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  URL Slug <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={handleChange}
                  name="slug"
                  placeholder="e.g. startupforge-marketplace"
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Short Description (Cards & Previews) <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={2}
                required
                value={formData.shortDescription}
                onChange={handleChange}
                name="shortDescription"
                placeholder="A concise 2-sentence summary of what the application solves..."
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Full Description / Case Study Overview
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={handleChange}
                name="description"
                placeholder="Comprehensive technical breakdown of product goals, user personas, and design decisions..."
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={handleChange}
                  name="category"
                  className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                >
                  {DEFAULT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={handleChange}
                  name="status"
                  className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Display Order
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={handleChange}
                  name="order"
                  min={0}
                  className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={handleChange}
                    name="featured"
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-700"
                  />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Featured Project
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          {/* Section 2: Links & Repositories */}
          <fieldset className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <legend className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 flex items-center gap-2 mb-3">
              <FiGlobe className="w-4 h-4" /> 2. Live Links & Repositories
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Live Application URL
                </label>
                <input
                  type="url"
                  value={formData.liveUrl}
                  onChange={handleChange}
                  name="liveUrl"
                  placeholder="https://example.vercel.app"
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Frontend GitHub Repo
                </label>
                <input
                  type="url"
                  value={formData.frontendRepository}
                  onChange={handleChange}
                  name="frontendRepository"
                  placeholder="https://github.com/takebul/..."
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Backend GitHub Repo
                </label>
                <input
                  type="url"
                  value={formData.backendRepository}
                  onChange={handleChange}
                  name="backendRepository"
                  placeholder="https://github.com/takebul/..."
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>
            </div>
          </fieldset>

          {/* Section 3: Technologies */}
          <fieldset className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <legend className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 flex items-center gap-2 mb-3">
              <FiCode className="w-4 h-4" /> 3. Technologies
            </legend>

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
                placeholder="Type technology name and press Add or Enter..."
                className="flex-grow px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => addTechnology(techInput)}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Add Tech
              </button>
            </div>

            {/* Popular quick pills */}
            <div className="flex flex-wrap gap-1.5 items-center text-xs text-slate-500">
              <span className="font-medium mr-1">Quick Add:</span>
              {POPULAR_TECH.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => addTechnology(tech)}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-sky-950 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  +{tech}
                </button>
              ))}
            </div>

            {/* Selected Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {formData.technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-sky-950/80 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-sky-800"
                >
                  <span>{t}</span>
                  <button
                    type="button"
                    onClick={() => removeTechnology(t)}
                    className="hover:text-red-500"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </fieldset>

          {/* Section 4: Media */}
          <fieldset className="space-y-5 pt-4 border-t border-slate-200 dark:border-slate-800">
            <legend className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 flex items-center gap-2 mb-3">
              <FiImage className="w-4 h-4" /> 4. Media & Screenshots (ImgBB Integrated)
            </legend>

            {/* Thumbnail Upload & URL */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Primary Thumbnail Image
                </label>
                <label className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-800/60 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-sky-400 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 cursor-pointer transition-colors ${isUploadingThumbnail ? "opacity-60 pointer-events-none" : ""}`}>
                  {isUploadingThumbnail ? (
                    <>
                      <FiLoader className="w-3.5 h-3.5 animate-spin" />
                      <span>Uploading to ImgBB...</span>
                    </>
                  ) : (
                    <>
                      <FiUploadCloud className="w-3.5 h-3.5" />
                      <span>Upload from Device (ImgBB)</span>
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
              </div>

              <input
                type="text"
                value={formData.thumbnail}
                onChange={handleChange}
                name="thumbnail"
                placeholder="https://i.ibb.co/... or /images/projects/your-image.png"
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />

              {formData.thumbnail && (
                <div className="relative inline-block mt-2 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={formData.thumbnail}
                    alt="Thumbnail Preview"
                    className="h-32 w-56 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/75 backdrop-blur-xs text-[10px] text-white px-2 py-0.5 text-center font-mono truncate">
                    Thumbnail Preview
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Upload & URL list */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Gallery / Screenshot URLs (one per line)
                </label>
                <label className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 text-xs font-semibold hover:bg-sky-100 dark:hover:bg-sky-900/50 cursor-pointer transition-colors ${isUploadingGallery ? "opacity-60 pointer-events-none" : ""}`}>
                  {isUploadingGallery ? (
                    <>
                      <FiLoader className="w-3.5 h-3.5 animate-spin" />
                      <span>Uploading Screenshots...</span>
                    </>
                  ) : (
                    <>
                      <FiUploadCloud className="w-3.5 h-3.5" />
                      <span>Upload Screenshots (ImgBB)</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryUpload}
                    disabled={isUploadingGallery}
                    className="hidden"
                  />
                </label>
              </div>

              <textarea
                rows={3}
                value={formData.images}
                onChange={handleChange}
                name="images"
                placeholder={"https://i.ibb.co/...\nhttps://i.ibb.co/..."}
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />

              {formData.images && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {formData.images
                    .split("\n")
                    .map((url) => url.trim())
                    .filter(Boolean)
                    .map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 w-24 h-16 bg-slate-100 dark:bg-slate-800"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imgUrl}
                          alt={`Screenshot ${idx + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </fieldset>

          {/* Section 5: Technical Case Study Details */}
          <fieldset className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <legend className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 flex items-center gap-2 mb-3">
              <FiFileText className="w-4 h-4" /> 5. Deep Case Study Details
            </legend>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Key Features (one per line)
              </label>
              <textarea
                rows={3}
                value={formData.keyFeatures}
                onChange={handleChange}
                name="keyFeatures"
                placeholder={"Multi-role user authentication and RBAC guards\nLive booking flow with slot conflict detection"}
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Architecture Description
              </label>
              <textarea
                rows={2}
                value={formData.architecture}
                onChange={handleChange}
                name="architecture"
                placeholder="Decoupled Next.js frontend with Express.js REST API and MongoDB Atlas..."
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Technical Challenges (one per line)
                </label>
                <textarea
                  rows={3}
                  value={formData.technicalChallenges}
                  onChange={handleChange}
                  name="technicalChallenges"
                  placeholder={"Token verification across micro-services\nAtomic seat reservations"}
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Solutions & Decisions (one per line)
                </label>
                <textarea
                  rows={3}
                  value={formData.solutions}
                  onChange={handleChange}
                  name="solutions"
                  placeholder={"Implemented remote JWKS public key set with jose-cjs\nUsed MongoDB atomic increment operators"}
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Lessons Learned (one per line)
              </label>
              <textarea
                rows={2}
                value={formData.lessonsLearned}
                onChange={handleChange}
                name="lessonsLearned"
                placeholder={"Server-side verification is mandatory for marketplace roles\nClear booking conflict alerts improve conversion"}
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
              />
            </div>
          </fieldset>

          {/* Modal Footer Controls */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3 sticky bottom-0 bg-white dark:bg-slate-900 py-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium transition-colors shadow-xs"
            >
              <FiSave className="w-4 h-4" />
              <span>{isSaving ? "Saving to Database..." : isEditing ? "Update Project" : "Create Project"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
