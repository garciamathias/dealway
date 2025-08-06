'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Processus', href: '#process' },
    { name: 'Contact', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-300",
                    isScrolled && "bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/20"
                )}>
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/80 hover:text-white block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-1.5 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
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
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="group border border-white/70 bg-transparent text-white hover:text-white hover:border-white hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300">
                                    <Link href="#" className="flex items-center gap-2">
                                        <span>Connexion</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="group border border-white/70 bg-transparent text-white hover:text-white hover:border-white hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300">
                                    <Link href="#" className="flex items-center gap-2">
                                        <span>Nous Contacter</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
