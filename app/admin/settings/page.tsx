"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Globe, Mail, Shield, Database, Bell, Save, Eye, EyeOff } from "lucide-react"

export default function AdminSettings() {
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState({
    siteName: "Bangladesh International School & College",
    siteDescription: "Excellence in Education Since 1995",
    siteUrl: "https://bangladeshintschool.edu.bd",
    adminEmail: "admin@bangladeshintschool.edu.bd",
    contactEmail: "info@bangladeshintschool.edu.bd",
    phone: "+880 2-9876543",
    address: "123 Education Street, Dhaka, Bangladesh",
    enableRegistration: true,
    enableComments: true,
    enableNotifications: true,
    maintenanceMode: false,
    emailNotifications: true,
    smsNotifications: false,
    backupFrequency: "daily",
    maxFileSize: "10",
    allowedFileTypes: "jpg,jpeg,png,pdf,doc,docx",
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Save settings logic here
    console.log("Saving settings:", settings)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Configure your website and system settings.</p>
          </div>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="website" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Website</span>
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span>System</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Site Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => handleSettingChange("siteName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea
                      id="siteDescription"
                      value={settings.siteDescription}
                      onChange={(e) => handleSettingChange("siteDescription", e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteUrl">Site URL</Label>
                    <Input
                      id="siteUrl"
                      value={settings.siteUrl}
                      onChange={(e) => handleSettingChange("siteUrl", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => handleSettingChange("contactEmail", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={settings.phone}
                      onChange={(e) => handleSettingChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={settings.address}
                      onChange={(e) => handleSettingChange("address", e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Website Settings */}
          <TabsContent value="website">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Site Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableRegistration">User Registration</Label>
                      <p className="text-sm text-gray-500">Allow new users to register</p>
                    </div>
                    <Switch
                      id="enableRegistration"
                      checked={settings.enableRegistration}
                      onCheckedChange={(checked) => handleSettingChange("enableRegistration", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableComments">Comments</Label>
                      <p className="text-sm text-gray-500">Enable comments on posts</p>
                    </div>
                    <Switch
                      id="enableComments"
                      checked={settings.enableComments}
                      onCheckedChange={(checked) => handleSettingChange("enableComments", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                      <p className="text-sm text-gray-500">Put site in maintenance mode</p>
                    </div>
                    <Switch
                      id="maintenanceMode"
                      checked={settings.maintenanceMode}
                      onCheckedChange={(checked) => handleSettingChange("maintenanceMode", checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>File Upload Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="maxFileSize">Maximum File Size (MB)</Label>
                    <Input
                      id="maxFileSize"
                      type="number"
                      value={settings.maxFileSize}
                      onChange={(e) => handleSettingChange("maxFileSize", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="allowedFileTypes">Allowed File Types</Label>
                    <Input
                      id="allowedFileTypes"
                      value={settings.allowedFileTypes}
                      onChange={(e) => handleSettingChange("allowedFileTypes", e.target.value)}
                      placeholder="jpg,png,pdf,doc"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate file extensions with commas</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Email Settings */}
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Email Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="smtpHost">SMTP Host</Label>
                    <Input id="smtpHost" placeholder="smtp.gmail.com" />
                  </div>
                  <div>
                    <Label htmlFor="smtpPort">SMTP Port</Label>
                    <Input id="smtpPort" placeholder="587" />
                  </div>
                  <div>
                    <Label htmlFor="smtpUsername">SMTP Username</Label>
                    <Input id="smtpUsername" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="smtpPassword">SMTP Password</Label>
                    <div className="relative">
                      <Input
                        id="smtpPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter SMTP password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="enableSSL" />
                  <Label htmlFor="enableSSL">Enable SSL/TLS</Label>
                </div>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Test Email Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="minPasswordLength">Minimum Password Length</Label>
                    <Input id="minPasswordLength" type="number" defaultValue="8" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="requireUppercase" defaultChecked />
                      <Label htmlFor="requireUppercase">Require uppercase letters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="requireNumbers" defaultChecked />
                      <Label htmlFor="requireNumbers">Require numbers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="requireSpecialChars" />
                      <Label htmlFor="requireSpecialChars">Require special characters</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input id="sessionTimeout" type="number" defaultValue="30" />
                  </div>
                  <div>
                    <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                    <Input id="maxLoginAttempts" type="number" defaultValue="5" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="twoFactorAuth" />
                    <Label htmlFor="twoFactorAuth">Enable Two-Factor Authentication</Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backup Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <select
                      id="backupFrequency"
                      value={settings.backupFrequency}
                      onChange={(e) => handleSettingChange("backupFrequency", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="autoBackup" defaultChecked />
                    <Label htmlFor="autoBackup">Enable automatic backups</Label>
                  </div>
                  <Button variant="outline">
                    <Database className="h-4 w-4 mr-2" />
                    Create Backup Now
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">PHP Version</p>
                      <p className="text-gray-600">8.2.0</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Database Version</p>
                      <p className="text-gray-600">MySQL 8.0</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Server Space</p>
                      <p className="text-gray-600">45GB / 100GB</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Last Backup</p>
                      <p className="text-gray-600">2024-01-15 02:00 AM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="smsNotifications">SMS Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    id="smsNotifications"
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleSettingChange("smsNotifications", checked)}
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Notification Types</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="newUserNotif" defaultChecked />
                      <Label htmlFor="newUserNotif">New user registrations</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="contentNotif" defaultChecked />
                      <Label htmlFor="contentNotif">New content submissions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="systemNotif" defaultChecked />
                      <Label htmlFor="systemNotif">System alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="backupNotif" />
                      <Label htmlFor="backupNotif">Backup completion</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
