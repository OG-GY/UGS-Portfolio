"use client";
import { useState, useEffect } from "react";
import { VRprojects } from "@/lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

export default function VRProjects() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const playVideo = (videoURL) => {
    setCurrentVideo(videoURL);
    setIsVideoPlaying(true);
  };

  const closeModal = () => {
    setIsVideoPlaying(false);
    setCurrentVideo(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVideoPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoPlaying]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1012] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header Section - Exact match to /models */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Immersive Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 transition-colors duration-300"
          >
            360° VR <span className="text-red-600">Worlds</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300"
          >
            Dive into the immersive worlds we've created. Experience gaming like never before!
          </motion.p>
        </div>
      </header>

      {/* Grid Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VRprojects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1b1e] hover:border-red-500/50 transition-all duration-300 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => playVideo(project.video)}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-red-600/30">
                    <Play className="ml-1 fill-white" />
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#1a1b1e] relative z-20 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">{project.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300">VR Experience</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for video popup */}
      <AnimatePresence>
        {isVideoPlaying && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-y-auto"
            onClick={closeModal}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#1a1b1e] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl my-auto transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
              style={{ margin: 'auto' }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <h3 className="text-gray-900 dark:text-white font-bold transition-colors duration-300">VR Experience Preview</h3>
                <button
                  className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-red-600 rounded-full p-2"
                  onClick={closeModal}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <video
                  src={currentVideo}
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  loop
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
