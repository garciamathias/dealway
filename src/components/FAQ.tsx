'use client'

import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

type FAQItem = {
    id: string
    question: string
    answer: string
}

// Fonction pour parser et formater les réponses avec des listes
const parseAnswer = (answer: string) => {
    // Diviser la réponse en segments
    const segments = answer.split('\n\n')
    
    return segments.map((segment, segmentIndex) => {
        const lines = segment.split('\n').filter(line => line.trim() !== '')
        
        // Vérifier s'il y a des bullet points dans ce segment
        const hasBullets = lines.some(line => line.trim().startsWith('•'))
        
        if (hasBullets) {
            const textLines = lines.filter(line => !line.trim().startsWith('•'))
            const bulletLines = lines.filter(line => line.trim().startsWith('•'))
            
            return (
                <div key={segmentIndex} className={segmentIndex > 0 ? 'mt-4' : ''}>
                    {textLines.map((textLine, textIndex) => (
                        <p key={textIndex} className={`text-gray-600 ${textIndex < textLines.length - 1 || bulletLines.length > 0 ? 'mb-3' : ''}`}>
                            {textLine}
                        </p>
                    ))}
                    {bulletLines.length > 0 && (
                        <ul className="space-y-2 ml-6">
                            {bulletLines.map((bulletLine, bulletIndex) => (
                                <li key={bulletIndex} className="flex items-start text-gray-600">
                                    <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <span className="leading-relaxed">{bulletLine.replace('•', '').trim()}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )
        } else {
            // Segment sans bullet points
            return (
                <div key={segmentIndex} className={segmentIndex > 0 ? 'mt-4' : ''}>
                    {lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-600">
                            {line}
                        </p>
                    ))}
                </div>
            )
        }
    })
}

export default function FAQ() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            question: 'Qu\'est-ce que Dealway ?',
            answer: 'Dealway est un cabinet de M&A nouvelle génération qui combine technologie et expertise humaine pour permettre aux dirigeants de PME de vendre au meilleur prix et dans les meilleurs délais. Nous automatisons une grande partie du processus — du ciblage des acheteurs à la production des supports de vente — pour concentrer nos efforts sur la négociation et l\'optimisation des conditions de vente.',
        },
        {
            id: 'item-2',
            question: 'Comment trouvez-vous des acheteurs ?',
            answer: 'Nous utilisons des algorithmes propriétaires qui analysent en continu le marché, les mouvements de consolidation et le comportement des acquéreurs (transactions passées, capital disponible, stratégie). Résultat : plus de 1 000 acheteurs pertinents identifiés en moyenne, soit bien au-delà des carnets d\'adresses des cabinets traditionnels. Nous les contactons ensuite de manière confidentielle pour initier un processus concurrentiel.',
        },
        {
            id: 'item-3',
            question: 'Avec quels types d\'entreprises travaillez-vous ?',
            answer: 'Nous accompagnons principalement des PME rentables, tous secteurs confondus, avec :\n\n• un chiffre d\'affaires annuel entre 1 M€ et 10 M€\n• au moins 5 ans d\'historique\n• un dirigeant déjà décidé à céder dans un horizon clair.',
        },
        {
            id: 'item-4',
            question: 'Comment fonctionnent vos honoraires ?',
            answer: 'Nous travaillons uniquement au succès : nos honoraires sont dus uniquement lorsque la transaction est signée. Aucun frais initial, aucun abonnement : nos intérêts sont 100 % alignés avec les vôtres.',
        },
        {
            id: 'item-5',
            question: 'Comment savoir la valeur de mon entreprise ?',
            answer: 'Nous réalisons une évaluation gratuite et rapide, basée sur les méthodes reconnues du M&A : comparables de marché, multiples sectoriels, flux de trésorerie actualisés…\n\nCela vous donne une vision claire de la valeur réelle, bien différente d\'une simple valeur comptable.',
        },
        {
            id: 'item-6',
            question: 'Comment maximiser la valeur de ma vente ?',
            answer: 'Pour obtenir le meilleur prix, il faut créer une véritable compétition entre plusieurs acquéreurs qualifiés.\n\nNous orchestrons donc pour vous ce processus rigoureux : ciblage précis des acheteurs, diffusion maîtrisée des informations et mise en avant stratégique des atouts de votre entreprise.',
        },
        {
            id: 'item-7',
            question: 'Pourquoi ne pas vendre seul, ou avec mon expert-comptable ?',
            answer: 'La vente d\'une entreprise exige bien plus que la tenue des comptes : il faut identifier les bons acheteurs, créer de la concurrence et négocier chaque condition.\n\nUn expert-comptable valorise vos chiffres passés ; nous, nous valorisons aussi votre potentiel futur et pilotons un processus compétitif pour maximiser le prix et réduire les délais.',
        },
        {
            id: 'item-8',
            question: 'Qu\'en est-il de la confidentialité ?',
            answer: 'La confidentialité est au cœur de notre méthode. Nous signons un NDA (accord de confidentialité) avec vous dès le départ, et chaque acheteur doit également le signer avant d\'accéder aux informations sensibles.\n\nLa diffusion est toujours ciblée et séquencée.',
        },
        {
            id: 'item-9',
            question: 'Qui sont les potentiels repreneurs ?',
            answer: 'Selon vos objectifs, il peut s\'agir :\n\n• de groupes industriels ou concurrents stratégiques\n• de fonds d\'investissement spécialisés PME/ETI\n• de repreneurs individuels ou managers internes',
        },
        {
            id: 'item-10',
            question: 'Dois-je rester après la vente ?',
            answer: 'Cela dépend de vos souhaits et de ceux du repreneur. Certains souhaitent un accompagnement pendant quelques mois, d\'autres non.\n\nUn passage de relais peut aussi rendre votre entreprise plus attractive et mieux valorisable. L\'essentiel est de clarifier vos priorités.',
        },
        {
            id: 'item-11',
            question: 'Quelle est la durée du processus ?',
            answer: 'Nos clients reçoivent des offres qualifiées en moins de 45 jours, grâce à notre processus rationalisé et notre technologie IA de matching d\'acheteurs. La réalisation la plus rapide peut être aussi courte que 1,5 mois à partir de votre demande initiale.',
        },
        {
            id: 'item-12',
            question: 'Quels sont vos avantages ?',
            answer: '• Honoraires uniquement au succès\n• Couverture acheteurs inégalée grâce à l\'IA\n• Processus rapide et structuré\n• Accompagnement humain\n\nObjectif unique : maximiser votre prix dans les meilleurs délais',
        },
    ]

    return (
        <section className="relative py-16 bg-gradient-to-b from-white to-[#f7f4f1]">
            {/* Fondu étendu vers la section suivante */}
            <div
                className="pointer-events-none absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#f7f4f1]"
                aria-hidden
            />
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                {/* Layout à deux colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Colonne gauche : Titre et description */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-8">
                            <h2 className="text-3xl font-light lg:text-4xl mb-4 text-gray-900 font-garamond">
                                Questions fréquentes
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600">
                                Réponses aux questions fréquentes.
                            </p>
                            
                            {/* CTA Section */}
                            <div className="mt-6 lg:mt-8">
                                <p className="text-sm text-gray-600 mb-3">
                                    Vous avez d&apos;autres questions ?
                                </p>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="group border border-gray-300 bg-transparent text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200/50 rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <Link href="#contact" className="flex items-center gap-2">
                                        <span>Nous contacter</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite : FAQ Accordion */}
                    <div className="lg:col-span-8">
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
                                    <AccordionTrigger className="text-left hover:no-underline py-4 text-base font-medium text-gray-900 data-[state=open]:text-[#022543]">
                                        <span>
                                            {item.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-0 pb-5">
                                        <div className="leading-relaxed">
                                            {parseAnswer(item.answer)}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}