"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

type GalleryImage = {
  id: number
  src: string
  alt: string
  filename: string
}

export default function GalleryPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
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

  // Fetch images from images-to-show folder
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/get-gallery-images')
        const data = await response.json()
        
        if (data.images && Array.isArray(data.images)) {
          const formattedImages: GalleryImage[] = data.images.map((filename: string, index: number) => ({
            id: index + 1,
            src: `/api/images-to-show/${filename}`,
            alt: language === "en" ? `Gallery image ${index + 1}` : `படத்தொகுப்பு படம் ${index + 1}`,
            filename: filename
          }))
          setGalleryImages(formattedImages)
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [language])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Gallery" : "நிகழ்வுத் தொகுப்பு"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Explore moments from our community, events, and daily life at Vaazhvaham"
                : "எங்கள் சமூகம், நிகழ்வுகள் மற்றும் அன்றாட வாழ்க்கையின் தருணங்களை ஆராயுங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {language === "en" ? "Loading gallery..." : "படத்தொகுப்பு ஏற்றுகிறது..."}
                </p>
              </div>
            ) : galleryImages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {language === "en" ? "No images available in the gallery yet." : "படத்தொகுப்பில் இன்னும் படங்கள் இல்லை."}
                </p>
              </div>
            ) : (
              <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-[1.02] shadow-md hover:shadow-xl"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <div className="relative w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // Handle image load error
                          const target = e.target as HTMLImageElement
                          target.src = '/placeholder.svg'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0">
          <DialogTitle className="sr-only">
            {selectedImage !== null 
              ? galleryImages.find((img) => img.id === selectedImage)?.alt 
              : language === "en" ? "Gallery Image" : "படத்தொகுப்பு படம்"}
          </DialogTitle>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage !== null && (
            <div className="relative aspect-video w-full">
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
                alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
