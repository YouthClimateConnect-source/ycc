import MovementCard from '@/components/cards/MovementCard';
import Link from 'next/link';

export default function FriendsOfYCC() {

  const movements = [
    {
      title: "For Youth",
      content: "Join our programs, volunteer your skills, or subscribe for updates on our 2026 launch.",
      icon: "🌱",
      button: "Apply",
      link: "/programs",
      color: "#14532d"
    },
    {
      title: "For Volunteers",
      content: "Volunteer your skills to help us build the platform, translate content, or mentor youth.",
      icon: "🙌",
      button: "Become a Volunteer",
      link: "/about",
      color: "#059669"
    },
    {
      title: "For Partners",
      content: "Become a strategic ally or explore our CSR opportunities to co-create lasting impact.",
      icon: "🤝",
      button: "Contact Us",
      link: "/contact",
      color: "#059669"
    },
    {
      title: "For Donors",
      content: "Close the gap and fund the future. Join the \"Friends of YCC\" recurring giving community.",
      icon: "💧",
      button: "Donate Now",
      link: "/donation",
      color: "#14532d"
    },
    {
      title: "Stay Connected",
      content: "Join our mailing list to receive the latest impact stories, updates, and news from the frontlines.",
      icon: "📬",
      button: "Subscribe Now",
      link: "/academy",
      color: "#1f2937"
    },
  ];

  return (
    <main id="friends" className="bg-gray-50">

      {/* Gradient divider */}
      <div className="h-4 bg-gradient-to-r from-green-900 via-emerald-500 to-green-900"></div>

      {/* ============================================================ */}
      {/* BECOME A FRIEND OF YCC HERO                                  */}
      {/* ============================================================ */}
      <section className="bg-green-950 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-800/40 to-transparent z-0"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Become a Friend of YCC</h1>
          <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed font-light">
            We are building a global coalition of allies. Whether you contribute funding,
            mentorship, or your network, the Friends of YCC is our flagship collaboration
            hub dedicated to empowering the next generation of climate leaders.
          </p>
          
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOIN THE MOVEMENT                                            */}
      {/* ============================================================ */}
      <section id="join-movement" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Join the Movement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You have a role to play in empowering the next generation of climate leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movements.map((movement, index) => (
              <MovementCard
                key={index}
                title={movement.title}
                content={movement.content}
                icon={movement.icon}
                button={movement.button}
                link={movement.link}
                color={movement.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ACTIVE INITIATIVE: THE FOUNDERS' CIRCLE                      */}
      {/* ============================================================ */}
      <section className="py-12 bg-gray-50 relative z-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-amber-50 border-l-8 border-amber-500 rounded-r-2xl p-8 shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🚀</span>
              <h2 className="text-2xl font-bold text-amber-900">Active Initiative: The Founders&apos; Circle</h2>
            </div>
            <p className="text-amber-800 text-lg mb-4 leading-relaxed">
              For two and a half years, we have &quot;Lived the Gap&quot;—building a 501(c)(3) institution
              and our Academy prototype entirely through volunteer power and zero external funding.
              Now, we are raising <strong>$100,000 in operational seed capital</strong> to deploy our first official cohort.
            </p>
            <p className="text-amber-800 text-lg mb-6 leading-relaxed">
              We are calling on philanthropic partners, high-net-worth individuals, and our grassroots
              network to become &quot;Founding Members.&quot; Help us fuel the engine.
            </p>
            <Link
              href="/founders"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow transition duration-300"
            >
              Learn About The Campaign &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW WE COLLABORATE                                           */}
      {/* ============================================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">How We Collaborate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recurring Financial Support */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-900 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recurring Financial Support</h3>
              <p className="text-gray-600">
                Fuel the movement with consistent monthly or annual support. From $5 grassroots seeds to major strategic investments.
              </p>
            </div>

            {/* In-Kind & Expertise */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-Kind &amp; Expertise</h3>
              <p className="text-gray-600">
                Contribute your professional skills. We actively seek partners for youth mentorship, digital tools, software licenses, and translation services.
              </p>
            </div>

            {/* Amplification */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amplification</h3>
              <p className="text-gray-600">
                Lend us your voice. Host community awareness events, facilitate corporate partnership introductions, and amplify youth stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT IT MEANS TO BE A FRIEND                                 */}
      {/* ============================================================ */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">What It Means to Be a Friend</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Quarterly Town Halls */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="text-3xl shrink-0">📍</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Quarterly Town Halls</h4>
                <p className="text-gray-600">Direct access to YCC leadership and global youth changemakers.</p>
              </div>
            </div>

            {/* The Impact Newsletter */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="text-3xl shrink-0">📊</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">The Impact Newsletter</h4>
                <p className="text-gray-600">Radical transparency with data mapping your exact impact.</p>
              </div>
            </div>

            {/* Public Recognition */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="text-3xl shrink-0">🏛️</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Public Recognition</h4>
                <p className="text-gray-600">Permanent placement on our digital Founders&apos; Wall.</p>
              </div>
            </div>

            {/* Private Network */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="text-3xl shrink-0">🤝</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Private Network</h4>
                <p className="text-gray-600">Access to an exclusive community of global climate allies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
