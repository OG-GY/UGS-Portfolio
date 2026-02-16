"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Technologies() {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    const technologies = [
        { name: "Unity", image: "/Tech Stacks/Unity.png" },
        { name: "Unreal Engine", image: "/Tech Stacks/UnrealEngine.png" },
        { name: "C Sharp", image: "/Tech Stacks/CSharp.png" },
        { name: "Next JS", image: "/Tech Stacks/Next Js.png" },
        { name: "React", image: "/Tech Stacks/React.png" },
        { name: "VS Code", image: "/Tech Stacks/VS Code.png" },
        { name: "Maya", image: "/Tech Stacks/Maya.png" },
        { name: "Blender", image: "/Tech Stacks/Blender.png" },
        { name: "Flutter", image: "/Tech Stacks/Flutter.png" },
        { name: "After Effects", image: "/Tech Stacks/After Effects.png" },
        { name: "Adobe Photoshop", image: "/Tech Stacks/Photoshop.png" },
        { name: "Adobe Illustrator", image: "/Tech Stacks/Illustrator.png" },
        { name: "Android Studio", image: "/Tech Stacks/AndroidStudio.png" },
    ];

    return (
        <section ref={ref} className="relative py-20 px-6 lg:px-32 overflow-hidden bg-gradient-to-br from-red-100 via-red-50 to-red-100 dark:from-red-700 dark:via-red-600 dark:to-red-800 transition-colors duration-300">
            {/* Ambient overlay for depth */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="text-red-800 dark:text-white/80 font-bold tracking-[0.3em] uppercase text-sm mb-4 block transition-colors duration-300"
                    >
                        Our Tech Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-red-900 dark:text-white tracking-tight transition-colors duration-300"
                    >
                        Technologies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-2xl mx-auto text-red-900 dark:text-white/80 text-base leading-relaxed mt-4 transition-colors duration-300"
                    >
                        We are passionate about unlocking our potential to maximum on mobile application development services being offered worldwide.
                    </motion.p>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 px-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative p-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-red-200 dark:border-white/20 hover:border-red-400 dark:hover:border-white/50 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                <img
                                    src={tech.image}
                                    alt={tech.name}
                                    className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300"
                                />
                            </div>
                            <p className="text-red-900 dark:text-white font-semibold text-sm mt-3 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
