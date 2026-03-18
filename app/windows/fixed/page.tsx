import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Fixed Windows | Etobicoke Windows & Doors' }

export default function FixedWindowPage() {
  return (
    <ProductDetail
      section="Windows / Fixed"
      code=""
      title="Fixed"
      titleItalic="Windows"
      subtitle="Architectural fixed-glass units in any shape or size — circle tops, trapezoids, transoms, and specialty forms that define your home's character."
      heroImg="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      description="Fixed windows are non-opening glass units fabricated in standard and custom shapes — rectangles, squares, arches, half-rounds, octagons, trapezoids, and more. They serve both as standalone accent pieces and as complementary sidelites or transoms alongside operable windows and doors. Because they are permanently sealed, fixed windows deliver the highest energy performance of any glazing type, with no hardware wear points and no air infiltration."
      specs={[
        { label: 'Frame Materials',  value: 'Vinyl · Fiberglass · Wood-Clad' },
        { label: 'Shapes',           value: 'Rectangle · Arch · Half-Round · Custom' },
        { label: 'Glass Options',    value: 'Double or Triple Pane + Low-E' },
        { label: 'Energy Rating',    value: 'Energy Star® Certified' },
        { label: 'Size',             value: 'Fully Custom — Any Dimension' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Any Shape',
          desc: 'Circle tops, arches, octagons, trapezoids — fabricated to match any architectural detail on your home.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
        {
          title: 'Superior Thermal Performance',
          desc: 'A fully sealed unit with no moving parts achieves the highest possible energy ratings — ideal for north-facing walls.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
        {
          title: 'Accent & Transom Use',
          desc: 'Pair with entry doors, casements, or patio doors as sidelites and transoms to add light and architectural interest.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Zero Maintenance',
          desc: 'No cranks, hinges, or tracks to service. Fixed windows simply hold their performance year after year.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose fixed windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Picture',         href: '/windows/picture'       },
        { label: 'Casement',        href: '/windows/casement'      },
        { label: 'Tilt & Turn',     href: '/windows/tilt-turn'     },
        { label: 'All Windows',     href: '/windows'               },
      ]}
      couponBadge={{
        label: 'Spring Fixed Window Deal — 10% Off',
        detail: 'Save 10% on fixed window supply & install this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Mark D.',
            text: 'Had a half-round fixed window installed above our entry door. It looks like it was always meant to be there — incredible craftsmanship.',
            rating: 5,
          },
          {
            name: 'Susan L.',
            text: 'The transom fixed windows above our patio doors let in so much extra light. The install was precise and clean.',
            rating: 5,
          },
          {
            name: 'Kevin A.',
            text: 'Custom octagon window in the bathroom. Exactly what we envisioned and perfectly sealed. Couldn\'t be happier.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Custom arch fixed window above the door — absolutely stunning."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Transom fixed units installed perfectly. Light is incredible."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Half-round fixed window — looks like a custom home now."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Fast, professional, and the result is perfect."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
