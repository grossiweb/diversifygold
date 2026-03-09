import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowLeft, Phone, Share2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import BlogSection from '@/components/home/BlogSection'

interface Props {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  try {
    const wpUrl = process.env.WORDPRESS_GRAPHQL_URL
    if (!wpUrl || wpUrl.includes('your-wordpress-site')) return null

    const query = `
      query GetPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          slug title date content excerpt commentCount
          author { node { name } }
          featuredImage { node { sourceUrl altText } }
          categories { nodes { name slug } }
          seo { title metaDesc }
        }
      }
    `
    const res = await fetch(wpUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { slug } }),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json?.data?.post ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  return {
    title: post?.seo?.title ?? post?.title ?? 'Blog Post',
    description:
      post?.seo?.metaDesc ?? post?.excerpt?.replace(/<[^>]+>/g, '').slice(0, 160),
  }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  // Format the slug into a readable title for placeholder
  const readableTitle = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  // If no WP post, show placeholder with the same design
  if (!post) {
    return (
      <div className="bg-[#FFFCF3]">
        {/* Top bar area — nav is handled by layout, just padding */}
        <div className="pt-20 lg:pt-24" />

        {/* Main content */}
        <section className="pb-12 lg:pb-16 bg-[#FFFCF3]">
          <div className="container-xl">
            <div className="flex items-start gap-7">
              {/* Article */}
              <div className="flex-1 flex flex-col gap-7">
                {/* Breadcrumb + Title + Meta */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-base font-bold">
                    <Link
                      href="/"
                      className="text-[#D8B150] hover:underline"
                    >
                      Home
                    </Link>
                    <span className="text-brand-dark">/</span>
                    <Link
                      href="/news"
                      className="text-brand-dark hover:text-[#D8B150]"
                    >
                      Blog
                    </Link>
                    <span className="text-brand-dark">/</span>
                    <span className="text-brand-dark">Blog Details</span>
                  </div>
                  <h1 className="text-[32px] text-brand-dark font-normal leading-snug">
                    {readableTitle}
                  </h1>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D8B150] text-base">
                      Diversify Gold
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-brand-dark text-base">
                        Share this :
                      </span>
                      <Share2 className="w-4 h-4 text-[#D8B150]" />
                    </div>
                  </div>
                </div>

                {/* Featured image placeholder */}
                <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src="/images/blog/featured-image.png"
                    alt={readableTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Placeholder content */}
                <div className="border-t border-[#D2D2D2] pt-6">
                  <p className="text-brand-dark text-base leading-relaxed mb-8">
                    Connect your WordPress CMS to load this article. In the
                    meantime, call us for expert guidance on gold and silver
                    investing.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="tel:+18667614262"
                      className="btn-gold flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" /> (866) 761-4262
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="hidden lg:flex flex-col items-start gap-4 w-[290px] flex-shrink-0 mt-40">
                <Image
                  src="/images/blog/sidebar-ad.png"
                  alt="Gold & Silver Investment"
                  width={290}
                  height={600}
                  className="rounded-xl object-cover"
                />
                <div className="relative w-[290px] rounded-xl overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/images/blog/sidebar-card-bg.png"
                      alt=""
                      width={290}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center pt-3 px-7">
                      <p className="text-white text-xl mb-2 text-center">
                        Two Ways to Diversify
                      </p>
                      <p className="text-[#D9B640] text-2xl text-center leading-snug">
                        Cash Savings
                        <br />&amp;
                        <br />
                        Retirement Accounts
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link href="/contact" className="btn-gold w-full text-center block">
                      Compare Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog */}
        <section className="bg-[#F7F0DD] py-16 lg:py-24">
          <div className="container-xl">
            <h2 className="text-2xl text-black font-normal mb-14 text-center">
              Related Blog &amp; News
            </h2>
            <BlogSection />
          </div>
        </section>
      </div>
    )
  }

  // WordPress post found — render full article
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const authorName = post.author?.node?.name ?? 'Diversify Gold'

  return (
    <div className="bg-[#FFFCF3]">
      <div className="pt-20 lg:pt-24" />

      {/* Main content */}
      <section className="pb-12 lg:pb-16 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="flex items-start gap-7">
            {/* Article */}
            <div className="flex-1 flex flex-col gap-7">
              {/* Breadcrumb + Title + Meta */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 text-base font-bold">
                  <Link href="/" className="text-[#D8B150] hover:underline">
                    Home
                  </Link>
                  <span className="text-brand-dark">/</span>
                  <Link
                    href="/news"
                    className="text-brand-dark hover:text-[#D8B150]"
                  >
                    Blog
                  </Link>
                  <span className="text-brand-dark">/</span>
                  <span className="text-brand-dark">Blog Details</span>
                </div>
                <h1 className="text-[32px] text-brand-dark font-normal leading-snug">
                  {post.title}
                </h1>
                <div className="flex justify-between items-center">
                  <span className="text-[#D8B150] text-base">
                    {authorName} &bull; {formattedDate}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-brand-dark text-base">
                      Share this :
                    </span>
                    <Share2 className="w-4 h-4 text-[#D8B150]" />
                  </div>
                </div>
              </div>

              {/* Featured image */}
              {post.featuredImage?.node?.sourceUrl && (
                <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText ?? post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Article body */}
              <div className="border-t border-[#D2D2D2] pt-6">
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-brand-dark prose-headings:font-bold prose-headings:text-lg
                    prose-p:text-brand-dark prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-black
                    prose-ul:text-brand-dark prose-li:marker:text-brand-gold"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Disclaimer */}
                <div className="mt-8 pt-6 border-t border-[#D2D2D2]">
                  <p className="text-brand-dark text-base leading-relaxed">
                    <strong>Disclaimer:</strong> The information provided above
                    is for general informational and educational purposes only.
                    The views and opinions expressed are solely those of the
                    author and do not necessarily reflect the views of any
                    affiliated organizations or entities, including Diversify
                    Gold. This content should not be taken as, and is not,
                    professional advice (legal, financial, tax, or otherwise).
                    Always consult with a qualified professional before making
                    any legal, financial, or tax related decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:flex flex-col items-start gap-4 w-[290px] flex-shrink-0 mt-40">
              <Image
                src="/images/blog/sidebar-ad.png"
                alt="Gold & Silver Investment"
                width={290}
                height={600}
                className="rounded-xl object-cover"
              />
              <div className="relative w-[290px] rounded-xl overflow-hidden">
                <div className="relative">
                  <Image
                    src="/images/blog/sidebar-card-bg.png"
                    alt=""
                    width={290}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center pt-3 px-7">
                    <p className="text-white text-xl mb-2 text-center">
                      Two Ways to Diversify
                    </p>
                    <p className="text-[#D9B640] text-2xl text-center leading-snug">
                      Cash Savings
                      <br />&amp;
                      <br />
                      Retirement Accounts
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <Link href="/contact" className="btn-gold w-full text-center block">
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog & News */}
      <section className="bg-[#F7F0DD] py-16 lg:py-24">
        <div className="container-xl">
          <h2 className="text-2xl text-black font-normal mb-14 text-center">
            Related Blog &amp; News
          </h2>
        </div>
        <BlogSection />
      </section>
    </div>
  )
}
