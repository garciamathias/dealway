import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'


export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Grainy gradient background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/grany_gradient/513b98f7-9dc5-4844-86ca-379ae723b77f.jpg"
                        alt="Hero background gradient"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
                
                {/* Animated gradient orbs */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block z-15">
                    {/* Left effects - Orange tinted */}
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(30,60%,85%,.08)_0,hsla(25,45%,55%,.02)_50%,hsla(20,35%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(35,55%,85%,.06)_0,hsla(30,40%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(40,50%,85%,.04)_0,hsla(35,35%,45%,.02)_80%,transparent_100%)]" />
                    
                    {/* Right effects - Blue tinted */}
                    <div className="w-140 h-320 -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_44.98%_31.46%,hsla(220,60%,85%,.08)_0,hsla(225,45%,55%,.02)_50%,hsla(230,35%,45%,0)_80%)]" />
                    <div className="h-320 absolute right-0 top-0 w-60 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(215,55%,85%,.06)_0,hsla(220,40%,45%,.02)_80%,transparent_100%)] [translate:-5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute right-0 top-0 w-60 rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,50%,85%,.04)_0,hsla(215,35%,45%,.02)_80%,transparent_100%)]" />
                </div>
                
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                
                <section className="relative z-20 w-full max-w-7xl px-6">
                    <div className="text-center">

                                <h1 className="mt-8 text-balance text-6xl font-extralight md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    AI Research and Products Made by Students
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg font-light">
                                    Our mission is to build and democratize artificial intelligence for companies.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="h-auto px-4 py-2 hover:bg-white/5 text-white border border-white/20 hover:border-white/30 transition-all duration-200 ease-in-out">
                                        <Link href="https://chat.arcenal.org" className="flex items-center gap-3">
                                            <span className="text-nowrap">Chat</span>
                                            <ArrowUpRight className="size-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="h-auto px-4 py-2 hover:bg-white/5 text-white border border-white/20 hover:border-white/30 transition-all duration-200 ease-in-out">
                                        <Link href="https://canvas.arcenal.org" className="flex items-center gap-3">
                                            <span className="text-nowrap">Canvas</span>
                                            <ArrowUpRight className="size-5" />
                                        </Link>
                                    </Button>
                                </div>
                    </div>
                </section>
            </main>
        </>
    )
}
