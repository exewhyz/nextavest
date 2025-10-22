"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      content: [
        {
          subtitle: "Personal Data",
          text: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This may include:",
          list: [
            "Email address",
            "First name and last name",
            "Phone number",
            "Usage Data",
          ],
        },
        {
          subtitle: "Usage Data",
          text: "Usage Data is collected automatically when using the Service. This may include information such as Your Device's Internet Protocol address (IP address), browser type, browser version, the pages you visit, and other diagnostic data.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      content: [
        {
          subtitle: "",
          text: "The Company may use Personal Data for the following purposes:",
          list: [
            "To provide and maintain our Service",
            "To manage Your Account and registration",
            "For the performance of a contract",
            "To contact You regarding updates or informative communications",
            "To provide You with news and special offers",
            "To manage Your requests",
            "For business transfers and other business purposes",
          ],
        },
      ],
    },
    {
      title: "Sharing Your Information",
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      content: [
        {
          subtitle: "",
          text: "We do not sell or rent your personal information to third parties. However, we may share your information with:",
          list: [
            "Service Providers: Trusted third parties that help us operate our business",
            "Legal Authorities: If required by law to comply with legal processes",
            "Business Transfers: In case of merger, acquisition, or sale of business assets",
            "With Your Consent: For any other purpose with your explicit consent",
          ],
        },
      ],
    },
  ];

  const cookieTypes = [
    {
      type: "Necessary / Essential Cookies",
      category: "Session Cookies",
      purpose:
        "Essential to provide services and enable features. Help authenticate users and prevent fraudulent use.",
    },
    {
      type: "Cookies Policy / Notice Acceptance",
      category: "Persistent Cookies",
      purpose:
        "Identify if users have accepted the use of cookies on the Website.",
    },
    {
      type: "Functionality Cookies",
      category: "Persistent Cookies",
      purpose:
        "Remember choices you make, such as login details or language preference, for a more personal experience.",
    },
  ];

  const smsTerms = [
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
        "Thank you for contacting NextaVest. We will get in touch with you soon. For immediate assistance please contact us via (516) 217-3673 or visit our contact page.",
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
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-4">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-lg text-blue-200">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
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
                <p className="text-slate-600 leading-relaxed mb-4">
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Definitions Section */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Definitions
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong>Account:</strong> A unique account created for You
                    to access our Service.
                  </p>
                  <p>
                    <strong>Company:</strong> Refers to NextaVest (also "We",
                    "Us" or "Our").
                  </p>
                  <p>
                    <strong>Cookies:</strong> Small files placed on Your device
                    containing browsing history details.
                  </p>
                  <p>
                    <strong>Personal Data:</strong> Any information relating to
                    an identified or identifiable individual.
                  </p>
                  <p>
                    <strong>Service:</strong> Refers to the Website.
                  </p>
                  <p>
                    <strong>Website:</strong> Refers to NextaVest, accessible
                    from{" "}
                    <Link
                      href="https://nextavest.com"
                      className="text-blue-600 hover:underline"
                    >
                      https://nextavest.com
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white border-b">
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
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mt-2">
                        {section.title}
                      </h3>
                    </div>
                    {section.content.map((item, i) => (
                      <div key={i} className="mb-4 last:mb-0">
                        {item.subtitle && (
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">
                            {item.subtitle}
                          </h4>
                        )}
                        <p className="text-slate-600 leading-relaxed mb-3">
                          {item.text}
                        </p>
                        {item.list && (
                          <ul className="space-y-2 ml-4">
                            {item.list.map((listItem, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <span className="text-slate-600">
                                  {listItem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Tracking Technologies and Cookies
            </h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-slate-600 leading-relaxed mb-6">
                  We use Cookies and similar tracking technologies to track
                  activity on Our Service and store certain information.
                  Tracking technologies include beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service.
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {cookieTypes.map((cookie, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                    >
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {cookie.type}
                      </h4>
                      <p className="text-sm text-blue-600 mb-3">
                        Type: {cookie.category}
                      </p>
                      <p className="text-slate-700">{cookie.purpose}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              SMS Communications
            </h2>

            <Card className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  SMS Consent
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  SMS consent and phone numbers will not be shared with third
                  parties or affiliates for marketing purposes. Mobile
                  information will not be shared with third parties/affiliates
                  for marketing/promotional purposes.
                </p>
                <p className="text-slate-700 leading-relaxed italic text-sm">
                  All the above categories exclude text messaging originator
                  opt-in data and consent; this information will not be shared
                  with or obtained from any third parties.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {smsTerms.map((term, index) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        {term.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {term.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Policies */}
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
                    Data Retention
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The Company will retain Your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use Your Personal Data to comply
                    with our legal obligations, resolve disputes, and enforce
                    our legal agreements and policies.
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
                    Your Rights
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    You have the right to delete or request that We assist in
                    deleting the Personal Data that We have collected about You.
                    You may update, amend, or delete Your information at any
                    time by contacting Us.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Please note that We may need to retain certain information
                    when we have a legal obligation or lawful basis to do so.
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
                    Security
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The security of Your Personal Data is important to Us, but
                    remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure. While We
                    strive to use commercially acceptable means to protect Your
                    Personal Data, We cannot guarantee its absolute security.
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
                    Children's Privacy
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us.
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
                    Changes to This Policy
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We may update Our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page and updating the "Last updated" date. You are
                    advised to review this Privacy Policy periodically for any
                    changes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
