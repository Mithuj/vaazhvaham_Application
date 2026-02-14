"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

type Event = {
  id: number
  event_heading_english: string
  event_heading_tamil: string
  date: string
  event_english_paragraph: string
  event_tamil_paragraph: string
  event_gallery_code: string[]
}

export default function EventsPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [events, setEvents] = useState<Event[]>([])
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

  // Fetch events from Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('eventmanagement')
          .select('id, event_heading_english, event_heading_tamil, date, event_english_paragraph, event_tamil_paragraph, event_gallery_code')
          .order('date', { ascending: false })

        if (error) {
          console.error('Error fetching events:', error)
        } else if (data) {
          setEvents(data)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Function to truncate paragraph to first 150 characters
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-white">
              {language === "en" ? "Events" : "நிகழ்வுகள்"}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              {language === "en"
                ? "Stay informed about our upcoming and past events"
                : "எங்கள் வரவிருக்கும் மற்றும் கடந்த நிகழ்வுகள் பற்றி அறியவும்"}
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "en" ? "Loading events..." : "நிகழ்வுகள் ஏற்றுகிறது..."}
              </p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "en" ? "No events available yet." : "இன்னும் நிகழ்வுகள் இல்லை."}
              </p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md" style={{ backgroundColor: '#edf0fb' }}>
                  {/* Event Image - First image from array */}
                  <div className="relative h-48 w-full overflow-hidden">
                    {event.event_gallery_code && event.event_gallery_code.length > 0 ? (
                      <img 
                        src={`/api/images-to-show/${event.event_gallery_code[0]}`}
                        alt={language === "en" ? event.event_heading_english : event.event_heading_tamil}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/placeholder.svg'
                        }}
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-muted-foreground">
                          {language === "en" ? "No image" : "படம் இல்லை"}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>

                    {/* Heading */}
                    <CardTitle className="text-xl leading-relaxed">
                      {language === "en" ? event.event_heading_english : event.event_heading_tamil}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    {/* Truncated Paragraph */}
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1 text-justify">
                      {language === "en" 
                        ? truncateText(event.event_english_paragraph) 
                        : truncateText(event.event_tamil_paragraph)}
                    </p>

                    {/* View More Button */}
                    <Link href={`/events/${event.id}`}>
                      <Button variant="outline" className="w-full hover:bg-[#1E3A8A] hover:text-white active:bg-[#1E3A8A] active:text-white">
                        {language === "en" ? "View More →" : "மேலும் காண்க →"}
                      </Button>
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
