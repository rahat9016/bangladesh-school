import { Home, Bed, Utensils, Wifi, Shield, Users, Clock, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Hostel() {
  const hostelBlocks = [
    {
      name: "Boys Hostel - Block A",
      capacity: "150 students",
      rooms: "75 rooms",
      type: "Double occupancy",
      image: "/placeholder.svg?height=250&width=350",
      amenities: ["AC Rooms", "Study Tables", "Wardrobes", "Balcony"],
    },
    {
      name: "Boys Hostel - Block B",
      capacity: "120 students",
      rooms: "60 rooms",
      type: "Double occupancy",
      image: "/placeholder.svg?height=250&width=350",
      amenities: ["Non-AC Rooms", "Study Tables", "Wardrobes", "Common Area"],
    },
    {
      name: "Girls Hostel - Block A",
      capacity: "100 students",
      rooms: "50 rooms",
      type: "Double occupancy",
      image: "/placeholder.svg?height=250&width=350",
      amenities: ["AC Rooms", "Study Tables", "Wardrobes", "Recreation Room"],
    },
    {
      name: "Girls Hostel - Block B",
      capacity: "80 students",
      rooms: "40 rooms",
      type: "Double occupancy",
      image: "/placeholder.svg?height=250&width=350",
      amenities: ["Non-AC Rooms", "Study Tables", "Wardrobes", "Common Kitchen"],
    },
  ]

  const facilities = [
    {
      icon: Bed,
      title: "Comfortable Accommodation",
      description: "Well-furnished rooms with modern amenities",
      details: ["Single/Double beds", "Study desks", "Storage space", "Proper ventilation"],
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Healthy and balanced meals prepared by professional chefs",
      details: ["3 meals daily", "Vegetarian options", "Special diet plans", "Hygienic kitchen"],
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring",
      details: ["Security guards", "CCTV cameras", "Access control", "Emergency response"],
    },
    {
      icon: BookOpen,
      title: "Study Environment",
      description: "Conducive environment for academic excellence",
      details: ["Study halls", "Library access", "Internet facility", "Quiet hours"],
    },
  ]

  const amenities = [
    "High-speed WiFi throughout",
    "24/7 electricity with backup",
    "Hot water supply",
    "Laundry services",
    "Recreation and TV rooms",
    "Indoor games facilities",
    "Medical room with nurse",
    "Counseling services",
    "Mess and dining hall",
    "Common kitchen facilities",
    "Parking area",
    "Visitor reception area",
  ]

  const rules = [
    "Maintain discipline and respect hostel property",
    "Follow designated study and rest hours",
    "No smoking or alcohol consumption",
    "Visitors allowed only during specified hours",
    "Keep rooms clean and organized",
    "Participate in hostel activities and meetings",
    "Report any maintenance issues promptly",
    "Respect fellow residents and staff",
  ]

  const feeStructure = [
    {
      type: "AC Double Room",
      monthly: "৳8,000",
      security: "৳5,000",
      features: ["Air conditioning", "Attached bathroom", "Study table", "Wardrobe"],
    },
    {
      type: "Non-AC Double Room",
      monthly: "৳6,000",
      security: "৳3,000",
      features: ["Ceiling fan", "Attached bathroom", "Study table", "Wardrobe"],
    },
    {
      type: "AC Single Room",
      monthly: "৳12,000",
      security: "৳8,000",
      features: ["Air conditioning", "Private bathroom", "Study table", "Wardrobe"],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Hostel Facilities</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comfortable and secure residential facilities providing a home away from home for students, with modern
            amenities and a supportive environment for academic success.
          </p>
        </div>

        {/* Hostel Blocks */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Hostel Blocks</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Separate residential blocks for boys and girls with modern facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {hostelBlocks.map((block, index) => (
            <Card
              key={index}
              className="glass-card border-0 overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={block.image || "/placeholder.svg"} alt={block.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white">{block.name}</h4>
                  <p className="text-gray-200 text-sm">{block.type}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="gradient-primary text-white border-0 px-3 py-1 rounded-full">
                    {block.capacity}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Home className="h-4 w-4 mr-1" />
                    <span>{block.rooms}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{block.capacity}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Amenities:</h5>
                  <div className="flex flex-wrap gap-2">
                    {block.amenities.map((amenity, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hostel Facilities */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Key Facilities</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive facilities designed for student comfort and academic success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
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
                  <CardTitle className="text-lg text-gray-800">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">{facility.description}</p>
                  <div className="space-y-1">
                    {facility.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Amenities, Rules, and Fee Structure */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Amenities */}
          <Card className="glass-card border-0 p-6">
            <CardHeader>
              <CardTitle className="text-xl text-gradient flex items-center">
                <Wifi className="h-5 w-5 mr-2" />
                Hostel Amenities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rules */}
          <Card className="glass-card border-0 p-6">
            <CardHeader>
              <CardTitle className="text-xl text-gradient flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Hostel Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{rule}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fee Structure */}
          <Card className="glass-card border-0 p-6">
            <CardHeader>
              <CardTitle className="text-xl text-gradient flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Fee Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeStructure.map((fee, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-800 text-sm">{fee.type}</h5>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Monthly</span>
                      <span className="font-bold text-blue-600">{fee.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Security</span>
                      <span className="font-bold text-green-600">{fee.security}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {fee.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                          {feature}
                        </span>
                      ))}
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
              <CardTitle className="text-2xl text-gradient text-center flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                Hostel Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-gray-700">
                <div className="text-center">
                  <h5 className="font-semibold mb-3">Office Hours:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Emergency: 24/7 Available</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold mb-3">Contact Numbers:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Hostel Office: +880-1234-567894</li>
                    <li>Boys Hostel: +880-1234-567893</li>
                    <li>Girls Hostel: +880-1234-567892</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold mb-3">Admission Process:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Application form submission</li>
                    <li>Document verification</li>
                    <li>Room allocation</li>
                    <li>Fee payment & check-in</li>
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
