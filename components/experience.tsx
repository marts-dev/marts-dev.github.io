"use client";

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type ExperienceItemProps = {
  item:(typeof experiencesData)[number]
};

function ExperienceElement({item}: ExperienceItemProps) {
  const ref = useRef(null)
  const inView  = useInView(ref);
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
      className='[&>*]:bg-white [&>*]:dark:bg-black'
        visible={inView}
        contentStyle={{
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem"
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af"
        }}
        dateClassName='text-gray-700 dark:text-white'
        date={item.date}
        icon={item.icon}
        iconClassName='text-gray-700 dark:text-white bg-white  dark:bg-black shadow shadow-black dark:shadow-white'
      >
        <h3 className='font-semibold capitalize text-gray-700 dark:text-white'>{item.title}</h3>
        <p className='font-normal text-gray-700 dark:text-gray-200 !mt-0'>{item.location}</p>
        <p className='!mt-0 !font-normal text-gray-700 dark:text-gray-50'>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  )
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ amount: 0.3 }}
      id='experience'
      className="relative flex flex-col gap-4 items-center justify-center h-auto sm:mb-40"
    >
      <VerticalTimeline lineColor="gray"
        animate={true}>
        {
          experiencesData.map((item, index) => (
            <ExperienceElement key={index} item={item} />
          ))
        }
      </VerticalTimeline>
    </motion.div>
  )
}