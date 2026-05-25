import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  slug: string; // For the 'Read More' navigation
}

export function TeamCard({ name, role, imageSrc, slug }: TeamCardProps) {
  return (
    <div className="flex flex-col space-y-4 group">
      {/* Member Portrait */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl md:rounded-[32px] bg-gray-100">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Member Info */}
      <div className="flex flex-col space-y-1">
        <Link 
          href={`/team/${slug}`}>
          <h3 className="text-lg md:text-xl font-bold text-brand-greenish leading-tight">
            {name}
          </h3>
        </Link>
        <p className="text-sm font-bold text-brand-greenish/80 leading-tight max-w-50">
          {role}
        </p>
        
        <Link 
          href={`/team/${slug}`}
          className="flex items-center gap-1 text-xs md:text-sm font-extrabold text-gray-800 hover:text-brand-emerald 
          pt-2 transition-colors"
        >
          Read More <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}