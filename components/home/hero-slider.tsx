"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=700&width=1400",
    title: "Excellence in Education",
    subtitle: "Nurturing minds, building futures at Bangladesh International School & College",
    cta: "Learn More",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=700&width=1400",
    title: "Modern Facilities",
    subtitle: "State-of-the-art infrastructure for comprehensive learning experience",
    cta: "Explore Campus",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=700&width=1400",
    title: "Admission 2024 Open",
    subtitle: "Join our community of learners and achieve your academic dreams",
    cta: "Apply Now",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 gradient-overlay" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                {slide.subtitle}
              </p>
              <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="gradient-secondary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                >
                  {slide.cta}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 glass border-white/30 text-white hover:bg-white/20 w-12 h-12 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 glass border-white/30 text-white hover:bg-white/20 w-12 h-12 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
