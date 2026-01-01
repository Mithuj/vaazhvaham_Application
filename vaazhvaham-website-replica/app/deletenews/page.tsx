"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

type NewsItem = {
  id: string
  news_heading_english: string
  news_gallery_code: string
}

export default function DeleteNewsPage() {
  const router = useRouter()
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [selectedNewsId, setSelectedNewsId] = useState<string>("")
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  // Fetch all news on component mount using supabase client (which uses .env)
  useEffect(() => {
    fetchAllNews()
  }, [])

  const fetchAllNews = async () => {
    try {
      const { data, error } = await supabase
        .from('newsmanagement')
        .select('id, news_heading_english, news_gallery_code')
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
    setConfirmDelete(false)
    
    const news = allNews.find(n => n.id === newsId)
    setSelectedNews(news || null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedNewsId || !selectedNews) {
      setMessage({ type: 'error', text: 'Please select a news item first' })
      return
    }

    if (!confirmDelete) {
      setMessage({ type: 'error', text: 'Please confirm deletion by checking the box' })
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      // Delete from database using supabase client
      const { error: dbError } = await supabase
        .from('newsmanagement')
        .delete()
        .eq('id', selectedNewsId)

      if (dbError) {
        console.error('Database error:', dbError)
        setMessage({ type: 'error', text: `Error: ${dbError.message}` })
        setLoading(false)
        return
      }

      // Delete image file from public folder if it exists
      if (selectedNews.news_gallery_code) {
        try {
          const deleteResponse = await fetch('/api/delete-news-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: selectedNews.news_gallery_code })
          })

          if (!deleteResponse.ok) {
            console.warn('Failed to delete image file, but database record was deleted')
          }
        } catch (imageError) {
          console.warn('Error deleting image:', imageError)
        }
      }

      setMessage({ type: 'success', text: 'News deleted successfully!' })
      setSelectedNewsId("")
      setSelectedNews(null)
      setConfirmDelete(false)
      await fetchAllNews()
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
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

      {/* Message Display */}
      {message && (
        <div className={`w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <Card className="p-6 sm:p-8 md:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
            {/* Choose the News Heading */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="newsHeading" className="text-sm sm:text-base font-medium">
                Choose the News Heading
              </Label>
              <Select value={selectedNewsId} onValueChange={handleNewsSelection}>
                <SelectTrigger id="newsHeading" className="h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                  <SelectValue placeholder="Select a news item to delete..." />
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

            {/* Delete Confirmation Checkbox */}
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <Checkbox
                id="confirmDelete"
                checked={confirmDelete}
                onCheckedChange={(checked) => setConfirmDelete(checked as boolean)}
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
                disabled={loading || !selectedNewsId || !confirmDelete}
              >
                {loading ? 'Deleting...' : 'Delete News'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

