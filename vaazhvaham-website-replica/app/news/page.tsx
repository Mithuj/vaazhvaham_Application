"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

type NewsItem = {
  id: number
  date: string
  news_heading_english: string
  news_heading_tamil: string
  news_english_paragraph: string
  news_tamil_paragraph: string
  news_gallery_code: string | null
}

export default function NewsPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
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

  // Fetch news from Supabase
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('newsmanagement')
          .select('id, date, news_heading_english, news_heading_tamil, news_english_paragraph, news_tamil_paragraph, news_gallery_code')
          .order('date', { ascending: false })

        if (error) {
          console.error('Error fetching news:', error)
        } else if (data) {
          setNewsItems(data)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Function to truncate paragraph to first 150 characters
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "News" : "செய்திகள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Stay updated with our latest activities and announcements"
                : "எங்கள் சமீபத்திய செயல்பாடுகள் மற்றும் அறிவிப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "en" ? "Loading news..." : "செய்திகள் ஏற்றுகிறது..."}
              </p>
            </div>
          ) : newsItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "en" ? "No news available yet." : "இன்னும் செய்திகள் இல்லை."}
              </p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((news) => (
                <Card key={news.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {news.news_gallery_code ? (
                      <img 
                        src={`/api/images-to-show/${news.news_gallery_code}`}
                        alt={language === "en" ? news.news_heading_english : news.news_heading_tamil}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/placeholder.svg'
                        }}
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-muted">
                        <span className="text-muted-foreground">
                          {language === "en" ? "No image" : "படம் இல்லை"}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </CardDescription>
                    <CardTitle className="text-xl leading-relaxed">
                      {language === "en" ? news.news_heading_english : news.news_heading_tamil}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {language === "en" 
                        ? truncateText(news.news_english_paragraph) 
                        : truncateText(news.news_tamil_paragraph)}
                    </p>
                    <Link href={`/news/${news.id}`} className="text-sm font-medium text-primary hover:underline">
                      {language === "en" ? "Read more →" : "மேலும் வாசிக்க →"}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
