import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mt-[96px] lg:mt-[124px] min-h-screen flex items-center justify-center border-b border-[#0A0A0A]">
      <div className="text-center px-8">
        <div className="font-bebas text-[12rem] leading-[0.9] text-[#F0EEE9]">404</div>
        <div className="font-bebas text-[clamp(2rem,4vw,4rem)] text-[#0A0A0A] mb-6">Page Not Found</div>
        <p className="text-[0.88rem] text-[#7A786F] leading-[1.8] mb-10 max-w-md mx-auto">
          Looks like this page has been replaced — just like an old window. Let's get you back somewhere useful.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="bg-[#0A0A0A] text-white text-[0.72rem] font-semibold tracking-[0.18em] uppercase px-8 py-4 no-underline hover:bg-[#f26924]">← Back Home</Link>
          <Link href="/contact" className="border border-[#0A0A0A] text-[#0A0A0A] text-[0.72rem] font-semibold tracking-[0.18em] uppercase px-8 py-4 no-underline hover:bg-[#0A0A0A] hover:text-white">Get a Quote</Link>
        </div>
      </div>
    </div>
  )
}
