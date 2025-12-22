"use client"

import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function EditPublicationPage() {
  const [showHeadingForm, setShowHeadingForm] = useState(false)
  const [formData, setFormData] = useState({
    chooseHeading: "",
    year: "",
    coverImage: null as File | null,
    headingEnglish: "",
    headingTamil: "",
    pdfFile: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Publication updated:", formData)
    // Add your update logic here
  }

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, coverImage: e.target.files[0] })
    }
  }

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, pdfFile: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-background relative">
      {/* Back Button */}
      <Link
        href="/publicationmanagement"
        className="absolute top-4 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors z-10"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base hidden sm:inline">Back</span>
      </Link>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-12 sm:mt-14 md:mt-16 px-4">
        Edit Publication
      </h1>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
            {/* Choose the Publication Heading */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="chooseHeading" className="text-sm sm:text-base font-medium">
                Choose the Publication Heading
              </Label>
              <Input
                id="chooseHeading"
                type="text"
                placeholder="Enter or search for the publication heading"
                value={formData.chooseHeading}
                onChange={(e) => setFormData({ ...formData, chooseHeading: e.target.value })}
                required
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
            </div>

            {/* Year */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="year" className="text-sm sm:text-base font-medium">
                Year
              </Label>
              <Input
                id="year"
                type="number"
                min="1900"
                max="2100"
                placeholder="Enter publication year (e.g., 2024)"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                required
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
            </div>

            {/* Cover Image */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="coverImage" className="text-sm sm:text-base font-medium">
                Cover Image
              </Label>
              <Input
                id="coverImage"
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                required
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {formData.coverImage && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-1">
                  ✓ Selected: {formData.coverImage.name}
                </p>
              )}
            </div>

            {/* Add Heading of Publication Button */}
            <div className="space-y-4 md:space-y-5">
              <Button
                type="button"
                variant={showHeadingForm ? "default" : "outline"}
                onClick={() => setShowHeadingForm(!showHeadingForm)}
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {showHeadingForm ? "Hide Heading Form" : "Add Heading of Publication"}
              </Button>

              {/* Heading Sub-form */}
              {showHeadingForm && (
                <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 bg-muted/50 border-2 animate-in slide-in-from-top-2">
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="headingEnglish" className="text-sm sm:text-base font-medium">
                      Publication Heading in English
                    </Label>
                    <Input
                      id="headingEnglish"
                      type="text"
                      placeholder="Enter publication heading in English"
                      value={formData.headingEnglish}
                      onChange={(e) => setFormData({ ...formData, headingEnglish: e.target.value })}
                      required
                      className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="headingTamil" className="text-sm sm:text-base font-medium">
                      Publication Heading in Tamil
                    </Label>
                    <Input
                      id="headingTamil"
                      type="text"
                      placeholder="Enter publication heading in Tamil"
                      value={formData.headingTamil}
                      onChange={(e) => setFormData({ ...formData, headingTamil: e.target.value })}
                      required
                      className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Add PDF */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="pdfFile" className="text-sm sm:text-base font-medium">
                Add PDF
              </Label>
              <Input
                id="pdfFile"
                type="file"
                accept="application/pdf,.pdf"
                onChange={handlePdfChange}
                required
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {formData.pdfFile && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-1">
                  ✓ Selected: {formData.pdfFile.name}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6 md:pt-8">
              <Button 
                type="submit" 
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Update Publication
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
