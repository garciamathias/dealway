'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQItem = {
    id: string
    question: string
    answer: string
}

export default function FAQ() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            question: 'Qu\'est-ce que DealWay ?',
            answer: 'DealWay est une banque d\'investissement tech-enabled conçue pour les dirigeants de PME. Nos conseillers M&A expérimentés orchestrent un processus de vente complet, en s\'appuyant sur nos outils IA propriétaires et une base de données d\'acheteurs qualifiés pour identifier chaque acquéreur sérieux pour votre entreprise.',
        },
        {
            id: 'item-2',
            question: 'Comment DealWay trouve-t-il des acheteurs ?',
            answer: 'Nous combinons une expérience pratique des deals avec des algorithmes personnalisés qui analysent le comportement des acheteurs, les investissements passés et l\'adéquation opérationnelle. En moyenne, notre IA identifie plus de 1000 acheteurs pertinents dans notre base de données - significativement plus que les cabinets M&A traditionnels.',
        },
        {
            id: 'item-3',
            question: 'Avec quels types d\'entreprises travaillez-vous ?',
            answer: 'Nous travaillons avec des entreprises rentables dirigées par leurs propriétaires dans la plupart des secteurs, généralement avec un chiffre d\'affaires annuel de 5 à 100 millions d\'euros et au moins 5 ans d\'historique d\'exploitation.',
        },
        {
            id: 'item-4',
            question: 'Comment fonctionnent vos honoraires ?',
            answer: 'Contrairement à la plupart des conseillers, nous opérons entièrement sur un modèle de success fee. Il n\'y a pas de retainer, pas de frais initiaux - nous ne sommes payés que lorsque votre entreprise est vendue. Nous mettons nos clients en premier avec ce système de frais entièrement basé sur le succès.',
        },
        {
            id: 'item-5',
            question: 'Quelle est la durée du processus ?',
            answer: 'Nos clients reçoivent des offres qualifiées en moins de 45 jours, grâce à notre processus rationalisé et notre technologie IA de matching d\'acheteurs. La réalisation la plus rapide peut être aussi courte que 1,5 mois à partir de votre demande initiale.',
        },
        {
            id: 'item-6',
            question: 'Pouvez-vous aider les entreprises en zones rurales ?',
            answer: 'Bien sûr ! Nous nous déplaçons partout en France sans frais supplémentaires. De nombreuses entreprises avec lesquelles nous avons travaillé avec succès sont des entreprises locales en zones rurales. La localisation géographique n\'est pas un obstacle pour réussir la vente de votre entreprise avec DealWay.',
        },
        {
            id: 'item-7',
            question: 'Quels sont les avantages de DealWay ?',
            answer: 'Nos principaux avantages incluent : un système de frais entièrement basé sur le succès, un historique étendu de transactions M&A réussies, un support complet de conseillers M&A expérimentés, une technologie IA propriétaire qui identifie significativement plus d\'acheteurs potentiels que les cabinets traditionnels, et un engagement envers les résultats avec un processus rapide et rationalisé.',
        },
    ]

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-4xl font-light lg:text-5xl mb-6 text-gray-900">
                        Questions fréquentes
                    </h2>
                    <p className="text-xl text-gray-600 font-light">
                        Tout ce que vous devez savoir sur notre approche unique du M&A
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="mx-auto max-w-3xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-4">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b border-gray-200 pb-4"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <span className="text-lg font-medium text-gray-900">
                                        {item.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">
                        Vous avez d\'autres questions ?
                    </p>
                    <a 
                        href="#contact" 
                        className="text-lg font-medium text-gray-900 hover:text-gray-700 underline underline-offset-4"
                    >
                        Contactez-nous
                    </a>
                </div>
            </div>
        </section>
    )
}