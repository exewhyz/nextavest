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
import { cn } from "@/lib/utils";

export default function TeamsPage() {
  const founders = [
    {
      name: "Bruce Shapiro",
      role: "Co-Founder & CEO",
      bio: "Background in medical and commercial real estate. Decades of experience leading multi-state operations and real estate development. Bruce brings strategic vision and operational excellence to NextaVest.",
      image: "/bruce.png",
      expertise: [
        "Real Estate Development",
        "Healthcare Operations",
        "Strategic Planning",
      ],
      linkedin: "https://www.linkedin.com/in/bruce-shapiro", // Update with actual LinkedIn URL
      isFounder: true,
    },
    {
      name: "Dana Shapiro",
      role: "Co-Founder & Head of Medical Partnerships",
      bio: "Focused on relationship-building with physicians and healthcare professionals. Dedicated to simplifying investing for busy medical practitioners. Dana ensures every physician investor receives personalized attention.",
      image: "/dana.jpeg",
      expertise: [
        "Physician Relations",
        "Healthcare Innovation",
        "Investor Education",
      ],
      linkedin: "https://www.linkedin.com/in/dana-shapiro", // Update with actual LinkedIn URL
      isFounder: true,
    },
  ];

  const teamMembers = [
    {
      name: "Olaniyi Samuel",
      role: "Director of Technology",
      bio: "Technology innovator passionate about building secure, scalable platforms. Jennifer leads the development of NextaVest's investor portal and data analytics systems, making real estate investing accessible and transparent.",
      image: "/sam.jpeg",
      expertise: ["Digital Marketing", "Brand Strategy", "Content Development"],
      linkedin: "", // Update with actual LinkedIn URL
    },
    {
      name: "Faria Nadeem",
      role: "Director of Operations",
      bio: "Operations expert specializing in process optimization and investor relations. Michael ensures seamless execution from property acquisition through distribution management, delivering exceptional investor experiences.",
      image: "/faria.jpeg",
      expertise: [
        "Operations Management",
        "Process Optimization",
        "Investor Relations",
      ],
      linkedin: "", // Update with actual LinkedIn URL
    },
    {
      name: "Dev Raj Saini",
      role: "Director of Marketing",
      bio: "Strategic marketing leader with 12+ years in healthcare and financial services. Sarah crafts compelling narratives that resonate with physician investors and builds brand awareness across digital channels.",
      image: "/dev.png", // Replace with actual image path or URL
      expertise: [
        "Platform Development",
        "Data Security",
        "Financial Technology",
      ],
      linkedin: "", // Update with actual LinkedIn URL
    },
  ];

  const milestones = [
    {
      year: "1970s",
      event: "Founded Meridian Health Laboratories from a garage",
    },
    { year: "1990s", event: "Grew to serve 10,000+ physicians nationwide" },
    { year: "2000s", event: "Successfully sold Meridian Health Laboratories" },
    {
      year: "2020s",
      event: "Founded NextaVest to serve medical professionals",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      {/* <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-light via-cyan-600 to-blue-800 opacity-95"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 md:top-20 -right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute -bottom-10 md:bottom-20 -left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 overflow-hidden">
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
              className="inline-block mb-4 md:mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                Meet Our Founders
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight break-words">
              From Medicine to Meaningful Investing
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              A lifelong commitment to serving medical professionals, now
              helping them achieve financial independence
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Origin Story Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden border border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-4 md:p-8 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="https://assets.cdn.filesafe.space/YRNJ5KUPJ9TDvLeurM0h/media/68cd70c5b967e97b93559d2f.jpeg"
                  alt="Meridian Health Laboratories"
                  width={600}
                  height={400}
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-block mb-3 md:mb-4">
                <span className="text-brand-navy-light font-semibold text-xs md:text-sm tracking-wider uppercase">
                  Our Beginning
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 md:mb-6 leading-tight break-words">
                The Meridian Story
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mb-4 md:mb-6"></div>
              <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-brand-text leading-relaxed">
                <p className="break-words">
                  Dana and Bruce Shapiro built one of the largest medical
                  laboratory companies in the United States —{" "}
                  <strong>Meridian Health Laboratories</strong> — starting from
                  a small garage in the 1970s.
                </p>
                <p className="break-words">
                  For decades, they worked hand-in-hand with over 10,000
                  physicians, helping practices serve patients better through
                  innovation, reliability, and care. They were true pioneers in
                  the medical field — long before healthcare became an industry,
                  they treated it as a mission.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 bg-white border border-b pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10 md:mb-16">
              <span className="text-brand-navy-light font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
                The Turning Point
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-4 md:mb-6 px-4">
                But over the years, they noticed a troubling pattern
              </h2>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-light to-cyan-600 opacity-5"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-8 rounded-2xl border-l-4 border-brand-navy-light shadow-lg">
                <div className="flex items-start gap-3 md:gap-4">
                  <ArrowRight className="w-6 md:w-8 h-6 md:h-8 text-brand-navy-light flex-shrink-0 mt-1" />
                  <p className="text-base md:text-xl font-semibold text-brand-navy">
                    When doctors retired or sold their practices, their income
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
              className="text-base md:text-lg text-brand-text mt-6 md:mt-8 leading-relaxed text-center px-4"
            >
              The same physicians who had built thriving careers were suddenly
              searching for stability again — this time,{" "}
              <strong>financial stability</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 text-center px-4"
            >
              <p className="text-xl md:text-2xl font-bold text-brand-navy-light">
                That realization became the foundation for NextaVest.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 border border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-brand-navy-light font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-4 md:mb-6 px-4">
              Meet Dana & Bruce
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-brand-text max-w-3xl mx-auto px-4">
              Dedicated to helping medical professionals build lasting wealth
              through strategic real estate investment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
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
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                          {founder.name}
                        </h3>
                        <p className="text-blue-300 text-sm md:text-base lg:text-lg">
                          {founder.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <p className="text-sm md:text-base text-brand-text leading-relaxed">
                      {founder.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-brand-navy-light font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-4 md:mb-6 px-4">
              Meet the Leadership Team
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-brand-text max-w-3xl mx-auto px-4">
              Experienced professionals committed to delivering exceptional
              results for our physician investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group w-full max-w-xs"
              >
                <Card className="h-full pt-0 hover:shadow-2xl transition-all duration-500 border-slate-200 overflow-hidden bg-white">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={cn(
                        "object-cover group-hover:scale-105 transition-transform duration-500",
                        index === 1 ? "object-center" : "object-top"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-brand-navy-light font-medium">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 border border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-brand-navy-light font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-4 md:mb-6 px-4">
              Key Milestones
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6 md:pl-8 pb-8 md:pb-12 border-l-2 border-blue-200 last:border-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-3 md:w-4 h-3 md:h-4 bg-brand-navy-light rounded-full -translate-x-[6px] md:-translate-x-[9px] ring-2 md:ring-4 ring-white"></div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <span className="text-brand-navy-light font-bold text-base md:text-lg">
                    {milestone.year}
                  </span>
                  <p className="text-brand-navy text-sm md:text-base lg:text-lg mt-2">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Continuation Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-6 md:mb-8 px-4">
              A Continuation, Not a Change
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-brand-text leading-relaxed px-4">
              <p>
                Today, Dana and Bruce's lifelong commitment to serving medical
                professionals has evolved into a new mission — helping doctors
                achieve financial independence through passive real estate
                investing.
              </p>
              <p>
                By focusing on low-risk, high-cash-flowing properties with
                strong tenants and minimal capital expenses, NextaVest provides
                investors the same sense of stability and peace of mind they
                once gave their patients.
              </p>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-8 rounded-2xl border border-emerald-200 my-6 md:my-8">
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-brand-navy mb-3 md:mb-4">
                  The transition from medicine to real estate wasn't a change in
                  purpose — it was a continuation of it.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-emerald-700 font-semibold italic">
                  Because caring for people doesn't end when the practice does.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-navy via-cyan-700 to-blue-900 relative overflow-hidden border border-b">
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
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
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8"
            >
              <Sparkles className="w-3 md:w-4 h-3 md:h-4" />
              Start Your Journey
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-relaxed px-4">
              Join the physicians who trust Dana and Bruce to manage their real
              estate investments with the same care they gave to healthcare
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-brand-navy-light hover:bg-blue-50 text-base md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-full font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
              >
                Join The Investor List
                <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-blue-200 text-xs md:text-sm mt-4 md:mt-6 px-4">
              No commitment required • Exclusive opportunities
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
