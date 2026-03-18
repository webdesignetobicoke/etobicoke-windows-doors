import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Entry Doors | Etobicoke Windows & Doors' }

export default function EntryDoorsPage() {
  return (
    <ProductDetail
      section="Doors / Entry"
      code=""
      title="Entry"
      titleItalic="Doors"
      subtitle="Make a lasting first impression. Steel, fiberglass, or solid wood entry systems built for Canadian winters and curb appeal."
      heroImg="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
      description="Your entry door is the first thing visitors see and the last line of defence against Toronto's winters. We supply and install premium entry doors in steel, fiberglass, and solid wood — all with polyurethane foam cores for superior insulation. Choose from hundreds of panel styles, glass insert options, sidelites, and transoms to create a truly custom entrance."
      specs={[
        { label: 'Materials',      value: 'Steel · Fiberglass · Wood' },
        { label: 'Core',           value: 'Polyurethane Foam Insulated' },
        { label: 'Glass Options',  value: 'Full, Half, or No Glass' },
        { label: 'Hardware',       value: 'Schlage · Kwikset · Baldwin' },
        { label: 'Sidelites',      value: 'Single or Double Available' },
        { label: 'Warranty',       value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Security First',
          desc: 'Multi-point locking systems with reinforced frames and anti-kick hardware as standard on all installations.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
        {
          title: 'Foam Insulated',
          desc: 'Injected polyurethane core delivers R-values up to R-20 — dramatically better than old wood doors.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Full Customization',
          desc: 'Hundreds of panel designs, glass inserts, sidelites, transoms, and hardware finishes to match your home.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Same-Day Install',
          desc: 'Most single entry door replacements are completed in 3–4 hours with zero compromise to security overnight.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose our entry doors?"
      relatedTitle="Explore Other Door Types"
      related={[
        { label: 'Patio Doors', href: '/doors/patio' },
        { label: 'Storm Doors', href: '/doors/storm'  },
        { label: 'All Doors',   href: '/doors'        },
      ]}
      couponBadge={{
        label: 'Spring Entry Door Deal — $500 Off',
        detail: 'Save $500 on any entry door supply & install this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'James R.',
            text: 'The new entry door transformed our home. Neighbours keep asking who did it. Best contractor experience in 20 years.',
            rating: 5,
          },
          {
            name: 'Michelle T.',
            text: 'Chose the fiberglass with a glass insert and sidelites. It looks absolutely stunning and the install was done in an afternoon.',
            rating: 5,
          },
          {
            name: 'Paul S.',
            text: 'Solid, secure, and beautiful. The multi-point lock gives me real peace of mind. Couldn\'t be happier.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"New entry door and two patio sliders. Professional and fast."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Steel door with sidelites — completely transformed our curb appeal."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Done in 3 hours. Looks like a custom build. Incredible work."',
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
        ],
      }}
    />
  )
}
