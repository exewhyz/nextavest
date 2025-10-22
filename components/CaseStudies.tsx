"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "./ui/card";
import { TrendingUp, Clock, LightbulbIcon } from "lucide-react";

interface CaseStudy {
  title: string;
  plan: string;
  holdPeriod: string;
  coc: string;
  equityMultiple: string;
  irr: string;
  keyActions: string[];
  learnings: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Grocery-Anchored Center",
    plan: "Lease Re-trade + Outparcel Sale",
    holdPeriod: "4.5 Years",
    coc: "8.2%",
    equityMultiple: "1.9x",
    irr: "17.8%",
    keyActions: [
      "Renegotiated anchor tenant lease",
      "Sold two outparcels at premium",
      "Reduced operating expenses by 12%",
      "Improved occupancy from 87% to 96%"
    ],
    learnings: "Market positioning and tenant mix proved more valuable than location. The strategic sale of outparcels generated unexpected upside while maintaining the core asset's value."
  },
  {
    title: "Medical Office Portfolio",
    plan: "Value-Add Renovation + Tenant Optimization",
    holdPeriod: "5 Years",
    coc: "7.5%",
    equityMultiple: "1.75x",
    irr: "15.2%",
    keyActions: [
      "Modernized common areas",
      "Implemented energy efficiency upgrades",
      "Extended key tenant leases",
      "Consolidated medical specialties by floor"
    ],
    learnings: "Creating specialty-focused floors improved tenant synergies and retention. Energy upgrades provided both immediate cost savings and long-term value appreciation."
  }
];

export function CaseStudies() {
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
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Track Record & Case Studies
          </h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto">
            Real results from our investment strategy, with key learnings from each project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy mb-1">
                        {study.title}
                      </h3>
                      <p className="text-brand-navy-light">{study.plan}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-text">
                      <Clock className="h-4 w-4" />
                      {study.holdPeriod}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-brand-bg rounded-lg">
                      <div className="text-sm text-brand-text mb-1">CoC</div>
                      <div className="font-bold text-brand-navy-light">{study.coc}</div>
                    </div>
                    <div className="text-center p-3 bg-brand-bg rounded-lg">
                      <div className="text-sm text-brand-text mb-1">Multiple</div>
                      <div className="font-bold text-brand-navy-light">{study.equityMultiple}</div>
                    </div>
                    <div className="text-center p-3 bg-brand-bg rounded-lg">
                      <div className="text-sm text-brand-text mb-1">IRR</div>
                      <div className="font-bold text-brand-navy-light">{study.irr}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-brand-navy-light" />
                      <h4 className="font-semibold text-brand-navy">Key Actions</h4>
                    </div>
                    <ul className="space-y-2">
                      {study.keyActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-brand-text">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-navy-light mt-2" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <LightbulbIcon className="h-5 w-5 text-brand-navy-light" />
                      <h4 className="font-semibold text-brand-navy">What We Learned</h4>
                    </div>
                    <p className="text-brand-text">{study.learnings}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}