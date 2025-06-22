import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, FileText, Globe, GraduationCap, Users } from "lucide-react"

export default function AdmissionRequirements() {
  const classRequirements = [
    {
      class: "Class VI - VIII",
      icon: GraduationCap,
      requirements: {
        academic: [
          "Previous class completion certificate",
          "Academic transcript/report card",
          "Minimum 60% marks in previous class",
        ],
        documents: [
          "Birth certificate",
          "2 passport size photographs",
          "Transfer certificate (if applicable)",
          "Medical fitness certificate",
        ],
        additional: ["Basic English proficiency", "Mathematics competency test", "General knowledge assessment"],
      },
    },
    {
      class: "Class IX - X (SSC)",
      icon: Award,
      requirements: {
        academic: [
          "JSC/Equivalent certificate",
          "Academic transcript",
          "Minimum 65% marks in JSC",
          "Subject selection based on merit",
        ],
        documents: [
          "JSC certificate & marksheet",
          "Birth certificate",
          "3 passport size photographs",
          "Character certificate",
        ],
        additional: ["Entrance examination", "Subject aptitude test", "English proficiency test", "Interview"],
      },
    },
    {
      class: "Class XI - XII (HSC)",
      icon: Users,
      requirements: {
        academic: [
          "SSC/Equivalent certificate",
          "Minimum 70% marks in SSC",
          "Subject prerequisites met",
          "Group selection criteria",
        ],
        documents: [
          "SSC certificate & transcript",
          "Birth certificate",
          "3 passport size photographs",
          "Character certificate",
          "Medical certificate",
        ],
        additional: ["Entrance examination", "Group-specific tests", "Merit-based selection", "Counseling session"],
      },
    },
  ]

  const generalRequirements = [
    {
      category: "Age Requirements",
      icon: Calendar,
      details: ["Class VI: 11-12 years", "Class IX: 14-15 years", "Class XI: 16-17 years", "Age relaxation: ±6 months"],
    },
    {
      category: "Language Proficiency",
      icon: Globe,
      details: [
        "Bengali: Native/Fluent level",
        "English: Intermediate level",
        "Arabic: Basic level (Islamic Studies)",
        "Additional language: Advantage",
      ],
    },
    {
      category: "Health Requirements",
      icon: FileText,
      details: [
        "Medical fitness certificate",
        "Vaccination records",
        "Vision/hearing test reports",
        "Special needs documentation",
      ],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Admission Requirements</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive requirements for admission to different class levels at our institution
          </p>
        </div>

        {/* Class-wise Requirements */}
        <div className="space-y-8 mb-16">
          {classRequirements.map((classReq, index) => {
            const IconComponent = classReq.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{classReq.class}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-text-black mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-blue-400" />
                        Academic Requirements
                      </h4>
                      <ul className="space-y-2">
                        {classReq.requirements.academic.map((req, idx) => (
                          <li key={idx} className="text-text-black text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-black mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-green-400" />
                        Required Documents
                      </h4>
                      <ul className="space-y-2">
                        {classReq.requirements.documents.map((doc, idx) => (
                          <li key={idx} className="text-black text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-text-black mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-400" />
                        Additional Tests
                      </h4>
                      <ul className="space-y-2">
                        {classReq.requirements.additional.map((add, idx) => (
                          <li key={idx} className="text-black text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {add}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* General Requirements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">General Requirements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {generalRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <Card
                  key={index}
                  className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-black">{req.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      {req.details.map((detail, idx) => (
                        <li key={idx} className="text-black text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Special Categories */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Special Categories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-0 p-6">
              <CardHeader>
                <CardTitle className="text-xl text-black text-center">Merit-based Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-black">Academic Excellence</span>
                    <Badge className="gradient-gold text-white">50% Waiver</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Sports Achievement</span>
                    <Badge className="gradient-secondary text-white">30% Waiver</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Cultural Excellence</span>
                    <Badge className="gradient-tertiary text-white">25% Waiver</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Need-based Support</span>
                    <Badge className="gradient-primary text-white">Variable</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 p-6">
              <CardHeader>
                <CardTitle className="text-xl text-black text-center">International Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-black text-sm">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Valid passport and visa documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Academic credentials verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    English proficiency certification
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Guardian/sponsor information
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Medical insurance coverage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
