import React, { useState } from 'react';
import { ChevronDown, CheckCircle, Phone, MessageCircle, Calculator, Users, TrendingUp, Shield } from 'lucide-react';

export default function ConsultancyWebsite() {
  const [activeService, setActiveService] = useState('mainland');
  const [calcStep, setCalcStep] = useState(1);
  const [calcData, setCalcData] = useState({
    serviceType: 'mainland',
    businessType: 'sole_proprietor',
    timeline: 'standard'
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pricing data
  const pricing = {
    mainland: { base: 2500, label: 'Mainland Setup', time: '7-10 days' },
    freezone: { base: 3500, label: 'Free Zone Setup', time: '5-7 days' },
    offshore: { base: 4500, label: 'Offshore Setup', time: '10-14 days' },
    bank: { base: 800, label: 'Bank Account Opening', time: '3-5 days' },
    vat: { base: 1200, label: 'VAT & Accounting Setup', time: '2-3 days' },
    visa: { base: 5000, label: 'Golden Visa Support', time: '15-30 days' }
  };

  const services = [
    {
      id: 'mainland',
      title: 'Mainland Setup',
      description: 'Perfect for retail, services, and small businesses',
      features: ['No restrictions on business activities', 'Local office required', 'UAE national sponsorship'],
      price: pricing.mainland.base,
      time: pricing.mainland.time,
      ideal: 'Entrepreneurs starting their first UAE business'
    },
    {
      id: 'freezone',
      title: 'Free Zone Setup',
      description: 'Tax benefits and 100% foreign ownership',
      features: ['0% corporate tax for 50 years', '100% foreign ownership', 'Import/export advantages'],
      price: pricing.freezone.base,
      time: pricing.freezone.time,
      ideal: 'Companies wanting tax optimization'
    },
    {
      id: 'offshore',
      title: 'Offshore Setup',
      description: 'International business structure',
      features: ['Privacy & confidentiality', 'Asset protection', 'International operations'],
      price: pricing.offshore.base,
      time: pricing.offshore.time,
      ideal: 'Global businesses needing UAE presence'
    },
    {
      id: 'bank',
      title: 'Bank Account Opening',
      description: 'Complete banking solutions',
      features: ['Trade finance options', 'Multi-currency accounts', 'Business credit facilities'],
      price: pricing.bank.base,
      time: pricing.bank.time,
      ideal: 'All business types'
    },
    {
      id: 'vat',
      title: 'VAT & Accounting',
      description: 'Compliance and financial management',
      features: ['VAT registration & filing', 'Bookkeeping & audit', 'Tax optimization'],
      price: pricing.vat.base,
      time: pricing.vat.time,
      ideal: 'Established companies'
    },
    {
      id: 'visa',
      title: 'Golden Visa Support',
      description: 'Long-term residency program',
      features: ['10-year residency', 'Family sponsorship', 'Real estate investment option'],
      price: pricing.visa.base,
      time: pricing.visa.time,
      ideal: 'High-net-worth individuals'
    }
  ];

  const calculateCost = () => {
    let baseCost = pricing[calcData.serviceType].base;
    
    if (calcData.businessType === 'complex') baseCost += 1000;
    if (calcData.timeline === 'urgent') baseCost += 500;
    
    return baseCost;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in learning more about your UAE business setup services.`);
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your CRM/email service
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setShowLeadForm(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', whatsapp: '' });
    }, 2000);
  };

  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">UAE Business Setup</div>
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Start Your UAE Business in Days, Not Months
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete business setup, banking, and visa support. Transparent pricing. No hidden fees.
          </p>
          
          {/* MAIN CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Free Consultation
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Chat on WhatsApp
            </button>
          </div>

          {/* TRUST SIGNALS */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">Successful Setups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">7-10</div>
              <div className="text-sm text-gray-600">Days Average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* COST CALCULATOR */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Know Your Exact Cost</h2>
          <p className="text-center text-gray-600 mb-12">No surprises. No hidden fees.</p>

          <div className="bg-gray-50 p-8 rounded-lg">
            {calcStep === 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">What service do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(pricing).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => { setCalcData({...calcData, serviceType: key}); setCalcStep(2); }}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left"
                    >
                      <div className="font-semibold text-gray-900">{val.label}</div>
                      <div className="text-sm text-gray-500">From AED {val.base}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {calcStep === 2 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Business complexity?</label>
                <div className="space-y-3">
                  {[
                    { id: 'simple', label: 'Simple (Sole proprietor)', cost: 0 },
                    { id: 'complex', label: 'Complex (Multiple activities)', cost: 1000 }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => { setCalcData({...calcData, businessType: opt.id}); setCalcStep(3); }}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left"
                    >
                      <div className="font-semibold text-gray-900">{opt.label}</div>
                      {opt.cost > 0 && <div className="text-sm text-gray-500">+AED {opt.cost}</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {calcStep === 3 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">Timeline preference?</label>
                <div className="space-y-3">
                  {[
                    { id: 'standard', label: 'Standard (7-10 days)', cost: 0 },
                    { id: 'urgent', label: 'Urgent (2-3 days)', cost: 500 }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => { setCalcData({...calcData, timeline: opt.id}); setCalcStep(4); }}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left"
                    >
                      <div className="font-semibold text-gray-900">{opt.label}</div>
                      {opt.cost > 0 && <div className="text-sm text-gray-500">+AED {opt.cost}</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {calcStep === 4 && (
              <div className="text-center">
                <div className="bg-blue-50 p-8 rounded-lg mb-6">
                  <div className="text-sm text-gray-600 mb-2">Your Total Cost</div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    AED {calculateCost().toLocaleString()}
                  </div>
                  <div className="text-gray-600">
                    For {pricing[calcData.serviceType].label} ({pricing[calcData.serviceType].time})
                  </div>
                </div>
                <button
                  onClick={() => { setShowLeadForm(true); setCalcStep(1); }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
                >
                  Proceed
                </button>
                <button
                  onClick={() => setCalcStep(1)}
                  className="w-full border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Recalculate
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">All Services You Need</h2>
          <p className="text-center text-gray-600 mb-12">From startup to scale. We cover the entire journey.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4 pb-4 border-b">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    From AED {service.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">{service.time}</div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-500 mb-3">IDEAL FOR</div>
                  <p className="text-sm text-gray-700">{service.ideal}</p>
                </div>

                <button
                  onClick={() => setShowLeadForm(true)}
                  className="w-full border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Shield className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">100% Transparent</h3>
                <p className="text-gray-600 text-sm">No hidden fees. Exact pricing before you commit.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <TrendingUp className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Advisors</h3>
                <p className="text-gray-600 text-sm">UAE business specialists with 50+ years combined experience.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Real Results</h3>
                <p className="text-gray-600 text-sm">500+ successful setups. Proven process. Measurable outcomes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Always Available</h3>
                <p className="text-gray-600 text-sm">WhatsApp support. Fast responses. Questions answered immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed Al Mansouri', role: 'Tech Startup Founder', text: 'Setup was done in 8 days. Way faster than we expected. Great support throughout.' },
              { name: 'Sarah Johnson', role: 'E-commerce Business Owner', text: 'No surprises with pricing. They explained everything clearly. Exactly what we needed.' },
              { name: 'Mohammed Hassan', role: 'Investment Company Manager', text: 'Professional team. Knew all the details about free zone regulations. Highly recommend.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-700 mb-4 text-sm">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>

          <div className="space-y-4">
            {[
              { q: 'How long does mainland setup take?', a: 'Typically 7-10 business days. Urgent processing (2-3 days) available for +AED 500.' },
              { q: 'What\'s the difference between mainland and free zone?', a: 'Mainland: any business activity but needs local office. Free zone: 100% foreign ownership, tax benefits, but restricted activities.' },
              { q: 'Can I open a bank account immediately?', a: 'Once your trade license is issued (same day or next day), you can open a bank account. We handle the coordination.' },
              { q: 'Is VAT mandatory?', a: 'Yes, if annual revenue exceeds AED 375,000. We handle registration and compliance.' },
              { q: 'What\'s included in your service?', a: 'Everything: documentation, government approvals, bank coordination, and ongoing support for 3 months.' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg mb-8 opacity-90">Get a personalized plan in one quick conversation.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Free Consultation
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Chat Now
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">UAE Business Setup</div>
            <p className="text-gray-400 text-sm">Fast. Transparent. Trusted.</p>
          </div>
          <div>
            <div className="font-semibold mb-4">Services</div>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Mainland Setup</li>
              <li>Free Zone Setup</li>
              <li>Bank Accounts</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Support</div>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>WhatsApp: +971 50 123 4567</li>
              <li>Email: hello@uaesetup.ae</li>
              <li>Available 24/7</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Legal</div>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Disclaimers</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm text-center">
          © 2026 UAE Business Setup. All rights reserved.
        </div>
      </footer>

      {/* LEAD FORM MODAL */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-6">We'll call you within 2 hours with a personalized plan.</p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp number (+971...)"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Get Consultation
                  </button>
                </form>

                <button
                  onClick={() => setShowLeadForm(false)}
                  className="w-full mt-3 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We'll contact you within 2 hours.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110 z-30"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}