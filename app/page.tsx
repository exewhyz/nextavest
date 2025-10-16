"use client";

import { motion } from "motion/react";
import {
  // ArrowRight,
  // DollarSign,
  // Shield,
  // Building2,
  // Monitor,
  // FileCheck,
  // Search,
  // PenTool,
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

// How It Works Section
// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: FileCheck,
//       number: "01",
//       title: "Apply & Verify",
//       description:
//         "Complete accreditation verification and set your investment goals in our secure portal",
//     },
//     {
//       icon: Search,
//       number: "02",
//       title: "Review Deals",
//       description:
//         "Receive concise, physician-friendly investment briefs and join optional webinars",
//     },
//     {
//       icon: PenTool,
//       number: "03",
//       title: "Invest & Earn",
//       description:
//         "E-sign documents, fund your investment, and start receiving quarterly distributions",
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#f8fafb]">
//       <div className="container mx-auto px-4 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
//             How It Works — Simple, Transparent
//           </h2>
//           <p className="text-xl text-[#425466]">
//             Get started in minutes, not months
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
//           <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#1a5490] via-[#4a9eff] to-[#1a5490]" />

//           {steps.map((step, i) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="text-center relative"
//             >
//               <div className="relative z-10">
//                 <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#1a5490] to-[#4a9eff] rounded-full flex items-center justify-center shadow-lg">
//                   <span className="text-3xl font-bold text-white">
//                     {step.number}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-[#0a2540]">
//                   {step.title}
//                 </h3>
//                 <p className="text-[#425466] max-w-sm mx-auto">
//                   {step.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Featured Offering Section
const FeaturedOffering = () => {
  const metrics = [
    { value: "8.5%", label: "Target Cash-on-Cash" },
    { value: "17%", label: "Target IRR" },
    { value: "5 Years", label: "Hold Period" },
    { value: "$50K", label: "Minimum Investment" },
  ];

  return (
    <section className="py-20 bg-[#f8fafb]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
            Current Opportunity
          </h2>
          <p className="text-xl text-[#425466]">
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
            <div className="bg-gradient-to-r from-[#0a2540] to-[#1a5490] p-8 text-white">
              <Badge className="bg-[#10b981] text-white mb-4 border-0">
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
                    className="text-center p-4 bg-[#f8fafb] rounded-lg"
                  >
                    <div className="text-3xl font-bold text-[#1a5490] mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-[#425466]">{metric.label}</div>
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
    <section id="for-physicians" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
            Why Medical Professionals Choose Us
          </h2>
          <p className="text-xl text-[#425466]">
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
              <CheckCircle2 className="h-6 w-6 text-[#1a5490] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0a2540]">
                  {feature.title}
                </h3>
                <p className="text-[#425466]">{feature.description}</p>
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
  <section className="py-20 bg-gradient-to-br from-[#0a2540] to-[#1a5490] relative overflow-hidden">
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
