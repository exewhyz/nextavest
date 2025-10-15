import { ChartBar, Clock, FileText, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
// import { DollarSign, Shield, Building2, Monitor } from "lucide-react";

export const ProblemPromise = () => {
  //   const promises = [
  //     {
  //       icon: DollarSign,
  //       title: "Passive Cash Flow",
  //       description:
  //         "Professionally managed assets delivering quarterly distributions without your active involvement",
  //     },
  //     {
  //       icon: Shield,
  //       title: "Tax Advantages",
  //       description:
  //         "Benefit from bonus depreciation, cost segregation studies, and strategic tax planning",
  //     },
  //     {
  //       icon: Building2,
  //       title: "Direct Ownership",
  //       description:
  //         "Deal-by-deal investments in single-asset LLCs—no blind funds or REITs",
  //     },
  //     {
  //       icon: Monitor,
  //       title: "Transparent Updates",
  //       description:
  //         "Secure investor portal with quarterly reports and on-time K-1s",
  //     },
  //   ];

  return (
    // <section className="py-20 bg-white">
    //   <div className="container mx-auto px-4 lg:px-8">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="text-center mb-12"
    //     >
    //       <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
    //         Built for Your Medical Career
    //       </h2>
    //       <p className="text-xl text-[#425466] max-w-3xl mx-auto">
    //         We understand the unique challenges physicians face: limited time,
    //         high taxes, burnout, and volatile markets
    //       </p>
    //     </motion.div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {promises.map((promise, i) => (
    //         <motion.div
    //           key={promise.title}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ delay: i * 0.1 }}
    //           viewport={{ once: true }}
    //         >
    //           <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-100">
    //             <CardHeader>
    //               <div className="w-12 h-12 bg-[#e6f0fa] rounded-lg flex items-center justify-center mb-4">
    //                 <promise.icon className="h-6 w-6 text-[#1a5490]" />
    //               </div>
    //               <CardTitle>{promise.title}</CardTitle>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-[#425466]">{promise.description}</p>
    //             </CardContent>
    //           </Card>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="flex flex-col gap-8 container mx-auto px-4 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
          Built for Medical Professionals
        </h2>
        <p className="text-xl text-[#425466]">
          Understanding your challenges. Delivering real solutions.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#f8fafb] to-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#0a2540]">
            The Challenges You Face
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1a5490] mt-2 flex-shrink-0" />
              <span className="text-[#425466] leading-relaxed">Limited time outside clinical duties</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1a5490] mt-2 flex-shrink-0" />
              <span className="text-[#425466] leading-relaxed">Rising taxes and complex planning for high W-2 income</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1a5490] mt-2 flex-shrink-0" />
              <span className="text-[#425466] leading-relaxed">Burnout and the uncertainty of markets</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1a5490] mt-2 flex-shrink-0" />
              <span className="text-[#425466] leading-relaxed">Lack of reliable, passive post-practice income</span>
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
              icon: <ShieldCheck className="w-6 h-6 text-[#1a5490]" />,
              title: "Passive Cash Flow",
              body: "Professionally managed assets.",
            },
            {
              icon: <ChartBar className="w-6 h-6 text-[#1a5490]" />,
              title: "Tax Advantages",
              body: "Bonus depreciation, cost segregation.",
            },
            {
              icon: <FileText className="w-6 h-6 text-[#1a5490]" />,
              title: "Direct Ownership",
              body: "Deal-by-deal — no blind funds.",
            },
            {
              icon: <Clock className="w-6 h-6 text-[#1a5490]" />,
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
                <div className="font-bold text-[#0a2540] mb-1">{it.title}</div>
                <div className="text-sm text-[#425466]">{it.body}</div>
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
