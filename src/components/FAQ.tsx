'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQ() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'building-2',
            question: 'What is DealWay?',
            answer: 'DealWay is a tech-enabled investment bank built for small business owners. Our experienced M&A advisors run a full sell-side process - leveraging our proprietary AI tools and a curated buyer database to identify every serious acquirer for your business.',
        },
        {
            id: 'item-2',
            icon: 'search',
            question: 'How does DealWay find buyers?',
            answer: 'We combine hands-on deal experience with custom algorithms that analyze buyer behavior, past investments, and operating fit. On average, our AI identifies 1,000+ relevant buyers from our extensive database - significantly more than traditional M&A firms. We search for potential buyers globally and conduct thorough matching to ensure the best fit for your business.',
        },
        {
            id: 'item-3',
            icon: 'briefcase',
            question: 'What kinds of businesses does DealWay work with?',
            answer: 'We work with profitable, owner-led businesses across most industries, typically with $5–100 million in annual revenue and at least 5 years of operating history. Our expertise spans various sectors including technology, manufacturing, services, and retail.',
        },
        {
            id: 'item-4',
            icon: 'dollar-sign',
            question: 'How do DealWay\'s fees work?',
            answer: 'Unlike most advisors, we operate entirely on a success-fee model. There are no retainers, no upfront costs - we only get paid when your business sells. We put our customers first with this completely success-based fee system, ensuring our interests are fully aligned with yours.',
        },
        {
            id: 'item-5',
            icon: 'clock',
            question: 'How fast is the process?',
            answer: 'Our clients receive qualified offers in under 45 days, driven by our streamlined process and buyer-matching AI technology. The quickest completion can be as fast as 1.5 months from your initial request. Our experienced M&A Advisers eliminate unnecessary exchanges between matching and closing, significantly shortening the time required for successful M&A transactions.',
        },
        {
            id: 'item-6',
            icon: 'map-pin',
            question: 'Can you help companies in rural areas?',
            answer: 'Of course! We will visit you anywhere in the country free of charge. Many of the companies we have successfully worked with as M&A intermediaries are local companies in rural areas. Geographic location is no barrier to achieving a successful business sale with DealWay.',
        },
        {
            id: 'item-7',
            icon: 'award',
            question: 'What are the advantages of DealWay?',
            answer: 'Our key advantages include: (1) Completely success-based fee system - free until your business sells, (2) Extensive track record of successful M&A transactions, (3) Full support from experienced M&A Advisers who conduct negotiations in a polite and sincere manner, (4) Proprietary AI technology that identifies significantly more potential buyers than traditional firms, and (5) Commitment to results from the customer\'s point of view with a fast, streamlined process.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">FAQ\'s</h2>
                            <p className="text-muted-foreground mt-4">
                                Answers to frequently asked questions.{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline block mt-4">
                                    Talk to us
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
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