'use client'

import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export default function SimpleFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-800" style={{ fontFamily: 'var(--font-poppins)' }}>Dealway</h2>
            </div>
            <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Services
              </Link>
              <Link href="/equipe" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Équipe
              </Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Blog
              </Link>
                          <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              Contact
              </Link>
            </nav>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-start lg:justify-end gap-4 sm:gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-8 h-px w-full bg-gray-200" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 text-sm text-gray-500 pt-6">
          <p>Copyright © 2025 Dealway. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 