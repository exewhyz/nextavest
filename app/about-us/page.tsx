"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Shield,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description:
        "Building lasting relationships through transparency and reliability",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "Consistently seeking opportunities for sustainable returns",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Leveraging modern strategies while maintaining proven fundamentals",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section with Gradient */}
      <section className="relative py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-brand-navy-light to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Our Story
              </div>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-brand-navy via-brand-navy to-brand-navy bg-clip-text text-transparent mb-6">
              Our History
            </h1>
            <p className="text-xl text-brand-text leading-relaxed">
              CrowdVest LLC and NextAvest bring a wealth of experience in the
              real estate and property investment sectors. Our commitment to
              identifying and providing secure, growth-oriented investment
              opportunities has allowed us to serve a diverse group of investors
              and deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Card Design */}
      <section className="py-32 relative border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://nextavest.com/wp-content/uploads/2024/11/world-dots.png"
                  alt="Vision Illustration"
                  className="w-full h-[400px] object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase">
                  What Drives Us
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mb-6"></div>
              <p className="text-xl text-brand-text leading-relaxed">
                To provide high-value property investments with a focus on
                transparency, innovation, and long-term financial growth for our
                clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Modern Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
              Core Principles
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-100">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-text leading-relaxed">
                    {value.description}
                  </p>
                  <div
                    className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${value.gradient} transition-all duration-500 mt-6`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="inline-block mb-4">
                <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase">
                  Our Future
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
                Our Vision
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mb-6"></div>
              <p className="text-xl text-brand-text leading-relaxed">
                To be leaders in the real estate investment sector, offering
                opportunities that combine innovative strategies with the
                potential for above-market returns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-blue-100 to-cyan-100 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://nextavest.com/wp-content/uploads/2024/11/Business_Development.png"
                  alt="Vision Illustration"
                  className="w-full h-[400px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section with Highlight */}
      <section className="py-32 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Purpose
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
                Why NextaVest Exists
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-8"></div>
              <p className="text-2xl text-brand-text font-semibold">
                NextaVest was built for medical professionals seeking
                predictable cash flow.
              </p>
            </div>

            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-brand-text leading-relaxed"
              >
                When we sold our laboratory, we had worked with over 10,000
                doctors under Meridian Health. What we saw again and again was
                the same problem:
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-light to-cyan-600 opacity-5"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-brand-navy-light shadow-lg">
                  <div className="flex items-start gap-4">
                    <ArrowRight className="w-8 h-8 text-brand-navy-light flex-shrink-0 mt-1" />
                    <p className="text-xl font-semibold text-brand-navy">
                      After retirement or selling their practice, income
                      stopped.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-brand-text leading-relaxed"
              >
                That's when it clicked for us. Physicians, who spent their
                careers serving patients, were left without reliable income
                streams once they stepped away from medicine.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200"
              >
                <p className="text-lg text-brand-text leading-relaxed font-medium">
                  Now, through NextaVest, we're helping doctors turn their
                  hard-earned capital into quarterly or monthly distributions —
                  often making{" "}
                  <span className="text-emerald-700 font-bold">
                    double what they earned while practicing medicine
                  </span>{" "}
                  — without having to lift a finger.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="py-32 relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-light via-brand-navy to-cyan-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Join The Movement
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Your Financial Future?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join physicians nationwide who are creating passive income streams
              with NextaVest
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-white text-brand-navy-light hover:bg-blue-50 text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
              >
                <Link href="/contact">
                  Join The Investor List
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <p className="text-blue-200 text-sm mt-6">
              No commitment required • Exclusive opportunities
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
