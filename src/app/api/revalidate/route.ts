import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  try {
    // Revalidate all pages that pull from WordPress
    revalidatePath('/')
    revalidatePath('/news')
    revalidatePath('/news/[slug]', 'page')
    revalidatePath('/precious-metals-ira')
    revalidatePath('/home-delivery')
    revalidatePath('/products')
    revalidatePath('/about')

    return NextResponse.json({ revalidated: true, timestamp: Date.now() })
  } catch (error) {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
