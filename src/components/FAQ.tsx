'use client'

import Image from 'next/image'
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
        <section className="relative py-24 bg-gradient-to-b from-white to-[#f7f4f1]">
            {/* Fondu étendu vers la section suivante */}
            <div
                className="pointer-events-none absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#f7f4f1]"
                aria-hidden
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-14">
                    <h2 className="text-4xl font-light lg:text-5xl mb-4 text-gray-900">
                        Questions fréquentes
                    </h2>
                    <p className="text-lg text-gray-600 font-light">
                        Tout ce que vous devez savoir sur notre approche unique du M&A
                    </p>
                </div>

                {/* Image + FAQ grid */}
                <div className="mx-auto max-w-6xl">
                    <div className="grid items-start gap-10 lg:grid-cols-12">
                        {/* Left: image */}
                        <div className="lg:col-span-5">
                            <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
                                <Image
                                    src="/artefact-1754736401229.png"
                                    alt="Conseiller M&A Dealway"
                                    width={700}
                                    height={900}
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: FAQ Accordion */}
                        <div className="lg:col-span-7">
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4">
                                {faqItems.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border-none rounded-xl bg-white/80 px-4 sm:px-6 ring-1 ring-black/5 transition-all hover:shadow-sm"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-4 text-[17px] font-medium text-gray-900 data-[state=open]:text-[#C49A7D]">
                                            <span>
                                                {item.question}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-0 pb-5">
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">Vous avez d&apos;autres questions ?</p>
                    <div className="flex items-center justify-center gap-3">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-sm bg-black px-6 py-3 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-900 hover:shadow-lg hover:shadow-black/20"
                        >
                            Nous écrire
                        </a>
                        <a
                            href="#buyers"
                            className="group inline-flex items-center gap-2 rounded-sm border border-[#C49A7D]/50 bg-transparent px-6 py-3 text-base font-medium text-neutral-900 transition-all hover:-translate-y-0.5 hover:border-[#C49A7D] hover:bg-[#C49A7D]/10 hover:shadow-lg hover:shadow-black/5"
                        >
                            En savoir plus
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}