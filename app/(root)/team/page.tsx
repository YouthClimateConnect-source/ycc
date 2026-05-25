import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { TeamCard } from '@/components/cards/TeamCard'

const executiveTeam = [
  {
    name: "Abdelslam Taha",
    role: "Chief Executive Officer",
    imageSrc: "/team/slam.jpg",
    slug: "abdelslam-taha"
  },
  {
    name: "Chretianne Gomez",
    role: "Director of Media and Communications",
    imageSrc: "/team/chretianne.png",
    slug: "chretianne-gomez"
  },
  {
    name: "Monib Taha Mohamednour",
    role: "Director of the Technology Office",
    imageSrc: "/team/monib.png",
    slug: "monib-taha"
  },
  {
    name: "Isha Shah",
    role: "Director of the Climate Education Office",
    imageSrc: "/team/isha.png",
    slug: "isha-shah"
  },
  {
    name: "Ibrahim Osman",
    role: "Director of Monitoring, Evaluation, Accountability, and Learning (MEAL)",
    imageSrc: "/team/ibrahim.jpg",
    slug: "ibrahim-osman"
  },
  {
    name: "Salim Suleiman Sani",
    role: "Director Of the Financial Office",
    imageSrc: "/team/salim.jpg",
    slug: "salim-suleiman"
  },
  {
    name: "Selena Lopez",
    role: "Resident Agent in Michigan USA",
    imageSrc: "/team/Selena.jpeg",
    slug: "selena-lopez"
  },
  {
    name: "Kiros Tekeste",
    role: "Partnerships and Development Coordinator",
    imageSrc: "/team/kiros.jpg",
    slug: "kiros-tekeste"
  },
  {
    name: "Joy Okolo",
    role: "Media and Communications Coordinator",
    imageSrc: "/team/joy.jpg",
    slug: "joy-okolo"
  },
  {
    name: "Raymond Kwame Amachor",
    role: "Project and Innovation Coordinator",
    imageSrc: "/team/raymond.jpg",
    slug: "raymond-amachor"
  },
]

export default function TeamPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            The People Behind the Mission
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Our Team
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            A global collective of young changemakers united by a shared commitment to climate action.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/ourteambg.png" alt="background" fill className="object-cover" priority />
        </div>
      </section>

      {/* Executive Team */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b] mb-4">
              YCC Executive Team
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Meet the leaders driving our programs, partnerships, and impact across 45+ countries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {executiveTeam.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Users className="w-10 h-10 text-[#059669] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b]">
            Want to be part of this?
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            We&apos;re growing and always looking for passionate people to join our mission.
          </p>
          <Link
            href="/friends"
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-[#059669] text-white font-bold rounded-full hover:bg-[#047857] hover:-translate-y-0.5 transition-all duration-300"
          >
            Become a Friend of YCC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
