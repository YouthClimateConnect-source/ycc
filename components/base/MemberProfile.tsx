"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft,  Globe, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MemberProfileProps {
  name: string
  role: string
  country: string
  imageSrc: string
  bio: string[]
  linkedinUrl?: string
}

export function MemberProfile({ name, role, country, imageSrc, bio, linkedinUrl }: MemberProfileProps) {
  return (
    <main className="min-h-screen bg-[#f8faf9]">
      {/* 1. Dynamic Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-center justify-center">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-[50%_33%] blur-xs scale-105 "
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 to-[#f8faf9]" />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-4xl font-black font-heading uppercase text-brand-greenish">
            {name}
          </h1>
          <p className="md:text-lg font-bold text-brand-dark mt-2 italic">
            {role}
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="container mx-auto max-w-6xl px-6 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar: Portrait and Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl md:rounded-[40px] shadow-2xl border-8 border-white">
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[32px] shadow-sm space-y-4">

              <div className="flex items-center gap-3 text-brand-greenish">
                <Briefcase className="w-5 h-5 text-brand-emerald" />
                <div>
                  <p className="text-xs font-bold uppercase opacity-80 md:text-gray-800">Position</p>
                  <p className="font-bold text-sm md:text-base text-brand-greenish">{role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-[#1e3a2b]">
                <MapPin className="w-5 h-5 text-brand-emerald" />
                <div>
                  <p className="text-xs font-bold uppercase opacity-80 md:text-gray-800">Country</p>
                  <p className="font-bold text-sm md:text-base text-brand-greenish">{country}</p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {linkedinUrl && (
                <Link 
                  href={linkedinUrl} 
                  target="_blank" 
                  className="flex items-center gap-2 text-[#0077b5] font-semibold md:font-bold hover:underline pt-2"
                >
                  <Globe className="w-5 h-5 fill-current" />
                  Connect on LinkedIn
                </Link>
              )}
            </div>

            <Button asChild variant="outline" className="w-full rounded-full py-6 border-[#1e3a2b] text-[#1e3a2b] font-bold">
              <Link href="/team">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to our team
              </Link>
            </Button>
          </div>

          {/* Main Bio: Storytelling Layout */}
          <div className="lg:col-span-8 bg-white p-6 md:p-12 rounded-2xl md:rounded-[40px] shadow-sm">
            <h3 className="text-xl font-bold text-[#1e3a2b] mb-8 flex items-center gap-2">
              About {name.split(' ')[0]}
              <div className="h-1 w-8 md:w-12 bg-brand-emerald rounded-full" />
            </h3>
            
            <div className="space-y-6 text-brand-greenish ">
              {bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}