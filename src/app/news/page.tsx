import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

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
      date: new Date(p.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
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
    excerpt:
      'Whether you are new to precious metals or looking to expand your portfolio, this guide covers everything you need to know about gold bullion investing.',
    category: 'Education',
    featuredImage: '/images/blog-post-1.png',
    commentsCount: 0,
  },
  {
    slug: 'partners-financial-advisors',
    title: 'Diversify Gold Partners with Leading Financial Advisors',
    date: 'Aug 17, 2024',
    excerpt:
      'Our new partnership program connects clients with trusted financial advisors who specialize in precious metals portfolio allocation.',
    category: 'News',
    featuredImage: '/images/blog-post-2.png',
    commentsCount: 0,
  },
  {
    slug: 'authenticity-of-investment',
    title: 'How Diversify Gold Ensures the Authenticity of Your Investment',
    date: 'Aug 17, 2024',
    excerpt:
      'Every product we sell comes with a certificate of authenticity and passes rigorous quality checks before reaching our customers.',
    category: 'Trust & Security',
    featuredImage: '/images/blog-post-3.png',
    commentsCount: 0,
  },
  {
    slug: 'gold-ira-rollover-guide',
    title: 'The Complete Guide to Gold IRA Rollover in 2024',
    date: 'Jul 28, 2024',
    excerpt:
      'A step-by-step walkthrough of the gold IRA rollover process — from choosing a custodian to selecting your metals.',
    category: 'Education',
    featuredImage: '/images/blog-post-1.png',
    commentsCount: 0,
  },
  {
    slug: 'silver-investment-2024',
    title: 'Why Silver May Be the Most Underrated Investment of 2024',
    date: 'Jul 15, 2024',
    excerpt:
      "Silver's dual role as both a precious metal and an industrial commodity makes it a compelling investment in today's market.",
    category: 'Market Insights',
    featuredImage: '/images/blog-post-2.png',
    commentsCount: 0,
  },
  {
    slug: 'inflation-hedge-precious-metals',
    title: 'Precious Metals as an Inflation Hedge: What the Data Shows',
    date: 'Jun 30, 2024',
    excerpt:
      'Historical data consistently shows that gold and silver outperform paper assets during periods of high inflation.',
    category: 'Market Insights',
    featuredImage: '/images/blog-post-3.png',
    commentsCount: 0,
  },
]

export default async function NewsPage() {
  const posts = await getPosts()

  return (
    <div className="bg-[#FFFCF3]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative -mt-[108px] lg:-mt-[124px]" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/blog/hero-bg.png"
            alt="News & Blog background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />

        <div className="relative container-xl pt-48 lg:pt-56 pb-20 lg:pb-28 text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="gold-badge">Stay Updated</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[40px] text-white font-light leading-tight">
              Latest news related to Silver &amp; Gold
            </h1>
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-base font-bold">
              <Link href="/" className="text-[#D8B150] hover:underline">
                Home
              </Link>
              <span className="text-neutral-50">/</span>
              <span className="text-neutral-50">News</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POSTS GRID ===== */}
      <section className="py-12 lg:py-20 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex flex-col rounded-xl overflow-hidden bg-neutral-50 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full aspect-video relative overflow-hidden bg-gray-200">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex flex-col gap-3 p-6 flex-1"
                  style={{ background: 'linear-gradient(180deg, #09111A, #1E2632)' }}
                >
                  <h2 className="text-[#D8B150] text-xl font-normal leading-snug group-hover:underline line-clamp-2">
                    {post.title}
                  </h2>
                  <span className="text-[#DDDDDD] text-base">
                    {post.date} - {post.commentsCount ?? 0} Comments
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-16">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-brand-dark/40">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#D4AF36] text-[#FFFCF3] text-[13px] font-bold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FFFCF3] border border-[#F7ECCC] text-[#333333] text-[13px] font-bold">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FFFCF3] border border-[#F7ECCC] text-[#333333] text-[13px] font-bold">
              3
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-[#333333] text-[13px] font-bold">
              ...
            </span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#FFFCF3] border border-[#F7ECCC] text-[#333333] text-[13px] font-bold">
              10
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-brand-dark/60">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== TWO WAYS TO DIVERSIFY ===== */}
      <section className="py-16 lg:py-20 bg-[#FFFCF3]">
        <div className="container-xl">
          <div
            className="rounded-[32px] overflow-hidden relative"
            style={{ boxShadow: '0px 4px 60px #D8B1504D' }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/ira/two-ways-bg.png"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/ira/two-ways-inner.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative grid lg:grid-cols-2 gap-8">
                <div className="flex flex-col items-start justify-end p-8 lg:p-16 min-h-[300px]">
                  <Image
                    src="/images/ira/logo-card.png"
                    alt="Diversify Gold"
                    width={265}
                    height={71}
                    className="mb-6 object-contain"
                  />
                  <p className="text-white text-lg font-bold leading-snug">
                    Diversify Gold Inc.
                    <br />A Simple and Easy Change
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center p-8 lg:p-16 gap-6">
                  <div>
                    <h2 className="text-brand-dark text-2xl lg:text-[32px] font-normal mb-2">
                      Two ways to Diversify
                    </h2>
                    <p className="text-[#D4AF36] text-xl lg:text-[32px] font-normal font-serif">
                      Cash Savings &amp; Retirement Accounts
                    </p>
                  </div>
                  <div className="bg-[#FFF5DF] rounded-2xl py-5 px-6">
                    <p className="text-brand-dark text-sm font-bold uppercase tracking-wider">
                      Call Now
                    </p>
                    <a
                      href="tel:+18667614262"
                      className="text-brand-dark text-2xl font-light hover:text-brand-gold transition-colors"
                    >
                      (866) 761-4262
                    </a>
                  </div>
                  <Link href="/contact" className="btn-gold">
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
