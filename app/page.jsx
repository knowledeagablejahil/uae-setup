export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Business Setup Made Easy
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Expert guidance for setting up your business in UAE. From mainland to free zone, we handle it all.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/971501234567"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700"
          >
            Chat on WhatsApp
          </a>
          <a
            href="/contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-slate-600">Businesses Setup</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">7-10</p>
              <p className="text-slate-600">Days Average</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-slate-600">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">24/7</p>
              <p className="text-slate-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Mainland Setup', price: '2,500 AED', time: '7-10 days' },
            { name: 'Free Zone Setup', price: '3,500 AED', time: '5-7 days' },
            { name: 'Offshore Setup', price: '4,500 AED', time: '10-14 days' },
            { name: 'Bank Account', price: '800 AED', time: '3-5 days' },
            { name: 'VAT & Accounting', price: '1,200 AED', time: '2-3 days' },
            { name: 'Golden Visa', price: '5,000 AED', time: '15-30 days' },
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-blue-600 font-bold text-lg mb-2">{service.price}</p>
              <p className="text-slate-600 mb-4">{service.time}</p>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8">Get in touch with our team today. We're here to help you succeed.</p>
          <a
            href="https://wa.me/971501234567"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
