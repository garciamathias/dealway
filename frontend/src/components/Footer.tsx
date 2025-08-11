'use client'

import Link from "next/link"
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react"
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
    <footer className="sticky bottom-0 left-0 right-0 h-[340px] text-white z-0 -mt-10">
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
      <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto px-8 py-12">
        {/* Centered block: left column with logo + nav; right column with social icons */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-[1fr_auto] items-center w-full">
            <div className="space-y-4">
              <div className="flex items-center">
                <h2 className="text-3xl font-light">Dealway</h2>
              </div>
              <nav className="flex items-center gap-8">
              <Link href="#services" className="text-sm hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-sm hover:text-gray-300 transition-colors">
                Process
              </Link>
              <Link href="#about" className="text-sm hover:text-gray-300 transition-colors">
                Team
              </Link>
              <Link href="#contact" className="text-sm hover:text-gray-300 transition-colors">
                Contact us
              </Link>
            </nav>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-end gap-6">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-12 h-px w-full bg-white/30" />

        {/* Bottom section */}
        <div className="flex items-center justify-between text-xs text-gray-300 pt-3">
          <p>Copyright © 2025 Dealway. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}