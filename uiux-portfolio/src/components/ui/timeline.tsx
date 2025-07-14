"use client";
import {    
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: string;
  link?: string;
  role?: string;
  tech?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Professional Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          A visual journey through my education, certifications, and design career.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export const projectData = [
  {
    title: "2019",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Started Bachelor&apos;s Degree in Communication Design at KNUST. Began exploring UI/UX and graphic design, building foundational skills in Figma and Adobe Suite.
        </p>
      </div>
    ),
  },
  {
    title: "2020 – Present (Freelance)",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Freelance Graphic & UI/UX Designer<br />
          • Provided graphic design, branding, and UI/UX solutions for clients in technology, healthcare, and real estate.<br />
          • Created wireframes, prototypes, and high-fidelity designs for mobile and web applications.<br />
          • Developed brand identities, logos, and marketing materials for startups and established companies.<br />
          • Conducted usability testing and user research to optimize digital experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/Food_Ordering_App_1.png" alt="Food Ordering App 1" className="h-20 w-32 rounded-lg object-cover" />
          <img src="/casual .png" alt="Casual" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
  {
    title: "2020 – 2023 (Tidy Up 24/7)",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Lead Graphic & UI/UX Designer, Tidy Up 24/7 (Landscape Design & Real Estate)<br />
          • Led a design team to create branding materials, website UI/UX layouts, and marketing assets for clients.<br />
          • Managed and supervised design projects from concept to completion, ensuring brand consistency and effectiveness.<br />
          • Designed engaging, user-friendly website and mobile app interfaces using Figma and Adobe XD.<br />
          • Improved digital presence by 40% through strategic UI/UX enhancements and SEO-friendly design.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/freestyle 1.png" alt="Freestyle 1" className="h-20 w-32 rounded-lg object-cover" />
          <img src="/freestyle 2.png" alt="Freestyle 2" className="h-20 w-32 rounded-lg object-cover" />
          <img src="/freestyle 3.png" alt="Freestyle 3" className="h-20 w-32 rounded-lg object-cover" />
          <img src="/Graphics.png" alt="Graphics" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Figma Advanced Design & Prototyping Certification<br />
          • Developed interactive prototypes and design systems for real estate and fintech clients.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/GTI_Project.png" alt="GTI Project" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Adobe Certified Professional in Graphic Design & Illustration<br />
          • Designed engaging marketing materials and motion graphics for multiple startups.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/Graphics.png" alt="Graphics" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Google UX Design Professional Certificate<br />
          • Major freelance projects for tech and healthcare clients, focusing on user research and high-fidelity prototyping.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/Food_Ordering_App.png" alt="Food Ordering App" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
  {
    title: "2024 – Present (Ministry of Works and Housing)",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Graphic & UI/UX Designer, Ministry of Works and Housing<br />
          • Designed and printed over 1,000 staff ID cards and commercial driver&apos;s licenses, streamlining administrative efficiency.<br />
          • Led the department&apos;s digital transformation by redesigning the internal portal for better accessibility and user experience.<br />
          • Collaborated with IT and management teams to improve visual communication across the ministry&apos;s platforms.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/GTI_Project.png" alt="GTI Project" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
  {
    title: "2025 (Family Bank)",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Helped in building the mobile user interface for Family Bank&apos;s internet banking solution.<br />
          • Designed secure and user-friendly banking interfaces that prioritize both functionality and user experience for financial transactions.
        </p>
        <div className="flex flex-wrap gap-4">
          <img src="/Family_Bank_Project.png" alt="Family Bank" className="h-20 w-32 rounded-lg object-cover" />
        </div>
      </div>
    ),
  },
];

