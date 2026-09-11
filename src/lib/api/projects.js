const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8541";

/**
 * Fetch published projects with optional filters
 */
export async function getProjects(options = {}) {
  const { featured, category, status, search } = options;
  const params = new URLSearchParams();

  if (featured !== undefined) params.append("featured", String(featured));
  if (category && category !== "All") params.append("category", category);
  if (status) params.append("status", status);
  if (search) params.append("search", search);

  const queryString = params.toString() ? `?${params.toString()}` : "";
  const url = `${SERVER_URL}/projects${queryString}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.status}`);
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("[API] getProjects error:", error);
    return [];
  }
}

/**
 * Fetch a single project by slug or ID
 */
export async function getProjectBySlug(slug) {
  if (!slug) return null;

  try {
    const res = await fetch(`${SERVER_URL}/projects/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error(`[API] getProjectBySlug (${slug}) error:`, error);
    return null;
  }
}

/**
 * Fetch all projects for admin dashboard with statistics
 */
export async function getAllAdminProjects(token) {
  try {
    const res = await fetch(`${SERVER_URL}/projects/admin/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `Failed to fetch admin projects: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("[API] getAllAdminProjects error:", error);
    throw error;
  }
}

/**
 * Create a new project (Admin Only)
 */
export async function createProject(projectData, token) {
  try {
    const res = await fetch(`${SERVER_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Creation failed: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("[API] createProject error:", error);
    throw error;
  }
}

/**
 * Update an existing project (Admin Only)
 */
export async function updateProject(id, projectData, token) {
  try {
    const res = await fetch(`${SERVER_URL}/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Update failed: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("[API] updateProject error:", error);
    throw error;
  }
}

/**
 * Delete a project (Admin Only)
 */
export async function deleteProject(id, token) {
  try {
    const res = await fetch(`${SERVER_URL}/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Delete failed: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("[API] deleteProject error:", error);
    throw error;
  }
}
