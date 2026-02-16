"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function GamingOverlay() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Custom Crosshair Cursor */}
            <motion.div
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    left: -20,
                    top: -20,
                }}
                className="hidden md:flex items-center justify-center w-10 h-10 border border-red-600/50 rounded-full mix-blend-difference"
            >
                <div className="w-1 h-1 bg-red-600 rounded-full" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-red-600/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2 bg-red-600/50" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-red-600/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-px bg-red-600/50" />
            </motion.div>

            {/* Floating UI Elements (Gaming HUD Elements) */}
            <div className="absolute top-24 left-10 opacity-20 hidden lg:block">
                <div className="flex flex-col gap-1">
                    <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            animate={{ width: ["100%", "30%", "100%"] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)]"
                        />
                    </div>
                    <span className="text-[8px] font-black tracking-tighter text-white">SYSTEM_CPU_LOAD</span>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
                <div className="text-right">
                    <span className="text-[8px] font-black text-gray-400 block tracking-[0.3em]">SECURE_SERVER_PORT</span>
                    <span className="text-sm font-black text-white italic">0x4F-229-UGS</span>
                </div>
            </div>

            {/* Scanline / Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 pointer-events-none" />
        </div>
    );
}
