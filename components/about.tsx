'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className='relative flex flex-col gap-4 items-center text-center bg-transparent max-w-[45rem] mx-auto scroll-mt-44 text-gray-700 dark:text-white'
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ amount: 0.5 }}
      id='about'
    >
      <h2 className='text-3xl font-bold'>About Me</h2>
      <p className='mb-3 text-xl'>
        I graduted from{" "} <span className="italic">FEU - Institute of Technology</span>{" "} with a degree in Computer Science. My favorite part of programming is the problem-solving aspect. I love the feeling of figuring out how things work and figuring out how to fix them when they break.{" "} <span className="underline">I also enjoy the challenge of learning new technologies and frameworks.</span>
      </p>
      <p className='mb-3 text-xl'>
        <span className="italic">{"When I'm not coding"}</span>, I enjoy playing
        video games, watching movies, model building and photography. I am currently
        learning about{" "} <span className="font-bold">Geospatial Software Design.</span>
      </p>
    </motion.section>
  );
}
