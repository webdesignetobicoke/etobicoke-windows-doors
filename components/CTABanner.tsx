import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-[#f26924]">
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95] text-white">
            Ready to transform your home?
          </h2>
          <p className="text-[0.88rem] text-white/75 leading-[1.75] max-w-lg">
            No pressure. No obligation. We come to you anywhere in the Greater Toronto Area.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 bg-white text-[#f26924] text-[0.72rem] font-bold px-10 py-4 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white"
        >
          Book a Free Consultation →
        </Link>
      </div>
    </section>
  )
}
