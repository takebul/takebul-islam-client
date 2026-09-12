export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL &&
    !process.env.NEXT_PUBLIC_CLIENT_URL.includes("localhost")
      ? process.env.NEXT_PUBLIC_CLIENT_URL
      : "https://takebulislam.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/signin", "/signup", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
