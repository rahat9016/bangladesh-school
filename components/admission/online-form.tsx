"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, User, MapPin, GraduationCap, FileText } from "lucide-react"

export function OnlineForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    religion: "",
    bloodGroup: "",

    // Contact Information
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",

    // Academic Information
    applyingFor: "",
    previousSchool: "",
    lastClass: "",
    gpa: "",
    passingYear: "",

    // Guardian Information
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianOccupation: "",

    // Additional Information
    extracurricular: "",
    medicalConditions: "",
    specialNeeds: "",

    // Agreements
    termsAccepted: false,
    dataConsent: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">Online Admission Form</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your admission application online. All fields marked with * are required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep ? "gradient-primary text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-24 h-1 mx-2 ${step < currentStep ? "gradient-primary" : "bg-gray-200"}`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="glass-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient flex items-center">
                  {currentStep === 1 && (
                    <>
                      <User className="h-6 w-6 mr-2" />
                      Personal Information
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <MapPin className="h-6 w-6 mr-2" />
                      Contact & Address
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <GraduationCap className="h-6 w-6 mr-2" />
                      Academic & Guardian Info
                    </>
                  )}
                  {currentStep === 4 && (
                    <>
                      <FileText className="h-6 w-6 mr-2" />
                      Additional Information
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input
                        id="nationality"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="religion">Religion</Label>
                      <Input
                        id="religion"
                        value={formData.religion}
                        onChange={(e) => handleInputChange("religion", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select onValueChange={(value) => handleInputChange("bloodGroup", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Full Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="mt-1"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange("postalCode", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Academic & Guardian Information */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    {/* Academic Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Academic Information</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="applyingFor">Applying for Class *</Label>
                          <Select onValueChange={(value) => handleInputChange("applyingFor", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="6">Class VI</SelectItem>
                              <SelectItem value="7">Class VII</SelectItem>
                              <SelectItem value="8">Class VIII</SelectItem>
                              <SelectItem value="9">Class IX</SelectItem>
                              <SelectItem value="10">Class X</SelectItem>
                              <SelectItem value="11">Class XI</SelectItem>
                              <SelectItem value="12">Class XII</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="previousSchool">Previous School *</Label>
                          <Input
                            id="previousSchool"
                            value={formData.previousSchool}
                            onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastClass">Last Completed Class *</Label>
                          <Input
                            id="lastClass"
                            value={formData.lastClass}
                            onChange={(e) => handleInputChange("lastClass", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="gpa">GPA/Percentage *</Label>
                          <Input
                            id="gpa"
                            value={formData.gpa}
                            onChange={(e) => handleInputChange("gpa", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="passingYear">Passing Year *</Label>
                          <Input
                            id="passingYear"
                            type="number"
                            value={formData.passingYear}
                            onChange={(e) => handleInputChange("passingYear", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Guardian Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Guardian Information</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="guardianName">Guardian Name *</Label>
                          <Input
                            id="guardianName"
                            value={formData.guardianName}
                            onChange={(e) => handleInputChange("guardianName", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="guardianRelation">Relation *</Label>
                          <Select onValueChange={(value) => handleInputChange("guardianRelation", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select relation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="father">Father</SelectItem>
                              <SelectItem value="mother">Mother</SelectItem>
                              <SelectItem value="guardian">Guardian</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                          <Input
                            id="guardianPhone"
                            type="tel"
                            value={formData.guardianPhone}
                            onChange={(e) => handleInputChange("guardianPhone", e.target.value)}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="guardianEmail">Guardian Email</Label>
                          <Input
                            id="guardianEmail"
                            type="email"
                            value={formData.guardianEmail}
                            onChange={(e) => handleInputChange("guardianEmail", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="guardianOccupation">Guardian Occupation</Label>
                          <Input
                            id="guardianOccupation"
                            value={formData.guardianOccupation}
                            onChange={(e) => handleInputChange("guardianOccupation", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="extracurricular">Extracurricular Activities</Label>
                      <Textarea
                        id="extracurricular"
                        value={formData.extracurricular}
                        onChange={(e) => handleInputChange("extracurricular", e.target.value)}
                        className="mt-1"
                        rows={3}
                        placeholder="List any sports, arts, or other activities you participate in"
                      />
                    </div>
                    <div>
                      <Label htmlFor="medicalConditions">Medical Conditions</Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                        className="mt-1"
                        rows={2}
                        placeholder="Any medical conditions we should be aware of"
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialNeeds">Special Educational Needs</Label>
                      <Textarea
                        id="specialNeeds"
                        value={formData.specialNeeds}
                        onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                        className="mt-1"
                        rows={2}
                        placeholder="Any special accommodations needed"
                      />
                    </div>

                    {/* Document Upload */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Document Upload</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Upload Student Photo</p>
                          <p className="text-xs text-gray-500">JPG, PNG (Max 2MB)</p>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Upload Academic Documents</p>
                          <p className="text-xs text-gray-500">PDF (Max 5MB)</p>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Terms and Conditions
                          </a>{" "}
                          and
                          <a href="#" className="text-blue-600 hover:underline ml-1">
                            Admission Policies
                          </a>{" "}
                          of the institution.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.dataConsent}
                          onCheckedChange={(checked) => handleInputChange("dataConsent", checked as boolean)}
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          I consent to the collection and processing of my personal data for admission purposes.
                        </Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-8"
                  >
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={nextStep} className="gradient-primary text-white px-8">
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="gradient-secondary text-white px-8"
                      disabled={!formData.termsAccepted || !formData.dataConsent}
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </section>
  )
}
