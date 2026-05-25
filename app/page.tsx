import { EcosystemSection } from '@/components/home/Ecosystem';
import { FAQSection } from '@/components/home/FAQs';
import Link from 'next/link';
import Image from 'next/image'
import { BowArrow, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/base/BlogHeader';
import Footer from '@/components/base/Footer';
import { client } from "@/sanity/client";
import BlogCard from "@/components/cards/BlogCard";

const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "summary": pt::text(body[0...1])
}`;

export default async function Home() {
  const latestBlogs = await client.fetch(RECENT_POSTS_QUERY);

  return (
    <div className="flex flex-col justify-center bg-white font-sans dark:bg-black">
      <Header/>
      {/* hero */}
      <section className="relative w-full flex flex-col items-center justify-center py-30">

        <div className="flex flex-col gap-8 my-16 text-[rgba(255,255,255,0.96)] justify-center
          items-center relative z-20">

          <h1 className="px-4 py-2 md:py-1 border rounded-full text-xs md:text-base  bg-[rgba(148,148,148,0.35)]">
            Registered US 501(c)(3) Tax-Exempt Organization
          </h1>

          <div className=' px-6 md:px-[24%] space-y-6'>
            <h1 className='text-4xl font-bold md:text-6xl font-heading'>
              Empowering 100,000 Global South Youth to Drive Measurable <span className='text-[#34d399]'>Climate Action.</span>
            </h1>

            <p className='md:font-medium md:text-lg text-center text-gray-100'>
              We are bridging the digital divide to move youth from climate
               advocacy to tangible ecosystem restoration. Rooted in justice. Powered by youth.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-8 items-center text-white'>
            <Link
              href={'/friends'}
              className="text-sm md:text-lg font-bold rounded-full py-2.5 px-8 md:py-3.5 bg-brand-emerald text-white transition-all
              border-2 md:border-3 border-brand-emerald
               duration-300 ease-in-out hover:bg-[#05a675] hover:shadow-[0_0_20px_5px_rgba(5,150,105,0.6)] hover:-translate-y-0.5">
              Join the Movement
            </Link>

            <a href='#ycc-academy' className=" md:text-lg font-bold text-emerald-300 rounded-full px-6 py-2.5 md:py-3.5 border-2 md:border-3
            border-emerald-300 hover:bg-[#059669] hover:border-[#059669] hover:text-white">
              Discover the YCC Academy
            </a>
          </div>
        </div>

        {/* mask - green filter with dark corners */}
        <div className="absolute inset-0 z-10" style={{backgroundColor: 'rgba(30, 58, 43, 0.77)'}} />
        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to top, rgba(0, 0, 0, 0.46) 0%, rgba(13, 175, 89, 0.2) 50%, transparent 100%)'}} />

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/homebg1.jpeg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* Road to Horizon 2030 */}
      <section className='w-full py-20 px-6 md:px-12 lg:px-30 flex flex-col gap-12 items-center justify-center bg-brand-bg'>
        <div className='max-w-7xl w-full'>
          <h2 className='text-2xl md:text-3xl font-bold text-center text-[#1e3a2b]'>
            The Road to Horizon 2030
          </h2>
          <p className='text-base md:text-lg font-small text-center mt-4 max-w-3xl mx-auto text-gray-700'>
            We track two distinct metrics: the community we reach, and the leaders we actively train, fund, and empower to change the world.
          </p>
        </div>

        <div className='flex flex-col gap-4 rounded-xl bg-white p-6 md:p-8 w-full max-w-7xl shadow-sm border border-[#e6e6e6]'>

          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2'>
            <h3 className='text-lg md:text-xl font-bold text-[#1e3a2b]'>
              100,000 Youth Leaders Empowered by 2030
            </h3>
            <div className='flex gap-2'>
              <span className='px-3 py-1 text-xs font-bold bg-[#059669] text-white rounded-full'>Goal</span>
              <span className='px-3 py-1 text-xs font-bold bg-[#449948] text-white rounded-full'>Phase 0</span>
            </div>
          </div>

          <div className='rounded-full bg-[#e6e6e6] h-4 w-full overflow-hidden'>
            <div className='rounded-full bg-gradient-to-r from-[#059669] to-[#34d399] h-full w-[0.5%]' />
          </div>

          <p className='text-gray-600 font-bold text-sm md:text-base'>
            Currently at <span className='text-[#059669]'>500+</span> Youth Trained & Funded
          </p>
        </div>

        {/* stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center w-full max-w-7xl'>

          <div className='flex gap-4 items-center border-l-4 border-[#059669] bg-white shadow-md
           rounded-xl p-6 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <div className='bg-[#059669]/10 p-3 rounded-full'>
              <Users className='text-[#059669]' size={24}/>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-2xl md:text-3xl font-extrabold text-[#1e3a2b]'>24,750+</h1>
              <p className='text-sm md:text-base font-medium text-gray-700'>Global South Youth Reached via Digital Platforms</p>
            </div>
          </div>

          <div className='flex gap-4 items-center border-l-4 border-[#059669] bg-white shadow-md
           rounded-xl p-6 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <div className='bg-[#059669]/10 p-3 rounded-full'>
              <Users className='text-[#059669]' size={24}/>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-2xl md:text-3xl font-extrabold text-[#1e3a2b]'>45+</h1>
              <p className='text-sm md:text-base font-medium text-gray-700'>Countries Represented in Our Network</p>
            </div>
          </div>

        </div>

        {/* Founders' Circle Active Campaign */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 md:p-8 bg-gradient-to-r from-[#fffbeb] to-[#fffdf5] border-l-8 border-[#f59e0b] shadow-lg
        rounded-r-xl w-full max-w-7xl hover:-translate-y-1 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-base font-bold text-[#92400e]'>
              🚀 Active Campaign
            </h3>
            <h3 className='text-xl md:text-2xl font-extrabold text-[#1e3a2b]'>
              The Founders' Circle
            </h3>
            <p className='text-sm md:text-base font-small text-gray-700 mt-2 max-w-2xl'>
              We are raising <span className='font-extrabold text-gray-800'>$100,000 in operational seed capital</span> to deploy our first official cohort.
              Become a foundational investor in the next generation of climate leadership.
            </p>
          </div>

          <Link href={'/founders'} className='text-sm md:text-base font-bold bg-[#f59e0b] text-white rounded-xl px-6 py-3 shadow-lg
             hover:bg-[#d97706] transition-all duration-300 ease-in-out whitespace-nowrap'>
            Join the Founders' Circle
          </Link>
        </div>

      </section>

      {/* Closing the Systemic Gaps */}
      <section className='w-full py-16 md:py-20 px-6 md:px-12 lg:px-30 bg-[#f8f9fa]'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl md:text-3xl font-extrabold text-[#1e3a2b]'>
              Closing the Systemic Gaps in <span className='text-[#059669]'>Climate Leadership</span>
            </h2>
            <p className='text-sm md:text-base font-medium my-4 max-w-3xl text-gray-700'>
             Millions of young people are on the frontlines of the climate crisis, yet
             <span className='text-gray-800 font-extrabold'> less than 1% of global climate philanthropy </span>
             reaches youth-led initiatives. We exist to close three critical bottlenecks:
            </p>

            <ul className='text-sm md:text-base font-medium space-y-6 text-gray-700'>
              <li className='flex gap-4 items-start'>
                <h1 className='text-lg font-extrabold text-gray-400'>✖</h1>
                <p className=''>
                  <strong className='text-[#1e3a2b]'>The Knowledge Gap:</strong> Lack of access to high-level technical climate education.
                </p>
              </li>

              <li className='flex gap-4 items-start'>
                <h1 className='text-lg font-extrabold text-gray-400'>✖</h1>
                <p className=''>
                  <strong className='text-[#1e3a2b]'>The Representation Gap:</strong> Exclusion from global policy tables.
                </p>
              </li>

              <li className='flex gap-4 items-start'>
                <h1 className='text-lg font-extrabold text-gray-400'>✖</h1>
                <p className=''>
                  <strong className='text-[#1e3a2b]'>The Resource Gap:</strong> Zero access to seed funding for local projects.
                </p>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-6 p-6 md:p-8 bg-white rounded-xl border-t-4 border-[#059669] shadow-lg'>
            <div>
              <h2 className='text-1xl md:text-2xl font-bold text-gray-700'>Our Solution:</h2>
              <h2 className='text-1xl md:text-2xl font-extrabold text-[#059669]'>The Impact Translation Layer</h2>
            </div>
            <p className='text-gray-800 text-sm md:text-base font-medium leading-relaxed'>
              Education without execution is not enough. Through our digital learning ecosystem,
              we train marginalized youth in Nature-Based Solutions and immediately provide them with the micro-grants
              needed to deploy physical ecosystem restoration and water conservation projects in their communities.
            </p>

            <div className='flex gap-3 items-center bg-[#059669]/10 w-full p-4 rounded-lg text-[#1e3a2b] font-bold text-sm md:text-base'>
              <BowArrow className='text-[#059669]' size={24}/> <span>Training + Funding = Immediate Local Impact</span>
            </div>
          </div>

        </div>
      </section>

      {/* YCC Academy */}
      <section id='ycc-academy' className='w-full py-16 md:py-10 px-6 md:px-12 lg:px-30 bg-[#ffffff]'>
        <div className='max-w-7xl mx-auto flex flex-col items-center gap-8'>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-[#1e3a2b] py-10'>
              The YCC Academy
            </h2>
            <p className='text-sm md:text-base font-medium text-gray-800 max-w-3xl mx-auto'>
              Our digital infrastructure for scalable climate education. Featuring the Learning Hub for capacity building, the Action Lab for global policy simulation, and the Community Space for cross-border collaboration.
            </p>
          </div>

          <div className='w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#059669]'>
            <iframe
              src="https://academy-prototype.netlify.app/"
              className='w-full h-full'
              title="YCC Academy Prototype"
              loading="lazy"
            />
          </div>

          <a
            href="https://academy-prototype.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm md:text-base font-bold bg-[#059669] text-white rounded-full px-6 py-2 shadow-lg
             hover:bg-[#047857] transition-all duration-300 ease-in-out'>
            Open Prototype in Full Screen
          </a>
        </div>
      </section>

      <EcosystemSection/>

      {/* Join the Movement */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f7f3] via-white to-white">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#059669]/[0.04] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#1e3a2b]/[0.03] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-300/[0.04] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center gap-8">

          

          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#1e3a2b]">
            Join the Movement
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            You have a role to play in empowering the next generation of climate leaders.
            Whether you give, mentor, amplify, or simply show up — your support transforms
            youth passion into measurable ecosystem restoration.
          </p>

          

          {/* CTA */}
          <Link
            href="/friends"
            className="group relative inline-flex items-center gap-3 mt-4 px-8 py-4 bg-[#059669] text-white font-bold rounded-full text-lg shadow-lg shadow-[#059669]/25 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Become a Friend of YCC</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Trust line */}
          <p className="text-xs md:text-sm text-gray-400 font-medium mt-2">
            Registered US 501(c)(3) &middot; 45+ countries &middot; 100% volunteer-powered since 2023
          </p>

        </div>
      </section>

      {/**Blogs */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">

        <div className="flex flex-col gap-10 md:gap-12 py-12 px-6 md:px-12 text-[rgba(255,255,255,0.96)] relative z-20 max-w-7xl">

          <div className='space-y-4 md:space-y-6 text-center'>
            <h1 className='text-3xl md:text-4xl font-heading font-bold text-center'>
              Discover Our Blog: Where Ideas Take Flight!
            </h1>

            <p className='font-medium text-xs md:text-sm text-gray-200'>
              Embark on a Green Journey: Navigating the Path to Climate Action through Insightful Blogs,
              Sustainable Solutions, and Collective Inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
           {latestBlogs.map((blog: any) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                summary={blog.summary || "Click continue reading to view full article details."}
                mainImage={blog.mainImage}
                publishedAt={blog.publishedAt}
                slug={blog.slug}
              />
            ))}
          </div>

          <Link href={'/blogs'} className="self-center text-center px-8 py-2 w-fit border-2 border-gray-200 text-sm
           font-medium text-white hover:bg-gray-300 hover:text-primary rounded-sm transition-all duration-300">
            View All
          </Link>
        </div>

        {/* mask */}
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-sm" />

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* FAQs */}
      <FAQSection />
      <Footer/>
    </div>
  );
}
