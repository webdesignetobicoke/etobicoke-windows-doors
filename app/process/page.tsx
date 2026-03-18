import Link from 'next/link'

export const metadata = { title: 'Our Process | Etobicoke Windows & Doors' }

const steps = [
  {
    n: '01', title: 'Free In-Home Consultation',
    duration: '60–90 min',
    desc: 'One of our experienced estimators comes to your home at a time that works for you. We measure every opening precisely, assess your existing frames, and walk you through every product option — with no pressure and no hidden costs.',
    bullets: ['Precise measurements of every opening', 'Assessment of existing frames for rot or damage', 'Full product walkthrough — windows, doors, finishes, glass'],
  },
  {
    n: '02', title: 'Detailed Written Quote',
    duration: 'Within 24 hours',
    desc: 'You\'ll receive a comprehensive, itemized quote within one business day. Every line item is spelled out — product cost, installation labour, disposal of old units, and any structural work. No "starting from" prices. No surprise additions.',
    bullets: ['Itemized product and labour costs', 'Installation timeline and scheduling options', 'Energy savings estimate for upgrades'],
  },
  {
    n: '03', title: 'Product Selection & Order',
    duration: 'At your pace',
    desc: 'Once you accept the quote, you choose your exact specifications — frame material, exterior colour, interior finish, glass package, and hardware. We place the factory order and provide a confirmed lead time.',
    bullets: ['Full finish and hardware selection', 'Factory order confirmation with lead time', 'Pre-installation site prep guidance'],
  },
  {
    n: '04', title: 'Professional Installation',
    duration: '1–2 days typical',
    desc: 'Our certified crew arrives on the scheduled date. We protect your floors and furniture before starting. Old units are carefully removed. New units are installed with precision — every one shimmed, levelled, insulated, and sealed to spec.',
    bullets: ['Full interior and exterior protection', 'Proper shimming, levelling, and insulation', 'Complete exterior caulking and flashing'],
  },
  {
    n: '05', title: 'Final Walkthrough & Warranty',
    duration: '30 min',
    desc: 'Before we load the truck, we walk through every installed unit with you. We demonstrate proper operation and cleaning, and answer any questions. Your lifetime warranty is registered on-site and emailed to you within 24 hours.',
    bullets: ['Operation demonstration for every unit', 'Warranty registration on-site', 'Post-install support contact provided'],
  },
]

export default function ProcessPage() {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="bg-[#0f0f0f] py-24">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h1 className="font-bebas text-[clamp(4rem,7vw,7.5rem)] leading-[0.88] text-white mb-6">
            Simple.<br /><span className="text-[#f26924]">Transparent.</span>
          </h1>
          <p className="text-[1.05rem] leading-[1.85] text-white/60 max-w-[520px]">
            Five steps from your first call to your registered lifetime warranty. No surprises, no pressure, no shortcuts.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          {steps.map((s, i) => (
            <div key={s.n} className={`grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] ${i < steps.length - 1 ? 'border-b border-white/5' : ''}`}>
              {/* Number col */}
              <div className="px-10 md:px-12 py-10 md:border-r border-white/5 flex flex-col justify-between gap-4">
                <div className="font-bebas text-[4rem] leading-none text-white/10">{s.n}</div>
                <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#f26924] font-semibold">{s.duration}</div>
              </div>
              {/* Title + desc */}
              <div className="px-10 md:px-12 py-10 md:border-r border-white/5">
                <div className="text-[1rem] font-bold text-white mb-4">{s.title}</div>
                <p className="text-[0.82rem] leading-[1.85] text-white/40">{s.desc}</p>
              </div>
              {/* Bullets */}
              <div className="px-10 md:px-12 py-10 flex flex-col justify-center gap-4">
                {s.bullets.map(b => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="block w-5 h-px bg-[#f26924] flex-shrink-0 mt-2" />
                    <span className="text-[0.78rem] leading-[1.65] text-white/40">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20">
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-white mb-12">We Stand Behind Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { icon: '🛡️', title: 'Lifetime Warranty',  desc: 'Frames, glass seals, hardware, and installation labour — all covered for life.' },
              { icon: '📅', title: 'On-Time Guarantee',  desc: 'We arrive on the scheduled date. If we\'re late, we credit your invoice.' },
              { icon: '🧹', title: 'Clean Site Promise',  desc: 'We leave your home cleaner than we found it — or we come back and do it right.' },
              { icon: '✅', title: 'No Surprise Pricing', desc: 'The price in your written quote is the price you pay. Period.' },
            ].map(g => (
              <div key={g.title} className="bg-[#0f0f0f] p-10 flex flex-col gap-4">
                <span className="text-3xl">{g.icon}</span>
                <div className="text-[0.95rem] font-bold text-white">{g.title}</div>
                <p className="text-[0.78rem] leading-[1.75] text-white/40">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f26924] py-16">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.5rem)] leading-none text-white mb-2">Ready to start your project?</h2>
            <p className="text-[0.9rem] text-white/75">Book a free in-home consultation — no pressure, no obligation.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-[#f26924] text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white">
            Book a Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  )
}
