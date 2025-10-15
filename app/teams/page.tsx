"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Target,
  Users,
  Building2,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function TeamsPage() {
  const founders = [
    {
      name: "Bruce Shapiro",
      role: "Co-Founder & CEO",
      bio: "Background in medical and commercial real estate. Decades of experience leading multi-state operations and real estate development. Bruce brings strategic vision and operational excellence to NextaVest.",
      image: "/images/bruce-shapiro.jpg", // Update with actual path
      expertise: ["Real Estate Development", "Healthcare Operations", "Strategic Planning"],
    },
    {
      name: "Dana Shapiro",
      role: "Co-Founder & Head of Medical Partnerships",
      bio: "Focused on relationship-building with physicians and healthcare professionals. Dedicated to simplifying investing for busy medical practitioners. Dana ensures every physician investor receives personalized attention.",
      image: "/images/dana-shapiro.jpg", // Update with actual path
      expertise: ["Physician Relations", "Healthcare Innovation", "Investor Education"],
    },
  ];

  const milestones = [
    { year: "1970s", event: "Founded Meridian Health Laboratories from a garage" },
    { year: "1990s", event: "Grew to serve 10,000+ physicians nationwide" },
    { year: "2000s", event: "Successfully sold Meridian Health Laboratories" },
    { year: "2020s", event: "Founded NextaVest to serve medical professionals" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                Meet Our Founders
              </div>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              From Medicine to Meaningful Investing
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A lifelong commitment to serving medical professionals, now helping them achieve financial independence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-32 relative">
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
                <Image
                  src="/images/meridian-lab.jpg" // Update with actual path
                  alt="Meridian Health Laboratories"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-2xl"
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
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                  Our Beginning
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                The Meridian Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"></div>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Dana and Bruce Shapiro built one of the largest medical laboratory companies in the United States — <strong>Meridian Health Laboratories</strong> — starting from a small garage in the 1970s.
                </p>
                <p>
                  For decades, they worked hand-in-hand with over 10,000 physicians, helping practices serve patients better through innovation, reliability, and care. They were true pioneers in the medical field — long before healthcare became an industry, they treated it as a mission.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
                The Turning Point
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                But over the years, they noticed a troubling pattern
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-5"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg">
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-xl font-semibold text-slate-900">
                    When doctors retired or sold their practices, their income stopped.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 mt-8 leading-relaxed text-center"
            >
              The same physicians who had built thriving careers were suddenly searching for stability again — this time, <strong>financial stability</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-2xl font-bold text-blue-600 mb-2">
                That realization became the foundation for NextaVest.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Leadership Team
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Meet Dana & Bruce
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicated to helping medical professionals build lasting wealth through strategic real estate investment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200 overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold mb-1">{founder.name}</h3>
                      <p className="text-blue-300 text-lg">{founder.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {founder.bio}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-900 mb-3">Areas of Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Key Milestones
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-blue-200 last:border-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px] ring-4 ring-white"></div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                  <p className="text-slate-900 text-lg mt-2">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Continuation Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              A Continuation, Not a Change
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Today, Dana and Bruce's lifelong commitment to serving medical professionals has evolved into a new mission — helping doctors achieve financial independence through passive real estate investing.
              </p>
              <p>
                By focusing on low-risk, high-cash-flowing properties with strong tenants and minimal capital expenses, NextaVest provides investors the same sense of stability and peace of mind they once gave their patients.
              </p>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200 my-8">
                <p className="text-2xl font-bold text-slate-900 mb-4">
                  The transition from medicine to real estate wasn't a change in purpose — it was a continuation of it.
                </p>
                <p className="text-xl text-emerald-700 font-semibold italic">
                  Because caring for people doesn't end when the practice does.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-700 via-cyan-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
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
              Start Your Journey
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join the physicians who trust Dana and Bruce to manage their real estate investments with the same care they gave to healthcare
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
              >
                Join The Investor List
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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