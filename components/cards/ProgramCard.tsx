import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export function ProgramCard({ title, description, imageSrc, href }: ProgramCardProps) {
  return (
    <div className="flex flex-col space-y-4 md:space-y-8 group">
      {/* Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl md:rounded-[36px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-4">
        <Link 
          href={href} 
          className="inline-flex items-center text-center gap-2 text-xl md:text-2xl font-bold text-[#1e3a2b] hover:text-brand-greenish
           transition-colors"
        >
          {title}
          <ChevronRight className="w-6 h-6 stroke-[3px]" />
        </Link>
        
        <p className="text-brand-greenish text-start text-sm leading-relaxed md:leading-normal md:text-base max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}