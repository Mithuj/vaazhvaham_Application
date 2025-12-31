"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function SelectRolePage() {
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const router = useRouter()

  const roles = [
    { id: "administrator", label: "Admin" },
    { id: "lecturer", label: "Staffs" },
    { id: "student", label: "Management" },
  ]

  const handleSignIn = async () => {
    // Reset error message
    setError("")
    
    // Validate inputs
    if (!selectedRole || !email || !password) {
      setError("Please select a role and enter email and password")
      return
    }

    setLoading(true)

    try {
      // Determine which table to check based on selected role
      let tableName = ""
      let dashboardRoute = ""
      
      switch (selectedRole) {
        case "administrator":
          tableName = "admin"
          dashboardRoute = "/admindashboard"
          break
        case "lecturer":
          tableName = "staff"
          dashboardRoute = "/staffdashboard"
          break
        case "student":
          tableName = "managementstaff"
          dashboardRoute = "/managementdashboard"
          break
        default:
          setError("Invalid role selected")
          setLoading(false)
          return
      }

      // Query Supabase to check if email and password match
      // Using the supabase client which automatically uses .env variables
      const { data, error: queryError } = await supabase
        .from(tableName)
        .select('*')
        .eq('email_address', email)
        .eq('password', password)
        .single()

      if (queryError || !data) {
        // No matching record found
        setError("Invalid email or password. Please try again.")
        setLoading(false)
        return
      }

      // Check if account is activated (for staff and managementstaff tables)
      if (tableName !== "admin" && data.activation !== "Activate") {
        setError("Your account is not activated. Please contact the administrator.")
        setLoading(false)
        return
      }

      // Authentication successful!
      console.log("Login successful:", data)
      
      // Store user info in sessionStorage for later use
      sessionStorage.setItem('userRole', selectedRole)
      sessionStorage.setItem('userEmail', email)
      sessionStorage.setItem('userName', data.full_name)
      
      // Navigate to the appropriate dashboard
      router.push(dashboardRoute)
      
    } catch (error) {
      console.error("Login error:", error)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4 py-12 relative">
      {/* Go to Website Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        Go to the website
      </Link>

      <Card className="w-full max-w-md p-8 space-y-8 shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Select Your Role</h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 rounded-lg bg-red-100 border border-red-300 text-red-800 text-sm">
            {error}
          </div>
        )}

        {/* Role Selection */}
        <div className="grid grid-cols-3 gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                selectedRole === role.id
                  ? "border-primary bg-primary/10 text-primary shadow-md"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-xl border-2"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-semibold text-foreground">
              Password
            </label>
            <button className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">
              Forgot Password?
            </button>
          </div>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 rounded-xl border-2"
          />
        </div>

        {/* Sign In Button */}
        <Button
          onClick={handleSignIn}
          disabled={loading}
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          {loading ? "SIGNING IN..." : "SIGN IN"}
        </Button>
      </Card>
    </div>
  )
}
