"use client";

import { motion } from "framer-motion";
import { UserCheck, FileSearch, Coins, ChartBar } from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card";

export function HowItWorksDetailed() {
  const steps = [
    {
      icon: <UserCheck className="h-8 w-8 text-[#1a5490]" />,
      step: "Step 1",
      title: "Join & Verify",
      description: "Complete accreditation check, risk tolerance assessment, and investment goals alignment.",
      items: [
        "Quick accreditation verification",
        "Investment preferences setup",
        "Risk tolerance assessment",
        "Investment goals discussion"
      ]
    },
    {
      icon: <FileSearch className="h-8 w-8 text-[#1a5490]" />,
      step: "Step 2",
      title: "Review Opportunities",
      description: "Access comprehensive deal snapshots with key metrics and analysis.",
      items: [
        "Asset details and market analysis",
        "Business plan overview",
        "Target CoC/IRR metrics",
        "Risk assessment and key lease details"
      ]
    },
    {
      icon: <Coins className="h-8 w-8 text-[#1a5490]" />,
      step: "Step 3",
      title: "Invest",
      description: "Streamlined digital investment process with full documentation.",
      items: [
        "E-sign PPM/subscription documents",
        "Secure wire instructions",
        "Portal access setup",
        "Investment confirmation"
      ]
    },
    {
      icon: <ChartBar className="h-8 w-8 text-[#1a5490]" />,
      step: "Step 4",
      title: "Get Paid & Stay Informed",
      description: "Regular distributions and comprehensive reporting.",
      items: [
        "Quarterly distribution schedule",
        "Monthly performance updates",
        "Annual tax documentation",
        "24/7 portal access"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafb]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0a2540] mb-4">
            How Our Investment Process Works
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            A streamlined, physician-friendly process designed to respect your time while keeping you fully informed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#f0f4f8] rounded-xl">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1a5490]">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-[#0a2540]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#425466]">{step.description}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#425466]">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#1a5490]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto"
        >
          <h4 className="text-lg font-bold text-[#0a2540] mb-3">
            Typical Timeline
          </h4>
          <div className="space-y-2 text-[#425466]">
            <p>• First Call → Portal Access: 24-48 hours</p>
            <p>• Document Review → Investment: 3-5 days</p>
            <p>• Investment → First Distribution: 30-45 days</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}