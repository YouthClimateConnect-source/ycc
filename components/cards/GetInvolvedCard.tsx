import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface InvolvementCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export function InvolvementCard({ title, description, imageSrc, href }: InvolvementCardProps) {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6">
      {/* Feature Image */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl md:rounded-[40px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <Link 
          href={href} 
          className="group inline-flex w-full items-center gap-2 text-xl md:text-2xl font-bold text-[#1e3a2b] hover:text-brand-emerald
           transition-colors"
        >
          {title}
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </Link>
        
        <p className="text-brand-greenish text-start text-sm leading-relaxed md:leading-normal md:text-base max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}