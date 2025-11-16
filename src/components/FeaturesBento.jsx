import React from 'react'
import { Check } from 'lucide-react'

const gradients = {
  red: 'from-red-50 to-white',
  blue: 'from-blue-50 to-white',
  purple: 'from-purple-50 to-white',
  green: 'from-green-50 to-white',
  orange: 'from-orange-50 to-white',
}

function Badge({ children }) {
  return (
    <span className="inline-block -rotate-2 bg-[#FBBF24] text-[#313138] text-[10px] font-bold px-2 py-0.5 rounded">
      {children}
    </span>
  )
}

function Card({ color = 'red', children, className = '' }) {
  return (
    <div className={`relative rounded-2xl p-6 border border-black/5 bg-gradient-to-br ${gradients[color]} shadow-sm ${className}`}>
      {children}
    </div>
  )
}

function Checks({ items }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600">
            <Check size={14} />
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export default function FeaturesBento() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#313138]">
          Everything you need, <span className="relative inline-block"><span className="relative z-10">nothing you don't</span><span className="absolute -inset-1 rotate-1 bg-[#FBBF24] rounded -z-10"></span></span>
        </h3>
        <p className="mt-3 text-gray-600 max-w-2xl">Five core features that actually work together. No bloat, no learning curve, no surprises.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr] gap-5">
          <Card color="red" className="sm:col-span-2">
            <div className="flex items-start justify-between">
              <Badge>VISIBILITY</Badge>
            </div>
            <h4 className="mt-3 text-xl font-semibold">See what's where—at a glance.</h4>
            <p className="mt-2 text-gray-600">Stop asking, "Is this number right?" Get live counts by location and variant, one screen, always in sync with Shopify.</p>
            <Checks items={[
              'One view across stores, warehouses, and channels',
              'Guardrails for bundles/kits and allocations',
              'Instant search for any SKU, anywhere',
            ]} />
            <div className="mt-4 h-24 rounded bg-white/60 border border-black/5 grid place-items-center text-gray-400">Live inventory view</div>
          </Card>

          <Card color="blue">
            <Badge>REORDERING</Badge>
            <h4 className="mt-3 text-xl font-semibold">Reorder the right SKUs at the right time.</h4>
            <p className="mt-2 text-gray-600">No more guessing. Lead times, velocity, and targets generate POs you actually trust.</p>
            <Checks items={['Lead-time awareness','Supplier ETAs & approvals','Free cash from wrong stock']} />
            <div className="mt-4 h-24 rounded bg-white/60 border border-black/5 grid place-items-center text-gray-400">PO & ETAs</div>
          </Card>

          <Card color="purple">
            <Badge>RECEIVING</Badge>
            <h4 className="mt-3 text-xl font-semibold">Turn shipments into sellable stock—fast.</h4>
            <p className="mt-2 text-gray-600">Unbox, scan, done. Stock goes live in Shopify without double entry.</p>
            <Checks items={['Barcode verification','Auto-update quantities','Exception handling']} />
            <div className="mt-4 h-24 rounded bg-white/60 border border-black/5 grid place-items-center text-gray-400">Scan to receive</div>
          </Card>

          <Card color="green" className="sm:col-span-2">
            <Badge>RETURNS</Badge>
            <h4 className="mt-3 text-xl font-semibold">Refunds that actually restock.</h4>
            <p className="mt-2 text-gray-600">Keep counts clean and revenue in play with exchanges or store credit.</p>
            <Checks items={['One-click refunds & exchanges','Auto-restock to the right location','Clear audit trail for finance']} />
            <div className="mt-4 h-24 rounded bg-white/60 border border-black/5 grid place-items-center text-gray-400">Refund auto-restock</div>
          </Card>

          <Card color="orange" className="sm:col-span-2">
            <Badge>FULFILLMENT</Badge>
            <h4 className="mt-3 text-xl font-semibold">Pick & pack without errors.</h4>
            <p className="mt-2 text-gray-600">Scan-verified picking means zero wrong items shipped. Orders flow faster, customers stay happy.</p>
            <Checks items={['Scan-to-pick verification','Auto-confirm orders','Ship with confidence']} />
            <div className="mt-4 h-24 rounded bg-white/60 border border-black/5 grid place-items-center text-gray-400">Pick & pack</div>
          </Card>
        </div>

        <div className="mt-10">
          <a href="#cta" className="inline-flex items-center rounded-md bg-[#dd2a3b] text-white px-5 py-3 text-sm font-semibold shadow-lg hover:brightness-110 transition">
            Start my 14-day free trial
          </a>
          <div className="text-sm text-gray-500 mt-2">All features included. No credit card required.</div>
        </div>
      </div>
    </section>
  )
}
