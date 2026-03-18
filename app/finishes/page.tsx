import Link from 'next/link'
import FinishesTabs from '@/components/FinishesTabs'

export const metadata = { title: 'Finishes & Design Options | Etobicoke Windows & Doors' }

export default function FinishesPage() {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="bg-[#0f0f0f] py-24">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h1 className="font-bebas text-[clamp(4rem,7vw,7.5rem)] leading-[0.88] text-white mb-6">
            Finishes &amp;<br /><span className="text-[#f26924]">Design Options</span>
          </h1>
          <p className="text-[1.05rem] leading-[1.85] text-white/60 max-w-[520px]">
            Every product we install ships factory-finished to your exact specification — stains, paints, and exterior-grade coatings applied under controlled conditions for lasting quality.
          </p>
        </div>
      </section>

      {/* ── FINISHES TABS ── */}
      <FinishesTabs />

      {/* ── HARDWARE ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20">
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-white mb-12">Premium Hardware Finishes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { name: 'Matte Black',       bg: '#1A1A18' },
              { name: 'Satin Nickel',       bg: 'linear-gradient(135deg,#C8C5BE,#A0A0A0)' },
              { name: 'Oil-Rubbed Bronze', bg: 'linear-gradient(135deg,#4A3020,#2A1A0A)' },
              { name: 'Polished Chrome',   bg: 'linear-gradient(135deg,#E8E8E8,#B0B0B0,#E0E0E0)' },
            ].map(h => (
              <div key={h.name} className="bg-[#0f0f0f] p-8 flex flex-col gap-4">
                <div className="w-full aspect-square" style={{ background: h.bg }} />
                <div className="text-[0.82rem] font-bold text-white text-center">{h.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLASS OPTIONS ── */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20">
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-white mb-12">Choose Your Glass</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              { title: 'Double Pane', sub: 'Standard', desc: 'Two panes with argon gas fill and Low-E coating. Meets Energy Star requirements for Toronto\'s climate zone. Our most popular choice.' },
              { title: 'Triple Pane', sub: 'Premium',  desc: 'Three panes with two argon-filled chambers. Delivers exceptional sound attenuation and thermal performance for maximum comfort.' },
              { title: 'Decorative',  sub: 'Custom',   desc: 'Frosted, obscure, patterned, and art glass options for privacy without sacrificing light. Popular for entry doors and bathrooms.' },
            ].map(g => (
              <div key={g.title} className="bg-[#1A1A1A] p-10 flex flex-col gap-4">
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[#f26924] font-semibold">{g.sub}</div>
                <div className="font-bebas text-[2.2rem] leading-none text-white">{g.title}</div>
                <p className="text-[0.82rem] leading-[1.75] text-white/40">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f26924] py-16">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.5rem)] leading-none text-white mb-2">Not sure which finish is right?</h2>
            <p className="text-[0.9rem] text-white/75">We bring samples to your free in-home consultation.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-[#f26924] text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white">
            Book a Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  )
}
