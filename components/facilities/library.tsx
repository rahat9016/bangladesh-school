import { Book, Users, Clock, Wifi, Coffee, Search, BookOpen, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Library() {
  const stats = [
    { icon: Book, number: "50,000+", label: "Books Collection" },
    { icon: BookOpen, number: "2,500+", label: "Digital Resources" },
    { icon: Users, number: "300", label: "Seating Capacity" },
    { icon: Globe, number: "25+", label: "Languages" },
  ]

  const sections = [
    {
      name: "Reference Section",
      description: "Comprehensive collection of encyclopedias, dictionaries, and reference materials",
      features: ["Encyclopedias", "Dictionaries", "Atlases", "Yearbooks"],
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      name: "Digital Library",
      description: "Access to online databases, e-books, and digital journals",
      features: ["E-books", "Online Journals", "Research Databases", "Digital Archives"],
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      name: "Reading Halls",
      description: "Quiet study spaces with comfortable seating and proper lighting",
      features: ["Silent Study", "Group Study", "Individual Desks", "Comfortable Seating"],
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      name: "Children's Section",
      description: "Specially designed area for younger students with age-appropriate books",
      features: ["Picture Books", "Story Time Area", "Educational Games", "Colorful Furniture"],
      image: "/placeholder.svg?height=250&width=350",
    },
  ]

  const services = [
    {
      icon: Search,
      title: "Online Catalog",
      description: "Search and locate books using our digital catalog system",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open from 8:00 AM to 8:00 PM for student convenience",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the library",
    },
    {
      icon: Coffee,
      title: "Study Café",
      description: "Light refreshments available in designated areas",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Central Library</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our modern library serves as the intellectual heart of the campus, providing access to vast collections of
            books, digital resources, and comfortable study spaces for all students.
          </p>
        </div>

        {/* Library Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="glass-card border-0 text-center p-6 hover-lift animate-scale-in">
                <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        {/* Library Sections */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-6">Library Sections</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Organized sections to cater to different learning needs and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="glass-card border-0 overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white">{section.name}</h4>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{section.description}</p>

                <div>
                  <h5 className="font-semibold text-gray-200 mb-2">Available Resources:</h5>
                  <div className="flex flex-wrap gap-2">
                    {section.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Library Services */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-6">Library Services</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive services to support your academic and research needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="gradient-tertiary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Library Hours */}
        <div className="mt-16">
          <Card className="glass-card border-0 p-8 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                Library Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h5 className="font-semibold mb-3">Regular Hours:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                    <li>Saturday: 9:00 AM - 6:00 PM</li>
                    <li>Sunday: 10:00 AM - 4:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Exam Period:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Monday - Friday: 7:00 AM - 10:00 PM</li>
                    <li>Saturday: 8:00 AM - 8:00 PM</li>
                    <li>Sunday: 9:00 AM - 6:00 PM</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
