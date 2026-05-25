import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Mic, Users, Lightbulb, Handshake, Calendar } from 'lucide-react'

const highlights = [
  {
    icon: Mic,
    title: "Showcase Ideas",
    desc: "Present innovative climate projects, solutions, and ideas on a global stage before international organizations and experts.",
  },
  {
    icon: Handshake,
    title: "Connect & Network",
    desc: "Meet young leaders from diverse backgrounds, build lasting partnerships, and find mentors who can accelerate your impact.",
  },
  {
    icon: Lightbulb,
    title: "Learn from the Best",
    desc: "Attend keynotes, panels, and workshops led by climate experts, policy influencers, and grassroots changemakers.",
  },
  {
    icon: Globe,
    title: "Shape the Movement",
    desc: "Contribute to a global agenda for youth-led climate action and help define the priorities for the year ahead.",
  },
]

export default function SummitPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Flagship Event
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Annual Youth-Climate
            <span className="block text-[#34d399]">Connect Summit</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            Our flagship global gathering — where young leaders showcase climate innovation, connect with world-class organizations, and shape the future of the movement.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/program4.jpg" alt="Summit" fill className="object-cover" priority />
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* About */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-6">About the Summit</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                The Youth-Climate Connect Summit is the flagship event of YouthClimate Connect. This annual global
                gathering is dedicated to empowering and engaging youth worldwide in climate action.
              </p>
              <p>
                It serves as a platform where young leaders from diverse backgrounds come together to showcase
                innovative climate projects, solutions, and ideas while connecting with international organizations,
                experts, and influencers who can amplify their impact.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#059669]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1e3a2b] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 p-8 md:p-10 text-center">
            <Calendar className="w-10 h-10 text-[#059669] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-4">Be part of the next Summit</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mb-6">
              Whether as an attendee, speaker, or partner — there's a place for you at the table. Get in touch to learn about upcoming dates and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold rounded-full hover:bg-[#047857] transition-colors"
              >
                Express Interest <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/friends"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#059669] text-[#059669] font-bold rounded-full hover:bg-[#059669] hover:text-white transition-colors"
              >
                Become a Friend of YCC
              </Link>
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
