import { BowArrow, Users } from 'lucide-react';
import Link from 'next/dist/client/link';

function CancledSections() {
  return (
    <div>
        <section className='w-full py-20 px-30 flex flex-col gap-12 items-center justify-center'>
        <div>
          <h2 className='text-4xl font-bold text-center'>
            The Road to Horizon 2030
          </h2>
          <p className='text-xl font-medium text-center mt-4 max-w-3xl text-gray-800'>
            We track two distinct metrics: the community we reach, and the leaders we actively train, fund, and empower to change the world.
          </p>
        </div>

        <div className='flex flex-col gap-4 rounded-xl bg-[#e6e6e6] p-8 w-full shadow-sm'>

          <div className='flex justify-between items-center text-xl font-bold'>
            <h3 className=''>
              100,000 Youth Leaders Empowered by 2030
            </h3>
            <p className=' text-green-900'>
              Goal
            </p>
          </div>
          
          <div className='rounded-full bg-gray-700 h-8 w-full'>

          </div>

          <p className='text-gray-500 font-bold text-lg'>
            Currently at <span className='text-emerald-700'>500+</span> Youth Trained & Funded
          </p>

        </div>

        {/* stats */}
        <div className='grid grid-cols-2 gap-8 justify-center w-full'>

          <div className='flex gap-4 items-center border-0.5 border-emerald-700 border-l-6 shadow-md shadow-gray-400
           rounded-xl p-6 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <Users className='bg-emerald-100 h-full w-fit text-green-700 rounded-full p-3' size={20}/>
            <div className='flex flex-col gap-1'>
              <h1 className='text-3xl font-extrabold'>24,750+</h1>
              <p className='text-base font-bold text-gray-700'>Global South Youth Reached via Digital Platforms</p>
            </div>
          </div>

          <div className='flex gap-4 items-center border-0.5 border-emerald-700 border-l-6 shadow-md shadow-gray-400
           rounded-xl p-6 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out'>
            <Users className='bg-emerald-100 h-full w-fit text-green-700 rounded-full p-3' size={20}/>
            <div className='flex flex-col gap-1'>
              <h1 className='text-3xl font-extrabold'>+45</h1>
              <p className='text-base font-bold text-gray-700'>Countries Represented in Our Network</p>
            </div>
          </div>
          
        </div>

        {/**info */}
        <div className='flex justify-between items-center w-full gap-6 p-8 bg-[#fffbeb] border-l-8 border-[#f59e0b] shadow-lg 
        rounded-r-xl over:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out my-6'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-2xl font-bold text-[#78350f]'>
              🚀 Active Campaign
            </h3>
            <h3 className='text-3xl font-extrabold '>
              The Founders' Circle
            </h3>
            <p className='text-xl font-medium text-gray-700 mt-2 max-w-3xl'>
              We are raising <span className='font-extrabold text-gray-800'>$100,000 in operational seed capital</span> to deploy our first official cohort. 
              Become a foundational investor in the next generation of climate leadership.
            </p>
          </div>

          <div className='h-full flex justify-center items-center'>
            <Link href={'/'} className='text-lg font-bold bg-[#f59e0b] text-white rounded-xl px-6 py-4 shadow-lg
             hover:bg-yellow-600 transition-all duration-300 ease-in-out'>
              Join the Founders' Circle
            </Link>
          </div>
        </div>

      </section>

      {/* solutions */}
      <section className='grid grid-cols-2 gap-20 bg-[#f8f8f8] w-full py-20 px-30'>

        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-extrabold'>
            Closing the Systemic Gaps in <span className='text-[#166534]'>Climate Leadership</span>
          </h2>
          <p className='text-xl font-medium my-5 max-w-3xl text-gray-800'>
           Millions of young people are on the frontlines of the climate crisis, yet
           <span className='text-gray-800 font-extrabold'> less than 1% of global climate philanthropy </span>
           reaches youth-led initiatives. We exist to close three critical bottlenecks:
          </p>
          
          <ul className='text-xl font-medium space-y-4 text-gray-700'>
            <li className='flex gap-3'>
              <h1 className='text-3xl font-extrabold text-gray-500'>✖</h1>
              <p className=''>
                <strong className='text-primary'>The Knowledge Gap:</strong> Lack of access to high-level technical climate education.
              </p>
            </li>

             <li className='flex gap-3'>
              <h1 className='text-3xl font-extrabold text-gray-500'>✖</h1>
              <p className=''>
                <strong className='text-primary'>The Representation Gap:</strong> Exclusion from global policy tables.
              </p>
            </li>

             <li className='flex gap-3'>
              <h1 className='text-3xl font-extrabold text-gray-500'>✖</h1>
              <p className=''>
                <strong className='text-primary'>The Resource Gap:</strong> Zero access to seed funding for local projects.
              </p>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-6 p-8 bg-white rounded-xl border-t-8 border-[#166534] shadow-lg'>
          <div>
            <h2 className='text-2xl font-bold'>Our Solution:</h2>
            <h2 className='text-3xl font-extrabold text-emerald-600'>The Impact Translation Layer</h2>
          </div>
          <p className='text-gray-800 text-xl font-medium tracking-wide leading-8'>
            Education without execution is not enough. Through our digital learning ecosystem,
            we train marginalized youth in Nature-Based Solutions and immediately provide them with the micro-grants
            needed to deploy physical ecosystem restoration and water conservation projects in their communities.
          </p>

          <div className='flex gap-4 items-center bg-emerald-100/50 w-full p-4 rounded-lg text-green-900 font-bold text-lg'>
            <BowArrow/> <span>Training + Funding = Immediate Local Impact</span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default CancledSections