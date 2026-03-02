import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TickerBar from '@/components/layout/TickerBar'
import ProductsSection from '@/components/home/ProductsSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import FeaturedOnSection from '@/components/home/FeaturedOnSection'
import DiversifySection from '@/components/home/DiversifySection'
import GoldReasonSection from '@/components/home/GoldReasonSection'
import EducationCTA from '@/components/home/EducationCTA'
import BlogSection from '@/components/home/BlogSection'
import type { BlogPost } from '@/components/home/BlogSection'

export const metadata: Metadata = {
  title: 'Diversify Gold – Gold & Silver IRA | Physical Precious Metals',
  description:
    'Two ways to diversify — cash savings or retirement accounts. US-owned & operated gold and silver investment company. Free consultation. (866) 761-4262',
}

// Fetch latest blog posts from WordPress
async function getLatestPosts(): Promise<BlogPost[]> {
  try {
    const wpUrl = process.env.WORDPRESS_GRAPHQL_URL
    if (!wpUrl || wpUrl.includes('your-wordpress-site')) return []

    const query = `
      query {
        posts(first: 3, where: { status: PUBLISH }) {
          nodes {
            slug
            title
            date
            commentCount
            featuredImage {
              node { sourceUrl }
            }
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
    if (!res.ok) return []
    const json = await res.json()
    const posts = json?.data?.posts?.nodes ?? []

    return posts.map((p: any) => ({
      slug: p.slug,
      title: p.title,
      date: new Date(p.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      featuredImage: p.featuredImage?.node?.sourceUrl,
      commentsCount: p.commentCount ?? 0,
    }))
  } catch {
    return []
  }
}

export default async function HomePage() {
  const posts = await getLatestPosts()

  return (
    <>
      <HeroSection />
      <TickerBar />
      <ProductsSection />
      <WhyUsSection />
      <FeaturedOnSection />
      <DiversifySection />
      <GoldReasonSection />
      <EducationCTA />
      <BlogSection posts={posts} />
    </>
  )
}
