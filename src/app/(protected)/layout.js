"use client";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center w-full p-5 z-20 backdrop-blur-lg px-6 md:px-16 bg-slate-900/50">
      {/* Left Side (Logo or Icon) */}
      {/* <div className="flex items-center space-x-4">
        <Link href="/games">
        <Icon icon="mdi:menu" width="32" height="32" className="text-white" />
        </Link>
      </div> */}

      {/* Center - Title */}
      <div className="text-center">
        <motion.h1
          className="md:text-3xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-700 animate-gradient-move"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          UET Game Studio
        </motion.h1>
      </div>

      {/* Right Side - Auth Buttons */}
      <div className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton>
            <button className="text-white px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="text-white px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default function Layout({ children }) {
  return (
    <div className="relative h-full bg-gradient-to-br from-purple-900 via-black to-gray-900">
      {/* Background Gradient Wrapper with overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Circles */}
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-800 opacity-30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.6, 1.2, 1.9, 1.5],
            rotate: [0, 0, 360, 270, 0],
            x: [-50, 50, -30, 30, -50],
            y: [-50, 30, -30, 50, -50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-red-400 to-purple-800 opacity-30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.5, 1.8, 1.4, 1.7],
            rotate: [0, 0, -360, -270, 0],
            x: [50, -30, 40, -40, 50],
            y: [50, -40, 30, -50, 50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}

