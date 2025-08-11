import { TrendingUp, Shield, Target, Users } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Notre approche exclusive du M&A off-market crée de la valeur à chaque étape.</h2>
                    <p>Nous orchestrons des opérations de fusion-acquisition discrètes et ciblées, en connectant acquéreurs stratégiques et cibles qualifiées pour maximiser la création de valeur.</p>
                </div>
                <Image className="rounded-(--radius) grayscale" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="M&A team" height={600} width={1200} />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="size-4" />
                            <h3 className="text-sm font-medium">Valorisation Optimale</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Maximisation de la valeur grâce à notre expertise en structuration et négociation.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Due Diligence</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Audit complet et sécurisé pour valider tous les aspects de la transaction.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Target className="size-4" />
                            <h3 className="text-sm font-medium">Ciblage Précis</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Identification des meilleures opportunités adaptées à vos critères stratégiques.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />

                            <h3 className="text-sm font-medium">Accompagnement</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Support complet de la lettre d&apos;intention jusqu&apos;à l&apos;intégration post-acquisition.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
