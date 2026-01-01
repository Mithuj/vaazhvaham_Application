"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

type NewsItem = {
  id: string
  news_heading_english: string
  news_heading_tamil: string
  news_gallery_code: string
  date: string
  news_english_paragraph: string
  news_tamil_paragraph: string
  person_id: string
  person_type: string
}

export default function EditNewsPage() {
  const router = useRouter()
  const [showHeadingForm, setShowHeadingForm] = useState(false)
  const [showParagraphForm, setShowParagraphForm] = useState(false)
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [selectedNewsId, setSelectedNewsId] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  
  const [formData, setFormData] = useState({
    headingEnglish: "",
    headingTamil: "",
    image: null as File | null,
    existingImage: "",
    newsDate: "",
    paragraphEnglish: "",
    paragraphTamil: ""
  })

  // Fetch all news on component mount using supabase client (which uses .env)
  useEffect(() => {
    fetchAllNews()
  }, [])

  const fetchAllNews = async () => {
    try {
      const { data, error } = await supabase
        .from('newsmanagement')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching news:', error)
        setMessage({ type: 'error', text: 'Failed to load news items' })
      } else if (data) {
        setAllNews(data)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const handleNewsSelection = (newsId: string) => {
    setSelectedNewsId(newsId)
    setMessage(null)
    
    const selectedNews = allNews.find(n => n.id === newsId)
    
    if (selectedNews) {
      setFormData({
        headingEnglish: selectedNews.news_heading_english,
        headingTamil: selectedNews.news_heading_tamil,
        image: null,
        existingImage: selectedNews.news_gallery_code,
        newsDate: selectedNews.date,
        paragraphEnglish: selectedNews.news_english_paragraph,
        paragraphTamil: selectedNews.news_tamil_paragraph
      })
      setShowHeadingForm(true)
      setShowParagraphForm(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!selectedNewsId) {
      setMessage({ type: 'error', text: 'Please select a news item first' })
      setLoading(false)
      return
    }

    try {
      let imageFileName = formData.existingImage

      // If new image is uploaded, save it to public folder
      if (formData.image) {
        const formDataToSend = new FormData()
        formDataToSend.append('image', formData.image)
        
        const uploadResponse = await fetch('/api/upload-news-image', {
          method: 'POST',
          body: formDataToSend
        })
        
        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image')
        }
        
        const uploadResult = await uploadResponse.json()
        imageFileName = uploadResult.filename
      }

      // Update news data in newsmanagement table using supabase client
      const { error } = await supabase
        .from('newsmanagement')
        .update({
          news_heading_english: formData.headingEnglish,
          news_heading_tamil: formData.headingTamil,
          news_gallery_code: imageFileName,
          date: formData.newsDate,
          news_english_paragraph: formData.paragraphEnglish,
          news_tamil_paragraph: formData.paragraphTamil
        })
        .eq('id', selectedNewsId)

      if (error) {
        console.error('Database error:', error)
        setMessage({ type: 'error', text: `Error: ${error.message}` })
      } else {
        setMessage({ type: 'success', text: 'News updated successfully!' })
        await fetchAllNews()
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-background relative">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors z-10 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base hidden sm:inline">Back</span>
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-12 sm:mt-14 md:mt-16 px-4">
        Edit News
      </h1>

      {/* Message Display */}
      {message && (
        <div className={`w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
            {/* Choose the News Heading */}
            <div className="space-y-2 md:space-y-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Label htmlFor="chooseHeading" className="text-sm sm:text-base font-semibold text-purple-700">
                Choose the News Heading
              </Label>
              <Select value={selectedNewsId} onValueChange={handleNewsSelection}>
                <SelectTrigger id="chooseHeading" className="h-10 sm:h-11 md:h-12 text-sm sm:text-base bg-white">
                  <SelectValue placeholder="Select a news item to edit..." />
                </SelectTrigger>
                <SelectContent>
                  {allNews.length === 0 ? (
                    <SelectItem value="none" disabled>No news items found</SelectItem>
                  ) : (
                    allNews.map((news) => (
                      <SelectItem key={news.id} value={news.id}>
                        {news.news_heading_english}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Add Heading of News Button */}
            <div className="space-y-4 md:space-y-5">
              <Button
                type="button"
                variant={showHeadingForm ? "default" : "outline"}
                onClick={() => setShowHeadingForm(!showHeadingForm)}
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {showHeadingForm ? "Hide Heading Form" : "Add Heading of News"}
              </Button>

              {/* Heading Sub-form */}
              {showHeadingForm && (
                <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 bg-muted/50 border-2 animate-in slide-in-from-top-2">
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="headingEnglish" className="text-sm sm:text-base font-medium">
                      News Heading in English
                    </Label>
                    <Input
                      id="headingEnglish"
                      type="text"
                      placeholder="Enter news heading in English"
                      value={formData.headingEnglish}
                      onChange={(e) => setFormData({ ...formData, headingEnglish: e.target.value })}
                      className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="headingTamil" className="text-sm sm:text-base font-medium">
                      News Heading in Tamil
                    </Label>
                    <Input
                      id="headingTamil"
                      type="text"
                      placeholder="Enter news heading in Tamil"
                      value={formData.headingTamil}
                      onChange={(e) => setFormData({ ...formData, headingTamil: e.target.value })}
                      className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Add Image from Gallery */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="image" className="text-sm sm:text-base font-medium">
                Change Image (optional)
              </Label>
              {formData.existingImage && (
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Current: {formData.existingImage}
                </p>
              )}
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {formData.image && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-1">
                  ✓ New image selected: {formData.image.name}
                </p>
              )}
            </div>

            {/* Select News Date */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="newsDate" className="text-sm sm:text-base font-medium">
                Select the News Date
              </Label>
              <Input
                id="newsDate"
                type="date"
                value={formData.newsDate}
                onChange={(e) => setFormData({ ...formData, newsDate: e.target.value })}
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
            </div>

            {/* Add Paragraph Button */}
            <div className="space-y-4 md:space-y-5">
              <Button
                type="button"
                variant={showParagraphForm ? "default" : "outline"}
                onClick={() => setShowParagraphForm(!showParagraphForm)}
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {showParagraphForm ? "Hide Paragraph Form" : "Add the Paragraph"}
              </Button>

              {/* Paragraph Sub-form */}
              {showParagraphForm && (
                <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 bg-muted/50 border-2 animate-in slide-in-from-top-2">
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="paragraphEnglish" className="text-sm sm:text-base font-medium">
                      News Paragraph in English
                    </Label>
                    <Textarea
                      id="paragraphEnglish"
                      placeholder="Enter news paragraph in English"
                      value={formData.paragraphEnglish}
                      onChange={(e) => setFormData({ ...formData, paragraphEnglish: e.target.value })}
                      rows={5}
                      className="text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-y"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="paragraphTamil" className="text-sm sm:text-base font-medium">
                      News Paragraph in Tamil
                    </Label>
                    <Textarea
                      id="paragraphTamil"
                      placeholder="Enter news paragraph in Tamil"
                      value={formData.paragraphTamil}
                      onChange={(e) => setFormData({ ...formData, paragraphTamil: e.target.value })}
                      rows={5}
                      className="text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-y"
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6 md:pt-8">
              <Button 
                type="submit" 
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                disabled={loading || !selectedNewsId}
              >
                {loading ? 'Updating...' : 'Update News'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

