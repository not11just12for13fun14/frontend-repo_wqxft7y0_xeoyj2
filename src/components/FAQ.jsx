import React from 'react'

const faqs = [
  {
    q: 'Does it only work with Shopify?',
    a: "While we're Shopify-first and offer the deepest integration with Shopify, we also support other e-commerce platforms and 3PL systems. Our platform is designed to unify inventory across multiple channels, regardless of where you sell.",
  },
  {
    q: 'How do migrations work?',
    a: 'We provide a guided migration process with dedicated support. Our team helps you import your existing inventory data, set up your locations, and configure integrations. Most migrations are completed within 10 minutes to a few hours, depending on your data volume.',
  },
  {
    q: 'Can I export my data?',
    a: 'Absolutely. You can export your data at any time in multiple formats (CSV, Excel, JSON). Your data is yours, and we believe in complete transparency. There are no lock-ins or export fees.',
  },
  {
    q: 'Do you support 3PLs/multi-location/bundles?',
    a: 'Yes to all three! We support major 3PL providers, unlimited locations (warehouses, stores, fulfillment centers), and product bundles/kits. You can track inventory across all locations in real-time and manage complex product configurations.',
  },
  {
    q: 'What happens if I need help?',
    a: 'We offer live chat support with real humans (no bots), comprehensive documentation, video tutorials, and email support. Our team is responsive and committed to helping you succeed. Most inquiries are resolved within hours, not days.',
  },
  {
    q: 'How do the guarantee and refunds work?',
    a: "We offer a 14-day free trial with no credit card required. If you decide it's not the right fit during your trial, simply don't subscribe. For paid subscribers, we offer a 30-day money-back guarantee if you're not satisfied with the platform.",
  },
]

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#313138]">
          Questions? <span className="relative inline-block"><span className="relative z-10">We got you.</span><span className="absolute -inset-1 rotate-1 bg-[#FBBF24] rounded -z-10"></span></span>
        </h3>
        <p className="mt-3 text-gray-600">Everything you need to know before getting started</p>

        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group border border-black/5 rounded-xl p-4 bg-white/60">
              <summary className="marker:content-none cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-medium text-[#313138]">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition">▾</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between bg-gray-50 border border-black/5 rounded-xl p-4">
          <span className="text-gray-700">Still have questions? We're here to help.</span>
          <a href="#" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black transition">Contact Support</a>
        </div>
      </div>
    </section>
  )
}
