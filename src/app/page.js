"use client";

import { useState, useEffect } from "react";
import HomePage from "./(landing)/home/page";
import Loading from "./loading";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loader" />
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen bg-[#0f1012]"
        >
          <HomePage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
