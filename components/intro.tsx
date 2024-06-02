"use client";

import { motion } from 'framer-motion'
import React from 'react'

export default function Intro() {
  return (
    <motion.section
      id='home'
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
        Have a look at the things I&apos;ve made.
      </div>
    </motion.section>
  )
}
