"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { authClient, getAuthToken } from "@/lib/auth-client";
import {
  getAllAdminProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/lib/api/projects";
import {
  getContactMessages,
  markMessageRead,
  deleteContactMessage,
} from "@/lib/api/messages";
import { ProjectFormModal } from "@/components/admin/ProjectFormModal";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { toast } from "sonner";
import {
  FiFolder,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiStar,
  FiExternalLink,
  FiEye,
  FiMail,
  FiCheckCircle,
  FiLogOut,
  FiSearch,
  FiRefreshCw,
  FiLayers,
  FiShield,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending: isSessionLoading } =
    authClient.useSession();

  const [authToken, setAuthToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  // Data states
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    featured: 0,
  });
  const [isLoadingData, setIsLoadingData] = useState(false);

  // UI tabs & filter states
  const [activeTab, setActiveTab] = useState("projects"); // "projects" | "messages"
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Message delete state
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [isDeletingMessage, setIsDeletingMessage] = useState(false);

  // Verify Admin Session
  useEffect(() => {
    async function verify() {
      if (isSessionLoading) return;

      if (!session?.user) {
        toast.error("Please sign in to access the administrator dashboard.");
        router.push("/signin");
        return;
      }

      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      const userRole = session.user.role;
      const userEmail = session.user.email?.toLowerCase();

      if (userRole !== "admin" && userEmail !== adminEmail.toLowerCase()) {
        toast.error("Access denied: Administrator privileges required.");
        router.push("/");
        return;
      }

      setIsAdmin(true);
      const token = await getAuthToken();
      setAuthToken(token);
      setIsVerifying(false);
    }

    verify();
  }, [session, isSessionLoading, router]);

  // Load Data
  const loadDashboardData = useCallback(async () => {
    if (!authToken) return;
    setIsLoadingData(true);
    try {
      const [projRes, msgRes] = await Promise.all([
        getAllAdminProjects(authToken).catch(() => ({ data: [], stats: {} })),
        getContactMessages(authToken).catch(() => []),
      ]);

      if (projRes?.data) {
        setProjects(projRes.data);
        setStats(
          projRes.stats || {
            total: projRes.data.length,
            published: projRes.data.filter((p) => p.status === "published")
              .length,
            draft: projRes.data.filter((p) => p.status === "draft").length,
            featured: projRes.data.filter((p) => p.featured).length,
          },
        );
      }

      if (Array.isArray(msgRes)) {
        setMessages(msgRes);
      }
    } catch (error) {
      toast.error("Failed to load dashboard data.");
    } finally {
      setIsLoadingData(false);
    }
  }, [authToken]);

  useEffect(() => {
    if (authToken && isAdmin) {
      loadDashboardData();
    }
  }, [authToken, isAdmin, loadDashboardData]);

  // Project Actions
  const handleOpenAddModal = () => {
    setEditingProject(null);
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (project) => {
    setEditingProject(project);
    setIsFormModalOpen(true);
  };

  const handleSaveProject = async (projectData) => {
    setIsSaving(true);
    try {
      if (editingProject?._id) {
        await updateProject(editingProject._id, projectData, authToken);
        toast.success("Project updated successfully.");
      } else {
        await createProject(projectData, authToken);
        toast.success("Project created successfully and published.");
      }
      setIsFormModalOpen(false);
      setEditingProject(null);
      await loadDashboardData();
    } catch (error) {
      toast.error(error.message || "Failed to save project.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenDeleteModal = (project) => {
    setProjectToDelete(project);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!projectToDelete?._id) return;
    setIsDeleting(true);
    try {
      await deleteProject(projectToDelete._id, authToken);
      toast.success("Project deleted successfully.");
      setIsDeleteModalOpen(false);
      setProjectToDelete(null);
      await loadDashboardData();
    } catch (error) {
      toast.error(error.message || "Failed to delete project.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleToggleFeatured = async (project) => {
    try {
      const updatedFeatured = !project.featured;
      await updateProject(
        project._id,
        { featured: updatedFeatured },
        authToken,
      );
      toast.success(
        updatedFeatured
          ? `"${project.title}" set to Featured.`
          : `"${project.title}" unfeatured.`,
      );
      await loadDashboardData();
    } catch (error) {
      toast.error("Failed to toggle featured status.");
    }
  };

  const handleMarkMessageRead = async (messageId) => {
    try {
      await markMessageRead(messageId, authToken, true);
      toast.success("Message marked as read.");
      setMessages((prev) =>
        prev.map((m) => (m._id === messageId ? { ...m, read: true } : m)),
      );
    } catch (error) {
      toast.error("Failed to update message status.");
    }
  };

  const handleConfirmDeleteMessage = async () => {
    if (!messageToDelete?._id) return;
    setIsDeletingMessage(true);
    try {
      await deleteContactMessage(messageToDelete._id, authToken);
      toast.success("Message deleted successfully.");
      setMessages((prev) => prev.filter((m) => m._id !== messageToDelete._id));
      setMessageToDelete(null);
    } catch (error) {
      toast.error(error.message || "Failed to delete message.");
    } finally {
      setIsDeletingMessage(false);
    }
  };

  const formatMessageTime = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success("Signed out successfully.");
      router.push("/");
      router.refresh();
    } catch {
      router.push("/");
    }
  };

  // Filtered Projects
  const filteredProjects = projects.filter((project) => {
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "featured" && project.featured) ||
      project.status === statusFilter;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      project.title?.toLowerCase().includes(query) ||
      project.slug?.toLowerCase().includes(query) ||
      project.category?.toLowerCase().includes(query);

    return matchesStatus && matchesQuery;
  });

  if (isSessionLoading || isVerifying) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 space-y-4">
        <div className="w-12 h-12 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
        <p className="text-sm font-medium text-slate-500">
          Verifying administrator credentials...
        </p>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12 bg-slate-50/50 dark:bg-slate-950/40 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
              <FiShield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Logged in as{" "}
                <strong className="text-slate-800 dark:text-slate-200">
                  {session?.user?.name || "Takebul Islam"}
                </strong>{" "}
                ({session?.user?.email})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={loadDashboardData}
              disabled={isLoadingData}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Refresh Data"
            >
              <FiRefreshCw
                className={`w-4 h-4 ${isLoadingData ? "animate-spin" : ""}`}
              />
            </button>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            >
              <span>View Public Portfolio</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            >
              <FiLogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Stats Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Total Projects
            </span>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1.5">
              {stats.total}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wider block">
              Featured
            </span>
            <p className="text-3xl font-extrabold text-blue-600 dark:text-sky-400 mt-1.5">
              {stats.featured}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
              Published
            </span>
            <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1.5">
              {stats.published}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
              Drafts / Inactive
            </span>
            <p className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1.5">
              {stats.draft}
            </p>
          </div>
        </div>

        {/* Tab Selector & Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === "projects"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FiLayers className="w-3.5 h-3.5" />
              <span>Projects ({projects.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("messages")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === "messages"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FiMail className="w-3.5 h-3.5" />
              <span>
                Inbox ({messages.filter((m) => !m.read).length} unread)
              </span>
            </button>
          </div>

          {activeTab === "projects" && (
            <button
              type="button"
              onClick={handleOpenAddModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
            >
              <FiPlus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          )}
        </div>

        {/* Tab 1: Projects Management Table */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            {/* Filter & Search Toolbar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {["all", "published", "draft", "featured"].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setStatusFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                      statusFilter === filter
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
            </div>

            {/* Projects Table Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <tr>
                      <th className="px-6 py-4">Project</th>
                      <th className="px-4 py-4">Category</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4 text-center">Featured</th>
                      <th className="px-4 py-4 text-center">Order</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {filteredProjects.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="px-6 py-12 text-center text-slate-500 dark:text-slate-400"
                        >
                          <FiFolder className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p className="font-semibold text-slate-800 dark:text-slate-200">
                            No projects found
                          </p>
                          <p className="text-xs mt-0.5">
                            Click &quot;Add New Project&quot; above to create
                            your first portfolio entry.
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredProjects.map((project) => (
                        <tr
                          key={project._id || project.slug}
                          className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          {/* Title & Thumbnail */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3.5">
                              <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                                {project.thumbnail && (
                                  <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    sizes="56px"
                                    className="object-cover object-top"
                                  />
                                )}
                              </div>
                              <div className="min-w-0">
                                <h3 className="font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-sm">
                                  {project.title}
                                </h3>
                                <p className="text-xs text-slate-400 font-mono truncate max-w-xs">
                                  /{project.slug}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-4 py-4">
                            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {project.category || "Full-Stack"}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="px-4 py-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
                                project.status === "published"
                                  ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300"
                                  : "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300"
                              }`}
                            >
                              {project.status || "published"}
                            </span>
                          </td>

                          {/* Featured Toggle */}
                          <td className="px-4 py-4 text-center">
                            <button
                              type="button"
                              onClick={() => handleToggleFeatured(project)}
                              className={`p-1.5 rounded-lg transition-colors ${
                                project.featured
                                  ? "text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40"
                                  : "text-slate-300 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                              }`}
                              title={
                                project.featured
                                  ? "Featured Project"
                                  : "Click to feature"
                              }
                            >
                              <FiStar
                                className={`w-4 h-4 ${project.featured ? "fill-amber-400" : ""}`}
                              />
                            </button>
                          </td>

                          {/* Order */}
                          <td className="px-4 py-4 text-center text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                            {project.order || 0}
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {project.liveUrl ? (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                  title="View Live Site"
                                >
                                  <FiEye className="w-4 h-4" />
                                </a>
                              ) : (
                                <Link
                                  href="/projects"
                                  target="_blank"
                                  className="p-2 rounded-lg text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                  title="View Public Catalog"
                                >
                                  <FiEye className="w-4 h-4" />
                                </Link>
                              )}

                              <button
                                type="button"
                                onClick={() => handleOpenEditModal(project)}
                                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                title="Edit Project"
                              >
                                <FiEdit2 className="w-4 h-4" />
                              </button>

                              <button
                                type="button"
                                onClick={() => handleOpenDeleteModal(project)}
                                className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors"
                                title="Delete Project"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Messages Inbox */}
        {activeTab === "messages" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Recruiter & Client Inquiries ({messages.length})
              </h3>

              {messages.length === 0 ? (
                <div className="p-12 text-center text-slate-500">
                  <FiMail className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="font-semibold">No messages yet</p>
                  <p className="text-xs mt-1">
                    Inquiries submitted via the Contact form will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg._id}
                      className={`p-5 rounded-2xl border transition-all ${
                        msg.read
                          ? "border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30"
                          : "border-blue-200 dark:border-sky-900 bg-blue-50/20 dark:bg-sky-950/20 shadow-xs"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">
                            {msg.name}
                          </h4>
                          <span className="text-xs text-slate-400">•</span>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline"
                          >
                            {msg.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60 font-medium">
                            <FiClock className="w-3.5 h-3.5 text-sky-500" />
                            <span>{formatMessageTime(msg.createdAt)}</span>
                          </span>
                          {!msg.read && (
                            <button
                              type="button"
                              onClick={() => handleMarkMessageRead(msg._id)}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 px-2.5 py-1 rounded-lg transition-colors cursor-pointer border border-emerald-200/50 dark:border-emerald-800/40"
                              title="Mark as Read"
                            >
                              <FiCheckCircle className="w-3.5 h-3.5" />
                              <span>Mark Read</span>
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => setMessageToDelete(msg)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/40 px-2.5 py-1 rounded-lg transition-colors cursor-pointer border border-red-200/50 dark:border-red-800/40"
                            title="Delete Message"
                          >
                            <FiTrash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>

                      <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                        Subject: {msg.subject || "General Inquiry"}
                      </p>

                      <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Project Add / Edit Modal */}
      <ProjectFormModal
        isOpen={isFormModalOpen}
        onClose={() => {
          setIsFormModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        project={editingProject}
        isSaving={isSaving}
      />

      {/* Project Delete Confirmation Dialog */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setProjectToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        projectTitle={projectToDelete?.title || "Project"}
        isDeleting={isDeleting}
      />

      {/* Message Delete Confirmation Dialog */}
      {messageToDelete && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
          data-lenis-prevent="true"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            if (!isDeletingMessage) setMessageToDelete(null);
          }}
        >
          <div
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center space-y-4"
            data-lenis-prevent="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto">
              <FiTrash2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Delete Message?
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Are you sure you want to permanently delete the message from <strong className="text-slate-900 dark:text-white">&quot;{messageToDelete.name}&quot;</strong> ({messageToDelete.email})? This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setMessageToDelete(null)}
                disabled={isDeletingMessage}
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteMessage}
                disabled={isDeletingMessage}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium transition-colors shadow-xs cursor-pointer"
              >
                <FiTrash2 className="w-4 h-4" />
                <span>{isDeletingMessage ? "Deleting..." : "Yes, Delete Message"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
