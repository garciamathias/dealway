import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, BarChart3, DollarSign, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

// Composant FeatureCard avec style uniforme et arrondi
interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-xl shadow-none bg-white border-gray-200 backdrop-blur-sm', className)}>
        {children}
    </Card>
)

export default function Etape3() {
    return (
        <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-white to-[#f7f4f1] dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                    {/* Texte - Première colonne sur mobile ET desktop */}
                    <div className="space-y-6 order-1">
                        <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-light font-garamond text-balance">
                            Être accompagné de A à Z
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Valorisation, analyse financière, dossiers marketing… Nos automatisations nous libèrent un temps précieux pour vous offrir un accompagnement approfondi, impossible à délivrer aussi vite avec une méthode classique.
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
                    
                    {/* Animation - Deuxième colonne sur mobile ET desktop */}
                    <div className="flex min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] w-full items-center justify-start order-2">
                        <div className="w-full max-w-lg">
                            <div className="ml-0 [&>div]:!place-items-start">
                                <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
                                    {/* Card Valorisation - arrière (maintenant en premier) */}
                                    <FeatureCard className="[grid-area:stack] w-[18rem] sm:w-[20rem] lg:w-[22rem] h-32 sm:h-36 -skew-y-[8deg] select-none flex flex-col justify-between px-3 sm:px-4 py-3 transition-all duration-700 hover:-translate-y-10">
                                        <div className="flex items-center gap-2">
                                            <span className="relative inline-block rounded-full bg-blue-100 p-1">
                                                <DollarSign className="size-3 sm:size-4 text-blue-600" />
                                            </span>
                                            <h3 className="text-gray-900 text-base sm:text-lg font-medium font-garamond">Valorisation</h3>
                                        </div>
                                        <p className="text-gray-600 text-base sm:text-lg whitespace-nowrap">Prix optimal</p>
                                    </FeatureCard>

                                    {/* Card Analyse Financière - milieu */}
                                    <FeatureCard className="[grid-area:stack] w-[18rem] sm:w-[20rem] lg:w-[22rem] h-32 sm:h-36 -skew-y-[8deg] select-none flex flex-col justify-between px-3 sm:px-4 py-3 translate-x-12 sm:translate-x-16 translate-y-8 sm:translate-y-10 transition-all duration-700 hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="relative inline-block rounded-full bg-blue-100 p-1">
                                                <BarChart3 className="size-3 sm:size-4 text-blue-600" />
                                            </span>
                                            <h3 className="text-gray-900 text-base sm:text-lg font-medium font-garamond">Analyse Financière</h3>
                                        </div>
                                        <p className="text-gray-600 text-base sm:text-lg whitespace-nowrap">Évaluation complète</p>
                                    </FeatureCard>

                                    {/* Card Étude de Marché - avant */}
                                    <FeatureCard className="[grid-area:stack] w-[18rem] sm:w-[20rem] lg:w-[22rem] h-32 sm:h-36 -skew-y-[8deg] select-none flex flex-col justify-between px-3 sm:px-4 py-3 translate-x-24 sm:translate-x-32 translate-y-16 sm:translate-y-20 transition-all duration-700 hover:translate-y-8">
                                        <div className="flex items-center gap-2">
                                            <span className="relative inline-block rounded-full bg-blue-100 p-1">
                                                <TrendingUp className="size-3 sm:size-4 text-blue-600" />
                                            </span>
                                            <h3 className="text-gray-900 text-base sm:text-lg font-medium font-garamond">Étude de Marché</h3>
                                        </div>
                                        <p className="text-gray-600 text-base sm:text-lg whitespace-nowrap">Analyse stratégique</p>
                                    </FeatureCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 