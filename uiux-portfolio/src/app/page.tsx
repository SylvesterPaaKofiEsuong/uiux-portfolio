"use client"
import { cn } from "@/app/lib/utils";
import React from "react";
import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import FeaturesSectionDemo from "@/components/ui/features-section";
import { Timeline, projectData } from "@/components/ui/timeline";
import Testimonials from "@/components/ui/testimonials";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div
          className={cn(
            "absolute inset-0 -z-10",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_4px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_4px)]"
          )}
        />
        {/* Radial gradient overlay for faded look */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black"></div>
        {/* Hero Content with Framer Motion animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
        >
          <motion.div variants={itemVariants}>
            <Cover>
              <h1 className="text-2xl md:text-2xl font-bold text-white mb-4">
                Dynamic UI/UX Magic
              </h1>
            </Cover>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-7xl md:text-6xl font-bold text-zinc-200 mb-6">
              Transforming Ideas into<br />Seamless User Experiences
            </h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="max-w-2xl text-zinc-400 mb-8">
              Hi! I&apos;m <span className="font-semibold text-white">Nana Agyeman-Badu</span>, a passionate UI/UX Designer based in Accra, Ghana. <br />I craft creative, user-centered digital solutions that elevate brands and delight users.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ShimmerButton
              className="shadow-2xl px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:scale-105 transition-transform duration-200"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
               Show My Work
              </span>
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me / Features Section */}
      <section id="about" className="relative flex w-full items-center justify-center overflow-hidden py-20">
        {/* Reuse the same grid background as hero */}
        <div
          className={cn(
            "absolute inset-0 -z-10",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <FeaturesSectionDemo />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative flex w-full items-center justify-center overflow-hidden py-20">
        {/* Reuse the same grid background as hero */}
        <div
          className={cn(
            "absolute inset-0 -z-10",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <Timeline data={projectData} />
      </section>


      {/* Magic UI Velocity Scroll */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Foreground VelocityScroll */}
        <div className="relative z-10 w-full">
          <VelocityScroll> Designing At Its Best </VelocityScroll>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 h-full bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 h-full bg-gradient-to-l from-background to-transparent"></div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative flex w-full items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative flex w-full items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900">
        {/* Background TextHoverEffect */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <TextHoverEffect text="Contact" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl px-4 text-center gap-2">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">Contact</h2>
          <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">Nana Badu Agyeman-Badu</div>
          <div className="text-neutral-600 dark:text-neutral-400 mb-1">Accra, Ghana</div>
          <div className="mb-1">
            <a href="mailto:badunana117@gmail.com" className="underline hover:text-blue-600">badunana117@gmail.com</a> |
            <a href="mailto:badunana119@gmail.com" className="underline hover:text-blue-600 ml-1">badunana119@gmail.com</a>
          </div>
          <div className="mb-1 text-neutral-700 dark:text-neutral-300">Phone: +233 594514552</div>
          <div>
            <a href="https://www.linkedin.com/in/nana-badu-3a9184226" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
