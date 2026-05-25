// src/app/blog/[slug]/page.tsx
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { notFound } from 'next/navigation'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  mainImage,
  publishedAt,
  body
}`

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-104 md:h-128 my-10 shadow-sm rounded-2xl overflow-hidden">
          <Image 
            src={urlFor(value).width(1000).url()} 
            alt={value.alt || 'Blog inline illustration'} 
            fill 
            className="object-cover" 
            sizes="(max-w-768px) 100vw, 1000px"
          />
        </div>
      )
    }
  }
}

interface PostProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })

  if (!post) notFound()

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : null;

  return (
    <main className="max-w-4xl mx-auto px-5 sm:px-6 py-12 text-slate-900">
      
      {/* Article Meta Header */}
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {post.title}
        </h1>
        
        {formattedDate && (
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <Calendar className="w-4 h-4 text-slate-500" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
        )}
        
        <hr className="border-slate-300/80 mt-2" />
      </div>

      {/* Hero Cover Image */}
      {post.mainImage && (
        <div className="relative w-full h-104 md:h-128 my-8 rounded-2xl overflow-hidden shadow-sm bg-slate-50">
          <Image 
            src={urlFor(post.mainImage).width(1200).url()} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
            sizes="(max-w-1200px) 100vw, 1200px"
          />
        </div>
      )}

      {/* Styled Article Prose Content Body */}
      <div className="prose prose-slate lg:prose-xl max-w-none 
        prose-headings:text-slate-900 
        prose-headings:font-bold 
        prose-p:text-slate-700 
        prose-p:leading-relaxed 
        prose-a:text-brand-emerald 
        prose-a:no-underline 
        hover:prose-a:underline 
        prose-strong:text-slate-900 
        prose-code:text-emerald-700 
        prose-blockquote:border-l-4 
        prose-blockquote:border-brand-emerald
        prose-blockquote:italic">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </main>
  )
}