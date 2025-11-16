import React from 'react'

function Emphasis({ children }) {
  return <em className="not-italic font-semibold text-[#313138]">{children}</em>
}

export default function WhyTrustUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest text-gray-500">WHY TRUST US</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#313138] leading-tight">
          Wrestling with inventory?
          <br className="hidden sm:block" />
          It doesn't have to be this messy.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 text-gray-700 text-lg">
            <p>There are countless tools that promise control. You've probably tried a few. Yet here you are.</p>
            <p>Most inventory systems are either overwhelming, inflexible, brittle, or <Emphasis>all three. You know?</Emphasis></p>
            <p>Not ours. We're former ERP architects who've built 9-figure ERP systems for global brands, we built a Shopify-first IMS that's refreshingly straightforward. We know how important it is to listen to customer feedback.</p>
            <p>Your store doesn't sleep and it evolves in days, not months—so do we. Tell us what hurts; we'll change fast and tell you when it's fixed.</p>
          </div>
          <div className="space-y-5 text-gray-700 text-lg">
            <p><Emphasis>We're not going to wave a wall of logos at you. Instead, we earn trust the simple way: No theatrics. Just dependable software and accountable humans. No mystery. No black box.</Emphasis></p>
            <p className="text-gray-700">We'd rather earn your trust slowly by being useful every day. You run the store. We'll mind the inventory.</p>
            <p>It's no-nonsense, effective, reliable. The trifecta. Designed for smaller, hungrier brands who need control without enterprise bloat.</p>
            <p>Kick the tires—try it out for free, tell us what breaks. We'll fix it. We'd be honored to have you as a customer and join our journey. Thank you.</p>

            <div className="pt-6 border-t border-gray-200">
              <div className="h-10 w-40 bg-gray-100 rounded mb-2 grid place-items-center text-gray-400">Signature</div>
              <div className="text-sm text-gray-600">[Founder Name] • founder@yourcompany.com</div>
              <div className="text-sm text-gray-500">Co-founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
