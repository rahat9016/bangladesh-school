import { Heart, Stethoscope, Pill, Phone, Clock, UserCheck, Shield, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Medical() {
  const services = [
    {
      icon: Heart,
      title: "Emergency Care",
      description: "24/7 emergency medical assistance and first aid",
      features: ["First Aid", "Emergency Response", "Ambulance Service", "Critical Care"],
    },
    {
      icon: Stethoscope,
      title: "Health Checkups",
      description: "Regular health screenings and medical examinations",
      features: ["Annual Checkups", "Vision Tests", "Dental Screening", "Growth Monitoring"],
    },
    {
      icon: Pill,
      title: "Medical Treatment",
      description: "Basic medical treatment and medication dispensing",
      features: ["Common Illness", "Medication", "Wound Care", "Health Counseling"],
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Continuous health monitoring and wellness programs",
      features: ["Health Records", "Vaccination", "Nutrition Guidance", "Fitness Assessment"],
    },
  ]

  const staff = [
    {
      name: "Dr. Rashida Ahmed",
      position: "Chief Medical Officer",
      qualification: "MBBS, MD (Pediatrics)",
      experience: "15+ years",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Nurse Fatima Khatun",
      position: "Senior Nurse",
      qualification: "BSc in Nursing",
      experience: "12+ years",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Dr. Mohammad Hassan",
      position: "School Physician",
      qualification: "MBBS, FCPS (Medicine)",
      experience: "10+ years",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const facilities = [
    "Fully equipped medical room",
    "Modern diagnostic equipment",
    "Emergency ambulance service",
    "Isolation room for infectious cases",
    "Medicine storage and dispensary",
    "Health records management system",
    "Counseling and mental health support",
    "Vaccination and immunization programs",
  ]

  const emergencyProcedures = [
    {
      step: 1,
      title: "Immediate Assessment",
      description: "Quick evaluation of the student's condition",
    },
    {
      step: 2,
      title: "First Aid Treatment",
      description: "Provide necessary first aid and stabilization",
    },
    {
      step: 3,
      title: "Parent Notification",
      description: "Immediate contact with parents/guardians",
    },
    {
      step: 4,
      title: "Medical Referral",
      description: "Transfer to hospital if specialized care needed",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Medical Facilities</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare services with qualified medical professionals ensuring the health and well-being of
            all students throughout their academic journey.
          </p>
        </div>

        {/* Medical Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Medical Staff */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-6">Medical Staff</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Qualified healthcare professionals dedicated to student health and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {staff.map((member, index) => (
            <Card
              key={index}
              className="glass-card border-0 text-center p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 gradient-tertiary px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold">{member.experience}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-blue-300 font-semibold text-sm mb-2">{member.position}</p>
                <p className="text-gray-300 text-xs mb-3">{member.qualification}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities and Emergency Procedures */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Medical Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <UserCheck className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                Emergency Procedures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyProcedures.map((procedure, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="gradient-accent w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {procedure.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-sm">{procedure.title}</h5>
                      <p className="text-gray-300 text-xs">{procedure.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <Card className="glass-card border-0 p-8 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                Medical Center Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-gray-300">
                <div className="text-center">
                  <h5 className="font-semibold mb-3 text-white">Operating Hours:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
                    <li>Saturday: 9:00 AM - 1:00 PM</li>
                    <li>Emergency: 24/7 Available</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold mb-3 text-white">Emergency Contacts:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Medical Room: +880-1234-567897</li>
                    <li>Emergency: +880-1234-567896</li>
                    <li>Ambulance: +880-1234-567895</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold mb-3 text-white">Location:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Ground Floor, Main Building</li>
                    <li>Room No: 105-107</li>
                    <li>Near Main Reception</li>
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
