import { ChartBar, Clock, FileText, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
// import { DollarSign, Shield, Building2, Monitor } from "lucide-react";

export const ProblemPromise = () => {
  return (
    <section className="flex flex-col gap-8 container mx-auto px-4 lg:px-8 py-20 border-b">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy">
          Built for Medical Professionals
        </h2>
        <p className="text-xl text-brand-text">
          Understanding your challenges. Delivering real solutions.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-brand-bg to-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-6 text-brand-navy">
            The Challenges You Face
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-navy-light mt-2 flex-shrink-0" />
              <span className="text-brand-text leading-relaxed">Limited time outside clinical duties</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-navy-light mt-2 flex-shrink-0" />
              <span className="text-brand-text leading-relaxed">Rising taxes and complex planning for high W-2 income</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-navy-light mt-2 flex-shrink-0" />
              <span className="text-brand-text leading-relaxed">Burnout and the uncertainty of markets</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-navy-light mt-2 flex-shrink-0" />
              <span className="text-brand-text leading-relaxed">Lack of reliable, passive post-practice income</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-4"
        >
          {[
            {
              icon: <ShieldCheck className="w-6 h-6 text-brand-navy-light" />,
              title: "Passive Cash Flow",
              body: "Professionally managed assets.",
            },
            {
              icon: <ChartBar className="w-6 h-6 text-brand-navy-light" />,
              title: "Tax Advantages",
              body: "Bonus depreciation, cost segregation.",
            },
            {
              icon: <FileText className="w-6 h-6 text-brand-navy-light" />,
              title: "Direct Ownership",
              body: "Deal-by-deal — no blind funds.",
            },
            {
              icon: <Clock className="w-6 h-6 text-brand-navy-light" />,
              title: "Transparent Updates",
              body: "Secure investor portal.",
            },
          ].map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col gap-3 items-start bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#e6f0fa] to-white shadow-sm">{it.icon}</div>
              <div>
                <div className="font-bold text-brand-navy mb-1">{it.title}</div>
                <div className="text-sm text-brand-text">{it.body}</div>
              </div>
            </motion.div>
          ))}

          {/* <div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Download The Physician’s 12-Minute Guide
            </Button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
