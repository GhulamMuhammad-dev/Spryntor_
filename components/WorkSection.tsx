'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const workItems = [
  { id: 1, image: '/images/studioWebHero.png', link: '/case-study-1' },
  { id: 2, image: '/images/studioWebHero.png', link: '/case-study-2' },
  { id: 3, image: '/images/studioWebHero.png', link: '/case-study-3' },
];

const WorkSection = () => {
  return (
    <section className="bg-[#0E0E10] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F4F4F5] font-['UI_Creative_Studio_Bold'] mb-12 text-center">
          Case Studies
        </h2>

        {/* Top Row - Two Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workItems.slice(0, 2).map((item) => (
            <Link key={item.id} href={item.link}>
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden border border-[#3F8CFF] cursor-pointer group"
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.image}
                    alt="Case Study Background"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    className="bg-[#3F8CFF] text-white font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#001FEB] transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom Row - One Large Card */}
        <div className="mt-8">
          <Link href={workItems[2].link}>
            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden border border-[#3F8CFF] cursor-pointer group"
              initial={{ scale: 1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={workItems[2].image}
                  alt="Case Study Background"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  className="bg-[#3F8CFF] text-white font-semibold px-10 py-3 rounded-full text-base hover:bg-[#001FEB] transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Study
                </motion.button>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
