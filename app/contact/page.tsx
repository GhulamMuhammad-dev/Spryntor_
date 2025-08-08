'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className="bg-[#0E0E10] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#F4F4F5] mb-4"
        >
          Let’s Build Something Great.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need to launch an MVP, refine an existing product, or bring animations to your UI, I’m here to help.
          Fill out the form and let’s get your project moving.
        </motion.p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#1A1A1D] border border-[#3F8CFF]/30 text-[#F4F4F5] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3F8CFF] transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1A1A1D] border border-[#3F8CFF]/30 text-[#F4F4F5] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3F8CFF] transition"
          />
        </div>
        <input
          type="text"
          placeholder="Company (optional)"
          className="w-full bg-[#1A1A1D] border border-[#3F8CFF]/30 text-[#F4F4F5] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3F8CFF] transition"
        />
        <select
          className="w-full bg-[#1A1A1D] border border-[#3F8CFF]/30 text-[#F4F4F5] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3F8CFF] transition"
        >
          <option value="">Project Type</option>
          <option value="mvp">MVP Launch</option>
          <option value="frontend">Frontend Development</option>
          <option value="animation">UI Animations</option>
          <option value="other">Other</option>
        </select>
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full bg-[#1A1A1D] border border-[#3F8CFF]/30 text-[#F4F4F5] rounded-lg px-4 py-3 focus:outline-none focus:border-[#3F8CFF] transition resize-none"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#3F8CFF] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#2C6BD6] transition"
          >
            Start Your Project
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactPage;
