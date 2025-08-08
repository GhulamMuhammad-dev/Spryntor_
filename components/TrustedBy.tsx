"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedBySection() {
  const logos = [
    "/logos/company1.svg",
    "/logos/company2.svg",
    "/logos/company3.svg",
    "/logos/company4.svg",
    "/logos/company5.svg",
    "/logos/company6.svg",
  ];

  return (
    <section className="bg-[#0E0E10] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Trusted By
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[#F4F4F5]/80 max-w-2xl mx-auto text-lg"
        >
          Delivering frontend solutions for founders, startups, and studios worldwide.
        </motion.p>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="relative h-12 w-28 mx-auto grayscale hover:grayscale-0 transition"
            >
              <Image
                src={logo}
                alt={`Company ${idx + 1}`}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100px, 150px"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
