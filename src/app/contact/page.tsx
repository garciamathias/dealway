import { InternalHeader } from '@/components/Header'
import SimpleFooter from '@/components/SimpleFooter'
import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InternalHeader />
      
      <main className="flex-1 pt-24 lg:pt-28 pb-0">
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-5xl px-6">
            {/* Hero Section */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight" style={{ fontFamily: 'Garamond, "Times New Roman", serif' }}>
                Contactez-nous
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Discutons de votre projet et découvrez comment nous pouvons vous accompagner dans votre transformation digitale.
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </main>

      <SimpleFooter />
    </div>
  )
} 