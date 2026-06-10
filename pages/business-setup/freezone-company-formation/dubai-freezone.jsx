export const metadata = {
  title: 'Dubai Free Zone Overview | Elevate 360',
  description: 'Set up your business in Dubai\'s free zones with 100% ownership, zero tax, and expert guidance from Elevate 360. Explore DIFC, DMCC, JAFZA, IFZA, Meydan and more.',
};

const whatsapp = 'https://wa.me/971503947208';

const reasons = [
  {
    number: '1',
    title: '100% Foreign Ownership Across All Sectors',
    desc: 'Every Dubai free zone offers full foreign ownership with no requirement for a local sponsor — ensuring investors retain full control over their company\'s equity, direction, and profits.',
  },
  {
    number: '2',
    title: 'Tax-Free Environment with Customs & VAT Exemptions',
    desc: 'Dubai free zones provide complete exemption from corporate and personal income taxes, as well as import/export customs duties. Certain zones also offer VAT relief on designated business transactions.',
  },
  {
    number: '3',
    title: 'Sector-Specific Free Zones with Global Prestige',
    desc: 'Whether it\'s finance (DIFC), commodities (DMCC), logistics (JAFZA), or digital services (Meydan/IFZA), Dubai\'s free zones are purpose-built clusters with tailored licensing and infrastructure.',
  },
  {
    number: '4',
    title: 'Proximity to Global Markets',
    desc: 'Dubai\'s world-class airports, seaports, and road infrastructure offer direct trade access to the Middle East, Africa, Asia, and Europe — making it the ultimate hub for regional and international operations.',
  },
  {
    number: '5',
    title: 'Strategic Advantage with "One Freezone Passport"',
    desc: 'A Dubai government initiative allows cross-operation between free zones under a single license — eliminating redundant licenses, streamlining compliance, and fast-tracking multi-zone business growth.',
  },
  {
    number: '6',
    title: 'Innovation-Friendly Legal Frameworks',
    desc: 'Zones like DIFC operate under common law systems, while DMCC and IFZA offer robust digital-first company setup processes — delivering speed, clarity, and security to investors.',
  },
];

const entityTypes = [
  {
    title: 'FZ-LLC (Free Zone Limited Liability Company)',
    desc: 'The most common structure for single or multiple shareholders. Offers full liability protection with flexible ownership.',
  },
  {
    title: 'FZE (Free Zone Establishment)',
    desc: 'Designed for single-shareholder ownership. Simple structure ideal for solo entrepreneurs and individual investors.',
  },
  {
    title: 'Branch of Foreign/UAE Company',
    desc: 'No share capital required. Ideal for expanding existing operations into the Dubai market without forming a new entity.',
  },
];

const licenses = [
  { title: 'Commercial / Trading License', desc: 'For local and international trading, import/export, and distribution.' },
  { title: 'Consultancy / Professional License', desc: 'For service providers, agencies, advisory firms, and professionals.' },
  { title: 'Industrial License', desc: 'For light manufacturing, production, packaging, and assembly (e.g. JAFZA).' },
  { title: 'Media License', desc: 'For digital, broadcasting, content creation, and advertising (e.g. DMC, DIC).' },
  { title: 'E-Commerce License', desc: 'For digital-first platforms, dropshipping, and online marketplaces.' },
  { title: 'Education License', desc: 'For training institutes, EdTech platforms, and learning hubs.' },
  { title: 'Tech & Innovation License', desc: 'For AI, blockchain, SaaS, and R&D companies (Meydan, IFZA, DSO).' },
  { title: 'Finance License', desc: 'For banks, fintech, and wealth management firms (DIFC only).' },
  { title: 'Freelancer Permit', desc: 'For individuals operating independently under a trade name.' },
];

const steps = [
  {
    number: '1',
    title: 'Identify the Ideal Free Zone & Activity',
    desc: 'Our team consults with you to match your industry with the best-suited Dubai free zone — balancing costs, facilities, and licensing ease.',
  },
  {
    number: '2',
    title: 'Choose Legal Entity Type & Reserve Trade Name',
    desc: 'We help reserve your trade name and select between FZ-LLC, FZE, or branch options based on your shareholding structure and business goals.',
  },
  {
    number: '3',
    title: 'Secure Initial Approval & Documentation',
    desc: 'We handle the submission of shareholder IDs, passport copies, business plans (if required), and all other initial requirements.',
  },
  {
    number: '4',
    title: 'Lease Office Space or Select Virtual Setup',
    desc: 'Choose from virtual offices, flex-desks, executive suites, or large-scale warehouses — tailored to your business model and visa needs.',
  },
  {
    number: '5',
    title: 'Submit Final Documents & Receive License',
    desc: 'We finalize all filings, coordinate directly with the free zone authority, and deliver your official business license within days.',
  },
  {
    number: '6',
    title: 'Banking, Visas & Launch',
    desc: 'We assist with corporate bank account opening, UAE residence visas, Emirates ID, and full onboarding to kickstart operations smoothly.',
  },
];

const zones = [
  {
    name: 'DIFC',
    full: 'Dubai International Financial Centre',
    desc: "Dubai's most prestigious international financial center governed by English common law. Ideal for banking, fintech, family offices, and investment firms.",
    link: '/business-setup/difc-free-zone',
  },
  {
    name: 'DMCC',
    full: 'Dubai Multi Commodities Centre',
    desc: 'Global Free Zone of the Year multiple times. Ideal for commodities, crypto, trading, and over 21,000 registered companies.',
    link: '/business-setup/dmcc-free-zone',
  },
  {
    name: 'JAFZA',
    full: 'Jebel Ali Free Zone',
    desc: 'One of the oldest and largest UAE free zones, located next to Jebel Ali Port. Perfect for logistics, shipping, distribution, and large-scale trade.',
    link: '/business-setup/jafza-freezone',
  },
  {
    name: 'IFZA',
    full: 'International Free Zone Authority',
    desc: 'Known for affordability, wide activity range, and a digital-first approach. Popular among startups, freelancers, and SMEs.',
    link: '/business-setup/ifza-freezone',
  },
  {
    name: 'Meydan',
    full: 'Meydan Free Zone',
    desc: 'Paperless, modern, and cost-effective. Great for e-commerce, consultancy, tech, and digital businesses seeking a flexible setup.',
    link: '/business-setup/meydan-freezone',
  },
  {
    name: 'DSO',
    full: 'Dubai Silicon Oasis',
    desc: "The tech park of Dubai. Great for R&D, electronics, IT services, and innovation-focused companies seeking a purpose-built ecosystem.",
    link: '/business-setup/dubai-silicon-oasis',
  },
  {
    name: 'DMC',
    full: 'Dubai Media City / Internet City / Studio City',
    desc: 'Perfect for media production, digital marketing agencies, content creators, influencers, and filmmakers.',
    link: '/business-setup/dubai-media-city',
  },
  {
    name: 'DWTC',
    full: 'Dubai World Trade Centre Free Zone',
    desc: "Built for global trading companies, events, and import-export hubs. Strategically located in Dubai's commercial heart.",
    link: '/business-setup/dubai-world-trade-centre',
  },
  {
    name: 'Dubai South',
    full: 'Dubai South Free Zone',
    desc: 'Located near Al Maktoum International Airport and Expo City — ideal for aviation, logistics, and cargo-based operations.',
    link: '/business-setup/dubai-south-freezone',
  },
];

const whyUs = [
  { title: 'Extensive Experience', desc: 'Years of hands-on expertise navigating UAE free zone regulations across all major jurisdictions.' },
  { title: 'End-to-End Service', desc: 'From initial consultation to license delivery, visa processing, and banking — we handle everything.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees. You receive a clear, all-inclusive quote before we begin any work.' },
  { title: 'Global Perspective', desc: 'We serve clients from over 30 countries who rely on our cross-border business acumen.' },
  { title: 'Personalized Approach', desc: 'Every client receives a tailored strategy aligned with their industry, goals, and budget.' },
  { title: 'Comprehensive Network', desc: 'Our relationships with free zone authorities, banks, and legal partners accelerate your setup.' },
];

const faqs = [
  {
    q: 'How do I choose the right Dubai free zone?',
    a: "It depends on your activity, budget, location preference, and long-term goals. DMCC suits traders, DIFC is ideal for finance, and Meydan or IFZA are great for startups and digital businesses. Our team at Elevate 360 helps you choose strategically based on your exact situation.",
  },
  {
    q: 'Can a Dubai free zone company operate across other zones or the mainland?',
    a: 'Yes. With the One Freezone Passport initiative, inter-zone operations are now streamlined. For mainland activity, a local distributor arrangement or branch setup is required — our team can guide you through both options.',
  },
  {
    q: 'How fast can I get a license in Dubai free zones?',
    a: 'With Elevate 360, setup can be completed in as little as 3–7 business days, depending on your selected zone and business activity.',
  },
  {
    q: "What's the cost of setting up a Dubai free zone company?",
    a: 'Costs vary by zone. IFZA and Meydan are more budget-friendly options, while DIFC, DMCC, and JAFZA are premium. Contact us for a transparent, all-inclusive quote tailored to your needs.',
  },
  {
    q: 'Can I open a bank account easily with a Dubai free zone company?',
    a: "Yes, however bank requirements are thorough. Our banking support team helps prepare all documents, manage the interview process, and significantly improve your approval chances.",
  },
  {
    q: 'Is corporate tax applicable to Dubai free zone companies?',
    a: "If your company qualifies as a Free Zone Person under UAE Corporate Tax law and doesn't transact with the UAE mainland, you can still benefit from 0% corporate tax. Elevate 360 advises on compliant structures to keep you protected.",
  },
];

export default function DubaiFreeZone() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] py-20 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-200 uppercase tracking-widest text-sm font-semibold mb-4">Business Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Dubai Free Zone Business Setup</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Launch, scale, and thrive in the UAE's business powerhouse. Over 25 specialised zones — 100% ownership, zero tax, world-class infrastructure.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#C9A84C] font-semibold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Why Dubai Free Zones */}
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-4">Why Dubai's Free Zones Remain the Gold Standard</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Six compelling reasons global investors choose Dubai free zones as their preferred base of operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.number} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] flex items-center justify-center text-white font-bold text-sm mb-4">
                  {r.number}
                </div>
                <h3 className="text-lg font-semibold text-[#3d0a14] mb-2">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Entity Options */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Navigating Setup in Dubai Free Zones</h2>
            <p className="text-[#C9A84C] font-semibold text-lg">Legal Entity Options</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entityTypes.map((e) => (
              <div key={e.title} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <div className="w-5 h-5 bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] rounded-sm" />
                </div>
                <h3 className="text-base font-semibold text-[#3d0a14] mb-2">{e.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Licenses */}
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Available Licenses by Activity</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Dubai free zones cover a wide spectrum of business activities. Choose the license that matches your model.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {licenses.map((l) => (
              <div key={l.title} className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm hover:border-[#C9A84C] transition-all duration-200 flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-950 mb-1 text-sm">{l.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Step-by-Step Company Formation Process in Dubai</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our streamlined process gets your Dubai free zone company operational as quickly as possible.</p>
          </div>
          <div className="space-y-5">
            {steps.map((s) => (
              <div key={s.number} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200 flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {s.number}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#3d0a14] mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Free Zones */}
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Top Dubai Free Zones to Consider</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Each free zone has a unique character. We help you identify the one best aligned with your business goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((z) => (
              <div key={z.name} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {z.name}
                  </div>
                  <h3 className="text-base font-semibold text-[#3d0a14] mb-2">{z.full}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{z.desc}</p>
                </div>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A84C] text-sm font-semibold hover:underline"
                >
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elevate 360 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">How Elevate 360 Helps</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Elevate 360 simplifies every step of your UAE business formation journey — from initial planning to long-term operational support. We're not just consultants; we're your on-ground execution partners with deep expertise in UAE legal, regulatory, and commercial frameworks.
            </p>
          </div>
          <div className="text-center mb-12 mt-8">
            <h3 className="text-2xl font-bold text-slate-950 mb-3">Why Choose Elevate 360?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We go beyond basic company registration — providing strategic guidance, legal clarity, and operational support tailored for global entrepreneurs entering the UAE market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <div className="w-4 h-4 bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] rounded-full" />
                </div>
                <h3 className="font-semibold text-slate-950 mb-2">{w.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">FAQs — Dubai Free Zone Setup</h2>
            <p className="text-slate-600">Common questions from entrepreneurs setting up in Dubai free zones.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200">
                <h3 className="font-semibold text-slate-950 mb-2">{f.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] py-16 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Set Up in Dubai?</h2>
          <p className="text-amber-100 mb-8 text-lg">
            Talk to our specialists today. We'll match you with the right free zone and guide you through every step.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#C9A84C] font-semibold px-10 py-3 rounded-xl hover:bg-amber-50 transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
