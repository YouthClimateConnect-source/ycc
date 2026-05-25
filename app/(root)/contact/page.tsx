import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Let&apos;s Build
            <span className="block text-[#34d399]">Together</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            Whether you&apos;re interested in partnerships, programs, or just want to say hello we&apos;d love to hear from you.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/ourteambg.png" alt="background" fill className="object-cover" priority />
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Contact Info */}
          <div className="flex flex-col gap-8 justify-center">

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b]">
                Let&apos;s get in touch
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Whether you&apos;re interested in collaborative projects, educational initiatives, or just want to say hello, we&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#059669]/10 p-2.5 rounded-lg">
                  <Mail className="w-5 h-5 text-[#059669]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Email</p>
                  <a href="mailto:Partnership@youthclimateconnect.org" className="text-sm font-semibold text-[#1e3a2b] hover:text-[#059669] transition-colors">
                    Partnership@youthclimateconnect.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#059669]/10 p-2.5 rounded-lg">
                  <Phone className="w-5 h-5 text-[#059669]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Phone</p>
                  <a href="tel:+201553009428" className="text-sm font-semibold text-[#1e3a2b] hover:text-[#059669] transition-colors">
                    +20 155 300 9428
                  </a>
                </div>
              </div>
            </div>

            {/* Friends CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60">
              <h3 className="font-bold text-[#1e3a2b] mb-2">Want to collaborate more deeply?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Explore the Friends of YCC, our flagship partnership hub for allies, donors, and volunteers.
              </p>
              <Link
                href="/friends"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#059669] hover:text-[#047857] transition-colors group"
              >
                Become a Friend of YCC
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <form action="https://formspree.io/f/xoqgvnbr" method="POST" className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-[#1e3a2b]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#1e3a2b]">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-[#1e3a2b]">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/30 focus:border-[#059669] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#059669]/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
