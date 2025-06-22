import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Messages() {
  const messages = [
    {
      name: "Dr. Mohammad Rahman",
      position: "Chairman, Board of Directors",
      image: "/placeholder.svg?height=200&width=200",
      message:
        "Education is the most powerful weapon which you can use to change the world. At Bangladesh International School & College, we are committed to providing world-class education that empowers our students to become global citizens and future leaders.",
      signature: "/placeholder.svg?height=50&width=150",
    },
    {
      name: "Prof. Fatima Khatun",
      position: "Principal & Director",
      image: "/placeholder.svg?height=200&width=200",
      message:
        "Our institution stands as a beacon of academic excellence, fostering creativity, critical thinking, and character development. We believe in nurturing not just academic brilliance but also moral values that will guide our students throughout their lives.",
      signature: "/placeholder.svg?height=50&width=150",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Leadership Messages</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Words of wisdom and vision from our esteemed leadership team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {messages.map((message, index) => (
            <Card
              key={index}
              className="glass-card border-0 p-8 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <Image
                      src={message.image || "/placeholder.svg"}
                      alt={message.name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 gradient-gold w-8 h-8 rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{message.name}</h3>
                    <p className="text-blue-600 font-semibold">{message.position}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{message.message}"
                </blockquote>

                <div className="flex justify-end">
                  <Image
                    src={message.signature || "/placeholder.svg"}
                    alt={`${message.name} signature`}
                    width={120}
                    height={40}
                    className="opacity-60"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
