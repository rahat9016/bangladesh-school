import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Administration() {
  const boardMembers = [
    {
      name: "Dr. Mohammad Rahman",
      position: "Chairman",
      category: "Board of Directors",
      image: "/placeholder.svg?height=150&width=150",
      email: "chairman@bangladeshintschool.edu.bd",
      phone: "+880-1234-567890",
      linkedin: "#",
    },
    {
      name: "Prof. Fatima Khatun",
      position: "Principal & Director",
      category: "Executive",
      image: "/placeholder.svg?height=150&width=150",
      email: "principal@bangladeshintschool.edu.bd",
      phone: "+880-1234-567891",
      linkedin: "#",
    },
    {
      name: "Mr. Ahmed Hassan",
      position: "Vice Chairman",
      category: "Board of Directors",
      image: "/placeholder.svg?height=150&width=150",
      email: "vice.chairman@bangladeshintschool.edu.bd",
      phone: "+880-1234-567892",
      linkedin: "#",
    },
    {
      name: "Dr. Rashida Begum",
      position: "Academic Director",
      category: "Executive",
      image: "/placeholder.svg?height=150&width=150",
      email: "academic.director@bangladeshintschool.edu.bd",
      phone: "+880-1234-567893",
      linkedin: "#",
    },
    {
      name: "Mr. Karim Uddin",
      position: "Finance Director",
      category: "Board of Directors",
      image: "/placeholder.svg?height=150&width=150",
      email: "finance@bangladeshintschool.edu.bd",
      phone: "+880-1234-567894",
      linkedin: "#",
    },
    {
      name: "Ms. Nasreen Akter",
      position: "Administrative Director",
      category: "Executive",
      image: "/placeholder.svg?height=150&width=150",
      email: "admin@bangladeshintschool.edu.bd",
      phone: "+880-1234-567895",
      linkedin: "#",
    },
  ]

  const boardDirectors = boardMembers.filter((member) => member.category === "Board of Directors")
  const executives = boardMembers.filter((member) => member.category === "Executive")

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Administration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated leadership team committed to educational excellence and institutional growth
          </p>
        </div>

        {/* Board of Directors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">Board of Directors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {boardDirectors.map((member, index) => (
              <Card
                key={index}
                className="glass-card border-0 overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 gradient-primary px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-semibold">{member.position}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Connect</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Executive Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">Executive Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {executives.map((member, index) => (
              <Card
                key={index}
                className="glass-card border-0 overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 gradient-secondary px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-semibold">{member.position}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Connect</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
