import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function DonationPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Support the Mission
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Invest in the
            <span className="block text-[#34d399]">Next Generation</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            100% of your contribution fuels youth-led climate adaptation across Africa, Asia, and Latin America.
          </p>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ourteambg.png"
            alt="background"
            fill
            className="object-cover object-[50%_33%]"
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column */}
          <div className="flex flex-col gap-8 justify-center">

            {/* Trust badge */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="bg-[#059669]/10 p-2.5 rounded-lg shrink-0">
                <ShieldCheck className="text-[#059669] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1e3a2b] text-sm mb-1">Secure & Tax-Deductible</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  YouthClimate Connect is a registered US 501(c)(3) nonprofit. All donations are secure and tax-deductible to the extent allowed by law.
                </p>
              </div>
            </div>

            {/* ROI Card */}
            <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">The Return on Impact</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-4">
                The 1-to-1,000 Multiplier
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                For every <strong className="text-[#1e3a2b]">$100</strong> invested in YCC, we train and fund a young leader who will go on to execute projects that secure the climate resilience of up to <strong className="text-[#1e3a2b]">1,000 people</strong> in their local community. Real data. Real impact.
              </p>
            </div>

            {/* Friends CTA */}
            <Link
              href="/friends"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#059669] hover:text-[#047857] transition-colors group"
            >
              Learn about other ways to collaborate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column — Widget */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
              <givebutter-widget id="j1Xdyb" style={{ width: '100%' }}></givebutter-widget>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
