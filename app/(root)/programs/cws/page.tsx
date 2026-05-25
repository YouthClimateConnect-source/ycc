import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Globe, Mic, Sparkles, PenLine } from 'lucide-react'

export default function CWSPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Storytelling & Advocacy
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Climate Warrior
            <span className="block text-[#34d399]">Stories</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            A global platform amplifying the voices of youth climate activists. Your story, in print, inspiring the world.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/program2.jpeg" alt="Climate Warrior Stories" fill className="object-cover" priority />
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* About */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-6">About the Initiative</h2>
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  The Climate Warrior Stories Book is a platform to amplify the voices of youth climate activists.
                  YCC invites individuals globally to share their climate and environmental activism stories — narratives
                  of impact, advocacy, and awareness.
                </p>
                <p>
                  Selected submissions are compiled into a beautifully designed digital flip-book published on YCC's
                  website and promoted across our social media channels, reaching a worldwide audience and inspiring
                  action and solidarity in the climate movement.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center gap-4">
              <BookOpen className="w-12 h-12 text-[#059669]" />
              <h3 className="text-xl font-extrabold text-[#1e3a2b]">First Edition Published</h3>
              <p className="text-sm text-gray-600">
                The inaugural edition of Climate Warrior Stories is live — featuring voices of resilience, innovation,
                and passion for a sustainable future from changemakers around the world.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: PenLine, title: "Share Your Story", desc: "Tell us about your climate activism journey, your impact, and what drives you." },
              { icon: Sparkles, title: "Get Reviewed", desc: "Our team reviews submissions and selects the most compelling narratives for publication." },
              { icon: Globe, title: "Inspire the World", desc: "Your story goes live in a digital flip-book seen by a global audience across our platforms." },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#059669]/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#059669]" />
                </div>
                <h3 className="font-bold text-[#1e3a2b] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 p-8 md:p-10 text-center">
            <Mic className="w-10 h-10 text-[#059669] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-4">Ready to share your story?</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mb-6">
              We're always looking for powerful voices to feature in upcoming editions. Reach out and let us know about your work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold rounded-full hover:bg-[#047857] transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
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
