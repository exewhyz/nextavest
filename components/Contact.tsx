"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NextavestForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.nextavest.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Form Section */}
      <section className="py-20 bg-brand-bg border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Start Your Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-2"
          >
            <iframe
              src="https://link.nextavest.com/widget/form/S7R6jwyYVu3GcZxuon85"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
              id="inline-S7R6jwyYVu3GcZxuon85"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="NEXTAVEST SITE FORM"
              data-height="undefined"
              data-layout-iframe-id="inline-S7R6jwyYVu3GcZxuon85"
              data-form-id="S7R6jwyYVu3GcZxuon85"
              title="NEXTAVEST SITE FORM"
              className="min-h-[600px] rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <Disclaimer />
    </div>
  );
};

export default NextavestForm;

// Disclaimer Section
export function Disclaimer() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Risk Disclosure
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    All investments involve risk, including potential loss of
                    capital, illiquidity, and market fluctuations. Projections
                    are hypothetical and not guaranteed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
