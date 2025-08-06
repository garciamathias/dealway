import HeroSection from "@/components/hero-section"
import Features8 from "@/components/features-8"
import Content5 from "@/components/content-5"
import Stats from "@/components/Stats"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Features8 />
      <Content5 />
      <Stats />
      <Footer />
    </div>
  )
}