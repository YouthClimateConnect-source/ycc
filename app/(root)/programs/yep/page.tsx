import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Clock, Users, BookOpen, Award, PenLine, BarChart3, Presentation, CheckCircle2 } from 'lucide-react'

const curriculum = [
  { icon: BookOpen, label: "Climate Science Fundamentals", desc: "Understanding local and global causes and impacts of climate change" },
  { icon: Globe, label: "Climate Advocacy", desc: "Advocacy strategies and communication techniques for climate action" },
  { icon: Users, label: "Leadership Development", desc: "Skills in goal setting, decision-making, and teamwork" },
  { icon: BarChart3, label: "Research Methodology", desc: "Literature review and data analysis fundamentals" },
  { icon: PenLine, label: "Academic Writing", desc: "Drafting and structuring research articles" },
  { icon: Presentation, label: "Presentation Skills", desc: "Public speaking and presenting your findings" },
]

const benefits = [
  "In-depth climate change education covering science, impacts, and solutions",
  "Skills in both advocacy and original research",
  "Leadership development and networking with like-minded peers",
  "Certificate of completion",
  "Opportunity to publish your research on the YCC website",
]

export default function YEPPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Advocacy & Research
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Youth Empowerment
            <span className="block text-[#34d399]">Program (YEP)</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            A 10-week remote initiative equipping young people with the knowledge and skills to become influential advocates and researchers in the fight against climate change.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/program1.jpg" alt="YEP" fill className="object-cover" priority />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "Duration", value: "10 Weeks" },
            { icon: Globe, label: "Format", value: "Fully Remote" },
            { icon: Users, label: "Eligibility", value: "Ages 16–35" },
            { icon: Award, label: "Outcome", value: "Certificate + Publication" },
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
                The Youth Empowerment Program (YEP) is a dynamic initiative focused on Climate Change Advocacy and Research.
                It combines educational workshops, hands-on activities, and mentorship so participants can explore climate
                science, its consequences, and potential solutions.
              </p>
              <p>
                Over 10 weeks, you'll develop original research, participate in peer review, and present your work publicly.
                The program is designed to foster responsibility, autonomy, and leadership — sparking grassroots change and
                cultivating a generation of environmental champions.
              </p>
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-8">What You&apos;ll Learn</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {curriculum.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-[#059669]/10 p-2 rounded-lg shrink-0">
                    <item.icon className="w-5 h-5 text-[#059669]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a2b] text-sm mb-1">{item.label}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a2b] mb-6">What You&apos;ll Gain</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
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
