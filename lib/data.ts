import React from "react";
import {
  IconDeviceLaptop,
  IconSchool,
} from "@tabler/icons-react";

export const experiencesData = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "FEU Institute of Technology, Manila, Philippines",
    description: 
      "Obtained a Bachelor of Science degree in Computer Science with a specialization in Software Engineering.",
    icon: React.createElement(IconSchool),
    date: "2014"
  },
  {
    title: "Software Engineer",
    location: "Nokia, Philippines",
    description: 
      "Worked on embedded systems for LTE and 5G DoCoMo. Got recognized as the subject matter expert for the OAM (Operations and Maintenance) component of DoCoMo Middleware.",
    icon: React.createElement(IconDeviceLaptop),
    date: "Oct 2014 - Jun 2019",
    technologies: ["C", "Python", "SVN", "Git"]
  },
  {
    title: "Freelance Web Developer",
    location: "Besnard Consulting, Remote(France)",
    description: 
      "Worked on a Django Web Application for Pension Risk Calculation.",
    icon: React.createElement(IconDeviceLaptop),
    date: "Sept 2020 - Nov 2020",
    technologies: ["Python", "VueJS", "Django", "Git"]
  },
  {
    title: "Contingency Worker for Willis Towers Watson",
    location: "Nityo InfoTech, Philippines, Remote(UK)",
    description: 
      "Worked as a Calculations Developer responsible for reviewing the specification provided by analyst and updating the existing automations.",
    icon: React.createElement(IconDeviceLaptop),
    date: "May 2021 - Nov 2021",
    technologies: ["Python", "Oracle SQL", "Git"]
  },
  {
    title: "Software Developer",
    location: "FPT Software Philippines Corp., Philippines",
    description: 
      "I worked on feature development for an Android TV application. I was also responsible for documenting development procedures.",
    icon: React.createElement(IconDeviceLaptop),
    date: "Nov 2021 - Sept 2022",
    technologies: ["Kotlin", "C++", "Java", "Git"]
  },
  {
    title: "Application Solutions Specialist/Technical Consultant",
    location: "(Sognare Systems & Solutions Corp., Philippines",
    description: 
      "I worked on assessing and reviewing customer software application needs and advice th e appropriate solution. I also worked on in-house web application development.",
    icon: React.createElement(IconDeviceLaptop),
    date: "Sept 2022 - Present",
    technologies: ["Shopify", "Hubspot", "NextJS", "React"]
  },
]

