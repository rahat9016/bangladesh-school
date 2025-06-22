import { Target, Eye, Heart, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionVision() {
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through honesty, transparency, and ethical practices",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing modern teaching methods and technological advancement",
    },
    {
      icon: Eye,
      title: "Inclusivity",
      description: "Creating an environment where every student can thrive and succeed",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that shape our educational philosophy and drive our commitment to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <Card className="glass-card border-0 p-8 hover-lift animate-slide-up">
            <CardHeader className="text-center pb-6">
              <div className="gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gradient">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To provide comprehensive, quality education that develops intellectual curiosity, critical thinking, and
                moral character in our students, preparing them to become responsible global citizens and leaders who
                contribute positively to society.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="glass-card border-0 p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="text-center pb-6">
              <div className="gradient-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gradient">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To be recognized as the leading educational institution in Bangladesh, known for academic excellence,
                innovative teaching methods, and holistic development of students who are equipped to meet the
                challenges of the 21st century.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Our Core Values</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The fundamental principles that guide our actions and decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-tertiary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
