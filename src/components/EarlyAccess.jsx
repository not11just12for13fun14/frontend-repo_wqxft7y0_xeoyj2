import React from 'react'

export default function EarlyAccess() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-widest text-red-400">EARLY PARTNER ACCESS</p>
        <h3 className="mt-3 text-3xl sm:text-4xl font-bold">
          Be one of the first <span className="relative inline-block"><span className="relative z-10">25 brands</span><span className="absolute -inset-1 rotate-1 bg-[#FBBF24] rounded -z-10"></span></span> shaping warehouse3.
        </h3>
        <p className="mt-4 max-w-2xl text-white/80">Self-serve setup in minutes, direct founder feedback, and early-partner pricing locked for life.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {['15-min setup','Founder inbox','Price locked for life','Cancel anytime'].map((b) => (
            <span key={b} className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 border border-white/20 backdrop-blur">
              {b}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <a href="#cta" className="inline-flex items-center rounded-md bg-[#dd2a3b] text-white px-5 py-3 text-sm font-semibold shadow-lg hover:brightness-110 transition">
            Start my 14-day free trial
          </a>
        </div>
      </div>
    </section>
  )
}
