"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Plus, Search, Edit, Eye, Calendar } from "lucide-react"

export default function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const contentItems = [
    {
      id: 1,
      title: "Spring 2024 Admission Notice",
      type: "Notice",
      status: "published",
      author: "Admin User",
      publishDate: "2024-01-15",
      views: 1234,
      category: "Admission",
    },
    {
      id: 2,
      title: "Annual Sports Day Results",
      type: "News",
      status: "published",
      author: "Sports Coordinator",
      publishDate: "2024-01-12",
      views: 856,
      category: "Events",
    },
    {
      id: 3,
      title: "Mid-term Examination Schedule",
      type: "Notice",
      status: "draft",
      author: "Academic Officer",
      publishDate: "2024-01-20",
      views: 0,
      category: "Academic",
    },
    {
      id: 4,
      title: "New Library Books Collection",
      type: "News",
      status: "published",
      author: "Librarian",
      publishDate: "2024-01-10",
      views: 432,
      category: "Library",
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting Schedule",
      type: "Notice",
      status: "scheduled",
      author: "Principal",
      publishDate: "2024-01-25",
      views: 0,
      category: "Events",
    },
  ]

  const filteredContent = contentItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || item.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
            <p className="text-gray-600">Manage website content, news, and notices.</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Content
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Content</p>
                  <p className="text-3xl font-bold text-gray-900">89</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-3xl font-bold text-gray-900">67</p>
                </div>
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Eye className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Drafts</p>
                  <p className="text-3xl font-bold text-gray-900">15</p>
                </div>
                <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Edit className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Scheduled</p>
                  <p className="text-3xl font-bold text-gray-900">7</p>
                </div>
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Content</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Author</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Views</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContent.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {item.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">{item.author}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{item.publishDate}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{item.views.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
