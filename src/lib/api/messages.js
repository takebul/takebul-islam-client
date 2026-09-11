const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8541";

/**
 * Submit contact form message
 */
export async function sendContactMessage(messageData) {
  try {
    const res = await fetch(`${SERVER_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Submission failed: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("[API] sendContactMessage error:", error);
    throw error;
  }
}

/**
 * Fetch contact messages (Admin Only)
 */
export async function getContactMessages(token) {
  try {
    const res = await fetch(`${SERVER_URL}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Failed to fetch messages: ${res.status}`);
    }

    return data.data || [];
  } catch (error) {
    console.error("[API] getContactMessages error:", error);
    throw error;
  }
}

/**
 * Mark message read status (Admin Only)
 */
export async function markMessageRead(id, token, read = true) {
  try {
    const res = await fetch(`${SERVER_URL}/messages/${id}/read`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ read }),
    });

    return await res.json();
  } catch (error) {
    console.error("[API] markMessageRead error:", error);
    throw error;
  }
}

/**
 * Delete contact message (Admin Only)
 */
export async function deleteContactMessage(id, token) {
  try {
    const res = await fetch(`${SERVER_URL}/messages/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Failed to delete message: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("[API] deleteContactMessage error:", error);
    throw error;
  }
}

