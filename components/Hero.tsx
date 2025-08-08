"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center  text-white px-6 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 -z-20  top-0 left-0 w-full h-full">
        <Image
          src="/images/sprytorUI/dotPattren.png" // your dotted grid image
          alt="Background pattern"
          fill
          priority
          className="opacity-70"
        />
      </div>

      {/* Gradient / Wave Layer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] max-w-none -z-10 flex items-center justify-center">
        <Image
          src="/images/sprytorUI/circularGradient.png" // your blue arcs/gradient layer
          alt="Gradient background"
          width={1000}
          height={10}
          priority
          
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Frontend that Moves Products Forward.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-[#F4F4F5]/80 max-w-3xl mx-auto"
        >
          I help B2B & B2C SaaS startups, product teams, and UX/UI studios bring
          their designs to life with high-performance, stunning, and scalable
          frontend development.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href="/work">
            <Button className="px-6 py-6 text-lg font-semibold rounded-xl bg-white text-black hover:bg-[#3F8CFF] hover:text-white transition">
              Our Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
