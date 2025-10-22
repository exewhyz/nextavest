import { motion } from "motion/react";
// import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
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

// const properties = [
//   {
//     id: 1,
//     name: "Palm Springs Retail Center",
//     type: "Grocery-Anchored Retail",
//     location: "CA",
//     status: "Active",
//     summary: "High-credit tenants, 6.5% CoC",
//     image: "/images/palm-springs.jpg", // Update with actual image path
//   },
//   {
//     id: 2,
//     name: "Sunset Self Storage",
//     type: "Self Storage",
//     location: "FL",
//     status: "Realized",
//     summary: "1.8x equity multiple",
//     image: "/images/sunset-storage.jpg", // Update with actual image path
//   },
//   // Add more properties as needed
// ];

export default function Properties() {
  //   const hasActiveDeals = properties.length > 0;

  return (
    <section className="min-h-screen bg-brand-bg border border-b">
      {/* Hero Section */}
      {/* <section className="relative py-24 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              Conservative, stable, and income-focused properties in key U.S.
              markets.
            </p>
            <p className="text-lg text-blue-300">
              Specializing in Medical Office Buildings and Healthcare Facilities
            </p>
          </motion.div>
        </div>
      </section> */}

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

      {/* Active Properties */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-brand-navy mb-16 text-center"
          >
            Featured Properties
          </motion.h2>
          {hasActiveDeals ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {properties.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-brand-navy">
                          {property.name}
                        </h3>
                        <Badge className={property.status === "Active" ? "bg-brand-success" : "bg-gray-500"}>
                          {property.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-brand-text">
                        <p><strong>Type:</strong> {property.type}</p>
                        <p><strong>Location:</strong> {property.location}</p>
                        <p>{property.summary}</p>
                      </div>
                      <div className="mt-6">
                        <Button className="w-full">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">
                    Between Acquisitions
                  </h2>
                  <p className="text-brand-text mb-6">
                    We're currently between acquisitions. Join our investor list to be the first to know about upcoming offerings.
                  </p>
                  <Button className="bg-primary-orange-700 hover:bg-primary-orange-800">
                    Join The Investor List
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section> */}
    </section>
  );
}
