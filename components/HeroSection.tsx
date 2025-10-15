import { TrustedBy } from "./TrustBar";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate pt-14 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="absolute top-10 -left-10 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="py-24 sm:py-32 lg:pb-40 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0a2540] sm:text-6xl">
              Passive Real Estate for Medical Professionals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Co-invest alongside a physician-focused family team in low-risk,
              cash-flowing properties designed for predictable,
              physician-friendly income.
            </p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-6 md:gap-y-0">
              <Button size="lg">Join The Physician Investor List</Button>
              <Button variant="outline" size="lg">
                Request Consultation →
              </Button>
            </div>

            <p className="mt-4 text-xs text-gray-600">
              For accredited investors. SEC Regulation D 506(c) where
              applicable.
            </p>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
                <div className="aspect-[1080/720] overflow-hidden rounded-lg bg-transparent">
                  <img
                    src="/stats.jpeg"
                    alt="NextaVest Asset Class Comparison - Real Estate Investment Benefits"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <TrustedBy />
          </div>
        </div>
      </div>
    </section>
  );
}
