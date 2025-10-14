"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
  {
    id: 1,
    name: "Summit Plaza, Austin TX",
    image: "/images/property1.jpg",
    status: "Open for Investment",
    returnRate: "9.2% Target IRR",
  },
  {
    id: 2,
    name: "Maple Grove Center, Ohio",
    image: "/images/property2.jpg",
    status: "Fully Funded",
    returnRate: "8.6% Realized IRR",
  },
  {
    id: 3,
    name: "Cedar Hill Market, Florida",
    image: "/images/property3.jpg",
    status: "Coming Soon",
    returnRate: "Projected 10% IRR",
  },
];

const PropertyGrid = () => {
  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Featured Properties
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-full h-56">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-blue-600 font-medium">{p.status}</p>
                <p className="text-gray-500 mt-2 text-sm">{p.returnRate}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
