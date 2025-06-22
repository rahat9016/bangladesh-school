import { Shield, Users, BookOpen, Heart, Star, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CodeOfConduct() {
  const principles = [
    {
      icon: Shield,
      title: "Integrity & Honesty",
      description: "Students must demonstrate honesty in all academic and personal interactions",
      rules: [
        "No cheating or plagiarism in any form",
        "Honest reporting of academic progress",
        "Truthful communication with faculty and peers",
        "Respect for intellectual property",
      ],
    },
    {
      icon: Users,
      title: "Respect & Tolerance",
      description: "Maintain respectful relationships with all members of the school community",
      rules: [
        "Respect for diversity and individual differences",
        "No discrimination based on race, religion, or gender",
        "Courteous behavior towards teachers and staff",
        "Inclusive attitude towards all students",
      ],
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Commitment to learning and academic achievement",
      rules: [
        "Regular attendance and punctuality",
        "Active participation in class activities",
        "Completion of assignments on time",
        "Preparation for examinations and assessments",
      ],
    },
    {
      icon: Heart,
      title: "Personal Responsibility",
      description: "Take ownership of actions and their consequences",
      rules: [
        "Accountability for personal behavior",
        "Care for school property and environment",
        "Following safety protocols and guidelines",
        "Reporting violations of school policies",
      ],
    },
  ]

  const violations = [
    {
      category: "Academic Misconduct",
      examples: ["Cheating in examinations", "Plagiarism", "Unauthorized collaboration", "Falsifying records"],
      consequences: "Warning, Re-examination, Academic probation",
    },
    {
      category: "Behavioral Issues",
      examples: ["Disrespectful behavior", "Bullying or harassment", "Disrupting classes", "Inappropriate language"],
      consequences: "Counseling, Suspension, Parent conference",
    },
    {
      category: "Attendance Violations",
      examples: ["Excessive absences", "Tardiness", "Leaving without permission", "Truancy"],
      consequences: "Make-up work, Detention, Academic penalty",
    },
    {
      category: "Property Damage",
      examples: ["Vandalism", "Theft", "Misuse of equipment", "Environmental damage"],
      consequences: "Restitution, Community service, Suspension",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Code of Conduct</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our code of conduct establishes the standards of behavior expected from all students, fostering a positive
            learning environment built on mutual respect and academic integrity.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">Core Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card
                  key={index}
                  className="glass-card border-0 p-6 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-800">{principle.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mt-2">{principle.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {principle.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <Star className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Violations and Consequences */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">Violations & Consequences</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {violations.map((violation, index) => (
              <Card
                key={index}
                className="glass-card border-0 p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <CardTitle className="text-lg text-gray-800">{violation.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">Examples:</h5>
                    <ul className="space-y-1">
                      {violation.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="gradient-accent text-white px-3 py-2 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Consequences:</h5>
                    <p className="text-sm">{violation.consequences}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Rights and Responsibilities */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient text-center">Student Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Right to a safe and supportive learning environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Right to fair and equal treatment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Right to express opinions respectfully</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Right to privacy and confidentiality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Right to appeal disciplinary decisions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient text-center">Student Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>Attend classes regularly and punctually</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>Complete assignments and prepare for examinations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>Respect school property and environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>Follow school policies and procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Heart className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>Contribute positively to school community</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
