'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './Header'
import { ArrowUpRight } from 'lucide-react'

export default function HeroSection() {
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
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative min-h-screen">
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
                        {/* Optional overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 min-h-screen flex items-start py-12 lg:pt-38 lg:pb-20">
                        <div className="mx-auto max-w-6xl px-6 lg:px-12">
                            <div className="text-center lg:text-left">
                                <h1 className="mt-8 text-balance text-5xl font-light text-white md:text-6xl lg:mt-16 xl:text-7xl">La Banque d&apos;Affaires Nouvelle Génération pour les PME</h1>
                                <p className="mt-8 text-pretty text-lg text-gray-100 max-w-2xl mx-auto lg:mx-0">Nous vous trouvons le bon acquéreur sans sacrifier votre valorisation ni perdre des mois en négociations</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        variant="default"
                                        className="group bg-white text-black hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300">
                                        <Link href="#link" className="flex items-center gap-2">
                                            <span>Vendre mon entreprise</span>
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="group border border-white/70 bg-transparent text-white hover:text-white hover:border-white hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300">
                                        <Link href="#link" className="flex items-center gap-2">
                                            <span>Rejoindre le réseau d&apos;acheteurs</span>
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>

                                {/* Stats Grid - Horizontal below CTAs */}
                                <div className="mt-16">
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                        <div className="group cursor-default transition-all duration-300 hover:-translate-y-0.5 text-center lg:text-left">
                                            <div className="text-white text-xl lg:text-2xl font-light">1 000+</div>
                                            <div className="text-white/90 font-medium text-sm mt-1">acheteurs qualifiés</div>
                                            <div className="text-white/60 text-xs mt-0.5">Mises en relation stratégiques grâce à notre IA</div>
                                        </div>
                                        
                                        <div className="group cursor-default transition-all duration-300 hover:-translate-y-0.5 text-center lg:text-left">
                                            <div className="text-white text-xl lg:text-2xl font-light">+30 %</div>
                                            <div className="text-white/90 font-medium text-sm mt-1">Offres plus élevées</div>
                                            <div className="text-white/60 text-xs mt-0.5">Enchères compétitives qui maximisent la valeur</div>
                                        </div>
                                        
                                        <div className="group cursor-default transition-all duration-300 hover:-translate-y-0.5 text-center lg:text-left">
                                            <div className="text-white text-xl lg:text-2xl font-light">&lt; 45 jours</div>
                                            <div className="text-white/90 font-medium text-sm mt-1">Offres en &lt; 45 jours</div>
                                            <div className="text-white/60 text-xs mt-0.5">45 jours vs 4 mois pour les premières offres</div>
                                        </div>
                                        
                                        <div className="group cursor-default transition-all duration-300 hover:-translate-y-0.5 text-center lg:text-left">
                                            <div className="text-white text-xl lg:text-2xl font-light">0 €</div>
                                            <div className="text-white/90 font-medium text-sm mt-1">à avancer</div>
                                            <div className="text-white/60 text-xs mt-0.5">Success fee uniquement, aucun frais caché</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
