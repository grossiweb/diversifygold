import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your preferred email service
    // Options: SendGrid, Nodemailer, Resend, WP contact form endpoint
    // Example with WordPress REST API:
    // const wpUrl = process.env.WORDPRESS_URL
    // await fetch(`${wpUrl}/wp-json/contact-form-7/v1/contact-forms/123/feedback`, { ... })

    // For now, log the submission and return success
    console.log('[Contact Form Submission]', { name, email, phone, subject, message })

    // In production, send email here. Example with Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from: 'noreply@diversifygold.com', to: 'info@diversifygold.com', subject: `New inquiry from ${name}`, html: `...` })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
