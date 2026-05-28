'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { CheckCircle, Award, Users, MessageCircle } from 'lucide-react';

export function AboutPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About UAE Business Setup</h1>
          <p className="text-xl text-gray-600">Simplifying UAE business registration since 2015. Trusted by 500+ entrepreneurs and companies.</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To make UAE business registration simple, transparent, and accessible to everyone. We believe entrepreneurs should focus on growing their business, not navigating complex bureaucracy.
              </p>
              <p className="text-gray-700">
                Every day, we help people turn their business dreams into reality. From startup idea to full operation, we're here to guide you through every step.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Transparency</div>
                    <div className="text-sm text-gray-600">No hidden fees, no surprises. Everything is clear upfront.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Expertise</div>
                    <div className="text-sm text-gray-600">50+ years combined experience in UAE business law.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Reliability</div>
                    <div className="text-sm text-gray-600">We deliver results, consistently and on time.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Setups</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Al Mansouri', role: 'Founder & Lead Advisor', exp: '20+ years in UAE business law' },
              { name: 'Sarah Thompson', role: 'Banking & Finance Specialist', exp: '15+ years with UAE banks' },
              { name: 'Mohammed Hassan', role: 'Compliance & Legal Advisor', exp: '18+ years with government' }
            ].map((member, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '⚡', title: 'Fast Processing', desc: 'Average 7-10 days from start to operation.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. Know your exact cost upfront.' },
              { icon: '🎯', title: 'Customized Solutions', desc: 'We tailor our services to your specific needs.' },
              { icon: '📞', title: '24/7 Support', desc: 'Available on WhatsApp anytime you need us.' },
              { icon: '✅', title: 'Proven Track Record', desc: '500+ successful business setups completed.' },
              { icon: '🤝', title: 'Expert Guidance', desc: '50+ years combined experience on your side.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971501234567?text=Hi%21%20I%20would%20like%20to%20discuss%20my%20UAE%20business%20setup', '_blank');
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">Have questions? We're here to help. Contact us today.</p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Get instant response on WhatsApp</p>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Message Us
              </button>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Call us during business hours</p>
              <a href="tel:+971501234567" className="text-blue-600 font-semibold hover:text-blue-700">
                +971 50 123 4567
              </a>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us detailed questions</p>
              <a href="mailto:hello@uaesetup.ae" className="text-blue-600 font-semibold hover:text-blue-700">
                hello@uaesetup.ae
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select Service (Optional)</option>
                    <option value="mainland">Mainland Setup</option>
                    <option value="freezone">Free Zone Setup</option>
                    <option value="bank">Bank Account</option>
                    <option value="vat">VAT & Accounting</option>
                    <option value="visa">Golden Visa</option>
                  </select>
                </div>

                <textarea
                  placeholder="Your Message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="bg-green-50 p-8 rounded-lg text-center border-2 border-green-200">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We've received your message and will get back to you within 2 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OFFICE LOCATION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Office Location</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-gray-700 mb-2">Dubai, United Arab Emirates</p>
            <p className="text-gray-600 text-sm mb-6">We serve all of UAE including Abu Dhabi, Sharjah, and other emirates</p>
            <p className="text-gray-600">
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (WhatsApp available 24/7)
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
