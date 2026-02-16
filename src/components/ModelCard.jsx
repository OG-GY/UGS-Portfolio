"use client";
import React from "react";
import ModelViewer from "./ModelViewer";
import { motion } from "framer-motion";

export default function ModelCard({ model, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#1a1b1e] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
        >
            <div className="p-2">
                <ModelViewer url={model.file} name={model.name} />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest bg-red-500/10 px-2 py-0.5 rounded mb-2 inline-block">
                            {model.category || "3D Asset"}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-400 transition-colors duration-300">
                            {model.name}
                        </h3>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <polyline points="9 21 3 21 3 15"></polyline>
                            <line x1="21" y1="3" x2="14" y2="10"></line>
                            <line x1="3" y1="21" x2="10" y2="14"></line>
                        </svg>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {model.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-4">
                    <button className="text-white text-xs font-semibold px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 active:scale-95">
                        View Details
                    </button>
                    <span className="text-[10px] text-gray-500 font-mono">
                        {model.file.split('/').pop()}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
