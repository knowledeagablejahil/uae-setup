'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { CheckCircle, Clock, DollarSign, ArrowRight, MessageCircle } from 'lucide-react';

const ServicePage = ({ service }) => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const serviceDetails = {
    mainland: {
      title: 'Mainland Business Setup in UAE',
      shortDesc: 'Start any business activity in mainland UAE with no restrictions.',
      price: 2500,
      time: '7-10 days',
      icon: '🏢',
      description: 'Perfect for retail stores, service providers, consultancies, and any business type. Operate with full freedom across all emirates.',
      
      features: [
        'No restrictions on business activities',
        'Operate in any location across UAE',
        'Access to local market directly',
        'Easier customer acquisition',
        'Standard business registration process'
      ],
      
      requirements: [
        'Valid passport copy',
        'Business plan or project proposal',
        'UAE address (office/location)',
        'Initial capital (minimum varies by emirate)',
        'Local UAE national as sponsor (if required)'
      ],
      
      included: [
        'Business name verification',
        'Trade license preparation',
        'Chamber of commerce registration',
        'Initial municipality approvals',
        'Government coordination',
        'Documentation and filing',
        'Bank account coordination',
        '3 months of post-setup support'
      ],
      
      process: [
        { step: 1, title: 'Consultation & Planning', description: 'We understand your business model, location preference, and requirements.' },
        { step: 2, title: 'Documentation', description: 'Prepare all required documents and business plan.' },
        { step: 3, title: 'Approvals', description: 'Submit to government and obtain necessary approvals.' },
        { step: 4, title: 'Trade License', description: 'Receive your official trade license.' },
        { step: 5, title: 'Banking & Setup', description: 'Help you open business bank account and complete setup.' }
      ],
      
      faq: [
        { q: 'Do I need a local partner?', a: 'Depends on the emirate and business type. We can advise on your specific situation.' },
        { q: 'How much capital do I need?', a: 'Capital requirements vary. We provide detailed breakdown for your business type.' },
        { q: 'Can I run the business from home?', a: 'Yes, but most business types require a registered physical office address.' },
        { q: 'What about visa sponsorship?', a: 'We can help with visa requirements as a separate service.' }
      ]
    },

    freezone: {
      title: 'Free Zone Business Setup in UAE',
      shortDesc: '100% foreign ownership with zero corporate tax for 50 years.',
      price: 3500,
      time: '5-7 days',
      icon: '📦',
      description: 'Access preferential tax treatment, 100% foreign ownership, and import/export advantages. Perfect for trading, manufacturing, and tech companies.',
      
      features: [
        '0% corporate tax for 50 years',
        '100% foreign ownership allowed',
        '100% repatriation of profits',
        'Streamlined customs procedures',
        'Access to special zones and facilities',
        'No local labor restrictions'
      ],
      
      requirements: [
        'Valid passport',
        'Business plan',
        'Initial investment capital',
        'Commercial address (provided by free zone)',
        'Industry-specific certifications (if applicable)'
      ],
      
      included: [
        'Free zone selection and consultation',
        'License preparation',
        'Customs documentation',
        'Import/export credentials',
        'Zone-specific registration',
        'Office/warehouse setup coordination',
        'Bank account opening assistance',
        '3 months dedicated support'
      ],
      
      process: [
        { step: 1, title: 'Zone Selection', description: 'Choose the right free zone for your business type.' },
        { step: 2, title: 'Application', description: 'Submit application with business plan.' },
        { step: 3, title: 'Approval', description: 'Zone authority reviews and approves.' },
        { step: 4, title: 'License Issuance', description: 'Receive free zone business license.' },
        { step: 5, title: 'Setup', description: 'Complete facilities setup and banking.' }
      ],
      
      faq: [
        { q: 'Which free zone should I choose?', a: 'It depends on your industry. We recommend based on your business needs.' },
        { q: 'Can I do business outside the free zone?', a: 'Limited. Most free zones restrict mainland activities. We can advise.' },
        { q: 'Is there a minimum investment?', a: 'Varies by free zone. Typically AED 20,000-100,000.' },
        { q: 'How long does setup take?', a: 'Usually 5-7 days if all documents are ready.' }
      ]
    },

    offshore: {
      title: 'Offshore Company Setup',
      shortDesc: 'International business structure for privacy and asset protection.',
      price: 4500,
      time: '10-14 days',
      icon: '🌍',
      description: 'Establish an international presence with privacy benefits, asset protection, and favorable tax treatment. Ideal for global businesses.',
      
      features: [
        'Privacy and confidentiality',
        'Asset protection structure',
        'International business operations',
        'Favorable tax considerations',
        'Simplified compliance requirements',
        'Multi-currency capabilities'
      ],
      
      requirements: [
        'Valid passport and identification',
        'Business plan',
        'Beneficial ownership documentation',
        'Reference letters',
        'Proof of funds',
        'Residential address'
      ],
      
      included: [
        'Jurisdiction selection consultation',
        'Company registration',
        'Statutory documentation',
        'Registered agent services',
        'Corporate banking assistance',
        'Compliance setup',
        'Documentation package',
        '6 months premium support'
      ],
      
      process: [
        { step: 1, title: 'Jurisdiction Selection', description: 'Choose the best jurisdiction for your goals.' },
        { step: 2, title: 'Documentation', description: 'Prepare all required incorporation documents.' },
        { step: 3, title: 'Registration', description: 'Submit to offshore jurisdiction authorities.' },
        { step: 4, title: 'Approval', description: 'Receive company approval and certificate.' },
        { step: 5, title: 'Banking & Operations', description: 'Set up banking and operational structure.' }
      ],
      
      faq: [
        { q: 'Is offshore banking legal?', a: 'Yes, when done properly with full compliance and transparency.' },
        { q: 'Which jurisdiction is best?', a: 'Depends on your business needs. We advise based on your situation.' },
        { q: 'What are ongoing costs?', a: 'Annual fees vary by jurisdiction, typically AED 2,000-5,000.' },
        { q: 'Can I operate from UAE?', a: 'You need separate mainland registration for UAE operations.' }
      ]
    },

    'bank-account': {
      title: 'UAE Bank Account Opening',
      shortDesc: 'Complete banking solutions for your business.',
      price: 800,
      time: '3-5 days',
      icon: '🏦',
      description: 'Open a business bank account quickly and easily. We coordinate with major UAE banks and handle all documentation.',
      
      features: [
        'Multi-currency accounts available',
        'Trade finance options',
        'Online banking platform',
        'Credit facilities available',
        'Fast approval process',
        'Dedicated relationship manager'
      ],
      
      requirements: [
        'Trade license copy',
        'Passport and ID copies',
        'Proof of address',
        'Business documentation',
        'Initial deposit (varies by bank)'
      ],
      
      included: [
        'Bank selection consultation',
        'Document preparation',
        'Application submission',
        'Follow-up with banks',
        'Account activation support',
        'Online banking setup',
        'Checkbook and card issuance',
        '1 month post-opening support'
      ],
      
      process: [
        { step: 1, title: 'Bank Selection', description: 'Choose the best bank for your needs.' },
        { step: 2, title: 'Documentation', description: 'Prepare bank application documents.' },
        { step: 3, title: 'Submission', description: 'Submit application to bank.' },
        { step: 4, title: 'Verification', description: 'Bank verifies documents and approves.' },
        { step: 5, title: 'Activation', description: 'Activate account and receive banking services.' }
      ],
      
      faq: [
        { q: 'Which bank should I choose?', a: 'We compare rates and features to recommend the best fit.' },
        { q: 'How much initial deposit is needed?', a: 'Typically AED 1,000-10,000 depending on the bank.' },
        { q: 'Can I open remotely?', a: 'Most banks require in-person verification for first account.' },
        { q: 'How long for approval?', a: 'Usually 3-5 days after document submission.' }
      ]
    },

    'vat-accounting': {
      title: 'VAT & Accounting Setup',
      shortDesc: 'Compliance and professional financial management.',
      price: 1200,
      time: '2-3 days',
      icon: '📊',
      description: 'Register for VAT, set up accounting systems, and ensure full compliance. Backed by professional accountants.',
      
      features: [
        'VAT registration and filing',
        'Bookkeeping and accounting',
        'Financial reporting',
        'Tax optimization',
        'Audit preparation',
        'Compliance management'
      ],
      
      requirements: [
        'Trade license copy',
        'Business structure details',
        'Revenue projections',
        'Banking information',
        'Accounting software preference'
      ],
      
      included: [
        'VAT registration (if required)',
        'Accounting system setup',
        'Chart of accounts creation',
        'Monthly bookkeeping templates',
        'Quarterly VAT return templates',
        'Tax calculation templates',
        'Financial report setup',
        '3 months of accounting support'
      ],
      
      process: [
        { step: 1, title: 'Assessment', description: 'Determine VAT requirements for your business.' },
        { step: 2, title: 'Registration', description: 'Register with tax authority if needed.' },
        { step: 3, title: 'System Setup', description: 'Configure accounting software and processes.' },
        { step: 4, title: 'Training', description: 'Train your team on accounting procedures.' },
        { step: 5, title: 'Compliance', description: 'Ensure ongoing compliance and filing.' }
      ],
      
      faq: [
        { q: 'When do I need to register for VAT?', a: 'When annual revenue exceeds AED 375,000.' },
        { q: 'Can you manage VAT quarterly returns?', a: 'Yes, we handle filing and calculations.' },
        { q: 'What about year-end audit?', a: 'We prepare all documentation needed for audit.' },
        { q: 'Do you handle tax optimization?', a: 'Yes, we advise on legitimate tax-saving strategies.' }
      ]
    },

    'golden-visa': {
      title: 'Golden Visa & Residency Support',
      shortDesc: '10-year residency for investors and entrepreneurs.',
      price: 5000,
      time: '15-30 days',
      icon: '🎫',
      description: 'Obtain long-term residency in UAE. Perfect for business owners, investors, and their families.',
      
      features: [
        '10-year residency period',
        'Family sponsorship options',
        'Investment or business-based',
        'Renewal after 10 years',
        'Multiple entry visa included',
        'Flexible conditions'
      ],
      
      requirements: [
        'Valid passport (6+ months validity)',
        'Bank statements and proof of funds',
        'Business registration documents',
        'Investment portfolio details',
        'Character reference letters',
        'Medical fitness certificate'
      ],
      
      included: [
        'Eligibility assessment',
        'Document preparation',
        'Government fee coordination',
        'Application submission',
        'Interview preparation',
        'Status tracking',
        'Approval coordination',
        'Family sponsorship assistance',
        'Post-approval support'
      ],
      
      process: [
        { step: 1, title: 'Assessment', description: 'Determine your eligibility for golden visa.' },
        { step: 2, title: 'Documentation', description: 'Prepare all required documents.' },
        { step: 3, title: 'Submission', description: 'Submit application to authorities.' },
        { step: 4, title: 'Processing', description: 'Authorities review and process application.' },
        { step: 5, title: 'Approval', description: 'Receive visa and setup residency.' }
      ],
      
      faq: [
        { q: 'What investment is required?', a: 'Varies. Real estate or business investment typically from AED 500,000.' },
        { q: 'Can I bring my family?', a: 'Yes, spouses and children can be sponsored.' },
        { q: 'Is the visa renewable?', a: 'Yes, after 10 years you can renew.' },
        { q: 'How long is processing?', a: 'Typically 15-30 days from submission.' }
      ]
    }
  };

  const details = serviceDetails[service] || serviceDetails.mainland;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in your ${details.title} service.`);
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
      {/* HERO */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            <div className="text-5xl">{details.icon}</div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-3">{details.title}</h1>
              <p className="text-xl text-gray-600">{details.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl">
            <div className="bg-white p-4 rounded-lg shadow">
              <DollarSign className="text-blue-600 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">AED {details.price.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Clock className="text-blue-600 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">{details.time}</div>
              <div className="text-sm text-gray-600">Processing Time</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <CheckCircle className="text-green-600 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Start Now
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Ask Questions
            </button>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Features</h3>
              <ul className="space-y-3">
                {details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Support Includes</h3>
              <ul className="space-y-3">
                {details.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What You Need to Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.requirements.map((req, i) => (
              <div key={i} className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📋</div>
                  <div>
                    <div className="font-semibold text-gray-900">{req}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {details.process.map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {i < details.process.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/3 text-2xl text-gray-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {details.faq.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Let's discuss your specific needs and create a customized plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowLeadForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Chat on WhatsApp
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started</h3>
                <p className="text-gray-600 text-sm mb-6">We'll contact you within 2 hours to discuss your needs.</p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="email" placeholder="Your email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="tel" placeholder="WhatsApp number" required value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
                </form>

                <button onClick={() => setShowLeadForm(false)} className="w-full mt-3 text-gray-600 py-2 hover:bg-gray-50 transition">Close</button>
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
};

// Export individual service pages
export function MainlandPage() { return <ServicePage service="mainland" />; }
export function FreezonePage() { return <ServicePage service="freezone" />; }
export function OffshorePage() { return <ServicePage service="offshore" />; }
export function BankAccountPage() { return <ServicePage service="bank-account" />; }
export function VatAccountingPage() { return <ServicePage service="vat-accounting" />; }
export function GoldenVisaPage() { return <ServicePage service="golden-visa" />; }

export default ServicePage;
