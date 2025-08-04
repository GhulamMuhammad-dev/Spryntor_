'use client';

import Image from 'next/image';
import Card from './Card';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-0  overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/herobg.webp" // ✅ Replace with your actual image path
        alt="Hero Background"
        fill
        quality={80}
        priority
        className="object-cover"
      />

      {/* Light streak overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-black to-blue-500/30 blur-3xl z-[-10]" /> */}

      {/* Card */}
      <Card />
    </section>
  );
}
