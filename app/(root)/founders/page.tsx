import Link from 'next/link';

export default function FoundersCircle() {
  return (
    <div className="bg-white pb-20">

      {/* Orange top bar */}
      <div className="h-18 bg-[#fab71e]"></div>

      {/* Header Section */}
      <section className=" bg-amber-50 border-b border-amber-100 py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="text-[#fab71e] font-bold tracking-wider uppercase text-sm mb-2 block">Our Inaugural Seed Campaign</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">The Founders&apos; Circle</h1>
          <p className="text-xl text-gray-700 leading-relaxed font-light">Become a foundational investor in the next generation of climate leadership.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-4xl mt-16 space-y-16">

        {/* What is The Founders' Circle? */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-300 pb-2 inline-block">What is The Founders&apos; Circle?</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
            <p>For two and a half years, YouthClimate Connect (YCC) has built a global movement across 45+ countries relying entirely on volunteer passion. We built our 501(c)(3) foundation, designed the YCC Academy prototype, and trained hundreds of young leaders—all with zero external funding.</p>
            <p>The Founders&apos; Circle is our inaugural seed campaign. We are raising <strong>$100,000 in operational capital</strong> to officially launch Phase I of our Horizon 2030 roadmap.</p>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-500 font-medium italic mt-6">
              By joining the Founders&apos; Circle, you are not just funding a one-off program. You are capitalizing the digital infrastructure (The YCC Academy) that will empower 100,000 marginalized youth across the Global South to drive measurable ecosystem restoration in their communities.
            </div>
          </div>
        </section>

        {/* 1-to-1,000 Impact Multiplier */}
        <section className="bg-green-950 text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
          <h2 className="text-3xl font-extrabold mb-4 relative z-10">The 1-to-1,000 Impact Multiplier</h2>
          <p className="text-lg text-green-50 mb-6 relative z-10">We believe in radical transparency and measurable ROI (Return on Impact).</p>
          <p className="text-xl font-light leading-relaxed relative z-10 border-t border-green-800 pt-6">
            When you invest in the Founders&apos; Circle, you are fueling a proven multiplier effect: <strong className="text-white">For every $100 invested, YCC trains and funds a young leader</strong> who will execute physical climate and water conservation projects that secure the resilience of up to <strong className="text-emerald-400">1,000 people</strong> in their local community.
          </p>
        </section>

        {/* The Founding Tiers */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Founding Tiers</h2>
          <p className="text-center text-gray-600 mb-10 text-lg">We invite philanthropic partners, corporate allies, and our grassroots community to take their place in the Circle.</p>

          <div className="space-y-6">
            {/* Gold */}
            <div className="bg-white border-2 border-amber-400 p-6 rounded-2xl shadow-md flex items-start space-x-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl">&#129351;</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gold Founder <span className="text-gray-500 text-sm font-normal ml-2">($5,000+)</span></h3>
                <p className="text-gray-700">Fully capitalizes a localized cohort of youth leaders, funding both their technical education and their direct community micro-grants.</p>
              </div>
            </div>
            {/* Silver */}
            <div className="bg-white border border-gray-300 p-6 rounded-2xl shadow-sm flex items-start space-x-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl">&#129352;</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Silver Founder <span className="text-gray-500 text-sm font-normal ml-2">($1,000+)</span></h3>
                <p className="text-gray-700">Funds the digital deployment of our Nature-Based Solutions and Climate Adaptation curriculum within the YCC Academy Action Lab.</p>
              </div>
            </div>
            {/* Bronze */}
            <div className="bg-white border border-amber-600 p-6 rounded-2xl shadow-sm flex items-start space-x-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl">&#129353;</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bronze Founder <span className="text-gray-500 text-sm font-normal ml-2">($250+)</span></h3>
                <p className="text-gray-700">Provides the critical seed funding for a specific youth-led ecosystem restoration micro-project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Legacy of a Founder + CTA */}
        <section className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Legacy of a Founder</h2>
          <p className="text-center text-gray-600 mb-8">Your investment today builds the institution of tomorrow. All members receive:</p>

          <ul className="space-y-4 mb-12 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 text-xl">&#10003;</span>
              <div><strong className="text-gray-900">Permanent Recognition:</strong> Your name or organization permanently enshrined on our digital Founders&apos; Wall.</div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 text-xl">&#10003;</span>
              <div><strong className="text-gray-900">Direct Impact Tracking:</strong> Our comprehensive Annual Impact Report, showing exactly how your seed capital translated into hectares restored and communities empowered.</div>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 text-xl">&#10003;</span>
              <div><strong className="text-gray-900">Exclusive Access:</strong> Invitations to our Quarterly Town Halls to speak directly with YCC leadership and the global youth changemakers you support.</div>
            </li>
          </ul>

          <div className="text-center border-t border-gray-200 pt-10">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">The Foundation is Built. Help Us Fuel the Engine.</h3>
            <Link
              href="/donation"
              className="inline-block px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg transition duration-300 text-lg"
            >
              Join the Founders&apos; Circle Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}