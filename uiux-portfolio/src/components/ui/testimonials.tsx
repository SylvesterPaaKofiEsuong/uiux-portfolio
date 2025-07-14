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

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full max-w-xl mx-auto py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg px-8 py-10 flex flex-col items-center text-center min-h-[260px]"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-blue-400"
            />
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-6">“{testimonial.text}”</p>
            <div className="font-semibold text-blue-600 dark:text-blue-400">{testimonial.name}</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 rounded-full shadow p-2 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-blue-500" : "bg-neutral-300 dark:bg-neutral-700"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 