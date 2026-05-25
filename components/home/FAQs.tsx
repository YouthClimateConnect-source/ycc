import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: " What is Youth-Climate Connect (YCC)?",
    answer: `YCC is a youth-led global initiative that aims to empower and mobilize youth to take meaningful 
    action in response to the pressing climate crisis. YCC provides a comprehensive online platform that offers
    climate education, gamified learning, community collaboration, inclusivity, and sustainability for young leaders,
    especially in the global south.`,
  },
  {
    question: " Why is YCC focused on the global south?",
    answer: `YCC recognizes that climate injustice in the global south is a critical and pressing issue that requires 
    immediate attention and action. The global south faces disproportionate impacts of climate change, such as rising 
    temperatures, droughts, floods, storms, and sea level rise, which threaten the lives and livelihoods of millions of 
    people, especially the youth. YCC aims to address the gap in climate awareness, access to information, and engagement 
    opportunities for youth in these regions, and to empower them to become climate champions.`,
  },
  {
    question: " How does YCC educate youth about climate change?",
    answer: `YCC offers engaging, multilingual climate education resources, including videos and courses, 
    to equip youth with the knowledge and skills needed to address climate challenges effectively. YCC also 
    incorporates gamification elements to make climate education interactive and enjoyable, fostering greater engagement 
    and understanding. YCC’s climate education covers topics such as the causes and effects of climate change, the solutions 
    and actions that can be taken, and the role of youth in driving transformative change.`,
  },
  {
    question: " How can I get involved?",
    answer: `There are three option to join us and get involved:
    1. You can join as a member of one of our different teams that's according to you skills.
    2. General member where you can receive our next webinars and training workshop and more firstly through Email.
    3. To be our Official ambassador in your country this will be announce later.`,
  },
  {
    question: " What is YCC's mission?",
    answer: `Our Mission: To provide accessible, innovative, and inclusive tools for youth to become climate champions. 
    We aim to educate, connect, and inspire young leaders through a dynamic online platform. By doing so, we empower them 
    to initiate real-world climate projects, contributing to a sustainable and resilient future.`,
  },
];

export function FAQSection() {
  return (
    <section className="w-full py-8 md:py-18 ">
      <div className="w-full px-6">

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-bold font-heading tracking-tighter sm:text-4xl">
            FAQs
          </h2>
          <p className="max-w-175 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           Find answers to frequently asked questions about YCC and how to get involved in climate action initiatives.
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className=" border-gray-500">
                <AccordionTrigger className="text-gray-800 md:text-gray-900 font-bold md:font-medium md:text-lg hover:cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 md:text-gray-800 md:leading-relaxed md:font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-4 my-10">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-dark text-center">
                Still have a question?
            </h1>
            <p className="text-sm md:text-base font-semibold md:font-normal text-gray-600 text-center">
              Contact us for further assistance.
            </p>

            <Link href="/contact" className="my-4 self-center md:text-lg font-bold rounded-full py-2.5 px-8 md:py-3 bg-[#059669] 
            text-white transition-all  duration-300 ease-in-out hover:bg-[#05a675] hover:shadow-[0_0_20px_5px_rgba(5,150,105,0.6)]
             hover:-translate-y-0.5">
              Contact Us
            </Link>
        </div>
      </div>
    </section>
  );
}