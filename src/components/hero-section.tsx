'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './Header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    const videoForwardRef = useRef<HTMLVideoElement>(null)
    const videoReverseRef = useRef<HTMLVideoElement>(null)
    const [isReversed, setIsReversed] = useState(false)

    useEffect(() => {
        const videoForward = videoForwardRef.current
        const videoReverse = videoReverseRef.current
        
        if (!videoForward || !videoReverse) return

        // Précharger la vidéo inversée
        videoReverse.load()

        const handleForwardEnded = () => {
            setIsReversed(true)
            videoForward.style.display = 'none'
            videoReverse.style.display = 'block'
            videoReverse.currentTime = 0
            videoReverse.play()
        }

        const handleReverseEnded = () => {
            setIsReversed(false)
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
                <section className="relative">
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
                    <div className="relative z-10 pb-40 pt-12 md:pb-48 lg:pb-64 lg:pt-44">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-center">
                                {/* Left Column - Main Content (75%) */}
                                <div className="lg:col-span-9 text-center lg:text-left">
                                    <h1 className="mt-8 text-balance text-5xl font-light text-white md:text-6xl lg:mt-16 xl:text-7xl">La Banque d'Affaires Nouvelle Génération pour PME</h1>
                                    <p className="mt-8 text-pretty text-lg text-gray-100 max-w-2xl">Accélérez vos transactions M&A grâce à l'IA et notre réseau de 1000+ acheteurs qualifiés</p>

                                    <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Vendre mon entreprise</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="px-5 text-base bg-white/10 text-white hover:bg-white/20">
                                            <Link href="#link">
                                                <span className="text-nowrap">Rejoindre le réseau d'acheteurs</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column - Stats (25%) */}
                                <div className="lg:col-span-3 space-y-6">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-white/60 text-sm">→</span>
                                        <div>
                                            <span className="text-white font-medium text-sm">1000+ acheteurs</span>
                                            <p className="text-white/60 text-xs mt-1">Réseau qualifié par l'IA</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <span className="text-white/60 text-sm">→</span>
                                        <div>
                                            <span className="text-white font-medium text-sm">30% plus élevé</span>
                                            <p className="text-white/60 text-xs mt-1">Offres compétitives</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <span className="text-white/60 text-sm">→</span>
                                        <div>
                                            <span className="text-white font-medium text-sm">45 jours</span>
                                            <p className="text-white/60 text-xs mt-1">Premières offres</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <span className="text-white/60 text-sm">→</span>
                                        <div>
                                            <span className="text-white font-medium text-sm">Sans frais initiaux</span>
                                            <p className="text-white/60 text-xs mt-1">Success fee uniquement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Logo Section - Positioned at bottom of video */}
                    <div className="absolute bottom-8 left-0 right-0 z-20">
                        <div className="relative w-full py-8">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-5 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                                alt="Nvidia Logo"
                                                height="20"
                                                width="auto"
                                            />
                                        </div>

                                        <div className="flex">
                                            <img
                                                className="mx-auto h-4 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/column.svg"
                                                alt="Column Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-4 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/github.svg"
                                                alt="GitHub Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-5 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                                alt="Nike Logo"
                                                height="20"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-5 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                                alt="Lemon Squeezy Logo"
                                                height="20"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-4 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/laravel.svg"
                                                alt="Laravel Logo"
                                                height="16"
                                                width="auto"
                                            />
                                        </div>
                                        <div className="flex">
                                            <img
                                                className="mx-auto h-7 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/lilly.svg"
                                                alt="Lilly Logo"
                                                height="28"
                                                width="auto"
                                            />
                                        </div>

                                        <div className="flex">
                                            <img
                                                className="mx-auto h-6 w-fit brightness-0 invert"
                                                src="https://html.tailus.io/blocks/customers/openai.svg"
                                                alt="OpenAI Logo"
                                                height="24"
                                                width="auto"
                                            />
                                        </div>
                            </InfiniteSlider>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
