import Link from 'next/link'

export const metadata = { title: 'Coupons & Offers | Etobicoke Windows & Doors' }

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
  {
    badge: 'Bundle Deal',  badgeColor: '#B35900', highlight: '10%\nEXTRA',
    title: 'Extra 10% on 5+ Windows',
    desc: 'Order 5 or more windows in a single install and save an additional 10% on top of any other offer.',
    expiry: 'June 30, 2026', tag: null,
  },
  {
    badge: 'Storm Door',   badgeColor: '#00695C', highlight: '$150\nOFF',
    title: 'Storm Door Special',
    desc: 'Save $150 on any storm door supply & install. Ideal for adding an energy-efficient layer to any entry.',
    expiry: 'May 31, 2026', tag: null,
  },
]

export default function CouponsPage() {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="bg-[#0D1B2A] py-24">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h1 className="font-bebas text-[clamp(4rem,7vw,7.5rem)] leading-[0.88] text-white mb-6">
            Current Offers<br /><span className="text-[#f26924]">&amp; Coupons</span>
          </h1>
          <p className="text-[1.05rem] leading-[1.85] text-white/60 max-w-[520px]">
            No code needed — just mention the offer when you book. All deals subject to availability.
          </p>
        </div>
      </section>

      {/* ── COUPONS GRID ── */}
      <section className="bg-[#0D1B2A]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coupons.map((c) => (
              <div key={c.title} className="relative border-2 border-dashed border-white/20">
                <div className="absolute -top-3 left-5 flex items-center gap-1 bg-[#0D1B2A] px-2">
                  <span className="text-white/30 text-sm">✂</span>
                  <span className="text-[0.55rem] tracking-[0.15em] uppercase text-white/30">Clip &amp; Save</span>
                </div>
                {c.tag && (
                  <div className="absolute top-3 right-3 bg-[#f26924] text-white text-[0.52rem] font-bold tracking-[0.15em] uppercase px-2 py-0.5">
                    {c.tag}
                  </div>
                )}
                <div className="grid grid-cols-[100px_1fr]">
                  <div
                    className="flex flex-col items-center justify-center text-center p-4 border-r-2 border-dashed border-white/20"
                    style={{ backgroundColor: c.badgeColor }}
                  >
                    <div className="text-white text-[0.5rem] font-bold tracking-[0.2em] uppercase mb-2 opacity-80">{c.badge}</div>
                    <div className="font-bebas text-white leading-none whitespace-pre-line text-[1.6rem]">{c.highlight}</div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="font-bebas text-[1.3rem] leading-none text-white">{c.title}</h3>
                    <p className="text-[0.72rem] leading-[1.65] text-white/50 flex-1">{c.desc}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-dashed border-white/10">
                      <span className="text-[0.58rem] text-white/30">
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

      {/* ── CTA ── */}
      <section className="bg-[#f26924] py-16">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.5rem)] leading-none text-white mb-2">Ready to claim your offer?</h2>
            <p className="text-[0.9rem] text-white/75">Book a free consultation and mention your coupon when booking.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-[#f26924] text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white">
            Book a Free Consultation →
          </Link>
        </div>
      </section>

    </div>
  )
}
