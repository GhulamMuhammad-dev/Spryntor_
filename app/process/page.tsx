'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Step 1 — Discovery Call',
    description:
      'We define your goals, audience, and technical needs.',
  },
  {
    id: 2,
    title: 'Step 2 — Plan & Estimate',
    description:
      'You get a clear scope, timeline, and cost.',
  },
  {
    id: 3,
    title: 'Step 3 — Development',
    description:
      'I build your frontend with best practices for performance and scalability.',
  },
  {
    id: 4,
    title: 'Step 4 — Testing',
    description:
      'Cross-browser, responsive, and accessibility checks.',
  },
  {
    id: 5,
    title: 'Step 5 — Handover & Support',
    description:
      'Smooth deployment with optional post-launch support.',
  },
];

const ProcessPage = () => {
  return (
    <section className="bg-[#0E0E10] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F4F4F5] font-['UI_Creative_Studio_Bold'] mb-12 text-center">
          A clear, collaborative, and reliable process.
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1A1A1D] border border-[#3F8CFF] rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="flex items-start space-x-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3F8CFF] text-white font-bold">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F4F5] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#A1A1AA]">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
