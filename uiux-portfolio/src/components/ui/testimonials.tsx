"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Working with Nana was a fantastic experience. The UI/UX was top-notch and communication was seamless!",
    name: "Jane Doe",
    role: "Product Manager, Acme Corp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Nana's creativity and attention to detail brought our vision to life. Highly recommended!",
    name: "John Smith",
    role: "CEO, StartupX",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Professional, reliable, and incredibly talented. Our users love the new design!",
    name: "Emily Chen",
    role: "CTO, TechFlow",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-neutral-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H7zm10 0a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2z" /></svg>
);

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-neutral-900 dark:text-neutral-100 tracking-tight">What Clients Say</h2>
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-md px-8 py-10 flex flex-col md:flex-row items-center md:items-start text-left min-h-[220px] md:min-h-[180px]"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-8 object-cover border border-neutral-300 dark:border-neutral-700 grayscale"
            />
            <div className="flex-1 flex flex-col items-center md:items-start">
              <QuoteIcon />
              <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 mb-4 font-medium leading-relaxed">{`"${testimonial.text}"`}</p>
              <div className="font-semibold text-neutral-900 dark:text-neutral-100">{testimonial.name}</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          aria-label="Previous testimonial"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 17l-5-5 5-5" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          aria-label="Next testimonial"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7l5 5-5 5" /></svg>
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition border border-neutral-300 dark:border-neutral-700 ${i === index ? "bg-neutral-800 dark:bg-neutral-200" : "bg-neutral-200 dark:bg-neutral-700"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 