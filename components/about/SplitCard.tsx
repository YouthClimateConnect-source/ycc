import Image from "next/image";

interface SplitSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function SplitCard({ title, description, imageSrc, imageAlt, reverse }: SplitSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center py-6 group">
      {/* Text Content - Always first on mobile, order depends on 'reverse' on desktop */}
      <div className={`space-y-4 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-greenish uppercase tracking-tight">
          {title}
        </h2>
        <p className="text-brand-greenish  ">
          {description}
        </p>
      </div>

      {/* Image Content */}
      <div className={`relative aspect-4/3 md:aspect-16/10 overflow-hidden rounded-3xl lg:rounded-[40px] 
        shadow-sm ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}