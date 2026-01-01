"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabase"

type NewsDetail = {
  id: number
  date: string
  news_heading_english: string
  news_heading_tamil: string
  news_english_paragraph: string
  news_tamil_paragraph: string
  news_gallery_code: string | null
}

export default function NewsDetailPage() {
  const router = useRouter()
  const params = useParams()
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [news, setNews] = useState<NewsDetail | null>(null)
  const [loading, setLoading] = useState(true)

  // Get language from sessionStorage
  useEffect(() => {
    const storedLanguage = sessionStorage.getItem('language')
    if (storedLanguage === 'ta' || storedLanguage === 'en') {
      setLanguage(storedLanguage)
    }

    // Listen for language changes
    const handleStorageChange = () => {
      const updatedLanguage = sessionStorage.getItem('language')
      if (updatedLanguage === 'ta' || updatedLanguage === 'en') {
        setLanguage(updatedLanguage)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Fetch specific news item
  useEffect(() => {
    const fetchNews = async () => {
      if (!params.id) return

      try {
        const { data, error } = await supabase
          .from('newsmanagement')
          .select('id, date, news_heading_english, news_heading_tamil, news_english_paragraph, news_tamil_paragraph, news_gallery_code')
          .eq('id', params.id)
          .single()

        if (error) {
          console.error('Error fetching news:', error)
        } else if (data) {
          setNews(data)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-muted-foreground">
              {language === "en" ? "Loading news..." : "செய்தி ஏற்றுகிறது..."}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!news) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              {language === "en" ? "News not found." : "செய்தி கிடைக்கவில்லை."}
            </p>
            <Button onClick={() => router.push('/news')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back to News" : "செய்திகளுக்குத் திரும்பு"}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section with Back Button */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => router.push('/news')} 
            variant="ghost" 
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "en" ? "Back to News" : "செய்திகளுக்குத் திரும்பு"}
          </Button>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden">
              {/* News Image */}
              {news.news_gallery_code && (
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-muted">
                  <img 
                    src={`/api/images-to-show/${news.news_gallery_code}`}
                    alt={language === "en" ? news.news_heading_english : news.news_heading_tamil}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/placeholder.svg'
                    }}
                  />
                </div>
              )}

              <CardHeader className="space-y-4 pt-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <time className="text-sm font-medium">{news.date}</time>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  {language === "en" ? news.news_heading_english : news.news_heading_tamil}
                </h1>
              </CardHeader>

              <CardContent className="pt-6 pb-12">
                {/* Full Paragraph */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-base md:text-lg leading-relaxed text-foreground whitespace-pre-line">
                    {language === "en" ? news.news_english_paragraph : news.news_tamil_paragraph}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Back Button at Bottom */}
            <div className="mt-8 text-center">
              <Button 
                onClick={() => router.push('/news')} 
                variant="outline"
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" ? "Back to All News" : "அனைத்து செய்திகளுக்கும் திரும்பு"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
