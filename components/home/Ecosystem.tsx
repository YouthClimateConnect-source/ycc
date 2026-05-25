import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ecosystemData = [
  {
    id: "educate",
    label: "Educate & Equip",
    title: "Educate & Equip (YCC Academy)",
    description:
      "We provide foundational knowledge in climate science, project management, and grant writing to build core capacity. This is the starting line for new leaders to gain the skills they need to turn passion into a plan.",
  },
  {
    id: "innovate",
    label: "Innovate & Research",
    title: "Innovate & Research",
    description:
      "We empower our trained youth to develop and lead ground-up, culturally relevant climate solutions and research in their own communities. This ensures that solutions are effective and just, not top-down.",
  },
  {
    id: "advocate",
    label: "Advocate & Influence",
    title: "Advocate & Influence (Policy Voices)",
    description:
      "We train promising leaders to shape policy and public narratives, becoming official YCC Ambassadors on the global stage. We create a pathway for their expertise to be heard in the rooms where decisions are made.",
  },
  {
    id: "connect",
    label: "Connect & Collaborate",
    title: "Connect & Collaborate (YCC Nexus)",
    description:
      "We build a global support network of peers, mentors, and partners through our annual Global Summit and self-sustaining Regional Hubs. This ensures no leader has to work alone and fosters lifelong collaboration.",
  },
];

export function EcosystemSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f0f7f3]">
      <div className="md:container px-6 md:mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4">
          Building an Ecosystem for Youth Power
        </h2>
        <p className="text-base font-medium max-w-2xl mx-auto text-gray-700 mb-12">
          We don't just run programs; we build pathways. Our integrated model creates a clear journey from learning to leadership.
        </p>

        {/* Tabs Section */}
        <Tabs defaultValue="educate" className=" w-full md:max-w-5xl mx-auto">
          <TabsList className="bg-transparent grid grid-cols-2 self-center h-auto p-0 md:flex md:flex-wrap justify-center 
            gap-3 md:gap-8 mb-8 border-none">
            {ecosystemData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:text-brand-emerald w-fit data-[state=active]:border-[#036e4c6c] 
                data-[state=active]:border bg-transparent p-2 md:p-2.5 text-xs font-bold md:text-sm md:font-semibold text-gray-500 
                transition-all hover:text-gray-800 hover:cursor-pointer">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {ecosystemData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8 lg:mt-0 outline-none">
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md border border-gray-100 text-left animate-in
               fade-in zoom-in-95 duration-300">
                <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-emerald mb-4 md:mb-6">
                  {tab.title}
                </h3>
                <p className="text-gray-600 md:text-lg leading-relaxed max-w-4xl">
                  {tab.description}
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}