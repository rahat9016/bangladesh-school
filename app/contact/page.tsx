import { MainLayout } from "@/components/layout/main-layout"
import { ContactDetails } from "@/components/contact/contact-details"
import { LocationMap } from "@/components/contact/location-map"

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="pt-32">
        {/* Page Header */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="container mx-auto px-4 relative text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>
        </section>

        <ContactDetails />
        <LocationMap />
      </div>
    </MainLayout>
  )
}
