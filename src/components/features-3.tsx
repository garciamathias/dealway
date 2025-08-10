import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TrendingUp, Brain, UserCheck, CreditCard } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id="features" className="bg-zinc-50 py-12 sm:py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-balance text-3xl sm:text-4xl font-light lg:text-5xl font-garamond">Pourquoi nous choisir ?</h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base">Notre approche nouvelle génération allie IA et expertise pour maximiser votre prix et simplifier votre vente.</p>
                </div>
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-4 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-6 sm:mt-8 grid max-w-md sm:max-w-lg md:max-w-full md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-2 sm:pb-3">
                            <CardDecorator>
                                <TrendingUp
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl font-garamond text-gray-900 min-h-[3rem] flex items-center justify-center">Prix maximisé</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-xs sm:text-sm min-h-[2.5rem] flex items-center justify-center">IA et mise en concurrence pour obtenir la meilleure offre.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-2 sm:pb-3">
                            <CardDecorator>
                                <CreditCard
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl font-garamond text-gray-900 min-h-[3rem] flex items-center justify-center">Rémunération au succès</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-xs sm:text-sm min-h-[2.5rem] flex items-center justify-center">Aucun frais avant la signature du deal.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-2 sm:pb-3">
                            <CardDecorator>
                                <UserCheck
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl font-garamond text-gray-900 min-h-[3rem] flex items-center justify-center whitespace-nowrap">Accompagnement humain</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-xs sm:text-sm min-h-[2.5rem] flex items-center justify-center">Nous vous accompagnons et défendons à chaque étape du processus.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-2 sm:pb-3">
                            <CardDecorator>
                                <Brain
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-xl font-garamond text-gray-900 min-h-[3rem] flex items-center justify-center">Processus simplifié</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-xs sm:text-sm min-h-[2.5rem] flex items-center justify-center">Un parcours de vente rapide, fluide et sans incertitudes.</p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
