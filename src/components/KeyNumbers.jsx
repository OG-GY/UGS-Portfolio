"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function KeyNumbers() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    const [displayCount, setDisplayCount] = useState("0");
    const [unit, setUnit] = useState("");

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });

            const totalDuration = 3000; // 3 seconds total
            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / totalDuration, 1);

                // Ease out cubic function for smoother finish
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                let currentVal;
                if (easedProgress < 0.2) {
                    // Stage 1: 1 - 20 (fast start)
                    currentVal = Math.floor(easedProgress * 5 * 20);
                    setDisplayCount(currentVal.toString());
                    setUnit("");
                } else if (easedProgress < 0.5) {
                    // Stage 2: 20 - 1000
                    currentVal = Math.floor(20 + (easedProgress - 0.2) * 3.33 * 980);
                    setDisplayCount(currentVal.toString());
                    setUnit("");
                } else if (easedProgress < 0.8) {
                    // Stage 3: 1k - 1M
                    currentVal = ((easedProgress - 0.5) * 3.33 * 0.9).toFixed(1);
                    setDisplayCount(currentVal);
                    setUnit("M");
                } else {
                    // Stage 4: 1M - 2.0M
                    currentVal = (1 + (easedProgress - 0.8) * 5 * 1).toFixed(1);
                    setDisplayCount(currentVal);
                    setUnit("M");
                }

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setDisplayCount("2.0");
                    setUnit("M");
                }
            };

            requestAnimationFrame(animate);
        }
    }, [controls, inView]);

    const stats = [
        { icon: "mdi:trophy", label: "PROJECTS", value: "100+", color: "text-yellow-500" },
        { icon: "mdi:account-group", label: "RECURRING", value: "50+", color: "text-blue-500" },
        { icon: "mdi:sword-cross", label: "EXPERTS", value: "25+", color: "text-red-500" },
        { icon: "mdi:calendar-star", label: "YEARS", value: "10+", color: "text-purple-500" },
    ];

    return (
        <section ref={ref} className="relative py-32 px-6 lg:px-32 bg-[#0f1012] border-y border-white/5">
            {/* Background Data Stream Effect */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none font-mono text-[10px] text-red-500 flex flex-wrap gap-4 p-4 overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                    >
                        0x44 0x55 0x22 0x11 UGS_LEVEL_LOADED...
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Huge Counter */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                            Live Statistics
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-400 leading-tight tracking-tight">
                            DOMINATING THE <br />
                            <span className="text-red-800/80">GAMING FRONT</span>
                        </h2>

                        <div className="relative inline-block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                className="text-[80px] md:text-[180px] font-bold leading-none tracking-tighter text-white/5 absolute -top-10 -left-4 select-none"
                            >
                                {displayCount}
                            </motion.div>
                            <div className="relative flex items-baseline gap-4">
                                <span className="text-7xl md:text-[180px] font-black text-white">
                                    {displayCount}
                                </span>
                                <span className="text-4xl md:text-6xl font-black text-red-600">{unit}+</span>
                            </div>
                            <p className="text-base md:text-lg font-medium text-gray-500 mt-2 uppercase tracking-widest">
                                Global Game Installs
                            </p>
                        </div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative group p-8 rounded-3xl bg-[#1a1b1e] border border-gray-800 hover:border-red-500/50 transition-all shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <Icon icon={stat.icon} className="text-6xl text-white" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-red-500/30 transition-colors">
                                            <Icon icon={stat.icon} className={`text-xl ${stat.color}`} />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{stat.label}</span>
                                    </div>
                                    <div className="text-4xl font-bold text-white">{stat.value}</div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: "70%" } : {}}
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                            className="h-full bg-red-600"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}