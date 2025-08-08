'use client'

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
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
    <footer className="relative text-gray-100">
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
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Dealway</h3>
            <p className="mb-4 text-gray-200">
              Expert en opérations M&A off-market, nous orchestrons des transactions 
              confidentielles créatrices de valeur pour dirigeants et investisseurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Nous Contacter</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>info@dealway.io</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>1-800-DEALWAY</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-200">
              © 2024 Dealway. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Conditions d&apos;Utilisation
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors">
                Politique de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}