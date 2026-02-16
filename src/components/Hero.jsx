"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Signika } from "next/font/google";
import { TextLoop } from '@/components/ui/text-loop';

const signika = Signika({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Removed scaling and zooming as per user request ("keep the image of hero section unzoomed")
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background flex items-center transition-colors duration-300">
      {/* Background - Static/Parallax but NO ZOOM */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          className="w-full h-full object-cover opacity-80"
          src="/heroImages/RUGS.png"
          alt="Action Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent dark:from-background dark:via-background/40 dark:to-transparent transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent dark:from-background dark:via-transparent dark:to-transparent transition-colors duration-300" />
      </motion.div>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-600 rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
      </div>

      {/* Main Content - LEFT ALIGNED */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col justify-center h-full w-full px-6 md:px-16 lg:px-32 pt-20"
      >
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left space-y-6"
          >
            <div className={`space-y-2 ${signika.className}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Level Up Started
              </motion.div>

              <h1 className="text-3xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] uppercase tracking-tight transition-colors duration-300">
                UET
                <span className="text-red-600"> GAME </span>
                STUDIO
              </h1>

              <div className="text-sm md:text-lg font-medium flex items-center gap-3 text-gray-500 dark:text-gray-400 mt-4 transition-colors duration-300">
                <span className="h-px w-8 bg-gray-400 dark:bg-gray-600 transition-colors duration-300" />
                <span>BEYOND</span>
                <TextLoop
                  className="text-gray-900 dark:text-white font-bold transition-colors duration-300"
                  transition={{ type: "spring", stiffness: 900, damping: 80 }}
                >
                  <span>REALITY</span>
                  <span>IMMERSION</span>
                  <span>LIMITS</span>
                </TextLoop>
              </div>
            </div>

            <p className="max-w-lg text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed transition-colors duration-300">
              Crafting high-octane 2D and 3D worlds. From immersive VR battlegrounds to
              pixel-perfect mobile adventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://portal.uetgamestudio.com">
                <button className="group relative overflow-hidden bg-red-600 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)] text-sm">
                  <div className="relative flex items-center gap-2">
                    <Image src="/pad.png" alt="Gamepad" width={20} height={20} />
                    PLAY NOW
                  </div>
                </button>
              </Link>
              <Link href="/projects">
                <button className="group bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 dark:bg-white/5 dark:border-white/10 dark:text-white font-black px-8 py-4 rounded-xl transition-all dark:hover:bg-white/10 dark:hover:border-red-500/50 text-sm">
                  <div className="relative flex items-center gap-2">
                    <Image src="/playIcon.png" alt="Play" width={16} height={16} className="dark:invert-0invert" />
                    VIEW WORK
                  </div>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0 z-30 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-px h-10 bg-gradient-to-b from-red-600 to-transparent" />
      </motion.div>
    </div>
  );
}