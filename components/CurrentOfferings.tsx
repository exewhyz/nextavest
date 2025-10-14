"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Lock } from "lucide-react";

// This would typically come from your CMS or API
const liveOfferings: { title: string; description: string; link: string }[] = [
  {
    title: "Real Estate",
    description:
      "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
    link: "/real-estate",
  },
  {
    title: "Equity",
    description:
      "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
    link: "/equity",
  },
  {
    title: "Fixed Income",
    description:
      "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
    link: "/fixed-income",
  },
];

export function CurrentOfferings() {
  const hasLiveOfferings = liveOfferings.length > 0;

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
            Current Investment Opportunities
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            SEC-qualified investment opportunities, exclusively for accredited
            investors.
          </p>
        </motion.div>

        {hasLiveOfferings ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {liveOfferings?.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      {/* Replace with your actual image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-white/90 text-[#0a2540] text-sm font-semibold px-3 py-1 rounded-full">
                          Limited Availability
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="h-4 w-4 text-[#1a5490]" />
                      <span className="text-sm text-[#425466]">
                        Accredited Investors Only
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2">
                      {offering.title}
                    </h3>
                    <Button className="w-full mt-4">
                      View Investment Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="bg-white border-dashed">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-[#0a2540] mb-4">
                  Between Acquisitions
                </h3>
                <p className="text-[#425466] mb-6">
                  We're currently evaluating new opportunities that meet our
                  strict investment criteria. Join our investor list to be the
                  first to know when our next offering becomes available.
                </p>
                <Button size="lg" className="bg-[#1a5490] hover:bg-[#144171]">
                  Join The Investor List
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
