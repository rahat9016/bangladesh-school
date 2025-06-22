"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Filter, Grid, Heart, Share2, Download, X } from "lucide-react"

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Photos", count: 120 },
    { id: "campus", name: "Campus Life", count: 25 },
    { id: "events", name: "Events", count: 30 },
    { id: "sports", name: "Sports", count: 20 },
    { id: "cultural", name: "Cultural", count: 18 },
    { id: "academic", name: "Academic", count: 15 },
    { id: "facilities", name: "Facilities", count: 12 },
  ]

  const photos = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      title: "Annual Sports Day 2024",
      category: "sports",
      date: "2024-01-15",
      likes: 45,
      description: "Students participating in various sports activities during our annual sports day celebration.",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      title: "Science Laboratory",
      category: "facilities",
      date: "2024-01-10",
      likes: 32,
      description: "State-of-the-art science laboratory equipped with modern instruments and safety equipment.",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "Cultural Night Performance",
      category: "cultural",
      date: "2024-01-08",
      likes: 67,
      description: "Students showcasing their talents during the annual cultural night celebration.",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      title: "Graduation Ceremony 2023",
      category: "events",
      date: "2023-12-20",
      likes: 89,
      description: "Proud graduates receiving their certificates in a memorable graduation ceremony.",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Library Reading Hall",
      category: "facilities",
      date: "2024-01-05",
      likes: 28,
      description: "Spacious and well-lit library reading hall providing a conducive environment for study.",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "Mathematics Competition",
      category: "academic",
      date: "2024-01-03",
      likes: 41,
      description: "Students participating in the inter-class mathematics competition with great enthusiasm.",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Campus Garden",
      category: "campus",
      date: "2024-01-01",
      likes: 35,
      description: "Beautiful landscaped garden area where students relax and enjoy nature.",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Drama Performance",
      category: "cultural",
      date: "2023-12-28",
      likes: 52,
      description: "Students performing a classical drama in the school auditorium.",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Basketball Tournament",
      category: "sports",
      date: "2023-12-25",
      likes: 38,
      description: "Exciting basketball tournament between different houses of the school.",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      title: "Science Fair Exhibition",
      category: "academic",
      date: "2023-12-22",
      likes: 44,
      description: "Students presenting their innovative science projects at the annual science fair.",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      title: "Parent-Teacher Meeting",
      category: "events",
      date: "2023-12-20",
      likes: 29,
      description: "Productive parent-teacher meeting discussing student progress and development.",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      title: "Computer Laboratory",
      category: "facilities",
      date: "2023-12-18",
      likes: 33,
      description: "Modern computer laboratory with latest technology for digital learning.",
    },
  ]

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  const openLightbox = (photoId: number) => {
    setSelectedImage(photoId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const selectedPhoto = selectedImage ? photos.find((p) => p.id === selectedImage) : null

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-6">
            <Camera className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Visual Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Photo Gallery</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore the vibrant life at Bangladesh International School & College through our comprehensive photo
            gallery showcasing campus events, facilities, and memorable moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? "gradient-primary text-white shadow-lg scale-105"
                  : "border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-current border-0">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card
              key={photo.id}
              className="glass-card border-0 overflow-hidden group hover-lift cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(photo.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="gradient-secondary text-white border-0 px-3 py-1 rounded-full text-xs">
                      {categories.find((c) => c.id === photo.category)?.name}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <Button
                      size="sm"
                      className="glass border-0 text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle like
                      }}
                    >
                      <Heart className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      className="glass border-0 text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle share
                      }}
                    >
                      <Share2 className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      className="glass border-0 text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle download
                      }}
                    >
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
                    <p className="text-gray-300 text-sm mb-2 line-clamp-2">{photo.description}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-gray-300 text-xs">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{photo.likes}</span>
                      </div>
                      <span>{new Date(photo.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-primary hover:scale-105 transition-all duration-300 px-12 py-4 text-lg font-semibold rounded-full shadow-xl"
          >
            <Grid className="h-5 w-5 mr-2" />
            Load More Photos
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute -top-12 right-0 text-white border-white hover:bg-white/20 rounded-full"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="glass-card border-0 overflow-hidden rounded-2xl">
                <div className="relative">
                  <Image
                    src={selectedPhoto.src || "/placeholder.svg"}
                    alt={selectedPhoto.title}
                    width={800}
                    height={600}
                    className="object-cover max-h-[70vh]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{selectedPhoto.description}</p>
                    </div>
                    <Badge className="gradient-secondary text-white border-0 px-3 py-1 rounded-full">
                      {categories.find((c) => c.id === selectedPhoto.category)?.name}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{selectedPhoto.likes} likes</span>
                      </div>
                      <span>{new Date(selectedPhoto.date).toLocaleDateString()}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="gradient-tertiary text-white rounded-full">
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 rounded-full"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 rounded-full"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
