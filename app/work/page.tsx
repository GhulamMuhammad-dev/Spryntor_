"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description:
      "Description of challenge + results. This project focused on delivering a responsive web app with interactive animations.",
    tech: "Next.js, Tailwind CSS, GSAP",
    image: "/images/placeholder1.jpg",
  },
  {
    id: 2,
    name: "Project Beta",
    description:
      "Description of challenge + results. Performance optimization and UX improvements were key goals.",
    tech: "Next.js, Tailwind CSS, GSAP",
    image: "/images/placeholder2.jpg",
  },
  {
    id: 3,
    name: "Project Gamma",
    description:
      "Description of challenge + results. Created a sleek dashboard experience for data visualization.",
    tech: "Next.js, Tailwind CSS, GSAP",
    image: "/images/placeholder3.jpg",
  },
  {
    id: 4,
    name: "Project Delta",
    description:
      "Description of challenge + results. Focused on microinteractions to enhance usability.",
    tech: "Next.js, Tailwind CSS, GSAP",
    image: "/images/placeholder4.jpg",
  },
  {
    id: 5,
    name: "Project Epsilon",
    description:
      "Description of challenge + results. Integrated APIs for real-time updates.",
    tech: "Next.js, Tailwind CSS, GSAP",
    image: "/images/placeholder5.jpg",
  },
  {
    id: 6,
    name: "Project Zeta",
    description:
      "Description of challenge + results. Smooth animations and performance enhancements.",
    tech: "Next.js, Tailwind CSS, GSAP",
    image: "/images/placeholder6.jpg",
  },
];

const WorkPage = () => {
  return (
    <section className="bg-[#0E0E10] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <h1 className="text-4xl font-bold text-center text-[#F4F4F5] mb-6 font-['UI_Creative_Studio_Bold']">
          Work
        </h1>
        <p className="text-center text-[#A0A0A3] max-w-3xl mx-auto mb-16">
          Some of the projects where I transformed static designs into
          interactive, high-performing web experiences.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1E] border border-[#3F8CFF] rounded-xl overflow-hidden shadow-lg hover:shadow-[#3F8CFF]/50 transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#F4F4F5] mb-2">
                  {project.name}
                </h3>
                <p className="text-[#A0A0A3] mb-4 flex-grow">
                  {project.description}
                </p>
                <p className="text-sm text-[#3F8CFF] mb-4">
                  Tech stack used: {project.tech}
                </p>
                <a
                  href="#"
                  className="inline-block mt-auto bg-[#3F8CFF] text-white px-5 py-2 rounded-full font-medium hover:bg-[#001FEB] transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
