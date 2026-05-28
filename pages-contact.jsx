'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // You can integrate with your backend here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Have questions? Our team is ready to help. Contact us via WhatsApp, email, or phone.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '💬',
              title: 'WhatsApp',
              value: '+971 50 123 4567',
              link: 'https://wa.me/971501234567',
              linkText: 'Chat Now',
            },
            {
              icon: '📧',
              title: 'Email',
              value: 'hello@uaesetup.ae',
              link: 'mailto:hello@uaesetup.ae',
              linkText: 'Send Email',
            },
            {
              icon: '📞',
              title: 'Phone',
              value: '+971 50 123 4567',
              link: 'tel:+971501234567',
              linkText: 'Call Now',
            },
          ].map((method, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-8 text-center">
              <p className="text-5xl mb-4">{method.icon}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
              <p className="text-slate-600 mb-4">{method.value}</p>
              <a
                href={method.link}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                {method.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ Thank you! We'll get back to you within 2 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-slate-200">
            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="+971 50 123 4567"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a service</option>
                <option value="mainland">Mainland Setup</option>
                <option value="freezone">Free Zone Setup</option>
                <option value="offshore">Offshore Setup</option>
                <option value="bank">Bank Account Opening</option>
                <option value="vat">VAT & Accounting</option>
                <option value="visa">Golden Visa Support</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tell us about your business setup needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-slate-600 mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Office</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dubai, UAE</h3>
              <p className="text-slate-600 mb-2">📍 Emirates Towers, Sheikh Zayed Road</p>
              <p className="text-slate-600 mb-4">Dubai, United Arab Emirates</p>
              <p className="text-slate-600 mb-2">📞 +971 50 123 4567</p>
              <p className="text-slate-600 mb-4">✉️ hello@uaesetup.ae</p>
              <p className="text-slate-600">🕐 Mon-Fri: 9:00 AM - 6:00 PM (UAE Time)</p>
            </div>
            <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-slate-500">Map would go here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
