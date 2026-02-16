'use client';
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#0a0a0b] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300" id="footer">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>

      <div className="py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-gray-900 dark:text-white transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-400 dark:from-white dark:to-gray-400">
                UET Game Studio
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                Pakistan's premier university-based game development studio, creating innovative mobile games and training future game developers.
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Icon icon="mdi:map-marker" className="text-red-500 mr-2 text-lg" />
                <span className="text-sm">UET Lahore, Punjab, Pakistan</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/games", label: "Our Games" },
                  { href: "/services", label: "Services" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-red-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Mobile Game Development",
                  "Unity 3D Development",
                  "AR Development",
                  "Game Designing",
                  "Games Enhancement",
                ].map((service) => (
                  <li key={service} className="text-sm text-gray-600 dark:text-gray-400">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-6">Connect With Us</h3>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-400 transition-colors duration-300">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Icon icon="mdi:email" className="text-red-500 text-sm" />
                  </div>
                  <a href="mailto:contact@uetgamestudio.com" className="text-sm">
                    contact@uetgamestudio.com
                  </a>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mr-3">
                    <Icon icon="mdi:web" className="text-red-500 text-sm" />
                  </div>
                  <span className="text-sm">uetgamestudio.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xs font-medium mb-4 text-gray-500 uppercase tracking-wider">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: "mdi:linkedin", href: "https://www.linkedin.com/company/uet-game-studio/posts/?feedView=all", label: "LinkedIn" },
                    { icon: "mdi:facebook", href: "https://web.facebook.com/uetgamestudio/", label: "Facebook" },
                    { icon: "mdi:twitter", href: "https://twitter.com/uetgamestudio", label: "Twitter" },
                    { icon: "mdi:youtube", href: "https://youtube.com/@uetgamestudio", label: "YouTube" },
                    { icon: "mdi:instagram", href: "https://instagram.com/uetgamestudio", label: "Instagram" },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={`Follow UET Game Studio on ${social.label}`}
                    >
                      <Icon icon={social.icon} className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &copy; {currentYear} UET Game Studio. All Rights Reserved.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-500 mt-1">
                  University of Engineering and Technology, Lahore
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-center">
                {[
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms-of-service", label: "Terms of Service" },
                  { href: "/sitemap", label: "Sitemap" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-red-400 transition-colors duration-300 group"
                aria-label="Back to top"
              >
                <Icon icon="mdi:arrow-up" className="mr-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Schema for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UET Game Studio",
            "url": "https://uetgamestudio.com",
            "logo": "https://uetgamestudio.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92-xxx-xxxxxxx",
              "contactType": "customer service",
              "email": "contact@uetgamestudio.com",
              "areaServed": "PK",
              "availableLanguage": "en"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lahore",
              "addressRegion": "Punjab",
              "addressCountry": "Pakistan"
            },
            "sameAs": [
              "https://www.linkedin.com/company/uet-game-studio",
              "https://web.facebook.com/uetgamestudio",
              "https://twitter.com/uetgamestudio",
              "https://youtube.com/@uetgamestudio"
            ]
          })
        }}
      />
    </footer>
  );
}
