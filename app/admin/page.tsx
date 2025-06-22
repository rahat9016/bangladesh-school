import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, TrendingUp, Eye, CheckCircle, Clock, ArrowUpRight, Download, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const stats = [
    {
      name: "Total Students",
      value: "2,847",
      change: "+12%",
      changeType: "increase",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "Active Teachers",
      value: "156",
      change: "+3%",
      changeType: "increase",
      icon: Users,
      color: "bg-green-500",
    },
    {
      name: "Published Content",
      value: "89",
      change: "+8%",
      changeType: "increase",
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      name: "Site Visitors",
      value: "12,456",
      change: "+23%",
      changeType: "increase",
      icon: Eye,
      color: "bg-orange-500",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "content",
      title: "New admission notice published",
      description: "Spring 2024 admission notice has been published",
      time: "2 hours ago",
      status: "published",
      user: "Admin User",
    },
    {
      id: 2,
      type: "user",
      title: "New teacher registration",
      description: "Dr. Sarah Ahmed has been added as Mathematics teacher",
      time: "4 hours ago",
      status: "approved",
      user: "HR Manager",
    },
    {
      id: 3,
      type: "system",
      title: "System backup completed",
      description: "Daily system backup completed successfully",
      time: "6 hours ago",
      status: "completed",
      user: "System",
    },
    {
      id: 4,
      type: "content",
      title: "Gallery updated",
      description: "25 new photos added to sports day gallery",
      time: "8 hours ago",
      status: "published",
      user: "Content Manager",
    },
  ]

  const pendingTasks = [
    {
      id: 1,
      title: "Review admission applications",
      description: "45 new applications pending review",
      priority: "high",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "Approve teacher leave requests",
      description: "8 leave requests awaiting approval",
      priority: "medium",
      dueDate: "Tomorrow",
    },
    {
      id: 3,
      title: "Update exam schedule",
      description: "Mid-term exam schedule needs to be published",
      priority: "high",
      dueDate: "2 days",
    },
    {
      id: 4,
      title: "Review website content",
      description: "3 content pieces pending review",
      priority: "low",
      dueDate: "This week",
    },
  ]

  const quickActions = [
    {
      title: "Add New Content",
      description: "Create news, notices, or pages",
      icon: FileText,
      href: "/admin/content/new",
      color: "bg-blue-500",
    },
    {
      title: "Manage Users",
      description: "Add or edit user accounts",
      icon: Users,
      href: "/admin/users",
      color: "bg-green-500",
    },
    {
      title: "Upload Media",
      description: "Add images and documents",
      icon: Upload,
      href: "/admin/media/upload",
      color: "bg-purple-500",
    },
    {
      title: "View Reports",
      description: "Analytics and statistics",
      icon: TrendingUp,
      href: "/admin/reports",
      color: "bg-orange-500",
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening at your school.</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Quick Upload
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
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
                        <span className="text-sm text-gray-500 ml-1">from last month</span>
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
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Activities
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0">
                        {activity.type === "content" && (
                          <div className="p-2 bg-blue-100 rounded-full">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                        {activity.type === "user" && (
                          <div className="p-2 bg-green-100 rounded-full">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                        {activity.type === "system" && (
                          <div className="p-2 bg-purple-100 rounded-full">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <Badge
                            variant={
                              activity.status === "published"
                                ? "default"
                                : activity.status === "approved"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time} • by {activity.user}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pending Tasks */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                          <div className="flex items-center mt-2">
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
                            <span className="text-xs text-gray-500 ml-2">Due: {task.dueDate}</span>
                          </div>
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
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => {
                const IconComponent = action.icon
                return (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="h-auto p-6 flex flex-col items-start space-y-2 hover:bg-gray-50"
                    asChild
                  >
                    <a href={action.href}>
                      <div className={`p-2 rounded-lg ${action.color}`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </a>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
