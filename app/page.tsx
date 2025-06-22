import { GalleryHighlights } from "@/components/home/gallery-highlights"
import { HeroSlider } from "@/components/home/hero-slider"
import { NewsNotice } from "@/components/home/news-notice"

export default function HomePage() {
  return (
    <div className="pt-36">
        <HeroSlider />
        <NewsNotice />
        <GalleryHighlights />
      </div>
  )
}
