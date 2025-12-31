"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

type StaffMember = {
  id: string
  full_name: string
  address: string
  phone_number: string
  nic: string
  email_address: string
  password: string
  position: string
  activation: string
  give_permission: string
  table: 'staff' | 'managementstaff' // Track which table this record is from
}

export default function EditStaffPage() {
  const [allStaff, setAllStaff] = useState<StaffMember[]>([])
  const [selectedStaffId, setSelectedStaffId] = useState<string>("")
  const [selectedStaffTable, setSelectedStaffTable] = useState<'staff' | 'managementstaff' | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  
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

  // Fetch all staff and management staff on component mount
  useEffect(() => {
    fetchAllStaff()
  }, [])

  const fetchAllStaff = async () => {
    try {
      // Fetch from staff table using supabase client (which uses .env variables)
      const { data: staffData, error: staffError } = await supabase
        .from('staff')
        .select('*')
      
      // Fetch from managementstaff table
      const { data: managementData, error: managementError } = await supabase
        .from('managementstaff')
        .select('*')

      if (staffError) console.error('Error fetching staff:', staffError)
      if (managementError) console.error('Error fetching management staff:', managementError)

      // Combine both arrays and add table identifier
      const combinedStaff: StaffMember[] = [
        ...(staffData || []).map(s => ({ ...s, table: 'staff' as const })),
        ...(managementData || []).map(m => ({ ...m, table: 'managementstaff' as const }))
      ]

      setAllStaff(combinedStaff)
    } catch (error) {
      console.error('Unexpected error fetching staff:', error)
    }
  }

  const handleStaffSelection = (staffId: string) => {
    setSelectedStaffId(staffId)
    setMessage(null)
    
    // Find the selected staff member
    const selectedStaff = allStaff.find(s => s.id === staffId)
    
    if (selectedStaff) {
      // Store which table this staff is from (original table)
      setSelectedStaffTable(selectedStaff.table)
      
      // Populate form with selected staff data
      setFormData({
        fullName: selectedStaff.full_name,
        address: selectedStaff.address,
        phoneNumber: selectedStaff.phone_number,
        nic: selectedStaff.nic,
        email: selectedStaff.email_address,
        password: selectedStaff.password,
        position: selectedStaff.position === "Staff" ? "staff" : "management-staff",
        activation: selectedStaff.activation === "Activate" ? "activate" : "inactive",
        permission: selectedStaff.give_permission === "Yes" ? "yes" : "no"
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!selectedStaffId || !selectedStaffTable) {
      setMessage({ type: 'error', text: 'Please select a staff member first' })
      setLoading(false)
      return
    }

    try {
      // Prepare updated data
      const updatedData = {
        full_name: formData.fullName,
        address: formData.address,
        phone_number: formData.phoneNumber,
        nic: formData.nic,
        email_address: formData.email,
        password: formData.password,
        position: formData.position === "staff" ? "Staff" : "Management Staff",
        activation: formData.activation === "activate" ? "Activate" : "Inactive",
        give_permission: formData.permission === "yes" ? "Yes" : "No"
      }

      // Determine the target table based on the new position
      const newTable: 'staff' | 'managementstaff' = 
        formData.position === "staff" ? "staff" : "managementstaff"

      // Check if position changed (staff moved to different table)
      if (newTable !== selectedStaffTable) {
        // Position changed - need to delete from old table and insert into new table
        // All using supabase client which uses .env variables
        
        // First, delete from the original table
        const { error: deleteError } = await supabase
          .from(selectedStaffTable)
          .delete()
          .eq('id', selectedStaffId)

        if (deleteError) {
          console.error('Delete error:', deleteError)
          setMessage({ type: 'error', text: `Error deleting from old table: ${deleteError.message}` })
          setLoading(false)
          return
        }

        // Then, insert into the new table (without id, let Supabase generate new one)
        const { error: insertError } = await supabase
          .from(newTable)
          .insert([updatedData])

        if (insertError) {
          console.error('Insert error:', insertError)
          setMessage({ type: 'error', text: `Error inserting into new table: ${insertError.message}` })
          setLoading(false)
          return
        }

        setMessage({ type: 'success', text: `Staff member moved to ${formData.position === "staff" ? "Staff" : "Management Staff"} table successfully!` })
        
        // Reset form and refresh list
        setSelectedStaffId("")
        setSelectedStaffTable(null)
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
        await fetchAllStaff()
      } else {
        // Position unchanged - simply update in the same table
        const { error } = await supabase
          .from(selectedStaffTable)
          .update(updatedData)
          .eq('id', selectedStaffId)

        if (error) {
          console.error('Update error:', error)
          setMessage({ type: 'error', text: `Error: ${error.message}` })
        } else {
          setMessage({ type: 'success', text: 'Staff member updated successfully!' })
          // Refresh the staff list
          await fetchAllStaff()
        }
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
    setSelectedStaffId("")
    setSelectedStaffTable(null)
    setMessage(null)
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
        Edit Staff
      </h1>

      {/* Staff Selection Dropdown */}
      <div className="w-full max-w-2xl mb-6 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <Label htmlFor="staffSelect" className="text-lg font-semibold mb-3 block text-purple-700">
          Select Staff Member
        </Label>
        <Select value={selectedStaffId} onValueChange={handleStaffSelection}>
          <SelectTrigger id="staffSelect" className="w-full bg-white">
            <SelectValue placeholder="Choose a staff member to edit..." />
          </SelectTrigger>
          <SelectContent>
            {allStaff.length === 0 ? (
              <SelectItem value="none" disabled>No staff members found</SelectItem>
            ) : (
              allStaff.map((staff) => (
                <SelectItem key={staff.id} value={staff.id}>
                  {staff.full_name} ({staff.position})
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`w-full max-w-2xl mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      <div className="w-full max-w-2xl mx-auto">
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
              <Button 
                type="submit" 
                className="flex-1"
                disabled={loading || !selectedStaffId}
              >
                {loading ? 'Updating...' : 'Submit'}
              </Button>
              <Button type="button" variant="outline" onClick={handleReset} className="flex-1">
                Reset
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
