import ProductDetail from '@/components/ProductDetail'

export const metadata = { title: 'Tilt & Turn Windows | Etobicoke Windows & Doors' }

export default function TiltTurnPage() {
  return (
    <ProductDetail
      section="Windows / Tilt & Turn"
      code=""
      title="Tilt & Turn"
      titleItalic="Windows"
      subtitle="European-engineered dual-action windows that tilt inward for ventilation or swing fully open for maximum airflow and easy cleaning."
      heroImg="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
      description="Tilt & turn windows originate from European engineering and offer two distinct opening modes from a single handle: tilt the top inward for secure, draft-free ventilation (perfect for leaving open during rain or overnight), or turn the handle fully to swing the sash inward like a door for maximum airflow and effortless cleaning of the exterior glass from inside your home. Their multi-point locking system engages simultaneously at four or more points around the frame, creating an exceptional air and water seal."
      specs={[
        { label: 'Frame Materials',   value: 'uPVC · Fiberglass · Aluminum-Clad' },
        { label: 'Glass Options',     value: 'Double or Triple Pane + Low-E' },
        { label: 'Energy Rating',     value: 'Energy Star® Certified' },
        { label: 'Opening Modes',     value: 'Tilt Inward · Turn (Full Open)' },
        { label: 'Locking Points',    value: '4–8 Multi-Point Around Frame' },
        { label: 'Warranty',          value: 'Lifetime Frame + Labour' },
      ]}
      features={[
        {
          title: 'Dual Opening Modes',
          desc: 'One handle, two functions — tilt the top for secure ventilation or turn for a full inward swing and maximum airflow.',
          img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
        },
        {
          title: 'Rain-Safe Ventilation',
          desc: 'Tilt mode lets fresh air in while the frame deflects rain — safely leave open overnight or during light showers.',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
        },
        {
          title: 'Inside-Out Cleaning',
          desc: 'The full-swing turn mode exposes the exterior glass face from inside — no ladders, no exterior access required.',
          img: 'https://images.unsplash.com/photo-1600573472591-ee6be8d72346?w=900&q=80',
        },
        {
          title: 'Multi-Point Lock',
          desc: 'Up to 8 locking points compress the sash against the frame simultaneously for the tightest seal of any operable window.',
          img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
        },
      ]}
      featuresTitle="Why choose tilt & turn windows?"
      relatedTitle="Explore Other Window Styles"
      related={[
        { label: 'Casement',    href: '/windows/casement'    },
        { label: 'Awning',      href: '/windows/awning'      },
        { label: 'Fixed',       href: '/windows/fixed'       },
        { label: 'All Windows', href: '/windows'             },
      ]}
      couponBadge={{
        label: 'Spring Tilt & Turn Deal — 15% Off',
        detail: 'Save 15% on tilt & turn window installs this spring ↓',
        href: '/#coupons',
      }}
      reviewSection={{
        title: 'Customer Reviews',
        reviews: [
          {
            name: 'Anna K.',
            text: 'The tilt mode is a game changer. Fresh air all night without worrying about rain or security. Absolutely love these windows.',
            rating: 5,
          },
          {
            name: 'Thomas V.',
            text: 'European quality that\'s obvious the moment you operate the handle. The multi-point lock is incredibly solid.',
            rating: 5,
          },
          {
            name: 'Rachel M.',
            text: 'Cleaning the outside glass from inside the house is such a practical feature. The install was perfect and the windows look stunning.',
            rating: 5,
          },
        ],
        videoReviews: [
          {
            thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
            name: 'Karen & David M.',
            area: 'Alderwood, Etobicoke',
            quote: '"Tilt & turn throughout the house — best windows we\'ve ever had."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            name: 'Marcus O.',
            area: 'Humber Bay, Toronto',
            quote: '"The dual-mode handle is brilliant. Rain-safe ventilation is perfect."',
            stars: 5,
            platform: 'Google',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
            name: 'Lisa C.',
            area: 'Mimico, Etobicoke',
            quote: '"Cleaned the outside glass from my kitchen — no ladder needed!"',
            stars: 5,
            platform: 'Facebook',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
            name: 'Tony B.',
            area: 'New Toronto',
            quote: '"Premium feel, premium result. Crew was in and out efficiently."',
            stars: 5,
            platform: 'Homestars',
          },
        ],
      }}
    />
  )
}
