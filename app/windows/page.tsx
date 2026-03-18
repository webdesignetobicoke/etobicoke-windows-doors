import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Windows | Etobicoke Windows & Doors' }

const styles = [
  {
    title: 'Awning Windows',
    href: '/windows/awning',
    img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=800&q=80',
    tag: 'Most Popular',
    desc: 'Hinged at the top, opens outward from the bottom. Keep ventilating even when it rains.',
  },
  {
    title: 'Casement Windows',
    href: '/windows/casement',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tag: null,
    desc: 'Side-hinged and cranked fully open for maximum airflow and unobstructed views.',
  },
  {
    title: 'Double-Hung Windows',
    href: '/windows/double-hung',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    tag: null,
    desc: 'Both sashes operate independently — the classic, versatile choice for Canadian homes.',
  },
  {
    title: 'Bay & Bow Windows',
    href: '/windows/bay-bow',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    tag: 'Statement Piece',
    desc: 'Architectural projections that expand your interior space and flood rooms with light.',
  },
  {
    title: 'Picture Windows',
    href: '/windows',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    tag: null,
    desc: 'Fixed glass. No moving parts. Maximum view, maximum light — minimal frame profile.',
  },
  {
    title: 'Slider Windows',
    href: '/windows',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    tag: null,
    desc: 'Glides horizontally on a smooth track. Low-profile and ideal for wide openings.',
  },
  {
    title: 'Tilt & Turn Windows',
    href: '/windows',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tag: 'European Style',
    desc: 'Two functions in one — tilt inward for ventilation or swing fully open for cleaning.',
  },
  {
    title: 'Fixed Windows',
    href: '/windows',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    tag: null,
    desc: 'Custom shapes and sizes for accent installations — geometric, arched, or specialty glass.',
  },
]

const benefits = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6"><path d="M14 3L3 10v15h8v-7h6v7h8V10L14 3z"/></svg>,
    title: 'Lower Energy Bills',
    desc: 'Properly sealed, Energy Star® certified windows cut heat loss and keep your home comfortable year-round — reducing heating and cooling costs significantly.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6"><rect x="4" y="4" width="20" height="20"/><line x1="4" y1="14" x2="24" y2="14"/><line x1="14" y1="4" x2="14" y2="24"/></svg>,
    title: 'Enhanced Curb Appeal',
    desc: 'New windows instantly refresh the exterior of your home. Choose from dozens of frame colours, grille patterns, and glass options to match your vision.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6"><path d="M14 3l-9 5v6c0 6 4 10 9 12 5-2 9-6 9-12V8l-9-5z"/><polyline points="10,14 13,17 19,11"/></svg>,
    title: 'Improved Security',
    desc: 'Multi-point locking systems and impact-resistant glass provide a meaningful deterrent against forced entry — protecting what matters most.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6"><circle cx="14" cy="14" r="10"/><path d="M14 8v6l4 2"/></svg>,
    title: 'Lifetime Warranty',
    desc: 'Every window we install is backed by a lifetime warranty on the frame and our installation labour — registered before our crew leaves your home.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6"><path d="M6 20c0-4 3.6-7 8-7s8 3 8 7"/><circle cx="14" cy="9" r="4"/></svg>,
    title: 'Certified Installers',
    desc: 'Our crews are licensed, insured, and trained to manufacturer specifications — ensuring every window performs as designed from day one.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6"><path d="M4 20h4l2-8 4 12 3-9 2 5h5"/></svg>,
    title: 'Increased Home Value',
    desc: "Window replacement consistently ranks among the top-return home improvements. Buyers notice quality — it signals care, efficiency, and lower maintenance ahead.",
  },
]

const steps = [
  { n: '01', title: 'Free In-Home Estimate', desc: 'We visit your home, measure every opening, walk you through all styles and options. Zero pressure, zero hidden costs.' },
  { n: '02', title: 'Quote in 24 Hours',     desc: 'Detailed, itemized quote delivered next business day. Choose your style, finish, glass, and hardware at your pace.' },
  { n: '03', title: 'Professional Install',  desc: 'Certified crew arrives on schedule. Most full-home window projects are completed in a single day.' },
  { n: '04', title: 'Warranty Walkthrough',  desc: 'We inspect every unit with you before we leave and register your lifetime warranty on the spot.' },
]

const faqs = [
  {
    q: 'How do I know when it\'s time to replace my windows?',
    a: 'Key signs include drafts you can feel around the frame, condensation between panes, difficulty opening or closing, visible rot or warping, or a noticeable increase in your heating and cooling bills. If your windows are over 15–20 years old, a replacement consultation is worth having.',
  },
  {
    q: 'What window material is best for Toronto\'s climate?',
    a: 'Vinyl is the most popular choice for Toronto homeowners — it doesn\'t expand and contract as dramatically as wood, resists moisture, and never needs painting. Fiberglass offers superior strength and a more premium look. Wood is available for heritage or high-end applications.',
  },
  {
    q: 'What is Low-E glass and do I need it?',
    a: 'Low-E (low-emissivity) glass has a microscopic metallic coating that reflects radiant heat. In winter it reflects heat back inside; in summer it blocks solar heat from entering. For Toronto\'s climate, Low-E glass is strongly recommended and is included as standard on all our packages.',
  },
  {
    q: 'How long does window installation take?',
    a: 'A single window replacement typically takes 30–60 minutes per unit. A full-home replacement of 8–14 windows is usually completed in one day. We confirm the exact timeline at the time of booking.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. We offer 0% financing for 12 months on approved credit, with low down-payment options available. Ask us about current financing promotions when you request your quote.',
  },
  {
    q: 'Are your windows Energy Star® certified?',
    a: 'All windows we supply are Energy Star® certified to Canadian climate zone requirements. We provide documentation for rebate applications and building inspections.',
  },
]

export default function WindowsPage() {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* Left */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-16 gap-7">
            <h1 className="font-bebas text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] text-[#1A1A1A]">
              Windows built<br />for Canadian<br />winters.
            </h1>
            <p className="text-[1rem] leading-[1.85] text-gray-500 max-w-md">
              From a single replacement to a whole-home upgrade — we supply and install premium windows engineered for Toronto's climate, backed by a lifetime warranty.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-[#f26924] text-white text-[0.75rem] font-bold px-8 py-3.5 rounded-full no-underline hover:bg-[#d4581a]">
                Book a Free Consultation →
              </Link>
              <Link href="#styles" className="border-2 border-gray-200 text-[#1A1A1A] text-[0.75rem] font-bold px-8 py-3.5 rounded-full no-underline hover:border-[#f26924] hover:text-[#f26924]">
                Browse Window Styles ↓
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-gray-100">
              {[
                { val: '2,400+', lbl: 'Windows installed' },
                { val: '15+',    lbl: 'Years in Etobicoke' },
                { val: 'A+',     lbl: 'BBB rating' },
                { val: '24H',    lbl: 'Quote turnaround' },
              ].map(s => (
                <div key={s.lbl} className="flex items-baseline gap-1.5">
                  <span className="font-bebas text-[1.4rem] leading-none text-[#f26924]">{s.val}</span>
                  <span className="text-[0.62rem] text-gray-400 uppercase tracking-[0.1em]">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[400px] bg-gray-50 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85"
              alt="Premium window installation Etobicoke"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-3 shadow-lg flex items-center gap-3">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="#f26924" strokeWidth="1.6">
                <polygon points="14,3 17.5,10.5 26,11.5 20,17.5 21.5,26 14,22 6.5,26 8,17.5 2,11.5 10.5,10.5"/>
              </svg>
              <div>
                <div className="text-[0.65rem] font-bold text-[#1A1A1A]">Energy Star® Certified</div>
                <div className="text-[0.58rem] text-gray-400">All products · Canadian climate zones</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WINDOW STYLES ── */}
      <section id="styles" className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

          <div className="mb-10">
            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-3">Window Styles</h2>
            <p className="text-[0.95rem] text-gray-500 leading-[1.75] max-w-2xl">
              Every home is different. We carry the full range so you can choose what works best for each room — functionally and aesthetically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {styles.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white border border-gray-100 shadow-sm overflow-hidden no-underline hover:shadow-md"
              >
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105" />
                  {s.tag && (
                    <div className="absolute top-3 left-3 bg-[#f26924] text-white text-[0.55rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1">
                      {s.tag}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bebas text-[1.25rem] leading-tight text-[#1A1A1A] mb-2 group-hover:text-[#f26924]">{s.title}</h3>
                  <p className="text-[0.75rem] leading-[1.75] text-gray-500 mb-3">{s.desc}</p>
                  <span className="text-[0.7rem] font-bold text-[#f26924]">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Window Installation',
                desc: 'New construction or first-time installation. We handle rough openings, flashing, insulation, and trim — fully to Ontario Building Code.',
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#f26924" strokeWidth="1.5"><rect x="3" y="3" width="26" height="26"/><line x1="3" y1="16" x2="29" y2="16"/><line x1="16" y1="3" x2="16" y2="29"/></svg>,
              },
              {
                title: 'Window Replacement',
                desc: 'Swap out old, drafty, or damaged windows. We remove, dispose of, and replace with minimal disruption — typically same day.',
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#f26924" strokeWidth="1.5"><polyline points="4,12 4,4 12,4"/><polyline points="28,20 28,28 20,28"/><path d="M4 4l8 8"/><path d="M28 28l-8-8"/><rect x="12" y="12" width="8" height="8"/></svg>,
              },
              {
                title: 'Window Repair',
                desc: 'Broken seals, failed hardware, damaged weatherstripping. We repair rather than replace when possible — saving you money.',
                icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#f26924" strokeWidth="1.5"><path d="M22 6l4 4-14 14-5 1 1-5 14-14z"/><line x1="19" y1="9" x2="23" y2="13"/></svg>,
              },
            ].map(s => (
              <div key={s.title} className="flex gap-5">
                <div className="flex-shrink-0 mt-1">{s.icon}</div>
                <div>
                  <h3 className="font-bebas text-[1.5rem] leading-tight text-white mb-2">{s.title}</h3>
                  <p className="text-[0.78rem] leading-[1.8] text-white/50 mb-3">{s.desc}</p>
                  <Link href="/contact" className="text-[0.7rem] font-bold text-[#f26924] no-underline hover:underline">
                    Get a quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY QUALITY WINDOWS ── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-5">
                Why quality windows matter
              </h2>
              <p className="text-[1rem] leading-[1.85] text-gray-500 max-w-lg">
                Windows are not just glass and frames — they are the thermal envelope, the security layer, and the first impression of your home. Poorly performing windows cost you money every month through energy loss, let in noise, and degrade your home's structural integrity over time.
              </p>
            </div>
            <div className="relative h-72 bg-gray-50 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80"
                alt="Quality windows Etobicoke"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-6 bg-[#FAF9F7] border border-gray-100">
                <div className="flex-shrink-0 mt-0.5">{b.icon}</div>
                <div>
                  <h3 className="text-[0.88rem] font-bold text-[#1A1A1A] mb-2">{b.title}</h3>
                  <p className="text-[0.75rem] leading-[1.8] text-gray-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENERGY PERFORMANCE ── */}
      <section className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 bg-gray-100 overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
                alt="Energy efficient windows Toronto"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-5">
                Engineered for Toronto's climate
              </h2>
              <p className="text-[1rem] leading-[1.85] text-gray-500 mb-7">
                Toronto winters demand more than a standard double-pane. Every window we install is selected for its thermal performance in Canadian climate zones — with Low-E glass, argon or krypton gas fill, and thermally broken frames as standard.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Energy Star® Certified', sub: 'All products, all packages' },
                  { label: 'Low-E Glass Standard',   sub: 'Included on every install' },
                  { label: 'Triple Pane Available',  sub: 'Maximum thermal performance' },
                  { label: 'Argon & Krypton Fill',   sub: 'Reduces heat transfer 30%' },
                ].map(f => (
                  <div key={f.label} className="bg-white border border-gray-100 p-4">
                    <div className="text-[0.78rem] font-bold text-[#1A1A1A] mb-1">{f.label}</div>
                    <div className="text-[0.68rem] text-gray-400">{f.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">
          <div className="mb-10">
            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-3">How it works</h2>
            <p className="text-[0.95rem] text-gray-500 max-w-xl leading-[1.75]">
              Simple, transparent, and fast. Most homeowners go from first call to installed windows in under two weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((p) => (
              <div key={p.n}>
                <div className="font-bebas text-[3.5rem] leading-none text-[#f26924]/20 mb-3">{p.n}</div>
                <h3 className="text-[0.88rem] font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="text-[0.75rem] leading-[1.8] text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="inline-flex bg-[#f26924] text-white text-[0.75rem] font-bold px-8 py-3.5 rounded-full no-underline hover:bg-[#d4581a]">
            Start With a Free Estimate →
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

          <div className="mb-10">
            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-3">Common questions</h2>
            <p className="text-[0.95rem] text-gray-500 max-w-xl leading-[1.75]">
              Everything you need to know before booking a consultation.
            </p>
          </div>

          <div className="max-w-3xl flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-[0.88rem] font-semibold text-[#1A1A1A] pr-6">{f.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[0.72rem] text-gray-500 group-open:bg-[#f26924] group-open:border-[#f26924] group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[0.82rem] leading-[1.85] text-gray-500">{f.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-[0.85rem] text-gray-500">Still have questions?</span>
            <Link href="/contact" className="text-[0.85rem] font-bold text-[#f26924] no-underline hover:underline">
              Talk to our team →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
