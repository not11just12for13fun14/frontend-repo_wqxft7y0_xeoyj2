import React from 'react'
import { Check } from 'lucide-react'

function YesBadge() {
  return (
    <span className="inline-block -rotate-2 bg-[#FBBF24] text-[#313138] text-xs font-extrabold px-2 py-0.5 rounded shadow-sm">
      YES!
    </span>
  )
}

export default function YesList() {
  const items = [
    'Can I import my Shopify catalog in minutes? → YES!',
    'Can I see stock across all locations on one screen? → YES!',
    'Can I generate POs from reorder points and lead times? → YES!',
    'Can I track supplier ETAs and receive against POs? → YES!',
    'Can I scan to receive and auto-update Shopify instantly? → YES!',
    'Can refunds auto-restock and keep counts accurate? → YES!',
    'Can I handle bundles/kits and channel allocations? → YES!',
    'Can I reserve stock for drops, preorders, or wholesale? → YES!',
    'Can I set approvals and role-based access? → YES!',
    'Can I export every bit of my data any time? → YES!',
    'Can I switch without downtime—with help? → YES!',
    'Can I chat with a human when I\'m stuck? → YES!',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#313138]">
          The answer is <span className="relative inline-block"><span className="relative z-10">YES!</span><span className="absolute -inset-1 rotate-1 bg-[#FBBF24] rounded -z-10"></span></span>
        </h3>
        <p className="mt-3 text-gray-600 max-w-2xl">Can inventory software be simple, fast, and dependable—without giving up power? With warehouse3, the answer is YES!</p>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-3 p-4 rounded-xl border border-black/5 bg-white/60">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                <Check size={16} />
              </span>
              <span className="text-gray-700">{t}</span>
              <YesBadge />
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a href="#cta" className="inline-flex items-center rounded-md bg-[#dd2a3b] text-white px-5 py-3 text-sm font-semibold shadow-lg hover:brightness-110 transition">
            Start my 14-day free trial
          </a>
          <div className="text-sm text-gray-500 mt-2">See for yourself. No credit card required.</div>
        </div>
      </div>
    </section>
  )
}
