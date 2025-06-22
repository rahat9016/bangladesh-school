import { MainLayout } from "@/components/layout/main-layout"
import { FacultyOverview } from "@/components/academic/faculty-overview"
import { AcademicCalendar } from "@/components/academic/academic-calendar"
import { CodeOfConduct } from "@/components/academic/code-of-conduct"

export default function AcademicPage() {
  return (
    <MainLayout>
      <div className="pt-32">
        {/* Page Header */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="container mx-auto px-4 relative text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Academic Information</h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive information about our faculty, academic calendar, and institutional policies
            </p>
          </div>
        </section>

        <FacultyOverview />
        <AcademicCalendar />
        <CodeOfConduct />
      </div>
    </MainLayout>
  )
}
