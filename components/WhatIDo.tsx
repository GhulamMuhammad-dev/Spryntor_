'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

export default function WhatIDoSection() {
  const services = [
    {
      title: 'Frontend Development',
      description:
        'From design to production-ready code, built with Next.js, React, and Tailwind CSS. Pixel-perfect, responsive, and SEO-friendly.',
      icon: <Code2 className="w-10 h-10 text-white" />,
      image: '/images/sprytorUI/glowLight.png', // your custom glowing image
    },
    {
      title: 'UI Animation & Microinteractions',
      description:
        'Crafting smooth, engaging user experiences with GSAP and Framer Motion. Animations that feel natural, not distracting.',
      icon: <Sparkles className="w-10 h-10 text-white" />,
      image: '/images/sprytorUI/glowLight.png',
    },
    {
      title: 'Performance Optimization',
      description:
        'Lightning-fast load times, optimized assets, and clean code that scale with your product.',
      icon: <Zap className="w-10 h-10 text-white" />,
      image: '/images/sprytorUI/glowLight.png',
    },
    {
      title: 'Integration & API Handling',
      description:
        'Seamless connections to REST or GraphQL APIs, ensuring your frontend works with real data.',
      icon: <LinkIcon className="w-10 h-10 text-white" />,
      image: '/images/sprytorUI/glowLight.png',
    },
  ];

  return (
    <section className="relative bg-[#0E0E10] text-white py-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          What I Do
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xs h-80 rounded-3xl overflow-hidden bg-[#101012] border border-blue-800   transition duration-300">
                {/* Glowing Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-30"
                  placeholder="blur"
                  blurDataURL={service.image}
                />

                {/* Optional glow overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-[#3F8CFF33] via-transparent to-transparent opacity-40 blur-2xl z-0"></div>

                {/* Card Content */}
                <div className="relative z-10 p-6 text-center flex flex-col justify-center h-full">
                  <div className="mb-4 flex justify-center items-center bg-black/30 border border-white/10 p-4 rounded-xl w-16 h-16 mx-auto backdrop-blur-md shadow-[0_0_15px_#3F8CFF55]">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#F4F4F5]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
