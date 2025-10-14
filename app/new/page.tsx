"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn/ui
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, CheckCircle, FileText, Download } from "lucide-react";

// Types
type CTAProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
};

// Small utility motion wrapper
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.45 }}>
    {children}
  </motion.div>
);

// 1) HERO
export const Hero: React.FC<CTAProps> = ({ primaryLabel = "Join The Physician Investor List", secondaryLabel = "Book A 15-Minute Call", onPrimary, onSecondary }) => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">Passive Real Estate For Medical Professionals</h1>
            <p className="mt-4 text-lg max-w-xl text-muted-foreground">Co-invest with a family team that prioritizes capital preservation, day-one income, and physician-friendly reporting.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={onPrimary} className="px-6 py-3">
                {primaryLabel}
              </Button>
              <Button variant="outline" onClick={onSecondary} className="px-6 py-3">
                {secondaryLabel}
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">For accredited investors. SEC Regulation D 506(c) where applicable.</p>
          </FadeIn>
        </div>
        <div className="relative flex justify-center">
          <FadeIn delay={0.12}>
            {/* Placeholder image — replace with warm team photo or medical/real-estate composite */}
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100">
              <div className="bg-gradient-to-tr from-white to-slate-50 p-6">
                <Image src="/images/team-placeholder.jpg" alt="NextaVest Team" width={720} height={480} className="object-cover w-full h-64 rounded-lg" />
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Warm family team — medical + real estate experience</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// 2) TRUST BAR
export const TrustBar: React.FC<{ deployed?: string; investorsStates?: number; repeatPercent?: number }> = ({ deployed = "$X deployed", investorsStates = 30, repeatPercent = 0 }) => (
  <div className="bg-slate-50 border-t border-b py-3">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-3 text-sm">
      <div className="flex items-center gap-4 text-xs uppercase tracking-wide text-muted-foreground">
        <span>Physicians</span>
        <span className="opacity-50">|</span>
        <span>Dentists</span>
        <span className="opacity-50">|</span>
        <span>Surgeons</span>
        <span className="opacity-50">|</span>
        <span>Practice Owners</span>
        <span className="opacity-50">|</span>
        <span>Anesthesiologists</span>
        <span className="opacity-50">|</span>
        <span>Hospitalists</span>
      </div>
      <div className="text-xs text-muted-foreground">Investors in {investorsStates}+ states · {deployed} · {repeatPercent}% repeat investors</div>
    </div>
  </div>
);

// 3) PROBLEM → PROMISE
export const ProblemPromise: React.FC<{ onDownload?: () => void }> = ({ onDownload }) => {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <FadeIn>
            <h2 className="text-2xl font-semibold">You Heal Patients. We Help Build Predictable Income.</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>• Limited time outside clinical duties</li>
              <li>• Rising taxes and complex planning for high W-2 income</li>
              <li>• Burnout and the uncertainty of markets</li>
              <li>• Lack of reliable, passive post-practice income</li>
            </ul>
          </FadeIn>
        </div>
        <div>
          <FadeIn delay={0.08}>
            <h3 className="text-lg font-medium">How we help</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Passive cash flow</div>
                    <div className="text-xs text-muted-foreground">Professionally managed assets</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3">
                  <FileText className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Tax advantages</div>
                    <div className="text-xs text-muted-foreground">Bonus depreciation, cost segregation</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Direct ownership</div>
                    <div className="text-xs text-muted-foreground">Deal-by-deal — no blind funds</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Transparent updates</div>
                    <div className="text-xs text-muted-foreground">Secure investor portal</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Button onClick={onDownload}>
                <Download className="mr-2 w-4 h-4" />
                Download The Physician’s 12‑Minute Guide
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// 4) HOW IT WORKS — Quick (3 steps)
export const HowItWorksQuick: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">How It Works — Simple, Transparent</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="font-medium">Apply & Verify</div>
            <div className="text-sm text-muted-foreground mt-2">Confirm accreditation and investment goals.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Review Deals</div>
            <div className="text-sm text-muted-foreground mt-2">Concise briefs and webinars.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Invest & Earn</div>
            <div className="text-sm text-muted-foreground mt-2">E-sign, fund, and receive distributions.</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Button>Join The Investor List</Button>
      </div>
    </FadeIn>
  </section>
);

// 5) FEATURED OFFERING / LEAD MAGNET
export const FeaturedOffering: React.FC<{ live?: boolean }> = ({ live = false }) => {
  if (live) {
    return (
      <section className="container mx-auto px-6 py-12">
        <FadeIn>
          <h2 className="text-2xl font-semibold">Featured Offering</h2>
          <Card className="mt-6">
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-full md:w-1/3">
                  <Image src="/images/property-sample.jpg" alt="Offering" width={400} height={240} className="rounded-lg" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">Grocery-Anchored Center — Midwest</div>
                  <div className="text-sm text-muted-foreground mt-2">Min investment: $100,000 · Target CoC: 8% · Target IRR: 12% · Hold: 3–5 yrs</div>
                  <div className="mt-4">
                    <Button>View Offering (Gated)</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <FadeIn>
        <Card>
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xl font-semibold">Between acquisitions — get the guide</div>
              <div className="text-sm text-muted-foreground mt-1">Download The Physician’s 12‑Minute Guide to Passive Commercial Real Estate (PDF) and receive short briefs and the next offering alert.</div>
            </div>
            <div>
              <Button>Download Guide (email gated)</Button>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
};

// 6) WHY CO-INVEST WITH US
export const WhyCoInvest: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Why Co‑Invest With NextaVest</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent>
            <div className="font-medium">We invest alongside our LPs</div>
            <div className="text-sm text-muted-foreground mt-2">Alignment you can verify.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Single-asset LLCs</div>
            <div className="text-sm text-muted-foreground mt-2">Know exactly what you own.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Conservative underwriting</div>
            <div className="text-sm text-muted-foreground mt-2">Essentials-driven: grocery, storage, select multifamily.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Investor-first communication</div>
            <div className="text-sm text-muted-foreground mt-2">Quarterly reports, timely K‑1s, secure portal.</div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  </section>
);

// 7) TESTIMONIALS
export const Testimonials: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">What Our Physician Investors Say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div>“Clear, timely updates and real passive income—exactly what I needed after selling my practice.”</div>
            <div className="mt-3 text-xs text-muted-foreground">— M.D., Texas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>“NextaVest handles everything. As a busy surgeon, this is hands-off wealth building.”</div>
            <div className="mt-3 text-xs text-muted-foreground">— Fellow, CA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>“Professional, conservative, and aligned with our interests.”</div>
            <div className="mt-3 text-xs text-muted-foreground">— D.D.S., FL</div>
          </CardContent>
        </Card>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Real investors. No compensation for testimonials.</p>
    </FadeIn>
  </section>
);

// 8) CTA BAND
export const CTABand: React.FC<{ count?: number }> = ({ count = 1000 }) => (
  <section className="py-10 bg-navy-600 text-white">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="text-xl font-semibold">Join {count}+ medical professionals building passive income outside the OR.</div>
      </div>
      <div>
        <Button>Join The Investor List</Button>
      </div>
    </div>
  </section>
);

// 9) FOR PHYSICIANS TEASER
export const ForPhysicians: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Your Time Is Scarce. Your Money Should Work Overtime.</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="font-medium">Why Real Estate For Doctors</div>
            <div className="text-sm text-muted-foreground mt-2">Lower volatility vs equities; inflation hedge; income + depreciation.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Tax Focus</div>
            <div className="text-sm text-muted-foreground mt-2">Bonus depreciation, cost segregation basics.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Scheduling</div>
            <div className="text-sm text-muted-foreground mt-2">12-minute deal briefs, on-demand webinars.</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex gap-3">
        <Button>Download the 12‑Minute Guide</Button>
        <Button variant="outline">Book a Call</Button>
      </div>
    </FadeIn>
  </section>
);

// 10) HOW IT WORKS — DEEPER
export const HowItWorksDeep: React.FC = () => (
  <section className="container mx-auto px-6 py-12 lg:py-16">
    <FadeIn>
      <h2 className="text-2xl font-semibold">How It Works — The Full Process</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ol className="list-decimal list-inside space-y-4 text-sm text-muted-foreground">
            <li>
              <strong>Join & Verify:</strong> accreditation check, risk profile, goals.
            </li>
            <li>
              <strong>Review Opportunities:</strong> Deal snapshot: asset, market, plan, target CoC/IRR, hold, risk flags.
            </li>
            <li>
              <strong>Invest:</strong> E-sign PPM/sub docs; wire; portal onboarding.
            </li>
            <li>
              <strong>Get Paid & Stay Informed:</strong> distribution cadence; report cadence; K‑1 timeline.
            </li>
          </ol>
        </div>
        <aside className="bg-slate-50 p-4 rounded-lg">
          <div className="text-sm">Typical timeline: First Call → Review → Fund → First Distribution (example: 6–12 months).</div>
        </aside>
      </div>
    </FadeIn>
  </section>
);

// 11) DEAL CRITERIA & RISK
export const DealCriteria: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">What We Buy & How We Manage Risk</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
        <Card>
          <CardContent>
            <div className="font-medium">What We Buy</div>
            <div className="mt-2">Essentials-driven cash-flow assets — grocery-anchored retail, self-storage, select multifamily, medical properties.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Underwriting</div>
            <div className="mt-2">Stress tests, 3rd-party inspections, clear value creation plans.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Risks We Watch</div>
            <div className="mt-2">Tenant rollover, debt maturity, cap-rate expansion, climate/flood exposure.</div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  </section>
);

// 12) CURRENT OFFERINGS / INVESTOR LIST (simple)
export const CurrentOfferings: React.FC<{ live?: boolean }> = ({ live = false }) => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Current Offerings</h2>
      <div className="mt-6">
        {live ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Render offering teasers */}
            <Card>
              <CardContent>
                <div className="font-medium">Grocery-Anchored — Active</div>
                <div className="text-sm text-muted-foreground mt-2">Teaser info — gated.</div>
                <div className="mt-3">
                  <Button>View (Gated)</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">Between acquisitions — join the investor list for the next offering.</div>
        )}
      </div>
    </FadeIn>
  </section>
);

// 13) RESULTS & CASE STUDIES
export const ResultsCaseStudies: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Selected Results (De-identified)</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="font-medium">Grocery-Anchored Center</div>
            <div className="text-sm text-muted-foreground mt-2">Hold: 3 yrs · CoC: X% · Equity Multiple: X.Xx</div>
            <div className="mt-3 text-xs">What we learned: conservative rent ramps and strategic outparcel optimization.</div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  </section>
);

// 14) EDUCATION HUB
export const EducationHubTeaser: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Physician Guides & Short Webinars</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="font-medium">Bonus Depreciation 101 For Doctors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Understanding K-1s & Timing</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Debt 101: Fixed vs Floating</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Button>Visit Education Hub</Button>
      </div>
    </FadeIn>
  </section>
);

// 15) ABOUT OUR FAMILY (pasteable ready copy)
export const AboutFamily: React.FC = () => (
  <section className="container mx-auto px-6 py-12 lg:py-16">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Decades In Medicine. A Mission To Help Physicians Invest Better.</h2>
      <p className="mt-4 text-sm text-muted-foreground max-w-3xl">Our family has been devoted to healthcare and research for decades. After building Meridian Health Laboratories and serving over 10,000 physicians, we saw the recurring problem: when doctors retired or sold their practices, income often stopped. NextaVest was founded to help doctors turn hard-earned capital into predictable income — with the same diligence and care we gave patients and research.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <div className="font-medium">Bruce Shapiro — Co-Founder & CEO</div>
            <div className="text-sm text-muted-foreground mt-2">Medical and commercial real estate background; decades of multi-state operations.</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-medium">Dana Shapiro — Co-Founder & Head of Medical Partnerships</div>
            <div className="text-sm text-muted-foreground mt-2">Builds physician relationships and simplifies access to vetted deals.</div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  </section>
);

// 16) FAQ (short)
export const FAQ: React.FC = () => (
  <section className="container mx-auto px-6 py-12">
    <FadeIn>
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
        <div>
          <div className="font-medium">Do I need to be accredited?</div>
          <div className="mt-1">Yes — most offerings require accredited investor status.</div>
        </div>
        <div>
          <div className="font-medium">What’s the minimum investment?</div>
          <div className="mt-1">Minimums vary by deal; please join the list for current thresholds.</div>
        </div>
      </div>
    </FadeIn>
  </section>
);

// 17) COMPLIANCE & FOOTER
export const ComplianceFooter: React.FC = () => (
  <footer className="bg-white border-t mt-12 py-8">
    <div className="container mx-auto px-6 text-xs text-muted-foreground">
      <div className="mb-2">Reg D 506(b)/(c) disclosure (as applicable). General solicitation note. Forward-looking statements disclaimer. Risk factors and privacy/HIPAA notice — we do not handle PHI.</div>
      <div className="flex flex-wrap gap-4 mt-4">
        <a className="underline">Home</a>
        <a className="underline">About</a>
        <a className="underline">Properties</a>
        <a className="underline">Contact</a>
        <a className="underline">Privacy</a>
        <a className="underline">Disclosures</a>
      </div>
      <div className="mt-4">This is not investment, tax, or legal advice. Past performance is not indicative of future results.</div>
    </div>
  </footer>
);

// Main assembled homepage component (default export)
export default function NextaVestHomePage() {
  return (
    <div className="font-inter text-slate-900">
      <Hero />
      <TrustBar deployed="$25M deployed" investorsStates={30} repeatPercent={18} />
      <ProblemPromise />
      <HowItWorksQuick />
      <FeaturedOffering live={false} />
      <WhyCoInvest />
      <Testimonials />
      <CTABand count={1000} />
      <ForPhysicians />
      <HowItWorksDeep />
      <DealCriteria />
      <CurrentOfferings live={false} />
      <ResultsCaseStudies />
      <EducationHubTeaser />
      <AboutFamily />
      <FAQ />
      <ComplianceFooter />
    </div>
  );
}
