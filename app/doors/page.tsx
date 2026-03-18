import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import FinishesTabs from '@/components/FinishesTabs'

const doors = [
  { code: 'D — 01', title: 'Entry Doors',        href: '/doors/entry', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', desc: 'Steel, fiberglass, or wood — make a confident first impression.' },
  { code: 'D — 02', title: 'Patio & French Doors',href: '/doors/patio', img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=600&q=80', desc: 'Erase the boundary between indoor and outdoor living.' },
  { code: 'D — 03', title: 'Storm Doors',         href: '/doors/storm', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', desc: 'Add an energy layer to any existing exterior door.' },
]

export default function DoorsPage() {
  return (
    <>
      <PageHero
        section="Doors"
        title="PREMIUM"
        titleItalic="Doors"
        subtitle="Entry doors, patio systems, and storm doors — every product backed by our lifetime installation warranty and engineered for Canadian winters."
      />

      <section className="border-b border-[#0A0A0A]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {doors.map((d, i) => (
            <Link
              key={d.code}
              href={d.href}
              className={`group relative overflow-hidden block aspect-[3/4] no-underline ${i < 2 ? 'md:border-r' : ''} border-[#0A0A0A]`}
            >
              <Image src={d.img} alt={d.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[#f26924] mb-2">{d.code}</div>
                <div className="font-bebas text-4xl text-white leading-[1] mb-2">{d.title}</div>
                <p className="text-[0.75rem] text-white/60 leading-[1.6]">{d.desc}</p>
                <div className="mt-4 text-white text-lg">↗</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-[#0A0A0A]">
        <div className="px-8 md:px-12 py-6 border-b border-[#0A0A0A] flex items-baseline gap-4">
          <span className="text-[0.58rem] tracking-[0.28em] uppercase text-[#7A786F] font-semibold">Materials</span>
          <h2 className="font-bebas text-[1.8rem] leading-none text-[#0A0A0A]">Choose Your Material</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { title: 'Steel',      desc: 'The most secure and cost-effective option. Modern steel doors are thermally broken and heavily insulated for excellent energy performance.' },
            { title: 'Fiberglass', desc: "Won't warp, rot, or rust. Fiberglass doors can be stained to look like real wood and outperform steel in extreme temperature swings." },
            { title: 'Wood',       desc: 'Unmatched natural beauty and customizability. Solid wood and wood-composite options for heritage homes and high-end new builds.' },
          ].map((m, i) => (
            <div key={m.title} className={`p-8 ${i < 2 ? 'md:border-r' : ''} border-[#0A0A0A]`}>
              <div className="font-bebas text-[2.2rem] text-[#E8E6E0] leading-none mb-4">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-syne font-bold text-[0.95rem] text-[#0A0A0A] mb-2">{m.title}</div>
              <p className="text-[0.78rem] leading-[1.75] text-[#7A786F]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinishesTabs />

    </>
  )
}
