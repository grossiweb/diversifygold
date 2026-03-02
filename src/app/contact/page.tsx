'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-20 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl text-center flex flex-col items-center gap-4">
          <span className="gold-badge">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl text-white font-light">
            Let's Start the Conversation
          </h1>
          <p className="text-gray-300 max-w-xl">
            No obligation, no pressure. Just expert guidance on gold and silver investing.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl text-brand-dark font-normal mb-6">Get in Touch</h2>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:+18667614262"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wide">Phone</p>
                      <p className="text-brand-gold font-bold">(866) 761-4262</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@diversifygold.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wide">Email</p>
                      <p className="text-brand-gold font-bold">info@diversifygold.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wide">Hours</p>
                      <p className="text-brand-dark text-sm">Mon–Fri: 9am – 6pm PST</p>
                      <p className="text-brand-dark/60 text-xs">Sat: 10am – 3pm PST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-brand-beige rounded-2xl p-6">
                <h3 className="font-bold text-brand-dark mb-4">Quick Options</h3>
                <div className="flex flex-col gap-3">
                  <a href="tel:+18667614262" className="btn-gold flex items-center gap-2 text-sm w-full justify-center">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a href="mailto:info@diversifygold.com" className="btn-outline-gold text-sm w-full text-center">
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 py-20 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-brand-dark">Message Sent!</h3>
                  <p className="text-brand-dark/70 max-w-md">
                    Thank you for reaching out. One of our specialists will contact you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline-gold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-2xl text-brand-dark font-normal">Send a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-brand-dark">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-brand-dark">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-brand-dark">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-brand-dark">I'm interested in</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option>Gold IRA Rollover</option>
                        <option>Physical Gold Purchase</option>
                        <option>Silver Investment</option>
                        <option>Home Delivery</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-brand-dark">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your investment goals..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please call us directly at (866) 761-4262.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gold self-start flex items-center gap-2"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-brand-dark/50">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-brand-gold hover:underline">Privacy Policy</a>.
                    We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
