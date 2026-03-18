import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Bay & Bow Windows | Etobicoke Windows & Doors' }

export default function BayBowPage() {
  return (
    <ProductDetail
      section="Windows / Bay & Bow"
      code=""
      title="Bay &"
      titleItalic="Bow Windows"
      subtitle="Architectural window projections that expand your living space, flood interiors with natural light, and create dramatic curb presence."
      heroImg="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80"
      description="Bay windows project outward from the wall in a three-panel configuration at 30° or 45° angles, creating a recessed nook inside. Bow windows use four or more panels of equal size to form a graceful curve. Both styles dramatically increase natural light, create an architectural focal point on your home's exterior, and add usable interior space — perfect for reading nooks or window seats."
      specs={[
        { label: 'Bay Angles',       value: '30° or 45°' },
        { label: 'Bow Panels',       value: '4 or 5 Panels' },
        { label: 'Frame Materials',  value: 'Wood · Fiberglass · Vinyl' },
        { label: 'Glass Options',    value: 'Double or Triple Pane' },
        { label: 'Seat Board',       value: 'Optional Interior Seat' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Expanded Space',
          desc: 'Projects 12"–24" outward, creating a genuine interior nook perfect for seating, plants, or a reading corner.',
          img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
        },
        {
          title: 'Panoramic Light',
          desc: 'Multiple panels at varying angles flood rooms with light from multiple directions simultaneously — transforming any room.',
          img: 'https://images.unsplash.com/photo-1527515637462-cff94ebb57eb?w=900&q=80',
        },
        {
          title: 'Curb Appeal',
          desc: 'One of the highest-impact exterior upgrades you can make to a Toronto home — instantly recognizable and admired.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Structural Support',
          desc: 'Professional installation includes proper structural headers and seat board framing by our certified team.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose bay & bow windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Casement',    href: '/windows/casement'    },
        { label: 'Double-Hung', href: '/windows/double-hung' },
        { label: 'Awning',      href: '/windows/awning'      },
        { label: 'All Windows', href: '/windows'              },
      ]}
      couponBadge={{
        label: 'Spring Bay & Bow Deal — 15% Off',
        detail: 'Save 15% on bay & bow window installs booked this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Jennifer H.',
            text: 'Our bay window is the centrepiece of our living room now. The installation was complex but the team handled it perfectly.',
            rating: 5,
          },
          {
            name: 'Thomas A.',
            text: 'The bow window transformed our dining room completely. Light pours in all day. Absolutely worth every penny.',
            rating: 5,
          },
          {
            name: 'Christine B.',
            text: 'Three companies said the bay window was too complex. Etobicoke Windows did it flawlessly, on budget, on time.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Bay window install transformed our entire front elevation."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Bow window in the dining room — neighbours keep complimenting it."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"A complex bay window three companies wouldn\'t touch. Handled perfectly."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Structural header work was clean and professional. No shortcuts."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
