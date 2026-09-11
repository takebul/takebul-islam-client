import { jwtClient, adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000";
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  plugins: [jwtClient(), adminClient()],
});

export const { signIn, signUp, signOut, useSession } = authClient;

export async function getAuthToken() {
  try {
    const tokenRes = await authClient.token();
    if (tokenRes?.data?.token) {
      return tokenRes.data.token;
    }
    const baseURL = getBaseURL();
    const res = await fetch(`${baseURL}/api/auth/token`, {
      credentials: "include",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.token || null;
  } catch (error) {
    console.error("Failed to get auth token:", error);
    return null;
  }
}

