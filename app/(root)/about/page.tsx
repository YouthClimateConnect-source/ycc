import Image from 'next/image'
import Link from 'next/link'
import { Star, Lightbulb, Users, Handshake, Globe, ArrowRight, Monitor, MapPin } from 'lucide-react'

const stats = [
  { value: "40", label: "Team members" },
  { value: "18", label: "Countries" },
  { value: "20", label: "Cities" },
  { value: "10", label: "Languages" },
]

const values = [
  {
    title: "Equity",
    description: "We ensure equal access to resources and opportunities for all youth, focusing on marginalized communities to address systemic inequalities in climate action.",
    icon: Star,
  },
  {
    title: "Innovation",
    description: "We embrace innovative approaches to climate education — gamification, art, and storytelling to make learning engaging and accessible.",
    icon: Lightbulb,
  },
  {
    title: "Empowerment",
    description: "We empower youth to become leaders through education, mentorship, and networking that equip them with the skills to create positive change.",
    icon: Users,
  },
  {
    title: "Collaboration",
    description: "We value partnership, working with activists, organizations, and experts to amplify our collective impact and drive meaningful global change.",
    icon: Handshake,
  },
  {
    title: "Sustainability",
    description: "We are dedicated to promoting and practicing environmental sustainability in all our initiatives, ensuring a healthier planet for future generations.",
    icon: Globe,
  },
]

export default function AboutPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            We exist to make
            <span className="block text-[#34d399]">youth the forefront</span>
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            Bridging the digital divide to move youth from climate advocacy to tangible ecosystem restoration. Rooted in justice. Powered by youth.
          </p>
        </div>
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />
        <div className="absolute inset-0 z-0">
          <Image src="/bg.jpg" alt="background" fill className="object-cover" priority />
        </div>
      </section>

      {/* Global Team + Stats */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b]">
              Our Global Team
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our team is composed of young changemakers committed to taking action for the climate.
              We come from various regions, cultures, and disciplines, but share the same goal: to
              inspire and empower youth to join this global movement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 pt-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-2xl md:text-4xl font-extrabold text-[#059669]">{stat.value}</span>
                  <span className="text-xs md:text-sm font-medium text-gray-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* World Map */}
          <div className="lg:col-span-7">
            <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
              <Image src="/world.png" alt="Team locations worldwide" fill className="object-contain scale-110" />
            </div>
          </div>

        </div>
      </section>

      

      {/* Values */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b] mb-4">Our Values</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Our core values reflect our commitment to empowering youth to lead the charge in combating the climate crisis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  value.title === "Sustainability" ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 bg-[#059669]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-[#059669]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1e3a2b] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Vision & Mission */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Vision */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden shadow-md">
              <Image src="/21.png" alt="Vision" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#1e3a2b] mb-3">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A world where youth, especially in vulnerable regions, are at the forefront of climate action,
                creating a sustainable future. An empowered community of informed and diverse young leaders
                collaborating globally to drive transformative climate solutions.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-6 lg:flex-col-reverse">
            <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden shadow-md">
              <Image src="/23.png" alt="Mission" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#1e3a2b] mb-3">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To provide accessible, innovative, and inclusive tools for youth to become climate champions.
                We educate, connect, and inspire young leaders through a dynamic online platform and training
                programs — empowering them to initiate real-world climate projects.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* Remote-First */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image src="/ourteambg.png" alt="Remote team" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#1e3a2b]/75 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <Monitor className="w-12 h-12 text-[#34d399]" />
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {["N. America", "Africa", "Asia", "Europe"].map((region) => (
                    <span key={region} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm">
                      <MapPin className="w-3 h-3 text-[#34d399]" />
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b]">
              Remote-First &amp; Highly Connected
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              At YouthClimate Connect (YCC), our &ldquo;remote-first&rdquo; approach emphasizes flexibility
              and choice while ensuring strong connections among our team members. We believe that meaningful
              work and collaboration can thrive in a virtual environment, allowing us to reach a global
              community effectively.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our team is primarily remote, which enables us to operate across multiple time zones and bring
              together diverse perspectives from all corners of the world. Through regular virtual meetings,
              interactive workshops, and online brainstorming sessions, we create a dynamic and connected work
              environment that fosters innovation and teamwork.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b]">Want to join us?</h2>
          <p className="text-sm md:text-base text-gray-600">
            We&apos;re always looking for passionate people. Explore opportunities to volunteer, partner, or support our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://app.dover.com/jobs/youthclimateconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold rounded-full hover:bg-[#047857] hover:-translate-y-0.5 transition-all duration-300"
            >
              See Open Positions
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/friends"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#059669] text-[#059669] font-bold rounded-full hover:bg-[#059669] hover:text-white transition-colors"
            >
              Become a Friend of YCC
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
