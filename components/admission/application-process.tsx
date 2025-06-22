import { CheckCircle, ArrowRight, Clock, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ApplicationProcess() {
  const steps = [
    {
      step: 1,
      title: "Online Registration",
      description: "Complete the online application form with required information",
      duration: "15-20 minutes",
      requirements: ["Valid email address", "Student photograph", "Basic information"],
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload or submit required documents for verification",
      duration: "1-2 days",
      requirements: ["Academic transcripts", "Birth certificate", "Passport photos", "Medical certificate"],
    },
    {
      step: 3,
      title: "Entrance Examination",
      description: "Appear for the entrance examination (if applicable)",
      duration: "2-3 hours",
      requirements: ["Admit card", "Valid ID", "Writing materials", "Calculator (if needed)"],
    },
    {
      step: 4,
      title: "Interview & Assessment",
      description: "Participate in personal interview and skill assessment",
      duration: "30-45 minutes",
      requirements: ["Punctual attendance", "Formal attire", "Confidence", "Academic portfolio"],
    },
    {
      step: 5,
      title: "Result & Admission",
      description: "Receive admission decision and complete enrollment",
      duration: "3-5 days",
      requirements: ["Admission fee payment", "Document verification", "Class selection", "Orientation attendance"],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Follow our streamlined admission process designed to make your application experience smooth and efficient
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 gradient-primary opacity-30"></div>
              )}

              <Card
                className="glass-card border-0 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 lg:mb-0">{step.title}</h3>
                        <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg mb-6">{step.description}</p>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block">
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-16">
          <Card className="glass-card border-0 p-8 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient text-center flex items-center justify-center">
                <FileText className="h-6 w-6 mr-2" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Application Deadlines:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Spring Admission: December 31st</li>
                    <li>• Fall Admission: July 31st</li>
                    <li>• Late applications subject to availability</li>
                    <li>• International students: 2 months prior</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-4">Contact Support:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Admission Office: +880-1234-567890</li>
                    <li>• Email: admission@bangladeshintschool.edu.bd</li>
                    <li>• Office Hours: 9:00 AM - 5:00 PM</li>
                    <li>• Online chat support available</li>
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
