import { MainLayout } from "@/components/layout/main-layout"
import { PhotoGallery } from "@/components/gallery/photo-gallery"

export default function GalleryPage() {
  return (
    <MainLayout>
      <div className="pt-32">
        {/* Page Header */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="container mx-auto px-4 relative text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Gallery</h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
              Capturing moments, preserving memories - explore our vibrant school life through images
            </p>
          </div>
        </section>

        <PhotoGallery />
      </div>
    </MainLayout>
  )
}
