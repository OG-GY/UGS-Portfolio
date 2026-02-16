"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    id: 1,
    name: "Roren Stowell",
    company: "CEO, Thailand",
    logo: "/clients/client1.png",
    testimonial: `We had a VERY difficult project that required lots of back and forth and changes. The team always came through and helped us meet required changes and fixes, plus had nonstop support.`,
  },
  {
    id: 2,
    name: "B Strika",
    company: "CEO, Australia",
    logo: "/clients/client2.png",
    testimonial: `It is an absolute pleasure to work with them. They are patient and they listen to suggestions/feedback. I would highly recommend them.`,
  },
  {
    id: 3,
    name: "KD Herein",
    company: "CEO, India",
    logo: "/clients/user.png",
    testimonial: `They have exceeded my expectations from all angles. They understood game design and development work. Very easy to work with, they deliver great work!`,
  },
  {
    id: 4,
    name: "Frank Fedel",
    company: "US",
    logo: "/clients/FrankFedel.png",
    testimonial: `It was great working with UET Game Studio, they kept working with me even though the task was complex and required an unusual set of skills.`,
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          setSelectedTestimonial(prev => {
            const currentIndex = testimonials.findIndex((t) => t.id === prev.id);
            return testimonials[(currentIndex + 1) % testimonials.length];
          });
          return 0;
        }
        return p + 0.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-28 px-6 bg-[#0f1012] overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Left: Section Header & Progress */}
          <div className="w-full md:w-2/5 space-y-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                className="text-red-500 font-black tracking-[0.5em] uppercase text-xs"
              >
                Intel / Comms
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tight">
                CLIENT <br />
                <span className="text-red-600">FEEDBACK.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Signal Sync</span>
                <span className="text-[10px] font-black text-white uppercase italic">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setSelectedTestimonial(t); setProgress(0); }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-[#1a1b1e] border ${selectedTestimonial.id === t.id ? 'border-red-600 text-red-600 scale-110 shadow-lg' : 'border-white/5 text-gray-500 hover:border-white/20'}`}
                >
                  <span className="font-black text-xs text-inherit">{t.id}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Actual Content */}
          <div className="w-full md:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTestimonial.id}
                initial={{ opacity: 0, x: 50, skewX: 5 }}
                animate={{ opacity: 1, x: 0, skewX: 0 }}
                exit={{ opacity: 0, x: -50, skewX: -5 }}
                transition={{ duration: 0.5 }}
                className="relative p-10 md:p-14 bg-[#1a1b1e] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden group"
              >
                {/* Quote UI Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Icon icon="mdi:format-quote-close" className="text-[120px] text-white" />
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 p-1 border border-white/10 group-hover:border-red-600/50 transition-colors">
                      <img src={selectedTestimonial.logo} alt={selectedTestimonial.name} className="w-full h-full object-contain rounded-xl grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase italic">{selectedTestimonial.name}</h4>
                      <p className="text-red-600 font-black tracking-widest text-[10px] uppercase">{selectedTestimonial.company}</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-400 text-lg font-normal leading-relaxed border-l-4 border-red-600/40 pl-6 group-hover:border-red-600 transition-all">
                    "{selectedTestimonial.testimonial}"
                  </blockquote>
                </div>

                {/* HUD corner bits */}
                <div className="absolute bottom-8 right-8 flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-1 h-3 bg-red-600/20 group-hover:bg-red-600 transition-colors" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;