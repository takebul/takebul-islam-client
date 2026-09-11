import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BackgroundParticles } from "@/components/ui/BackgroundParticles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Toaster } from "sonner";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL || "https://takebulislam.dev"),
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
    "Node.js Engineer",
    "Express.js",
    "MongoDB",
    "Better Auth",
    "Tailwind CSS",
    "Portfolio",
    "Bangladesh Developer",
    "Web Application Developer",
  ],
  authors: [{ name: "Takebul Islam", url: "https://github.com/takebul" }],
  creator: "Takebul Islam",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takebulislam.dev",
    title: "Takebul Islam — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer building complete, polished, real-world web applications from idea to deployment.",
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
      "Full-Stack Web Developer building complete, polished, real-world web applications from idea to deployment.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://takebulislam.dev/#person",
      name: "Takebul Islam",
      alternateName: ["Takebul", "Takebul Islam Developer"],
      jobTitle: "Full-Stack Web Developer",
      description:
        "Full-Stack Web Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB. Building complete, polished, real-world web applications from idea to deployment.",
      url: "https://takebulislam.dev",
      image: "https://takebulislam.dev/images/profile.jpg",
      sameAs: [
        "https://github.com/takebul",
        "https://www.linkedin.com/in/takebulislam",
        "https://docs.google.com/document/d/1WRY3zXw2sC7Yz-AT9gkw7APiPQ5o9vRXBxy0EzppeZY",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nazirpur",
        addressRegion: "Pirojpur",
        addressCountry: "BD",
      },
      email: "mailto:takebulislam@gmail.com",
      telephone: "+8801799439775",
      knowsAbout: [
        "Full-Stack Web Development",
        "JavaScript (ES6+)",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Better Auth",
        "JWT Authentication",
        "REST APIs",
        "Stripe Integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://takebulislam.dev/#website",
      url: "https://takebulislam.dev",
      name: "Takebul Islam — Full-Stack Web Developer",
      description:
        "Official portfolio of Takebul Islam featuring full-stack applications, technical skills, case studies, and official resume.",
      author: {
        "@id": "https://takebulislam.dev/#person",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-sky-500 selection:text-white flex flex-col min-h-screen relative">
        <ThemeProvider>
          <SmoothScrollProvider>
            <BackgroundParticles />
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
            <Toaster position="bottom-right" richColors closeButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
