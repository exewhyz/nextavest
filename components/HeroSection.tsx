import { TrustedBy } from "./TrustBar";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="relative isolate pt-14 lg:px-8">
      <div className="py-24 sm:py-32 lg:pb-40">
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
            {/* micro copy */}
            <p className="mt-4 text-xs text-gray-600">
              For accredited investors. SEC Regulation D 506(c) where
              applicable.
            </p>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-white p-4 shadow-2xl ring-1 ring-gray-900/10">
                <div className="aspect-[1288/728] overflow-hidden rounded-lg bg-gray-50" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <TrustedBy />
          </div>
        </div>
      </div>
    </div>
  );
}
