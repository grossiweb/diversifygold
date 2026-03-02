import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowLeft, Phone } from 'lucide-react'
import { notFound } from 'next/navigation'

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
    description: post?.seo?.metaDesc ?? post?.excerpt?.replace(/<[^>]+>/g, '').slice(0, 160),
  }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  // If no WP post found, show a generic placeholder
  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <section
          className="py-20 relative"
          style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <div className="container-xl">
            <Link href="/news" className="inline-flex items-center gap-2 text-brand-gold text-sm mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to News
            </Link>
            <h1 className="text-4xl text-white font-light capitalize">
              {slug.replace(/-/g, ' ')}
            </h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container-xl max-w-3xl">
            <p className="text-brand-dark/70 text-lg text-center">
              Connect your WordPress CMS to load this article. In the meantime, call us for expert guidance.
            </p>
            <div className="flex justify-center mt-8">
              <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
                <Phone className="w-4 h-4" /> (866) 761-4262
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-20 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl max-w-4xl">
          <Link href="/news" className="inline-flex items-center gap-2 text-brand-gold text-sm mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          {post.categories?.nodes?.[0] && (
            <span className="gold-badge mb-4 block w-fit">{post.categories.nodes[0].name}</span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-snug mb-4">
            {post.title}
          </h1>
          <span className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" /> {formattedDate}
          </span>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="container-xl max-w-4xl -mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText ?? post.title}
            className="w-full aspect-video object-cover rounded-2xl shadow-xl"
          />
        </div>
      )}

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container-xl max-w-3xl">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-brand-dark prose-headings:font-normal
              prose-p:text-brand-dark/80 prose-p:leading-relaxed
              prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-brand-dark
              prose-ul:text-brand-dark/80 prose-li:marker:text-brand-gold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-beige text-center">
        <div className="container-xl flex flex-col items-center gap-4">
          <h3 className="text-2xl text-brand-dark font-normal">Ready to Invest in Precious Metals?</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call (866) 761-4262
            </a>
            <Link href="/contact" className="btn-outline-gold">Schedule a Call</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
