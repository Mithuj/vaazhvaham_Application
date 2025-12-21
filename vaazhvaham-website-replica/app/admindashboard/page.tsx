"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Newspaper, Calendar, BookOpen } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
        Admin Dashboard
      </h1>
      
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Staff Management */}
          <Card className="p-4">
            <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
              <Users className="h-6 w-6 md:h-8 md:w-8" />
              <span>Staff Management</span>
            </Button>
          </Card>
          
          {/* News Management */}
          <Card className="p-4">
            <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
              <Newspaper className="h-6 w-6 md:h-8 md:w-8" />
              <span>News Management</span>
            </Button>
          </Card>
          
          {/* Event Management */}
          <Card className="p-4">
            <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
              <Calendar className="h-6 w-6 md:h-8 md:w-8" />
              <span>Event Management</span>
            </Button>
          </Card>
          
          {/* Publication Management */}
          <Card className="p-4">
            <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
              <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
              <span>Publication Management</span>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
