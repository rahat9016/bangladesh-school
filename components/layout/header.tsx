"use client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderNavigationMenu } from "./HeaderNavigationMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "glass backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="gradient-primary text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-green-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+880-1234-567890</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="font-medium">
                  info@bangladeshintschool.edu.bd
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-300 font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="hover:text-yellow-300 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

                
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src="/placeholder.svg?height=70&width=70"
                alt="School Logo"
                width={70}
                height={70}
                className="relative rounded-full border-3 border-white shadow-xl"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gradient">
                Bangladesh International
              </h1>
              <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                School & College
              </p>
            </div>
          </Link>

          <HeaderNavigationMenu />
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="lg"
            className="lg:hidden border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 glass-card rounded-2xl p-6 animate-slide-up">
            <nav className="space-y-3">
              {[
                "Home",
                "About Us",
                "Academic",
                "Admission",
                "Facilities",
                "Gallery",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-xl transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
