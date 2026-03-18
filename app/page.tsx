import Link from 'next/link'
import Image from 'next/image'

const windows = [
  { title: 'Casement Windows',    href: '/windows/casement',    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80', desc: 'Swing-out for max ventilation and unobstructed views.' },
  { title: 'Double-Hung Windows', href: '/windows/double-hung', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80', desc: 'Both sashes operate independently — the classic Canadian choice.' },
  { title: 'Bay & Bow Windows',   href: '/windows/bay-bow',     img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80', desc: 'Architectural projections that flood interiors with natural light.' },
]

const doors = [
  { title: 'Entry Doors',          href: '/doors/entry', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',  desc: 'Steel, fiberglass, or wood — built for Canadian winters.' },
  { title: 'Patio & French Doors', href: '/doors/patio', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80', desc: 'Sliding, swinging, and folding systems for indoor-outdoor living.' },
  { title: 'Storm Doors',          href: '/doors/storm', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80', desc: 'An energy-efficient layer essential for lake-effect winters.' },
]


const testimonials = [
  { stars: 5, quote: '"Replaced all 14 windows in our Long Branch home. Punctual, tidy, and stunning results. Our heating bill dropped noticeably that winter."', name: 'Sandra & Mike T.', area: 'Long Branch, Etobicoke' },
  { stars: 5, quote: '"A complex bay window three companies wouldn\'t touch. Handled perfectly, on budget, on time. Remarkable."', name: 'Priya N.', area: 'Mimico, Toronto' },
  { stars: 5, quote: '"The new entry door transformed our home. Neighbours keep asking who did it. Best contractor experience in 20 years."', name: 'James R.', area: 'New Toronto' },
]

const videoReviews = [
  {
    thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    name: 'Karen & David M.',
    area: 'Alderwood, Etobicoke',
    quote: '"9 windows in one day — absolutely flawless."',
    stars: 5,
    platform: 'Google',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    name: 'Marcus O.',
    area: 'Humber Bay, Toronto',
    quote: '"New entry door and two patio sliders. Professional and fast."',
    stars: 5,
    platform: 'Google',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    name: 'Lisa C.',
    area: 'Mimico, Etobicoke',
    quote: '"Bay window install was perfect. Transformed our living room."',
    stars: 5,
    platform: 'Facebook',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
    name: 'Tony B.',
    area: 'New Toronto',
    quote: '"Best price, best crew. Will use them again without hesitation."',
    stars: 5,
    platform: 'Homestars',
  },
]

const coupons = [
  {
    badge: 'Spring Sale',  badgeColor: '#2E7D32', highlight: '25%\nOFF',
    title: 'Up to 25% Off Windows',
    desc: 'Save up to 25% on all window installations booked this spring. Includes labour & materials.',
    expiry: 'May 31, 2026', tag: 'Most Popular',
  },
  {
    badge: 'Limited Time', badgeColor: '#f26924', highlight: '$500\nOFF',
    title: 'Save $500 on Entry Doors',
    desc: 'Get $500 off any full entry door supply-and-install package — steel, fiberglass, or wood.',
    expiry: 'April 15, 2026', tag: 'Selling Fast',
  },
  {
    badge: 'Referral',     badgeColor: '#7B4F9E', highlight: '$100\nBONUS',
    title: '$100 When a Friend Installs',
    desc: 'Refer a neighbour who completes an install and earn $100 as a gift card or service credit.',
    expiry: 'No expiry', tag: null,
  },
  {
    badge: 'Financing',    badgeColor: '#1565C0', highlight: '0%\n12 MO',
    title: '0% Financing for 12 Months',
    desc: 'Manageable monthly payments with 0% interest. Low down-payment options available. OAC.',
    expiry: 'Apply anytime', tag: null,
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="mt-[96px] lg:mt-[124px] relative bg-[#0f0f0f] overflow-hidden min-h-[92vh] flex items-center">

        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90"
            alt="Premium window installation Etobicoke"
            fill
            className="object-cover opacity-35"
            priority
          />
          {/* gradient overlay — dark left, fade right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-10 md:px-16 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">

<h1 className="font-bebas text-[clamp(4.5rem,8vw,8.5rem)] leading-[0.88] text-white">
              Etobicoke<br />
              <span className="text-[#f26924]">Windows</span><br />
              &amp; Doors
            </h1>

            <p className="text-[1.05rem] leading-[1.85] text-white/60 max-w-[460px]">
              Premium supply and installation for Toronto homeowners. Every unit engineered for Canadian winters — backed by a lifetime warranty.
            </p>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 flex-1 sm:w-[220px] sm:flex-none">
                <Image src="/logos/energy-star.svg" alt="Energy Star" width={44} height={44} className="flex-shrink-0" />
                <div>
                  <div className="text-[0.95rem] font-bold text-white leading-tight">Energy Star® Certified</div>
                  <div className="text-[0.82rem] text-white/40 mt-1">Canadian climate zone rated</div>
                </div>
              </div>
              <Link href="#coupons" className="flex items-center gap-4 border border-[#f26924]/40 bg-[#f26924]/10 backdrop-blur-sm px-5 py-4 no-underline group flex-1 sm:w-[220px] sm:flex-none">
                <span className="text-[2rem]">🏷️</span>
                <div>
                  <div className="text-[0.95rem] font-bold text-[#f26924] leading-tight">Spring Offers Active</div>
                  <div className="text-[0.82rem] text-white/40 mt-1">Up to 25% off — view coupons ↓</div>
                </div>
              </Link>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-[#f26924] text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-white hover:text-[#f26924] text-center">
                Book a Free Consultation →
              </Link>
              <Link href="#coupons" className="border border-white/20 text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:border-[#f26924] hover:text-[#f26924] text-center">
                Current Offers ↓
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
              {[
                { val: '15+',    lbl: 'Years in business' },
                { val: '2,400+', lbl: 'Homes completed' },
                { val: 'A+',     lbl: 'BBB rating' },
              ].map(s => (
                <div key={s.lbl} className="flex flex-col gap-0.5">
                  <span className="font-bebas text-[1.6rem] leading-none text-[#f26924]">{s.val}</span>
                  <span className="text-[0.62rem] text-white/35 uppercase tracking-[0.1em] leading-tight">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                alt="Featured install"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-5">
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-1">Featured Install</div>
                <div className="text-[0.82rem] font-semibold text-white">Long Branch, Etobicoke — 2024</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16 flex flex-col gap-16">

          {/* Windows */}
          <div>
            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-6">Windows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {windows.map((p) => (
                <Link key={p.title} href={p.href}
                  className="group bg-white border border-gray-100 shadow-sm overflow-hidden no-underline hover:shadow-md">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bebas text-[1.2rem] leading-tight text-[#1A1A1A] mb-1.5 group-hover:text-[#f26924]">{p.title}</h3>
                    <p className="text-[0.75rem] leading-[1.7] text-gray-500">{p.desc}</p>
                    <span className="block mt-3 text-[0.7rem] font-bold text-[#f26924]">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/windows" className="text-[0.92rem] font-bold text-[#f26924] bg-white border-4 border-[#f26924] px-10 py-4 rounded-full no-underline hover:bg-[#f26924] hover:text-white">
                View All Windows →
              </Link>
            </div>
          </div>

          {/* Doors */}
          <div>
            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-[#1A1A1A] mb-6">Doors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {doors.map((p) => (
                <Link key={p.title} href={p.href}
                  className="group bg-white border border-gray-100 shadow-sm overflow-hidden no-underline hover:shadow-md">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bebas text-[1.2rem] leading-tight text-[#1A1A1A] mb-1.5 group-hover:text-[#f26924]">{p.title}</h3>
                    <p className="text-[0.75rem] leading-[1.7] text-gray-500">{p.desc}</p>
                    <span className="block mt-3 text-[0.7rem] font-bold text-[#f26924]">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/doors" className="text-[0.92rem] font-bold text-[#f26924] bg-white border-4 border-[#f26924] px-10 py-4 rounded-full no-underline hover:bg-[#f26924] hover:text-white">
                View All Doors →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-12">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8 border-b border-white/10 pb-6">
            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.5rem)] leading-none text-white">Our Services</h2>
            <p className="text-[0.85rem] text-white/35 max-w-xs leading-[1.7]">Etobicoke's specialists for windows, doors, and everything in between.</p>
          </div>

          {/* Service rows */}
          <div className="flex flex-col">
            {[
              { title: 'Window Replacement', desc: 'Full removal and supply & install of new Energy Star® certified windows. Any style, any size.', href: '/windows' },
              { title: 'Door Installation',  desc: 'Steel, fiberglass, and wood entry doors with foam-insulated cores and multi-point locking systems.', href: '/doors/entry' },
              { title: 'Patio Doors',        desc: 'Sliding, French, and multi-slide systems for seamless indoor-outdoor living.', href: '/doors/patio' },
              { title: 'Repairs & Service',  desc: 'Broken seals, failed hardware, drafty frames, and foggy glass — repaired by certified technicians.', href: '/contact' },
              { title: 'Emergency Service',  desc: 'Same-day emergency board-up and rapid replacement for Etobicoke and GTA homes.', href: '/contact' },
            ].map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-5 border-b border-white/8 no-underline hover:border-[#f26924]/40"
              >
                {/* Title */}
                <div className="font-bebas text-[clamp(1.4rem,2.5vw,2.2rem)] leading-none text-white/80 group-hover:text-white flex-shrink-0 md:w-60">
                  {s.title}
                </div>

                {/* Divider line */}
                <div className="hidden md:block flex-1 h-px bg-white/8 group-hover:bg-[#f26924]/20" />

                {/* Description */}
                <p className="text-[0.82rem] leading-[1.7] text-white/35 group-hover:text-white/60 md:max-w-[220px] md:text-right">
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className="hidden md:flex w-8 h-8 rounded-full border border-white/10 items-center justify-center group-hover:border-[#f26924] group-hover:bg-[#f26924] flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANUFACTURERS ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-14">
          <div className="text-[0.62rem] tracking-[0.25em] uppercase text-gray-400 font-semibold mb-10 text-center">Brands We Install</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-gray-100">

            {/* Gentek */}
            <div className="bg-white flex items-center justify-center py-10 px-6 group hover:bg-[#FAF9F7]">
              <svg viewBox="0 0 120 40" className="w-28 h-auto opacity-40 group-hover:opacity-80" fill="none">
                <rect x="0" y="8" width="4" height="24" fill="#1A1A1A"/>
                <rect x="8" y="8" width="4" height="24" fill="#1A1A1A"/>
                <text x="18" y="28" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#1A1A1A" letterSpacing="1">GENTEK</text>
              </svg>
            </div>

            {/* Pella */}
            <div className="bg-white flex items-center justify-center py-10 px-6 group hover:bg-[#FAF9F7]">
              <svg viewBox="0 0 100 40" className="w-24 h-auto opacity-40 group-hover:opacity-80" fill="none">
                <circle cx="12" cy="20" r="10" stroke="#C8102E" strokeWidth="3"/>
                <circle cx="12" cy="20" r="4" fill="#C8102E"/>
                <text x="28" y="27" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#1A1A1A" letterSpacing="0.5">PELLA</text>
              </svg>
            </div>

            {/* Milgard */}
            <div className="bg-white flex items-center justify-center py-10 px-6 group hover:bg-[#FAF9F7]">
              <svg viewBox="0 0 130 40" className="w-28 h-auto opacity-40 group-hover:opacity-80" fill="none">
                <rect x="0" y="14" width="20" height="12" fill="#003DA5"/>
                <text x="26" y="28" fontFamily="Arial" fontWeight="700" fontSize="19" fill="#1A1A1A" letterSpacing="0.5">MILGARD</text>
              </svg>
            </div>

            {/* Jeld-Wen */}
            <div className="bg-white flex items-center justify-center py-10 px-6 group hover:bg-[#FAF9F7]">
              <svg viewBox="0 0 120 40" className="w-28 h-auto opacity-40 group-hover:opacity-80" fill="none">
                <text x="0" y="28" fontFamily="Arial" fontWeight="900" fontSize="21" fill="#E31837" letterSpacing="0.5">JELD</text>
                <text x="52" y="28" fontFamily="Arial" fontWeight="400" fontSize="21" fill="#1A1A1A" letterSpacing="0.5">-WEN</text>
              </svg>
            </div>

            {/* Andersen */}
            <div className="bg-white flex items-center justify-center py-10 px-6 group hover:bg-[#FAF9F7]">
              <svg viewBox="0 0 140 40" className="w-32 h-auto opacity-40 group-hover:opacity-80" fill="none">
                <path d="M10 30 L20 10 L30 30" stroke="#00704A" strokeWidth="3" strokeLinejoin="round"/>
                <line x1="13" y1="23" x2="27" y2="23" stroke="#00704A" strokeWidth="2.5"/>
                <text x="38" y="28" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#1A1A1A" letterSpacing="0.5">ANDERSEN</text>
              </svg>
            </div>

            {/* Marvin */}
            <div className="bg-white flex items-center justify-center py-10 px-6 group hover:bg-[#FAF9F7]">
              <svg viewBox="0 0 110 40" className="w-28 h-auto opacity-40 group-hover:opacity-80" fill="none">
                <path d="M2 30 L2 10 L14 24 L26 10 L26 30" stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                <text x="32" y="28" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#1A1A1A" letterSpacing="0.5">ARVIN</text>
              </svg>
            </div>

          </div>
          <p className="text-center text-[0.72rem] text-gray-400 mt-6">And many more — we source the best product for your budget and climate zone.</p>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20">

          <div className="mb-12">
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-none text-[#1A1A1A]">Before &amp; After</h2>
            <p className="text-[0.9rem] text-gray-500 mt-2 max-w-lg">Every job is a transformation. See the difference a proper install makes — from drafty old units to premium, sealed systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Long Branch — Casement Windows',
                before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
                after:  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
                tag: '14 Windows · 1 Day',
              },
              {
                label: 'Mimico — Entry Door',
                before: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
                after:  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80',
                tag: 'Steel Door + Sidelites',
              },
              {
                label: 'Alderwood — Bay Window',
                before: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
                after:  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80',
                tag: 'Bay Window · Triple Pane',
              },
            ].map(item => (
              <div key={item.label} className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="flex flex-col">
                    <div className="relative h-48 bg-gray-200">
                      <Image src={item.before} alt={`Before — ${item.label}`} fill className="object-cover brightness-75" />
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-[0.55rem] font-bold tracking-[0.15em] uppercase px-2 py-1">Before</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative h-48 bg-gray-200">
                      <Image src={item.after} alt={`After — ${item.label}`} fill className="object-cover" />
                      <div className="absolute top-2 left-2 bg-[#f26924] text-white text-[0.55rem] font-bold tracking-[0.15em] uppercase px-2 py-1">After</div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-[0.82rem] font-bold text-[#1A1A1A]">{item.label}</div>
                    <div className="text-[0.68rem] text-gray-400 mt-0.5">{item.tag}</div>
                  </div>
                  <Link href="/contact" className="text-[0.68rem] font-bold text-[#f26924] no-underline hover:underline shrink-0 ml-4">
                    Get a quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUPONS ── */}
      <section id="coupons" className="bg-[#0D1B2A]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-white mb-2">Current Offers &amp; Coupons</h2>
              <p className="text-[0.9rem] text-white/40">No code needed — mention when booking.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coupons.map((c) => (
              <div key={c.title} className="relative border-2 border-dashed border-gray-300">
                <div className="absolute -top-3 left-5 flex items-center gap-1 bg-[#0D1B2A] px-2">
                  <span className="text-gray-400 text-sm">✂</span>
                  <span className="text-[0.55rem] tracking-[0.15em] uppercase text-gray-400">Clip &amp; Save</span>
                </div>
                {c.tag && (
                  <div className="absolute top-3 right-3 bg-[#f26924] text-white text-[0.52rem] font-bold tracking-[0.15em] uppercase px-2 py-0.5">
                    {c.tag}
                  </div>
                )}
                <div className="grid grid-cols-[100px_1fr]">
                  <div
                    className="flex flex-col items-center justify-center text-center p-4 border-r-2 border-dashed border-gray-300"
                    style={{ backgroundColor: c.badgeColor }}
                  >
                    <div className="text-white text-[0.5rem] font-bold tracking-[0.2em] uppercase mb-2 opacity-80">{c.badge}</div>
                    <div className="font-bebas text-white leading-none whitespace-pre-line text-[1.6rem]">{c.highlight}</div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-bebas text-[1.3rem] leading-none text-[#1A1A1A]">{c.title}</h3>
                    <p className="text-[0.72rem] leading-[1.65] text-gray-500 flex-1">{c.desc}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
                      <span className="text-[0.58rem] text-gray-400">
                        <span className="font-semibold">Expires:</span> {c.expiry}
                      </span>
                      <Link href="/contact" className="text-[0.65rem] font-bold text-[#f26924] no-underline hover:underline">
                        Claim →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── REVIEWS ── */}
      <section id="reviews" className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-white mb-2">What Clients Say</h2>
              <p className="text-[0.9rem] text-white/40">4.9 / 5.0 · 380+ verified reviews</p>
            </div>
          </div>

          {/* Text testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white/5 border border-white/10 p-7">
                <div className="text-[0.6rem] tracking-[5px] text-[#f26924] mb-4">{'★'.repeat(t.stars)}</div>
                <p className="font-instrument italic text-[0.95rem] leading-[1.7] text-white mb-5">{t.quote}</p>
                <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white">{t.name}</div>
                <div className="text-[0.62rem] text-white/40 mt-0.5">{t.area}</div>
              </div>
            ))}
          </div>

          {/* Video reviews */}
          <div className="border-t border-white/10 pt-10">
            <div className="text-[0.62rem] tracking-[0.22em] uppercase text-white/30 font-semibold mb-6">Video Reviews</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {videoReviews.map(v => (
                <div key={v.name} className="group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-[3/4] bg-gray-800">
                    <Image
                      src={v.thumb}
                      alt={v.name}
                      fill
                      className="object-cover object-top brightness-[0.55] group-hover:brightness-[0.4]"
                    />

                    {/* Stars top-left */}
                    <div className="absolute top-3 left-3 text-[0.55rem] tracking-[4px] text-[#f26924]">
                      {'★'.repeat(v.stars)}
                    </div>

                    {/* Platform badge top-right */}
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm px-2 py-0.5 text-[0.52rem] font-bold text-white/70 tracking-[0.1em] uppercase">
                      {v.platform}
                    </div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center group-hover:bg-[#f26924]/80 group-hover:border-[#f26924]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                          <polygon points="3,1 13,7 3,13" />
                        </svg>
                      </div>
                    </div>

                    {/* Quote overlay bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-[0.7rem] italic leading-[1.6] text-white/90">{v.quote}</p>
                    </div>
                  </div>

                  {/* Name below */}
                  <div className="pt-3">
                    <div className="text-[0.72rem] font-bold text-white">{v.name}</div>
                    <div className="text-[0.62rem] text-white/35 mt-0.5">{v.area}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
