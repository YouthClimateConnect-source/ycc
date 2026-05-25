import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

const chapters = [
  {
    year: "2023",
    title: "The Origin of YouthClimate Connect",
    highlight: "One externship. One idea. A world of impact.",
    paragraphs: [
      "Amid a rapidly changing world, where climate and environmental challenges loom large and the voices of youth cry out for change, the journey of YouthClimate Connect began — fueled by passion, determination, and a shared commitment to make a difference.",
      "The story traces back to co-founder Abdelslam Taha, whose childhood in western Sudan, growing up in harmony with nature, inspired a lifelong mission to protect the environment and empower young minds. In 2023, he participated in the Freshwater and Community Conservation Externship with Paragon One (now Extern), supported by the National Geographic Society and The Nature Conservancy.",
    ],
    image: "https://images.unsplash.com/photo-1766409874040-d4b233e92089?w=800&q=80",
    accent: "from-emerald-500 to-green-600",
  },
  {
    year: "Sep 2023",
    title: "Roots of Passion & Purpose",
    highlight: "The FWAC Program sparks something bigger.",
    paragraphs: [
      "Completing the externship in April, Abdelslam received seed funding from NGS and TNC for his project: the Freshwater Awareness and Community Conservation program for Sudanese students in Egypt (FWAC Program). The program, successfully implemented in September 2023, brought together young minds to tackle pressing climate and environmental issues.",
      "It was during the FWAC Program that Abdelslam crossed paths with Ibrahim, a passionate participant whose dedication mirrored his own. Their post-program discussions sparked a realization — the climate crisis knows no borders, and its impacts are felt far and wide. This experience ignited the inception of YCC.",
    ],
    image: "https://images.unsplash.com/photo-1655163394362-97de2d3c5c85?w=800&q=80",
    accent: "from-green-500 to-emerald-500",
  },
  {
    year: "2024",
    title: "Uniting for a Common Cause",
    highlight: "Six founders. Four countries. One mission.",
    paragraphs: [
      "Joined by co-founders Ibrahim, Zeena, Isha, Monib, and Chretianne — hailing from Sudan, Canada, India, and the USA — YCC was born out of a shared vision to mobilize youth, raise awareness, and drive meaningful change. With a focus on the Global South, where climate impacts are most acutely felt, the team leveraged technology and social media to amplify their message and engage a global audience.",
      "From the outset, YCC set its sights on the Global South. The team believed firmly in the power of technology to connect and educate, using every digital tool available to reach young people where they were — and to make sure their voices were heard.",
    ],
    image: "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?w=800&q=80",
    founders: [
      { name: "Abdelslam", role: "CEO", country: "Sudan" },
      { name: "Ibrahim", role: "COO", country: "Sudan" },
      { name: "Zeena", role: "CPO", country: "Canada" },
      { name: "Isha", role: "CMO", country: "India" },
      { name: "Monib", role: "CTO", country: "USA" },
      { name: "Chretianne", role: "CMO", country: "USA" },
    ],
    accent: "from-amber-500 to-orange-500",
  },
  {
    year: "2025",
    title: "Amplifying the Voice of Youth",
    highlight: "Beyond a platform — a global family.",
    paragraphs: [
      "YCC became more than just an online platform — it grew into a community, a family of like-minded individuals united by a common purpose. Together, the team worked tirelessly to develop educational programs, empower young leaders, and host their annual Global Summit.",
      "From virtual events to educational campaigns, the organization made waves in the fight against climate change. But the journey was far from over — there were still mountains to climb, challenges to overcome, and victories to celebrate.",
    ],
    stats: [
      { value: "45+", label: "Countries" },
      { value: "24,750+", label: "Youth Reached" },
      { value: "500+", label: "Trained & Funded" },
    ],
    image: "https://images.unsplash.com/photo-1761370981247-1dfd749ec96b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    year: "2026",
    title: "A Continuing Journey of Impact",
    highlight: "The next chapter is being written right now.",
    paragraphs: [
      "As YCC continues to grow and evolve, its founders remain steadfast in their commitment to creating a more sustainable future. With each new initiative, each new partnership, they move one step closer to their goal: a world where young people are empowered to lead the charge in combating climate change.",
      "This is a story of hope, resilience, and the unwavering belief that together, we can create a better world. And the best part? You're in it.",
    ],
    image: "https://images.unsplash.com/photo-1762438435036-ecf70908ea06?w=800&q=80",
    accent: "from-violet-500 to-purple-500",
  },
]

export default function StoryPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-44 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            From Idea to Global Movement
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Our Story
          </h1>
          <p className="text-base md:text-xl text-green-100 max-w-2xl font-light leading-relaxed">
            How a childhood in western Sudan, a conservation externship, and six passionate founders
            from four countries built a global youth climate movement.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.85)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(13,175,89,0.1) 60%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/ourteambg.png" alt="background" fill className="object-cover" priority />
        </div>
      </section>

      {/* Timeline Chapters */}
      <section className="w-full bg-white">
        {chapters.map((chapter, index) => (
          <div key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">

              {/* Year badge */}
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-sm font-extrabold text-white px-4 py-1.5 rounded-full bg-gradient-to-r ${chapter.accent} shadow-md`}>
                  {chapter.year}
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Text */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-[#1e3a2b] mb-3">
                    {chapter.title}
                  </h2>
                  <p className="text-lg md:text-xl font-semibold text-[#059669] mb-6 italic">
                    &ldquo;{chapter.highlight}&rdquo;
                  </p>
                  <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                    {chapter.paragraphs.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>

                  {/* Founders Grid */}
                  {chapter.founders && (
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {chapter.founders.map((founder, fi) => (
                        <div key={fi} className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${chapter.accent} flex items-center justify-center text-white text-xs font-extrabold`}>
                            {founder.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#1e3a2b]">{founder.name}</p>
                            <p className="text-xs text-gray-400">{founder.country}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  {chapter.stats && (
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {chapter.stats.map((stat, si) => (
                        <div key={si} className="text-center bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                          <p className="text-2xl md:text-3xl font-extrabold text-[#059669]">{stat.value}</p>
                          <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image / Visual */}
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {chapter.image && (
                    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={chapter.image}
                        alt={chapter.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <BookOpen className="w-12 h-12 text-[#059669] mx-auto" />
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-[#1e3a2b]">
            The Story Isn&apos;t Finished
          </h2>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            Join us as we write the next chapter — a story of hope, resilience, and the unwavering
            belief that together, we can create a better world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/friends"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#059669] text-white font-bold rounded-full shadow-lg shadow-[#059669]/25 hover:bg-[#047857] hover:-translate-y-0.5 transition-all duration-300"
            >
              Become a Friend of YCC
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#059669] text-[#059669] font-bold rounded-full hover:bg-[#059669] hover:text-white transition-colors"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
