import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Building,
  Lock,
  Home,
  Store,
  Warehouse,
  GoalIcon,
  Stethoscope,
} from "lucide-react";

const propertyTypes = [
  {
    icon: Stethoscope,
    name: "Medical",
    description: "State-of-the-art medical offices and healthcare facilities",
    primary: false,
  },
  {
    icon: Building2,
    name: "Multi-Family",
    description: "Quality apartment communities in growing markets",
  },
  {
    icon: Store,
    name: "Shopping Centers",
    description: "Grocery-anchored and neighborhood retail centers",
  },
  {
    icon: Lock,
    name: "Self Storage",
    description: "Climate-controlled storage facilities",
  },
  {
    icon: Home,
    name: "Mobile Home Parks",
    description: "Professionally managed manufactured housing communities",
  },
  {
    icon: Building,
    name: "Single Tenant",
    description: "Net-leased properties with credit tenants",
  },
  {
    icon: Warehouse,
    name: "Industrial",
    description: "Strategic logistics and distribution centers",
  },
  {
    icon: GoalIcon,
    name: "Golf Courses",
    description: "Premium golf and country club properties",
  },
];

export default function Properties() {
  return (
    <section className="min-h-screen bg-brand-bg border-b">
      {/* Property Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Investments
            </h2>
            <p className="text-lg text-brand-text">
              Focused on premium medical real estate with strategic
              diversification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {propertyTypes.map((type, i) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 ${
                    type.primary ? "border-2 border-brand-navy-light shadow-lg" : ""
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <type.icon
                      className={`h-10 w-10 mx-auto mb-4 ${
                        type.primary ? "text-brand-navy-light" : "text-brand-text"
                      }`}
                    />
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        type.primary ? "text-brand-navy-light" : "text-brand-navy"
                      }`}
                    >
                      {type.name}
                    </h3>
                    <p className="text-brand-text text-sm">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
