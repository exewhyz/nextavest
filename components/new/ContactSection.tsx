"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Have questions about investing with Crowdvest? We’d love to hear from you.
        </p>

        <form className="grid gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg px-4 py-3 w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg px-4 py-3 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg px-4 py-3 w-full h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
