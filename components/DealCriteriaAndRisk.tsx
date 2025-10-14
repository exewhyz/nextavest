"use client";

import { motion } from "framer-motion";
import { Building2, SearchCheck, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card";

export function DealCriteriaAndRisk() {
  const sections = [
    {
      icon: <Building2 className="h-8 w-8 text-[#1a5490]" />,
      title: "What We Buy",
      items: [
        "Essentials-driven cash-flow assets",
        "Grocery-anchored retail centers",
        "Strategic self-storage facilities",
        "Select multifamily properties",
        "Strong tenant quality assets",
        "Properties in durable trade areas",
        "Conservative leverage positions"
      ]
    },
    {
      icon: <SearchCheck className="h-8 w-8 text-[#1a5490]" />,
      title: "How We Underwrite",
      items: [
        "Comprehensive stress testing",
        "- Vacancy scenarios",
        "- Cap rate sensitivity",
        "- Interest rate impacts",
        "In-person property inspections",
        "Third-party due diligence",
        "Clear value-creation roadmap"
      ]
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#1a5490]" />,
      title: "Risk Management",
      items: [
        "Tenant rollover monitoring",
        "Debt maturity planning",
        "Cap-rate expansion analysis",
        "Supply pipeline tracking",
        "Climate/flood risk assessment",
        "Fixed/hedged debt preference",
        "Conservative reserve planning"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0a2540] mb-4">
            Deal Criteria & Risk Management
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            Our systematic approach to identifying, analyzing, and managing investment opportunities and risks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#f0f4f8] rounded-xl">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2540]">
                      {section.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li 
                        key={i} 
                        className={`flex items-start gap-2 text-[#425466] ${
                          item.startsWith('-') ? 'pl-6 text-sm' : ''
                        }`}
                      >
                        {!item.startsWith('-') && (
                          <div className="h-1.5 w-1.5 rounded-full bg-[#1a5490] mt-2" />
                        )}
                        {item.startsWith('-') ? item.substring(2) : item}
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
          className="mt-16 p-6 bg-[#f8fafb] rounded-xl max-w-2xl mx-auto text-center"
        >
          <p className="text-[#425466] italic">
            "We maintain the same level of diligence and care in our investments as physicians do in their medical practice."
          </p>
        </motion.div>
      </div>
    </section>
  );
}