import { InternalHeader } from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import TeamSection from '@/components/team'

export default function EquipePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InternalHeader />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="flex-1 pt-24 lg:pt-28 pb-16">
        <div className="flex items-center justify-center">
          <TeamSection />
        </div>
      </main>
      
      <SimpleFooter />
    </div>
  )
} 