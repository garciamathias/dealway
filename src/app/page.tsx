import HeroSection from "@/components/hero-section"
import Stats from "@/components/Stats"
import FeeComparison from "@/components/FeeComparison"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      {/* Contenu principal au-dessus du footer */}
      <div className="relative z-10 bg-white min-h-screen shadow-2xl rounded-b-[12px]">
        <HeroSection />
        <Stats />
        <FeeComparison />
        <FAQ />
      </div>

      {/* Footer collant (révélé en bas, sans espace blanc supplémentaire) */}
      <Footer />
    </>
  )
}