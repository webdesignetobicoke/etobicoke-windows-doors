import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Casement Windows | Etobicoke Windows & Doors' }

export default function CasementPage() {
  return (
    <ProductDetail
      section="Windows / Casement"
      code=""
      title="Casement"
      titleItalic="windows"
      subtitle="Side-hinged windows that swing outward for maximum ventilation and unobstructed views — the most popular choice for Toronto homes."
      heroImg="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
      description="Casement windows are hinged on one side and open outward with a single crank handle, creating a full opening for exceptional airflow. Their tight seal when closed makes them one of the most energy-efficient window styles available — ideal for Toronto's cold winters. Available in wood, fiberglass, and vinyl frames with triple-glaze options for maximum thermal performance."
      specs={[
        { label: 'Frame Materials',   value: 'Wood · Fiberglass · Vinyl' },
        { label: 'Glass Options',     value: 'Double or Triple Pane' },
        { label: 'Energy Rating',     value: 'Energy Star® Certified' },
        { label: 'Opening Direction', value: 'Left or Right Hinge' },
        { label: 'Max Size',          value: '36" W × 72" H' },
        { label: 'Warranty',          value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Full-Width Opening',
          desc: 'Opens completely for maximum ventilation — unlike double-hung windows that only open halfway.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Airtight Seal',
          desc: 'Multi-point locking compresses the sash tightly against the frame, minimizing air infiltration and maximizing energy efficiency.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
        {
          title: 'Easy Cleaning',
          desc: 'Swing the sash outward to clean both sides of the glass from inside your home — no ladders required.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Custom Sizes',
          desc: 'Made-to-measure for any rough opening — ideal for replacement or new construction in any Toronto home.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose casement windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Double-Hung', href: '/windows/double-hung' },
        { label: 'Bay & Bow',   href: '/windows/bay-bow'     },
        { label: 'Awning',      href: '/windows/awning'      },
        { label: 'All Windows', href: '/windows'              },
      ]}
      couponBadge={{
        label: 'Spring Casement Deal — 20% Off',
        detail: 'Save 20% on casement window installs booked this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Michael R.',
            text: 'Had 8 casement windows installed throughout our home. The crew was fast, clean, and the quality is outstanding.',
            rating: 5,
          },
          {
            name: 'Sandra K.',
            text: 'The crank mechanism is so smooth and the seal is incredible — no more drafts in winter.',
            rating: 5,
          },
          {
            name: 'David L.',
            text: 'Very happy with the custom sizing. Fitted perfectly in our older home with non-standard openings.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"9 casement windows in one day — absolutely flawless."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"New casements throughout the main floor. Professional and fast."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Casement install was perfect. Transformed our living room."',
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
