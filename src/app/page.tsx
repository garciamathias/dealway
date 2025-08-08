import HeroSection from "@/components/hero-section"
import Stats from "@/components/Stats"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Stats />
      <Footer />
    </div>
  )
}