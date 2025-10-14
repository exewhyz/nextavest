"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Book, PlayCircle, GraduationCap, Bookmark } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Guide {
  title: string;
  description: string;
  readTime?: string;
  watchTime?: string;
}

const physicianGuides: Guide[] = [
  {
    title: "Bonus Depreciation 101 For Doctors",
    description: "Learn how to maximize tax benefits through real estate investment depreciation strategies specifically for medical professionals.",
    readTime: "15 min read"
  },
  {
    title: "Understanding K-1s & Timing",
    description: "A comprehensive guide to interpreting K-1 statements and managing investment timing for optimal tax planning.",
    readTime: "12 min read"
  },
  {
    title: "REPS vs. Passive Investor",
    description: "Compare Real Estate Professional Status benefits with passive investment strategies to determine your optimal approach.",
    readTime: "18 min read"
  },
  {
    title: "Debt 101: Fixed vs. Floating",
    description: "Understanding different debt structures and their implications for real estate investment returns and risk management.",
    readTime: "10 min read"
  }
];

const webinars: Guide[] = [
  {
    title: "Real Estate Investment Fundamentals",
    description: "Essential concepts every physician investor should understand before starting their real estate journey.",
    watchTime: "12 min"
  },
  {
    title: "Tax Strategies for Physician Investors",
    description: "Optimize your investment returns through strategic tax planning and available deductions.",
    watchTime: "10 min"
  },
  {
    title: "Portfolio Diversification Strategies",
    description: "Learn how to balance your investment portfolio with real estate assets.",
    watchTime: "8 min"
  }
];

const glossaryTerms: { term: string; definition: string }[] = [
  {
    term: "Cap Rate",
    definition: "Capitalization Rate - A property's net operating income divided by its current market value, used to estimate potential return on investment."
  },
  {
    term: "CoC",
    definition: "Cash on Cash Return - Annual cash flow divided by total cash invested, showing the cash income earned on cash invested."
  },
  {
    term: "IRR",
    definition: "Internal Rate of Return - The annual rate of growth an investment is expected to generate, accounting for the time value of money."
  },
  {
    term: "LTV",
    definition: "Loan to Value Ratio - The ratio between the mortgage amount and the appraised value of a property, expressed as a percentage."
  },
  {
    term: "DSCR",
    definition: "Debt Service Coverage Ratio - Net operating income divided by total debt service, measuring a property's ability to cover its debt payments."
  }
];

export function EducationHub() {
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
            Education Hub
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            Curated resources to help physicians make informed investment decisions.
          </p>
        </motion.div>

        <Tabs defaultValue="guides" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Physician Guides
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex items-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Video Resources
            </TabsTrigger>
            <TabsTrigger value="glossary" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Investment Glossary
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {physicianGuides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <Book className="h-6 w-6 text-[#1a5490] mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-[#425466]">{guide.description}</p>
                        <div className="text-sm text-[#1a5490] mt-2">
                          {guide.readTime}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <PlayCircle className="h-6 w-6 text-[#1a5490] mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                          {webinar.title}
                        </h3>
                        <p className="text-[#425466]">{webinar.description}</p>
                        <div className="text-sm text-[#1a5490] mt-2">
                          {webinar.watchTime}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="glossary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {glossaryTerms.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <Bookmark className="h-5 w-5 text-[#1a5490] mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#0a2540] mb-2">
                          {item.term}
                        </h3>
                        <p className="text-[#425466]">{item.definition}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}