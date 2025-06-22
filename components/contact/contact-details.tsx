import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactDetails() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Education Street", "Dhanmondi, Dhaka-1205", "Bangladesh"],
      color: "gradient-primary",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main Office: +880-1234-567890", "Admission: +880-1234-567891", "Emergency: +880-1234-567892"],
      color: "gradient-secondary",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@bangladeshintschool.edu.bd",
        "admission@bangladeshintschool.edu.bd",
        "principal@bangladeshintschool.edu.bd",
      ],
      color: "gradient-tertiary",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "gradient-quaternary",
    },
  ]

  const departments = [
    {
      department: "Admission Office",
      contact: "+880-1234-567891",
      email: "admission@bangladeshintschool.edu.bd",
      hours: "9:00 AM - 5:00 PM",
      location: "Ground Floor, Admin Building",
    },
    {
      department: "Accounts Office",
      contact: "+880-1234-567893",
      email: "accounts@bangladeshintschool.edu.bd",
      hours: "9:00 AM - 4:00 PM",
      location: "First Floor, Admin Building",
    },
    {
      department: "Academic Office",
      contact: "+880-1234-567894",
      email: "academic@bangladeshintschool.edu.bd",
      hours: "8:00 AM - 4:00 PM",
      location: "Second Floor, Admin Building",
    },
    {
      department: "Transport Office",
      contact: "+880-1234-567895",
      email: "transport@bangladeshintschool.edu.bd",
      hours: "7:00 AM - 6:00 PM",
      location: "Ground Floor, Gate Area",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Contact Details</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries, admissions, or support. We're here to help you with all your
            educational needs.
          </p>
        </div>

        {/* Main Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h4>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Department Contacts */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gradient mb-6">Department Contacts</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Direct contact information for specific departments and services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="glass-card border-0 p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-800 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                  {dept.department}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700 text-sm">{dept.contact}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700 text-sm">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700 text-sm">{dept.hours}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700 text-sm">{dept.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-0 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient text-center">Quick Contact Form</CardTitle>
              <p className="text-gray-600 text-center">Send us a message and we'll get back to you soon</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+880-1234-567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Admission Information</option>
                    <option>Academic Support</option>
                    <option>Transport Service</option>
                    <option>Fee Information</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary text-white py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-16">
          <h4 className="text-2xl font-bold text-gradient mb-6">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Globe className="h-5 w-5 mr-2" />
              Website
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              Facebook
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              YouTube
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
