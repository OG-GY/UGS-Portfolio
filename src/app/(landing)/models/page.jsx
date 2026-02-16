"use client";
import React from "react";
import ModelCard from "@/components/ModelCard";
import { modelsData } from "@/lib/modelsData";
import { motion } from "framer-motion";

export default function ModelsPage() {
    return (
        <div className="min-h-screen bg-[#0f1012] text-white">

            {/* Header Section */}
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
                        Digital Assets
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        3D Model <span className="text-red-600">Showcase</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-2xl mx-auto text-gray-400 text-base leading-relaxed"
                    >
                        Explore our collection of high-quality 3D models, designed for immersive game environments and cinematic experiences.
                    </motion.p>
                </div>
            </header>

            {/* Grid Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modelsData.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                </div>

                {/* Placeholder for adding new models */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 rounded-2xl border-2 border-dashed border-gray-800 flex flex-col items-center justify-center text-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    onClick={() => alert("To add a new model, edit src/lib/modelsData.js")}
                >
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Add Your Own Model</h3>
                    <p className="text-gray-500 max-w-xs">
                        Simply add a new entry to the <code className="text-red-400 bg-red-400/10 px-1 rounded">modelsData.js</code> file to see it appear here.
                    </p>
                </motion.div>
            </section>

        </div>
    );
}
