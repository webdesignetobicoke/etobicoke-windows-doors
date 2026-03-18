'use client'
import { useState } from 'react'

type Swatch  = { label: string; sub: string; bg: string; border?: boolean }
type TabContent =
  | { type: 'swatches'; intro: string; swatches: Swatch[] }
  | { type: 'features'; intro: string; features: { title: string; desc: string }[] }
  | { type: 'grid';     intro: string; items:    { label: string; desc: string }[] }

type SubTab = { id: string; label: string; content: TabContent }
type Group  = { id: string; label: string; subtabs: SubTab[] }

const groups: Group[] = [
  {
    id: 'finishes', label: 'Finishes',
    subtabs: [
      {
        id: 'stains', label: 'Prefinished Stains',
        content: {
          type: 'swatches',
          intro: 'Rich wood stains applied factory-fresh for consistent, lasting colour. Primed ready-to-paint interiors also available on all wood products.',
          swatches: [
            { label: 'Golden Oak',     sub: 'Warm amber',    bg: 'linear-gradient(135deg,#C8842A,#A06830,#D4962E)' },
            { label: 'Provincial',     sub: 'Deep walnut',   bg: 'linear-gradient(135deg,#5C3A1E,#3D2410,#6B4423)' },
            { label: 'Black',          sub: 'Bold contrast', bg: 'linear-gradient(135deg,#141210,#0A0806,#1C1814)' },
            { label: 'Early American', sub: 'Heritage tone', bg: 'linear-gradient(135deg,#8B5E3C,#6B4423,#A06840)' },
            { label: 'Natural',        sub: 'Light & airy',  bg: 'linear-gradient(135deg,#E8D5B0,#D4BC8A,#EDE0C4)' },
          ],
        },
      },
      {
        id: 'paints', label: 'Prefinished Paints',
        content: {
          type: 'swatches',
          intro: "Factory-applied paints in today's most sought-after palette — primed, base-coated and topcoated for durability that outlasts field-applied finishes.",
          swatches: [
            { label: 'Antique White', sub: 'Timeless neutral', bg: '#F5F0E8', border: true },
            { label: 'Matte Black',   sub: 'Modern statement', bg: '#1A1A18' },
            { label: 'Forest Green',  sub: 'Nature-inspired',  bg: '#4A5C47' },
            { label: 'Slate',         sub: 'Cool & refined',   bg: '#586372' },
            { label: 'Bronze',        sub: 'Warm metallic',    bg: '#8B6914' },
          ],
        },
      },
      {
        id: 'exterior', label: 'Exterior Finishes',
        content: {
          type: 'swatches',
          intro: 'UV-stable, moisture-resistant coatings rated for Canadian climate extremes — from -40°C lake-effect winters to summer heat.',
          swatches: [
            { label: 'Silver Gray',   sub: 'Aluminum grade', bg: 'linear-gradient(135deg,#A0A0A0,#808080)' },
            { label: 'Dark Bronze',   sub: 'Commercial',     bg: 'linear-gradient(135deg,#3A2E24,#2A2018)' },
            { label: 'Classic White', sub: 'Timeless',       bg: '#F0EEE9', border: true },
            { label: 'Navy',          sub: 'Bold appeal',    bg: '#1C2E40' },
            { label: 'Burgundy',      sub: 'Rich heritage',  bg: '#6B0000' },
          ],
        },
      },
    ],
  },
  {
    id: 'hardware', label: 'Hardware',
    subtabs: [
      {
        id: 'hardware', label: 'Hardware',
        content: {
          type: 'features',
          intro: 'All hardware is matched to your window or door finish — selected for both durability and aesthetic. Residential and heavy-duty commercial options available.',
          features: [
            { title: 'Satin Nickel',       desc: 'A warm, brushed tone that works in contemporary and transitional homes. Corrosion-resistant for bathroom and kitchen applications.' },
            { title: 'Oil-Rubbed Bronze',  desc: 'Rich dark finish with subtle highlights — ideal for craftsman, colonial, and heritage-style homes.' },
            { title: 'Matte Black',        desc: 'Clean, minimal, and bold. The top choice for modern and farmhouse aesthetics. Available on all window and door lines.' },
            { title: 'Polished Chrome',    desc: 'Classic and reflective. Pairs well with traditional white frames and stainless appliances.' },
            { title: 'Antique Brass',      desc: 'Warm gold undertones for traditional and vintage-inspired interiors. Durable lacquered finish.' },
            { title: 'Custom Match',       desc: 'Bring a sample — we can source hardware finishes to match your existing interior hardware or door handles.' },
          ],
        },
      },
    ],
  },
  {
    id: 'packages', label: 'Packages',
    subtabs: [
      {
        id: 'packages', label: 'Packages',
        content: {
          type: 'grid',
          intro: 'Our installation packages cover every need — from a single window to a whole-home upgrade. All packages include a lifetime installation warranty.',
          items: [
            { label: 'Essential',  desc: 'Single or double unit. Standard frame, Low-E glass, professional installation. Great for targeted upgrades.' },
            { label: 'Standard',   desc: '3–6 units. Premium Low-E glass, interior trim matching, and removal & disposal of existing units.' },
            { label: 'Premium',    desc: '7–12 units. Full-home coordination, custom sizing, triple-pane option, and priority scheduling.' },
            { label: 'Whole-Home', desc: '13+ units. Project manager assigned, Energy Star documentation, financing available, post-install audit.' },
            { label: 'Commercial', desc: 'Multi-unit residential and commercial buildings. Custom quoting, phased installation, site safety compliance.' },
            { label: 'Add-On',     desc: 'Upgrade any package with storm doors, window coverings, grilles, integrated blinds, or extended hardware.' },
          ],
        },
      },
    ],
  },
  {
    id: 'glass', label: 'Glass',
    subtabs: [
      {
        id: 'glass-lowe', label: 'Low-E Insulating',
        content: {
          type: 'features',
          intro: 'Low-E (low-emissivity) coatings are microscopic metallic layers that reflect heat back in winter and block solar heat in summer.',
          features: [
            { title: 'Low-E 180',    desc: 'Entry-level coating — improves thermal performance by up to 35% over standard dual-pane. Standard on all Essential packages.' },
            { title: 'Low-E 272',    desc: 'Mid-range coating with superior solar heat rejection. Ideal for south-facing and west-facing windows.' },
            { title: 'Low-E 366',    desc: 'Premium triple-silver coating. Blocks 95% of UV rays and delivers the highest thermal performance.' },
            { title: 'Triple Pane',  desc: 'Three panes with two Low-E coatings and argon/krypton fill. Virtually eliminates condensation.' },
            { title: 'Argon Fill',   desc: 'Dense inert gas reduces heat transfer by 30% compared to air-filled units. Standard on all packages.' },
            { title: 'Krypton Fill', desc: 'Denser than argon — used in narrow triple-pane configurations for maximum performance in minimum space.' },
          ],
        },
      },
      {
        id: 'glass-additional', label: 'Additional Glass',
        content: {
          type: 'features',
          intro: 'Specialty glass options to address privacy, safety, noise reduction, and aesthetic requirements beyond standard insulating glass.',
          features: [
            { title: 'Tempered Safety',   desc: 'Required by Ontario Building Code for sidelites and low-level glazing. Shatters into safe granules.' },
            { title: 'Laminated',         desc: 'Two panes bonded with a PVB interlayer — holds together on impact. Preferred for ground-floor security.' },
            { title: 'Obscure / Privacy', desc: 'Frosted, rain, or reed patterns allowing light while preventing direct sightlines.' },
            { title: 'Decorative',        desc: 'Flemish, glue chip, and seeded patterns for sidelites, transoms, and heritage restorations.' },
            { title: 'Acoustic',          desc: 'Laminated glass with varying thicknesses to break up sound — reduces exterior noise by up to 50%.' },
            { title: 'Self-Cleaning',     desc: 'Photocatalytic coating that breaks down organic matter in sunlight and rinses clean with rain.' },
          ],
        },
      },
    ],
  },
  {
    id: 'combinations', label: 'Combinations',
    subtabs: [
      {
        id: 'combinations', label: 'Combinations',
        content: {
          type: 'grid',
          intro: 'Combination units let you pair window styles in a single frame for architectural interest and functional flexibility. Factory-built as a single sealed unit.',
          items: [
            { label: 'Picture + Casement',    desc: 'Fixed centre panel flanked by operable casements — maximum view with side ventilation.' },
            { label: 'Double-Hung + Transom', desc: 'Operable lower sash with a fixed decorative transom above. Adds height and light.' },
            { label: 'Casement + Awning',     desc: 'Side-hinged casement with a bottom awning — ventilate from below even in light rain.' },
            { label: 'Bay Unit',              desc: 'Centre picture window with flanking 30° or 45° casements. Factory-assembled as one unit.' },
            { label: 'Garden Window',         desc: 'Box-style projection with operable side vents — a small greenhouse shelf for your kitchen.' },
            { label: 'Custom Config',         desc: 'Any combination is possible — bring a sketch and we\'ll build it to spec.' },
          ],
        },
      },
    ],
  },
  {
    id: 'screens', label: 'Screens',
    subtabs: [
      {
        id: 'screens', label: 'Screens',
        content: {
          type: 'features',
          intro: 'All operable windows and patio doors are available with screen options. Manufactured to match the frame colour and easy to remove for cleaning.',
          features: [
            { title: 'Fibreglass Standard', desc: 'The most common screen mesh — durable, rust-proof, and easy to repair. Available in charcoal and grey.' },
            { title: 'Aluminium Screen',    desc: 'More rigid than fibreglass — preferred for high-traffic areas and patio door screens.' },
            { title: 'Solar Screen',        desc: 'Dense weave blocks 80–90% of solar heat and glare while maintaining outward visibility.' },
            { title: 'Pet-Resistant',       desc: 'Heavy-duty vinyl-coated polyester that resists tearing and puncturing. 7× stronger than standard.' },
            { title: 'No-See-Um Mesh',      desc: 'Ultra-fine mesh that blocks tiny insects that pass through standard screens. Popular near ravines.' },
            { title: 'Retractable Screen',  desc: 'Rolls away when not in use — ideal for entry doors and patio openings.' },
          ],
        },
      },
    ],
  },
  {
    id: 'grilles', label: 'Grilles',
    subtabs: [
      {
        id: 'grille-patterns', label: 'Grille Patterns',
        content: {
          type: 'grid',
          intro: 'Grilles can transform the look of any window. All grilles are between-glass (no cleaning required) or applied to the interior surface.',
          items: [
            { label: 'Colonial',       desc: 'Classic 6-over-6 or 4-over-4 grid pattern. Standard on heritage, traditional, and Georgian-style homes.' },
            { label: 'Prairie',        desc: 'Corner-only grille with a central open field — characteristic of Arts & Crafts architecture.' },
            { label: 'Diamond',        desc: 'Diagonal lattice pattern — popular for accent windows, sidelites, and cottage-style homes.' },
            { label: 'Full Perimeter', desc: 'Grille runs around the perimeter only — creates a clean framed look without subdividing the view.' },
            { label: 'Custom Divided', desc: 'Any number of lites, any layout — custom patterns to match existing windows or architect specifications.' },
            { label: 'No Grille',      desc: 'Clean, unobstructed glass. The default for contemporary and modern homes.' },
          ],
        },
      },
      {
        id: 'grille-profiles', label: 'Grille Profiles',
        content: {
          type: 'features',
          intro: 'The profile (cross-section shape) of the grille bar affects both the look and the period appropriateness of the window.',
          features: [
            { title: 'Flat / SDL',        desc: 'Simulated divided lite with a flat bar — clean and modern. Appears like true divided lite from outside.' },
            { title: 'Contoured',         desc: 'Slightly rounded profile — the most popular choice for residential replacement windows.' },
            { title: 'Sculptured',        desc: 'Deep ogee profile with classic detail. Appropriate for heritage homes and Victorian restorations.' },
            { title: 'Pencil Bar',        desc: 'Thin, minimal bar — nearly invisible at distance. Preferred when you want divided lite look without obstruction.' },
            { title: 'Georgian Bar',      desc: 'Wide, flat-topped bar with a bold presence. Standard in UK-inspired and colonial revival architecture.' },
            { title: 'True Divided Lite', desc: 'Actual separate panes in individual frames — available on wood products for authentic heritage restoration.' },
          ],
        },
      },
    ],
  },
  {
    id: 'blinds', label: 'Blinds & Shades',
    subtabs: [
      {
        id: 'integrated-blinds', label: 'Integrated Blinds',
        content: {
          type: 'features',
          intro: 'Between-glass blinds are permanently sealed inside the insulating glass unit — no dusting, no cords, no damage. Operated by a magnetic slider.',
          features: [
            { title: '1" Aluminium Slat',  desc: 'Classic horizontal blind in 1-inch aluminium slats. Tilts 0–180° and fully raises. Available in 12 colours.' },
            { title: '2" Aluminium Slat',  desc: 'Wider slat for a contemporary look and better view-through when open.' },
            { title: 'Cordless Operation', desc: 'All integrated blinds use a magnetic wand on the frame exterior — safe for children.' },
            { title: 'Full Blackout',      desc: 'Aluminium slats with closed-cell foam insert — complete blackout when fully tilted.' },
            { title: 'Fire-Rated',         desc: 'Available in fire-rated glass units for commercial and multi-unit residential applications.' },
            { title: 'Motorised',          desc: 'Smart-home compatible motorised tilt available. Works with most home automation platforms.' },
          ],
        },
      },
      {
        id: 'integrated-shades', label: 'Integrated Shades',
        content: {
          type: 'features',
          intro: 'Between-glass fabric shades offer a softer look than blinds with the same maintenance-free benefits. Sealed inside the glass unit.',
          features: [
            { title: 'Solar / Screen Shade', desc: 'Open-weave fabric that reduces glare and solar heat while preserving the outward view. 3%, 5%, 10% openness.' },
            { title: 'Cellular / Honeycomb', desc: 'Double-cell fabric traps air for additional insulation. The most energy-efficient shade option.' },
            { title: 'Room-Darkening',       desc: 'Tight-weave fabric that blocks 90–95% of light — ideal for media rooms and bedrooms.' },
            { title: 'Full Blackout Shade',  desc: 'Complete light-blocking fabric with sealed edges. No light bleed around the edges.' },
            { title: 'Fabric Colour Range',  desc: 'Over 30 fabric colours and textures — from neutral whites and greys to warm tones.' },
            { title: 'Motorised Option',     desc: 'Battery or wired motor with smart-home integration. Raise, lower, and tilt from your phone.' },
          ],
        },
      },
    ],
  },
]

// ── Content renderers ────────────────────────────────────────────────────────

function SwatchContent({ content }: { content: Extract<TabContent, { type: 'swatches' }> }) {
  return (
    <>
      <p className="text-[1.05rem] leading-[1.8] text-[#3A3830] mb-8 max-w-xl">{content.intro}</p>
      <div className="grid grid-cols-5 gap-4">
        {content.swatches.map(s => (
          <div key={s.label} className="swatch cursor-pointer">
            <div className="swatch-box w-full aspect-square mb-2" style={{ background: s.bg, border: s.border ? '1px solid #DDD' : undefined }} />
            <div className="text-[0.68rem] font-semibold text-[#0A0A0A]">{s.label}</div>
            <div className="text-[0.6rem] text-[#7A786F] mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function FeaturesContent({ content }: { content: Extract<TabContent, { type: 'features' }> }) {
  return (
    <>
      <p className="text-[1.05rem] leading-[1.8] text-[#3A3830] mb-8 max-w-xl">{content.intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.features.map(f => (
          <div key={f.title} className=" border border-gray-100 bg-white p-5 shadow-sm">
            <div className="text-[0.76rem] font-bold text-[#1A1A1A] mb-1.5">{f.title}</div>
            <p className="text-[0.72rem] leading-[1.65] text-[#7A786F]">{f.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function GridContent({ content }: { content: Extract<TabContent, { type: 'grid' }> }) {
  return (
    <>
      <p className="text-[1.05rem] leading-[1.8] text-[#3A3830] mb-8 max-w-xl">{content.intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.items.map(item => (
          <div key={item.label} className="border-l-2 border-[#f26924] pl-4 py-1">
            <div className="text-[0.76rem] font-bold text-[#0A0A0A] mb-1">{item.label}</div>
            <p className="text-[0.72rem] leading-[1.65] text-[#7A786F]">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

export default function FinishesTabs() {
  const [activeGroup, setActiveGroup] = useState('finishes')
  const [activeSubtab, setActiveSubtab] = useState('stains')

  const group  = groups.find(g => g.id === activeGroup)!
  const subtab = group.subtabs.find(s => s.id === activeSubtab) ?? group.subtabs[0]

  function selectGroup(gid: string) {
    setActiveGroup(gid)
    const g = groups.find(g => g.id === gid)!
    setActiveSubtab(g.subtabs[0].id)
  }

  return (
    <section id="design" className="bg-[#FAF9F7]">

      {/* ── Section header ── */}
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 pt-14 pb-6">
        <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.5rem)] leading-none text-[#1A1A1A]">Design Options</h2>
        <p className="text-[1.05rem] text-gray-400 mt-2">Browse the categories below to explore finishes, glass, hardware, and more.</p>
      </div>

      {/* ── Primary tabs (groups) ── */}
      <div className="bg-[#EDEBE7]">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-8 overflow-x-auto">
        <div className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => selectGroup(g.id)}
              className={`px-2 py-3 text-[0.82rem] md:px-8 md:text-[0.92rem] font-semibold rounded-full md:whitespace-nowrap text-center w-full md:w-auto leading-tight min-h-[3.5rem] flex items-center justify-center
                ${activeGroup === g.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-gray-500 border border-gray-300 hover:text-[#1A1A1A] hover:border-gray-400'}`}
            >
              {g.label}
            </button>
          ))}
        </div>
        </div>
      </div>

      {/* ── Secondary tabs ── */}
      {group.subtabs.length > 1 && (
        <div className="bg-[#EDEBE7] border-t border-black/5">
          {/* Mobile: segmented full-width block */}
          <div className="md:hidden max-w-[1440px] mx-auto px-10 py-6">
            <div className="flex border border-gray-300 overflow-hidden">
              {group.subtabs.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveSubtab(s.id)}
                  className={`flex-1 py-3 text-[0.82rem] font-semibold text-center
                    ${activeSubtab === s.id
                      ? 'bg-[#f26924] text-white'
                      : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: underline tabs */}
          <div className="hidden md:block max-w-[1440px] mx-auto px-16 py-6">
            <div className="flex border-b border-gray-200">
              {group.subtabs.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveSubtab(s.id)}
                  className={`px-7 py-3 text-[0.85rem] font-semibold border-b-2 -mb-px whitespace-nowrap
                    ${activeSubtab === s.id
                      ? 'border-[#f26924] text-[#f26924]'
                      : 'border-transparent text-[#1A1A1A] hover:border-gray-300'}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 py-8">
        {subtab.content.type === 'swatches'  && <SwatchContent  content={subtab.content} />}
        {subtab.content.type === 'features'  && <FeaturesContent content={subtab.content} />}
        {subtab.content.type === 'grid'      && <GridContent     content={subtab.content} />}
        <p className="mt-8 text-[0.7rem] text-[#7A786F]">
          Custom options available — bring your sample and we'll match it.
        </p>
      </div>

    </section>
  )
}
