"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ModelCard from "./ModelCard";
import { modelsData } from "@/lib/modelsData";

export default function FeaturedModels() {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    // Show minimum 1 and maximum 3 models
    const featuredModels = modelsData.slice(0, 3);

    return (
        <section ref={ref} className="relative bg-white dark:bg-[#0f1012] py-24 px-6 lg:px-32 overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
            {/* Ambient Background Glow - REMOVED */}

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs block"
                        >
                            Digital Assets
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight uppercase tracking-tight transition-colors duration-300">
                            PREMIUM <span className="text-red-600">3D MODELS.</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <Link href="/models">
                            <button className="text-gray-900 dark:text-white text-xs font-semibold px-6 py-3 bg-white/5 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-white/10 dark:hover:bg-white/20 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300 active:scale-95 uppercase tracking-widest">
                                Explore All Models
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredModels.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-16 md:hidden"
                >
                    <Link href="/models">
                        <button className="text-white text-xs font-semibold px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl hover:from-red-500 hover:to-red-700 transition-all duration-300 active:scale-95 uppercase tracking-widest">
                            Browse Entire Collection
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center hidden md:block"
                >
                    <Link href="/models">
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="inline-flex items-center gap-3 text-red-500 font-bold text-sm uppercase tracking-widest group"
                        >
                            See more high-quality assets
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
