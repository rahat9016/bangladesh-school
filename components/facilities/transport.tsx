import { Bus, MapPin, Clock, Shield, Users, Route } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Transport() {
  const routes = [
    {
      route: "Route A - Dhanmondi",
      areas: ["Dhanmondi", "New Market", "Azimpur", "Lalbagh"],
      timing: "7:00 AM - 8:00 AM",
      capacity: "45 students",
      fare: "৳2,500/month",
    },
    {
      route: "Route B - Gulshan",
      areas: ["Gulshan", "Banani", "Baridhara", "Mohakhali"],
      timing: "7:15 AM - 8:15 AM",
      capacity: "45 students",
      fare: "৳3,000/month",
    },
    {
      route: "Route C - Uttara",
      areas: ["Uttara", "Airport", "Khilkhet", "Kuril"],
      timing: "6:45 AM - 8:00 AM",
      capacity: "45 students",
      fare: "৳3,500/month",
    },
    {
      route: "Route D - Old Dhaka",
      areas: ["Old Dhaka", "Wari", "Gandaria", "Shyampur"],
      timing: "7:00 AM - 8:00 AM",
      capacity: "45 students",
      fare: "৳2,200/month",
    },
    {
      route: "Route E - Mirpur",
      areas: ["Mirpur", "Pallabi", "Kazipara", "Shewrapara"],
      timing: "7:10 AM - 8:10 AM",
      capacity: "45 students",
      fare: "৳2,800/month",
    },
    {
      route: "Route F - Wari",
      areas: ["Wari", "Kamrangirchar", "Hazaribagh", "Donia"],
      timing: "7:05 AM - 8:05 AM",
      capacity: "45 students",
      fare: "৳2,400/month",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "GPS Tracking",
      description: "Real-time bus tracking for parent monitoring",
    },
    {
      icon: Users,
      title: "Trained Drivers",
      description: "Experienced and licensed professional drivers",
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "Reliable timing with minimal delays",
    },
    {
      icon: Bus,
      title: "Modern Fleet",
      description: "Well-maintained buses with safety features",
    },
  ]

  const safetyFeatures = [
    "CCTV cameras in all buses",
    "First aid kits and emergency equipment",
    "Speed governors for safe driving",
    "Regular vehicle maintenance",
    "Background-checked drivers and attendants",
    "Emergency contact system",
    "Student attendance tracking",
    "Parent notification system",
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">School Transport</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Safe, reliable, and comfortable transportation services covering major areas of Dhaka city with modern buses
            and experienced drivers ensuring student safety.
          </p>
        </div>

        {/* Transport Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
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
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Transport Routes */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Transport Routes</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coverage across Dhaka with convenient pickup and drop-off points
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="glass-card border-0 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-800">{route.route}</CardTitle>
                  <Badge className="gradient-secondary text-white border-0 px-3 py-1 rounded-full">{route.fare}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Coverage Areas:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {route.areas.map((area, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-green-500" />
                      <span>{route.timing}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-purple-500" />
                      <span>{route.capacity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Features */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Safety Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient flex items-center">
                <Route className="h-6 w-6 mr-2" />
                Transport Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h5 className="font-semibold mb-2">Fleet Details:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Total buses: 25 modern vehicles</li>
                    <li>• Capacity: 45 students per bus</li>
                    <li>• Air-conditioned buses available</li>
                    <li>• Wheelchair accessible vehicles</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Service Hours:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Morning: 6:45 AM - 8:30 AM</li>
                    <li>• Afternoon: 2:00 PM - 4:00 PM</li>
                    <li>• Extra-curricular: 5:00 PM - 6:00 PM</li>
                    <li>• Weekend events: As scheduled</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Contact:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Transport Office: +880-1234-567899</li>
                    <li>• Emergency Hotline: +880-1234-567898</li>
                    <li>• Email: transport@bangladeshintschool.edu.bd</li>
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
