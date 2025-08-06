'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './Header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { Users, TrendingUp, Clock, CircleCheck, ArrowUpRight } from 'lucide-react'

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
                    <div className="relative z-10 min-h-screen flex items-start py-12 lg:pt-48 lg:pb-20">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-12 lg:items-start">
                                {/* Left Column - Main Content (75%) */}
                                <div className="lg:col-span-9 text-center lg:text-left">
                                    <h1 className="mt-8 text-balance text-5xl font-light text-white md:text-6xl lg:mt-16 xl:text-7xl">La Banque d'Affaires Nouvelle Génération pour les PME</h1>
                                    <p className="mt-8 text-pretty text-lg text-gray-100 max-w-2xl">Vendez votre entreprise plus sereinement et rapidement</p>

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
                                                <span>Rejoindre le réseau d'acheteurs</span>
                                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column - Stats (25%) */}
                                <div className="lg:col-span-3 relative">
                                    <div className="mt-8 lg:mt-16 border-l border-white/10 pl-8 space-y-8">
                                        <div className="flex items-start space-x-4 group">
                                            <div className="p-2 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors">
                                                <Users className="h-4 w-4 text-white/70" />
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-base">1000+ acheteurs</div>
                                                <p className="text-white/70 text-sm mt-0.5">Réseau IA qualifié</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start space-x-4 group">
                                            <div className="p-2 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors">
                                                <TrendingUp className="h-4 w-4 text-white/70" />
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-base">+30% de valeur</div>
                                                <p className="text-white/70 text-sm mt-0.5">Enchères compétitives</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start space-x-4 group">
                                            <div className="p-2 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors">
                                                <Clock className="h-4 w-4 text-white/70" />
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-base">45 jours max</div>
                                                <p className="text-white/70 text-sm mt-0.5">Premières offres rapides</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start space-x-4 group">
                                            <div className="p-2 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors">
                                                <CircleCheck className="h-4 w-4 text-white/70" />
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-base">0€ d'avance</div>
                                                <p className="text-white/70 text-sm mt-0.5">Success fee seulement</p>
                                            </div>
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
