"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const sitePages = [
    { label: "About Us", href: "/about-us" },
    { label: "Team", href: "/team" },
    { label: "Q&A", href: "/faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-white text-black pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          {/* Company Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#FF9633]">
              NextaVest
            </h3>
            <p className=" leading-relaxed w-3/4">
              Crowdvest LLC is a commercial real estate investment firm that
              focuses on driving value for our investors through strategic
              investments in the industry. We leverage decades of experience,
              creative solutions, and solid relationships to find high-return
              opportunities that exceed our clients' goals.
            </p>
          </motion.div>

          {/* Site Pages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold mb-4">Site Pages</h3>
            <ul className="space-y-3">
              {sitePages.map((page) => (
                <li key={page.label}>
                  <Link
                    href={page.href}
                    className="hover:text-[#FF9633] transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <a
                href="tel:16316146138"
                className="flex items-center gap-3  hover:text-[#FF9633] transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>1 (631) 614-6138</span>
              </a>
              <a
                href="mailto:invest@crowdvestllc.com"
                className="flex items-center gap-3  hover:text-[#FF9633] transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>invest@crowdvestllc.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-700 text-center"
        >
          <p className=" text-sm">
            © {new Date().getFullYear()} NextAvest. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
