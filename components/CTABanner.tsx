'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// Replace with your actual image path

const CTABanner = () => {
  return (
    <section className="bg-[#0E0E10] py-16 px-4">
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden p-10 sm:p-16 shadow-lg border border-blue-800 bg-[#0A0A23]">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src='/images/sprytorUI/curveGlow.png'
            alt="Glowing background"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
        </div>

        {/* Optional Glow Overlays (on top of image) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2 opacity-80 blur-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3F8CFF] via-transparent to-transparent animate-pulse" />
          <div className="absolute top-2/3 left-0 w-full h-full transform -translate-y-1/2 opacity-60 blur-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3F8CFF] via-transparent to-transparent" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-20 text-center flex flex-col items-center justify-center gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Let’s make your product’s <br />
            frontend your <span className="text-white">competitive edge</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="bg-black hover:bg-[#111] text-white font-medium px-6 py-3 rounded-full transition shadow-md hover:shadow-[0_0_20px_rgba(63,140,255,0.4)]"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
