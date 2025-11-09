"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  FileText,
  Building2,
  Mail,
} from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        'Welcome to Nextavest ("Nextavest," "we," "our," or "us"). These Terms & Conditions ("Terms") constitute a legally binding agreement between you ("User," "Investor," or "Client") and Nextavest regarding your access to and use of our website, digital platform, and related services (collectively, the "Services"). By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you must immediately discontinue the use of our Services.',
    },
    {
      title: "2. About Nextavest",
      content:
        "Nextavest is a commercial real estate investment firm focused on delivering exceptional value to our investors through strategic, data-driven, and relationship-centered investments. We leverage decades of industry experience, creative investment structuring, and a network of institutional and private partners to identify high-return opportunities designed to exceed our clients' goals. Our mission is to align capital with opportunity — driving consistent performance, risk-adjusted returns, and long-term wealth creation through disciplined real estate investment practices.",
    },
    {
      title: "3. Scope of the Terms",
      content:
        "These Terms apply to all users who visit or interact with our website or platform, including individuals who: Access information about our investment offerings; Engage with our communications, newsletters, or educational materials; or Participate in private placements, managed funds, or other investment structures sponsored by Nextavest. Specific investment opportunities may be subject to additional offering documents, subscription agreements, or regulatory disclosures. In the event of a conflict between these Terms and any such documents, the terms of the investment-specific documentation shall prevail.",
    },
    {
      title: "4. Eligibility and Representation",
      content:
        'By using our Services, you represent and warrant that: You are at least 18 years of age and legally capable of entering into a binding agreement. You will comply with all applicable securities and investment laws. You will provide accurate, current, and complete information when registering or engaging with our Services. You will not use our Services for any unlawful purpose or in violation of these Terms. Certain investment offerings may be restricted to "accredited investors" or "qualified purchasers" as defined under the U.S. Securities Act of 1933, as amended, and other applicable securities laws. It is your responsibility to verify your eligibility prior to participating in any offering.',
    },
    {
      title: "5. Nature of Information Provided",
      content:
        "All content and materials provided through our website, publications, or communications are intended solely for informational and educational purposes. Nothing contained on the Nextavest platform constitutes: Investment advice, An offer to sell or a solicitation of an offer to buy any securities, or A recommendation regarding any specific investment or strategy. Any investment-related information made available through the Services is qualified in its entirety by the relevant private placement memorandum, offering circular, or subscription documents applicable to the specific offering. Nextavest assumes no responsibility for the completeness, accuracy, or timeliness of the information presented. You are encouraged to consult with your own independent financial, legal, or tax advisor before making any investment decision.",
    },
    {
      title: "6. Investment Risk Disclosure",
      content:
        "Investing in real estate and related securities involves substantial risks. Such risks may include, but are not limited to: Illiquidity of private investments; Market volatility; Changes in interest rates, inflation, or economic cycles; Tenant defaults, environmental liabilities, or unforeseen operating expenses; Legislative and regulatory changes affecting real estate values or tax treatment. Past performance is not indicative of future results. There can be no assurance that any investment strategy or opportunity offered by Nextavest will achieve its stated objectives or projected returns. You should invest only if you can afford to lose the entire amount invested.",
    },
    {
      title: "7. No Fiduciary Relationship",
      content:
        "Use of the Nextavest platform or receipt of communications from us does not create any fiduciary, advisory, or agency relationship between you and Nextavest. Nextavest acts solely as a sponsor or manager of investment opportunities and does not assume any duty to act in your best interests beyond the obligations expressly stated in applicable offering documents or agreements.",
    },
    {
      title: "8. Use of the Website and Platform",
      content:
        "You agree to use the Nextavest website and Services only for lawful purposes and in a manner consistent with these Terms. You shall not: Engage in activities that disrupt or damage the platform or servers; Attempt to gain unauthorized access to secure areas or systems; Post or transmit false, misleading, or fraudulent information; Copy, reproduce, or distribute proprietary materials without authorization. Nextavest reserves the right to suspend or terminate access to any user who violates these Terms or engages in conduct deemed detrimental to the integrity of the platform or community.",
    },
    {
      title: "9. Intellectual Property Rights",
      content:
        "All trademarks, logos, graphics, text, data, and software on the Nextavest website are the intellectual property of Nextavest or its licensors and are protected under applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for personal or informational purposes only. You may not modify, reproduce, or commercially exploit any materials without our prior written consent.",
    },
    {
      title: "10. Confidentiality and Privacy",
      content:
        "Nextavest respects your right to privacy and is committed to protecting personal and financial information in accordance with our Privacy Policy. By using our Services, you consent to the collection, processing, and storage of your information as described therein. Any confidential or proprietary information shared between you and Nextavest shall be used solely for the purpose for which it was provided and shall not be disclosed to third parties except as required by law or regulation.",
    },
    {
      title: "11. Third-Party Links and Content",
      content:
        "The Nextavest website may contain references or links to third-party websites, data sources, or services. These links are provided for convenience only and do not imply endorsement or control by Nextavest. We assume no responsibility for the accuracy, availability, or content of third-party websites, nor for any damages arising from their use.",
    },
    {
      title: "12. Limitation of Liability",
      content:
        "To the fullest extent permitted by applicable law, Nextavest, its officers, directors, affiliates, employees, and agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from: Your access to or use of the Services; Reliance on any content or materials provided through the platform; Errors, omissions, or delays in information transmission; or Unauthorized access or alteration of data. In no event shall the total liability of Nextavest exceed the amount paid by you, if any, for accessing the Services.",
    },
    {
      title: "13. Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless Nextavest, its affiliates, and its respective officers, directors, and employees from any and all claims, damages, liabilities, and expenses (including reasonable legal fees) arising from: Your breach of these Terms; Your use or misuse of the Services; or Your violation of any applicable law or the rights of any third party.",
    },
    {
      title: "14. Amendments and Modifications",
      content:
        "Nextavest reserves the right to modify, amend, or update these Terms at any time without prior notice. Revised Terms will be posted on our website and become effective immediately upon posting. Your continued use of the Services after such changes constitutes acceptance of the updated Terms.",
    },
    {
      title: "15. Termination",
      content:
        "We may suspend or terminate your access to the Services at our sole discretion, without prior notice, if we believe you have violated these Terms or engaged in any conduct that may harm our reputation, operations, or users. Upon termination, all licenses granted under these Terms shall immediately cease, and you must discontinue use of all Nextavest materials and content.",
    },
    {
      title: "16. Governing Law and Jurisdiction",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of the State in which Nextavest maintains its principal place of business, without regard to conflict-of-law principles. Any disputes arising out of or relating to these Terms shall be resolved through confidential arbitration or mediation in accordance with applicable arbitration laws.",
    },
    {
      title: "17. Severability",
      content:
        "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid portion shall be modified to the minimum extent necessary to make it enforceable.",
    },
    {
      title: "18. Entire Agreement",
      content:
        "These Terms, together with our Privacy Policy and any applicable offering or subscription agreements, constitute the entire agreement between you and Nextavest regarding your use of our Services and supersede all prior understandings or communications.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-14">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-light via-brand-navy to-cyan-700 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <FileText className="w-4 h-4" />
              Legal Information
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-brand-navy-light/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-brand-navy-light" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">
                      Commercial Real Estate Investment
                    </h2>
                    <p className="text-brand-text leading-relaxed">
                      Nextavest is committed to delivering exceptional value through strategic, data-driven, and relationship-centered real estate investments. Please review these terms carefully as they govern your use of our platform and services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.05, 0.5) }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-brand-navy mb-4">
                      {section.title}
                    </h3>
                    <p className="text-brand-text leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-brand-navy-light/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-brand-navy-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">
                      19. Contact Information
                    </h3>
                    <p className="text-brand-text leading-relaxed mb-4">
                      For inquiries, clarifications, or requests related to these Terms, please contact:
                    </p>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                      <Mail className="h-5 w-5 text-brand-navy-light" />
                      <a
                        href="mailto:invest@nextavest.com"
                        className="text-brand-navy-light hover:underline font-semibold"
                      >
                        invest@nextavest.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-slate-100 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-brand-text text-sm">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>
    </main>
  );
}
