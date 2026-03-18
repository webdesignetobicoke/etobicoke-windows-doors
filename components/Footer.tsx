import Link from 'next/link'

const windows = [
  { label: 'Casement',    href: '/windows/casement'   },
  { label: 'Double-Hung', href: '/windows/double-hung' },
  { label: 'Bay & Bow',   href: '/windows/bay-bow'     },
  { label: 'Awning',      href: '/windows/awning'      },
]
const doors = [
  { label: 'Entry Doors', href: '/doors/entry' },
  { label: 'Patio Doors', href: '/doors/patio' },
  { label: 'Storm Doors', href: '/doors/storm' },
]
const company = [
  { label: 'About Us',    href: '/about'    },
  { label: 'Our Process', href: '/process'  },
  { label: 'Finishes',    href: '/finishes' },
  { label: 'Coupons',     href: '/#coupons' },
  { label: 'Contact',     href: '/contact'  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* ── LARGE CTA ROW ── */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-bebas text-[clamp(2.2rem,4vw,3.8rem)] leading-none text-white mb-2">
              Ready for new windows or doors?
            </div>
            <p className="text-[1rem] text-white/50">Free in-home quotes · 7 days a week · Etobicoke & GTA</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 w-full md:w-auto bg-[#f26924] text-white text-[1rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-white hover:text-[#f26924] text-center"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-14">

        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div>
            <img src="/logos/logo.png" alt="Etobicoke Windows & Doors" className="h-[48px] w-auto" />
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-white/30 mt-3">Est. 2009 · Licensed & Insured · A+ BBB Rated</div>
          </div>

          <p className="text-[0.95rem] text-white/45 leading-[1.9]">
            Toronto's trusted replacement window and door specialists. Licensed, insured, and A+ BBB rated since 2009.
          </p>

          <div className="flex flex-col gap-3">
            <a href="tel:+16477165155" className="flex items-center gap-3 text-[0.95rem] text-white/60 hover:text-[#f26924] no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              (647) 716-5155
            </a>
            <a href="mailto:webdesignetobicoke@gmail.com" className="flex items-center gap-3 text-[0.95rem] text-white/60 hover:text-[#f26924] no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              webdesignetobicoke@gmail.com
            </a>
            <span className="flex items-center gap-3 text-[0.95rem] text-white/35">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              535 The Eastmall #203, Etobicoke, ON · M9B 4A4
            </span>
          </div>

          <div className="flex gap-3 pt-1">
            {[
              { label: 'Facebook',  path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
            ].map(s => (
              <a key={s.label} href="#" aria-label={s.label} className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[#f26924] hover:text-[#f26924] no-underline">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={s.path}/></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {[
          { heading: 'Windows', links: windows },
          { heading: 'Doors',   links: doors   },
          { heading: 'Company', links: company  },
        ].map(col => (
          <div key={col.heading}>
            <h4 className="text-[0.7rem] tracking-[0.25em] uppercase text-[#f26924] font-bold mb-6">{col.heading}</h4>
            <ul className="flex flex-col gap-4">
              {col.links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.95rem] text-white/45 hover:text-white no-underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[0.8rem] text-white/25">© 2026 Etobicoke Windows & Doors. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Warranty'].map(t => (
              <Link key={t} href="#" className="text-[0.8rem] text-white/25 hover:text-white/60 no-underline">{t}</Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
