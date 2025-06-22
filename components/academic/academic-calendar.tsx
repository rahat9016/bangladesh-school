import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AcademicCalendar() {
  const currentYear = new Date().getFullYear()

  const events = [
    {
      date: "2024-01-15",
      title: "Spring Semester Begins",
      type: "academic",
      time: "8:00 AM",
      location: "All Campuses",
    },
    {
      date: "2024-02-21",
      title: "International Mother Language Day",
      type: "cultural",
      time: "10:00 AM",
      location: "Main Auditorium",
    },
    {
      date: "2024-03-15",
      title: "Mid-term Examinations",
      type: "exam",
      time: "9:00 AM",
      location: "Examination Halls",
    },
    {
      date: "2024-03-26",
      title: "Independence Day Celebration",
      type: "national",
      time: "9:00 AM",
      location: "School Grounds",
    },
    {
      date: "2024-04-14",
      title: "Bengali New Year Celebration",
      type: "cultural",
      time: "10:00 AM",
      location: "Cultural Center",
    },
    {
      date: "2024-05-01",
      title: "May Day Holiday",
      type: "holiday",
      time: "All Day",
      location: "Holiday",
    },
    {
      date: "2024-05-15",
      title: "Annual Sports Day",
      type: "sports",
      time: "8:00 AM",
      location: "Sports Complex",
    },
    {
      date: "2024-06-01",
      title: "Final Examinations Begin",
      type: "exam",
      time: "9:00 AM",
      location: "Examination Halls",
    },
    {
      date: "2024-06-30",
      title: "Summer Vacation Begins",
      type: "holiday",
      time: "After Classes",
      location: "All Campuses",
    },
    {
      date: "2024-07-01",
      title: "Admission Process Opens",
      type: "admission",
      time: "9:00 AM",
      location: "Admission Office",
    },
    {
      date: "2024-08-15",
      title: "Independence Day Holiday",
      type: "national",
      time: "All Day",
      location: "Holiday",
    },
    {
      date: "2024-09-01",
      title: "Fall Semester Begins",
      type: "academic",
      time: "8:00 AM",
      location: "All Campuses",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "gradient-primary"
      case "exam":
        return "gradient-accent"
      case "cultural":
        return "gradient-secondary"
      case "sports":
        return "gradient-tertiary"
      case "national":
        return "gradient-gold"
      case "holiday":
        return "gradient-quaternary"
      case "admission":
        return "gradient-primary"
      default:
        return "gradient-primary"
    }
  }

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "academic":
        return "Academic"
      case "exam":
        return "Examination"
      case "cultural":
        return "Cultural"
      case "sports":
        return "Sports"
      case "national":
        return "National"
      case "holiday":
        return "Holiday"
      case "admission":
        return "Admission"
      default:
        return "Event"
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Academic Calendar {currentYear}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with important academic dates, examinations, holidays, and special events
          </p>
        </div>

        {/* Calendar Events */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="glass-card border-0 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        <div className="text-center min-w-[80px]">
                          <div className="text-2xl font-bold text-blue-600">{new Date(event.date).getDate()}</div>
                          <div className="text-sm text-gray-600 uppercase">
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                            <Badge
                              className={`${getEventTypeColor(event.type)} text-white border-0 px-3 py-1 rounded-full text-xs`}
                            >
                              {getEventTypeLabel(event.type)}
                            </Badge>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Calendar */}
        <div className="text-center mt-12">
          <Card className="glass-card border-0 p-8 max-w-2xl mx-auto">
            <CardContent>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Download Full Calendar</h4>
              <p className="text-gray-600 mb-6">
                Get the complete academic calendar with all important dates and events
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  <Calendar className="h-5 w-5 mr-2 inline" />
                  Download PDF
                </button>
                <button className="border-2 border-blue-200 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                  Add to Google Calendar
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
