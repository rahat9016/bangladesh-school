import { Monitor, Wifi, Volume2, Camera, Projector, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MultimediaClassroom() {
  const features = [
    {
      icon: Monitor,
      title: "Smart Boards",
      description: "Interactive whiteboards in every classroom",
      count: "50+ Units",
    },
    {
      icon: Projector,
      title: "HD Projectors",
      description: "High-definition projection systems",
      count: "45+ Units",
    },
    {
      icon: Volume2,
      title: "Audio Systems",
      description: "Crystal clear sound systems",
      count: "All Rooms",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Reliable internet connectivity",
      count: "Campus-wide",
    },
    {
      icon: Camera,
      title: "Document Cameras",
      description: "Real-time document projection",
      count: "30+ Units",
    },
    {
      icon: Users,
      title: "Capacity",
      description: "Comfortable seating arrangement",
      count: "40 Students",
    },
  ]

  const classrooms = [
    {
      name: "Science Laboratory Classroom",
      image: "/placeholder.svg?height=300&width=400",
      description: "Equipped with digital microscopes and interactive science simulations",
      capacity: "35 students",
      equipment: ["Digital Microscopes", "Interactive Simulations", "Lab Equipment Display"],
    },
    {
      name: "Language Learning Center",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced language lab with individual audio stations",
      capacity: "40 students",
      equipment: ["Audio Stations", "Language Software", "Recording Equipment"],
    },
    {
      name: "Mathematics Smart Room",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interactive geometry tools and mathematical modeling software",
      capacity: "38 students",
      equipment: ["Geometry Software", "Graphing Tools", "3D Modeling"],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Multimedia Classrooms</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            State-of-the-art multimedia classrooms equipped with the latest technology to enhance learning experiences
            and make education more interactive and engaging.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                  <Badge className="gradient-secondary text-white border-0 px-3 py-1 rounded-full">
                    {feature.count}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Specialized Classrooms */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Specialized Learning Spaces</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Purpose-built classrooms designed for specific subjects and learning methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {classrooms.map((classroom, index) => (
            <Card
              key={index}
              className="glass-card border-0 overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classroom.image || "/placeholder.svg"}
                  alt={classroom.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 gradient-tertiary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {classroom.capacity}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{classroom.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{classroom.description}</p>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Key Equipment:</h5>
                  <div className="flex flex-wrap gap-2">
                    {classroom.equipment.map((item, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
