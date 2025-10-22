"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TrustedBy } from "./TrustBar";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-2xl flex flex-col antialiased items-center justify-center relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy py-12">
      <p className="text-center text-sm font-semibold text-white mb-8">
        Trusted by leading healthcare organizations
      </p>
      <InfiniteMovingCards
        items={companyLogos}
        direction="left"
        speed="normal"
        type="logos"
      />
      <TrustedBy />
    </div>
  );
}

const companyLogos = [
  {
    logo: "/logos/bankof america.webp",
    name: "Bank of America",
    isDark: true,
  },
  {
    logo: "/logos/cubesmart.webp",
    name: "CubeSmart",
    isDark: true,
  },
  {
    logo: "/logos/cvs.webp",
    name: "CVS",
    isDark: true,
  },
  {
    logo: "/logos/dunkin.webp",
    name: "Dunkin'",
    isDark: true,
  },
  {
    logo: "/logos/holidayinn.webp",
    name: "Holiday Inn",
    isDark: true,
  },
  {
    logo: "/logos/startbucks.webp",
    name: "Starbucks",
    isDark: false,
  },
  {
    logo: "/logos/walgreens.webp",
    name: "Walgreens",
    isDark: true,
  },
];
