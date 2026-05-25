import { client } from "@/sanity/client";
import BlogCard from "@/components/cards/SanityBlogCard";

const ALL_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "summary": pt::text(body[0...1])
}`;

export default async function BlogPage() {
  const posts = await client.fetch(ALL_POSTS_QUERY);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-10 tracking-wide">Latest Blogs</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <BlogCard
            key={post._id}
            title={post.title}
            summary={post.summary || "Click continue reading to view full article details."}
            mainImage={post.mainImage}
            publishedAt={post.publishedAt}
            slug={post.slug}
          />
        ))}
      </div>
    </main>
  );
}