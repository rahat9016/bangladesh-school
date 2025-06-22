"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Search, Edit, Mail, Phone, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")

  const users = [
    {
      id: 1,
      name: "Dr. Rahman Ahmed",
      email: "rahman.ahmed@bangladeshintschool.edu.bd",
      phone: "+880 1712-345678",
      role: "teacher",
      status: "active",
      joinDate: "2023-01-15",
      lastLogin: "2024-01-15 10:30 AM",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Mathematics",
    },
    {
      id: 2,
      name: "Sarah Khan",
      email: "sarah.khan@bangladeshintschool.edu.bd",
      phone: "+880 1712-345679",
      role: "student",
      status: "active",
      joinDate: "2023-09-01",
      lastLogin: "2024-01-15 09:15 AM",
      avatar: "/placeholder.svg?height=40&width=40",
      class: "Class 10-A",
    },
    {
      id: 3,
      name: "Mohammad Ali",
      email: "mohammad.ali@bangladeshintschool.edu.bd",
      phone: "+880 1712-345680",
      role: "staff",
      status: "active",
      joinDate: "2022-06-10",
      lastLogin: "2024-01-14 04:45 PM",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Administration",
    },
    {
      id: 4,
      name: "Fatima Begum",
      email: "fatima.begum@bangladeshintschool.edu.bd",
      phone: "+880 1712-345681",
      role: "teacher",
      status: "inactive",
      joinDate: "2023-03-20",
      lastLogin: "2024-01-10 02:20 PM",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "English",
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@parent.bangladeshintschool.edu.bd",
      phone: "+880 1712-345682",
      role: "parent",
      status: "active",
      joinDate: "2023-09-01",
      lastLogin: "2024-01-15 07:30 AM",
      avatar: "/placeholder.svg?height=40&width=40",
      children: "Sarah Khan (Class 10-A)",
    },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterRole === "all" || user.role === filterRole
    return matchesSearch && matchesFilter
  })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "teacher":
        return "bg-blue-100 text-blue-800"
      case "student":
        return "bg-green-100 text-green-800"
      case "staff":
        return "bg-purple-100 text-purple-800"
      case "parent":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  const userStats = [
    { label: "Total Users", value: "2,847", role: "all" },
    { label: "Teachers", value: "156", role: "teacher" },
    { label: "Students", value: "2,456", role: "student" },
    { label: "Staff", value: "89", role: "staff" },
    { label: "Parents", value: "1,234", role: "parent" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage users, roles, and permissions.</p>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {userStats.map((stat) => (
            <Card key={stat.label} className="cursor-pointer hover:bg-gray-50" onClick={() => setFilterRole(stat.role)}>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Users</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Roles</option>
                  <option value="teacher">Teachers</option>
                  <option value="student">Students</option>
                  <option value="staff">Staff</option>
                  <option value="parent">Parents</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">User</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Role</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Last Login</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">
                              {user.department || user.class || user.children || "N/A"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail className="h-3 w-3" />
                            <span>{user.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Phone className="h-3 w-3" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">{user.lastLogin}</td>
                      <td className="py-3 px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Deactivate User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
