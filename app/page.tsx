"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="dark">
      <AuroraBackground >

      </AuroraBackground>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ amount: 0.5 }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen bg-transparent"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome to my Portfolio!
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ amount: 0.5 }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
      >
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="91d5713c-b969-4f7c-a433-a930fc94f204" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ amount: 0.5 }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Here are some of my works
        </div>
      </motion.div>
    </div>
  );
}
