'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 px-5 py-4 text-[0.88rem] text-white placeholder:text-white/25 focus:outline-none focus:border-[#f26924]"
  const labelClass = "block text-[0.62rem] tracking-[0.2em] uppercase text-white/40 font-semibold mb-2"

  return (
    <div className="mt-[96px] lg:mt-[124px]">

      {/* ── HERO ── */}
      <section className="bg-[#0f0f0f] py-24">
        <div className="max-w-[1440px] mx-auto px-10 md:px-16">
          <h1 className="font-bebas text-[clamp(4rem,7vw,7.5rem)] leading-[0.88] text-white mb-6">
            Get a Free<br /><span className="text-[#f26924]">Quote</span>
          </h1>
          <p className="text-[1.05rem] leading-[1.85] text-white/60 max-w-[520px]">
            Fill in the form below or call us directly. We respond to all enquiries within one business day — usually within a few hours.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px]">

          {/* Form */}
          <div className="px-10 md:px-16 py-16 lg:border-r border-white/5">
            {sent ? (
              <div className="flex flex-col items-start gap-6 py-12">
                <div className="font-bebas text-[5rem] text-[#f26924] leading-[0.9]">Done!</div>
                <p className="text-[0.9rem] leading-[1.8] text-white/60 max-w-md">
                  Thanks — we've received your request and will be in touch within one business day to schedule your free in-home consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input required className={inputClass} placeholder="Jane Smith" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input required type="email" className={inputClass} placeholder="jane@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input className={inputClass} placeholder="(416) 555-0100" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className={labelClass}>Service Needed</label>
                    <select className={inputClass + ' appearance-none cursor-pointer'} value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                      <option value="" className="bg-[#1A1A1A]">Select a service…</option>
                      <option className="bg-[#1A1A1A]">Casement Windows</option>
                      <option className="bg-[#1A1A1A]">Double-Hung Windows</option>
                      <option className="bg-[#1A1A1A]">Bay &amp; Bow Windows</option>
                      <option className="bg-[#1A1A1A]">Awning Windows</option>
                      <option className="bg-[#1A1A1A]">Single Slider Windows</option>
                      <option className="bg-[#1A1A1A]">Entry Doors</option>
                      <option className="bg-[#1A1A1A]">Patio / French Doors</option>
                      <option className="bg-[#1A1A1A]">Storm Doors</option>
                      <option className="bg-[#1A1A1A]">Multiple / Not Sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea rows={5} className={inputClass + ' resize-none'} placeholder="Tell us about your project — number of windows, home type, timeline, any special requirements…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="bg-[#f26924] text-white text-[0.92rem] font-bold px-10 py-4 rounded-full hover:bg-white hover:text-[#f26924] self-start">
                  Send Request →
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="px-10 md:px-16 py-16 flex flex-col gap-0">
            <div className="text-[0.62rem] tracking-[0.25em] uppercase text-white/30 font-semibold mb-8">Contact Info</div>
            {[
              { label: 'Phone',    val: '(647) 716-5155',                    href: 'tel:+16477165155' },
              { label: 'Email',    val: 'webdesignetobicoke@gmail.com',      href: 'mailto:webdesignetobicoke@gmail.com' },
              { label: 'Address',  val: '535 The Eastmall #203, Etobicoke, ON  M9B 4A4', href: 'https://maps.google.com/?q=535+The+Eastmall,+Etobicoke,+ON' },
              { label: 'Hours',    val: 'Mon–Sat  8am – 6pm',                href: '#' },
            ].map(row => (
              <div key={row.label} className="flex flex-col gap-1 py-5 border-b border-white/5 last:border-b-0">
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30">{row.label}</div>
                <a href={row.href} className="text-[0.9rem] font-semibold text-white no-underline hover:text-[#f26924]">{row.val}</a>
              </div>
            ))}

            <div className="mt-8 p-6 bg-white/5 border border-white/10">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#f26924] font-semibold mb-3">Service Area</div>
              <p className="text-[0.78rem] leading-[1.75] text-white/40">
                Etobicoke · Mississauga · North York · Scarborough · Downtown Toronto · Brampton (select areas)
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
