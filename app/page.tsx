"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects-bento";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="dark">
      <AuroraBackground >

      </AuroraBackground>
      <Intro />
      <Projects />
      <About />
      <Experience />
    </main>
  );
}
