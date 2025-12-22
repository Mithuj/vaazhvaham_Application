"use client"

import Link from "next/link"
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NewsManagementPage() {
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
        News Management
      </h1>

      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Add News */}
          <Card className="p-4">
            <Link href="/addnews" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Plus className="h-6 w-6 md:h-8 md:w-8" />
                <span>Add News</span>
              </Button>
            </Link>
          </Card>
          
          {/* Edit News */}
          <Card className="p-4">
            <Link href="/editnews" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Edit className="h-6 w-6 md:h-8 md:w-8" />
                <span>Edit News</span>
              </Button>
            </Link>
          </Card>
          
          {/* Delete News */}
          <Card className="p-4">
            <Link href="/deletenews" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Trash2 className="h-6 w-6 md:h-8 md:w-8" />
                <span>Delete News</span>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
