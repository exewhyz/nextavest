"use client";

import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  const properties = [
    "MIXED-USE DEVELOPMENT - $110 MILLION, ATLANTA, GEORGIA",
    "KFC AUSTIN TX $1.97 MILLION",
    "SENIOR LIVING COMMUNITY - $40 MILLION, SAN DIEGO, CALIFORNIA",
    "SELF-STORAGE FACILITY - $18 MILLION, DENVER, COLORADO",
    "MEDICAL CENTER - $55 MILLION, PHOENIX, ARIZONA",
    "HOTEL - $98 MILLION, CHICAGO, ILLINOIS",
    "RETAIL OUTLET - $25 MILLION, LAS VEGAS, NEVADA",
    "LUXURY APARTMENT COMPLEX - $75 MILLION, MIAMI, FLORIDA",
    "INDUSTRIAL WAREHOUSE - $9.34 MILLION, DALLAS, TEXAS",
    "SHOPPING CENTER - $7.5 MILLION, ORLANDO, FLORIDA",
    "OFFICE BUILDING - $6.32 MILLION, SEATTLE, WASHINGTON",
    "STRIP CENTER STUART FL $2.1 MILLION",
  ];

  return (
    <StickyBanner
      className="bg-gradient-to-r from-[#0a2540] via-[#1a5490] to-[#0a2540] overflow-hidden"
      hideOnScroll={true}
    >
      <div className="relative flex overflow-hidden w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {properties.map((property, index) => (
            <span
              key={`property-1-${index}`}
              className="mx-4 text-sm md:text-base text-white font-medium"
            >
              {property} <span className="text-[#FF9633]">|</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {properties.map((property, index) => (
            <span
              key={`property-2-${index}`}
              className="mx-4 text-sm md:text-base text-white font-medium"
            >
              {property} <span className="text-[#FF9633]">|</span>
            </span>
          ))}
        </div>
      </div>
    </StickyBanner>
  );
}
