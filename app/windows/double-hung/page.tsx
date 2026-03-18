import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Double-Hung Windows | Etobicoke Windows & Doors' }

export default function DoubleHungPage() {
  return (
    <ProductDetail
      section="Windows / Double-Hung"
      code=""
      title="Double-Hung"
      titleItalic="windows"
      subtitle="Both sashes slide independently for flexible airflow and easy cleaning — the classic choice for Toronto's heritage andal homes."
      heroImg="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80"
      description="Double-hung windows feature two operable sashes that slide up and down independently, giving you precise control over ventilation. Open the top sash for hot air to escape, the bottom for fresh air to enter, or both at once. The tilt-in feature on our models lets you clean both sides of the glass from inside — no ladders required."
      specs={[
        { label: 'Frame Materials',  value: 'Wood · Fiberglass · Vinyl' },
        { label: 'Glass Options',    value: 'Double or Triple Pane' },
        { label: 'Energy Rating',    value: 'Energy Star® Certified' },
        { label: 'Sash Operation',   value: 'Both Sashes Operable' },
        { label: 'Max Size',         value: '48" W × 72" H' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Dual Ventilation',
          desc: 'Open top, bottom, or both sashes independently for precise airflow control in any season.',
          img: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80',
        },
        {
          title: 'Tilt-In Cleaning',
          desc: 'Both sashes tilt inward so you can clean the exterior glass from the comfort of your home — no ladders needed.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
        {
          title: 'Heritage Aesthetic',
          desc: 'The most common window style in Toronto — matches perfectly with traditional andal architecture.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Child Safety',
          desc: 'Optional sash limiters restrict opening height for safety without compromising ventilation.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose double-hung windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Casement',    href: '/windows/casement' },
        { label: 'Bay & Bow',   href: '/windows/bay-bow'  },
        { label: 'Awning',      href: '/windows/awning'   },
        { label: 'All Windows', href: '/windows'           },
      ]}
      couponBadge={{
        label: 'Spring Double-Hung Deal — 20% Off',
        detail: 'Save 20% on double-hung window installs booked this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Patricia W.',
            text: 'Replaced all the windows in our 1940s home with double-hung. They look period-appropriate and perform beautifully.',
            rating: 5,
          },
          {
            name: 'Robert N.',
            text: 'The tilt-in cleaning feature is a game changer. So easy to maintain on the second floor.',
            rating: 5,
          },
          {
            name: 'Angela F.',
            text: 'Professional installation, great quality, and our energy bills dropped noticeably the first winter.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Full home double-hung replacement — done in a single day."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Heritage-style home — the double-hungs look perfect."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Couldn\'t be happier. Clean install, stunning result."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Best price in the city. Crew was respectful and fast."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
