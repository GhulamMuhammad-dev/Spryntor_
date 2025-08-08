"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Sparkles, Zap, Link as LinkIcon } from "lucide-react";

export default function WhatIDoSection() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "From design to production-ready code, built with Next.js, React, and Tailwind CSS. Pixel-perfect, responsive, and SEO-friendly.",
      icon: <Code2 className="w-8 h-8 text-[#3F8CFF]" />,
    },
    {
      title: "UI Animation & Microinteractions",
      description:
        "Crafting smooth, engaging user experiences with GSAP and Framer Motion. Animations that feel natural, not distracting.",
      icon: <Sparkles className="w-8 h-8 text-[#3F8CFF]" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Lightning-fast load times, optimized assets, and clean code that scale with your product.",
      icon: <Zap className="w-8 h-8 text-[#3F8CFF]" />,
    },
    {
      title: "Integration & API Handling",
      description:
        "Seamless connections to REST or GraphQL APIs, ensuring your frontend works with real data.",
      icon: <LinkIcon className="w-8 h-8 text-[#3F8CFF]" />,
    },
  ];

  return (
    <section className="bg-[#0E0E10] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6"
        >
          What I Do
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="bg-[#0E0E10] border border-[#3F8CFF]/20 hover:border-[#3F8CFF] transition rounded-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#F4F4F5]/80">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
