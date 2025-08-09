import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BadgeDollarSign, ArrowUpRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        {/* Conteneur clair (comme avant) */}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#efeae6] p-6 sm:p-8 lg:p-10">
          <div className="relative grid items-center gap-x-16 gap-y-10 p-8 sm:p-10 lg:grid-cols-12 min-h-[420px]">
            {/* Left: copy */}
            <div className="lg:col-span-7 text-neutral-900">
              <h2 className="text-balance text-4xl font-light sm:text-5xl lg:text-6xl">
                Prêt à <span className="font-medium">maximiser</span> la valeur de votre entreprise ?
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base text-neutral-700">
                Échangez avec nos experts M&A pour démarrer un processus plus rapide et plus rémunérateur. Nous vous accompagnons de la préparation à la signature.
              </p>

              <div className="mt-10 flex flex-col items-center justify-start gap-3 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  variant="default"
                  className="group bg-white text-black hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <span>Rencontrer un conseiller</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300"
                >
                  <Link href="#buyers" className="flex items-center gap-2">
                    <span>Trouver des acheteurs</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: image */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
                <Image
                  src="/artefact-1754736401229.png"
                  alt="Dirigeant satisfait"
                  width={800}
                  height={600}
                  className="h-[360px] w-full object-cover"
                  priority
                />
              </div>

              {/* Floating success card */}
              <div className="absolute -bottom-5 left-6 flex items-start gap-3 rounded-lg border border-black/5 bg-white/95 p-3 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                  <BadgeDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">Félicitations, Jack !</div>
                  <div className="text-xs text-neutral-600">Vous venez de vendre votre entreprise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


