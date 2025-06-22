import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bell, Calendar, Clock, Newspaper, TrendingUp } from "lucide-react"

const newsItems = [
  {
    id: 1,
    type: "news",
    title: "Annual Sports Day 2024 Successfully Concluded",
    excerpt:
      "Our annual sports day was held with great enthusiasm and participation from all students showcasing their athletic prowess...",
    date: "2024-01-15",
    time: "10:00 AM",
    image: "/img.jpeg?height=200&width=300",
    trending: true,
  },
  {
    id: 2,
    type: "notice",
    title: "Mid-term Examination Schedule Released",
    excerpt:
      "The mid-term examination schedule for all classes has been published. Students are advised to check the timetable...",
    date: "2024-01-12",
    time: "2:30 PM",
    image: "/img.jpeg?height=200&width=300",
    urgent: true,
  },
  {
    id: 3,
    type: "news",
    title: "Science Fair 2024 Winners Announced",
    excerpt:
      "Congratulations to all participants and winners of our annual science fair. The event featured innovative projects...",
    date: "2024-01-10",
    time: "11:15 AM",
    image: "/img.jpeg?height=200&width=300",
    trending: false,
  },
  {
    id: 4,
    type: "notice",
    title: "Parent-Teacher Meeting Scheduled",
    excerpt:
      "Monthly parent-teacher meeting will be held on January 20th. All parents are requested to attend and discuss...",
    date: "2024-01-08",
    time: "9:00 AM",
    image: "/img.jpeg?height=200&width=300",
    urgent: false,
  },
]

export function NewsNotice() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-6">
            <Newspaper className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">News & Notices</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings and important announcements from our school community
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={item.id}
              className="glass-card hover-lift rounded-2xl overflow-hidden group animate-slide-up border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Badge
                    className={`${
                      item.type === "news" ? "gradient-tertiary text-white" : "gradient-gold text-white"
                    } border-0 px-3 py-1 rounded-full font-semibold`}
                  >
                    {item.type === "news" ? (
                      <>
                        <Newspaper className="h-3 w-3 mr-1" /> News
                      </>
                    ) : (
                      <>
                        <Bell className="h-3 w-3 mr-1" /> Notice
                      </>
                    )}
                  </Badge>
                  {item.trending && (
                    <Badge className="gradient-secondary text-white border-0 px-2 py-1 rounded-full">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                  {item.urgent && (
                    <Badge className="gradient-accent text-white border-0 px-2 py-1 rounded-full animate-pulse">
                      Urgent
                    </Badge>
                  )}
                </div>

                {/* Date */}
                <div className="absolute bottom-4 right-4 glass text-white px-3 py-1 rounded-full text-sm">
                  <Calendar className="h-3 w-3 mr-1 inline" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500 glass px-3 py-1 rounded-full">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full group/btn"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-primary hover:scale-105 transition-all duration-300 px-12 py-4 text-lg font-semibold rounded-full shadow-xl"
          >
            View All Updates
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
