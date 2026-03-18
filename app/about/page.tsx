import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'About Us | Etobicoke Windows & Doors' }

export default function AboutPage() {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="relative bg-[#0f0f0f] overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=80" alt="Our team" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-10 md:px-16 py-24 w-full">
          <h1 className="font-bebas text-[clamp(4rem,7vw,7.5rem)] leading-[0.88] text-white mb-6">
            Built in Etobicoke.<br /><span className="text-[#f26924]">For Etobicoke.</span>
          </h1>
          <p className="text-[1.05rem] leading-[1.85] text-white/60 max-w-[520px] mb-10">
            Locally owned since 2009. Over 2,400 homes installed. Still answering our own phones.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-sm pt-8 border-t border-white/10">
            {[
              { val: '15+',    lbl: 'Years in business' },
              { val: '2,400+', lbl: 'Homes completed' },
              { val: 'A+',     lbl: 'BBB rating' },
            ].map(s => (
              <div key={s.lbl} className="flex flex-col gap-0.5">
                <span className="font-bebas text-[1.8rem] leading-none text-[#f26924]">{s.val}</span>
                <span className="text-[0.6rem] text-white/35 uppercase tracking-[0.1em] leading-tight">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            <Image src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80" alt="Our team at work" fill className="object-cover brightness-75" />
          </div>
          <div className="px-10 md:px-16 py-16 lg:py-20 flex flex-col justify-center gap-6">
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-[0.92] text-white">Our Story</h2>
            <p className="text-[0.9rem] leading-[1.85] text-white/60">
              Founded in 2009 by a team of certified installers who grew up in the west end, Etobicoke Windows & Doors started with a simple belief: homeowners deserve honest pricing, skilled craftsmanship, and a company that stands behind its work.
            </p>
            <p className="text-[0.9rem] leading-[1.85] text-white/60">
              Fifteen years later, we've installed over 2,400 homes across Etobicoke, Mississauga, and Greater Toronto. We're still locally owned, still answering our own phones, and still personally overseeing every job.
            </p>
            <Link href="/contact" className="self-start bg-[#f26924] text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-white hover:text-[#f26924] mt-2">
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20">
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {[
              { n: '01', title: 'Honest Pricing',        desc: 'The number in your written quote is the number on your final invoice. We\'ve never charged a client more than quoted — not once in 15 years.' },
              { n: '02', title: 'Skilled Craftsmanship', desc: 'Every installer on our team holds a valid contractor\'s licence and has completed manufacturer certification. No subcontractors, no shortcuts.' },
              { n: '03', title: 'Community First',       desc: 'We\'re Etobicoke residents. We sponsor local hockey teams, support Lakeshore food banks, and hire locally. This community is our business.' },
              { n: '04', title: 'Lifetime Accountability',desc: 'We\'re here after the job is done. If something isn\'t right — in year one or year ten — we answer our phone and we come back to fix it.' },
            ].map(v => (
              <div key={v.n} className="bg-[#0f0f0f] p-10 md:p-12 flex flex-col gap-4">
                <div className="font-bebas text-[3rem] leading-none text-white/10">{v.n}</div>
                <div className="text-[1rem] font-bold text-white">{v.title}</div>
                <p className="text-[0.82rem] leading-[1.8] text-white/40">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20">
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-white mb-12">Certified &amp; Accredited</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { badge: 'A+', label: 'BBB Accredited',      sub: 'Better Business Bureau' },
              { badge: '★',  label: 'Energy Star Partner', sub: 'Natural Resources Canada' },
              { badge: '✓',  label: 'WSIB Covered',         sub: 'Workplace Safety Insurance' },
              { badge: '⚡', label: 'Licensed Contractor',  sub: 'Ontario HCRA Registered' },
            ].map(c => (
              <div key={c.label} className="bg-[#1A1A1A] p-10 text-center flex flex-col items-center gap-3">
                <div className="font-bebas text-[3rem] leading-none text-[#f26924]">{c.badge}</div>
                <div className="text-[0.85rem] font-bold text-white">{c.label}</div>
                <div className="text-[0.67rem] text-white/30">{c.sub}</div>
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
            <p className="text-[0.9rem] text-white/75">Book your free in-home estimate today.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-[#f26924] text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white">
            Book a Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  )
}
