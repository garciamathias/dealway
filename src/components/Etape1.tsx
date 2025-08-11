import { Button } from '@/components/ui/button'
import { ChevronRight, Building2, User, Briefcase, Users, Crown, Factory } from 'lucide-react'
import Link from 'next/link'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'

export default function Etape1() {
    return (
        <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-b from-white to-[#f7f4f1] dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                    {/* Texte - Première colonne sur mobile ET desktop */}
                    <div className="space-y-6 order-1">
                        <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-light font-garamond text-balance">
                            Cartographier l&apos;ensemble du marché
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Grâce à nos algorithmes d&apos;IA, nous identifions tous les acheteurs potentiels (fonds de private equity, acheteurs stratégiques, repreneurs individuels…), bien au-delà des carnets d&apos;adresses classiques.
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
                    <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full flex items-center justify-center order-2">
                        <div className="relative w-full h-full [&_svg_circle]:!stroke-gray-300 [&_svg_circle]:!stroke-opacity-80 flex justify-center">
                            {/* Première orbite - acheteurs individuels */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <OrbitingCircles
                                    className="size-[32px] sm:size-[36px] lg:size-[40px] border-none bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center"
                                    duration={25}
                                    delay={0}
                                    radius={60}
                                    path={true}
                                >
                                    <User className="size-4 sm:size-5 text-blue-600" />
                                    <Users className="size-4 sm:size-5 text-green-600" />
                                    <Crown className="size-4 sm:size-5 text-purple-600" />
                                </OrbitingCircles>
                            </div>
                            
                            {/* Deuxième orbite - investisseurs institutionnels */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <OrbitingCircles
                                    className="size-[32px] sm:size-[36px] lg:size-[40px] border-none bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center"
                                    duration={30}
                                    delay={10}
                                    radius={120}
                                    path={true}
                                    reverse
                                >
                                    <Briefcase className="size-4 sm:size-5 text-slate-700" />
                                    <Building2 className="size-4 sm:size-5 text-orange-600" />
                                    <Factory className="size-4 sm:size-5 text-gray-700" />
                                </OrbitingCircles>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 