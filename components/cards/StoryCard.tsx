import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // shadcn utility for merging classes

interface StoryCardProps {
  title: string | React.ReactNode;
  paragraphs: string[];
  className?: string; // Allows you to override background colors etc.
}

export function StoryCard({ title, paragraphs, className }: StoryCardProps) {
  return (
    <div className={cn("w-full py-2", className)}>
      <Card className=" border-none shadow-sm rounded-xl md:rounded-3xl overflow-hidden bg-gray-100">
        <CardContent className="p-6 md:px-16 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
            
            {/* Left Column: Title */}
            <div className="lg:col-span-4">
              <h2 className="text-xl font-heading md:text-2xl font-bold text-brand-greenish">
                {title}
              </h2>
            </div>

            {/* Right Column: Dynamic Content */}
            <div className="lg:col-span-8 space-y-6">
              {paragraphs.map((text, index) => (
                <p key={index} className="text-brand-greenish md:text-base ">
                  {text}
                </p>
              ))}
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}