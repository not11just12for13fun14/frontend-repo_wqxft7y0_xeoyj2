import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="text-xs tracking-widest text-white/70">Shopify-first IMS</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Never Manually Fix a Stockout at 2 a.m. Again.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            Unified inventory, purchase orders, receiving, and returns in one dependable dashboard—with real-time Shopify sync across warehouses, stores
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a id="cta" href="#cta" className="inline-flex items-center rounded-md bg-[#dd2a3b] text-white px-5 py-3 text-sm sm:text-base font-semibold shadow-lg hover:brightness-110 transition">
              Start my 14-day free trial
            </a>
            <div className="text-white/80 text-sm">no credit card • 10 min setup</div>
          </div>
        </div>

        <div className="mt-16 aspect-[16/9] w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur shadow-2xl grid place-items-center text-white/80">
          Dashboard Screenshot placeholder
        </div>
      </div>
    </section>
  )
}
