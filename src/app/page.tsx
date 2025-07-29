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
import { AuroraText } from "@/components/magicui/aurora-text";

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
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div
          className={cn(
            "absolute inset-0 -z-10",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_4px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_4px)]"
          )}
        />
        {/* Radial gradient overlay for faded look */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] dark:bg-black"></div>
        {/* Hero Content with Framer Motion animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
        >
          {/* Place all child elements here, as nested JSX, not as a 'children' prop */}
          <motion.div variants={itemVariants}>
            <Cover>
              <h1 className="text-2xl md:text-2xl font-bold text-white mb-4">
                Dynamic UI/UX Magic
              </h1>
            </Cover>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-7xl md:text-6xl font-bold text-zinc-200 mb-6">
              Transforming Ideas into<br />Seamless <AuroraText>User Experiences</AuroraText>
            </h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="max-w-5xl text-zinc-300 mb-8">
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
      <section id="about" className="relative flex w-full items-center justify-center overflow-hidden py-20 bg-black">
        {/* Removed background grid and gradient overlay */}
        <FeaturesSectionDemo />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative flex w-full items-center justify-center overflow-hidden py-20 bg-black">
        {/* Removed background grid and gradient overlay */}
        <Timeline data={projectData} />
      </section>


      {/* Magic UI Velocity Scroll */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
        {/* Foreground VelocityScroll */}
        <div className="relative z-10 w-full">
          <VelocityScroll> Designing At Its Best </VelocityScroll>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 h-full bg-gradient-to-l from-black to-transparent"></div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative flex w-full items-center justify-center overflow-hidden py-20 bg-black">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative flex flex-col items-center justify-center overflow-hidden py-20 bg-black">
        {/* Animated Contact Heading at the Top */}
        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-7xl h-auto">
            <TextHoverEffect text="Contact" className="w-full h-[36vw] min-h-[80px] max-h-[180px]" />
          </div>
        </div>
        {/* Contact Card Below */}
        <div className="relative z-10 w-full max-w-md mx-auto px-4">
          <div className="relative flex flex-col items-center gap-4 rounded-2xl shadow-2xl p-8 border border-neutral-700 bg-gradient-to-br from-white/10 to-neutral-900/80 backdrop-blur-md">
            {/* Avatar/Profile Image */}
            <img src="../casual.png" alt="Nana Agyeman-Badu" className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg mb-2 object-cover bg-neutral-800" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Let’s Connect & Collaborate</h2>
            <p className="text-neutral-300 text-center text-base mb-1">I love working with creative teams and ambitious brands. Let’s build something amazing together!</p>
            <div className="text-neutral-400 text-xs mb-2">Accra, Ghana</div>
            <div className="w-full flex flex-col gap-2 divide-y divide-neutral-700">
              <div className="flex items-center gap-3 text-neutral-200 py-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.66 1.59l-7.5 7.5a2.25 2.25 0 01-3.18 0l-7.5-7.5a2.25 2.25 0 01-.66-1.59V6.75" /></svg>
                <a href="mailto:badunana117@gmail.com" className="hover:text-blue-400 underline">badunana117@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-neutral-200 py-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75zm0 0l9.75 7.5 9.75-7.5" /></svg>
                <a href="mailto:badunana119@gmail.com" className="hover:text-blue-400 underline">badunana119@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-neutral-200 py-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.66 1.59l7.5 7.5a2.25 2.25 0 003.18 0l7.5-7.5a2.25 2.25 0 00.66-1.59V6.75" /></svg>
                <span className="text-neutral-300">Phone: +233 594514552</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-200 py-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm6 12a6 6 0 00-12 0h12z" /></svg>
                <a href="https://www.linkedin.com/in/nana-badu-3a9184226" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline">LinkedIn</a>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
              <a href="mailto:badunana117@gmail.com" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-lg transition shadow-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg>
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/nana-badu-3a9184226" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-1.5 px-4 rounded-lg transition border border-neutral-700 shadow-lg text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72zm-7-9h-3v-9h3v9z"/></svg>
                LinkedIn
              </a>
              <a href="/Agyeman-Badu Nana Dumfeh CVs.pdf" download className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-4 rounded-lg transition shadow-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Download CV
              </a>
          </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full border-t border-neutral-800 bg-black py-6 flex items-center justify-center">
        <span className="text-neutral-400 text-sm text-center">&copy; {new Date().getFullYear()} Nana Agyeman-Badu. All rights reserved.</span>
      </footer>
    </>
  );
}
