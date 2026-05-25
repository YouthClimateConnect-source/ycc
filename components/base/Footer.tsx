import { BowArrow} from 'lucide-react';
import Link from 'next/dist/client/link';
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-white font-sans dark:bg-black">
      {/* get in touch */}
      <section className="relative w-full h-auto flex flex-col items-center justify-center overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-6 md:py-16 md:px-12
         text-[rgba(255,255,255,0.96)] justify-center items-center relative z-20 max-w-7xl">
        
          <div className=' space-y-4'>
            <h1 className='text-xl md:text-2xl font-heading font-bold '>
              Ready to make a difference?
            </h1>

            <p className='text-sm md:text-base'>
              Join hands with Youth-Climate Connect, Together, we can explore transformative ideas,
              implement sustainable practices, and inspire the youth to lead the charge in mitigating
              climate change. Whether you're interested in collaborative projects, educational initiatives,
              or advocacy campaigns, Youth-Climate Connect is your partner in shaping a greener, more
              sustainable world for generations to come.
            </p>
          </div>

          <div className='flex justify-center items-center text-white'>
            <Link
              href={'/contact'}
              className="text-base md:text-lg font-bold font-heading rounded-full px-12 py-10 bg-[#1e3a2b]
               text-white transition-all duration-500 ease-in-out hover:bg-[#0e4d34]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* mask */}
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-xs" />

        {/* 3. Background Image: Lower z-index (z-0) */}
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

      <section className='w-full py-16 px-6 md:px-30 flex flex-col gap-16 md:gap-12 bg-primary items-center justify-center'>

        <div className='flex flex-col md:flex-row gap-16'>

          <div className='flex flex-col gap-6'>
            <BowArrow size={56} className='text-white'/>
            <p className='text-gray-300 max-w-120 text-center md:text-start text-sm '>
              YouthClimate Connect is a global youth-led nonprofit empowering young people
              to lead climate action and shape a sustainable future.
            </p>
          </div>

          <div className='flex flex-col items-center md:items-start justify-center gap-3'>
            <h2 className='text-xl font-bold font-heading text-white'>Quick Links</h2>
            <ul className='flex flex-col gap-2 items-center md:items-start text-gray-300 text-sm '>
              <li className='hover:text-emerald-600'><Link href="/about">About</Link></li>
              <li className='hover:text-emerald-600'><Link href="/team">Our Team</Link></li>
              <li className='hover:text-emerald-600'><Link href="/programs">Programs</Link></li>
              <li className='hover:text-emerald-600'><Link href="/story">Our Story</Link></li>
              <li className='hover:text-emerald-600'><Link href="/friends">Friends of YCC</Link></li>
              <li className='hover:text-emerald-600'><Link href="/donation">Donate</Link></li>
              <li className='hover:text-emerald-600'><Link href="/contact">Contact Us</Link></li>
              <li className='hover:text-emerald-600'><Link href="https://linktr.ee/youthclimateconnect">Stay Connected</Link></li>
            </ul>
          </div>

          <div className='flex flex-col gap-6 '>
            <SocialFollow/>
          </div>

        </div>

        <h2 className='text-sm  text-gray-300 text-center md:text-start'>
          &copy; {new Date().getFullYear()} YouthClimate Connect. A registered 501(c)(3) nonprofit organization.
        </h2>

      </section>
    </div>
  )
}


function SocialFollow() {

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/youthclimateconnect', icon: '/facebook.svg' },
    { name: 'X', href: 'https://twitter.com/Youth_Climate_C', icon: '/x.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/yc-c/', icon: '/linkedin.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/youthclimate_connect', icon: '/instagram.svg' },
  ];
  return (
    <div className='flex flex-col gap-6 mx-20'>
      <h2 className='text-xl font-bold text-white font-heading text-center md:text-start'>Follow Us</h2>
      <ul className='flex justify-between space-x-6 items-center'>
        {socialLinks.map((social) => (
          <li key={social.name}>
            <Link href={social.href} aria-label={social.name}>
              <div 
                className="w-6 h-6 bg-gray-300 hover:bg-emerald-600 transition-colors duration-200 cursor-pointer"
                style={{
                  maskImage: `url(${social.icon})`,
                  WebkitMaskImage: `url(${social.icon})`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

