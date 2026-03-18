import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Single Slider Windows | Etobicoke Windows & Doors' }

export default function SingleSliderPage() {
  return (
    <ProductDetail
      section="Windows / Single Slider"
      code=""
      title="Single Slider"
      titleItalic="Windows"
      subtitle="Smooth horizontal operation in a space-saving design — ideal for wide openings, basements, and rooms where outward swing isn't an option."
      heroImg="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
      description="Single slider windows feature one fixed sash and one sash that glides horizontally on precision-engineered tracks. Unlike double-hung windows, sliders require no vertical lifting, making them effortless to operate at any height. Their simple design means fewer moving parts and a lower maintenance burden over time. Available in vinyl and fiberglass frames with double or triple-pane glass for full Canadian Energy Star compliance."
      specs={[
        { label: 'Frame Materials',  value: 'Vinyl · Fiberglass' },
        { label: 'Glass Options',    value: 'Double or Triple Pane' },
        { label: 'Energy Rating',    value: 'Energy Star® Certified' },
        { label: 'Operation',        value: 'One Fixed + One Sliding Sash' },
        { label: 'Max Size',         value: '72" W × 48" H' },
        { label: 'Warranty',         value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Easy Glide Track',
          desc: 'Stainless steel rollers on reinforced tracks allow effortless one-finger operation, even after years of use.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
        {
          title: 'No Exterior Swing',
          desc: 'Perfect for walkways, patios, and tight spaces where an outward-opening casement would be impractical.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Wide Openings',
          desc: 'Ideal for wide, low-profile openings such as basements, kitchens above the counter, and living areas.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Removable Sash',
          desc: 'The sliding panel lifts out for easy cleaning of both glass surfaces from inside your home.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose single slider windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'End-Vent Slider', href: '/windows/end-vent-slider' },
        { label: 'Casement',        href: '/windows/casement'        },
        { label: 'Double Hung',     href: '/windows/double-hung'     },
        { label: 'All Windows',     href: '/windows'                 },
      ]}
      couponBadge={{
        label: 'Spring Slider Deal — 15% Off',
        detail: 'Save 15% on single slider window installs this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Robert T.',
            text: 'Had sliders installed in the basement and kitchen. Smooth, clean, and the crew was in and out in half a day.',
            rating: 5,
          },
          {
            name: 'Patricia M.',
            text: 'The glide track is buttery smooth. We replaced old aluminum sliders and the difference in insulation is night and day.',
            rating: 5,
          },
          {
            name: 'Chris B.',
            text: 'Great value. Energy bills dropped noticeably after replacing the old sliders with these triple-pane units.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Slider install was quick and perfect. No more cold drafts."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"Best upgrade for our basement. Warm, bright, and easy to open."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Kitchen slider looks amazing and works perfectly."',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Fast, professional, and great quality. Highly recommend."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
