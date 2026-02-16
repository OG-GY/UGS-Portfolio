"use client";
import { projects } from "@/lib/projectsData";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} id="projects" className="relative py-28 px-6 lg:px-16 bg-white dark:bg-[#0f1012] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-red-500 font-bold tracking-[0.5em] uppercase text-xs"
            >
              Game Library
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight uppercase tracking-tight transition-colors duration-300">
              FEATURED <span className="text-red-600">TITLES.</span>
            </h2>
          </div>
          <Link href="https://portal.uetgamestudio.com">
            <button className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-xs font-bold tracking-widest uppercase group">
              View All Games
              <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* New Layout: Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white dark:bg-[#1a1b1e] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-red-600/50 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              {/* Top: Image Area */}
              <div className="relative aspect-square bg-gray-50 dark:bg-[#141517] p-8 flex items-center justify-center overflow-hidden transition-colors duration-300">
                {/* Subtle radial gradient behind icon */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] transition-colors duration-300" />

                <img
                  src={project.iconImage}
                  alt={project.title}
                  className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                />
              </div>

              {/* Bottom: Info Area */}
              <div className="flex-1 p-6 flex flex-col justify-between bg-white dark:bg-[#1a1b1e] transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest bg-red-50 dark:bg-red-500/10 px-2 py-0.5 rounded transition-colors duration-300">
                      Mobile
                    </span>
                    <span className="text-[9px] font-mono text-gray-400 dark:text-gray-600 transition-colors duration-300">#{project.key}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between transition-colors duration-300">
                  <Link href={`https://portal.uetgamestudio.com/games/${project.key}`} className="w-full">
                    <button className="w-full flex items-center justify-center gap-2 text-[10px] font-bold text-gray-900 dark:text-white hover:text-white bg-gray-100 dark:bg-white/5 hover:bg-red-600 dark:hover:bg-red-600 py-3 rounded-lg border border-gray-200 dark:border-white/5 transition-all uppercase tracking-wider">
                      Play Now
                      <Icon icon="mdi:play" className="text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}