import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { urlFor } from "@/sanity/image";
import {
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  summary: string;
  mainImage: any;
  publishedAt: string;
  slug: string;
}

export default function BlogCard({ title, summary, mainImage, publishedAt, slug }: CardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    dateStyle: "medium",
  });

  return (
    <div className="overflow-hidden group p-1 bg-transparent flex flex-col h-full gap-1 md:gap-2 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800">
        {mainImage ? (
          <Image
            src={urlFor(mainImage).width(600).height(338).url()}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 400px"
          />
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-xs text-slate-400">
            No Image
          </div>
        )}
      </div>

      <CardHeader className="space-y-1 p-1">
        {/* Published Date */}
        <div className="flex items-center gap-1.5 text-xs text-slate-100 font-semibold md:font-medium 
          tracking-tighter md:tracking-wide">
          {formattedDate}
        </div>
        {/* Title */}
        <h3 className="text-lg md:text-xl font-heading font-bold leading-tight line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="p-1 grow">
        {/* Summary */}
        <p className="text-slate-100 text-sm md:leading-relaxed line-clamp-3">
          {summary}
        </p>
      </CardContent>

      <div className="p-1">
        <Button asChild variant="outline" className="w-full bg-brand-emerald hover:bg-[#047857] border-transparent
         text-white transition-colors">
          <Link href={`/blog/${slug}`}>
            Continue Reading
          </Link>
        </Button>
      </div>
    </div>
  );
}