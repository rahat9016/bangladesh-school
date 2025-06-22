"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Eye, Heart, Share2 } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Modern Science Laboratory",
    title: "Science Laboratory",
    category: "Facilities",
    likes: 234,
    views: 1250,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Digital Library",
    title: "Digital Library",
    category: "Learning Spaces",
    likes: 189,
    views: 980,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sports Complex",
    title: "Sports Complex",
    category: "Recreation",
    likes: 312,
    views: 1560,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cultural Performance",
    title: "Annual Cultural Program",
    category: "Events",
    likes: 445,
    views: 2100,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Computer Laboratory",
    title: "IT Laboratory",
    category: "Technology",
    likes: 198,
    views: 1100,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Main Auditorium",
    title: "Grand Auditorium",
    category: "Venues",
    likes: 267,
    views: 1400,
  },
]

export function GalleryHighlights() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <Camera className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Campus Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Campus Life</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our vibrant campus and discover what makes our school community special
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="glass-card border-0 overflow-hidden group hover-lift rounded-2xl animate-scale-in shadow-xl"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-500"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${
                    hoveredImage === image.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass px-3 py-1 rounded-full text-white text-sm font-medium">
                      {image.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <Button
                      size="sm"
                      className="glass border-0 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="glass border-0 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{image.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{image.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-secondary hover:scale-105 transition-all duration-300 px-12 py-4 text-lg font-semibold rounded-full shadow-xl"
          >
            <Camera className="h-5 w-5 mr-2" />
            Explore Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
