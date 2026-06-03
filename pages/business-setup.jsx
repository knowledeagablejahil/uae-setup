'use client'

import React, { useState } from 'react'
import { CheckCircle, ChevronDown, ArrowRight, TrendingUp, Clock, Shield, DollarSign } from 'lucide-react'

export default function BusinessSetup() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeComparisonTab, setActiveComparisonTab] = useState('mainland')

  // ===== SETUP OPTIONS DATA =====
  const setupComparisonData = {
    mainland: {
      name: 'Mainland Company Formation',
      description: 'Establish a UAE-registered company with operations across all emirates. Access local markets directly without zone restrictions.',
      advantages: [
        'Unrestricted business activities',
        'Direct consumer market access',
        'Multiple physical locations allowed',
        'No jurisdiction-specific limitations',
        'Easier customer base expansion',
        '9% corporate tax (above AED 375K profit)'
      ],
      investment: 'AED 2,500 - 4,500',
      timeline: '7-10 business days',
      bestFor: 'Retail, hospitality, healthcare, professional services, traditional businesses',
      ownership: 'Can include local partner (not mandatory post-2020)',
      taxation: 'Standard UAE corporate tax regime applies'
    },
    freezone: {
      name: 'Free Zone Company Setup',
      description: 'Establish your enterprise in specialized zones offering 100% tax exemption, full foreign ownership, and global market access.',
      advantages: [
        '0% corporate tax for 50 years',
        '100% foreign ownership guaranteed',
        'Zero customs duties on imports/exports',
        '1,500+ permitted business activities',
        'Strategic location advantages',
        'Flexible workspace options'
      ],
      investment: 'AED 3,500 - 5,500',
      timeline: '5-7 business days',
      bestFor: 'Trading, IT services, logistics, e-commerce, manufacturing, consultancy',
      ownership: '100% foreign investor control',
      taxation: 'Zero corporate tax throughout 50-year license'
    },
    offshore: {
      name: 'Offshore Company Registration',
      description: 'Create an international business entity registered outside UAE jurisdiction. Ideal for multi-national operations and asset structuring.',
      advantages: [
        'International asset protection',
        'Privacy and confidentiality',
        'Strategic tax planning',
        'Multi-jurisdiction operations',
        'Enhanced business credibility',
        'Flexible capital structure'
      ],
      investment: 'AED 4,500 - 8,000',
      timeline: '10-14 business days',
      bestFor: 'International trading, investment holding, real estate, professional networks',
      ownership: '100% foreign control',
      taxation: 'Jurisdiction-dependent (typically low/zero tax)'
    }
  }

  // ===== LICENSE TYPES =====
  const licenseCategories = [
    {
      icon: '💼',
      name: 'Professional Service License',
      activities: 'Consultancy, advisory, training, talent management, IT consulting',
      requirements: 'Professional qualification or experience documentation',
      costRange: 'AED 1,200 - 2,500',
      advantages: 'Low overhead, scalable, location-flexible',
      idealBusinesses: 'Consultants, freelancers, agencies, advisors'
    },
    {
      icon: '🛍️',
      name: 'Commercial Trading License',
      activities: 'Retail, wholesale, import/export, distribution, supply chain',
      requirements: 'Business registration, product specifications',
      costRange: 'AED 1,500 - 3,000',
      advantages: 'Multiple product categories, established supplier networks',
      idealBusinesses: 'Retailers, distributors, wholesalers, traders'
    },
    {
      icon: '📱',
      name: 'E-Commerce Business License',
      activities: 'Online retail, digital products, B2B platforms, app-based services',
      requirements: 'Website documentation, business model explanation',
      costRange: 'AED 1,000 - 2,000',
      advantages: 'Minimal physical presence, global reach, scalable operations',
      idealBusinesses: 'Online retailers, digital entrepreneurs, SaaS providers'
    },
    {
      icon: '🏭',
      name: 'General Trading License',
      activities: 'Multiple product categories, unlimited sectors, diverse goods',
      requirements: 'Comprehensive business registration',
      costRange: 'AED 1,800 - 3,500',
      advantages: 'Maximum flexibility, rapid sector diversification',
      idealBusinesses: 'Multi-sector enterprises, portfolio businesses'
    }
  ]

  // ===== COMPANY REGISTRATION ENTITIES =====
  const legalEntities = [
    {
      structure: 'Sole Establishment (FZE)',
      shareholders: '1 individual or corporate owner',
      liability: 'Personal liability (can be mitigated)',
      advantages: 'Simple management, complete control, quick setup',
      costs: 'Most economical option',
      governance: 'Owner makes all operational decisions'
    },
    {
      structure: 'Limited Liability Company (LLC)',
      shareholders: '2-50 registered members',
      liability: 'Limited to capital contribution',
      advantages: 'Risk protection, formal structure, investor-friendly',
      costs: 'Moderate overhead, clear accountability',
      governance: 'Managed by designated directors'
    },
    {
      structure: 'Public Joint Stock Company (PJSC)',
      shareholders: 'Multiple public shareholders',
      liability: 'Limited corporate liability',
      advantages: 'Capital raising capability, prestige, transparency',
      costs: 'Higher compliance, regulatory oversight',
      governance: 'Board of directors, shareholder meetings'
    },
    {
      structure: 'Branch Office',
      shareholders: 'Parent company (existing business)',
      liability: 'Linked to parent company',
      advantages: 'Maintain parent company identity, simplified setup',
      costs: 'Lower establishment costs',
      governance: 'Parent company controls operations'
    }
  ]

  // ===== FORMATION PROCESS =====
  const formationSteps = [
    {
      phase: 'Phase 1: Strategic Planning',
      title: 'Business Structure Assessment',
      details: [
        'Evaluate your business model against UAE regulatory requirements',
        'Analyze mainland vs. free zone vs. offshore advantages for your industry',
        'Project financial benefits and tax implications of each structure',
        'Determine optimal ownership model and capitalization strategy'
      ],
      duration: '2-3 business days',
      documents: 'Business plan, ownership structure, activity description'
    },
    {
      phase: 'Phase 2: Name & Documentation Preparation',
      title: 'Company Registration Groundwork',
      details: [
        'Reserve your preferred company names with government authorities',
        'Prepare comprehensive business registration documentation',
        'Draft articles of association and memorandum',
        'Compile required identification and authorization documents'
      ],
      duration: '3-5 business days',
      documents: 'Name reservation approval, organizational documents'
    },
    {
      phase: 'Phase 3: Regulatory Approvals',
      title: 'Government Authority Submissions',
      details: [
        'Submit registration applications to relevant authorities',
        'Obtain necessary department-specific approvals',
        'Secure trade license from Department of Economic Development',
        'Finalize all regulatory clearances and permits'
      ],
      duration: '4-6 business days',
      documents: 'Trade license, regulatory approvals, business registration certificate'
    },
    {
      phase: 'Phase 4: Banking & Compliance',
      title: 'Corporate Banking & Financial Setup',
      details: [
        'Open corporate bank account with leading UAE banks',
        'Set up accounting and bookkeeping infrastructure',
        'Implement compliance management systems',
        'Configure financial reporting and tax filing systems'
      ],
      duration: '3-5 business days',
      documents: 'Bank account details, compliance certifications'
    },
    {
      phase: 'Phase 5: Immigration & Operations',
      title: 'Visa Processing & Business Launch',
      details: [
        'Process investor residency visa applications',
        'Arrange employee visa sponsorships as needed',
        'Establish operational office (physical or virtual)',
        'Finalize business systems and begin operations'
      ],
      duration: '5-7 business days',
      documents: 'Visa approvals, office setup documentation'
    }
  ]

  // ===== CRITICAL DOCUMENTS =====
  const documentRequirements = [
    {
      category: 'Personal Identification (Individual Owners)',
      details: [
        'Valid passport with minimum 6 months remaining validity',
        'Clear photocopy of all passport pages',
        'Visa page and Emirates ID (if UAE resident)',
        'Recent photograph (4x6 cm, white background)',
        'Proof of residential address'
      ]
    },
    {
      category: 'Business Documentation (All Applicants)',
      details: [
        'Detailed business plan with 3-year projections',
        'List of 3-5 preferred company names',
        'Description of primary business activities',
        'Organizational structure and management plan',
        'Capital investment documentation'
      ]
    },
    {
      category: 'Corporate Documents (Corporate Owners)',
      details: [
        'Certificate of incorporation from home country',
        'Recent business license or trade registration',
        'Board resolution authorizing UAE branch/subsidiary',
        'Certificate of good standing',
        'Ultimate Beneficial Owner (UBO) documentation'
      ]
    },
    {
      category: 'Financial Documentation (All Structures)',
      details: [
        'Bank reference letter or proof of funds',
        'Capital injection evidence',
        'Financial statements (for corporate investors)',
        'Tax clearance from home country (if applicable)',
        'Auditor\'s report (for corporate shareholders)'
      ]
    }
  ]

  // ===== COMPREHENSIVE FAQS =====
  const comprehensiveFaqs = [
    {
      question: 'What is the difference between mainland company formation and free zone company setup?',
      answer: 'Mainland companies operate across the UAE with unrestricted business activities, direct local market access, and pay 9% corporate tax (above AED 375K profit). Free zone companies enjoy 100% foreign ownership, zero corporate tax for 50 years, and import/export advantages but operate within zone boundaries. Choose mainland for retail/services targeting locals; choose free zone for trading, tech, or export-focused businesses.'
    },
    {
      question: 'How long does UAE business registration typically require from start to completion?',
      answer: 'Standard company formation takes 7-10 business days for mainland structures and 5-7 days for free zones. This assumes complete documentation submission. Expedited processing available in 3-5 days. Timeline includes government approvals, license issuance, and initial compliance setup. Bank account opening adds 3-5 additional days.'
    },
    {
      question: 'Is a local partner mandatory for UAE company formation after the 2020 regulatory changes?',
      answer: 'No. As of 2020, most business activities in mainland and all activities in free zones allow 100% foreign ownership without mandatory local sponsorship. Previously, many sectors required a 51% UAE national partner. Current regulations offer complete operational control to foreign investors across virtually all sectors.'
    },
    {
      question: 'What are the exact corporate tax rates in UAE for newly registered businesses?',
      answer: 'UAE implemented 9% corporate tax on annual profits exceeding AED 375,000 for mainland and onshore businesses. Profits below this threshold remain untaxed. Free zone companies enjoy 0% tax for their entire 50-year license period. Proper tax structuring during company formation can significantly optimize your tax position.'
    },
    {
      question: 'Do I require a physical office location for UAE business registration?',
      answer: 'Requirements vary: Most free zones don\'t mandate office leasing—virtual operations or co-working spaces work. Mainland companies need a registered business address (can be virtual in some emirates). Office space is optional for consultancy and service businesses. This flexibility enables cost-effective startup operations while scaling space as you grow.'
    },
    {
      question: 'How does corporate bank account opening work following UAE company registration?',
      answer: 'Post-registration, your company receives all necessary documentation (trade license, registration certificate, beneficial owner documentation) required by banks. Most UAE banks open accounts within 3-5 business days once documents are submitted. We coordinate banking directly to expedite account activation, ensuring business debit cards and online banking are operational immediately.'
    },
    {
      question: 'What business license categories exist, and which is right for my company?',
      answer: 'Four primary categories exist: Professional Service License (consultancy, advisory), Commercial Trading License (import/export, retail), E-Commerce License (online selling), and General Trading License (multiple sectors). Selection impacts permitted activities, cost structure, and operational flexibility. Your industry and business model determine the optimal license category.'
    },
    {
      question: 'Can I sponsor employee visas and obtain investor residency following company formation?',
      answer: 'Yes. Post-registration, your company can sponsor employee visas based on company size and salary packages. As business owner, you\'re eligible for investor residency visas based on capital investment and business activity. Both processes begin immediately after company registration completion.'
    },
    {
      question: 'Is it possible to restructure or change my company formation after initial registration?',
      answer: 'Yes, though restructuring involves additional compliance and costs. Many successful businesses start with one structure and transition as they scale. Converting between mainland and free zone, or restructuring ownership, is possible but requires regulatory approvals. We recommend selecting optimal structure initially to minimize future restructuring costs.'
    },
    {
      question: 'What ongoing compliance obligations exist after UAE company registration?',
      answer: 'Mainland companies require annual financial statements and may need audits if revenue exceeds thresholds. Free zone companies have lighter obligations but must maintain accounting records. All businesses file government returns and pay applicable taxes. We provide ongoing compliance support ensuring you meet regulatory deadlines and requirements.'
    },
    {
      question: 'How do I establish a free zone company setup in Dubai versus other emirates?',
      answer: 'Dubai offers 50+ specialized free zones (DIFC, DMCC, DWTC, JLT) each serving different industries. Other emirates offer alternatives like Ajman, RAKEZ, and Abu Dhabi zones. Each has unique advantages—Dubai provides prestige and ecosystem, while other emirates offer lower costs. Industry and budget determine the optimal zone selection.'
    },
    {
      question: 'What are the advantages of offshore company registration for international business operations?',
      answer: 'Offshore companies provide international asset protection, operational privacy, strategic tax optimization, and multi-jurisdiction credibility. Ideal for companies conducting business across multiple countries, holding international assets, or structuring complex business arrangements. Pair with UAE operations for regional market access.'
    },
    {
      question: 'How much does business setup in UAE cost, including all fees and ancillary services?',
      answer: 'Mainland company formation: AED 2,500-4,500. Free zone setup: AED 3,500-5,500. Offshore registration: AED 4,500-8,000. These cover government fees, documentation, and registration. Banking (AED 500-1,000), visa processing (AED 200-500), and office setup are additional. Total investment: AED 7,000-15,000 for complete operational setup.'
    },
    {
      question: 'What regulatory changes should new business owners expect for 2025-2026?',
      answer: 'UAE continues regulatory modernization: expanded foreign ownership allowances, streamlined digital documentation, enhanced corporate governance standards, and increased ESG compliance requirements. We monitor regulatory developments continuously and ensure all companies remain compliant with current and emerging requirements.'
    },
    {
      question: 'Can I maintain my foreign business while establishing a UAE company formation?',
      answer: 'Absolutely. Many entrepreneurs maintain their home country business while establishing UAE operations. This structure provides market diversification, currency advantages, and operational flexibility. Proper tax reporting and international compliance requirements apply. We advise on structuring arrangements that optimize both operations.'
    },
    {
      question: 'How does the visa sponsorship process connect to my UAE business registration?',
      answer: 'Once your company is registered, you can immediately begin visa applications. Employee sponsorship requires company registration, employment contract, and salary confirmation. Investor visas require capital investment documentation. Processing typically takes 2-4 weeks for complete visa approval after company registration.'
    },
    {
      question: 'What accounting and bookkeeping systems must be implemented after company formation?',
      answer: 'UAE requires all registered companies to maintain accounting records in Arabic or English, with annual financial statements prepared per UAE accounting standards. Systems must track income, expenses, assets, and liabilities. Many businesses implement cloud-based accounting software for real-time financial visibility and compliance reporting.'
    },
    {
      question: 'Should I incorporate as a mainland company or free zone company for my specific industry?',
      answer: 'Mainland companies suit retail, hospitality, professional services, and local-focused businesses. Free zones excel for trading, technology, logistics, and export-oriented businesses. Your customer base, product/service type, supply chain, and growth strategy determine the optimal selection. A strategic consultation clarifies the best structure.'
    }
  ]

  // ===== VALUE PROPOSITIONS =====
  const ourAdvantages = [
    {
      icon: <TrendingUp className="text-blue-600" size={28} />,
      title: 'Accelerated Company Registration',
      description: 'Expedited processing through established government relationships. Business registration completed in days, not weeks. Parallel processing of requirements accelerates your launch timeline significantly.'
    },
    {
      icon: <Shield className="text-green-600" size={28} />,
      title: 'Regulatory Compliance Excellence',
      description: 'Expert guidance ensuring UAE regulatory adherence from formation through operations. Proactive identification of compliance obligations. Ongoing support for regulatory changes and updates.'
    },
    {
      icon: <DollarSign className="text-yellow-600" size={28} />,
      title: 'Tax Optimization Strategy',
      description: 'Customized tax planning integrated into company structure decisions. Analysis of mainland vs. free zone tax implications. Strategies maximizing profitability and minimizing tax burden.'
    },
    {
      icon: <Clock className="text-purple-600" size={28} />,
      title: 'End-to-End Service Management',
      description: 'Single point of contact through entire business formation journey. Coordination across government, banking, and immigration processes. Post-incorporation operational support and guidance.'
    },
    {
      icon: <CheckCircle className="text-red-600" size={28} />,
      title: 'Banking & Financial Setup',
      description: 'Coordination with leading UAE banks for smooth account opening. Support with KYC compliance and financial documentation. Business banking optimized for your operational and international needs.'
    },
    {
      icon: <ArrowRight className="text-indigo-600" size={28} />,
      title: 'Personalized Growth Strategy',
      description: 'Customized recommendations aligned with your business model and vision. Industry-specific guidance and market insights. Roadmap for scaling operations from startup to enterprise.'
    }
  ]

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert UAE Business Setup & Company Formation Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-4">
            Complete guidance for business registration in Dubai and across the UAE. From mainland company formation to free zone setup, we simplify every step of your entrepreneurial journey.
          </p>
          <p className="text-lg text-blue-100 max-w-3xl mb-8">
            Establish your UAE company in 5-10 days with transparent pricing, expert compliance, and dedicated support from registration through operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2 justify-center">
              Get Free Consultation <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5-10</div>
              <p className="text-gray-700">Days to Company Formation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Free Zones Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0%</div>
              <p className="text-gray-700">Corporate Tax (Free Zone)</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Foreign Ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP OPTIONS COMPARISON */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Strategic Paths for Starting a Business in UAE
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Choose the company formation structure that aligns with your business model, industry, and growth objectives. Each offers distinct advantages for different entrepreneurial scenarios.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {['mainland', 'freezone', 'offshore'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveComparisonTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeComparisonTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tab === 'mainland' && 'Mainland Formation'}
                {tab === 'freezone' && 'Free Zone Setup'}
                {tab === 'offshore' && 'Offshore Structure'}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {setupComparisonData[activeComparisonTab].name}
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  {setupComparisonData[activeComparisonTab].description}
                </p>
                <div className="space-y-3 mb-8">
                  {setupComparisonData[activeComparisonTab].advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={22} />
                      <span className="text-gray-800">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Investment Range</p>
                    <p className="text-2xl font-bold text-blue-600">{setupComparisonData[activeComparisonTab].investment}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Formation Timeline</p>
                    <p className="text-2xl font-bold text-blue-600">{setupComparisonData[activeComparisonTab].timeline}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Best For</p>
                    <p className="text-gray-800">{setupComparisonData[activeComparisonTab].bestFor}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Ownership Structure</p>
                    <p className="text-gray-800">{setupComparisonData[activeComparisonTab].ownership}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Taxation</p>
                    <p className="text-gray-800">{setupComparisonData[activeComparisonTab].taxation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL ENTITIES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            UAE Company Structures: Legal Entities Explained
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {legalEntities.map((entity, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{entity.structure}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Shareholders</p>
                    <p className="text-gray-800">{entity.shareholders}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Liability</p>
                    <p className="text-gray-800">{entity.liability}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Key Advantages</p>
                    <p className="text-gray-800">{entity.advantages}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase">Cost Structure</p>
                    <p className="text-gray-800">{entity.costs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSE TYPES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Business License Categories for UAE Company Registration
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Each license type provides different operational capabilities and activity permissions. Select based on your primary business activities and growth strategy.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {licenseCategories.map((license, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-8 border border-blue-200 hover:border-blue-400 transition">
                <div className="text-5xl mb-4">{license.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{license.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Activities</p>
                    <p className="text-gray-600">{license.activities}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cost</p>
                    <p className="text-blue-600 font-semibold">{license.costRange}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Best For</p>
                    <p className="text-gray-600">{license.idealBusinesses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION PROCESS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The Complete 5-Phase UAE Business Formation Process
          </h2>
          <div className="space-y-6">
            {formationSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">{step.phase}</p>
                      <h3 className="text-2xl font-bold mt-2">{step.title}</h3>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
                      {i + 1}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase mb-3">Key Activities</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase mb-3">Timeline</p>
                      <p className="text-lg font-bold text-blue-600 mb-6">{step.duration}</p>
                      <p className="text-sm font-semibold text-gray-600 uppercase mb-3">Documents Produced</p>
                      <p className="text-gray-700 text-sm">{step.documents}</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Deliverables</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ Approval documentation</li>
                        <li>✓ Regulatory clearances</li>
                        <li>✓ Progress reports</li>
                        <li>✓ Next phase guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION REQUIREMENTS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Complete Documentation Checklist for UAE Company Registration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {documentRequirements.map((section, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <ul className="space-y-3">
                  {section.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-800">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ELEVATE 360 */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Choose Elevate 360 for Your Business Setup?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center mb-12">
            We go beyond standard registration services. Our comprehensive approach ensures your business launch is strategic, compliant, and positioned for growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourAdvantages.map((item, i) => (
              <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-blue-300 border-opacity-30 hover:bg-opacity-20 transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Comprehensive FAQ: Business Formation & Company Registration in UAE
          </h2>
          <p className="text-gray-700 text-center mb-12">
            Find answers to common questions about starting a business in UAE, company formation requirements, and setup procedures.
          </p>
          <div className="space-y-4">
            {comprehensiveFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-blue-50 transition text-left font-semibold text-gray-900"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    size={22}
                    className={`text-blue-600 transition flex-shrink-0 ${expandedFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-5 bg-blue-50 border-t border-gray-200">
                    <p className="text-gray-800 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your UAE Business Today?
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Schedule a free consultation with our business formation specialists. We'll evaluate your requirements and recommend the optimal company structure for your success.
          </p>
          <p className="text-lg text-blue-100 mb-8">
            Formation timelines starting from 5-10 days. Transparent pricing. Complete support from registration through operational launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Schedule Free Consultation
            </button>
            <a
              href="https://wa.me/971503947208?text=Hello%20Elevate%20360%2C%20I%20want%20to%20discuss%20UAE%20business%20setup%20options"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-center text-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
