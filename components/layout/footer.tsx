import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="School Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Bangladesh International</h3>
                <p className="text-gray-300">School & College</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Committed to excellence in education, nurturing young minds for a brighter future.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-300 hover:text-white transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/academic" className="text-gray-300 hover:text-white transition-colors">
                  Academic Info
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">123 Education Street</p>
                  <p className="text-gray-300">Dhaka-1000, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <p className="text-gray-300">+880-1234-567890</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <p className="text-gray-300">info@bangladeshintschool.edu.bd</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">Mon - Fri: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">Sat: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Downloads & Visitor Counter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-left justify-start border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Download Prospectus
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-left justify-start border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Admission Forms
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-left justify-start border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Academic Calendar
              </Button>

              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h5 className="text-sm font-semibold mb-2">Visitor Counter</h5>
                <div className="text-2xl font-bold text-blue-400">1,234,567</div>
                <p className="text-xs text-gray-400">Total Visitors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4">Find Us</h4>
          <div className="bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
            <p className="text-gray-400">Interactive Map will be embedded here</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bangladesh International School & College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
