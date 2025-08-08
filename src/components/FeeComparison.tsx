import { Check, Minus } from 'lucide-react'

export default function FeeComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-light lg:text-5xl mb-6 text-gray-900">
                        Nous sommes gratuits jusqu'au closing
                    </h2>
                    <p className="text-xl text-gray-600 font-light">
                        Un accompagnement complet de A à Z, aligné à 100% avec vos intérêts.
                        Aucun frais avant la signature finale.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Dealway Card */}
                    <div className="relative">
                        <div className="absolute -top-3 left-8 bg-black text-white px-4 py-1 text-sm font-medium rounded-sm">
                            DEALWAY
                        </div>
                        <div className="border-2 border-black rounded-lg p-8 h-full bg-white">
                            <h3 className="text-2xl font-light mb-8 text-gray-900">
                                Success Fee Uniquement
                            </h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Aucun frais de retainer</p>
                                        <p className="text-sm text-gray-600 mt-1">0€ à l'engagement</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Aucun frais mensuel</p>
                                        <p className="text-sm text-gray-600 mt-1">0€ pendant tout le processus</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Aucun frais intermédiaire</p>
                                        <p className="text-sm text-gray-600 mt-1">0€ à chaque étape</p>
                                    </div>
                                </div>
                                
                                <div className="border-t pt-6">
                                    <div className="flex items-start gap-3">
                                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900">Success fee de 5%</p>
                                            <p className="text-sm text-gray-600 mt-1">Uniquement au closing</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Base : Prix de cession</p>
                                        <p className="text-sm text-gray-600 mt-1">Calcul transparent et simple</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-900">Accompagnement complet inclus</p>
                                        <p className="text-sm text-gray-600 mt-1">De la préparation au closing</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-10 pt-6 border-t">
                                <p className="text-2xl font-light text-gray-900">
                                    Total à avancer : <span className="font-medium">0€</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Others Card */}
                    <div className="relative">
                        <div className="absolute -top-3 left-8 bg-gray-600 text-white px-4 py-1 text-sm font-medium rounded-sm">
                            AUTRES BOUTIQUES M&A
                        </div>
                        <div className="border border-gray-300 rounded-lg p-8 h-full bg-gray-50">
                            <h3 className="text-2xl font-light mb-8 text-gray-700">
                                Modèle Traditionnel
                            </h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <Minus className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-700">Frais de retainer</p>
                                        <p className="text-sm text-gray-500 mt-1">50k - 200k€ upfront</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Minus className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-700">Frais mensuels</p>
                                        <p className="text-sm text-gray-500 mt-1">5k - 15k€ / mois</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Minus className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-700">Frais intermédiaires</p>
                                        <p className="text-sm text-gray-500 mt-1">Facturation à chaque milestone</p>
                                    </div>
                                </div>
                                
                                <div className="border-t pt-6">
                                    <div className="flex items-start gap-3">
                                        <Minus className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-700">Success fee de 5-8%</p>
                                            <p className="text-sm text-gray-500 mt-1">En plus des autres frais</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Minus className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-700">Base : Actifs transférés</p>
                                        <p className="text-sm text-gray-500 mt-1">Calcul complexe et variable</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Minus className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-700">Services additionnels payants</p>
                                        <p className="text-sm text-gray-500 mt-1">Due diligence, négociation, etc.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-10 pt-6 border-t">
                                <p className="text-2xl font-light text-gray-700">
                                    Total à avancer : <span className="font-medium">100k - 500k€</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <p className="text-3xl font-light text-gray-900">
                        Avec Dealway, vous ne payez <span className="font-medium">qu'en cas de succès</span>
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Nous investissons notre temps et nos ressources pour maximiser votre valorisation
                    </p>
                </div>
            </div>
        </section>
    )
}