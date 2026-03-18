import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Awning Windows | Etobicoke Windows & Doors' }

export default function AwningPage() {
  return (
    <ProductDetail
      section="Windows / Awning"
      code=""
      title="Awning"
      titleItalic="windows"
      subtitle="Hinged at the top and opening outward from the bottom — ventilate your home even during light rain, year-round."
      heroImg="/awning-windows.webp"
      description="Awning windows are hinged at the top and crank open from the bottom, with the open sash acting as a natural awning to deflect rain. This makes them ideal for Toronto's spring and fall seasons when you want fresh air without worrying about sudden showers. Commonly paired above or below picture windows, or in basements and bathrooms where privacy and ventilation are both needed."
      specs={[
        { label: 'Frame Materials',  value: 'Wood · Fiberglass · Vinyl' },
        { label: 'Glass Options',    value: 'Double or Triple Pane' },
        { label: 'Energy Rating',    value: 'Energy Star® Certified' },
        { label: 'Opening',          value: 'Top-Hinged, Bottom Out' },
        { label: 'Max Size',         value: '48" W × 36" H' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Rain-Proof Ventilation',
          desc: 'The outward-opening sash acts as a natural awning — blocking rain while channelling fresh air into your home. Breathe easy even on Toronto\'s grey, drizzly days.',
          img: 'https://images.unsplash.com/photo-1527515637462-cff94ebb57eb?w=900&q=80',
        },
        {
          title: 'Multi-Point Locking',
          desc: 'A cam-style, multi-point locking system compresses the sash firmly against the full perimeter weatherstripping — delivering exceptional air and water infiltration ratings.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
        {
          title: 'Paired & Stacked Installs',
          desc: 'Mount an awning below a fixed picture window for ventilation without sacrificing the view. Custom stacking and pairing configurations are available on every order.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Egress-Ready Basement',
          desc: 'Meet Ontario Building Code egress requirements in basement installations. Our awning windows provide required clear opening dimensions while maintaining privacy and security.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose awning windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Casement',    href: '/windows/casement'    },
        { label: 'Double-Hung', href: '/windows/double-hung' },
        { label: 'Bay & Bow',   href: '/windows/bay-bow'     },
        { label: 'All Windows', href: '/windows'              },
      ]}
      couponBadge={{
        label: 'Spring Awning Deal — 20% Off',
        detail: 'Save 20% on awning window installs booked this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Sarah M.',
            text: 'The awning windows are perfect for our basement. We love the ventilation and the rain never gets in!',
            rating: 5,
          },
          {
            name: 'James T.',
            text: 'Easy to operate and very secure. The installation was quick and professional.',
            rating: 4,
          },
          {
            name: 'Priya S.',
            text: 'Great for privacy and fresh air. Highly recommend for bathrooms!',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Awning windows in every bathroom — perfect ventilation, rain or shine."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Basement egress windows installed in a day. Crew was professional and clean."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Paired above our picture window — looks stunning and works perfectly."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Best installation crew I\'ve dealt with. Quick, tidy, and great quality."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
