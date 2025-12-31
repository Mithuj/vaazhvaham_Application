"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Newspaper, Calendar, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function StaffDashboardPage() {
  const [userName, setUserName] = useState<string>("")

  useEffect(() => {
    // Retrieve user name from sessionStorage (stored during login from Supabase)
    const name = sessionStorage.getItem('userName')
    if (name) {
      setUserName(name)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background relative">
      {/* Back Button */}
      <Link
        href="/selectrole"
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      {/* Welcome Message */}
      {userName && (
        <div className="mb-4 md:mb-6 text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            Welcome back,
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            {userName}
          </h2>
        </div>
      )}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
        Staff Dashboard
      </h1>
      
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* News Management */}
          <Card className="p-4">
            <Link href="/staffnewsmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Newspaper className="h-6 w-6 md:h-8 md:w-8" />
                <span>News Management</span>
              </Button>
            </Link>
          </Card>
          
          {/* Event Management */}
          <Card className="p-4">
            <Link href="/staffeventmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Calendar className="h-6 w-6 md:h-8 md:w-8" />
                <span>Event Management</span>
              </Button>
            </Link>
          </Card>
          
          {/* Publication Management */}
          <Card className="p-4">
            <Link href="/staffpublicationmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
                <span>Publication Management</span>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
