import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Monitor, Award, Users, CheckCircle2, Clock } from 'lucide-react'

export default function YCCSPPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Education & Empowerment
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Youth Climate Change
            <span className="block text-[#34d399]">Startup Program</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            Two interactive online sessions educating and empowering young people to take action on climate change, with a focus on the Global South.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/program3.png" alt="YCCSP" fill className="object-cover" priority />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "Sessions", value: "2 Workshops" },
            { icon: Globe, label: "Format", value: "Online" },
            { icon: Award, label: "Certificate", value: "On Completion" },
            { icon: Users, label: "Cost", value: "Free" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <stat.icon className="w-6 h-6 text-[#059669]" />
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</span>
              <span className="text-sm font-extrabold text-[#1e3a2b]">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* About */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-6">About the Program</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                The Youth Climate Change Startup Program (YCCSP) is a two-session online initiative whose primary
                objective is empowering young individuals to tackle the challenges posed by climate change.
              </p>
              <p>
                Participants who attend both sessions receive a certificate of recognition and join a network
                of climate activists and changemakers. The program is free and open to everyone.
              </p>
            </div>
          </div>

          {/* Workshops */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-8">The Workshops</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-[#059669]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1e3a2b] mb-3">Workshop 1</h3>
                <p className="text-sm font-semibold text-[#059669] mb-2">Exploring YCC&apos;s Vision & the Effect of Climate Change on Youth</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  An introduction to YouthClimate Connect&apos;s vision and mission, followed by an examination of
                  climate change&apos;s effects on youth well-being and future prospects. Duration: 1.5 hours.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1e3a2b] mb-3">Workshop 2</h3>
                <p className="text-sm font-semibold text-emerald-700 mb-2">Climate Justice in the Global South</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A deep dive into climate justice with a focus on the Global South, exploring climate equity
                  complexities and the pursuit of informed, equitable solutions.
                </p>
              </div>
            </div>
          </div>

          {/* What you gain */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-6">What You&apos;ll Gain</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Understand YCC's vision and how climate change impacts youth globally",
                "Deepen your knowledge of climate justice and equity in the Global South",
                "Connect with like-minded changemakers from around the world",
                "Earn a certificate of recognition upon completing both sessions",
                "Join YCC's network of climate activists and explore volunteer opportunities",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back */}
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#059669] hover:text-[#047857] transition-colors group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to all programs
          </Link>

        </div>
      </section>

    </div>
  )
}
