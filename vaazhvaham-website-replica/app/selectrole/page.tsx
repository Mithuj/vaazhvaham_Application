"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SelectRolePage() {
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const roles = [
    { id: "administrator", label: "Admin" },
    { id: "lecturer", label: "Staffs" },
    { id: "student", label: "Management" },
  ]

  const handleSignIn = () => {
    if (!selectedRole || !email || !password) {
      alert("Please select a role and enter email and password")
      return
    }

    // Navigate based on selected role
    switch (selectedRole) {
      case "administrator":
        router.push("/admindashboard")
        break
      case "lecturer":
        router.push("/staffdashboard")
        break
      case "student":
        router.push("/managementdashboard")
        break
      default:
        break
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
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          SIGN IN
        </Button>
      </Card>
    </div>
  )
}
