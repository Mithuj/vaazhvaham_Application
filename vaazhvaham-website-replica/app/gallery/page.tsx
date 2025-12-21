"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [language] = useState<"en" | "ta">("en")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/gallery-students-learning-braille.jpg",
      alt: language === "en" ? "Students learning Braille" : "பிரெய்லி கற்கும் மாணவர்கள்",
      height: "tall",
    },
    {
      id: 2,
      src: "/gallery-vocational-training.jpg",
      alt: language === "en" ? "Vocational training session" : "தொழிற்பயிற்சி அமர்வு",
      height: "short",
    },
    {
      id: 3,
      src: "/gallery-cultural-performance.jpg",
      alt: language === "en" ? "Cultural performance" : "கலாச்சார நிகழ்ச்சி",
      height: "medium",
    },
    {
      id: 4,
      src: "/gallery-students-with-staff.jpg",
      alt: language === "en" ? "Students with staff members" : "ஊழியர்களுடன் மாணவர்கள்",
      height: "short",
    },
    {
      id: 5,
      src: "/gallery-computer-training.jpg",
      alt: language === "en" ? "Computer training class" : "கணினி பயிற்சி வகுப்பு",
      height: "tall",
    },
    {
      id: 6,
      src: "/gallery-sports-activity.jpg",
      alt: language === "en" ? "Sports and recreational activities" : "விளையாட்டு மற்றும் பொழுதுபோக்கு",
      height: "medium",
    },
    {
      id: 7,
      src: "/gallery-music-class.jpg",
      alt: language === "en" ? "Music class" : "இசை வகுப்பு",
      height: "short",
    },
    {
      id: 8,
      src: "/gallery-independence-day.jpg",
      alt: language === "en" ? "Independence Day celebration" : "சுதந்திர தினக் கொண்டாட்டம்",
      height: "tall",
    },
    {
      id: 9,
      src: "/gallery-facility-exterior.jpg",
      alt: language === "en" ? "Vaazhvaham facility" : "வாழ்வஹம் வசதி",
      height: "medium",
    },
    {
      id: 10,
      src: "/gallery-handicraft-workshop.jpg",
      alt: language === "en" ? "Handicraft workshop" : "கைவினைப் பட்டறை",
      height: "short",
    },
    {
      id: 11,
      src: "/gallery-dining-area.jpg",
      alt: language === "en" ? "Community dining area" : "சமூக உணவு பகுதி",
      height: "medium",
    },
    {
      id: 12,
      src: "/gallery-award-ceremony.jpg",
      alt: language === "en" ? "Award ceremony" : "விருது விழா",
      height: "tall",
    },
  ]

  const heightClasses = {
    short: "row-span-1",
    medium: "row-span-2",
    tall: "row-span-3",
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Gallery" : "படத்தொகுப்பு"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Explore moments from our community, events, and daily life at Vaazhvaham"
                : "எங்கள் சமூகம், நிகழ்வுகள் மற்றும் வாழ்வஹத்தில் அன்றாட வாழ்க்கையிலிருந்து தருணங்களை ஆராயுங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative w-full">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0">
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
