import { InternalHeader } from '@/components/Header'
import Footer from '@/components/Footer'
import TeamSection from '@/components/team'

export default function EquipePage() {
  return (
    <>
      {/* Contenu principal au-dessus du footer */}
      <div className="relative z-10 bg-white min-h-screen shadow-2xl rounded-b-[12px]">
        <InternalHeader />
        
        {/* Main content with proper spacing for fixed header */}
        <main className="flex-1 pt-24 lg:pt-28 pb-16">
          <div className="flex items-center justify-center">
            <TeamSection />
          </div>
        </main>
      </div>
      
      {/* Footer collant (révélé en bas, sans espace blanc supplémentaire) */}
      <Footer />
    </>
  )
} 