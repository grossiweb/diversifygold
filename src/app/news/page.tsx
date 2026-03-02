import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Blog – Gold & Silver Investment Insights',
  description:
    'Stay up to date with the latest gold and silver market news, investment tips, and insights from Diversify Gold.',
}

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  featuredImage?: string
  category?: string
  commentsCount?: number
}

async function getPosts(): Promise<Post[]> {
  try {
    const wpUrl = process.env.WORDPRESS_GRAPHQL_URL
    if (!wpUrl || wpUrl.includes('your-wordpress-site')) return fallbackPosts

    const query = `
      query {
        posts(first: 12, where: { status: PUBLISH }) {
          nodes {
            slug title date excerpt commentCount
            featuredImage { node { sourceUrl } }
            categories { nodes { name } }
          }
        }
      }
    `
    const res = await fetch(wpUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return fallbackPosts
    const json = await res.json()
    const nodes = json?.data?.posts?.nodes ?? []
    return nodes.map((p: any) => ({
      slug: p.slug,
      title: p.title,
      date: new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      excerpt: p.excerpt?.replace(/<[^>]+>/g, '').slice(0, 160) ?? '',
      featuredImage: p.featuredImage?.node?.sourceUrl,
      category: p.categories?.nodes?.[0]?.name,
      commentsCount: p.commentCount ?? 0,
    }))
  } catch {
    return fallbackPosts
  }
}

const fallbackPosts: Post[] = [
  {
    slug: 'beginners-guide-gold-bullion',
    title: "A Beginner's Guide to Investing in Gold Bullion",
    date: 'Aug 17, 2024',
    excerpt: 'Whether you are new to precious metals or looking to expand your portfolio, this guide covers everything you need to know about gold bullion investing.',
    category: 'Education',
    commentsCount: 0,
  },
  {
    slug: 'partners-financial-advisors',
    title: 'Diversify Gold Partners with Leading Financial Advisors',
    date: 'Aug 17, 2024',
    excerpt: 'Our new partnership program connects clients with trusted financial advisors who specialize in precious metals portfolio allocation.',
    category: 'News',
    commentsCount: 0,
  },
  {
    slug: 'authenticity-of-investment',
    title: 'How Diversify Gold Ensures the Authenticity of Your Investment',
    date: 'Aug 17, 2024',
    excerpt: 'Every product we sell comes with a certificate of authenticity and passes rigorous quality checks before reaching our customers.',
    category: 'Trust & Security',
    commentsCount: 0,
  },
  {
    slug: 'gold-ira-rollover-guide',
    title: 'The Complete Guide to Gold IRA Rollover in 2024',
    date: 'Jul 28, 2024',
    excerpt: 'A step-by-step walkthrough of the gold IRA rollover process — from choosing a custodian to selecting your metals.',
    category: 'Education',
    commentsCount: 0,
  },
  {
    slug: 'silver-investment-2024',
    title: 'Why Silver May Be the Most Underrated Investment of 2024',
    date: 'Jul 15, 2024',
    excerpt: "Silver's dual role as both a precious metal and an industrial commodity makes it a compelling investment in today's market.",
    category: 'Market Insights',
    commentsCount: 0,
  },
  {
    slug: 'inflation-hedge-precious-metals',
    title: 'Precious Metals as an Inflation Hedge: What the Data Shows',
    date: 'Jun 30, 2024',
    excerpt: 'Historical data consistently shows that gold and silver outperform paper assets during periods of high inflation.',
    category: 'Market Insights',
    commentsCount: 0,
  },
]

export default async function NewsPage() {
  const posts = await getPosts()

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-20 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl text-center flex flex-col items-center gap-4">
          <span className="gold-badge">Blog &amp; News</span>
          <h1 className="text-4xl sm:text-5xl text-[#D8B150] font-light">
            Gold &amp; Silver Investment Insights
          </h1>
          <p className="text-gray-300 max-w-xl">
            Stay informed with the latest precious metals news, market updates, and educational resources.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 lg:py-20">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div
                  className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden"
                  style={post.featuredImage ? { backgroundImage: `url(${post.featuredImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                >
                  {!post.featuredImage && <span className="text-4xl">📰</span>}
                </div>

                {/* Content */}
                <div
                  className="flex flex-col gap-3 p-6 flex-1"
                  style={{ background: 'linear-gradient(180deg, #09111A, #1E2632)' }}
                >
                  {post.category && (
                    <span className="text-xs font-bold text-brand-gold/70 uppercase tracking-wide">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-brand-gold font-normal text-base leading-snug group-hover:underline line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  )}
                  <div className="flex items-center gap-4 text-gray-500 text-xs mt-auto pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> {post.commentsCount ?? 0} Comments
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
