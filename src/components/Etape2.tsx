"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Building2, User, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { AnimatedList } from '@/components/magicui/animated-list'
import { useEffect, useRef, useState } from 'react'

export default function Etape2() {
    const [animationKey, setAnimationKey] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Relancer l'animation en changeant la clé
                        setAnimationKey(prev => prev + 1)
                    }
                })
            },
            { threshold: 0.3 }
        )

        const currentSection = sectionRef.current
        if (currentSection) {
            observer.observe(currentSection)
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection)
            }
        }
    }, [])

    return (
        <section ref={sectionRef} className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-white to-[#f7f4f1] dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                    {/* Titre - Première sur mobile, masqué sur desktop */}
                    <div className="space-y-6 order-1 md:hidden">
                        <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-light font-garamond text-balance">
                            Créer une vraie compétition
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Nous mettons ces acheteurs en concurrence dans un processus structuré pour faire monter les enchères. Fini les approches isolées et les semaines perdues sans résultat : vous reprenez la main.
                        </p>
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1 pr-1.5 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:text-white font-normal"
                        >
                            <Link href="/contact">
                                <span>Nous contacter</span>
                                <ChevronRight className="size-3 text-white" />
                            </Link>
                        </Button>
                    </div>
                    
                    {/* Animation - Deuxième sur mobile, première sur desktop */}
                    <div className="flex min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] w-full items-center justify-center order-2 md:order-1">
                        <div className="w-full max-w-lg">
                            <AnimatedList key={animationKey} className="mx-auto w-full">
                                <Card key="pe" className="rounded-xl p-3 sm:p-4 bg-white border-gray-200 shadow-sm w-[18rem] sm:w-[20rem] lg:w-[22rem]">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="relative inline-block rounded-full bg-green-100 p-1.5 sm:p-2">
                                            <Briefcase className="size-3 sm:size-4 text-green-600" />
                                        </span>
                                        <div>
                                            <h3 className="text-gray-900 text-base sm:text-lg font-medium font-garamond">Fonds de Private Equity</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">Offre reçue • 3,8M€</p>
                                        </div>
                                    </div>
                                </Card>
                                
                                <Card key="individual" className="rounded-xl p-3 sm:p-4 bg-white border-gray-200 shadow-sm w-[18rem] sm:w-[20rem] lg:w-[22rem]">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="relative inline-block rounded-full bg-blue-100 p-1.5 sm:p-2">
                                            <User className="size-3 sm:size-4 text-blue-600" />
                                        </span>
                                        <div>
                                            <h3 className="text-gray-900 text-base sm:text-lg font-medium font-garamond">Repreneur Individuel</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">Offre reçue • 2,5M€</p>
                                        </div>
                                    </div>
                                </Card>
                                
                                <Card key="strategic" className="rounded-xl p-3 sm:p-4 bg-white border-gray-200 shadow-sm w-[18rem] sm:w-[20rem] lg:w-[22rem]">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="relative inline-block rounded-full bg-orange-100 p-1.5 sm:p-2">
                                            <Building2 className="size-3 sm:size-4 text-orange-600" />
                                        </span>
                                        <div>
                                            <h3 className="text-gray-900 text-base sm:text-lg font-medium font-garamond">Entreprise du Secteur</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">Offre reçue • 3,2M€</p>
                                        </div>
                                    </div>
                                </Card>
                            </AnimatedList>
                        </div>
                    </div>
                    
                    {/* Texte - Masqué sur mobile, deuxième sur desktop */}
                    <div className="space-y-6 hidden md:block md:order-2">
                        <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-light font-garamond text-balance">
                            Créer une vraie compétition
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Nous mettons ces acheteurs en concurrence dans un processus structuré pour faire monter les enchères. Fini les approches isolées et les semaines perdues sans résultat : vous reprenez la main.
                        </p>
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1 pr-1.5 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:text-white font-normal"
                        >
                            <Link href="/contact">
                                <span>Nous contacter</span>
                                <ChevronRight className="size-3 text-white" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 