"use client";

import MorphingDialog from "@/components/MorphingDialog";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const TeamMembers = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    const teamData = [
        {
            imageSrc: "/images/team/usman.jpg",
            title: "Dr. Usman Ghani",
            subtitle: "Director & Founder",
            description: "Visionary leader and founder driving innovation in game development.",
            link: "https://www.are.na/block/12759029"
        },
        {
            imageSrc: "/images/team/taiyaba.jpg",
            title: "Taiyaba Sanaullah",
            subtitle: "Team Lead",
            description: "Dedicated Team Lead ensuring smooth execution of game projects.",
            link: "https://www.linkedin.com/in/taiyaba-sanaullah-17651b15a/"
        },
        {
            imageSrc: "/images/team/ayesha.jpg",
            title: "Ayesha Azam",
            subtitle: "Game Design Consultant",
            description: "Creative Game Design Consultant shaping engaging player experiences.",
            link: "https://www.linkedin.com/in/ayeshaazam998/"
        },
        {
            imageSrc: "/images/team/zubaira.jpg",
            title: "Zubaira Naz",
            subtitle: "Game Dev Consultant",
            description: "Skilled Game Dev Consultant enhancing game mechanics and development.",
            link: "https://www.linkedin.com/in/zubaira-naz-29326bb2/"
        }
    ];

    return (
        <section ref={ref} className="relative py-28 px-6 lg:px-32 bg-[#0f1012] overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            className="text-red-500 font-black tracking-[0.5em] uppercase text-xs"
                        >
                            The Squad
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tight">
                            MEET THE <span className="text-red-600">ELITE.</span>
                        </h2>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <MorphingDialog
                                imageSrc={member.imageSrc}
                                title={member.title}
                                subtitle={member.subtitle}
                                description={member.description}
                                link={member.link}
                                altText={member.title}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Full Roster Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-20"
                >
                    <Link href="/about?tab=Team">
                        <button className="group flex items-center gap-6 text-white font-black uppercase tracking-widest text-xs hover:text-red-500 transition-colors">
                            <span className="h-px w-20 bg-gray-800 group-hover:bg-red-600 transition-all" />
                            VIEW FULL TEAM ROSTER
                            <span className="h-px w-20 bg-gray-800 group-hover:bg-red-600 transition-all" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamMembers;