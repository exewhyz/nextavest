"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Clock, ChartBar, FileText, Quote, Star } from "lucide-react";

// Single-file NextaVest homepage with navigation, full sections, metrics, carousel, and contact
export default function NextaVestHomePage() {
  // Mobile nav toggle
  const [navOpen, setNavOpen] = useState(false);

  // Animated counters
  const [deployed, setDeployed] = useState(0);
  const [investors, setInvestors] = useState(0);
  const [repeatPct, setRepeatPct] = useState(0);

  useEffect(() => {
    // simple count up animation
    const duration = 1200; // ms
    const start = Date.now();

    const targetDeployed = 25000000; // $25M
    const targetInvestors = 1000;
    const targetRepeat = 18;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(1, elapsed / duration);
      setDeployed(Math.round(targetDeployed * progress));
      setInvestors(Math.round(targetInvestors * progress));
      setRepeatPct(Math.round(targetRepeat * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, []);

  // Testimonials carousel
  const testimonials = [
    { quote: "Clear, timely updates and real passive income—exactly what I needed after selling my practice.", name: "M.D., Texas" },
    { quote: "NextaVest handles everything. As a busy surgeon, this is hands-off wealth building.", name: "Fellow, CA" },
    { quote: "Professional, conservative, and aligned with our interests.", name: "D.D.S., FL" },
  ];
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-inter text-slate-900 bg-[radial-gradient(ellipse_at_top_left,_#0f172a,_transparent),radial-gradient(ellipse_at_bottom_right,_#7c2d12_10%,_transparent)] min-h-screen text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">NextaVest</div>
            <div className="hidden md:flex text-sm text-gray-300 gap-6">
              <a className="hover:underline">About</a>
              <a className="hover:underline">Properties</a>
              <a className="hover:underline">Education</a>
              <a className="hover:underline">Contact</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block text-sm text-gray-300">For accredited investors</div>
            <Button onClick={() => setNavOpen(false)}>Join The Investor List</Button>
            <button className="md:hidden p-2" onClick={() => setNavOpen((s) => !s)} aria-label="Toggle menu">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {navOpen && (
          <div className="md:hidden bg-white/6 border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a className="py-2">About</a>
              <a className="py-2">Properties</a>
              <a className="py-2">Education</a>
              <a className="py-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main>
        <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 bg-white/6 p-8 rounded-2xl backdrop-blur-xl border border-white/8 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Passive Real Estate For Medical Professionals</h1>
            <p className="text-lg text-gray-200 max-w-xl">Co-invest with a family team that prioritizes capital preservation, day-one income, and physician-friendly reporting.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Join The Physician Investor List</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Book A 15-Minute Call</Button>
            </div>
            <p className="text-sm text-gray-400">For accredited investors. SEC Regulation D 506(c) where applicable.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.8 }} className="relative h-96 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src="/team-medical.jpg" alt="Team" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/6 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="text-xs text-gray-200">Family-founded. Physician-focused.</div>
            </div>
          </motion.div>
        </section>

        {/* TRUST BAR + METRICS */}
        <section className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-white/4 rounded-2xl p-4 backdrop-blur-md border border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-200">Physicians | Dentists | Surgeons | Practice Owners | Anesthesiologists | Hospitalists</div>
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <div className="text-2xl font-semibold">${deployed.toLocaleString()}</div>
                <div className="text-xs text-gray-300">deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{investors.toLocaleString()}</div>
                <div className="text-xs text-gray-300">investors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">{repeatPct}%</div>
                <div className="text-xs text-gray-300">repeat investors</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROBLEM -> PROMISE */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="bg-white/6 p-8 rounded-2xl backdrop-blur-md border border-white/8">
            <h2 className="text-2xl font-semibold mb-4">You Heal Patients. We Help Build Predictable Income.</h2>
            <ul className="list-disc pl-6 text-gray-200 space-y-2">
              <li>Limited time outside clinical duties</li>
              <li>Rising taxes and complex planning for high W-2 income</li>
              <li>Burnout and the uncertainty of markets</li>
              <li>Lack of reliable, passive post-practice income</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="grid gap-4">
            {[{ icon: <ShieldCheck className="w-6 h-6 text-orange-400" />, title: "Passive cash flow", body: "Professionally managed assets." }, { icon: <ChartBar className="w-6 h-6 text-orange-400" />, title: "Tax advantages", body: "Bonus depreciation, cost segregation." }, { icon: <FileText className="w-6 h-6 text-orange-400" />, title: "Direct ownership", body: "Deal-by-deal — no blind funds." }, { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Transparent updates", body: "Secure investor portal." }].map((it, i) => (
              <motion.div key={i} whileHover={{ scale: 1.025 }} className="flex gap-4 items-start bg-white/6 p-4 rounded-xl backdrop-blur-md border border-white/8">
                <div className="p-2 rounded-lg bg-white/8">{it.icon}</div>
                <div>
                  <div className="font-medium">{it.title}</div>
                  <div className="text-sm text-gray-300">{it.body}</div>
                </div>
              </motion.div>
            ))}

            <div>
              <Button className="bg-orange-500 hover:bg-orange-600">Download The Physician’s 12-Minute Guide</Button>
            </div>
          </motion.div>
        </section>

        {/* HOW IT WORKS - deeper section */}
        <section className="container mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-center mb-8">How It Works — The Full Process</motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/6 p-6 rounded-2xl backdrop-blur-md border border-white/8">
              <ol className="list-decimal pl-6 space-y-4 text-gray-200">
                <li><strong>Join & Verify:</strong> accreditation check, risk profile, goals.</li>
                <li><strong>Review Opportunities:</strong> Deal snapshot: asset, market, plan, target CoC/IRR, hold, risk flags.</li>
                <li><strong>Invest:</strong> E-sign PPM/sub docs; wire instructions; portal onboarding.</li>
                <li><strong>Get Paid & Stay Informed:</strong> distribution cadence; report cadence; K-1 timeline.</li>
              </ol>
            </div>
            <aside className="bg-white/4 p-6 rounded-2xl backdrop-blur-md border border-white/8 text-gray-200">
              <div className="font-medium mb-2">Typical timeline</div>
              <div className="text-sm">First Call → Review → Fund → First Distribution (example: 6–12 months).</div>
              <div className="mt-6">
                <Button className="bg-orange-500 hover:bg-orange-600">Join The Investor List</Button>
              </div>
            </aside>
          </div>
        </section>

        {/* PROPERTIES / OFFERINGS (teaser) */}
        <section className="container mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-center mb-8">Current Offerings</motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-full md:w-1/3 h-36 relative rounded-lg overflow-hidden">
                  <Image src="/property-1.jpg" alt="property" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">Between acquisitions — get the guide</div>
                  <div className="text-sm text-gray-300 mt-2">Download The Physician’s 12‑Minute Guide to Passive Commercial Real Estate (PDF) and receive short briefs and the next offering alert.</div>
                  <div className="mt-4">
                    <Button className="bg-orange-500 hover:bg-orange-600">Download Guide (email gated)</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="font-medium">Sample Realized Case Study</div>
                <div className="text-sm text-gray-300">Grocery-Anchored center: strategic re-lease + outparcel optimization.</div>
                <div className="flex gap-4 mt-2">
                  <div className="text-sm">
                    <div className="font-semibold">CoC</div>
                    <div className="text-gray-300">8%</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Hold</div>
                    <div className="text-gray-300">3 yrs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* RESULTS & CASE STUDIES */}
        <section className="container mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-center mb-8">Selected Results (De-identified)</motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent>
                <div className="font-medium">Grocery-Anchored Center</div>
                <div className="text-sm text-gray-300 mt-2">Hold 3 yrs · CoC: 8% · Equity Multiple: 1.4x</div>
                <div className="mt-3 text-xs text-gray-400">What we learned: conservative rent ramps and strategic outparcel optimization.</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="font-medium">Self-Storage Conversion</div>
                <div className="text-sm text-gray-300 mt-2">Hold 4 yrs · CoC: 7% · Equity Multiple: 1.5x</div>
                <div className="mt-3 text-xs text-gray-400">Value-add through operational improvements and lease management.</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="font-medium">Select Multifamily</div>
                <div className="text-sm text-gray-300 mt-2">Hold 5 yrs · CoC: 6% · Equity Multiple: 1.6x</div>
                <div className="mt-3 text-xs text-gray-400">Stabilized rents and capex optimization.</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* EDUCATION HUB TEASER */}
        <section className="container mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-center mb-6">Physician Guides & Short Webinars</motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
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
        </section>

        {/* TESTIMONIALS CAROUSEL */}
        <section className="container mx-auto px-6 py-12">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-center mb-8">What Our Physician Investors Say</motion.h3>
          <div className="relative max-w-3xl mx-auto">
            <motion.div key={tIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/6 p-8 rounded-2xl backdrop-blur-md border border-white/8 text-center">
              <Quote className="w-6 h-6 text-orange-400 mx-auto mb-3" />
              <p className="text-gray-200 italic mb-4">“{testimonials[tIndex].quote}”</p>
              <div className="text-sm text-gray-300">— {testimonials[tIndex].name}</div>
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTIndex(i)} className={`w-2 h-2 rounded-full ${i === tIndex ? "bg-orange-400" : "bg-white/30"}`} aria-label={`Go to testimonial ${i + 1}`} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA BAND */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Join 1,000+ medical professionals building passive income outside the OR.</h3>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">Join The Investor List</Button>
        </motion.section>

        {/* CONTACT */}
        {/* <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto bg-white/6 p-8 rounded-2xl backdrop-blur-md border border-white/8">
            <h3 className="text-xl font-semibold mb-4">Let’s Connect</h3>
            <p className="text-sm text-gray-300 mb-6">Tell us about your goals — we’ll send the 12-Minute Guide and invite you to the next webinar.</p>
            <form className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full name" />
              <Input placeholder="Email" type="email" />
              <Select>
                <SelectItem value="md">MD/DO</SelectItem>
                <SelectItem value="dds">DDS/DMD</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </Select>
              <Select>
                <SelectItem value="yes">Accredited: Yes</SelectItem>
                <SelectItem value="no">Accredited: No</SelectItem>
              </Select>
              <Textarea className="md:col-span-2" placeholder="Message (optional)" />
              <div className="md:col-span-2 flex items-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600">Submit</Button>
                <div className="text-sm text-gray-300">Or email us at <a className="underline">info@nextavest.com</a></div>
              </div>
            </form>
          </div>
        </section> */}

      </main>

      {/* FOOTER */}
      <footer className="bg-white/5 border-t border-white/8 mt-12">
        <div className="container mx-auto px-6 py-8 text-xs text-gray-300">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold">NextaVest</div>
              <div className="mt-2">Preservation · Integrity · Transparency</div>
            </div>
            <div>
              <div className="font-medium">Legal</div>
              <ul className="mt-2 space-y-1">
                <li>Reg D 506(b)/(c) disclosure (as applicable)</li>
                <li>General solicitation note</li>
                <li>Forward-looking statements disclaimer</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Navigate</div>
              <ul className="mt-2 space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Properties</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-gray-400">This is not investment, tax, or legal advice. Past performance is not indicative of future results.</div>
        </div>
      </footer>
    </div>
  );
}
