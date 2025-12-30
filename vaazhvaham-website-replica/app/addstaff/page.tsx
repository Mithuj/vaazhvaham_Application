"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AddStaffPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    nic: "",
    email: "",
    password: "",
    position: "",
    activation: "",
    permission: ""
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      // Validate all fields are filled
      if (!formData.position) {
        setMessage({ type: 'error', text: 'Please select a position' })
        setLoading(false)
        return
      }

      // Determine which table to insert into based on position
      const tableName = formData.position === "staff" ? "staff" : "managementstaff"
      
      // Prepare data for insertion (matching database column names)
      const staffData = {
        full_name: formData.fullName,
        address: formData.address,
        phone_number: formData.phoneNumber,
        nic: formData.nic,
        email_address: formData.email,
        password: formData.password, // In production, hash this password!
        position: formData.position === "staff" ? "Staff" : "Management Staff",
        activation: formData.activation === "activate" ? "Activate" : "Inactive",
        give_permission: formData.permission === "yes" ? "Yes" : "No"
      }

      // Insert into the appropriate table using Supabase client
      const { data, error } = await supabase
        .from(tableName)
        .insert([staffData])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        setMessage({ type: 'error', text: `Error: ${error.message}` })
      } else {
        console.log('Successfully inserted:', data)
        setMessage({ type: 'success', text: `Staff member added successfully to ${tableName} table!` })
        // Reset form after successful submission
        handleReset()
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      nic: "",
      email: "",
      password: "",
      position: "",
      activation: "",
      permission: ""
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background relative">
      {/* Back Button */}
      <Link
        href="/staffmanagement"
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Add Staff
      </h1>

      <div className="w-full max-w-2xl mx-auto">
        {/* Success/Error Message */}
        {message && (
          <div className={`mb-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
            {message.text}
          </div>
        )}

        <Card className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                rows={3}
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
              />
            </div>

            {/* NIC */}
            <div className="space-y-2">
              <Label htmlFor="nic">NIC</Label>
              <Input
                id="nic"
                type="text"
                placeholder="Enter NIC"
                value={formData.nic}
                onChange={(e) => setFormData({ ...formData, nic: e.target.value })}
                required
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Select
                value={formData.position}
                onValueChange={(value) => setFormData({ ...formData, position: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="management-staff">Management Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Activation */}
            <div className="space-y-2">
              <Label htmlFor="activation">Activation</Label>
              <Select
                value={formData.activation}
                onValueChange={(value) => setFormData({ ...formData, activation: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select activation status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="activate">Activate</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Give Permission */}
            <div className="space-y-2">
              <Label htmlFor="permission">Give Permission</Label>
              <Select
                value={formData.permission}
                onValueChange={(value) => setFormData({ ...formData, permission: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select permission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="submit" className="flex-1" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
              <Button type="button" variant="outline" onClick={handleReset} className="flex-1" disabled={loading}>
                Reset
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
