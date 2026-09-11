import { getProjects } from "@/lib/api/projects";
import { Hero } from "@/components/home/Hero";
import { Snapshot } from "@/components/home/Snapshot";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhatIBuild } from "@/components/home/WhatIBuild";
import { HowIWork } from "@/components/home/HowIWork";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { ContactSection } from "@/components/home/ContactSection";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Takebul Islam — Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB. I build complete, polished, real-world web applications from idea to deployment.",
};

export default async function HomePage() {
  // Dynamically fetch projects from backend API on Express port 8541
  const projects = await getProjects({
    status: "published",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Snapshot />
      <AboutSection />
      <SkillsPreview />
      <FeaturedProjects projects={projects} />
      <WhatIBuild />
      <HowIWork />
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
}
