'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const services = ['UI/UX Design', 'Frontend Development', 'AI Integration', 'Full Project'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <section id="contact" className="relative px-6 py-20 bg-black text-white">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-black to-purple-500/30 blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-base md:text-lg text-gray-400 mb-12">
          Tell us about your project. We&apos;ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="service"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select a Service</option>
              {services.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <input
              name="budget"
              type="text"
              placeholder="Estimated Budget"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us more about your project..."
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 text-white"
            required
          />

          <div className="text-center pt-4">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-white">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
