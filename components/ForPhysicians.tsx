"use client";

import { motion } from "motion/react";
import { ChartBar, Calculator, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ForPhysicians() {
  const sections = [
    {
      icon: <ChartBar className="h-6 w-6 text-brand-navy-light" />,
      title: "Why Real Estate For Doctors",
      description:
        "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
    },
    {
      icon: <Calculator className="h-6 w-6 text-brand-navy-light" />,
      title: "Tax Focus",
      description:
        "High W-2 earners, bonus depreciation basics, passive vs. active losses, cost segregation overview.",
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-navy-light" />,
      title: "Scheduling",
      description:
        "12-minute deal briefs, on-demand webinars, mobile portal, quarterly summaries.",
    },
    {
      icon: <Users className="h-6 w-6 text-brand-navy-light" />,
      title: "Alignment",
      description: "We co-invest; your interests = our interests.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy">
            Your Time Is Scarce. Your Money Should Work Overtime.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-bg rounded-lg">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-brand-navy">
                        {section.title}
                      </h3>
                      <p className="text-brand-text">{section.description}</p>
                    </div>
                  </div>
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
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-navy-light hover:bg-brand-navy">
              Download 12-Minute Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-navy-light text-brand-navy-light"
            >
              Book a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
