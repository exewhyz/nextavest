"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HowToInvest() {
  return (
    <section className="w-full bg-[#f7f8fa] py-16 lg:py-24 border border-b">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Section */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-10">
          How to Invest
        </h2>

        <div className="space-y-10">
          {/* Step 1 */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#007b91] text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div className="h-12 border-l-2 border-dashed border-[#00a7c5] mt-1 hidden sm:block"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a0a]">
                Tell Us About Yourself
              </h3>
              <p className="text-gray-600 text-base mt-1">
                Tell us more about yourself so we can better understand your
                goals.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#007b91] text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div className="h-12 border-l-2 border-dashed border-[#00a7c5] mt-1 hidden sm:block"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a0a]">
                Review Due Diligence Documents
              </h3>
              <p className="text-gray-600 text-base mt-1">
                Download and review documentation for our open investment
                opportunities.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#007b91] text-white flex items-center justify-center font-semibold">
                3
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0a0a0a]">
                Book a Call
              </h3>
              <p className="text-gray-600 text-base mt-1">
                If you have questions or are ready to invest, book a call with
                your representative.
              </p>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 bg-[#007b91] text-white font-semibold px-8 py-3 rounded-full shadow-md"
        >
          <Link href="/contact">Get Started</Link>
        </motion.button>
      </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-lg bg-gradient-to-br from-[#0a2540] to-[#1a5490]">
              <Image
                src="/Home.jpg"
                alt="Modern Investment Property - Professional Real Estate for Physicians"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
