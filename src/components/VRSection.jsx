"use client";

import { VRprojects } from "@/lib/projectsData";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const VRSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeLoadError, setIframeLoadError] = useState(false);
  const iframeTimeoutRef = useRef(null);

  const getWatchUrl = (embedUrl) => {
    const m = String(embedUrl).match(/embed\/([A-Za-z0-9_-]+)/);
    const id = m ? m[1] : null;
    return id ? `https://www.youtube.com/watch?v=${id}` : embedUrl;
  };

  const openOnYouTube = (embedUrl) => {
    const watch = getWatchUrl(embedUrl || currentVideo);
    window.open(watch, "_blank", "noopener,noreferrer");
  };

  const toEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return null;

    // already an embed URL
    const embedMatch = url.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
    if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}?autoplay=1&rel=0`;

    // shorts, watch?v= or youtu.be links
    const shortsMatch = url.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]+)/);
    const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]+)/);
    const shortUrlMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
    const id = (shortsMatch && shortsMatch[1]) || (watchMatch && watchMatch[1]) || (shortUrlMatch && shortUrlMatch[1]);

    if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

    // fallback: return original string (may still fail to embed)
    return url;
  };

  const playVideo = (rawUrl) => {
    const embed = toEmbedUrl(rawUrl);
    if (!embed) {
      console.warn("Invalid video URL:", rawUrl);
      return;
    }

    // reset state + cancel any previous timeout
    clearTimeout(iframeTimeoutRef.current);
    setIframeLoaded(false);
    setIframeLoadError(false);

    setCurrentVideo(embed);
    setIsVideoPlaying(true);

    // if iframe doesn't load (onLoad) within 3.5s, show fallback UI
    iframeTimeoutRef.current = setTimeout(() => {
      setIframeLoadError(true);
    }, 3500);
  };

  const closeModal = () => {
    setIsVideoPlaying(false);
    setCurrentVideo(null);
    setIframeLoaded(false);
    setIframeLoadError(false);
    clearTimeout(iframeTimeoutRef.current);
  };

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-32 bg-[#0f1012] overflow-hidden border-b border-white/5">
      {/* Background Atmosphere */}
      {/* Background Atmosphere - REMOVED */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs block"
            >
              Immersive Protocol
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
              BEYOND <span className="text-red-600">VR.</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Sync with our neural-grade virtual environments. Low latency, high immersion experiences
              built for the next generation of digital interaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VRprojects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative w-full h-[420px] rounded-2xl overflow-hidden bg-[#1a1b1e] border border-gray-800 hover:border-red-600/50 transition-all duration-300"
            >
              {/* Thumbnail with play button overlay */}
              <div className="relative h-64 overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => playVideo(project.iframe)}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1e] to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/80 hover:bg-red-600/90 text-black hover:text-white rounded-full p-4 shadow-lg transition-all flex items-center justify-center">
                    <Icon icon="mdi:play" className="text-3xl" />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col h-[calc(420px-256px)] justify-between">
                <div className="space-y-2">
                  <p className="text-red-500 font-bold text-[10px] tracking-widest uppercase">XR EXPERIENCE</p>
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-red-500 transition-colors uppercase tracking-tighter">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, rotateX: 20 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-[#1a1b1e] rounded-3xl overflow-hidden border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <iframe
                src={currentVideo}
                title="VR Video"
                width="100%"
                height="100%"
                frameBorder="0"
                onLoad={() => {
                  setIframeLoaded(true);
                  setIframeLoadError(false);
                  clearTimeout(iframeTimeoutRef.current);
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-contain rounded-3xl"
              ></iframe>

              {iframeLoadError && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/70 p-6 text-center">
                  <p className="text-white mb-4">Embedding failed or is blocked by the browser — open directly on YouTube.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => openOnYouTube()}
                      className="bg-white text-black font-bold px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition-colors"
                    >
                      Open on YouTube
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-transparent border border-white/20 text-white px-4 py-2 rounded-md hover:bg-white/5 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default VRSection;