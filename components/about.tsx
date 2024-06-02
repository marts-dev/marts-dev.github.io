'use client';

import React from 'react';
import {motion} from 'framer-motion';
import { experiencesData } from '@/lib/data';

export default function About() {
  return (
    <motion.div>asdfasdf
      <p>{experiencesData[0].description}</p>
      <span>{experiencesData[0].icon}</span>
    </motion.div>
  )
}
