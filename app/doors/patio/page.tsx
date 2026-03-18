import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Patio & French Doors | Etobicoke Windows & Doors' }

export default function PatioDoorsPage() {
  return (
    <ProductDetail
      section="Doors / Patio"
      code=""
      title="Patio &"
      titleItalic="French Doors"
      subtitle="Sliding, swinging French, and multi-slide systems that erase the boundary between your interior and outdoor living spaces."
      heroImg="https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=1200&q=80"
      description="Patio doors come in three configurations — sliding, French (hinged), and multi-slide lift-and-slide. Sliding doors glide on precision-engineered stainless steel tracks built for Canadian winters, never freezing or sticking. French doors swing outward or inward for a classic architectural look. All systems feature dual or triple-pane glass with Low-E coatings to manage solar heat gain and minimize energy loss."
      specs={[
        { label: 'Styles',          value: 'Sliding · French · Multi-Slide' },
        { label: 'Frame Materials', value: 'Vinyl · Fiberglass · Wood-Clad' },
        { label: 'Glass',           value: 'Double or Triple Pane + Low-E' },
        { label: 'Screen',          value: 'Retractable Screen Included' },
        { label: 'Max Width',       value: 'Up to 16\' Multi-Slide' },
        { label: 'Warranty',        value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Smooth Glide Track',
          desc: 'Stainless steel rollers and tracks engineered for thousands of open/close cycles in freeze-thaw conditions.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Low-E Glass',
          desc: 'Spectrally selective Low-E coating blocks UV and manages solar gain without sacrificing visible light.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Multi-Point Lock',
          desc: 'Three-point locking system engages top, middle, and bottom of the door for security and a perfect air seal.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
        {
          title: 'Retractable Screen',
          desc: 'Integrated retractable insect screen disappears when not in use — no clunky separate screen frame.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose patio & French doors?"
      relatedTitle="Explore Other Door Types"
      related={[
        { label: 'Entry Doors', href: '/doors/entry' },
        { label: 'Storm Doors', href: '/doors/storm'  },
        { label: 'All Doors',   href: '/doors'        },
      ]}
      couponBadge={{
        label: 'Spring Patio Door Deal — 15% Off',
        detail: 'Save 15% on patio & French door installs this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Andrea M.',
            text: 'The French doors open our living room to the deck beautifully. The quality is exceptional and the install was flawless.',
            rating: 5,
          },
          {
            name: 'Derek P.',
            text: 'Sliding door glides so smoothly, even in winter. The retractable screen is genius. Very happy with the whole experience.',
            rating: 5,
          },
          {
            name: 'Natasha W.',
            text: 'Multi-slide door completely opened up our kitchen to the backyard. Best home upgrade we\'ve ever made.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"French doors to the backyard — absolutely transformed our home."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"New patio slider — smooth as silk, even at -20°C."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Multi-slide system opened our whole back wall. Stunning."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Professional crew, clean work, and an incredible final result."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
