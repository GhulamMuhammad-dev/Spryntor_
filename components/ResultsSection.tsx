'use client';
import { motion } from 'framer-motion';
import React from 'react';

const ResultsSection = () => {
  return (
    <section className="bg-[#0E0E10] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#F4F4F5] font-['UI_Creative_Studio_Bold'] mb-6"
        >
          Results That Matter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Better frontend = better product experience.
          <br /> Every project I deliver focuses on <span className="text-[#3F8CFF] font-semibold">speed</span>,{' '}
          <span className="text-[#3F8CFF] font-semibold">usability</span>, and{' '}
          <span className="text-[#3F8CFF] font-semibold">delight</span> — because great design deserves great execution.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#001FEB' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-[#3F8CFF] text-white font-semibold px-8 py-3 rounded-full text-base shadow-lg hover:shadow-blue-500/50 transition"
        >
          View My Work
        </motion.button>
      </div>
    </section>
  );
};

export default ResultsSection;
