"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

const Reminder = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className='relative py-24 px-6 lg:px-32 bg-[#0f1012]'>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className='relative group flex flex-col items-center text-center p-12 md:p-20 rounded-[3rem] bg-[#1a1b1e] border border-white/5 overflow-hidden'
            >
                {/* Background Patterns */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />

                <div className="relative z-10 flex flex-col items-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="flex items-center gap-4"
                    >
                        <div className="h-px w-8 bg-red-600" />
                        <span className="text-[10px] font-black tracking-[0.6em] text-red-500 uppercase">Deployment Ready</span>
                        <div className="h-px w-8 bg-red-600" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tight">
                        START YOUR <br />
                        <span className="text-red-700">ADVENTURE.</span>
                    </h2>

                    <p className="max-w-xl text-gray-500 font-normal text-base md:text-lg leading-relaxed">
                        Join the studio where imagination meets industrial-strength code.
                        Your next level starts with a single click.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="#contact"
                            className="group relative flex items-center gap-4 px-12 py-5 bg-red-600 text-white font-bold rounded-2xl shadow-lg transition-all uppercase tracking-widest text-sm"
                        >
                            Connect to Terminal
                            <Icon icon="mdi:lightning-bolt" className="text-xl animate-pulse" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Corner UI */}
                <div className="absolute top-8 left-8 flex gap-2 opacity-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className="absolute bottom-8 right-8 text-[10px] font-bold text-gray-700 font-mono tracking-widest select-none">
                    0x88_READY_FOR_UPGRADE
                </div>
            </motion.div>
        </section>
    );
}

export default Reminder;