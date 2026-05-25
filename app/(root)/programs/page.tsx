import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: "Youth Empowerment Program (YEP)",
    description: "A 10-week remote initiative focused on Climate Change Advocacy and Research. Gain hands-on skills in climate science, research methodology, and academic writing — then publish your work.",
    imageSrc: "/program1.jpg",
    href: "/programs/yep",
    stats: "10 weeks · Remote · Ages 16–35",
  },
  {
    title: "YCC Climate Warrior Stories",
    description: "A global platform amplifying youth climate activist voices. Share your story and be featured in a published digital flip-book that inspires action and solidarity worldwide.",
    imageSrc: "/program2.jpeg",
    href: "/programs/cws",
    stats: "Global · Rolling submissions · Digital publication",
  },
  {
    title: "Youth Climate Change Startup Program (YCCSP)",
    description: "Two interactive online sessions exploring climate justice in the Global South, YCC's vision, and practical skills for environmental action. Certificate awarded upon completion.",
    imageSrc: "/program3.png",
    href: "/programs/yccsp",
    stats: "2 sessions · Online · Free · Certificate",
  },
  {
    title: "The Annual Youth-Climate Connect Summit",
    description: "Our flagship global event. Young leaders showcase innovative climate projects, connect with international organizations and experts, and shape the future of the movement.",
    imageSrc: "/program4.jpg",
    href: "/programs/summit",
    stats: "Annual · Global · In-person & virtual",
  },
];

export default function ProgramsPage() {
  return (
    <div className="relative w-full flex flex-col">

      {/* Hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-32 md:py-40 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs md:text-sm font-semibold tracking-wide uppercase">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1]">
            Our Programs
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-xl font-light">
            YouthClimate Connect offers a suite of programs designed to empower youth worldwide to become informed, skilled, and proactive in addressing the climate crisis.
          </p>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'rgba(30, 58, 43, 0.82)' }} />
        <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(13,175,89,0.15) 50%, transparent 100%)' }} />

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image src="/bg.jpg" alt="background" fill className="object-cover" priority />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-16/9 w-full overflow-hidden">
                <Image
                  src={program.imageSrc}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-xs font-semibold text-[#059669] uppercase tracking-wide mb-2">{program.stats}</p>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1e3a2b] group-hover:text-[#059669] transition-colors">
                    {program.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
                  {program.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#059669] group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
