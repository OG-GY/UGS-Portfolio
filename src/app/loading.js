"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1012] overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Center Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo with clean animation */}
        <motion.div
          animate={{ 
            opacity: [0.7, 1, 0.7],
            scale: [0.98, 1, 0.98]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-12"
        >
          <img
            src="/logo.png"
            alt="UGS Logo"
            className="w-40 md:w-56 h-auto drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          />
        </motion.div>

        {/* Minimal Progress Indicator */}
        <div className="w-48 space-y-3">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500">Loading</span>
            <span className="text-xs font-bold text-white tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>
          
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
