"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabase"

type EventDetail = {
  id: number
  event_heading_english: string
  event_heading_tamil: string
  date: string
  event_english_paragraph: string
  event_tamil_paragraph: string
  event_gallery_code: string[]
}

export default function EventDetailPage() {
  const router = useRouter()
  const params = useParams()
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [event, setEvent] = useState<EventDetail | null>(null)
  const [loading, setLoading] = useState(true)

  // Format date from YYYY-MM-DD to YYYY.Month.DD
  const formatDate = (dateString: string) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    
    const [year, month, day] = dateString.split('-')
    const monthName = months[parseInt(month) - 1]
    return `${year}.${monthName}.${parseInt(day)}`
  }

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

  // Fetch specific event
  useEffect(() => {
    const fetchEvent = async () => {
      if (!params.id) return

      try {
        const { data, error } = await supabase
          .from('eventmanagement')
          .select('id, event_heading_english, event_heading_tamil, date, event_english_paragraph, event_tamil_paragraph, event_gallery_code')
          .eq('id', params.id)
          .single()

        if (error) {
          console.error('Error fetching event:', error)
        } else if (data) {
          setEvent(data)
        }
      } catch (error) {
        console.error('Error fetching event:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-muted-foreground">
              {language === "en" ? "Loading event..." : "நிகழ்வு ஏற்றுகிறது..."}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              {language === "en" ? "Event not found." : "நிகழ்வு கிடைக்கவில்லை."}
            </p>
            <Button onClick={() => router.push('/events')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back to Events" : "நிகழ்வுகளுக்குத் திரும்பு"}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section with Back Button */}
      <section className="py-8 md:py-12" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => router.push('/events')} 
            variant="ghost" 
            className="mb-4 text-white hover:text-white/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "en" ? "Back to Events" : "நிகழ்வுகளுக்குத் திரும்பு"}
          </Button>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden" style={{ backgroundColor: '#edf0fb' }}>
              <CardHeader className="space-y-4 pt-8">
                {/* Date */}
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <time className="text-sm font-medium">{formatDate(event.date)}</time>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-center">
                  {language === "en" ? event.event_heading_english : event.event_heading_tamil}
                </h1>
              </CardHeader>

              <CardContent className="pt-6 pb-12">
                {/* Full Paragraph */}
                <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-foreground whitespace-pre-line text-justify">
                    {language === "en" ? event.event_english_paragraph : event.event_tamil_paragraph}
                  </p>
                </div>

                {/* All Images */}
                {event.event_gallery_code && event.event_gallery_code.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                      {language === "en" ? "Event Gallery" : "நிகழ்வு படத்தொகுப்பு"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                      {event.event_gallery_code.map((filename, index) => (
                        <div key={index} className="relative aspect-video overflow-hidden rounded-lg w-full">
                          <img 
                            src={`/api/images-to-show/${filename}`}
                            alt={`${language === "en" ? event.event_heading_english : event.event_heading_tamil} - Image ${index + 1}`}
                            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/placeholder.svg'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Back Button at Bottom */}
            <div className="mt-8 text-center">
              <Button 
                onClick={() => router.push('/events')} 
                variant="outline"
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" ? "Back to All Events" : "அனைத்து நிகழ்வுகளுக்கும் திரும்பு"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
