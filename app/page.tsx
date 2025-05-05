"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects-bento";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <AuroraBackground />
      <Intro />
      <About />
      <Projects />
      <Experience />
    </main>
  );
}
