import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <a href="#top" className="hover:text-white">Back to Top</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-4 text-white/80">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" aria-label="X" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube size={18} /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/60">© 2024 warehouse3, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
