"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Building } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      title: "Recession-Resistant Demand",
      description: "Groceries and essential retail ensure stable demand even in downturns.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Consistent Foot Traffic",
      description: "Anchored by national grocery chains bringing steady daily visitors.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Real, Tangible Assets",
      description: "Own part of physical income-producing centers, not just paper promises.",
      icon: <Building className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Why Invest with Crowdvest
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
