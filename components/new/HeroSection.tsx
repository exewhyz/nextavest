"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-gray-800 max-w-3xl"
      >
        Invest in Real Assets You Can See and Touch
      </motion.h1>
      <p className="mt-6 text-gray-600 max-w-2xl text-lg">
        Every opportunity is direct, transparent, and backed by real income-producing properties.
      </p>
      <Link
        href="#properties"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        View Properties
      </Link>
    </section>
  );
};

export default HeroSection;
