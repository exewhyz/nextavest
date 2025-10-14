"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need to be accredited?",
      answer: "Yes, all investors must qualify as accredited investors as defined by SEC regulations. We'll help verify your status during the onboarding process."
    },
    {
      question: "What is the minimum investment?",
      answer: "Our typical minimum investment is $50,000 per property, though this may vary by opportunity. We structure our investments to be accessible while ensuring meaningful returns."
    },
    {
      question: "What are the target cash-on-cash returns and hold periods?",
      answer: "We target properties that can deliver 6-8% annual cash-on-cash returns, with typical hold periods of 5-7 years. Each opportunity has its own specific targets which we clearly outline."
    },
    {
      question: "How often are distributions made?",
      answer: "We typically distribute cash flow quarterly, with some properties offering monthly distributions. The specific schedule is detailed in each investment's operating agreement."
    },
    {
      question: "How will this affect my taxes? When will I receive a K-1?",
      answer: "You'll receive a Schedule K-1 annually, typically by March 15th. Our investments often provide tax advantages through depreciation. We recommend consulting your tax advisor for specific guidance."
    },
    {
      question: "Can I invest via IRA/solo-401k or through my practice entity?",
      answer: "Yes, we accept investments through self-directed IRAs, solo 401(k)s, and business entities. We can help coordinate with your custodian or provide guidance on structure."
    },
    {
      question: "What are the risks?",
      answer: "Real estate investments carry risks including potential loss of capital, market fluctuations, tenant defaults, and property-specific challenges. We detail risks thoroughly in our offering documents and focus on risk mitigation strategies."
    },
    {
      question: "What fees do you charge?",
      answer: "Our fee structure typically includes an asset management fee and a performance fee aligned with investor returns. We provide full fee transparency in our offering documents."
    },
    {
      question: "How are you aligned with investors?",
      answer: "We co-invest alongside our investors in every deal, typically 5-10% of the equity. Our success is directly tied to investment performance."
    },
    {
      question: "What if I'm on call and can't attend a webinar?",
      answer: "All our webinars are recorded and available on-demand through our investor portal. We also offer one-on-one briefings at your convenience."
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            Common questions from our physician investors. Don't see yours? Contact us directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg bg-[#f8fafb]">
                  <AccordionTrigger className="px-6 text-[#0a2540] hover:text-[#1a5490] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-[#425466]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}