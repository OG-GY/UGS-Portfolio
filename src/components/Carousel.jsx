"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { heroprojects } from "@/lib/projectsData";

export default function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(p => (p + 1) % heroprojects.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentProject = heroprojects[currentIndex];

  return (
    <div ref={ref} className="relative bg-[#0b0c0e] w-full h-[90vh] overflow-hidden border-y border-white/5">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={currentProject.coverImage}
            alt={currentProject.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-[#0f1012]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1012] via-[#0f1012]/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-red-500">MISSION_TARGET</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 uppercase">
                {currentProject.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-red-700 block" : "block"}>{word} </span>
                ))}
              </h2>

              <p className="text-lg text-gray-400 font-normal leading-relaxed mb-10 max-w-xl">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link href={currentProject.link || "#"}>
                  <button className="group relative overflow-hidden bg-white text-black font-black px-12 py-5 rounded-2xl transition-all hover:bg-red-600 hover:text-white flex items-center gap-3">
                    <Icon icon="mdi:sword" className="text-xl" />
                    EXECUTE
                  </button>
                </Link>

                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black text-gray-500 tracking-widest uppercase">SYMLINK_STATUS</span>
                  <span className="text-xs font-black text-white uppercase italic">{currentProject.status || "ACTIVE_LOAD"}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Level Progress Indicator */}
        <div className="absolute left-6 bottom-12 right-6 md:right-auto md:w-96 space-y-2">
          <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-gray-500 uppercase">
            <span>Data Sync</span>
            <span>{currentIndex + 1} / {heroprojects.length}</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button
          onClick={() => { setCurrentIndex(p => (p - 1 + heroprojects.length) % heroprojects.length); setProgress(0); }}
          className="w-14 h-14 rounded-2xl bg-[#1a1b1e] border border-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 transition-all active:scale-95"
        >
          <Icon icon="mdi:chevron-left" className="text-2xl" />
        </button>
        <button
          onClick={() => { setCurrentIndex(p => (p + 1) % heroprojects.length); setProgress(0); }}
          className="w-14 h-14 rounded-2xl bg-[#1a1b1e] border border-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 transition-all active:scale-95"
        >
          <Icon icon="mdi:chevron-right" className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
