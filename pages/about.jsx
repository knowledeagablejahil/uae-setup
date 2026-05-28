export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">About UAE Business Setup</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We've helped hundreds of entrepreneurs establish successful businesses across the UAE
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To make business setup in UAE seamless, affordable, and accessible to entrepreneurs worldwide. We simplify complex processes and provide expert guidance at every step.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the leading business setup consultant in UAE, trusted by entrepreneurs for our expertise, transparency, and customer-first approach. We aim to enable business growth across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-slate-600">Businesses Setup</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">7-10</p>
              <p className="text-slate-600">Days Average Setup</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-slate-600">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-slate-600">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Ahmed Al Mansouri',
              role: 'Founder & Business Setup Expert',
              experience: '20+ years in UAE business setup',
            },
            {
              name: 'Fatima Al Zaabi',
              role: 'Legal Compliance Specialist',
              experience: '18+ years in UAE regulations',
            },
            {
              name: 'Mohammed Al Qasimi',
              role: 'Financial & VAT Consultant',
              experience: '15+ years in accounting & finance',
            },
          ].map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-slate-600">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Knowledge',
                description: 'Deep expertise in all UAE business setup types and regulations',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees. You know exactly what you\'re paying for',
              },
              {
                title: 'Fast Processing',
                description: 'Average 7-10 days from start to approved business',
              },
              {
                title: 'Personal Support',
                description: 'Dedicated advisor for your business throughout the process',
              },
              {
                title: '24/7 Availability',
                description: 'WhatsApp support available anytime for your questions',
              },
              {
                title: 'Complete Service',
                description: 'From setup to VAT to bank accounts - we handle everything',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our team today. We're here to help you succeed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/971501234567"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
