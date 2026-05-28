'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { CheckCircle, ArrowRight, TrendingUp, Shield, Users, MessageCircle } from 'lucide-react';

export default function Home() {
  const [calcStep, setCalcStep] = useState(1);
  const [calcData, setCalcData] = useState({
    serviceType: 'mainland',
    businessType: 'simple',
    timeline: 'standard'
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      price: pricing.mainland.base,
      time: pricing.mainland.time,
      icon: '🏢',
      link: '/services/mainland'
    },
    {
      id: 'freezone',
      title: 'Free Zone Setup',
      description: 'Tax benefits and 100% foreign ownership',
      price: pricing.freezone.base,
      time: pricing.freezone.time,
      icon: '📦',
      link: '/services/freezone'
    },
    {
      id: 'offshore',
      title: 'Offshore Setup',
      description: 'International business structure',
      price: pricing.offshore.base,
      time: pricing.offshore.time,
      icon: '🌍',
      link: '/services/offshore'
    },
    {
      id: 'bank',
      title: 'Bank Account',
      description: 'Complete banking solutions',
      price: pricing.bank.base,
      time: pricing.bank.time,
      icon: '🏦',
      link: '/services/bank-account'
    },
    {
      id: 'vat',
      title: 'VAT & Accounting',
      description: 'Compliance and financial management',
      price: pricing.vat.base,
      time: pricing.vat.time,
      icon: '📊',
      link: '/services/vat-accounting'
    },
    {
      id: 'visa',
      title: 'Golden Visa',
      description: 'Long-term residency program',
      price: pricing.visa.base,
      time: pricing.visa.time,
      icon: '🎫',
      link: '/services/golden-visa'
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
    setFormSubmitted(true);
    setTimeout(() => {
      setShowLeadForm(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', whatsapp: '' });
    }, 2000);
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="pt-20 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Start Your UAE Business in <span className="text-blue-600">Days</span>, Not Months
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete business setup, banking, and visa support. Transparent pricing. No hidden fees. From idea to operation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setShowLeadForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Successful Setups</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600">7-10</div>
                <div className="text-sm text-gray-600 mt-1">Days Average</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST CALCULATOR */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Know Your Exact Cost</h2>
            <p className="text-gray-600">No surprises. No hidden fees. Complete transparency.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
            {calcStep === 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-6">What service do you need?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(pricing).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => { setCalcData({...calcData, serviceType: key}); setCalcStep(2); }}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left font-medium"
                    >
                      <div className="font-semibold text-gray-900">{val.label}</div>
                      <div className="text-sm text-gray-500 mt-1">From AED {val.base.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {calcStep === 2 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-6">Business complexity?</label>
                <div className="space-y-3">
                  {[
                    { id: 'simple', label: 'Simple (Sole proprietor)', cost: 0 },
                    { id: 'complex', label: 'Complex (Multiple activities)', cost: 1000 }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => { setCalcData({...calcData, businessType: opt.id}); setCalcStep(3); }}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left font-medium"
                    >
                      <div className="font-semibold text-gray-900">{opt.label}</div>
                      {opt.cost > 0 && <div className="text-sm text-gray-500 mt-1">+AED {opt.cost.toLocaleString()}</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {calcStep === 3 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-6">Timeline preference?</label>
                <div className="space-y-3">
                  {[
                    { id: 'standard', label: 'Standard (7-10 days)', cost: 0 },
                    { id: 'urgent', label: 'Urgent (2-3 days)', cost: 500 }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => { setCalcData({...calcData, timeline: opt.id}); setCalcStep(4); }}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition text-left font-medium"
                    >
                      <div className="font-semibold text-gray-900">{opt.label}</div>
                      {opt.cost > 0 && <div className="text-sm text-gray-500 mt-1">+AED {opt.cost.toLocaleString()}</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {calcStep === 4 && (
              <div className="text-center">
                <div className="bg-white p-8 rounded-xl mb-6 border-2 border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">Your Total Cost</div>
                  <div className="text-6xl font-bold text-blue-600 mb-2">
                    AED {calculateCost().toLocaleString()}
                  </div>
                  <div className="text-gray-600">
                    For {pricing[calcData.serviceType].label}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {pricing[calcData.serviceType].time}
                  </div>
                </div>
                <button
                  onClick={() => { setShowLeadForm(true); setCalcStep(1); }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
                >
                  Proceed to Consultation
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Services You Need</h2>
            <p className="text-gray-600 text-lg">From startup to scale. We cover the entire journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link href={service.link} key={service.id}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer h-full hover:translate-y-[-4px]">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                  
                  <div className="mb-6 pb-6 border-b">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      AED {service.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">{service.time}</div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Transparent</h3>
                <p className="text-gray-600">No hidden fees. No surprise costs. Exact pricing before you commit. You know what you're paying for.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Advisors</h3>
                <p className="text-gray-600">50+ years combined experience. Specialists in UAE business law. Every decision backed by expertise.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real Results</h3>
                <p className="text-gray-600">500+ successful setups. Proven process. Measurable outcomes. We deliver, consistently.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MessageCircle className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Always Available</h3>
                <p className="text-gray-600">WhatsApp support. Fast responses. 24/7 availability. Questions answered immediately, anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed Al Mansouri', role: 'Tech Startup Founder', text: 'Setup was done in 8 days. Way faster than we expected. Great support throughout. Highly recommend!' },
              { name: 'Sarah Johnson', role: 'E-commerce Business Owner', text: 'No surprises with pricing. They explained everything clearly. Exactly what we needed. Professional team.' },
              { name: 'Mohammed Hassan', role: 'Investment Company Manager', text: 'Professional team. Knew all the details about free zone regulations. Highly recommend for anyone.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              { q: 'How long does mainland setup take?', a: 'Typically 7-10 business days. Urgent processing (2-3 days) is available for +AED 500.' },
              { q: 'What\'s the difference between mainland and free zone?', a: 'Mainland: any business activity but requires local office. Free zone: 100% foreign ownership, tax benefits, but restricted activities.' },
              { q: 'Can I open a bank account immediately?', a: 'Once your trade license is issued, you can open a bank account. We handle the coordination with banks.' },
              { q: 'Is VAT mandatory?', a: 'Yes, if annual revenue exceeds AED 375,000. We handle registration and ongoing compliance.' },
              { q: 'What\'s included in your service?', a: 'Everything: documentation, government approvals, bank coordination, and 3 months of ongoing support.' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8 opacity-90">Get a personalized plan in one quick conversation. No pressure. No fees.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Free Consultation
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat Now
            </button>
          </div>
        </div>
      </section>

      {/* LEAD FORM MODAL */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl">
            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Consultation</h3>
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
    </Layout>
  );
}
