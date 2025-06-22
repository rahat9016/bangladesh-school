import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Home, Phone, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const quickLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: BookOpen },
    { href: "/admission", label: "Admission", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 pt-40">
      <div className="max-w-4xl mx-auto text-center">

        {/* 404 Illustration */}
        {/* <div className="mb-8">
          <div className="relative">
            <div className="text-9xl md:text-[12rem] font-bold text-gradient opacity-20 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card border-0 p-8 rounded-2xl animate-float">
                <Search className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600">The page you're looking for seems to have wandered off</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Error Message */}
        {/* <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            Don't worry, let's get you back on track!
          </p>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="gradient-primary text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <Card className="glass-card border-0 p-8 max-w-2xl mx-auto">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold text-gradient mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="group p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-center"
                  >
                    <IconComponent className="h-8 w-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-600">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still can't find what you're looking for?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
              <Link href="/gallery">
                <Search className="h-4 w-4 mr-2" />
                Search Site
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024 Bangladesh International School & College. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
