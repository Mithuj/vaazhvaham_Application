"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Heart, BookOpen, Users, Clock, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

interface Event {
  id: number
  date: string
  event_heading_english: string
  event_heading_tamil: string
  event_english_paragraph: string
  event_tamil_paragraph: string
  event_gallery_code: string[]
}

interface News {
  id: number
  date: string
  news_heading_english: string
  news_heading_tamil: string
  news_english_paragraph: string
  news_tamil_paragraph: string
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [events, setEvents] = useState<Event[]>([])
  const [news, setNews] = useState<News[]>([])

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

  // Fetch latest 5 events from Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('eventmanagement')
          .select('id, date, event_heading_english, event_heading_tamil, event_english_paragraph, event_tamil_paragraph, event_gallery_code')
          .order('date', { ascending: false })
          .limit(5)

        if (error) {
          console.error('Error fetching events:', error)
          return
        }
        
        if (data) {
          console.log('Fetched events:', data)
          setEvents(data)
        }
      } catch (err) {
        console.error('Exception while fetching events:', err)
      }
    }

    fetchEvents()
  }, [])

  // Fetch latest 5 news from Supabase
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('newsmanagement')
          .select('id, date, news_heading_english, news_heading_tamil, news_english_paragraph, news_tamil_paragraph')
          .order('date', { ascending: false })
          .limit(5)

        if (error) {
          console.error('Error fetching news:', error)
          return
        }
        
        if (data) {
          console.log('Fetched news:', data)
          setNews(data)
        }
      } catch (err) {
        console.error('Exception while fetching news:', err)
      }
    }

    fetchNews()
  }, [])

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/HomeV.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 font-bold tracking-tight text-balance leading-tight text-white" style={{ fontSize: 'clamp(2rem, 8vw, 79px)' }}>
              {language === "en" ? "Vaazhvaham" : "வாழ்வகம்"}
            </h1>
            <p className="mb-6 sm:mb-8 leading-relaxed px-2" style={{ color: '#FBBF24', fontSize: '25px' }}>
              {language === "en"
                ? "Home for the visually handicapped"
                : "விழிப்புல வலுவிழந்தோர் இல்லம்"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Button size="default" className="w-full sm:w-auto shadow-lg text-sm sm:text-base" asChild>
                <Link href="/support">
                  <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {language === "en" ? "Give Today" : "இன்று கொடுக்க"}
                </Link>
              </Button>
              <Button size="default" variant="outline" className="w-full sm:w-auto text-sm sm:text-base hover:bg-[#1E3A8A] hover:text-white active:bg-[#1E3A8A] active:text-white" asChild>
                <Link href="/about">{language === "en" ? "Learn More" : "மேலும் அறிய"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision Section */}
      <section className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {/* Our Mission */}
            <div className="rounded-lg shadow-md p-6 sm:p-8 md:p-10">
              <h2 className="mb-4 sm:mb-5 text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a8a] text-center">
                {language === "en" ? "OUR MISSION" : "பணிக்கூற்று"}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                {language === "en"
                  ? "To prepare the visually handicapped to pave the way for living with good qualities using available resources to have equal opportunities and rights like others have by getting purity of mind and realizing themselves completely through education."
                  : "விழிப்புலவலுவிழந்தவர்கள், கல்வியின் ஊடாக உள்ளத் தெளிவு பெற்று முழுமையாகத் தம்மை அறிவதன் மூலமாக கிடைக்கக்கூடிய வளங்களைக் கொண்டு ஏனையவர்கள் யாவருக்கும் கிடைக்கும் அதே உரிமைகளையும் வாய்ப்புக்களையும் சமமாகப் பெற்று சிறந்த பண்புத்தரத்துடன் வாழ வழிசெய்தல்."}
              </p>
            </div>

            {/* Motto with Image */}
            <div 
              className="relative bg-cover bg-center rounded-lg shadow-md p-6 sm:p-8 md:p-10 flex items-center justify-center min-h-[200px] sm:min-h-[250px]"
              style={{
                backgroundImage: "url('/vallvaham.jpeg')",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 text-white text-center px-4">
                <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
                  {language === "en" ? "Motto" : "மகுட வாசகம்"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-medium drop-shadow-lg">
                  {language === "en" 
                    ? "Education is light. Education is path."
                    : "கல்வியே ஒளி கல்வியே வழி"}
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-[#1e3a8a] rounded-lg shadow-md p-6 sm:p-8 md:p-10 text-white">
              <h2 className="mb-4 sm:mb-5 text-xl sm:text-2xl md:text-3xl font-bold text-center">
                {language === "en" ? "OUR VISION" : "தூரநோக்கு"}
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                {language === "en"
                  ? "To empower the visually handicapped to develop the potential balanced personality with knowledge and efficiency for facing the challenging life through Education."
                  : "விழிப்புல வலுவிழந்தவர்களை கல்வியின் ஊடாக அறிவாற்றலும் செயற்திறனும் வாழ்வின் சவால்கள் அனைத்தையும் எதிர்கொள்ளக் கூடிய சமநிலை ஆளுமையும் மிக்கவர்களாக்குதல்."}
              </p>
            </div>

            {/* Contacts */}
            <div className="rounded-lg shadow-md p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center">
              <h2 className="mb-4 sm:mb-5 text-xl sm:text-2xl md:text-3xl font-bold text-[#1e3a8a] text-center">
                {language === "en" ? "Contacts" : "தொடர்பு கொள்ள"}
              </h2>
              <div className="space-y-2 sm:space-y-3 text-center">
                <p className="text-xs sm:text-sm md:text-base text-gray-800">
                  <span className="font-semibold">{language === "en" ? "E-mail :" : "மின்னஞ்சல் :"}</span>{" "}
                  <a href="mailto:vaazhvaham1988@gmail.com" className="text-[#1e3a8a] hover:underline">
                    vaazhvaham1988@gmail.com
                  </a>
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-800">
                  <span className="font-semibold">{language === "en" ? "Call To :" : "தொலைபேசி எண் :"}</span>{" "}
                  <a href="tel:021-224-0146" className="text-[#1e3a8a] hover:underline">
                    021-224-0146
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {language === "en" ? "Our Events" : "எங்கள்  நிகழ்வுகள்"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base px-4">
              {language === "en"
                ? "Join us for our upcoming events and celebrations"
                : "எங்கள் வரவிருக்கும் நிகழ்வுகள் மற்றும் கொண்டாட்டங்களில் எங்களுடன் சேருங்கள்"}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <style jsx>{`
              @keyframes scrollHorizontal {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll-horizontal {
                animation: scrollHorizontal 40s linear infinite;
              }
              .animate-scroll-horizontal:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="flex animate-scroll-horizontal" style={{ width: 'fit-content' }}>
              {/* Duplicate events for seamless loop */}
              {events.length > 0 ? (
                [...events, ...events].map((event, index) => (
                  <Card 
                    key={`event-${event.id}-${index}`} 
                    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] mx-2 sm:mx-3 transition-all hover:shadow-xl overflow-hidden flex flex-col"
                    style={{ minHeight: '380px', backgroundColor: '#edf0fb' }}
                  >
                    {/* Event Image */}
                    <div className="relative h-36 sm:h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                      {event.event_gallery_code && event.event_gallery_code.length > 0 ? (
                        <img 
                          src={`/api/images-to-show/${event.event_gallery_code[0]}`}
                          alt={language === "en" ? event.event_heading_english : event.event_heading_tamil}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <Calendar className="h-12 w-12 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg text-center leading-snug mb-2 sm:mb-3">
                        {language === "en" ? event.event_heading_english : event.event_heading_tamil}
                      </CardTitle>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center gap-2 text-xs sm:text-sm justify-center">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="text-xs sm:text-sm text-center line-clamp-3 px-1 sm:px-2">
                          {language === "en" 
                            ? (event.event_english_paragraph.substring(0, 120) + (event.event_english_paragraph.length > 120 ? '...' : ''))
                            : (event.event_tamil_paragraph.substring(0, 120) + (event.event_tamil_paragraph.length > 120 ? '...': ''))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3 sm:pb-4 flex justify-center">
                      <Link href={`/events/${event.id}`}>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm hover:bg-[#1E3A8A] hover:text-white active:bg-[#1E3A8A] active:text-white">
                          {language === "en" ? "View More" : "மேலும் பார்க்க"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="flex items-center justify-center w-full py-12 text-muted-foreground">
                  {language === "en" ? "Loading events..." : "நிகழ்வுகள் ஏற்றப்படுகின்றன..."}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/events">{language === "en" ? "View All Events" : "அனைத்து நிகழ்வுகளையும் காண்க"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {language === "en" ? "News" : "செய்திகள்"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base px-4">
              {language === "en"
                ? "Stay updated with our latest activities and announcements"
                : "எங்கள் சமீபத்திய செயல்பாடுகள் மற்றும் அறிவிப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்"}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <style jsx>{`
              @keyframes scrollNews {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll-news {
                animation: scrollNews 45s linear infinite;
              }
              .animate-scroll-news:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="flex animate-scroll-news" style={{ width: 'fit-content' }}>
              {/* Duplicate news for seamless loop */}
              {news.length > 0 ? (
                [...news, ...news].map((newsItem, index) => (
                  <Card 
                    key={`news-${newsItem.id}-${index}`} 
                    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] mx-2 sm:mx-3 transition-all hover:shadow-md overflow-hidden flex flex-col"
                    style={{ minHeight: '260px', backgroundColor: '#edf0fb' }}
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <CardDescription className="flex items-center gap-2 text-xs sm:text-sm mb-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{newsItem.date}</span>
                      </CardDescription>
                      <CardTitle className="text-base sm:text-lg md:text-xl leading-relaxed">
                        {language === "en" ? newsItem.news_heading_english : newsItem.news_heading_tamil}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col p-4 sm:p-6">
                      <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                        {language === "en" 
                          ? (newsItem.news_english_paragraph.substring(0, 150) + (newsItem.news_english_paragraph.length > 150 ? '...' : ''))
                          : (newsItem.news_tamil_paragraph.substring(0, 150) + (newsItem.news_tamil_paragraph.length > 150 ? '...' : ''))}
                      </p>
                      <Link href={`/news/${newsItem.id}`}>
                        <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm hover:bg-[#1E3A8A] hover:text-white active:bg-[#1E3A8A] active:text-white">
                          {language === "en" ? "View More" : "மேலும் பார்க்க"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="flex items-center justify-center w-full py-12 text-muted-foreground">
                  {language === "en" ? "Loading news..." : "செய்திகள் ஏற்றப்படுகின்றன..."}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/news">{language === "en" ? "View All News" : "அனைத்து செய்திகளையும் காண்க"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {language === "en" ? "Make a Difference Today" : "இன்று ஒரு வித்தியாசத்தை உருவாக்குங்கள்"}
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
            {language === "en"
              ? "Your support helps us provide education, care, and opportunities to those who need it most."
              : "உங்கள் ஆதரவு எங்களுக்கு கல்வி, கவனிப்பு மற்றும் வாய்ப்புக்களை மிகவும் தேவைப்படுபவர்களுக்கு வழங்க உதவுகிறது."}
          </p>
          <Button size="lg" variant="secondary" asChild className="shadow-lg bg-white hover:bg-white/90 text-primary">
            <Link href="/support">
              <Heart className="mr-2 h-5 w-5" />
              {language === "en" ? "Support Our Mission" : "எங்கள் பணியை ஆதரியுங்கள்"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
