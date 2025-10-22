"use client";

import { motion } from "motion/react";
import {
  Download,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { ProblemPromise } from "@/components/ProblemPromise";
import HowToInvest from "@/components/HowItWorks";
import { Card } from "@/components/ui/card";
import Properties from "@/components/Properties";
import Link from "next/link";

const FeaturedOffering = () => {
  const metrics = [
    { value: "8.5%", label: "Target Cash-on-Cash" },
    { value: "17%", label: "Target IRR" },
    { value: "5 Years", label: "Hold Period" },
    { value: "$50K", label: "Minimum Investment" },
  ];

  return (
    <section className="py-20 bg-brand-bg border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy">
            Current Opportunity
          </h2>
          <p className="text-xl text-brand-text">
            Exclusive access for accredited medical professionals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light p-8 text-white">
              <Badge className="bg-brand-success text-white mb-4 border-0">
                Now Accepting Investors
              </Badge>
              <h3 className="text-3xl font-bold mb-2">Midwest Medical Plaza</h3>
              <p className="text-gray-200">
                Class A Medical Office Building - Indianapolis, IN
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="text-center p-4 bg-brand-bg rounded-lg"
                  >
                    <div className="text-3xl font-bold text-brand-navy-light mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-brand-text">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  <Eye className="mr-2 h-5 w-5" />
                  View Full Offering
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-navy-800 text-primary-navy-800"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download 12-Minute Guide
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Why Invest Section
const WhyInvest = () => {
  const features = [
    {
      title: "We Co-Invest in Every Deal",
      description:
        "Our family capital goes into every investment alongside yours—true alignment of interests",
    },
    {
      title: "Single-Asset LLCs",
      description:
        "No REITs or blind funds—you know exactly what you own with full transparency",
    },
    {
      title: "Conservative Underwriting",
      description:
        "Focus on cash-flowing essentials like medical offices, grocer-anchored retail, and self-storage",
    },
    {
      title: "Investor-First Communication",
      description:
        "Quarterly reports designed for busy physicians, K-1s delivered on time, every time",
    },
  ];

  return (
    <section id="for-physicians" className="py-20 bg-white border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy">
            Why Medical Professionals Choose Us
          </h2>
          <p className="text-xl text-brand-text">
            Alignment, transparency, and physician-first approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircle2 className="h-6 w-6 text-brand-navy-light flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-brand-navy">
                  {feature.title}
                </h3>
                <p className="text-brand-text">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy-light relative overflow-hidden border border-b">
    <BackgroundBeams />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join 1,000+ Medical Professionals Building Passive Income
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Start your journey to financial freedom outside the OR
        </p>
        <Button
          className="bg-primary-orange-700 hover:bg-primary-orange-800 text-white/90 hover:text-white"
          variant={"outline"}
        >
          <Link href="/contact">Join The Investor List</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

// Main App Component
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      <ProblemPromise />
      <HowToInvest />
      <Properties />
      <FeaturedOffering />
      <WhyInvest />
      <Testimonials />
      <CTASection />
    </main>
  );
}
