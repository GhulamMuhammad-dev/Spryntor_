"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#0E0E10] text-white px-6">
      <div className="max-w-5xl text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#3F8CFF] to-[#001FEB] bg-clip-text text-transparent">
            Frontend
          </span>{" "}
          that Moves Products Forward.
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact">
            <Button
              className="px-6 py-6 text-lg font-semibold rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, #3F8CFF 0%, #001FEB 100%)",
              }}
            >
              Work With Me →
            </Button>
          </Link>

          <Link href="/work">
            <Button
              variant="outline"
              className="px-6 py-6 text-lg font-semibold rounded-xl border-[#3F8CFF] text-[#3F8CFF] hover:bg-[#3F8CFF] hover:text-white transition"
            >
              See My Work →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
