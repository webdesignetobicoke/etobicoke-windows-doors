'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

// ── Icons ───────────────────────────────────────────────────────────────────
const IcoWindow   = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16"/><line x1="10" y1="2" x2="10" y2="18"/><line x1="2" y1="10" x2="18" y2="10"/></svg>
const IcoBay      = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="6" width="4" height="12"/><rect x="8" y="2" width="4" height="16"/><rect x="15" y="6" width="4" height="12"/></svg>
const IcoSlider   = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="16" height="14"/><line x1="10" y1="3" x2="10" y2="17"/><polyline points="12,8 15,10 12,12"/></svg>
const IcoPicture  = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16"/><polyline points="4,14 7,10 10,13 13,9 16,14"/></svg>
const IcoTilt     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16"/><line x1="2" y1="10" x2="18" y2="10"/><polyline points="7,7 10,4 13,7"/></svg>
const IcoDoor     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="1" width="12" height="18"/><circle cx="14" cy="10" r="1" fill="currentColor" stroke="none"/></svg>
const IcoGlass    = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="10,2 18,10 10,18 2,10"/></svg>
const IcoLock     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="9" width="12" height="9"/><path d="M7 9V7a3 3 0 016 0v2"/></svg>
const IcoGrid     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="6" height="6"/><rect x="12" y="2" width="6" height="6"/><rect x="2" y="12" width="6" height="6"/><rect x="12" y="12" width="6" height="6"/></svg>
const IcoLayers   = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2,13 10,17 18,13"/><polyline points="2,9 10,13 18,9"/><polyline points="2,5 10,9 18,5"/></svg>
const IcoShield   = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2L3 5v5c0 4.5 3 7 7 8 4-1 7-3.5 7-8V5z"/></svg>
const IcoKey      = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="8" r="4"/><line x1="10.8" y1="11.8" x2="18" y2="19"/><line x1="14" y1="16" x2="16" y2="14"/></svg>
const IcoStar     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="10,2 12.5,8 19,8.5 14,13 15.5,19.5 10,16 4.5,19.5 6,13 1,8.5 7.5,8"/></svg>
const IcoBlind    = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="4" x2="17" y2="4"/><line x1="3" y1="8.5" x2="17" y2="8.5"/><line x1="3" y1="13" x2="17" y2="13"/><line x1="3" y1="17.5" x2="17" y2="17.5"/><line x1="10" y1="17.5" x2="10" y2="20"/></svg>
const IcoShutter  = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16"/><line x1="10" y1="2" x2="10" y2="18"/><line x1="2" y1="6" x2="9.5" y2="8.5"/><line x1="2" y1="11.5" x2="9.5" y2="14"/><line x1="10.5" y1="6" x2="18" y2="8.5"/><line x1="10.5" y1="11.5" x2="18" y2="14"/></svg>
const IcoFrame    = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16"/><rect x="6" y="6" width="8" height="8"/></svg>
const IcoWood     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2,5 Q6,3 10,5 Q14,7 18,5"/><path d="M2,10 Q5,8 10,10 Q15,12 18,10"/><path d="M2,15 Q6,13 10,15 Q14,17 18,15"/></svg>
const IcoFrench   = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="7" height="16"/><rect x="11" y="2" width="7" height="16"/></svg>
const IcoSteel    = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="1" width="12" height="18"/><rect x="6" y="4" width="8" height="5"/><rect x="6" y="12" width="8" height="5"/></svg>
const IcoLeaf     = () => <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 16s2-9 13-13c-4 10-13 13-13 13z"/><line x1="4" y1="16" x2="10" y2="10"/></svg>
const IcoPhone    = () => <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 3h3.5l2 4.5-2.5 2A11 11 0 0013 15l2-2.5 4.5 2V18a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1z"/></svg>

// ── Nav Data ─────────────────────────────────────────────────────────────────
type NavChild    = { label: string; href: string; icon: React.ReactNode }
type NavSection  = { heading: string; items: NavChild[] }
type ProductItem = { label: string; href: string; highlight?: boolean; sections?: NavSection[]; featured?: { title: string; desc: string } }

const productNav: ProductItem[] = [
  {
    label: 'Windows', href: '/windows',
    featured: { title: 'Premium Windows', desc: 'Energy Star® certified for every Canadian climate zone.' },
    sections: [
      { heading: 'By Style', items: [
        { label: 'Awning',          href: '/windows/awning',          icon: <IcoTilt /> },
        { label: 'Casement',        href: '/windows/casement',        icon: <IcoWindow /> },
        { label: 'Single Slider',   href: '/windows/single-slider',   icon: <IcoSlider /> },
        { label: 'End-Vent Slider', href: '/windows/end-vent-slider', icon: <IcoSlider /> },
        { label: 'Bay & Bow',       href: '/windows/bay-bow',         icon: <IcoBay /> },
        { label: 'Double Hung',     href: '/windows/double-hung',     icon: <IcoWindow /> },
        { label: 'Picture',         href: '/windows/picture',         icon: <IcoPicture /> },
        { label: 'Fixed',           href: '/windows/fixed',           icon: <IcoFrame /> },
        { label: 'Tilt & Turn',     href: '/windows/tilt-turn',       icon: <IcoTilt /> },
      ]},
      { heading: 'Glass & Options', items: [
        { label: 'Locking Systems', href: '/windows#design', icon: <IcoLock /> },
        { label: 'Window Grills',   href: '/windows#design', icon: <IcoGrid /> },
        { label: 'Low-E Glass',     href: '/windows#design', icon: <IcoLeaf /> },
        { label: 'Glass Options',   href: '/windows#design', icon: <IcoLayers /> },
        { label: 'Impact Glass',    href: '/windows#design', icon: <IcoShield /> },
      ]},
    ],
  },
  {
    label: 'Entry Doors', href: '/doors/entry',
    featured: { title: 'Entry Doors', desc: 'Steel, fiberglass, and wood doors built for security and curb appeal.' },
    sections: [
      { heading: 'By Style', items: [
        { label: 'Traditional', href: '/doors/entry', icon: <IcoDoor /> },
        { label: 'Modern',      href: '/doors/entry', icon: <IcoDoor /> },
        { label: 'Routed',      href: '/doors/entry', icon: <IcoFrame /> },
        { label: 'Exclusive',   href: '/doors/entry', icon: <IcoStar /> },
      ]},
      { heading: 'By Material', items: [
        { label: 'Steel',              href: '/doors/entry', icon: <IcoSteel /> },
        { label: 'Fiberglass',         href: '/doors/entry', icon: <IcoShield /> },
        { label: 'Door Hardware',      href: '/doors/entry', icon: <IcoKey /> },
        { label: 'Decorative Accents', href: '/doors/entry', icon: <IcoStar /> },
        { label: 'Reeded Wood',        href: '/doors/entry', icon: <IcoWood /> },
      ]},
    ],
  },
  {
    label: 'Door Glass', href: '/doors',
    featured: { title: 'Door Glass Inserts', desc: 'Contemporary, stained, and specialty glass inserts for any door style.' },
    sections: [
      { heading: 'By Design', items: [
        { label: 'Contemporary',    href: '/doors', icon: <IcoGlass /> },
        { label: 'Stained',         href: '/doors', icon: <IcoGlass /> },
        { label: 'Wrought Iron',    href: '/doors', icon: <IcoGrid /> },
        { label: 'Textured',        href: '/doors', icon: <IcoLayers /> },
        { label: 'Mini-Blinds',     href: '/doors', icon: <IcoBlind /> },
        { label: 'Venting Inserts', href: '/doors', icon: <IcoFrame /> },
      ]},
    ],
  },
  {
    label: 'Patio Doors', href: '/doors/patio',
    featured: { title: 'Patio Doors', desc: 'Sliding, garden, and French door systems for seamless indoor-outdoor living.' },
    sections: [
      { heading: 'By Type', items: [
        { label: 'Sliding Doors', href: '/doors/patio', icon: <IcoSlider /> },
        { label: 'Garden Doors',  href: '/doors/patio', icon: <IcoDoor /> },
        { label: 'French Doors',  href: '/doors/patio', icon: <IcoFrench /> },
        { label: 'Vented Doors',  href: '/doors/patio', icon: <IcoFrame /> },
      ]},
    ],
  },
  {
    label: 'Window Coverings', href: '/finishes',
    featured: { title: 'Window Coverings', desc: 'Blinds, shades, and shutters matched to your frame colour.' },
    sections: [
      { heading: 'By Type', items: [
        { label: 'Blinds',   href: '/finishes', icon: <IcoBlind /> },
        { label: 'Shades',   href: '/finishes', icon: <IcoBlind /> },
        { label: 'Shutters', href: '/finishes', icon: <IcoShutter /> },
      ]},
    ],
  },
  { label: 'Special Offers', href: '/coupons', highlight: true },
  { label: 'Financing',      href: '/financing' },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]">

      {/* ══ DESKTOP ══════════════════════════════════════════════════════════ */}

      {/* Top row — Logo · Phone · CTA */}
      <div className="hidden lg:flex items-center border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-10 w-full flex items-center justify-between py-6">

          <Link href="/" className="no-underline flex-shrink-0">
            <img src="/logos/logo.png" alt="Etobicoke Windows" className="h-[64px] w-auto" />
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="tel:+16477165155"
              className="flex items-center gap-2 text-[1rem] font-semibold text-white hover:text-[#f26924] no-underline"
            >
              <span className="text-white/40">Call us:</span>
              (647) 716-5155
            </a>
            <Link
              href="/contact"
              className="bg-[#f26924] text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-white hover:text-[#f26924] whitespace-nowrap"
            >
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row — Menu items */}
      <div className="hidden lg:flex items-center">
        <div className="max-w-[1440px] mx-auto px-10 w-full flex items-center py-3">
          {productNav.map((item) => {
            const isActive = item.href !== '/' && pathname.startsWith(item.href.split('#')[0])
            const isOpen   = openMenu === item.label
            return (
              <div
                key={item.label}
                className="relative h-[64px] flex items-center"
                onMouseEnter={() => item.sections ? setOpenMenu(item.label) : setOpenMenu(null)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 h-full text-[0.95rem] font-semibold no-underline tracking-wide
                    ${item.highlight
                      ? 'text-[#f26924]'
                      : isActive || isOpen
                        ? 'text-white'
                        : 'text-white hover:text-[#f26924]'}`}
                >
                  {item.label}
                  {item.sections && (
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className={`${isOpen ? 'rotate-180' : ''}`}>
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {/* Active underline */}
                {(isActive || isOpen) && !item.highlight && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#f26924]" />
                )}

                {/* Mega dropdown */}
                {item.sections && isOpen && (
                  <div
                    className="absolute top-[64px] left-0 bg-[#1a1a1a] border border-white/10 shadow-2xl z-50 overflow-hidden"
                    style={{ minWidth: item.sections.length > 1 ? 560 : 300 }}
                  >
                    {item.featured && (
                      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-8">
                        <div>
                          <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[#f26924] font-semibold mb-1">{item.featured.title}</div>
                          <p className="text-[0.88rem] text-white/40 leading-[1.6]">{item.featured.desc}</p>
                        </div>
                        <Link href={item.href} className="text-[0.7rem] font-bold text-white/40 no-underline hover:text-[#f26924] whitespace-nowrap flex-shrink-0" onClick={() => setOpenMenu(null)}>
                          View all →
                        </Link>
                      </div>
                    )}
                    <div className={`grid ${item.sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} divide-x divide-white/10`}>
                      {item.sections.map((sec) => (
                        <div key={sec.heading} className="py-3">
                          <div className="px-5 pt-3 pb-2 text-[0.56rem] tracking-[0.22em] uppercase text-white/30 font-bold">{sec.heading}</div>
                          {sec.items.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-3 px-5 py-2.5 text-[0.92rem] font-medium text-white no-underline hover:text-[#f26924] hover:bg-white/5 group"
                              onClick={() => setOpenMenu(null)}
                            >
                              <span className="text-white/20 group-hover:text-[#f26924] flex-shrink-0">{child.icon}</span>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ══ MOBILE ═══════════════════════════════════════════════════════════ */}

      <div className="lg:hidden flex items-center justify-between px-5 py-6">
        <Link href="/" className="no-underline flex-shrink-0">
          <img src="/logos/logo.png" alt="Etobicoke Windows" className="h-[60px] w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <a href="tel:+16477165155" className="text-[0.95rem] font-semibold text-white no-underline whitespace-nowrap">
            <span className="text-white/40">Call us:</span> 647 716 5155
          </a>
          <button
            className="flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-white/10 max-h-[85vh] overflow-y-auto">
          {productNav.map((item) => (
            <div key={item.label} className="border-b border-white/8">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 px-6 py-4 text-[0.92rem] font-semibold no-underline tracking-wide ${item.highlight ? 'text-[#f26924]' : 'text-white'}`}
                >
                  {item.label}
                </Link>
                {item.sections && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="px-5 py-4 text-white/40 hover:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={mobileExpanded === item.label ? 'M2 9l5-5 5 5' : 'M2 5l5 5 5-5'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
              {item.sections && mobileExpanded === item.label && (
                <div className="bg-[#0a0a0a] pb-2">
                  {item.sections.map(sec => (
                    <div key={sec.heading}>
                      <div className="px-6 pt-4 pb-2 text-[0.56rem] tracking-[0.22em] uppercase text-[#f26924] font-bold">{sec.heading}</div>
                      {sec.items.map(child => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-6 py-3 text-[0.85rem] font-medium text-white/50 no-underline hover:text-white border-t border-white/5"
                        >
                          <span className="text-[#f26924]/60 flex-shrink-0">{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center px-6 py-5 text-[0.92rem] font-bold bg-[#f26924] text-white no-underline"
          >
            Book a Free Consultation →
          </Link>
        </div>
      )}

    </nav>
  )
}
