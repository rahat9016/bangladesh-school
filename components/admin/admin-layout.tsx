"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  FileText,
  ImageIcon,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  User,
  BookOpen,
  Calendar,
  MessageSquare,
  BarChart3,
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

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const mainNavigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: pathname === "/admin",
    },
    {
      name: "Content Management",
      href: "/admin/content",
      icon: FileText,
      current: pathname.startsWith("/admin/content"),
      children: [
        { name: "Pages", href: "/admin/content/pages" },
        { name: "News & Notices", href: "/admin/content/news" },
        { name: "Events", href: "/admin/content/events" },
        { name: "Gallery", href: "/admin/content/gallery" },
      ],
    },
    {
      name: "User Management",
      href: "/admin/users",
      icon: Users,
      current: pathname.startsWith("/admin/users"),
      children: [
        { name: "Students", href: "/admin/users/students" },
        { name: "Teachers", href: "/admin/users/teachers" },
        { name: "Staff", href: "/admin/users/staff" },
        { name: "Parents", href: "/admin/users/parents" },
      ],
    },
    {
      name: "Media Library",
      href: "/admin/media",
      icon: ImageIcon,
      current: pathname.startsWith("/admin/media"),
    },
    {
      name: "Admissions",
      href: "/admin/admissions",
      icon: BookOpen,
      current: pathname.startsWith("/admin/admissions"),
    },
    {
      name: "Academic",
      href: "/admin/academic",
      icon: Calendar,
      current: pathname.startsWith("/admin/academic"),
      children: [
        { name: "Classes", href: "/admin/academic/classes" },
        { name: "Subjects", href: "/admin/academic/subjects" },
        { name: "Exams", href: "/admin/academic/exams" },
        { name: "Results", href: "/admin/academic/results" },
      ],
    },
    {
      name: "Communications",
      href: "/admin/communications",
      icon: MessageSquare,
      current: pathname.startsWith("/admin/communications"),
    },
    {
      name: "Reports",
      href: "/admin/reports",
      icon: BarChart3,
      current: pathname.startsWith("/admin/reports"),
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      current: pathname.startsWith("/admin/settings"),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/admin" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="School Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-gray-900">Admin Panel</span>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {mainNavigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
            <Link href="/admin" className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="School Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-500">Main Website</p>
              </div>
            </Link>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-2">
            {mainNavigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
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
                    className="block w-full pl-8 pr-3 py-2 border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
            </div>

            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Quick Actions */}
              <Button variant="outline" size="sm" asChild>
                <Link href="/" target="_blank">
                  <Globe className="h-4 w-4 mr-2" />
                  View Site
                </Link>
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>

              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Admin User</p>
                      <p className="text-xs leading-none text-muted-foreground">admin@bangladeshintschool.edu.bd</p>
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
                    <Link href="/admin/course">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Course Admin
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
