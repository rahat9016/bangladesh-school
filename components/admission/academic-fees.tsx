import { CreditCard, Award, Info, GraduationCap, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AcademicFees() {
  const feeStructure = [
    {
      class: "Class VI - VIII",
      admissionFee: 15000,
      monthlyTuition: 8000,
      examFee: 2000,
      labFee: 1500,
      libraryFee: 1000,
      sportsActivity: 1500,
      total: 95000,
    },
    {
      class: "Class IX - X (SSC)",
      admissionFee: 20000,
      monthlyTuition: 10000,
      examFee: 3000,
      labFee: 2000,
      libraryFee: 1200,
      sportsActivity: 1800,
      total: 125000,
    },
    {
      class: "Class XI - XII (HSC)",
      admissionFee: 25000,
      monthlyTuition: 12000,
      examFee: 4000,
      labFee: 2500,
      libraryFee: 1500,
      sportsActivity: 2000,
      total: 155000,
    },
  ]

  const paymentMethods = [
    {
      method: "Bank Transfer",
      icon: "🏦",
      details: "Direct transfer to school account",
      processing: "1-2 business days",
    },
    {
      method: "Online Payment",
      icon: "💳",
      details: "Credit/Debit card, Mobile banking",
      processing: "Instant",
    },
    {
      method: "Cash Payment",
      icon: "💵",
      details: "At school accounts office",
      processing: "Immediate",
    },
    {
      method: "Installments",
      icon: "📅",
      details: "Monthly/Quarterly payments",
      processing: "As per schedule",
    },
  ]

  const scholarships = [
    {
      type: "Merit Scholarship",
      criteria: "Top 5% academic performance",
      benefit: "50% tuition waiver",
      color: "gradient-gold",
    },
    {
      type: "Sports Scholarship",
      criteria: "National/International sports achievement",
      benefit: "30% total fee waiver",
      color: "gradient-secondary",
    },
    {
      type: "Need-based Aid",
      criteria: "Family income below threshold",
      benefit: "25-75% fee reduction",
      color: "gradient-tertiary",
    },
    {
      type: "Sibling Discount",
      criteria: "Multiple children in same school",
      benefit: "15% discount for 2nd child",
      color: "gradient-primary",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Academic Fees Structure</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transparent and competitive fee structure designed to provide quality education at affordable rates
          </p>
        </div>

        {/* Fee Structure Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Annual Fee Structure (BDT)</h3>
          <div className="overflow-x-auto">
            <div className="space-y-6">
              {feeStructure.map((fee, index) => (
                <Card
                  key={index}
                  className="glass-card border-0 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      <GraduationCap className="h-6 w-6 mr-3" />
                      {fee.class}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-1">Admission Fee</div>
                        <div className="text-lg font-bold text-white">৳{fee.admissionFee.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-1">Monthly Tuition</div>
                        <div className="text-lg font-bold text-white">৳{fee.monthlyTuition.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-1">Exam Fee</div>
                        <div className="text-lg font-bold text-white">৳{fee.examFee.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-1">Lab Fee</div>
                        <div className="text-lg font-bold text-white">৳{fee.labFee.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-1">Library Fee</div>
                        <div className="text-lg font-bold text-white">৳{fee.libraryFee.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-300 mb-1">Sports/Activity</div>
                        <div className="text-lg font-bold text-white">৳{fee.sportsActivity.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="gradient-gold text-white px-3 py-2 rounded-lg">
                          <div className="text-sm mb-1">Annual Total</div>
                          <div className="text-xl font-bold">৳{fee.total.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Payment Methods</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="glass-card border-0 text-center p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{method.method}</h4>
                  <p className="text-gray-300 text-sm mb-3">{method.details}</p>
                  <Badge className="gradient-tertiary text-white border-0 px-3 py-1 rounded-full text-xs">
                    {method.processing}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Scholarships & Financial Aid</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card
                key={index}
                className="glass-card border-0 p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{scholarship.type}</h4>
                    <Badge className={`${scholarship.color} text-white border-0 px-3 py-1 rounded-full`}>
                      {scholarship.benefit}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{scholarship.criteria}</p>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Apply during admission process</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card border-0 p-6">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Admission fee: One-time payment at enrollment</li>
                <li>• Monthly tuition: Due by 10th of each month</li>
                <li>• Late payment penalty: 2% per month</li>
                <li>• Refund policy: As per institutional guidelines</li>
                <li>• Fee revision: Annual review in January</li>
                <li>• Payment receipts: Digital and physical copies provided</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 p-6">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Bank Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <strong>Account Name:</strong> Bangladesh International School & College
                </div>
                <div>
                  <strong>Bank:</strong> Dutch-Bangla Bank Limited
                </div>
                <div>
                  <strong>Account Number:</strong> 1234567890123456
                </div>
                <div>
                  <strong>Routing Number:</strong> 090260001
                </div>
                <div>
                  <strong>Branch:</strong> Dhanmondi Branch, Dhaka
                </div>
                <div className="pt-2">
                  <Button className="gradient-secondary text-white w-full">Download Payment Form</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Fees */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-0 p-8 max-w-2xl mx-auto">
            <CardContent>
              <h4 className="text-2xl font-bold text-white mb-4">Need Help with Fees?</h4>
              <p className="text-gray-300 mb-6">
                Our accounts team is here to assist you with payment plans and financial aid options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-white px-8 py-3">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Accounts Office
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  Schedule Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
