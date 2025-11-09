import { motion } from "motion/react";

export const TrustBar = () => {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-blue-100 border-y border-gray-200 py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col gap-8">
        <Stats />
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "30+", label: "States with Investors" },
    { value: "$45M", label: "Capital Deployed" },
    { value: "87%", label: "Repeat Investors" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-4xl font-bold text-brand-navy-light mb-2">
            {stat.value}
          </div>
          <div className="text-brand-text">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export const TrustedBy = () => {
  const specialties = [
    "Physicians",
    "Dentists",
    "Surgeons",
    "Practice Owners",
    "Anesthesiologists",
    "Hospitalists",
  ];
  return (
    <ul className="flex flex-col gap-2 mt-8">
      {/* <motion.p
        className="text-center text-brand-text text-xs font-medium"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Trusted by
      </motion.p> */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-0">
        {specialties.map((specialty, i) => (
          <motion.li
            key={specialty}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-white text-sm list-disc"
          >
            {specialty}
          </motion.li>
        ))}
      </div>
    </ul>
  );
};
