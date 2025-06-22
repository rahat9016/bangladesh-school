import { BookOpen, Users, Award, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

export function OurStory() {
  const milestones = [
    { year: "1999", title: "Foundation", description: "Established with a vision to provide quality education" },
    { year: "2005", title: "Expansion", description: "Added high school division and modern facilities" },
    { year: "2010", title: "Recognition", description: "Received national accreditation and awards" },
    { year: "2015", title: "Innovation", description: "Introduced digital learning and smart classrooms" },
    { year: "2020", title: "Excellence", description: "Achieved 98% success rate in national examinations" },
    { year: "2024", title: "Future", description: "Continuing our journey towards educational excellence" },
  ]

  const stats = [
    { icon: Users, number: "2000+", label: "Students" },
    { icon: BookOpen, number: "150+", label: "Teachers" },
    { icon: Award, number: "50+", label: "Awards" },
    { icon: Globe, number: "25+", label: "Years" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over two decades, Bangladesh International School & College has been at the forefront of educational
            excellence, nurturing young minds and shaping future leaders through innovative teaching methodologies and
            comprehensive development programs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="glass-card border-0 text-center p-6 hover-lift animate-scale-in">
                <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-primary rounded-full"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card
                    className="glass-card border-0 p-6 hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</div>
                    <div className="text-gray-600">{milestone.description}</div>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 gradient-secondary rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
