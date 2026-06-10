export const metadata = {
  title: 'Abu Dhabi Free Zone Overview | Elevate 360',
  description: "Set up your business in Abu Dhabi's free zones with 100% ownership, zero tax, and expert guidance from Elevate 360. Explore ADGM, KIZAD, Masdar City, twofour54 and more.",
};

const whatsapp = 'https://wa.me/971503947208';

const entityTypes = [
  {
    title: 'FZ-LLC (Free Zone Limited Liability Company)',
    desc: 'A separate legal entity with its own capital and structure. Suitable for single or multiple shareholders seeking full liability protection.',
  },
  {
    title: 'FZE (Free Zone Establishment)',
    desc: 'A single-shareholder entity — ideal for solo founders, individual investors, or holding companies looking for a streamlined structure.',
  },
  {
    title: 'Branch of Foreign or UAE Company',
    desc: 'Perfect for established entities seeking a physical presence in Abu Dhabi without forming a new standalone company.',
  },
];

const licenses = [
  {
    title: 'Commercial License',
    desc: 'For trading, distribution, and general import/export activities across local and international markets.',
  },
  {
    title: 'Service / Consultancy License',
    desc: 'For advisory, consulting, and management service businesses operating across sectors.',
  },
  {
    title: 'Industrial License',
    desc: 'For manufacturing, processing, and assembly operations — predominantly available in KIZAD.',
  },
  {
    title: 'Financial License',
    desc: 'For investment firms, asset managers, and banks. Exclusively available within ADGM.',
  },
  {
    title: 'E-Commerce / Digital License',
    desc: 'For digital-first ventures including online platforms, marketplaces, and app-based businesses.',
  },
  {
    title: 'Green License',
    desc: 'For clean-tech companies, renewables, and sustainable innovation — primarily based in Masdar City.',
  },
  {
    title: 'Media / Education / Tech',
    desc: 'Sector-specific licenses supported by tailored ecosystems within dedicated free zone environments.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Choose Your Free Zone & Business Activity',
    desc: 'Evaluate ADGM for finance, KIZAD for industrial, Masdar for clean tech, or other zones based on your sector and operational scope.',
  },
  {
    number: '2',
    title: 'Select Entity Type & Reserve Trade Name',
    desc: 'Finalise whether you need an LLC, FZE, or branch structure. Our team handles all name approvals and conflict checks.',
  },
  {
    number: '3',
    title: 'Apply for Preliminary Approval',
    desc: 'We submit your application, activity plan, and shareholder details to the relevant Abu Dhabi free zone authority.',
  },
  {
    number: '4',
    title: 'Lease Office or Industrial Space',
    desc: 'Choose between flex-desks, physical offices, large-scale warehouses, or industrial land — aligned with your visa and operational requirements.',
  },
  {
    number: '5',
    title: 'Submit Legal Documents & Register Entity',
    desc: 'Includes MOA, AoA, passport copies, board resolutions, and all compliance checks required by the respective zone.',
  },
  {
    number: '6',
    title: 'Receive Business License & Establish Operations',
    desc: 'Once approved, you receive your license, establish corporate bank accounts, apply for UAE residence visas, and begin full operations.',
  },
];

const zones = [
  {
    name: 'ADGM',
    full: 'Abu Dhabi Global Market',
    desc: 'A globally recognised financial centre built on English common law. Ideal for banking, fintech, asset management, holding companies, and family offices.',
    link: '/business-setup/adgm-abu-dhabi-global-market-freezone',
  },
  {
    name: 'KIZAD',
    full: 'Khalifa Industrial Zone Abu Dhabi',
    desc: 'A massive industrial zone near Khalifa Port with cost-effective land leasing and world-class facilities for logistics, manufacturing, and large-scale import/export.',
    link: '/business-setup/kizad-freezone',
  },
  {
    name: 'Masdar City',
    full: 'Masdar City Free Zone',
    desc: "Abu Dhabi's clean-tech innovation hub. Perfect for AI, renewables, green energy startups, and climate-conscious entrepreneurs building for the future.",
    link: '/business-setup/masdar-city-freezone',
  },
  {
    name: 'twofour54',
    full: 'twofour54 Media Free Zone',
    desc: "Abu Dhabi's media and creative industries hub. Supports media production, broadcasting, gaming, animation, and content creators at every scale.",
    link: '/business-setup/twofour54-freezone',
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
    q: 'Which is the best Abu Dhabi free zone for finance companies?',
    a: 'ADGM is the preferred jurisdiction for financial services due to its internationally recognised legal framework, English common law foundation, and high regulatory sophistication. It is the go-to choice for investment firms, family offices, and fintech companies.',
  },
  {
    q: 'Can I get a warehouse in an Abu Dhabi free zone?',
    a: 'Yes. KIZAD offers extensive warehouse and industrial land options at competitive rates, with direct connectivity to Khalifa Port. Our team can assist with lease negotiations and facility planning.',
  },
  {
    q: 'What are the costs for free zone setup in Abu Dhabi?',
    a: 'Costs vary significantly by zone and activity. ADGM commands a premium given its prestige and regulatory environment. KIZAD and Masdar City offer competitive rates for industrial and tech businesses. Contact us for a transparent, all-inclusive quote.',
  },
  {
    q: 'Are Abu Dhabi free zone companies taxed?',
    a: 'Companies that qualify as Free Zone Persons under UAE Corporate Tax law and do not conduct business with the UAE mainland can benefit from a 0% corporate tax rate. Elevate 360 advises on structuring your business for full compliance.',
  },
  {
    q: 'Can I own property in Abu Dhabi through a free zone company?',
    a: 'This depends on the zone and property type. ADGM entities may hold certain assets. For specific property acquisition strategies in Abu Dhabi, our advisors will guide you through the applicable regulations and ownership structures.',
  },
  {
    q: 'How long does it take to set up in ADGM or KIZAD?',
    a: 'ADGM typically takes 2–4 weeks due to its thorough regulatory process. KIZAD setup can be faster depending on the activity. With Elevate 360 managing the process, timelines are significantly compressed.',
  },
];

export default function AbuDhabiFreeZoneOverview() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] py-20 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-200 uppercase tracking-widest text-sm font-semibold mb-4">Business Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Abu Dhabi Free Zone Business Setup</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            The capital's free zones are redefining international business expansion — with world-class infrastructure, sector-specific ecosystems, and 100% foreign ownership.
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

      {/* Legal Entity Options */}
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Navigating Setup in Abu Dhabi Free Zones</h2>
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Available Licenses by Activity</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Abu Dhabi's free zones support a broad spectrum of business activities across sectors — from finance and industry to media and green tech.</p>
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
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Step-by-Step Company Formation Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our structured process ensures your Abu Dhabi free zone company is operational with minimal delays and maximum clarity.</p>
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

      {/* Key Free Zones */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">Key Abu Dhabi Free Zones to Explore</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Each Abu Dhabi free zone is purpose-built for specific industries. We help you identify the right match for your business model.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {zones.map((z) => (
              <div key={z.name} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#C9A84C] transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-gradient-to-br from-[#3d0a14] via-[#4a0d19] to-[#2d0710] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {z.name}
                  </div>
                  <h3 className="text-lg font-semibold text-[#3d0a14] mb-2">{z.full}</h3>
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

      {/* How Elevate 360 Helps */}
      <section className="py-20 px-4 bg-[#faf7f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">How Elevate 360 Helps</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Elevate 360 simplifies every step of your Abu Dhabi business formation journey — from initial planning to long-term operational support. We're not just consultants; we're your on-ground execution partners with deep expertise in UAE legal, regulatory, and commercial frameworks.
            </p>
          </div>
          <div className="text-center mb-12 mt-10">
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
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d0a14] mb-3">FAQs — Abu Dhabi Free Zone Setup</h2>
            <p className="text-slate-600">Common questions from entrepreneurs exploring Abu Dhabi's free zone options.</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Set Up in Abu Dhabi?</h2>
          <p className="text-amber-100 mb-8 text-lg">
            Speak with our specialists today. We'll match you with the right Abu Dhabi free zone and guide you through every step.
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
