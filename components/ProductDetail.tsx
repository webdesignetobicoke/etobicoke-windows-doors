import Image from 'next/image'
import Link from 'next/link'
import FinishesTabs from '@/components/FinishesTabs'

interface Spec    { label: string; value: string }
interface Feature { title: string; desc: string; img?: string }

interface Review { name: string; text: string; rating: number }
interface VideoReview { thumb: string; name: string; area: string; quote: string; stars: number; platform: string }
interface ReviewSection { title: string; reviews: Review[]; videoReviews?: VideoReview[] }

interface ProductDetailProps {
  section: string
  code: string
  title: string
  titleItalic?: string
  subtitle: string
  heroImg: string
  description: string
  specs: Spec[]
  features: Feature[]
  featuresTitle: string
  relatedTitle: string
  related: { label: string; href: string }[]
  reviewSection?: ReviewSection
  couponBadge?: { label: string; detail: string; href: string }
}

export default function ProductDetail({
  section, code, title, titleItalic, subtitle, heroImg,
  description, specs, features, featuresTitle, relatedTitle, related, reviewSection, couponBadge,
}: ProductDetailProps) {
  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="relative bg-[#0f0f0f] overflow-hidden min-h-[88vh] flex items-center">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={heroImg} alt={title} fill className="object-contain object-right opacity-20 scale-110" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/75 to-[#0f0f0f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/70 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6 md:gap-7">

            <div>
              {code && <div className="text-[0.65rem] font-semibold text-white/30 mb-1">{code}</div>}
              <h1 className="font-bebas text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.88] text-white">
                {title}<br />
                {titleItalic && <span className="text-[#f26924]">{titleItalic}</span>}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-[0.88rem] font-bold text-white">4.8</span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill={s <= 4 ? '#f26924' : 'none'} stroke="#f26924" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="text-[0.72rem] text-white/40 underline cursor-pointer">124 Reviews</span>
            </div>

            {/* Mobile image card — between rating and subtitle */}
            <div className="lg:hidden w-full">
              <div className="relative w-full aspect-square border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                <Image src={heroImg} alt={title} fill className="object-contain p-10" priority />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
                  <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/35 mb-1">Etobicoke Windows</div>
                  <div className="text-[0.82rem] font-semibold text-white">{title} {titleItalic} — 2024 Collection</div>
                </div>
              </div>
            </div>

            <p className="text-[1rem] md:text-[1.05rem] leading-[1.85] text-white max-w-[480px]">{subtitle}</p>

            {/* Energy Star + Coupon row */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 flex-1">
                <Image src="/logos/energy-star.svg" alt="Energy Star" width={44} height={44} className="flex-shrink-0" />
                <div>
                  <div className="text-[0.95rem] font-bold text-white leading-tight">Energy Star® Certified</div>
                  <div className="text-[0.8rem] text-white/45 mt-1">Meets Canadian climate zone requirements</div>
                </div>
              </div>
              {couponBadge && (
                <Link href={couponBadge.href} className="flex items-center gap-4 border border-[#f26924]/40 bg-[#f26924]/10 backdrop-blur-sm px-5 py-4 no-underline group flex-1">
                  <span className="text-[1.8rem]">🏷️</span>
                  <div>
                    <div className="text-[0.95rem] font-bold text-[#f26924] leading-tight">{couponBadge.label}</div>
                    <div className="text-[0.8rem] text-white/45 mt-1 group-hover:text-[#f26924]">{couponBadge.detail}</div>
                  </div>
                </Link>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-[#f26924] text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-white hover:text-[#f26924] text-center sm:flex-1">
                Book a Free Consultation →
              </Link>
              <Link href="#overview" className="border border-white/20 text-white text-[0.92rem] font-bold px-10 py-4 rounded-full no-underline hover:border-[#f26924] hover:text-[#f26924] text-center sm:flex-1">
                Learn More ↓
              </Link>
            </div>
          </div>

          {/* Right — product image card: hidden on mobile, shown on lg */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-[420px] aspect-square border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <Image src={heroImg} alt={title} fill className="object-contain p-10" priority />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/35 mb-1">Etobicoke Windows</div>
                <div className="text-[0.82rem] font-semibold text-white">{title} {titleItalic} — 2024 Collection</div>
              </div>
            </div>
          </div>

        </div>


      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">
          <p className="text-[1.15rem] md:text-[1.05rem] leading-[1.9] text-gray-600 max-w-3xl">{description}</p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

          {/* Header */}
          <div className="mb-10">
            <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.5rem)] leading-none text-[#1A1A1A]">{featuresTitle}</h2>
            <p className="text-[1.05rem] text-gray-400 mt-2">Every detail engineered for Toronto's climate — from rain-soaked springs to frigid winters.</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className=" overflow-hidden shadow-sm border border-gray-100 bg-white">
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  {f.img
                    ? <Image src={f.img} alt={f.title} fill className="object-cover" />
                    : <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100" />
                  }
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bebas text-[1.4rem] leading-tight text-[#1A1A1A] mb-2">{f.title}</h3>
                  <p className="text-[0.95rem] leading-[1.8] text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN OPTIONS ── */}
      <FinishesTabs />

      {/* ── RELATED ── */}
      <section className="bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-10">
          <div className="text-[0.62rem] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-5">{relatedTitle}</div>
          <div className="flex flex-wrap gap-3">
            {related.map(r => (
              <Link key={r.href} href={r.href} className="bg-white border border-gray-200 text-[#1A1A1A] text-[0.72rem] font-semibold px-5 py-2.5  no-underline hover:bg-[#f26924] hover:text-white hover:border-[#f26924]">
                {r.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      {reviewSection && (
        <section className="bg-[#1A1A1A]">
          <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-16">

            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.2rem)] leading-none text-white mb-2">{reviewSection.title}</h2>
                <p className="text-[0.9rem] text-white/40">4.8 / 5.0 · 124 verified reviews</p>
              </div>
            </div>

            {/* Text reviews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {reviewSection.reviews.map((r) => (
                <div key={r.name} className="bg-white/5 border border-white/10 p-7">
                  <div className="text-[0.6rem] tracking-[5px] text-[#f26924] mb-4">{'★'.repeat(r.rating)}</div>
                  <p className="italic text-[0.95rem] leading-[1.7] text-white mb-5">"{r.text}"</p>
                  <div className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white">{r.name}</div>
                </div>
              ))}
            </div>

            {/* Video reviews */}
            {reviewSection.videoReviews && reviewSection.videoReviews.length > 0 && (
              <div className="border-t border-white/10 pt-10">
                <div className="text-[0.62rem] tracking-[0.22em] uppercase text-white/30 font-semibold mb-6">Video Reviews</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {reviewSection.videoReviews.map(v => (
                    <div key={v.name} className="group cursor-pointer">
                      <div className="relative overflow-hidden aspect-[3/4] bg-gray-800">
                        <Image src={v.thumb} alt={v.name} fill className="object-cover object-top brightness-[0.55] group-hover:brightness-[0.4]" />
                        <div className="absolute top-3 left-3 text-[0.55rem] tracking-[4px] text-[#f26924]">{'★'.repeat(v.stars)}</div>
                        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm px-2 py-0.5 text-[0.52rem] font-bold text-white/70 tracking-[0.1em] uppercase">{v.platform}</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center group-hover:bg-[#f26924]/80 group-hover:border-[#f26924]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><polygon points="3,1 13,7 3,13" /></svg>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-[0.7rem] italic leading-[1.6] text-white/90">{v.quote}</p>
                        </div>
                      </div>
                      <div className="pt-3">
                        <div className="text-[0.72rem] font-bold text-white">{v.name}</div>
                        <div className="text-[0.62rem] text-white/35 mt-0.5">{v.area}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

    </div>
  )
}
