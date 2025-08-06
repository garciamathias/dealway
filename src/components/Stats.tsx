export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Notre Impact en Chiffres</h2>
                    <p>Des r\u00e9sultats concrets qui t\u00e9moignent de notre expertise et de la confiance de nos clients dans l'orchestration de leurs op\u00e9rations M&A off-market.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">2.5 Mds€</div>
                        <p>Volume de transactions réalisées</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">87%</div>
                        <p>Taux de réussite des opérations</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+150</div>
                        <p>Opérations off-market finalisées</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
