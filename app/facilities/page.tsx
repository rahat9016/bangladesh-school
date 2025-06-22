import { MainLayout } from "@/components/layout/main-layout"
import { MultimediaClassroom } from "@/components/facilities/multimedia-classroom"
import { Library } from "@/components/facilities/library"
import { Transport } from "@/components/facilities/transport"
import { Medical } from "@/components/facilities/medical"
import { Hostel } from "@/components/facilities/hostel"
import { Auditorium } from "@/components/facilities/auditorium"

export default function FacilitiesPage() {
  return (
    <MainLayout>
      <div className="pt-32">
        {/* Page Header */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="container mx-auto px-4 relative text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Facilities</h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              World-class facilities designed to enhance learning and provide comprehensive support for student
              development
            </p>
          </div>
        </section>

        <MultimediaClassroom />
        <Library />
        <Transport />
        <Medical />
        <Hostel />
        <Auditorium />
      </div>
    </MainLayout>
  )
}
