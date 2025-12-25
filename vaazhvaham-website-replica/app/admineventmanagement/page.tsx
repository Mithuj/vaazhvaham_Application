"use client"

import Link from "next/link"
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdminEventManagementPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background relative">
      {/* Back Button */}
      <Link
        href="/admindashboard"
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
        Admin Event Management
      </h1>

      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Add Event */}
          <Card className="p-4">
            <Link href="/addevent" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Plus className="h-6 w-6 md:h-8 md:w-8" />
                <span>Add Event</span>
              </Button>
            </Link>
          </Card>
          
          {/* Edit Event */}
          <Card className="p-4">
            <Link href="/editevent" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Edit className="h-6 w-6 md:h-8 md:w-8" />
                <span>Edit Event</span>
              </Button>
            </Link>
          </Card>
          
          {/* Delete Event */}
          <Card className="p-4">
            <Link href="/deleteevent" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Trash2 className="h-6 w-6 md:h-8 md:w-8" />
                <span>Delete Event</span>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
