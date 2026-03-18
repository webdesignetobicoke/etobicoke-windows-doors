interface PageHeroProps {
  section: string
  title: string
  titleItalic?: string
  subtitle?: string
}

export default function PageHero({ section, title, titleItalic, subtitle }: PageHeroProps) {
  return (
    <section className="mt-[96px] lg:mt-[124px] bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-20 md:py-28">
        <div className="text-[0.65rem] tracking-[0.22em] uppercase text-[#f26924] font-semibold mb-5">{section}</div>
        <h1 className="font-bebas text-[clamp(3.5rem,7vw,7rem)] leading-[0.92] text-[#1A1A1A]">
          {title}
          {titleItalic && (
            <><br /><span className="font-instrument italic text-[#f26924] text-[clamp(3rem,6vw,6rem)]">{titleItalic}</span></>
          )}
        </h1>
        {subtitle && (
          <p className="mt-8 text-[0.95rem] leading-[1.85] text-gray-500 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
