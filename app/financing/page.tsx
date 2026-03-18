import Link from 'next/link'

export const metadata = { title: 'Financing | Etobicoke Windows & Doors' }

const plans = [
  {
    name: '0% for 12 Months',
    badge: 'Most Popular',
    badgeColor: '#f26924',
    highlight: '0%',
    sub: '12-month term',
    desc: 'No interest for a full year. Pay off your project at your own pace with equal monthly installments. Ideal for single-room upgrades.',
    details: ['No interest if paid in full within 12 months', 'Low minimum monthly payment', 'Available on purchases $1,500+', 'OAC — apply in minutes'],
  },
  {
    name: '0% for 24 Months',
    badge: 'Best Value',
    badgeColor: '#1565C0',
    highlight: '0%',
    sub: '24-month term',
    desc: 'Double the runway for larger whole-home projects. Spread payments over two years with zero interest.',
    details: ['No interest for 24 months', 'Equal monthly payments', 'Available on purchases $3,000+', 'OAC — fast approval'],
  },
  {
    name: 'Low Monthly Payments',
    badge: 'Flexible',
    badgeColor: '#2E7D32',
    highlight: 'From $49',
    sub: 'per month',
    desc: 'Prefer a set monthly amount? Choose a term from 36 to 120 months with competitive rates and no prepayment penalties.',
    details: ['36 to 120 month terms', 'No prepayment penalties', 'Fixed rate — no surprises', 'Available on any project size'],
  },
]

const faqs = [
  { q: 'How do I apply?', a: 'Apply during your free in-home estimate or call us at (647) 716-5155. Approval takes just minutes and we handle all the paperwork.' },
  { q: 'What credit score do I need?', a: 'Our financing partners accept a wide range of credit profiles. OAC — on approved credit. We will let you know your options at the time of your quote.' },
  { q: 'Is there a down payment required?', a: 'No down payment is required on most financing plans. Some larger projects may require a small deposit — we will confirm at the time of quoting.' },
  { q: 'Can I pay off early?', a: 'Yes. There are no prepayment penalties on any of our financing plans. Pay off your balance whenever you like.' },
  { q: 'Does financing cover installation?', a: 'Yes. Our financing covers the full project cost — products, labour, removal of old units, and any structural work included in your quote.' },
  { q: 'When do payments start?', a: 'Payments begin 30 days after your installation is complete, not before. You only start paying once you are enjoying your new windows or doors.' },
]

export default function FinancingPage() {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="bg-[#0f0f0f] py-24">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#f26924]" />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#f26924] font-semibold">Flexible Financing</span>
          </div>
          <h1 className="font-bebas text-[clamp(4rem,7vw,7rem)] leading-[0.88] text-white mb-6">
            New Windows &<br /><span className="text-[#f26924]">Doors Now.</span><br />Pay Later.
          </h1>
          <p className="text-[1.05rem] text-white/60 leading-[1.85] max-w-[520px] mb-10">
            Don't let budget hold back your home upgrade. Our flexible financing options let you start today and pay on your terms — with 0% interest plans available.
          </p>
          <Link href="/contact" className="bg-[#f26924] text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-white hover:text-[#f26924]">
            Get a Free Quote & Apply →
          </Link>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-2">Financing Plans</h2>
          <p className="text-[0.9rem] text-gray-500 mb-12">All plans subject to credit approval. No hidden fees. No prepayment penalties.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(p => (
              <div key={p.name} className="border border-gray-100 bg-[#FAF9F7] p-8 flex flex-col gap-5 relative">
                <div
                  className="absolute top-6 right-6 text-[0.58rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 text-white"
                  style={{ backgroundColor: p.badgeColor }}
                >
                  {p.badge}
                </div>
                <div>
                  <div className="font-bebas text-[3.5rem] leading-none text-[#f26924]">{p.highlight}</div>
                  <div className="text-[0.72rem] text-gray-400 uppercase tracking-[0.1em]">{p.sub}</div>
                </div>
                <div>
                  <div className="text-[1rem] font-bold text-[#1A1A1A] mb-2">{p.name}</div>
                  <p className="text-[0.82rem] text-gray-500 leading-[1.75]">{p.desc}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto">
                  {p.details.map(d => (
                    <li key={d} className="flex items-start gap-2.5 text-[0.78rem] text-gray-600">
                      <span className="block w-4 h-px bg-[#f26924] flex-shrink-0 mt-2" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-white mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { n: '01', title: 'Get Your Quote',     desc: 'Book a free in-home estimate. We measure, walk you through options, and give you a full written quote.' },
              { n: '02', title: 'Apply in Minutes',   desc: 'Apply for financing during the estimate or over the phone. Approval takes just a few minutes.' },
              { n: '03', title: 'Schedule Install',   desc: 'Once approved, we schedule your installation at a time that works for you — often within 1–2 weeks.' },
              { n: '04', title: 'Pay on Your Terms',  desc: 'Payments begin 30 days after your install is complete. No payments until you\'re enjoying your new windows.' },
            ].map(s => (
              <div key={s.n} className="bg-[#1A1A1A] p-10">
                <div className="font-bebas text-[3.5rem] leading-none text-[#f26924]/20 mb-4">{s.n}</div>
                <div className="text-[0.9rem] font-bold text-white mb-2">{s.title}</div>
                <p className="text-[0.78rem] leading-[1.75] text-white/40">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-12">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map(f => (
              <div key={f.q} className="border-l-2 border-[#f26924] pl-6">
                <div className="text-[0.9rem] font-bold text-[#1A1A1A] mb-2">{f.q}</div>
                <p className="text-[0.82rem] text-gray-500 leading-[1.75]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f26924] py-16">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.5rem)] leading-none text-white mb-2">Ready to get started?</h2>
            <p className="text-[0.9rem] text-white/75">Book your free estimate today. Financing approval in minutes.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-[#f26924] text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white">
            Book a Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  )
}
