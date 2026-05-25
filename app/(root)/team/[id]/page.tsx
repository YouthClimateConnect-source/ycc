import { notFound } from "next/navigation";
import teamData from "@/data/team.json";
import { MemberProfile } from "@/components/base/MemberProfile";

interface PageProps {
  // params is now a Promise in Next.js 15+
  params: Promise<{ id: string }>;
}

export default async function TeamMemberPage({ params }: PageProps) {
  // 1. You MUST await the params before using them
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. Now search your JSON
  const member = teamData.members.find((m) => m.slug === id);

  if (!member) {
    notFound();
  }

  return (
    <MemberProfile 
      name={member.name}
      role={member.role}
      country={member.country}
      imageSrc={member.imageSrc}
      bio={member.bio}
      linkedinUrl={member.linkedinUrl}
    />
  );
}

// 3. Update generateStaticParams to be async as well
export async function generateStaticParams() {
  return teamData.members.map((member) => ({
    id: member.slug,
  }));
}