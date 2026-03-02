import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  featuredImage?: string
  commentsCount?: number
}

const fallbackPosts: BlogPost[] = [
  {
    slug: 'beginners-guide-gold-bullion',
    title: "A Beginner's Guide to Investing in Gold Bullion",
    date: 'Aug 17, 2024',
    commentsCount: 0,
    featuredImage: '/images/blog-post-1.png',
  },
  {
    slug: 'partners-financial-advisors',
    title: 'Partners with Leading Financial Advisors to Enhance Investor Success',
    date: 'Aug 17, 2024',
    commentsCount: 0,
    featuredImage: '/images/blog-post-2.png',
  },
  {
    slug: 'authenticity-of-investment',
    title: 'Diversify Gold Ensures the Authenticity of Your Investment',
    date: 'Aug 17, 2024',
    commentsCount: 0,
    featuredImage: '/images/blog-post-3.png',
  },
]

interface BlogSectionProps {
  posts?: BlogPost[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const displayPosts = posts && posts.length > 0 ? posts : fallbackPosts

  return (
    <section className="bg-[#FFFCF3] py-16 lg:py-24">
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="gold-badge">Blog &amp; News</span>
          <h2 className="text-2xl lg:text-3xl text-black font-normal">
            Looking To Learn More?
          </h2>
          <p className="text-brand-dark/60 text-base max-w-xl">
            Get exclusive updates on upcoming exhibitions, programs, and
            collaborations.
          </p>
        </div>

        {/* Post grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Post image */}
              <div
                className="w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden"
                style={
                  post.featuredImage
                    ? {
                        backgroundImage: `url(${post.featuredImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                {!post.featuredImage && (
                  <span className="text-4xl">📰</span>
                )}
              </div>

              {/* Post content */}
              <div
                className="flex flex-col gap-3 p-6 flex-1"
                style={{
                  background: 'linear-gradient(180deg, #09111A, #1E2632)',
                }}
              >
                <h3 className="text-[#D8B150] text-base font-normal leading-snug group-hover:underline line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-400 text-xs font-bold mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {post.commentsCount ?? 0} Comments
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <Link href="/news" className="btn-outline-gold inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
