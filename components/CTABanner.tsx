'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const CTABanner = () => {
  return (
    <section className="bg-[#0E0E10] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white text-center md:text-left"
        >
          Let’s make your product’s frontend your <span className="text-[#3F8CFF]">competitive edge</span>.
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="bg-[#3F8CFF] hover:bg-[#001FEB] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition flex items-center gap-2"
          >
            Start Your Project
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
