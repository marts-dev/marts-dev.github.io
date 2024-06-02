"use client";

import { experiencesData } from '@/lib/data';
import { useInView } from 'framer-motion';
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
        visible={inView}
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem"
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af"
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className='font-semibold capitalize'>{item.title}</h3>
        <p className='font-normal !mt-0'>{item.location}</p>
        <p className='!mt-0 !font-normal text-gray-700'>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  )
}

export default function Experience() {

  return (
    <section
      id='experience'
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <VerticalTimeline lineColor=""
        animate={true}>
        {
          experiencesData.map((item, index) => (
            <ExperienceElement key={index} item={item} />
          ))
        }
      </VerticalTimeline>
    </section>
  )
}