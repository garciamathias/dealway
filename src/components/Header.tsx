'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Services', href: '/#features' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export const InternalHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/30 shadow-sm">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-4 sm:gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo className="text-gray-800" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-gray-700" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-gray-700" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="block duration-150 text-gray-700 hover:text-black">
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
                                                className="block duration-150 font-medium text-gray-700 hover:text-black">
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
                                    className="group rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border border-gray-300 bg-transparent text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200/50">
                                    <Link href="#" className="flex items-center gap-2">
                                        <span>Connexion</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="group rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap border border-gray-300 bg-transparent text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200/50">
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

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isOutOfHero, setIsOutOfHero] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight
            
            setIsScrolled(scrollY > 50)
            setIsOutOfHero(scrollY > windowHeight * 0.9) // Sortie de la hero section
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
                    isOutOfHero 
                        ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/30 shadow-sm" 
                        : isScrolled 
                        ? "bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/20"
                        : "bg-transparent"
                )}>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-4 sm:gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo className={cn(
                                    isOutOfHero ? "text-gray-800" : "text-white"
                                )} />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn(
                                    "in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200",
                                    isOutOfHero ? "text-gray-700" : "text-white"
                                )} />
                                <X className={cn(
                                    "in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                                    isOutOfHero ? "text-gray-700" : "text-white"
                                )} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "block duration-150",
                                                isOutOfHero 
                                                    ? "text-gray-700 hover:text-black"
                                                    : "text-white/80 hover:text-white"
                                            )}>
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
                                                className={cn(
                                                    "block duration-150 font-medium",
                                                    isOutOfHero 
                                                        ? "text-gray-700 hover:text-black"
                                                        : "text-white/80 hover:text-white"
                                                )}>
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
                                    className={cn(
                                        "group rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                                        isOutOfHero 
                                            ? "border border-gray-300 bg-transparent text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200/50"
                                            : "border border-white/70 bg-transparent text-white hover:text-white hover:border-white hover:bg-white/5 hover:shadow-white/10"
                                    )}>
                                    <Link href="#" className="flex items-center gap-2">
                                        <span>Connexion</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "group rounded-sm px-4 py-2 h-auto text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap",
                                        isOutOfHero 
                                            ? "border border-gray-300 bg-transparent text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200/50"
                                            : "border border-white/70 bg-transparent text-white hover:text-white hover:border-white hover:bg-white/5 hover:shadow-white/10"
                                    )}>
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
