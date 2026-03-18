import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Storm Doors | Etobicoke Windows & Doors' }

export default function StormDoorsPage() {
  return (
    <ProductDetail
      section="Doors / Storm"
      code=""
      title="Storm"
      titleItalic="Doors"
      subtitle="Add an energy-efficient layer of year-round protection to any existing exterior door — essential for Etobicoke's lake-effect winters."
      heroImg="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
      description="Storm doors mount in front of your existing entry door, creating a sealed air buffer that dramatically reduces heat loss in winter and keeps conditioned air in during summer. Modern storm doors are a far cry from old aluminum screen doors — they feature heavy-gauge frames, low-E glass panels, and retractable screens that convert from full-glass winter mode to screened summer mode with a single movement."
      specs={[
        { label: 'Frame',       value: 'Heavy-Gauge Aluminum' },
        { label: 'Glass',       value: 'Tempered Safety Glass + Low-E' },
        { label: 'Screen',      value: 'Full-View Retractable' },
        { label: 'Hardware',    value: 'Pneumatic Closer + Deadbolt' },
        { label: 'Door Widths', value: '30" · 32" · 34" · 36"' },
        { label: 'Warranty',    value: '10 Year Frame + Labour' },
      ]}
      features={[
        {
          title: 'Air Buffer Zone',
          desc: 'Creates a sealed vestibule between the storm and entry door, reducing heat loss by up to 45%.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
        {
          title: 'Seasonal Convert',
          desc: 'Swap between full-glass winter panel and retractable insect screen in seconds — no tools required.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Low-E Coating',
          desc: 'Reduces solar heat gain in summer while still letting natural light flood your entrance.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: '2-Hour Install',
          desc: 'Storm doors are our fastest installation — most are complete in under two hours with no structural work.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose storm doors?"
      relatedTitle="Explore Other Door Types"
      related={[
        { label: 'Entry Doors', href: '/doors/entry' },
        { label: 'Patio Doors', href: '/doors/patio'  },
        { label: 'All Doors',   href: '/doors'         },
      ]}
      couponBadge={{
        label: 'Storm Door Special — $150 Off',
        detail: 'Save $150 on any storm door supply & install this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Brian K.',
            text: 'Installed a storm door last November. The difference in drafts and warmth near the front entrance was immediate.',
            rating: 5,
          },
          {
            name: 'Susan H.',
            text: 'Quick install, looks great, and the retractable screen works perfectly in summer. Great value for the price.',
            rating: 5,
          },
          {
            name: 'Greg M.',
            text: 'Done in under two hours. The pneumatic closer is smooth and the build quality is noticeably better than the big box stores.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Storm door installed in 90 minutes. Immediate difference in warmth."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Best upgrade for the price. Our front hall is so much warmer."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Converts to a screen door in seconds. Love it in summer."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Fast, clean, professional. Couldn\'t ask for more."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
