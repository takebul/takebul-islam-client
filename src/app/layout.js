import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BackgroundParticles } from "@/components/ui/BackgroundParticles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Toaster } from "sonner";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000"),
  title: {
    default: "Takebul Islam — Full-Stack Web Developer",
    template: "%s | Takebul Islam",
  },
  description:
    "Full-Stack Web Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB. I build complete, polished, real-world web applications from idea to deployment.",
  keywords: [
    "Takebul Islam",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Better Auth",
    "Portfolio",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Takebul Islam", url: "https://github.com/takebul" }],
  creator: "Takebul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takebulislam.dev",
    title: "Takebul Islam — Full-Stack Web Developer",
    description:
      "I build complete, polished, real-world web applications from idea to deployment.",
    siteName: "Takebul Islam Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Takebul Islam — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takebul Islam — Full-Stack Web Developer",
    description:
      "I build complete, polished, real-world web applications from idea to deployment.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-sky-500 selection:text-white flex flex-col min-h-screen relative">
        <ThemeProvider>
          <SmoothScrollProvider>
            <BackgroundParticles />
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <Toaster position="bottom-right" richColors closeButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

