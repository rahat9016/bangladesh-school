import { MapPin, Navigation, Car, Bus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function LocationMap() {
  const landmarks = [
    "5 minutes from Dhanmondi 27",
    "10 minutes from New Market",
    "15 minutes from TSC",
    "20 minutes from Shahbag",
  ]

  const transportOptions = [
    {
      icon: Bus,
      type: "Public Bus",
      routes: ["Dhanmondi - Motijheel", "Gulshan - New Market", "Uttara - Sadarghat"],
      nearestStop: "Dhanmondi 27 Bus Stop",
    },
    {
      icon: Car,
      type: "Private Car",
      directions: "Take Mirpur Road, turn at Dhanmondi 27, 2nd building on the right",
      parking: "On-campus parking available",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Location & Map</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Find us easily with our convenient location in the heart of Dhaka, accessible by various transportation
            options.
          </p>
        </div>

        {/* Map Container */}
        <div className="mb-16">
          <Card className="glass-card border-0 overflow-hidden animate-slide-up">
            <div className="relative h-96 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for actual map integration */}
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500 mb-4">Google Maps integration will be embedded here</p>
                <Button className="gradient-primary text-white px-6 py-2 rounded-full">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Location Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Address and Landmarks */}
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Address & Landmarks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-3">Complete Address:</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Bangladesh International School & College</p>
                    <p>123 Education Street</p>
                    <p>Dhanmondi, Dhaka-1205</p>
                    <p>Bangladesh</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-3">Nearby Landmarks:</h4>
                  <div className="space-y-2">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-3">GPS Coordinates:</h4>
                  <div className="text-gray-300 text-sm">
                    <p>Latitude: 23.7465° N</p>
                    <p>Longitude: 90.3765° E</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Navigation className="h-6 w-6 mr-2" />
                How to Reach Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {transportOptions.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <div key={index} className="border-l-4 border-blue-400 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <IconComponent className="h-5 w-5 text-blue-400" />
                        <h4 className="font-semibold text-gray-200">{option.type}</h4>
                      </div>

                      {option.routes && (
                        <div className="mb-2">
                          <p className="text-gray-300 text-sm mb-1">Available Routes:</p>
                          <div className="space-y-1">
                            {option.routes.map((route, idx) => (
                              <p key={idx} className="text-gray-400 text-xs">
                                • {route}
                              </p>
                            ))}
                          </div>
                          <p className="text-gray-300 text-sm mt-2">
                            <strong>Nearest Stop:</strong> {option.nearestStop}
                          </p>
                        </div>
                      )}

                      {option.directions && (
                        <div className="mb-2">
                          <p className="text-gray-300 text-sm mb-1">Directions:</p>
                          <p className="text-gray-400 text-xs">{option.directions}</p>
                          <p className="text-gray-300 text-sm mt-2">
                            <strong>Parking:</strong> {option.parking}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}

                <div className="mt-6 pt-6 border-t border-gray-600">
                  <h4 className="font-semibold text-gray-200 mb-3">Additional Information:</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>• Visitor parking available on campus</p>
                    <p>• Security checkpoint at main gate</p>
                    <p>• Wheelchair accessible entrance</p>
                    <p>• Reception desk for visitor assistance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-secondary text-white px-8 py-3 rounded-full">
              <Navigation className="h-5 w-5 mr-2" />
              Open in Google Maps
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full"
            >
              <Car className="h-5 w-5 mr-2" />
              Get Driving Directions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full"
            >
              <Bus className="h-5 w-5 mr-2" />
              Public Transport Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
