import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-1" />
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-zinc-900 to-zinc-700 text-white grid place-items-center font-semibold">w3</div>
            <span className="font-semibold tracking-tight text-[#313138]">warehouse3</span>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="#cta" className="hidden sm:inline-flex items-center rounded-md bg-[#dd2a3b] text-white px-4 py-2 text-sm font-medium shadow-sm hover:brightness-110 transition">
            Start my 14-day free trial
          </a>
          <a href="#cta" className="sm:hidden inline-flex items-center rounded-md bg-[#dd2a3b] text-white px-3 py-2 text-sm font-medium shadow-sm hover:brightness-110 transition">
            Start Trial
          </a>
        </div>
      </div>
    </header>
  )
}
