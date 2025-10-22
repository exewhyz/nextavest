"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Shield, Heart, Eye } from "lucide-react";

export function AboutFamily() {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-brand-navy-light" />,
      title: "Preservation",
      description: "Capital safety and protection come first in every decision."
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-navy-light" />,
      title: "Integrity",
      description: "We communicate openly and operate with unwavering ethics."
    },
    {
      icon: <Eye className="h-6 w-6 text-brand-navy-light" />,
      title: "Transparency",
      description: "Full visibility into every investment and decision."
    }
  ];

  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "12", label: "States" },
    { number: "85%", label: "Repeat Investors" },
    { number: "$500M+", label: "Assets Managed" }
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Decades In Medicine. A Mission To Help Physicians Invest Better.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/family-image.jpg"
              alt="Shapiro Family"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-brand-text">
              Our family has been devoted to healthcare and research for decades. We saw first-hand how physicians carry intense schedules, high taxes, and limited time to evaluate investments.
            </p>
            <p className="text-lg text-brand-text">
              We created this platform so medical professionals can co-invest alongside us in real, cash-flowing properties—with the same diligence and care we bring to patients and research.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-navy-light">
                    {stat.number}
                  </div>
                  <div className="text-sm text-brand-text">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#f0f4f8] rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-brand-text">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}