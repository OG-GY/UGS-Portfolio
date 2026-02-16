"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Services() {
    const services = [
        {
            title: "Game Development",
            subtitle: "2D & 3D WORLDS",
            image: "/services/Full Cycle Game developmetn.png",
            desc: "Complete end-to-end development of industrial-strength commercial games.",
            category: "CORE"
        },
        {
            title: "Web Development",
            subtitle: "NEXT-GEN APPS",
            image: "/services/app development.png",
            desc: "Modern, high-performance web applications built for scale and speed.",
            category: "WEB"
        },
        {
            title: "VR/AR Production",
            subtitle: "IMMERSIVE REALITY",
            image: "/services/game art production.png",
            desc: "Step beyond reality with cutting-edge virtual and augmented experiences.",
            category: "FUTURE"
        },
        {
            title: "Design & Testing",
            subtitle: "QA & MECHANICS",
            image: "/services/Solution for brand new games.png",
            desc: "Meticulous game design followed by rigorous multi-platform testing.",
            category: "QUALITY"
        },
        {
            title: "Game Optimization",
            subtitle: "PERFORMANCE",
            image: "/services/Enhancement of  exisiting game.png",
            desc: "Level up existing titles with optimized shaders, assets, and code.",
            category: "MODERN"
        },
        // {
        //     title: "App Development",
        //     subtitle: "MOBILE MASTERY",
        //     image: "/services/Appdevelopment.png",
        //     desc: "High-performance custom Android and iOS mobile applications.",
        //     category: "MOBILE"
        // },
    ];

    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    return (
        <section ref={ref} className="relative bg-white dark:bg-[#0f1012] py-24 px-6 lg:px-32 overflow-hidden transition-colors duration-300">
            {/* Ambient Background Glows */}
            {/* Ambient Background Glows - REMOVED */}

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            className="text-red-500 font-bold tracking-[0.4em] uppercase text-xs block"
                        >
                            Our Expertise
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight uppercase tracking-tight transition-colors duration-300">
                            Our <span className="text-red-600">Services</span>
                        </h2>
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mx-auto w-auto">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center mt-16"
                >
                    <Link href="/services">
                        <button className="text-white text-xs font-semibold px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl hover:from-red-500 hover:to-red-700 transition-all duration-300 active:scale-95 uppercase tracking-widest">
                            View Deep Detail
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative w-full max-w-xs h-[380px] rounded-2xl overflow-hidden bg-gray-50 dark:bg-[#1a1b1e] border border-gray-200 dark:border-gray-800 hover:border-red-600/50 transition-all duration-300 flex flex-col items-center mx-auto"
        >
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden flex justify-center items-center">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent dark:from-[#1a1b1e] dark:to-transparent opacity-60 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="bg-red-600/90 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">
                        {service.category}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col h-[calc(380px-198px)] justify-between items-center text-center w-full">
                <div className="space-y-1.5 w-full">
                    <p className="text-red-500 font-bold text-[9px] tracking-widest uppercase">{service.subtitle}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-[11px] leading-relaxed line-clamp-3 transition-colors duration-300">
                        {service.desc}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-3 w-full">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:bg-red-600 transition-all mx-auto">
                        <Icon icon="mdi:arrow-right" className="text-gray-700 dark:text-white text-lg group-hover:text-white transition-colors" />
                    </div>

                    {/* Minimalist decoration */}
                    <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-0.5 h-3 bg-red-600/20 group-hover:bg-red-600 transition-colors" />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
