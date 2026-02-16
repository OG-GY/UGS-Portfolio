"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "VR Experiences" },
    { href: "https://portal.uetgamestudio.com", label: "Games" },
    { href: "/models", label: "3D Models" },
    { href: "/about", label: "About Us" },
    { href: "/news", label: "Game News" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 lg:px-8 py-4 bg-white/90 dark:bg-[#0f1012]/90 backdrop-blur-md transition-all duration-300 border-b border-gray-200 dark:border-white/5 ${navbarShadow ? "shadow-lg shadow-black/5 dark:shadow-black/50 py-3" : ""
        }`}
    >
      {/* Logo */}
      <Link href="/" className="w-32 lg:w-36 transition-transform duration-300 hover:scale-105">
        <img src="/LogoUGS.png" alt="Logo" className="dark:hidden" />
        <img src="/LogoUGS.png" alt="Logo" className="hidden dark:block" />
        {/* If separate light/dark logos exist, use them. Assuming same logo works well on both or needs filter */}
      </Link>

      {/* Hamburger Menu Icon for small screens */}
      <div className="lg:hidden flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? (
              <Icon icon="mdi:white-balance-sunny" className="text-yellow-400 text-xl" />
            ) : (
              <Icon icon="mdi:moon-waning-crescent" className="text-blue-600 text-xl" />
            )}
          </button>
        )}
        <button onClick={toggleMenu} className="text-gray-900 dark:text-white hover:text-red-500 transition-colors focus:outline-none">
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width="32" height="32" />
        </button>
      </div>

      {/* Navigation Links for large screens */}
      <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link group relative text-sm font-medium transition-colors duration-300 ${pathname === link.href ? "text-red-600 dark:text-white" : "text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-white"
              }`}
          >
            {link.label}
            <span className={`absolute left-0 bottom-[-4px] h-0.5 bg-red-600 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
          </Link>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="hidden lg:flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Icon icon="mdi:white-balance-sunny" className="text-yellow-400 text-xl" />
            ) : (
              <Icon icon="mdi:moon-waning-crescent" className="text-blue-600 text-xl" />
            )}
          </button>
        )}

        <Link
          href={pathname == "/" ? "#contact" : "/about?tab=Contacts"}
          className="px-6 py-2.5 text-white text-sm font-semibold bg-gradient-to-r from-red-600 to-red-800 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-900/20 active:scale-95 flex items-center gap-2"
        >
          Get in Touch
          <Icon icon="mdi:arrow-right" className="text-lg" />
        </Link>
      </div>

      {/* Overlay Menu for small screens */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-[#0f1012] transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
        } pt-24 px-6 flex flex-col`}>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-white hover:pl-2 transition-all duration-300 text-xl py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between group"
          >
            {link.label}
            <Icon icon="mdi:chevron-right" className="opacity-0 group-hover:opacity-100 text-red-500 transition-opacity" />
          </Link>
        ))}

        <Link
          href="#contact"
          onClick={toggleMenu}
          className="mt-8 px-8 py-4 text-center text-white font-semibold bg-gradient-to-r from-red-600 to-red-800 rounded-xl shadow-lg shadow-red-900/20 active:scale-95 transition-all"
        >
          Get in Touch
        </Link>
      </div>
    </nav >
  );
}
