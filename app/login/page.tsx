"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Lock, Mail, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("student")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { ...formData, userType })
  }

  const userTypes = [
    { id: "student", label: "Student", icon: User },
    { id: "teacher", label: "Teacher", icon: User },
    { id: "admin", label: "Admin", icon: Lock },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="w-full max-w-md">
          {/* Logo and School Name */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="School Logo"
                  width={60}
                  height={60}
                  className="relative rounded-full border-3 border-white shadow-xl"
                />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gradient">Bangladesh International</h1>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  School & College
                </p>
              </div>
            </Link>
          </div>

          <Card className="glass-card border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-gradient">Welcome Back</CardTitle>
              <p className="text-gray-600">Sign in to access your account</p>
            </CardHeader>

            <CardContent>
              {/* User Type Selection */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Login as:</Label>
                <div className="grid grid-cols-3 gap-2">
                  {userTypes.map((type) => {
                    const IconComponent = type.icon
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setUserType(type.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          userType === type.id
                            ? "gradient-primary text-white border-transparent shadow-lg"
                            : "border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        <IconComponent className="h-5 w-5 mx-auto mb-1" />
                        <span className="text-xs font-medium">{type.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 pr-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-12 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full gradient-primary text-white py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Sign In
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>

              {/* Additional Links */}
              <div className="mt-6 text-center space-y-3">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/admission" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                    Apply for Admission
                  </Link>
                </p>
                <p className="text-sm text-gray-600">
                  Need help?{" "}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-green-900/90"></div>
        <Image src="/placeholder.svg?height=800&width=600" alt="School Campus" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Welcome to Our Digital Campus</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Access your student portal, academic resources, and stay connected with our vibrant school community.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="glass p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">2000+</div>
                <div className="text-gray-200">Active Students</div>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-gray-200">Faculty Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
