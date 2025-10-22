"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  FileText,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By using our Site or purchasing our insurance services, you confirm your acceptance of these Terms and Conditions, which govern your use of our Site. If you do not agree to these terms, please refrain from using our services.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old and capable of entering into a binding contract to use our Site and services. By using our Site, you represent and warrant that you meet these eligibility requirements.",
    },
    {
      title: "Insurance Services",
      content:
        "NextaVest offers various insurance policies, including Life, Car, Home, Travel, Business, Land, Marriage, and Health Insurance. Insurance services are provided in accordance with the policies agreed upon between NextaVest and our clients. Please review all policy documents carefully as they govern the terms, coverage, exclusions, and limitations of each insurance product.",
    },
    {
      title: "Quotation and Application",
      content:
        "Quotes provided on our Site are estimates based on the information provided by the user. Final rates and terms may vary based on underwriting criteria and the accuracy of the information submitted. Submission of an application does not guarantee approval for insurance coverage.",
    },
    {
      title: "Premium Payments",
      content:
        "Premium payments are required to maintain active coverage. If you miss a payment, your coverage may be suspended or canceled in accordance with the terms specified in your policy document. All premium payments must be made in a timely manner to avoid interruption in your coverage.",
    },
    {
      title: "Cancellation and Refunds",
      content:
        "You may cancel your policy by contacting us at the details provided below. Refunds, if applicable, will be processed as per the policy terms. Please review your specific policy for information regarding cancellation fees and refund eligibility.",
    },
    {
      title: "Claims Processes",
      content:
        "Our claims process is designed to be efficient and supportive. To file a claim, log in to your account on our Site or contact our claims team. Claims are subject to review and approval based on the terms and conditions of your specific policy. Additional documentation may be required to process claims.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on our Site, including but not limited to text, graphics, logos, images, and software, is the property of NextaVest or its licensors and is protected by intellectual property laws. Unauthorized use of our content is strictly prohibited.",
    },
  ];

  const userConduct = [
    "Violate any applicable laws or regulations",
    "Engage in fraudulent, misleading, or unethical conduct",
    "Interfere with or disrupt the functionality of our Site",
    "Upload or transmit viruses, malware, or harmful software",
  ];

  const smsMessages = [
    {
      title: "Opt-in",
      content:
        'Thank you for opting into SMS messages from NextaVest. To opt-out at any time reply "STOP". Messages and data rates may apply. Message frequency may vary.',
    },
    {
      title: "Opt-out",
      content:
        'Thank you for opting out of SMS messages from NextaVest. You will not receive further SMS communication. To opt back in, reply "START".',
    },
    {
      title: "Help",
      content:
        "Thank you for contacting NextaVest. We will get in touch with you soon to help you. For immediate assistance please contact us via (516) 217-3673 or visit our contact page.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-14">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 opacity-95"></div>
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
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      Welcome to NextaVest!
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      By accessing or using our website ("Site") and services,
                      you agree to comply with and be bound by these Terms and
                      Conditions. Please read them carefully.
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
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Conduct Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      User Conduct
                    </h3>
                    <p className="text-slate-700 mb-4">
                      When using our Site, you agree not to:
                    </p>
                    <ul className="space-y-2">
                      {userConduct.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-amber-600 mt-1">•</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-700 mt-4">
                      NextaVest reserves the right to restrict or terminate your
                      access if you violate these terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Limitation of Liability
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To the maximum extent permitted by law, NextaVest is not
                    liable for any direct, indirect, incidental, or
                    consequential damages arising from your use of our Site or
                    services. We strive to ensure accuracy but do not warrant
                    that the information on our Site is error-free or complete.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Indemnification
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    You agree to indemnify and hold harmless NextaVest, its
                    employees, agents, and affiliates, from any claims, losses,
                    damages, liabilities, costs, or expenses arising from your
                    breach of these Terms and Conditions or your use of our Site
                    and services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Privacy
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Your use of our Site is also governed by our{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    , which outlines how we collect, use, and protect your
                    information. Please review our Privacy Policy to understand
                    your rights and obligations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Changes to Terms
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    NextaVest may update these Terms and Conditions
                    periodically. Changes will be effective immediately upon
                    posting on our Site. We encourage you to review these terms
                    regularly to stay informed of any updates.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Governing Law
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    These Terms and Conditions are governed by the laws of the
                    United States of America. Any disputes arising from your use
                    of our Site or services will be resolved in the courts of
                    the United States of America.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SMS Terms Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              SMS Terms of Service
            </h2>

            <Card className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  SMS Consent
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  By opting into SMS from a web form, you are agreeing to
                  receive SMS messages from NextaVest. This includes SMS
                  messages for appointment scheduling, appointment reminders,
                  post-visit instructions, lab notifications, and billing
                  notifications.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Message frequency varies. Message and data rates may apply.
                  See privacy policy at{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline"
                  >
                    https://nextavest.com/privacy
                  </Link>
                  .
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Message HELP for help. Reply STOP to any message to opt out.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-sm text-slate-600 italic">
                    Note: SMS consent and phone numbers will not be shared with
                    third parties or affiliates for marketing purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {smsMessages.map((message, index) => (
                <motion.div
                  key={message.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        {message.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {message.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Message Frequency & Rates
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Message Frequency:</strong> When you opt in, you will
                  receive one SMS upon submitting your information on our
                  website. Variable frequency thereafter based on your
                  interactions.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Message and Data Rates:</strong> Please be aware that
                  message and data rates may apply to any SMS messages sent or
                  received. The rates are determined by your carrier and the
                  specifics of your mobile plan.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-slate-100 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-slate-600 text-sm">
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
