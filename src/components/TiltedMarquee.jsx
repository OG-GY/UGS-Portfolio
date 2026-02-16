"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/marquee/1.png", alt: "Game Screenshot 1" },
  { src: "/images/marquee/2.png", alt: "Game Screenshot 2" },
  { src: "/images/marquee/3.png", alt: "Game Screenshot 3" },
  { src: "/images/marquee/4.png", alt: "Game Screenshot 4" },
  { src: "/images/marquee/5.png", alt: "Game Screenshot 5" },
  { src: "/images/marquee/6.png", alt: "Game Screenshot 6" },
  { src: "/images/marquee/7.png", alt: "Game Screenshot 7" },
  { src: "/images/marquee/8.png", alt: "Game Screenshot 8" },
  { src: "/images/marquee/9.png", alt: "Game Screenshot 9" },
];

export default function TiltedMarquee() {
  return (
    <div className="relative bg-[#0f1012] py-20 overflow-hidden">
      {/* Structural Label */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600" />
        <span className="text-[10px] font-black tracking-[0.5em] text-white uppercase italic">Active Playfield</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600" />
      </div>

      <div className="relative rotate-[-3deg] scale-[1.1] md:scale-[1.05]">
        {/* Top Marquee */}
        <div className="border-y border-white/5 bg-white/[0.02] py-4 backdrop-blur-sm">
          <Marquee gradient={false} speed={40} autoFill>
            {images.map((image, index) => (
              <div key={index} className="mx-4 group">
                <div className="relative w-64 h-36 overflow-hidden rounded-xl border border-gray-800 group-hover:border-red-600 transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  {/* Glow overlay removed */}
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Marquee (Opposing Direction) */}
        <div className="border-b border-white/5 bg-black/40 py-4 backdrop-blur-sm mt-4">
          <Marquee gradient={false} speed={30} autoFill direction="right">
            {images.slice().reverse().map((image, index) => (
              <div key={index} className="mx-4 group">
                <div className="relative w-64 h-36 overflow-hidden rounded-xl border border-gray-800 group-hover:border-blue-600 transition-all duration-500 shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Atmospheric Fog */}
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#0f1012] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#0f1012] to-transparent z-10 pointer-events-none" />

      {/* Corner UI Bits */}
      <div className="absolute bottom-4 left-10 opacity-20 flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-1 h-3 bg-red-600" />
        ))}
        <span className="text-[8px] font-bold text-white uppercase italic">STREAM_SYNC_SUCCESS</span>
      </div>
    </div>
  );
}
