"use client";

import { Button } from "./ui/button";
import { InfiniteMovingCardsDemo } from "./InfiniteLogos";
import { TrustedBy } from "./TrustBar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative isolate pt-14 lg:px-8 overflow-hidden">
      {/* Darker gradient background for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50"></div>

      {/* Animated Background Elements with motion */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute top-10 -left-10 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 -right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="py-24 sm:py-32 lg:pb-40 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-[#0a2540] sm:text-6xl"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Passive Real Estate for Medical Professionals
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Co-invest alongside a physician-focused family team in low-risk,
              cash-flowing properties designed for predictable,
              physician-friendly income.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-6 md:gap-y-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-[#1a5490] hover:bg-[#144171]">
                  <Link href="/contact">Join The Physician Investor List</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#1a5490] text-[#1a5490] hover:bg-slate-100"
                >
                  <Link href="/contact">Request Consultation →</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              className="mt-4 text-xs text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              For accredited investors. SEC Regulation D 506(c) where
              applicable.
            </motion.p>
          </div>

          {/* Stats Image Section */}
          <motion.div
            className="mt-16 flow-root sm:mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative rounded-xl bg-slate-200/80 p-2 ring-1 ring-inset ring-slate-300/50 lg:-m-4 lg:rounded-2xl lg:p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
                <motion.div
                  className="aspect-[1080/720] overflow-hidden rounded-lg"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Image
                    width={1080}
                    height={720}
                    src="/stats.jpeg"
                    alt="NextaVest Asset Class Comparison - Real Estate Investment Benefits"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Infinite Logo Scroll */}
          <motion.div
            className="mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <InfiniteMovingCardsDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
