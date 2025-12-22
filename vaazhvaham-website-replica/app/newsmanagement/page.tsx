"use client"

import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function NewsManagementPage() {
  const [showHeadingForm, setShowHeadingForm] = useState(false)
  const [showParagraphForm, setShowParagraphForm] = useState(false)
  const [formData, setFormData] = useState({
    headingEnglish: "",
    headingTamil: "",
    image: null as File | null,
    newsDate: "",
    paragraphEnglish: "",
    paragraphTamil: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("News submitted:", formData)
    // Add your submit logic here
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 bg-background relative">
      {/* Back Button */}
      <Link
        href="/admindashboard"
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 mt-16">
        News Management
      </h1>

      <div className="w-full max-w-3xl mx-auto">
        <Card className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Add Heading of News Button */}
            <div className="space-y-4">
              <Button
                type="button"
                variant={showHeadingForm ? "default" : "outline"}
                onClick={() => setShowHeadingForm(!showHeadingForm)}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                {showHeadingForm ? "Hide Heading Form" : "Add Heading of News"}
              </Button>

              {/* Heading Sub-form */}
              {showHeadingForm && (
                <Card className="p-4 space-y-4 bg-muted/50">
                  <div className="space-y-2">
                    <Label htmlFor="headingEnglish">News Heading in English</Label>
                    <Input
                      id="headingEnglish"
                      type="text"
                      placeholder="Enter news heading in English"
                      value={formData.headingEnglish}
                      onChange={(e) => setFormData({ ...formData, headingEnglish: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="headingTamil">News Heading in Tamil</Label>
                    <Input
                      id="headingTamil"
                      type="text"
                      placeholder="Enter news heading in Tamil"
                      value={formData.headingTamil}
                      onChange={(e) => setFormData({ ...formData, headingTamil: e.target.value })}
                      required
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Add Image from Gallery */}
            <div className="space-y-2">
              <Label htmlFor="image">Add Image from Gallery</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {formData.image && (
                <p className="text-sm text-muted-foreground">
                  Selected: {formData.image.name}
                </p>
              )}
            </div>

            {/* Select News Date */}
            <div className="space-y-2">
              <Label htmlFor="newsDate">Select the News Date</Label>
              <Input
                id="newsDate"
                type="date"
                value={formData.newsDate}
                onChange={(e) => setFormData({ ...formData, newsDate: e.target.value })}
                required
              />
            </div>

            {/* Add Paragraph Button */}
            <div className="space-y-4">
              <Button
                type="button"
                variant={showParagraphForm ? "default" : "outline"}
                onClick={() => setShowParagraphForm(!showParagraphForm)}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                {showParagraphForm ? "Hide Paragraph Form" : "Add the Paragraph"}
              </Button>

              {/* Paragraph Sub-form */}
              {showParagraphForm && (
                <Card className="p-4 space-y-4 bg-muted/50">
                  <div className="space-y-2">
                    <Label htmlFor="paragraphEnglish">News Paragraph in English</Label>
                    <Textarea
                      id="paragraphEnglish"
                      placeholder="Enter news paragraph in English"
                      value={formData.paragraphEnglish}
                      onChange={(e) => setFormData({ ...formData, paragraphEnglish: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paragraphTamil">News Paragraph in Tamil</Label>
                    <Textarea
                      id="paragraphTamil"
                      placeholder="Enter news paragraph in Tamil"
                      value={formData.paragraphTamil}
                      onChange={(e) => setFormData({ ...formData, paragraphTamil: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
