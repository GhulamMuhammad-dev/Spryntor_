// components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Spryntor
          </Link>
        </motion.div>

        {/* Nav Links */}
        <motion.div
          className="flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/services" className="text-white hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="/work" className="text-white hover:text-blue-400 transition">
            Work
          </Link>
          <Link href="/process" className="text-white hover:text-blue-400 transition">
            Process
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
