"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { ShieldCheck, Scale, FileWarning, Lock, ExternalLink } from "lucide-react";
import Link from "next/link";

export function ComplianceFooter() {
  return (
    <footer className="bg-[#f8fafb] py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Company Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-[#1a5490] mb-2">12+</div>
            <div className="text-[#425466]">Years Operating</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-[#1a5490] mb-2">28</div>
            <div className="text-[#425466]">States Served</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-[#1a5490] mb-2">85%</div>
            <div className="text-[#425466]">Repeat Investors</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-[#1a5490] mb-2">$250M+</div>
            <div className="text-[#425466]">Assets Managed</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Primary Disclaimer */}
          <Alert className="mb-8 bg-[#0a2540] text-white border-none">
            <AlertDescription className="text-center text-lg font-medium">
              This is not investment, tax, or legal advice. Past performance is not indicative of future results.
            </AlertDescription>
          </Alert>

          {/* Compliance Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-[#1a5490] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0a2540] mb-2">Regulation D Compliance</h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    Offerings are made pursuant to Rule 506(b) of Regulation D. Some offerings may be made under Rule 506(c), 
                    allowing for general solicitation to verified accredited investors only.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Scale className="h-6 w-6 text-[#1a5490] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0a2540] mb-2">Forward-Looking Statements</h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    This website contains forward-looking statements. Actual results may differ materially from 
                    expectations discussed in such forward-looking statements.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <FileWarning className="h-6 w-6 text-[#1a5490] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0a2540] mb-2">Risk Factors</h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    Investment in real estate involves substantial risk and is suitable only for investors who can 
                    bear the economic risk of their investment for an indefinite period.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-[#1a5490] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0a2540] mb-2">Privacy Notice</h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    We do not handle Protected Health Information (PHI). Our privacy practices comply with 
                    applicable regulations regarding financial information.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Disclaimers */}
          <div className="text-sm text-[#425466] space-y-4 max-w-4xl mx-auto">
            <p>
              Investment opportunities posted on this website are "private placements" of securities that are not 
              publicly traded, are subject to holding period requirements, and are intended for investors who do 
              not need a liquid investment.
            </p>
            <p>
              Investing in private placements requires high risk tolerance, low liquidity concerns, and long-term 
              commitments. Investors must be able to afford to lose their entire investment.
            </p>
            <p className="pt-4">
              <Link 
                href="/terms" 
                className="inline-flex items-center text-[#1a5490] hover:underline gap-1"
              >
                Terms of Service
                <ExternalLink className="h-4 w-4" />
              </Link>
              {" · "}
              <Link 
                href="/privacy" 
                className="inline-flex items-center text-[#1a5490] hover:underline gap-1"
              >
                Privacy Policy
                <ExternalLink className="h-4 w-4" />
              </Link>
              {" · "}
              <Link 
                href="/disclosures" 
                className="inline-flex items-center text-[#1a5490] hover:underline gap-1"
              >
                Full Disclosures
                <ExternalLink className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}