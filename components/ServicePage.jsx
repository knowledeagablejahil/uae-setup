import Link from 'next/link'

export default function ServicePage({ title, description, benefits, pricing, timeline, features }) {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features &&
                  features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Benefits */}
            {benefits && (
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">→</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Pricing & CTA */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Details</h2>

              {/* Price */}
              {pricing && (
                <div className="mb-6">
                  <p className="text-gray-600 text-sm">Starting Price</p>
                  <p className="text-3xl font-bold text-blue-600">{pricing.price} AED</p>
                </div>
              )}

              {/* Timeline */}
              {timeline && (
                <div className="mb-6">
                  <p className="text-gray-600 text-sm">Processing Time</p>
                  <p className="text-lg font-semibold text-gray-900">{timeline}</p>
                </div>
              )}

              {/* CTA Button */}
              <a
                href="https://wa.me/971503947208?text=Hello%20UAE%20Setup%2C%20I%20need%20help%20with%20business%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center block mb-4"
              >
                Contact via WhatsApp
              </a>

              <a
                href="/contact"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center block"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Mainland Company"
              description="Start your business in mainland UAE"
              href="/services/mainland"
            />
            <ServiceCard
              title="Free Zone Company"
              description="Establish in one of UAE's free zones"
              href="/services/freezone"
            />
            <ServiceCard
              title="Bank Account Setup"
              description="Open a corporate bank account"
              href="/services/bank-account"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ title, description, href }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
