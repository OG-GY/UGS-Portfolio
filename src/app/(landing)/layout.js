"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import GamingOverlay from "@/components/GamingOverlay";

export default function SecondaryLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="secondary-layout bg-[#0f1012]">
      <GamingOverlay />
      <header><Navbar /></header>
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
  