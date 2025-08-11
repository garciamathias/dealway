import { Building2, Clock, FileText, Users, DollarSign, Check, X } from 'lucide-react'

const tableData = [
    {
        feature: "Base d'acheteurs",
        traditional: "Réseau limité à un carnet d'adresses",
        dealway: "Cartographie exhaustive grâce à l'IA (+1000 acheteurs pertinents en moyenne)",
        icon: Building2,
    },
    {
        feature: "Vitesse d'exécution",
        traditional: "Processus fragmenté, plusieurs mois avant les premières offres",
        dealway: "Offres qualifiées en moins de 45 jours",
        icon: Clock,
    },
    {
        feature: "Production des documents",
        traditional: "Manuelle, longue et coûteuse",
        dealway: "Automatisée et optimisée (valorisation, deck, analyse financière, due diligence)",
        icon: FileText,
    },
    {
        feature: "Accompagnement",
        traditional: "Temps limité, souvent partagé entre plusieurs dossiers",
        dealway: "Premium et sur-mesure : nous traitons votre cession comme notre seul mandat",
        icon: Users,
    },
    {
        feature: "Frais",
        traditional: "Rétainer initial + success fee à la transaction",
        dealway: "Frais uniquement au succès : aucune avance, rémunération 100% alignée sur votre résultat",
        icon: DollarSign,
        highlighted: true,
    },
]

export default function Comparateur() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-[#f7f4f1] dark:bg-transparent">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Titre */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-balance text-3xl sm:text-4xl font-light lg:text-5xl font-garamond text-gray-900">
                        L&apos;alternative moderne aux méthodes d&apos;hier
                    </h2>
                </div>

                {/* Version Mobile - Cartes empilées */}
                <div className="block lg:hidden space-y-6">
                    {tableData.map((row, index) => {
                        const IconComponent = row.icon;
                        const isHighlighted = row.highlighted;
                        
                        return (
                            <div key={index} className={`bg-white rounded-xl shadow-sm border ${isHighlighted ? 'ring-2 ring-blue-200' : 'border-gray-200'}`}>
                                {/* En-tête de la carte */}
                                <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <IconComponent className="size-5 text-gray-600 flex-shrink-0" />
                                        <span className="font-garamond text-lg font-medium text-gray-900">{row.feature}</span>
                                    </div>
                                </div>
                                
                                {/* Contenu de la carte */}
                                <div className="px-4 sm:px-6 py-4 space-y-4">
                                    {/* Approche traditionnelle */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <X className="size-4 text-red-500" />
                                            <span className="font-garamond text-base font-medium text-gray-900">Approche traditionnelle</span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed pl-6">
                                            {row.traditional}
                                        </p>
                                    </div>
                                    
                                    {/* Avec DealWay */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Check className="size-4 text-green-600" />
                                            <span className="font-garamond text-base font-medium text-gray-900">Avec DealWay</span>
                                        </div>
                                        <div className="pl-6">
                                            {isHighlighted ? (
                                                <div className="text-sm leading-relaxed">
                                                    <span className="text-green-700 font-bold">Frais uniquement au succès :</span>
                                                    <div className="mt-1 text-gray-700">
                                                        aucune avance, rémunération 100% alignée sur votre résultat
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="text-sm text-gray-700 leading-relaxed">
                                                    {row.dealway}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Version Desktop - Tableau */}
                <div className="hidden lg:block">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[800px] border-separate border-spacing-0 bg-white rounded-xl shadow-sm">
                            <thead>
                                <tr>
                                    <th className="py-4 sm:py-6 px-3 sm:px-6 text-left font-medium text-gray-500 w-1/3 sm:w-1/4"></th>
                                    <th className="py-4 sm:py-6 px-3 sm:px-6 text-center border-l border-gray-200 w-1/3 sm:w-3/8">
                                        <div className="space-y-2 sm:space-y-3">
                                            <span className="block text-lg sm:text-xl font-garamond text-gray-900 font-medium">Approche traditionnelle</span>
                                            <div className="flex justify-center">
                                                <X className="size-4 sm:size-5 text-red-500" />
                                            </div>
                                        </div>
                                    </th>
                                    <th className="py-4 sm:py-6 px-3 sm:px-6 text-center border-l border-gray-200 bg-gray-50 w-1/3 sm:w-3/8">
                                        <div className="space-y-2 sm:space-y-3">
                                            <span className="block text-lg sm:text-xl font-garamond text-gray-900 font-medium">Avec DealWay</span>
                                            <div className="flex justify-center">
                                                <Check className="size-4 sm:size-5 text-green-600" />
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => {
                                    const IconComponent = row.icon;
                                    const isHighlighted = row.highlighted;
                                    
                                    return (
                                        <tr key={index} className="border-t border-gray-200">
                                            <td className="py-3 sm:py-4 px-3 sm:px-6">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <IconComponent className="size-4 sm:size-5 text-gray-600 flex-shrink-0" />
                                                    <span className="font-garamond text-base sm:text-lg font-medium text-gray-900">{row.feature}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 sm:py-4 px-3 sm:px-6 border-l border-gray-200">
                                                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                    {row.traditional}
                                                </div>
                                            </td>
                                            <td className={`py-3 sm:py-4 px-3 sm:px-6 border-l border-gray-200 bg-gray-50 ${isHighlighted ? 'ring-2 ring-inset ring-blue-200' : ''}`}>
                                                <div className="flex items-start gap-2">
                                                    <Check className="size-3 sm:size-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <div className={`text-xs sm:text-sm leading-relaxed ${isHighlighted ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                                                        {isHighlighted ? (
                                                            <div>
                                                                <span className="text-green-700 font-bold">Frais uniquement au succès :</span>
                                                                <div className="mt-1 text-gray-700 font-normal">
                                                                    aucune avance, rémunération 100% alignée sur votre résultat
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            row.dealway
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
