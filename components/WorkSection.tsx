'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type WorkItem = {
  id: number;
  image: string;
  link: string;
  title: string;
  subtitle: string;
};

const workItems: WorkItem[] = [
  { id: 1, image: '/images/studioWebHero.png', link: '/case-study-1', title: 'How I made this glowing', subtitle: 'Effect in Figma?' },
  { id: 2, image: '/images/studioWebHero.png', link: '/case-study-2', title: 'How I made this glowing', subtitle: 'Effect in Figma?' },
  { id: 3, image: '/images/studioWebHero.png', link: '/case-study-3', title: 'Effect in Figma?', subtitle: '' },
];

type CardProps = {
  item: WorkItem;
  large?: boolean;
};

const Card: React.FC<CardProps> = ({ item, large }) => {
  return (
    <Link href={item.link}>
      <motion.div
        className={`relative rounded-2xl overflow-hidden border border-[#3F8CFF]/60 backdrop-blur-sm cursor-pointer group 
        ${large ? 'h-80' : 'h-64'}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Background Image */}
        <Image
          src={item.image}
          alt="Case Study Background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0E0E10]/60 group-hover:bg-[#0E0E10]/70 transition-all duration-300" />

        {/* Text + Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {item.title && (
            <h3 className="text-white/80 text-lg md:text-2xl font-medium leading-snug">
              {item.title}
            </h3>
          )}
          {item.subtitle && (
            <p className="text-white/90 text-2xl md:text-4xl font-bold mt-1">
              {item.subtitle}
            </p>
          )}
          <motion.button
            className="bg-[#3F8CFF] text-white font-medium px-5 py-2 rounded-md text-sm mt-4 shadow-lg hover:bg-[#001FEB] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Use Case
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section className="bg-[#0E0E10] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card item={workItems[0]} />
          <Card item={workItems[1]} />
        </div>

        {/* Bottom row */}
        <div className="mt-8">
          <Card item={workItems[2]} large />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
