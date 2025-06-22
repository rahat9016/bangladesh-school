import { CourseAdminLayout } from "@/components/admin/course-admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Users,
  Play,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  ArrowUpRight,
  Plus,
  Eye,
  Download,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CourseAdminDashboard() {
  const courseStats = [
    {
      name: "Total Courses",
      value: "47",
      change: "+5",
      changeType: "increase",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      name: "Active Students",
      value: "1,234",
      change: "+89",
      changeType: "increase",
      icon: Users,
      color: "bg-green-500",
    },
    {
      name: "Course Completions",
      value: "892",
      change: "+12%",
      changeType: "increase",
      icon: Award,
      color: "bg-purple-500",
    },
    {
      name: "Revenue",
      value: "৳2,45,000",
      change: "+18%",
      changeType: "increase",
      icon: DollarSign,
      color: "bg-orange-500",
    },
  ]

  const popularCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Rahman Ahmed",
      students: 156,
      completion: 78,
      rating: 4.8,
      revenue: "৳45,000",
      status: "active",
    },
    {
      id: 2,
      title: "English Literature",
      instructor: "Prof. Sarah Khan",
      students: 134,
      completion: 85,
      rating: 4.9,
      revenue: "৳38,000",
      status: "active",
    },
    {
      id: 3,
      title: "Physics Fundamentals",
      instructor: "Dr. Mohammad Ali",
      students: 98,
      completion: 72,
      rating: 4.7,
      revenue: "৳32,000",
      status: "active",
    },
    {
      id: 4,
      title: "Computer Science Basics",
      instructor: "Ms. Fatima Begum",
      students: 187,
      completion: 91,
      rating: 4.9,
      revenue: "৳52,000",
      status: "active",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "New student enrolled",
      description: "John Doe enrolled in Advanced Mathematics",
      time: "5 minutes ago",
      course: "Advanced Mathematics",
    },
    {
      id: 2,
      type: "completion",
      title: "Course completed",
      description: "Sarah completed English Literature course",
      time: "1 hour ago",
      course: "English Literature",
    },
    {
      id: 3,
      type: "content",
      title: "New video uploaded",
      description: "Chapter 5 video added to Physics course",
      time: "2 hours ago",
      course: "Physics Fundamentals",
    },
    {
      id: 4,
      type: "review",
      title: "New course review",
      description: "5-star review for Computer Science Basics",
      time: "3 hours ago",
      course: "Computer Science Basics",
    },
  ]

  const upcomingTasks = [
    {
      id: 1,
      title: "Review quiz submissions",
      course: "Advanced Mathematics",
      dueDate: "Today, 3:00 PM",
      priority: "high",
      count: 23,
    },
    {
      id: 2,
      title: "Grade assignments",
      course: "English Literature",
      dueDate: "Tomorrow, 10:00 AM",
      priority: "medium",
      count: 15,
    },
    {
      id: 3,
      title: "Update course content",
      course: "Physics Fundamentals",
      dueDate: "Dec 25, 2024",
      priority: "low",
      count: 3,
    },
    {
      id: 4,
      title: "Student progress review",
      course: "Computer Science Basics",
      dueDate: "Dec 28, 2024",
      priority: "medium",
      count: 8,
    },
  ]

  return (
    <CourseAdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Course Dashboard</h1>
            <p className="text-gray-600">Manage your online courses and track student progress.</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseStats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">{stat.change}</span>
                        <span className="text-sm text-gray-500 ml-1">this month</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Popular Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Popular Courses
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularCourses.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.title}</h4>
                          <p className="text-sm text-gray-600">by {course.instructor}</p>
                        </div>
                        <Badge variant="secondary">{course.status}</Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Users className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">{course.students}</span>
                          </div>
                          <p className="text-xs text-gray-500">Students</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Award className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">{course.completion}%</span>
                          </div>
                          <p className="text-xs text-gray-500">Completion</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                          <p className="text-xs text-gray-500">Rating</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <DollarSign className="h-4 w-4 text-purple-500" />
                            <span className="text-sm font-medium">{course.revenue}</span>
                          </div>
                          <p className="text-xs text-gray-500">Revenue</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.completion}%</span>
                          </div>
                          <Progress value={course.completion} className="h-2" />
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities & Tasks */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {activity.type === "enrollment" && (
                          <div className="p-1.5 bg-blue-100 rounded-full">
                            <Users className="h-3 w-3 text-blue-600" />
                          </div>
                        )}
                        {activity.type === "completion" && (
                          <div className="p-1.5 bg-green-100 rounded-full">
                            <Award className="h-3 w-3 text-green-600" />
                          </div>
                        )}
                        {activity.type === "content" && (
                          <div className="p-1.5 bg-purple-100 rounded-full">
                            <Play className="h-3 w-3 text-purple-600" />
                          </div>
                        )}
                        {activity.type === "review" && (
                          <div className="p-1.5 bg-yellow-100 rounded-full">
                            <Star className="h-3 w-3 text-yellow-600" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-600">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                        <Badge
                          variant={
                            task.priority === "high"
                              ? "destructive"
                              : task.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{task.course}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{task.dueDate}</span>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{task.count} items</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2" asChild>
                <a href="/admin/course/courses/new">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  <span>Create New Course</span>
                </a>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2" asChild>
                <a href="/admin/course/content/videos">
                  <Play className="h-6 w-6 text-green-500" />
                  <span>Upload Content</span>
                </a>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2" asChild>
                <a href="/admin/course/students">
                  <Users className="h-6 w-6 text-purple-500" />
                  <span>Manage Students</span>
                </a>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2" asChild>
                <a href="/admin/course/analytics">
                  <Eye className="h-6 w-6 text-orange-500" />
                  <span>View Analytics</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CourseAdminLayout>
  )
}
