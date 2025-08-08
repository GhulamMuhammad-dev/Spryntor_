'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="bg-[#0E0E10] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-[#3F8CFF] shadow-lg">
            <Image
              src="/placeholder-profile.jpg"
              alt="Boby - Developer"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#F4F4F5] mb-6">
            Hi, Im Ghulam Muhammad the developer behind <span className="text-[#3F8CFF]">Spryntor</span>.
          </h2>
          <p className="text-[#A1A1AA] mb-4 leading-relaxed">
            I help SaaS founders, product managers, and UX/UI teams turn designs into
            production-ready frontends that feel fast, look stunning, and scale as your
            product grows.
          </p>
          <p className="text-[#A1A1AA] mb-4 leading-relaxed">
            With expertise in Next.js, React, Tailwind CSS, GSAP, and Framer Motion, I
            bridge the gap between design vision and technical execution. Every project I
            take on is built to be clean, maintainable, and delightful to use.
          </p>
          <p className="text-[#A1A1AA] leading-relaxed">
            When Im not coding, Im exploring new animation techniques and finding ways
            to make the web more interactive.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPage;
