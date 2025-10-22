"use client";
import Image from "next/image";
/* Lines 2-36 omitted */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart3,
  Calculator,
  Clock,
  Users,
  UserCheck,
  FileSearch,
  Coins,
  Building2,
  SearchCheck,
  ShieldCheck,
  Lock,
  TrendingUp,
  Lightbulb,
  Book,
  PlayCircle,
  GraduationCap,
  Bookmark,
  Shield,
  Heart,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// ForPhysicians Component
function ForPhysicians() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sections = [
    {
      icon: BarChart3,
      title: "Why Real Estate For Doctors",
      description:
        "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calculator,
      title: "Tax Focus",
      description:
        "High W-2 earners, bonus depreciation basics, passive vs. active losses, cost segregation overview.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Scheduling",
      description:
        "12-minute deal briefs, on-demand webinars, mobile portal, quarterly summaries.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Alignment",
      description: "We co-invest; your interests = our interests.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white border border-b">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-navy-light to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            For Physicians
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-navy bg-clip-text text-transparent">
            Your Time Is Scarce. Your Money Should Work Overtime.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-br ${
                          section.gradient
                        } transition-transform duration-300 ${
                          hoveredCard === i ? "scale-110" : ""
                        }`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-brand-navy">
                          {section.title}
                        </h3>
                        <p className="text-brand-text leading-relaxed">
                          {section.description}
                        </p>
                        <div
                          className={`h-1 bg-gradient-to-r ${
                            section.gradient
                          } transition-all duration-500 mt-4 ${
                            hoveredCard === i ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-navy-light to-cyan-600 hover:from-brand-navy hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg group"
            >
              Download 12-Minute Guide
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-brand-text hover:bg-slate-50 px-8 py-6 text-lg"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

// HowItWorksDetailed Component
function HowItWorksDetailed() {
  const steps = [
    {
      icon: UserCheck,
      step: "Step 1",
      title: "Join & Verify",
      description:
        "Complete accreditation check, risk tolerance assessment, and investment goals alignment.",
      items: [
        "Quick accreditation verification",
        "Investment preferences setup",
        "Risk tolerance assessment",
        "Investment goals discussion",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileSearch,
      step: "Step 2",
      title: "Review Opportunities",
      description:
        "Access comprehensive deal snapshots with key metrics and analysis.",
      items: [
        "Asset details and market analysis",
        "Business plan overview",
        "Target CoC/IRR metrics",
        "Risk assessment and key lease details",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Coins,
      step: "Step 3",
      title: "Invest",
      description:
        "Streamlined digital investment process with full documentation.",
      items: [
        "E-sign PPM/subscription documents",
        "Secure wire instructions",
        "Portal access setup",
        "Investment confirmation",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      step: "Step 4",
      title: "Get Paid & Stay Informed",
      description: "Regular distributions and comprehensive reporting.",
      items: [
        "Quarterly distribution schedule",
        "Monthly performance updates",
        "Annual tax documentation",
        "24/7 portal access",
      ],
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            How Our Investment Process Works
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            A streamlined, physician-friendly process designed to respect your
            time while keeping you fully informed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="group">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-4 bg-gradient-to-br ${step.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-brand-navy-light mb-1">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-brand-text leading-relaxed">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-3">
                      {step.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-brand-text"
                        >
                          <div
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${step.gradient}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg max-w-md mx-auto border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-brand-navy-light" />
            <h4 className="text-xl font-bold text-brand-navy">
              Typical Timeline
            </h4>
          </div>
          <div className="space-y-3 text-brand-text">
            <p className="flex items-center gap-2">
              <span className="text-brand-navy-light">→</span> First Call → Portal
              Access: <strong>24-48 hours</strong>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-navy-light">→</span> Document Review →
              Investment: <strong>3-5 days</strong>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-navy-light">→</span> Investment → First
              Distribution: <strong>30-45 days</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// DealCriteriaAndRisk Component
function DealCriteriaAndRisk() {
  const sections = [
    {
      icon: Building2,
      title: "What We Buy",
      items: [
        "Essentials-driven cash-flow assets",
        "Grocery-anchored retail centers",
        "Strategic self-storage facilities",
        "Select multifamily properties",
        "Strong tenant quality assets",
        "Properties in durable trade areas",
        "Conservative leverage positions",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: SearchCheck,
      title: "How We Underwrite",
      items: [
        "Comprehensive stress testing",
        "- Vacancy scenarios",
        "- Cap rate sensitivity",
        "- Interest rate impacts",
        "In-person property inspections",
        "Third-party due diligence",
        "Clear value-creation roadmap",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      items: [
        "Tenant rollover monitoring",
        "Debt maturity planning",
        "Cap-rate expansion analysis",
        "Supply pipeline tracking",
        "Climate/flood risk assessment",
        "Fixed/hedged debt preference",
        "Conservative reserve planning",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-32 bg-white border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Approach
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Deal Criteria & Risk Management
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Our systematic approach to identifying, analyzing, and managing
            investment opportunities and risks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="group">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200">
                  <CardHeader className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div
                        className={`p-4 bg-gradient-to-br ${section.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy">
                        {section.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-brand-text ${
                            item.startsWith("-") ? "pl-6 text-sm" : ""
                          }`}
                        >
                          {!item.startsWith("-") && (
                            <div
                              className={`h-2 w-2 rounded-full bg-gradient-to-r ${section.gradient} mt-2 flex-shrink-0`}
                            />
                          )}
                          {item.startsWith("-") ? item.substring(2) : item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl max-w-2xl mx-auto text-center border border-blue-100">
          <p className="text-lg text-brand-text italic font-medium">
            "We maintain the same level of diligence and care in our investments
            as physicians do in their medical practice."
          </p>
        </div>
      </div>
    </section>
  );
}

// CurrentOfferings Component
function CurrentOfferings() {
  const liveOfferings = [
    {
      title: "Real Estate",
      description:
        "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
      link: "/real-estate",
    },
    {
      title: "Equity",
      description:
        "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
      link: "/equity",
    },
    {
      title: "Fixed Income",
      description:
        "Historically lower volatility vs. equities, inflation hedge, income + depreciation.",
      link: "/fixed-income",
    },
  ];

  const hasLiveOfferings = liveOfferings.length > 0;

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Active Deals
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Current Investment Opportunities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            SEC-qualified investment opportunities, exclusively for accredited
            investors.
          </p>
        </div>

        {hasLiveOfferings ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {liveOfferings.map((offering, index) => (
              <div key={index} className="group">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-gradient-to-br from-brand-navy-light to-cyan-600">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-white text-brand-navy text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                          Limited Availability
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="h-4 w-4 text-brand-navy-light" />
                      <span className="text-sm text-brand-text">
                        Accredited Investors Only
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-3">
                      {offering.title}
                    </h3>
                    <p className="text-brand-text mb-4">
                      {offering.description}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-brand-navy-light to-cyan-600 hover:from-brand-navy hover:to-cyan-700 text-white group">
                      View Investment Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white border-2 border-dashed border-slate-300">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-brand-navy-light" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">
                  Between Acquisitions
                </h3>
                <p className="text-lg text-brand-text mb-8 leading-relaxed">
                  We're currently evaluating new opportunities that meet our
                  strict investment criteria. Join our investor list to be the
                  first to know when our next offering becomes available.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-navy-light to-cyan-600 hover:from-brand-navy hover:to-cyan-700 text-white px-8 py-6 text-lg group"
                >
                  Join The Investor List
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

// CaseStudies Component
function CaseStudies() {
  const caseStudies = [
    {
      title: "Grocery-Anchored Center",
      plan: "Lease Re-trade + Outparcel Sale",
      holdPeriod: "4.5 Years",
      coc: "8.2%",
      equityMultiple: "1.9x",
      irr: "17.8%",
      keyActions: [
        "Renegotiated anchor tenant lease",
        "Sold two outparcels at premium",
        "Reduced operating expenses by 12%",
        "Improved occupancy from 87% to 96%",
      ],
      learnings:
        "Market positioning and tenant mix proved more valuable than location. The strategic sale of outparcels generated unexpected upside while maintaining the core asset's value.",
    },
    {
      title: "Medical Office Portfolio",
      plan: "Value-Add Renovation + Tenant Optimization",
      holdPeriod: "5 Years",
      coc: "7.5%",
      equityMultiple: "1.75x",
      irr: "15.2%",
      keyActions: [
        "Modernized common areas",
        "Implemented energy efficiency upgrades",
        "Extended key tenant leases",
        "Consolidated medical specialties by floor",
      ],
      learnings:
        "Creating specialty-focused floors improved tenant synergies and retention. Energy upgrades provided both immediate cost savings and long-term value appreciation.",
    },
  ];

  return (
    <section className="py-32 bg-white border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Proven Results
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Track Record & Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Real results from our investment strategy, with key learnings from
            each project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className="group">
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        {study.title}
                      </h3>
                      <p className="text-brand-navy-light font-semibold">
                        {study.plan}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-text bg-slate-100 px-3 py-2 rounded-full">
                      <Clock className="h-4 w-4" />
                      {study.holdPeriod}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <div className="text-sm text-brand-text mb-1 font-medium">
                        CoC
                      </div>
                      <div className="font-bold text-xl text-brand-navy-light">
                        {study.coc}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="text-sm text-brand-text mb-1 font-medium">
                        Multiple
                      </div>
                      <div className="font-bold text-xl text-emerald-600">
                        {study.equityMultiple}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="text-sm text-brand-text mb-1 font-medium">
                        IRR
                      </div>
                      <div className="font-bold text-xl text-purple-600">
                        {study.irr}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-brand-navy-light" />
                      <h4 className="font-semibold text-brand-navy text-lg">
                        Key Actions
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {study.keyActions.map((action, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-brand-text"
                        >
                          <div className="h-2 w-2 rounded-full bg-brand-navy-light mt-2 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      <h4 className="font-semibold text-brand-navy">
                        What We Learned
                      </h4>
                    </div>
                    <p className="text-brand-text leading-relaxed">
                      {study.learnings}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// EducationHub Component
function EducationHub() {

  const physicianGuides = [
    {
      title: "Bonus Depreciation 101 For Doctors",
      description:
        "Learn how to maximize tax benefits through real estate investment depreciation strategies specifically for medical professionals.",
      readTime: "15 min read",
    },
    {
      title: "Understanding K-1s & Timing",
      description:
        "A comprehensive guide to interpreting K-1 statements and managing investment timing for optimal tax planning.",
      readTime: "12 min read",
    },
    {
      title: "REPS vs. Passive Investor",
      description:
        "Compare Real Estate Professional Status benefits with passive investment strategies to determine your optimal approach.",
      readTime: "18 min read",
    },
    {
      title: "Debt 101: Fixed vs. Floating",
      description:
        "Understanding different debt structures and their implications for real estate investment returns and risk management.",
      readTime: "10 min read",
    },
  ];

  const webinars = [
    {
      title: "Real Estate Investment Fundamentals",
      description:
        "Essential concepts every physician investor should understand before starting their real estate journey.",
      watchTime: "12 min",
    },
    {
      title: "Tax Strategies for Physician Investors",
      description:
        "Optimize your investment returns through strategic tax planning and available deductions.",
      watchTime: "10 min",
    },
    {
      title: "Portfolio Diversification Strategies",
      description:
        "Learn how to balance your investment portfolio with real estate assets.",
      watchTime: "8 min",
    },
  ];

  const glossaryTerms = [
    {
      term: "Cap Rate",
      definition:
        "Capitalization Rate - A property's net operating income divided by its current market value, used to estimate potential return on investment.",
    },
    {
      term: "CoC",
      definition:
        "Cash on Cash Return - Annual cash flow divided by total cash invested, showing the cash income earned on cash invested.",
    },
    {
      term: "IRR",
      definition:
        "Internal Rate of Return - The annual rate of growth an investment is expected to generate, accounting for the time value of money.",
    },
    {
      term: "LTV",
      definition:
        "Loan to Value Ratio - The ratio between the mortgage amount and the appraised value of a property, expressed as a percentage.",
    },
    {
      term: "DSCR",
      definition:
        "Debt Service Coverage Ratio - Net operating income divided by total debt service, measuring a property's ability to cover its debt payments.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Learn More
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Education Hub
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Curated resources to help physicians make informed investment
            decisions.
          </p>
        </div>

        <Tabs defaultValue="guides" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-100 p-1 rounded-xl">
            <TabsTrigger
              value="guides"
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg"
            >
              <Book className="h-4 w-4" />
              Physician Guides
            </TabsTrigger>
            <TabsTrigger
              value="webinars"
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg"
            >
              <PlayCircle className="h-4 w-4" />
              Video Resources
            </TabsTrigger>
            <TabsTrigger
              value="glossary"
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg"
            >
              <GraduationCap className="h-4 w-4" />
              Investment Glossary
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {physicianGuides.map((guide, index) => (
                <div key={index} className="group">
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                    <CardHeader className="flex flex-row items-start gap-4 p-6">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                        <Book className="h-6 w-6 text-brand-navy-light" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-brand-navy mb-2">
                          {guide.title}
                        </h3>
                        <p className="text-brand-text mb-3 leading-relaxed">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-brand-navy-light font-medium">
                          <Clock className="h-4 w-4" />
                          {guide.readTime}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar, index) => (
                <div key={index} className="group">
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                    <CardHeader className="p-6">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4 w-fit">
                        <PlayCircle className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-navy mb-2">
                        {webinar.title}
                      </h3>
                      <p className="text-brand-text mb-3 leading-relaxed">
                        {webinar.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                        <Clock className="h-4 w-4" />
                        {webinar.watchTime}
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="glossary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="group">
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
                    <CardHeader className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                          <Bookmark className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-brand-navy mb-2">
                            {item.term}
                          </h3>
                          <p className="text-brand-text leading-relaxed">
                            {item.definition}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// AboutFamily Component
function AboutFamily() {
  const values = [
    {
      icon: Shield,
      title: "Preservation",
      description:
        "Capital safety and protection come first in every decision.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We communicate openly and operate with unwavering ethics.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Full visibility into every investment and decision.",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "12", label: "States" },
    { number: "85%", label: "Repeat Investors" },
    { number: "$500M+", label: "Assets Managed" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 max-w-4xl mx-auto leading-tight">
            Decades In Medicine. A Mission To Help Physicians Invest Better.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-light to-cyan-600"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
              <Image
                src="/medical.jpg"
                alt="Medical family legacy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-brand-text leading-relaxed">
              Our family has been devoted to healthcare and research for
              decades. We saw first-hand how physicians carry intense schedules,
              high taxes, and limited time to evaluate investments.
            </p>
            <p className="text-lg text-brand-text leading-relaxed">
              We created this platform so medical professionals can co-invest
              alongside us in real, cash-flowing properties—with the same
              diligence and care we bring to patients and research.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-navy-light to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-brand-text font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="group">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 bg-gradient-to-br ${value.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-brand-text leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// FAQSection Component
function FAQSection() {
  const faqs = [
    {
      question: "Do I need to be accredited?",
      answer:
        "Yes, all investors must qualify as accredited investors as defined by SEC regulations. We'll help verify your status during the onboarding process.",
    },
    {
      question: "What is the minimum investment?",
      answer:
        "Our typical minimum investment is $50,000 per property, though this may vary by opportunity. We structure our investments to be accessible while ensuring meaningful returns.",
    },
    {
      question: "What are the target cash-on-cash returns and hold periods?",
      answer:
        "We target properties that can deliver 6-8% annual cash-on-cash returns, with typical hold periods of 5-7 years. Each opportunity has its own specific targets which we clearly outline.",
    },
    {
      question: "How often are distributions made?",
      answer:
        "We typically distribute cash flow quarterly, with some properties offering monthly distributions. The specific schedule is detailed in each investment's operating agreement.",
    },
    {
      question: "How will this affect my taxes? When will I receive a K-1?",
      answer:
        "You'll receive a Schedule K-1 annually, typically by March 15th. Our investments often provide tax advantages through depreciation. We recommend consulting your tax advisor for specific guidance.",
    },
    {
      question: "Can I invest via IRA/solo-401k or through my practice entity?",
      answer:
        "Yes, we accept investments through self-directed IRAs, solo 401(k)s, and business entities. We can help coordinate with your custodian or provide guidance on structure.",
    },
    {
      question: "What are the risks?",
      answer:
        "Real estate investments carry risks including potential loss of capital, market fluctuations, tenant defaults, and property-specific challenges. We detail risks thoroughly in our offering documents and focus on risk mitigation strategies.",
    },
    {
      question: "What fees do you charge?",
      answer:
        "Our fee structure typically includes an asset management fee and a performance fee aligned with investor returns. We provide full fee transparency in our offering documents.",
    },
    {
      question: "How are you aligned with investors?",
      answer:
        "We co-invest alongside our investors in every deal, typically 5-10% of the equity. Our success is directly tied to investment performance.",
    },
    {
      question: "What if I'm on call and can't attend a webinar?",
      answer:
        "All our webinars are recorded and available on-demand through our investor portal. We also offer one-on-one briefings at your convenience.",
    },
  ];

  return (
    <section className="py-32 bg-white border border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-navy-light font-semibold text-sm tracking-wider uppercase mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-navy-light to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-brand-text max-w-2xl mx-auto">
            Common questions from our physician investors. Don't see yours?
            Contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-slate-200 rounded-2xl bg-white hover:border-blue-200 transition-colors duration-200 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-brand-navy hover:text-brand-navy-light text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-brand-text leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function PhysiciansPage() {
  return (
    <main className="bg-white">
      <ForPhysicians />
      <HowItWorksDetailed />
      <DealCriteriaAndRisk />
      <CurrentOfferings />
      <CaseStudies />
      <EducationHub />
      <AboutFamily />
    </main>
  );
}
