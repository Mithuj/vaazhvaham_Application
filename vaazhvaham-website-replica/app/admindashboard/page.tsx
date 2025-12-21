"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-muted/30">
      <h1 className="text-4xl font-bold text-center mb-12">Admin Dashboard</h1>
      
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Button className="w-full h-16 text-lg font-semibold">
              Staff Management
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Button className="w-full h-16 text-lg font-semibold">
              News Management
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Button className="w-full h-16 text-lg font-semibold">
              Event Management
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Button className="w-full h-16 text-lg font-semibold">
              Publication Management
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
