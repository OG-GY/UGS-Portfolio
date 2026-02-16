"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ContactForm } from "./ContactForm";
import { Icon } from "@iconify/react";

export default function ContactUs() {
    const ref = useRef(null);
    const inView = useInView(ref, {
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="relative transition-colors duration-300" id="contact">
            <div className="bg-gray-50 dark:bg-[#0f1012] py-28 px-6 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
                <div className="relative z-10 max-w-7xl mx-auto">


                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
                        {/* Left: Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-4">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs"
                                >
                                    Contact Us
                                </motion.span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight uppercase tracking-tight transition-colors duration-300">
                                    Let's <span className="text-red-600">Connect.</span>
                                </h2>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
                                Have a project in mind or just want to explore the possibilities?
                                We're here to help turn your vision into reality.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="mailto:contact@uetgamestudio.com"
                                    className="flex items-center gap-4 group p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 hover:border-red-600/30 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-all shadow-sm dark:shadow-none"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                        <Icon icon="mdi:email" className="text-2xl" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</span>
                                        <span className="text-base font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">
                                            contact@uetgamestudio.com
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                className="bg-white dark:bg-[#1a1b1e] rounded-3xl border border-gray-200 dark:border-white/5 p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-red-600/30 transition-colors duration-300"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Send Message</h3>
                                    <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                                </div>

                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
