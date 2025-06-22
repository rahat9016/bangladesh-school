import { Music, Users, Camera, Lightbulb, Volume2, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Auditorium() {
  const specifications = [
    {
      icon: Users,
      title: "Seating Capacity",
      value: "800 People",
      description: "Comfortable theater-style seating",
    },
    {
      icon: Volume2,
      title: "Sound System",
      value: "Digital Audio",
      description: "Professional grade sound equipment",
    },
    {
      icon: Lightbulb,
      title: "Lighting",
      value: "LED Stage Lights",
      description: "Advanced lighting control system",
    },
    {
      icon: Camera,
      title: "AV Equipment",
      value: "4K Projection",
      description: "High-definition audio-visual setup",
    },
  ]

  const features = [
    "State-of-the-art acoustics design",
    "Climate-controlled environment",
    "Wheelchair accessible seating",
    "Professional stage with backstage area",
    "Green rooms for performers",
    "Recording and live streaming capabilities",
    "Emergency exits and safety systems",
    "VIP seating section",
    "Lobby and reception area",
    "Parking facilities",
    "Catering preparation area",
    "Technical control room",
  ]

  const events = [
    {
      type: "Academic Events",
      icon: Award,
      events: ["Graduation Ceremonies", "Academic Conferences", "Guest Lectures", "Award Functions"],
      frequency: "Monthly",
    },
    {
      type: "Cultural Programs",
      icon: Music,
      events: ["Annual Cultural Night", "Drama Performances", "Music Concerts", "Dance Competitions"],
      frequency: "Quarterly",
    },
    {
      type: "School Functions",
      icon: Calendar,
      events: ["Parent Meetings", "Orientation Programs", "Sports Award Ceremonies", "Annual Day"],
      frequency: "Regular",
    },
    {
      type: "Community Events",
      icon: Users,
      events: ["Educational Seminars", "Health Awareness Programs", "Social Gatherings", "Workshops"],
      frequency: "Occasional",
    },
  ]

  const technicalSpecs = [
    {
      category: "Audio System",
      details: [
        "32-channel digital mixing console",
        "Line array speaker system",
        "Wireless microphone system (16 channels)",
        "In-ear monitoring system",
        "Audio recording capabilities",
      ],
    },
    {
      category: "Visual System",
      details: [
        "4K laser projector (12,000 lumens)",
        "200-inch motorized projection screen",
        "LED video wall (backup display)",
        "Document camera system",
        "Live streaming equipment",
      ],
    },
    {
      category: "Lighting System",
      details: [
        "LED stage lighting (200+ fixtures)",
        "DMX lighting control system",
        "Follow spot lights",
        "Architectural lighting",
        "Emergency lighting system",
      ],
    },
    {
      category: "Stage Facilities",
      details: [
        "40ft x 30ft main stage",
        "Hydraulic stage lift system",
        "Motorized curtain system",
        "Orchestra pit (retractable)",
        "Backstage dressing rooms",
      ],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Grand Auditorium</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A magnificent 800-seat auditorium equipped with cutting-edge technology, perfect for hosting academic
            ceremonies, cultural performances, and community events with world-class facilities.
          </p>
        </div>

        {/* Key Specifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specifications.map((spec, index) => {
            const IconComponent = spec.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{spec.title}</h4>
                  <div className="text-2xl font-bold text-blue-300 mb-2">{spec.value}</div>
                  <p className="text-gray-300 text-sm">{spec.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Auditorium Image */}
        <div className="mb-16">
          <Card className="glass-card border-0 overflow-hidden animate-slide-up">
            <div className="relative h-96 overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Grand Auditorium Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white mb-2">Main Auditorium Hall</h3>
                <p className="text-gray-200">Theater-style seating with premium acoustics</p>
              </div>
              <div className="absolute top-6 right-6">
                <Badge className="gradient-gold text-white border-0 px-4 py-2 rounded-full text-lg">800 Seats</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Event Types */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-6">Event Categories</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Versatile venue suitable for various types of academic and cultural events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {events.map((event, index) => {
            const IconComponent = event.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="gradient-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{event.type}</CardTitle>
                  <Badge className="gradient-tertiary text-white border-0 px-3 py-1 rounded-full text-xs">
                    {event.frequency}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {event.events.map((eventName, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {eventName}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technical Specifications */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-6">Technical Specifications</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional-grade equipment and systems for exceptional event experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technicalSpecs.map((spec, index) => (
            <Card
              key={index}
              className="glass-card border-0 p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">{spec.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {spec.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features and Amenities */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Lightbulb className="h-6 w-6 mr-2" />
                Auditorium Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                Booking Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h5 className="font-semibold mb-2 text-white">Booking Process:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Submit booking request form</li>
                    <li>• Technical requirements discussion</li>
                    <li>• Event approval and scheduling</li>
                    <li>• Payment and confirmation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-white">Available Time Slots:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Morning: 9:00 AM - 12:00 PM</li>
                    <li>• Afternoon: 2:00 PM - 5:00 PM</li>
                    <li>• Evening: 6:00 PM - 9:00 PM</li>
                    <li>• Full Day: 9:00 AM - 9:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-white">Contact:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Booking Office: +880-1234-567891</li>
                    <li>• Technical Support: +880-1234-567890</li>
                    <li>• Email: auditorium@bangladeshintschool.edu.bd</li>
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
