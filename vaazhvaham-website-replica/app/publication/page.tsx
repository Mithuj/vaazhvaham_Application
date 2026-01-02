"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

type Publication = {
  id: number
  publication_heading_english: string
  publication_heading_tamil: string
  year: number
  publication_gallery_code: string | null
  pdf_code: string | null
}

export default function PublicationPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [publications, setPublications] = useState<Publication[]>([])
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

  // Fetch publications from Supabase
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const { data, error } = await supabase
          .from('publicationmanagement')
          .select('id, publication_heading_english, publication_heading_tamil, year, publication_gallery_code, pdf_code')
          .order('year', { ascending: false })

        if (error) {
          console.error('Error fetching publications:', error)
        } else if (data) {
          setPublications(data)
        }
      } catch (error) {
        console.error('Error fetching publications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPublications()
  }, [])

  const handleView = (pdfCode: string | null) => {
    if (!pdfCode) {
      alert(language === "en" ? "PDF not available" : "PDF கிடைக்கவில்லை")
      return
    }
    // Open PDF in new tab
    window.open(`/api/images-to-show/${pdfCode}`, '_blank')
  }

  const handleDownload = (pdfCode: string | null, heading: string) => {
    if (!pdfCode) {
      alert(language === "en" ? "PDF not available" : "PDF கிடைக்கவில்லை")
      return
    }
    // Create download link
    const link = document.createElement('a')
    link.href = `/api/images-to-show/${pdfCode}`
    link.download = pdfCode
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Publications" : "வெளியீடுகள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Access our reports, newsletters, and educational materials"
                : "எங்கள் அறிக்கைகள், செய்திமடல்கள் மற்றும் கல்விப் பொருட்களை அணுகவும்"}
            </p>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "en" ? "Loading publications..." : "வெளியீடுகள் ஏற்றுகிறது..."}
              </p>
            </div>
          ) : publications.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "en" ? "No publications available yet." : "இன்னும் வெளியீடுகள் இல்லை."}
              </p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((publication) => (
                <Card key={publication.id} className="flex flex-col transition-shadow hover:shadow-md overflow-hidden">
                  {/* Publication Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {publication.publication_gallery_code ? (
                      <img 
                        src={`/api/images-to-show/${publication.publication_gallery_code}`}
                        alt={language === "en" ? publication.publication_heading_english : publication.publication_heading_tamil}
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
                    {/* Year Badge */}
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                        {publication.year}
                      </span>
                    </div>

                    {/* Heading */}
                    <CardTitle className="text-xl leading-relaxed">
                      {language === "en" 
                        ? publication.publication_heading_english 
                        : publication.publication_heading_tamil}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-end">
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4">
                      <Button 
                        onClick={() => handleView(publication.pdf_code)}
                        className="flex-1"
                        variant="default"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        {language === "en" ? "View" : "காண்க"}
                      </Button>
                      <Button 
                        onClick={() => handleDownload(
                          publication.pdf_code,
                          language === "en" 
                            ? publication.publication_heading_english 
                            : publication.publication_heading_tamil
                        )}
                        variant="outline"
                        size="icon"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
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
