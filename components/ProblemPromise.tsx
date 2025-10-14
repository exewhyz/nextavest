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
    <section className="flex flex-col gap-8 container mx-auto px-4 lg:px-8 py-12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
          PROBLEM → PROMISE
        </h2>
        <p className="text-xl text-[#425466]">
          Empathize + Promise immediate benefits.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-100 p-8 rounded-2xl backdrop-blur-md border border-black/8"
        >
          <h2 className="text-2xl font-semibold mb-4">
            You Heal Patients. We Help Build Predictable Income.
          </h2>
          <ul className="list-disc pl-6 text-black/50 space-y-2">
            <li>Limited time outside clinical duties</li>
            <li>Rising taxes and complex planning for high W-2 income</li>
            <li>Burnout and the uncertainty of markets</li>
            <li>Lack of reliable, passive post-practice income</li>
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
              icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
              title: "Passive cash flow",
              body: "Professionally managed assets.",
            },
            {
              icon: <ChartBar className="w-6 h-6 text-orange-400" />,
              title: "Tax advantages",
              body: "Bonus depreciation, cost segregation.",
            },
            {
              icon: <FileText className="w-6 h-6 text-orange-400" />,
              title: "Direct ownership",
              body: "Deal-by-deal — no blind funds.",
            },
            {
              icon: <Clock className="w-6 h-6 text-orange-400" />,
              title: "Transparent updates",
              body: "Secure investor portal.",
            },
          ].map((it, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.025 }}
              className="flex gap-4 items-start bg-white/6 p-4 rounded-xl backdrop-blur-md border border-black/8"
            >
              <div className="p-2 rounded-lg bg-white/8">{it.icon}</div>
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-black/50">{it.body}</div>
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
