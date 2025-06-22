import { Users, BookOpen, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FacultyOverview() {
  const departments = [
    {
      name: "Science & Mathematics",
      faculty: 25,
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      icon: "🔬",
    },
    {
      name: "Languages & Literature",
      faculty: 20,
      subjects: ["English", "Bengali", "Arabic", "Literature"],
      icon: "📚",
    },
    {
      name: "Social Sciences",
      faculty: 18,
      subjects: ["History", "Geography", "Economics", "Civics"],
      icon: "🌍",
    },
    {
      name: "Commerce & Business",
      faculty: 15,
      subjects: ["Accounting", "Business Studies", "Statistics"],
      icon: "💼",
    },
    {
      name: "Arts & Creative",
      faculty: 12,
      subjects: ["Fine Arts", "Music", "Drama", "Crafts"],
      icon: "🎨",
    },
    {
      name: "Physical Education",
      faculty: 8,
      subjects: ["Sports", "Health Education", "Yoga"],
      icon: "⚽",
    },
  ]

  const stats = [
    { icon: Users, number: "150+", label: "Total Faculty" },
    { icon: BookOpen, number: "98%", label: "PhD/Masters" },
    { icon: Award, number: "15+", label: "Avg Experience" },
    { icon: Globe, number: "25+", label: "International" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Faculty Overview</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our distinguished faculty comprises experienced educators, researchers, and industry professionals committed
            to nurturing academic excellence and character development in our students.
          </p>
        </div>

        {/* Faculty Stats */}
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

        {/* Departments */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Academic Departments</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our faculty is organized into specialized departments to ensure focused expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="glass-card border-0 p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h4>
                  <div className="gradient-secondary text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {dept.faculty} Faculty Members
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Subjects Offered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {dept.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faculty Qualifications */}
        <div className="mt-16">
          <Card className="glass-card border-0 p-8 max-w-4xl mx-auto">
            <CardContent>
              <h4 className="text-2xl font-bold text-gradient mb-6 text-center">Faculty Qualifications & Standards</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-gray-800 mb-4">Educational Requirements:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Master's degree in relevant subject (minimum)</li>
                    <li>• PhD preferred for senior positions</li>
                    <li>• Teaching certification required</li>
                    <li>• Continuous professional development</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-4">Experience & Skills:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Minimum 5 years teaching experience</li>
                    <li>• Modern pedagogical training</li>
                    <li>• Technology integration skills</li>
                    <li>• Multilingual capabilities preferred</li>
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
