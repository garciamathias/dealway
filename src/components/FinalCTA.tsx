import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative bg-[#f7f4f1] py-16 rounded-b-[12px] overflow-hidden">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        {/* Conteneur clair (comme avant) */}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#F3EEE9] via-[#EFEAE6] to-[#E8DFD9] p-6 sm:p-8 lg:p-10">
          <div className="relative flex flex-col items-center justify-center text-center p-8 sm:p-10 min-h-[300px]">
            {/* Contenu centré */}
            <div className="text-neutral-900 max-w-4xl">
              <h2 className="text-balance text-3xl font-light sm:text-4xl lg:text-5xl font-garamond">
                Prêt à <span className="font-normal text-[#022543]">maximiser</span> la valeur de votre entreprise ?
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto">
                Discutons de votre projet et lançons ensemble un processus rapide et compétitif.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="default"
                  className="group bg-black text-white hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <span>Nous contacter</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group border border-[#022543]/50 bg-transparent text-neutral-900 hover:bg-[#022543]/10 hover:border-[#022543] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300"
                >
                  <Link href="#buyers" className="flex items-center gap-2">
                    <span>Trouver des acheteurs</span>
                    <ArrowUpRight className="h-4 w-4 text-[#022543] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


