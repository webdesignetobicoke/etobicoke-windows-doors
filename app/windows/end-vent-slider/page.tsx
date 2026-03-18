import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'End-Vent Slider Windows | Etobicoke Windows & Doors' }

export default function EndVentSliderPage() {
  return (
    <ProductDetail
      section="Windows / End-Vent Slider"
      code=""
      title="End-Vent Slider"
      titleItalic="Windows"
      subtitle="Two sliding sashes with a fixed centre panel — maximum ventilation at both ends, perfect for wide openings and great cross-breeze flow."
      heroImg="https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=1200&q=80"
      description="End-vent slider windows have a large fixed centre pane flanked by two sliding sashes that open from either end. This configuration allows ventilation at both ends simultaneously, creating excellent cross-airflow while keeping the wide, unobstructed centre view clear at all times. Common in living rooms, dining areas, and any wide opening where both a panoramic view and ventilation are priorities."
      specs={[
        { label: 'Frame Materials',  value: 'Vinyl · Fiberglass' },
        { label: 'Glass Options',    value: 'Double or Triple Pane' },
        { label: 'Energy Rating',    value: 'Energy Star® Certified' },
        { label: 'Operation',        value: 'Fixed Centre + Two Sliding End Vents' },
        { label: 'Max Size',         value: '96" W × 54" H' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Dual-End Ventilation',
          desc: 'Open both end sashes simultaneously for exceptional cross-airflow through the full width of the window.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Panoramic Centre View',
          desc: 'The fixed centre panel remains unobstructed at all times, framing your yard or street like a picture.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Wide Opening Ready',
          desc: 'Designed for openings up to 8 feet wide — ideal for living rooms, great rooms, and dining spaces.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
        {
          title: 'Easy-Clean Sashes',
          desc: 'Both sliding panels lift out for inside cleaning — no need for ladders or exterior access.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose end-vent slider windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Single Slider', href: '/windows/single-slider' },
        { label: 'Picture',       href: '/windows/picture'       },
        { label: 'Casement',      href: '/windows/casement'      },
        { label: 'All Windows',   href: '/windows'               },
      ]}
      couponBadge={{
        label: 'Spring Slider Deal — 15% Off',
        detail: 'Save 15% on end-vent slider installs this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Jennifer W.',
            text: 'The end-vent sliders in our living room are stunning. The centre view is perfect and the airflow when both ends are open is incredible.',
            rating: 5,
          },
          {
            name: 'Alan P.',
            text: 'Replaced a huge picture window with an end-vent slider. Best decision — now we actually get a breeze in summer.',
            rating: 5,
          },
          {
            name: 'Diane F.',
            text: 'Install team was professional and efficient. The window looks custom-built and fits perfectly.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"End-vent slider transformed our living room view and airflow."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Wide window, clear view, great ventilation. Couldn\'t ask for more."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"The centre view panel is breathtaking. Love this window."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Perfectly installed. The crew was clean and fast."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
