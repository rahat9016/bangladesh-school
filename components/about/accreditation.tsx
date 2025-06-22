import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, CheckCircle, Star } from "lucide-react"

export function Accreditation() {
  const accreditations = [
    {
      name: "Ministry of Education, Bangladesh",
      type: "Government Recognition",
      year: "1999",
      image: "/placeholder.svg?height=100&width=100",
      description: "Official recognition and approval from the Ministry of Education",
    },
    {
      name: "Board of Intermediate and Secondary Education",
      type: "Academic Accreditation",
      year: "2000",
      image: "/placeholder.svg?height=100&width=100",
      description: "Authorized to conduct SSC and HSC examinations",
    },
    {
      name: "Cambridge Assessment International",
      type: "International Recognition",
      year: "2010",
      image: "/placeholder.svg?height=100&width=100",
      description: "Authorized Cambridge International School",
    },
    {
      name: "ISO 9001:2015",
      type: "Quality Management",
      year: "2018",
      image: "/placeholder.svg?height=100&width=100",
      description: "International standard for quality management systems",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Best Educational Institution",
      year: "2023",
      organization: "National Education Awards",
    },
    {
      icon: Star,
      title: "Excellence in Science Education",
      year: "2022",
      organization: "Science Education Board",
    },
    {
      icon: Shield,
      title: "Outstanding Academic Performance",
      year: "2021",
      organization: "Education Ministry",
    },
    {
      icon: CheckCircle,
      title: "Digital Learning Innovation",
      year: "2020",
      organization: "Technology in Education",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Accreditation & Recognition</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is recognized by leading educational authorities and organizations
          </p>
        </div>

        {/* Accreditations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Official Accreditations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accreditations.map((accreditation, index) => (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-6">
                    <Image
                      src={accreditation.image || "/placeholder.svg"}
                      alt={accreditation.name}
                      width={80}
                      height={80}
                      className="mx-auto rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="gradient-gold text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                    {accreditation.year}
                  </div>

                  <h4 className="text-lg font-bold text-gray-800 mb-2">{accreditation.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{accreditation.type}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{accreditation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <div className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                      {achievement.year}
                    </div>

                    <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.organization}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Quality Assurance Statement */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-0 p-8 max-w-4xl mx-auto">
            <CardContent>
              <h4 className="text-2xl font-bold text-gradient mb-4">Quality Assurance</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our accreditations and recognitions reflect our unwavering commitment to maintaining the highest
                standards of education. We continuously strive to exceed expectations and provide our students with
                internationally recognized qualifications that open doors to global opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
