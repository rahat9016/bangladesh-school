"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Video,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  User,
  Award,
  MessageCircle,
  Calendar,
  DollarSign,
  Globe,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface CourseAdminLayoutProps {
  children: React.ReactNode
}

export function CourseAdminLayout({ children }: CourseAdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const courseNavigation = [
    {
      name: "Dashboard",
      href: "/admin/course",
      icon: LayoutDashboard,
      current: pathname === "/admin/course",
    },
    {
      name: "Course Management",
      href: "/admin/course/courses",
      icon: BookOpen,
      current: pathname.startsWith("/admin/course/courses"),
      children: [
        { name: "All Courses", href: "/admin/course/courses" },
        { name: "Categories", href: "/admin/course/categories" },
        { name: "Create Course", href: "/admin/course/courses/new" },
        { name: "Course Reviews", href: "/admin/course/reviews" },
      ],
    },
    {
      name: "Content Library",
      href: "/admin/course/content",
      icon: Video,
      current: pathname.startsWith("/admin/course/content"),
      children: [
        { name: "Videos", href: "/admin/course/content/videos" },
        { name: "Documents", href: "/admin/course/content/documents" },
        { name: "Quizzes", href: "/admin/course/content/quizzes" },
        { name: "Assignments", href: "/admin/course/content/assignments" },
      ],
    },
    {
      name: "Student Management",
      href: "/admin/course/students",
      icon: Users,
      current: pathname.startsWith("/admin/course/students"),
      children: [
        { name: "Enrolled Students", href: "/admin/course/students" },
        { name: "Student Progress", href: "/admin/course/students/progress" },
        { name: "Certificates", href: "/admin/course/students/certificates" },
        { name: "Student Support", href: "/admin/course/students/support" },
      ],
    },
    {
      name: "Instructor Management",
      href: "/admin/course/instructors",
      icon: User,
      current: pathname.startsWith("/admin/course/instructors"),
    },
    {
      name: "Assessments",
      href: "/admin/course/assessments",
      icon: Award,
      current: pathname.startsWith("/admin/course/assessments"),
      children: [
        { name: "Exams", href: "/admin/course/assessments/exams" },
        { name: "Quizzes", href: "/admin/course/assessments/quizzes" },
        { name: "Assignments", href: "/admin/course/assessments/assignments" },
        { name: "Grading", href: "/admin/course/assessments/grading" },
      ],
    },
    {
      name: "Communications",
      href: "/admin/course/communications",
      icon: MessageCircle,
      current: pathname.startsWith("/admin/course/communications"),
    },
    {
      name: "Scheduling",
      href: "/admin/course/schedule",
      icon: Calendar,
      current: pathname.startsWith("/admin/course/schedule"),
    },
    {
      name: "Payments",
      href: "/admin/course/payments",
      icon: DollarSign,
      current: pathname.startsWith("/admin/course/payments"),
    },
    {
      name: "Analytics",
      href: "/admin/course/analytics",
      icon: BarChart3,
      current: pathname.startsWith("/admin/course/analytics"),
    },
    {
      name: "Settings",
      href: "/admin/course/settings",
      icon: Settings,
      current: pathname.startsWith("/admin/course/settings"),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/admin/course" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="School Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-gray-900">Course Admin</span>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {courseNavigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current ? "bg-green-100 text-green-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
                {item.children && item.current && (
                  <div className="ml-8 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-2 py-1 text-sm text-gray-500 hover:text-gray-900"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/admin/course" className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="School Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Course Admin</h1>
                <p className="text-sm text-gray-500">Online Learning</p>
              </div>
            </Link>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-2">
            {courseNavigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current ? "bg-green-100 text-green-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                  {item.children && <ChevronDown className="ml-auto h-4 w-4" />}
                </Link>
                {item.children && item.current && (
                  <div className="ml-8 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-2 py-1 text-sm text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-50"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-sm border-b border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex-1 px-4 flex justify-between items-center">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" />
                  </div>
                  <Input
                    className="block w-full pl-8 pr-3 py-2 border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Search courses, students..."
                    type="search"
                  />
                </div>
              </div>
            </div>

            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Quick Actions */}
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin">
                  <Globe className="h-4 w-4 mr-2" />
                  Main Admin
                </Link>
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  5
                </Badge>
              </Button>

              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Course Admin</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        courseadmin@bangladeshintschool.edu.bd
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin">
                      <Globe className="mr-2 h-4 w-4" />
                      Main Admin
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
