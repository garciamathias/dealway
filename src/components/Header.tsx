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
                className="fixed top-0 z-50 w-full px-2 pt-2">
                <div className={cn('mx-auto max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-white/10 dark:bg-black/20 max-w-5xl rounded-2xl border border-white/20 backdrop-blur-lg lg:px-8')}>
                    <div className={cn("relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4", isScrolled && "py-2 lg:py-3")}>
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo className={isScrolled ? "text-lg" : ""} />
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
                            <ul className={cn("flex gap-8 text-sm", isScrolled && "gap-6")}>
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
                                    className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/30 transition-all duration-200 ease-in-out px-4 py-2 h-auto">
                                    <Link href="#" className="flex items-center gap-2">
                                        <span>Connexion</span>
                                        <ArrowUpRight className="h-3 w-3" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/30 transition-all duration-200 ease-in-out px-4 py-2 h-auto">
                                    <Link href="#" className="flex items-center gap-2">
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
