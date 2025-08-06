'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Processus', href: '#process' },
    { name: 'Contact', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-white/10 dark:bg-black/20 fixed z-20 w-full border-b border-white/20 backdrop-blur-lg backdrop-saturate-150 shadow-lg shadow-black/5">
                <div className="mx-auto max-w-7xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-2 lg:py-2.5">
                        {/* Logo - Left */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>
                        </div>

                        {/* Navigation - Center */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/90 hover:text-white block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                        </button>

                        {/* CTA Buttons - Right */}
                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/80 hover:text-white block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="bg-white/5 backdrop-blur-sm border border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-sm px-5 py-1.5 h-auto font-normal text-sm transition-all duration-200 shadow-sm">
                                    <Link href="#" className="flex items-center gap-1">
                                        <span>Connexion</span>
                                        <ArrowUpRight className="h-3 w-3" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="bg-white/15 backdrop-blur-sm border border-white/40 text-white hover:bg-white/25 hover:border-white/60 rounded-sm px-5 py-1.5 h-auto font-medium text-sm transition-all duration-200 shadow-sm">
                                    <Link href="#" className="flex items-center gap-1">
                                        <span>Nous Contacter</span>
                                        <ArrowUpRight className="h-3 w-3" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
