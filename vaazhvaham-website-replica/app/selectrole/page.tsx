"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function SelectRolePage() {
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const roles = [
    { id: "administrator", label: "Administrator" },
    { id: "lecturer", label: "Lecturer/Staff" },
    { id: "student", label: "Student" },
  ]

  const handleSignIn = () => {
    console.log("Sign in with:", { selectedRole, email, password })
    // Sign-in logic will be implemented later
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 px-4 py-12">
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
          className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all"
        >
          SIGN IN
        </Button>
      </Card>
    </div>
  )
}
