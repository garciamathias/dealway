'use client'

import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { useRef, useEffect } from 'react'

export default function Footer() {
  const videoForwardRef = useRef<HTMLVideoElement>(null)
  const videoReverseRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoForward = videoForwardRef.current
    const videoReverse = videoReverseRef.current
    
    if (!videoForward || !videoReverse) return

    // Précharger la vidéo inversée
    videoReverse.load()

    const handleForwardEnded = () => {
      videoForward.style.display = 'none'
      videoReverse.style.display = 'block'
      videoReverse.currentTime = 0
      videoReverse.play()
    }

    const handleReverseEnded = () => {
      videoReverse.style.display = 'none'
      videoForward.style.display = 'block'
      videoForward.currentTime = 0
      videoForward.play()
    }

    videoForward.addEventListener('ended', handleForwardEnded)
    videoReverse.addEventListener('ended', handleReverseEnded)

    // Initialiser l'état
    videoReverse.style.display = 'none'
    
    return () => {
      videoForward.removeEventListener('ended', handleForwardEnded)
      videoReverse.removeEventListener('ended', handleReverseEnded)
    }
  }, [])

  return (
    <footer className="sticky bottom-0 left-0 right-0 h-[280px] sm:h-[320px] lg:h-[340px] text-white z-0 -mt-10">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoForwardRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src="/video/UpdateFade_trimmed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={videoReverseRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          playsInline
        >
          <source src="/video/UpdateFade_trimmed_reverse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">
        {/* Structure alignée sur le header */}
        <div className="flex-1 flex items-center">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 w-full">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: 'var(--font-poppins)' }}>Dealway</h2>
              </div>
              <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link href="/#features" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/equipe" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">
                Équipe
              </Link>
              <Link href="/blog" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">
                Blog
              </Link>
                              <Link href="/contact" className="text-xs sm:text-sm hover:text-gray-300 transition-colors">
                  Contact
              </Link>
            </nav>
            </div>

            {/* Social links - alignées comme dans le header */}
            <div className="flex items-center justify-start lg:justify-end gap-4 sm:gap-6">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-8 sm:mt-10 lg:mt-12 h-px w-full bg-white/30" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 text-xs text-gray-300 pt-3">
          <p className="text-xs">Copyright © 2025 Dealway. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition-colors text-xs">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors text-xs">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}