import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Picture Windows | Etobicoke Windows & Doors' }

export default function PictureWindowPage() {
  return (
    <ProductDetail
      section="Windows / Picture"
      code=""
      title="Picture"
      titleItalic="Windows"
      subtitle="Floor-to-ceiling fixed glass that frames your view like a work of art — maximum light, maximum insulation, zero compromise."
      heroImg="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
      description="Picture windows are large, fixed-pane windows designed purely to frame views and flood interiors with natural light. Because they don't open, they have no moving parts, no weatherstripping wear points, and no operational hardware — making them the most thermally efficient and lowest-maintenance window style available. Pair them with adjacent casements or sliders for ventilation without sacrificing the view."
      specs={[
        { label: 'Frame Materials',  value: 'Vinyl · Fiberglass · Wood-Clad' },
        { label: 'Glass Options',    value: 'Double or Triple Pane + Low-E' },
        { label: 'Energy Rating',    value: 'Energy Star® Certified' },
        { label: 'Operation',        value: 'Fixed — Non-Opening' },
        { label: 'Max Size',         value: 'Custom — Up to 120" W' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Maximum Light',
          desc: 'No sash rails or meeting rails — the entire frame is glass, delivering up to 40% more light than comparable operable windows.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Best-in-Class Insulation',
          desc: 'No operable hardware means zero air leakage points. Picture windows consistently achieve the highest energy ratings of any window style.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
        {
          title: 'Custom Sizes',
          desc: 'Fabricated to any dimension — from a small accent pane to a full living room feature wall of glass.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Low Maintenance',
          desc: 'No cranks, no tracks, no weatherstripping to replace. Clean the glass — that\'s it.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose picture windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'End-Vent Slider', href: '/windows/end-vent-slider' },
        { label: 'Casement',        href: '/windows/casement'        },
        { label: 'Fixed',           href: '/windows/fixed'           },
        { label: 'All Windows',     href: '/windows'                 },
      ]}
      couponBadge={{
        label: 'Spring Picture Window Deal — 10% Off',
        detail: 'Save 10% on picture window supply & install this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Catherine H.',
            text: 'The large picture window in our living room completely transformed the space. So much light — our plants love it too.',
            rating: 5,
          },
          {
            name: 'Stephen N.',
            text: 'Had a floor-to-ceiling picture window installed overlooking the backyard. Neighbours always comment on how stunning it looks.',
            rating: 5,
          },
          {
            name: 'Olivia R.',
            text: 'Clean install, perfect seal. You can immediately feel the warmth retained in the room versus the old leaky window.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Large picture window install — the view is absolutely stunning."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Floods the living room with light. Best upgrade we\'ve made."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Custom size, perfect fit. The crew was meticulous."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Seamless install, incredible result. Highly recommend."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
