"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function DeleteNewsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    newsHeading: "",
    confirmDelete: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.confirmDelete) {
      alert("Please confirm deletion by checking the box")
      return
    }
    console.log("News to delete:", formData)
    // Add your delete logic here
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-background relative">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors z-10 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base hidden sm:inline">Back</span>
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
        Delete News
      </h1>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <Card className="p-6 sm:p-8 md:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
            {/* Choose the News Heading */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="newsHeading" className="text-sm sm:text-base font-medium">
                Choose the News Heading
              </Label>
              <Input
                id="newsHeading"
                type="text"
                placeholder="Enter or search for the news heading"
                value={formData.newsHeading}
                onChange={(e) => setFormData({ ...formData, newsHeading: e.target.value })}
                required
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
            </div>

            {/* Delete Confirmation Checkbox */}
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <Checkbox
                id="confirmDelete"
                checked={formData.confirmDelete}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, confirmDelete: checked as boolean })
                }
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <Label 
                htmlFor="confirmDelete" 
                className="text-sm sm:text-base font-medium text-destructive cursor-pointer"
              >
                I confirm that I want to delete this news permanently
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <Button 
                type="submit" 
                variant="destructive"
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Delete News
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
